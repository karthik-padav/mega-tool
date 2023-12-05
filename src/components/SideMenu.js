"use client";
import { useState } from "react";
// import { RightArrow, RightDown } from "src/icons";

export default function SideMenu({ webData = [], Link, webPageCode }) {
  console.log(webData, "webData1232312");
  // return null;
  const [activeMenu, setActiveMenu] = useState(webPageCode);
  function toggleMenu(item) {
    const subItem = item?.items || [];
    const hasSubItem = subItem.length > 0;
    if (hasSubItem) {
      setActiveMenu(activeMenu === item.id ? null : item.id);
    }
  }

  return (
    <>
      <div className="p-6">
        <h1 className="text-3xl">Mega Tool</h1>
      </div>
      <ul className="pl-6 py-1">
        {webData.map((item) => {
          const subItem = item?.items || [];
          const hasSubItem = subItem.length > 0;
          return (
            <li key={item.id} className="py-1">
              <p
                className={`rounded-r-md hover:border-cyan-500 hover:bg-gray-100 flex justify-between p-2 items-center cursor-pointer border-l-2 ${
                  activeMenu === item.id
                    ? "border-cyan-500"
                    : "border-transparent"
                }`}
                onClick={() => toggleMenu(item)}
              >
                {hasSubItem ? (
                  <>
                    {item.title}
                    {/* {activeMenu === item.id ? (
                      <RightDown className="h-6 w-6 text-cyan-500" />
                    ) : (
                      <RightArrow className="h-6 w-6 text-cyan-500" />
                    )} */}
                  </>
                ) : (
                  <Link href={item.href || "/"}>{item.title}</Link>
                )}
              </p>
              {hasSubItem && activeMenu === item.id && (
                <ul className="pl-2 text-gray-500">
                  {subItem.map((subItem) => (
                    <li className="py-1" key={subItem.id}>
                      <Link href={subItem.href || "/"}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}
