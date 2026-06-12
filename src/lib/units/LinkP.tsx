import React, { ReactElement, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Spinner } from "reactstrap";

interface TableCellLinkProps {
  value: any;
  link: string;
  newTab?: boolean;
}

const linkStyle: React.CSSProperties = {
  color: "inherit",
  cursor: "pointer",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
};

const fallbackIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0d6efd"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function LinkP({
  value,
  link,
  newTab,
}: TableCellLinkProps): ReactElement {
  const [isRotating, setIsRotating] = useState(false);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!newTab) {
      e.preventDefault();
      setIsRotating(true);

      router
        .push(link)
        .then(() => setTimeout(() => setIsRotating(false), 5000))
        .catch(() => setIsRotating(false));
    } else {
      setIsRotating(true);
      setTimeout(() => setIsRotating(false), 1000);
    }
  };

  return (
    <Link
      href={link}
      target={newTab ? "_blank" : undefined}
      onClick={handleClick}
      style={linkStyle}
    >
      <Spinner
        color="primary"
        size="sm"
        type="grow"
        hidden={!isRotating}
      >
        {""}
      </Spinner>
      {value || fallbackIcon}
    </Link>
  );
}
