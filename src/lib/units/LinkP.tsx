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
        .then(() => setIsRotating(false)) // Stop rotation on success
        .catch(() => setIsRotating(false)); // Stop rotation on error
    } else {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000); // Stop rotation for new tab
    }
  };
  

  // const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   if (!newTab) {
  //     e.preventDefault(); // Prevent default navigation
  //     setIsRotating(true);
  //     router.push(link).finally(() => setIsRotating(false)); // Stop rotation when navigation completes
  //   } else {
  //     setIsRotating(true);
  //     setTimeout(() => setIsRotating(false), 1000); // Stop rotation for new tab
  //   }
  // };

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
        <span
          style={{
            display: "inline-block", // Ensure the emoji is a block for rotation
            transition: "transform 0.3s",
            transform: isRotating ? "rotate(360deg)" : "none",
          }}
        >
          &#128073;
        </span>
        {` ${value}`}
      </span>
    </Link>
  );
}

