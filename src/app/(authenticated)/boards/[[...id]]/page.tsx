import { Board } from "./types";

export default function Board({ params }: Board) {
  return (
    <div className="grid place-items-center h-full">
      <div>
        <p className="text-theme-grey-900 text-lg">
          This board is empty. Create a new column to get started.
        </p>
        <p className="text-sm text-center mt-2">Board ID: {params.id}</p>
      </div>
    </div>
  );
}
