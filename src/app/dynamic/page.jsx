import Link from "next/link";
import React from "react";

const Hne = () => {
  const arr = [
    {
      id: "01",
      category: "t-Shart",
      title: "hello world",
      description: "loraem loreanm koean lorean loran",
    },
    {
      id: "02",
      category: "pant",
      title: "Every world",
      description:
        "loraem loreanm koean lorean loran loraem loreanm koean lorean loran",
    },
  ];
  return (
    <div>
      <ul>
        {arr.map((item) => (
          <div className="">
            <li key={item.id}>
              <Link href={`/dynamic/${item.category}`}>{item.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Hne;
