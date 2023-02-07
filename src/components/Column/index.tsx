import { ColumnProps } from './types'
import Card from 'components/Card';

const Column = ({ data, listIndex }: ColumnProps) => {
    return (
        <article className="w-1/5">
            <header>
                <h2 className="text-muted">{data.title}</h2>
            </header>
            <ul className="flex flex-col gap-4 p-2 rounded-lg">
                {
                    data.cards[0].id > 0 ? data.cards.map((card) => (
                        <Card
                            key={card?.id}
                            listIndex={listIndex}
                            card={card}
                        />
                    ))
                        :
                        <Card card={data.cards[0]} listIndex={listIndex} />
                }
            </ul>
        </article>
    )
}

export default Column;