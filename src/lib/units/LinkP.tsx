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
        <style>
        {`
            .table-link{  
              color : blue
            }
            .table-link:hover{
              cursor: pointer;
            }
        `}
        </style>

          <Link href={link}>
            <span className="table-link" >  
            <FaHandPointRight />{` ${value}`}
            </span>
          </Link>
      </>
          )
}
