import { useRef } from "react";

const Sidebar = () => {
  // 나중에 phind 검색한거 보고 바로 개발ㄱㄱ
  const sidebarRef = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <aside className="w-full sm:w-1/3 md:w-1/4 px-2 rounded-xl bg-white mx-auto">
      <div className="sticky top-0 p-4 w-full">
        <ul className="flex flex-col overflow-hidden">
          <li>sidebar</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
