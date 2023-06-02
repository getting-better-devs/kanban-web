import { Board } from "./types";

export default function Board({ params }: Board) {
  return (
    <div>
      <h1>Board</h1>
      <p>{params.id}</p>
    </div>
  );
}
