import React, { Component } from 'react'
import SectionPanel,{PanelProps, sectionEach, sectionElements} from "./SectionPanel"
import {Row, Col } from "reactstrap"
import { StyleHTMLAttributes } from 'react'


interface Props extends PanelProps {
    Main:Component;
    
}
interface State {
    
}

export default class Sidebar extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
            <Row>
            {/* side bar */}
            <Col sm={12} lg={3} style={Styles.sidebar} >

            </Col>
            {/* /Area for horizontal bar and main */}
            <Col sm={12} lg={9}>
                <Row>
                    {/* Horizontal bar */}
                    <Col sm={12} style={Styles.menubar}>
                    
                    </Col>
                </Row>
                <Row>
                    {/* Main area */}
                    <Col sm={12}>
                        <SectionPanel {...this.props}/>
                        {this.props.Main}
                    </Col>
                </Row>
            
            </Col>
                
            </Row>

            </>
        )
    }
}

let  Styles = {
     menubar : {
        backgroundColor:"#060b26",
        color:  "#f5f5f5",
        height: "60px",
        marginBottom: "10px",
        padding:"8px",
    },
    
    
    sidebar : {
        backgroundColor: "#060b26",
        color: "#f5f5f5",
        height: "100vh",
    },
    
    sidebarUl :{
        /* padding-top: 50px; */
        paddingLeft: "0px",
        width: "100%"
    
    },
    
    sidebarLi : {
        listStyle :"none",
        height:  "40px",
        width: "100%",
        paddingLeft: "10px",
        paddingTop: "10px",
        "&:hover" : {
                backgroundColor: "#1a83ff",
                cursor: "pointer",
            }
    },
    
    sidebarLink :{
        width: "100%",
    },
    

    
    // .logout{
    //     text-align: center;
    // }
    // .logout:hover {
    //     cursor: pointer;
    // }
    

}


