import { ColumnProps } from './types'
import Card from 'components/Card';

const Column = ({ data, listIndex }: ColumnProps) => {
    return (
        <article className="w-1/5">
            <header>
                <h2 className="text-muted">{data.title}</h2>
            </header>
            <ul className="flex flex-col gap-4">
                {data.cards.map((card, index) => (
                    <Card
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                    />
                ))}
            </ul>
        </article>
    )
}

export default Column;