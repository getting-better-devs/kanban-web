import { useDrag } from 'react-dnd';
import { CardProps } from './types';
import { useEffect } from 'react';

export default function Card({ data, index, listIndex }: CardProps) {
    const [{ isDragging }, drag] = useDrag(
        {
            type: 'CARD',
            item: { index: index, listIndex: listIndex },
            collect: monitor => ({
                isDragging: monitor.isDragging(),
            }),
        }
    )

    useEffect(() => {
        if (isDragging) {
            document.body.style.cursor = 'grab !important';
        }
    }, [isDragging])

    const cardClassName = isDragging ? "bg-transparent border-dashed border-2 border-muted p-4"
        : "p-4 bg-white rounded-lg cursor-grab";

    return (
        <li ref={drag} className={cardClassName}>
            <header className={isDragging ? "opacity-0" : ""}>
                {/* {data.labels.map(() => "")} */}
            </header>
            <p className={isDragging ? "opacity-0" : ""}>{data.content}</p>
            {data.user && <img className={`w-8 ${isDragging ? "opacity-0" : ""}`} src={data.user} alt="" />}
        </li>
    );
}