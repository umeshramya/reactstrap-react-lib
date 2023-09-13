import React, { ReactElement } from "react";
import Link from "next/link";
// import { FaHandPointRight } from "react-icons/fa";

interface TableCellLinkProps {
  value: any;
  link: string;
  newTab?:boolean
}

export default function LinkP({
  value,
  link,
  newTab
}: TableCellLinkProps): ReactElement {
  return (
    <>
      <Link href={link} target={newTab ? "_blank" : undefined}>
        <span style={{ color: "blue", cursor: "pointer", margin: "1rem" }}>
          &#128073;
          {` ${value}`}
        </span>
      </Link>
    </>
  );
}
