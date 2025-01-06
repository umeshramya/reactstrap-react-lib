// import React, { ReactElement } from "react";
// import Link from "next/link";
// // import { FaHandPointRight } from "react-icons/fa";

// interface TableCellLinkProps {
//   value: any;
//   link: string;
//   newTab?:boolean
// }

// export default function LinkP({
//   value,
//   link,
//   newTab
// }: TableCellLinkProps): ReactElement {
//   return (
//     <>
//       <Link href={link} target={newTab ? "_blank" : undefined}>
//         <span style={{ color: "blue", cursor: "pointer", margin: "1rem" }}>
//           &#128073;
//           {` ${value}`}
//         </span>
//       </Link>
//     </>
//   );
// }


import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";

interface TableCellLinkProps {
  value: any;
  link: string;
  newTab?: boolean;
}

export default function LinkP({
  value,
  link,
  newTab,
}: TableCellLinkProps): ReactElement {
  const [isRotating, setIsRotating] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!newTab) {
      e.preventDefault(); // Prevent default navigation
      setIsRotating(true);
  
      router
        .push(link)
        .then(() => setTimeout(() => setIsRotating(false), 5000)) // Stop rotation on success
        .catch(() => setIsRotating(false)); // Stop rotation on error
    } else {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // Stop rotation for new tab
    }
  };
  


  return (
    <Link
      href={link}
      target={newTab ? "_blank" : undefined}
      onClick={handleClick}
    >
      <span
        style={{
          color: "blue",
          cursor: "pointer",
          margin: "1rem",
          display: "inline-flex", // Use inline-flex to separate emoji and text
          alignItems: "center",
        }}
      >
       &#128073;
       <Spinner     color="primary"
          size="sm"
          type="grow"
          hidden ={!isRotating}
          >
          {""}
        </Spinner>

        {` ${value}`}

      </span>
    </Link>
  );
}

