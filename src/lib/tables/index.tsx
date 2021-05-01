import React, { ReactElement, useState, useEffect } from 'react'
import {Row, Col, FormGroup, Input} from "reactstrap"
import TableCompenent from "./Table"
import {Pagination, PaginationProps} from "./Pagination"

/**
 * This column of table whoose array has to be passed as defination of table by user
 */
 export interface column{
     /**
      * Column heading
      */
    Header:string;
    /**
     * key of object of data to be passed to table
     */
    accessor:string;
    /**
     * function component to be passed for display in the cell 
     */
    Cell ?:(value:any)=>ReactElement;
    /** sort thr column 
     * any and string treated as string
     * thids is function useful for sorting
    */

    dataType : "number" | "string" | "Date" | "boolean" | "any"

}



export interface Props {
    columns:column[];
    data:[];
    filter : "Global" | "Column" | "Both" | "None"
    sort :boolean;
    pagination ?: PaginationProps
}


export default function index({columns, data, filter = "Both", sort=true, pagination }: Props): ReactElement {
    const [search, setSearch] = useState("")
    const [stData, setstData] = useState<typeof data>([])

    useEffect(() => {
        setstData(data)
        return () => {}
    }, [data])

    const SerachHandle = (e:any)=>{
        let value = e.target.value;
        setSearch(value);
        //code here for filter
        let keys = columns.map(col=>col.accessor);
        let tempData =data.filter(o=>{
            let oString="";
            for (const key of keys){
                oString = `${oString},${o[key]}`  
            }
            if(oString.toLowerCase().search(value.trim().toString().toLowerCase()) >= 0){
                return o;
             }
        }) as []
        setstData(tempData)
    }

    return (
        <>  
            <Row>
                <Col sm={12} md={6}>
                    {
                        filter == "Global"  ||  filter == "Both" ? 
                        <FormGroup>
                            <Input type="text" value={search} onChange={(e)=>SerachHandle(e)} placeholder="Search" />
                        </FormGroup> : ""
                    }
                </Col>
                <Col sm={12} md={6}>
                    {/* Pagination code here */}
                    <Pagination 
                        pageFrom = {pagination ?.pageFrom}
                        pageNo = {pagination ?.pageNo}
                        firstPage = {pagination?.firstPage}
                        lastPage = {pagination?.lastPage}
                        nextPage = {pagination?.nextPage}
                        previousPage = {pagination?.previousPage}
                    />
                </Col>
            </Row>
            
            <TableCompenent
                data = {stData}
                columns= {columns}
                filter = {filter}
                sort = {sort}
                pagination = {pagination}
            />
        </>
    )
}

