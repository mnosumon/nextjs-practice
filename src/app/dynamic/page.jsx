import Link from "next/link";
import React from "react";

const Dn = () => {
  const arr = [
    {
      id: "01",
      title: "hello world",
      description: "loraem loreanm koean lorean loran",
    },
    {
      id: "02",
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
              <Link href={`/about/${item.id}`}>{item.title}</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Dn;
