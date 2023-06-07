import { Column } from "@/components/Layout/Board/Column";
import { Task } from "@/components/Layout/Board/Task";
import { randomUUID } from "crypto";

import { Board } from "./types";

export default function Board() {
  const isEmpty = false;

  if (isEmpty) {
    return <EmptyBoard />;
  }

  const columns = [
    {
      id: randomUUID(),
      title: "To do",
      tasks: [
        {
          id: randomUUID(),
          description:
            "Create paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },
      ],
    },
    {
      id: randomUUID(),
      title: "Doing",
      tasks: [
        {
          id: randomUUID(),
          description:
            "Create paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description:
            "Create paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },
      ],
    },
    {
      id: randomUUID(),
      title: "Done",
      tasks: [
        {
          id: randomUUID(),
          description:
            "Create paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },

        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },
      ],
    },
    {
      id: randomUUID(),
      title: "Improvements",
      tasks: [
        {
          id: randomUUID(),
          description:
            "Create paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customersCreate paper prototypes and conduct 10 usability tests with potential customers",
          subtasks: 2,
        },
        {
          id: randomUUID(),
          description: "Design settings and search pages",
          subtasks: 2,
        },
      ],
    },
  ];

  return (
    <div className="h-full py-8 px-6 overflow-x-auto">
      <ul className="flex space-x-6">
        {columns.map(({ id, title, tasks }) => (
          <Column key={id} title={title} tasksLength={tasks.length}>
            {tasks.map(({ description, subtasks }, index) => (
              <Task key={index} description={description} subtasks={subtasks} />
            ))}
          </Column>
        ))}
      </ul>
    </div>
  );
}

const EmptyBoard = () => {
  return (
    <div className="grid place-items-center h-[calc(100vh-96px)]">
      <div>
        <p className="text-theme-grey-900 text-lg">
          This board is empty. Create a new column to get started.
        </p>
      </div>
    </div>
  );
};
