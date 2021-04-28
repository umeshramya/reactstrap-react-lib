import React, {  ReactElement, useEffect, useState} from 'react'
import {Table, Row, Col, Input} from "reactstrap"
import {Props, column} from "./index"





export default function TableCompenent({columns, data}: Props):ReactElement{


    const [stData, setstData] = useState([])
    useEffect(() => {
        setstData(data);
        return () => {}
    }, [data])


    const TD = (row:any, col:column)=>{
            let ret:any;
            let value = row[col.accessor];
            if(col.Cell){
                ret=col.Cell({value})
            }else{
            ret = value
            }
            return ret
            
    }


    const filterHandle =(e:any, accessor:string)=>{
            let tempData = stData.filter(o=>{
                
            })
    }


    return (
        <>  

            <Table hover responsive bordered>
                <thead>
                    <tr>
                        {
                           columns.map((col, index)=>{
                               return(
                                   <th key={index}>
                                       <Row>
                                           <Col>
                                           <strong>{col.Header}</strong>
                                           </Col>
                                       </Row>
                                       {
                                           col.filter ? 
                                           <Row>
                                               <Col>
                                                 <Input type="text" onChange={(e)=>filterHandle(e, col.accessor)} />
                                               </Col>
                                           </Row> : ""
                                       }
                                        
                                   </th>
                               )
                           })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        stData.map((row, index)=>{
                            return(
                                <tr key={index}>
                                    {
                                        columns.map((col, rindex)=>{
                                            return(
                                                <td key={rindex}>
                                                   
                                                    {   
                                                        TD(row,col)
                                                       
                                                    }
                                                    
                                                </td>
                                            )
                                        })
                                       
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>

            </Table>

        </>
    )
}

