import { BoardProps } from "./types";

const Board = ({ children, bgColor }: BoardProps) => {
    return (
        <section style={{ backgroundColor: bgColor }}>
            <div className="container mx-auto w-full px-4 flex gap-4">
                {children}
            </div>
        </section>
    )
}

export default Board;