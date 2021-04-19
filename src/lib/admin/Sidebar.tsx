import React, { Component } from 'react'
import SectionPanel,{PanelProps, sectionEach} from "./SectionPanel"
import {Row, Col } from "reactstrap"
/** These are the items which will displayed insde side bar */
interface sidebarLink {
    /**name diplayed in the sidebar */
    name : string;
     /**react-icons as component */
    icon : Component;
    /**sectionpanel or link to be shown on click */
    path  :SectionPanel | string
}

interface Props extends PanelProps {
    /** Main compone nt to be displayed */
    Main:Component;
    /**orgnization name to be displayed above in sidebar */
    orgName ?: string;
    userName ?:string;
    
}
interface State {
    /**Title of panel toi be displayed */
    panelTitle : string,
    /** array of section ine the panel */
    section    :sectionEach[] | null;
}

export default class Sidebar extends Component<Props, State> {
    state = {
        panelTitle : "",
        section    : null,
    }

    render() {
        return (
            <>
            <Row>
            {/* side bar */}
            <Col sm={12} lg={3} style={Styles.sidebar} >
                {/* display icon + name with link / panel */}
                <>
                    <h4>{this.props.orgName}</h4>
                    <h5>{this.props.userName}</h5>

                </>
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
                        <SectionPanel 
                            panelTitle ={this.state.panelTitle}
                            section ={this.state.section}

                        />
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


