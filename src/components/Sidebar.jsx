import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart_fill", to: "" },
    { title: "Press Release", src: "Chat", to: "press" },
    { title: "Profile", src: "User", gap: true, to: "profile" },
    { title: "Search", src: "Search", to: "search" },
    { title: "Blogs ", src: "Folder", gap: true, to: "blogs" },
    { title: "Setting", src: "Setting", to: "settings" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-grey origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            PRP
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-white text-gray text-sm items-center gap-x-4 
      ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-white"} `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
