import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="#">ababass</Link>
          </li>
          <li>
            <Link href="#">gabgass</Link>
          </li>
          <li>
            <Link href="#">dabgass</Link>
          </li>
          <li>
            <Link href="#">talgass</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
