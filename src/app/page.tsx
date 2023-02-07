"use client"
import Title from "components/Title";
import Board from "components/Board";
import Column from "components/Column";
import loadLists from "services/api";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import IColumn from "interfaces/IColumn";
import { useState } from "react";
import { useQuery } from "react-query";

const list = loadLists() as IColumn[];

export default function Page() {

  const { data } = useQuery(["board"], () => list)

  // function move(fromList, toList, from, to) {
  //   setLists(produce(lists, draft => {
  //     const dragged = draft[fromList].cards[from];

  //     draft[fromList].cards.splice(from, 1);
  //     draft[toList].cards.splice(to, 0, dragged);
  //   }))
  // }
  return (
    <DndProvider backend={HTML5Backend}>
      <Title color="#9e4d0b" label="Ola, mundo!" size="text-h2" weight="font-bold" isItalic={false} />
      <Board bgColor="#F2F2F2">
        {
          data?.map((list, index) =>
            <Column key={list.title} listIndex={index} data={list} />)
        }
      </Board>
    </DndProvider>
  );
}
