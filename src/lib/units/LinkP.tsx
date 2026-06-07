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
      {value}
    </Link>
  );
}
