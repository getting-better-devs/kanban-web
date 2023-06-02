import Image from "next/image";

import Logo from "../../../public/logo.svg";

export const Header = () => {
  return (
    <header className="bg-theme-dark-700 border-b-2 border-theme-dark-500 flex gap-6 items-center">
      <div className="border-r-2 border-theme-dark-500 px-6 py-8 block h-full">
        <Image src={Logo} alt="Kanban Logo" draggable={false} />
      </div>

      <h1 className="text-2xl font-bold">Platform Launch</h1>
    </header>
  );
};
