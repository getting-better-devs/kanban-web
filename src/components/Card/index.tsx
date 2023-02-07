import { XYCoord, useDrag, useDrop } from 'react-dnd';
import { CardProps } from './types';
import { useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import IColumn from 'interfaces/IColumn';
import ICard from 'interfaces/ICard';

interface ICardDrag {
    card: ICard, listIndex: number
}

export default function Card({ card, listIndex }: CardProps) {

    const queryClient = useQueryClient()
    const ref = useRef<HTMLLIElement>(null)

    let board: IColumn[] = queryClient.getQueryData(["board"]) as IColumn[];


    const moveCard = useMutation("moveCard", (data: IColumn[]) =>
        new Promise(() => {
            queryClient.fetchQuery(["board"], () => data)
        }))

    const [{ isDragging }, drag] = useDrag(
        () => ({
            type: 'CARD',
            item: { card, listIndex },
            collect: monitor => ({
                isDragging: monitor.isDragging(),
            }),
            canDrag: () => card.id > 0 ? true : false
        }),
        []
    )

    const [, drop] = useDrop(
        () => ({
            accept: 'CARD',
            drop: (item: ICardDrag) => {
                const fromList = item.listIndex
                const toList = listIndex
                const dragged = item.card
                const from = board[fromList].cards.findIndex(object => object.id == dragged.id)
                const target = card
                const to = board[toList].cards.findIndex(object => object.id == target.id)
                if (fromList != toList) {
                    board[fromList].cards.splice(from, 1);
                    // CASO A COLUNA ESTEJA VAZIA, AO DROPAR UM CARD, SERÁ REMOVIDO O PLACEHOLDER CARD
                    const deleteCount = board[toList].cards[to].id == 0 ? 1 : 0
                    board[toList].cards.splice(to, deleteCount, dragged);
                    if (board[fromList].cards.length == 0) {
                        board[fromList].cards.splice(from, 0, {
                            id: 0,
                            content: "",
                            labels: [],
                            user: ""
                        })
                    }
                } else {
                    board[toList].cards[to] = dragged
                    board[toList].cards[from] = target
                }
                moveCard.mutate(board)
            },
            hover: (item, monitor) => {
            },
        }),
        []
    )

    drag(drop(ref))

    let cardClassName: string;
    if (isDragging) {
        cardClassName = "bg-transparent border-dashed border-2 border-muted p-4"
    } else {
        if (card.id == 0) {
            cardClassName = `pt-4 pl-4 pr-4 pb-96 bg-muted rounded-lg opacity-10`
        } else {
            cardClassName = `p-4 bg-white rounded-lg cursor-grab`
        }
    }

    return (
        <li ref={ref} className={cardClassName}>
            <header className={isDragging ? "opacity-0" : ""}>
                {/* {data.labels.map(() => "")} */}
            </header>
            <p className={isDragging ? "opacity-0" : ""}>{card?.content}</p>
            {card?.user && <img className={`w-8 ${isDragging ? "opacity-0" : ""}`} src={card.user} alt="" />}
        </li>
    );
}