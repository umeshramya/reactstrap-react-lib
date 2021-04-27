import React, { ReactElement } from 'react'
import Link from "next/link"
import {FaHandPointRight} from "react-icons/fa"

interface TableCellLinkProps {
  value:any;
  link:string
}

export default function LinkP({value, link}: TableCellLinkProps): ReactElement {

  return (
      <>
          <Link href={link}>
            <span style={{color:"blue", cursor: "pointer"}} >  
            <FaHandPointRight />{` ${value}`}
            </span>
          </Link>
      </>
          )
}
