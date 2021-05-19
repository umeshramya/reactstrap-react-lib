import React, {Component,useState, useRef, ReactElement}  from 'react'
import SectionPanel, { panelProps, sectionEach } from "./SectionPanel"
import { Row, Col } from "reactstrap"
import { useRouter } from 'next/router'


/** These are the items which will displayed insde side bar */
interface sidebarLink {
    /**name diplayed in the sidebar */
    name: string;
    /**react-icons as component */
    icon?: any;
    /**sectionpanel or link to be shown on click */
    panel?: panelProps
    link?: string;
}


interface Props{
    /** Main compone nt to be displayed */
    Main: ReactElement;
    /**orgnization name to be displayed above in sidebar */
    orgName?: string;
    /**user name as string */
    userName?: string;
    /**siderBarLinks*/
    siderBarLinks: sidebarLink[];

}

const Sidebar = (props: Props) => {
    const   router = useRouter();
    const curSectionPanel:any= useRef()

    let initPanelTitle:panelProps["panelTitle"]="";
    let initSection:panelProps["section"] = [];

    const [panelTitle, setpanelTitle] = useState(initPanelTitle);
    const [section, setSection] = useState(initSection);


    const dispalyEachLink: any = (eachLink: sidebarLink, index: number): any => {
        return (
            <Col onClick={() => {
                if(eachLink.panel){
                    // change the states of panel
                    setpanelTitle(eachLink.panel.panelTitle);
                    setSection(eachLink.panel.section)

                    curSectionPanel.current?.panelOpen();
                    
                }else if(eachLink.link !== undefined){
                    // use router to push to new link
                    router.push(eachLink.link);
                    
                }
                
            }} sm={12} className={`sidebarLi`} key={index}>
                {eachLink.name}
            </Col>
        )
    }


    return (
            <Row>
                <style>
                    {
                        `.menubar{
            background-color: #060b26;
            color: #f5f5f5;
            height: 60px;
            margin-bottom: 10px;
            padding:8px;
        }
        
        
        .sidebar{
            background-color: #060b26;
            color: #f5f5f5;
            height: 100vh;
            display: flex;
            justify-content:flex-start;
            align-items: flex-start;
            flex-direction: column;
        }
        
        .sidebarUl{
            /* padding-top: 50px; */
            padding-left: 0px;
            width: 100%;
        
        }
        
        .sidebarLi {
            height:  40px;
            width: 100%;
            padding-left: 30px;
            padding-top: 10px;
        }
        
        .sidebarLink{
            width: 100%;
        }
        
        .sidebarLi:hover {
            background-color: #1a83ff;
            cursor: pointer;
        }
        
        .logout{
            text-align: center;
        }
        .logout:hover {
            cursor: pointer;
        }
        
        .PanalClose:hover{
            cursor: pointer;
        }
        `
                    }
                </style>

                {/* side bar */}
                <Col sm={12} lg={2} className={`sidebar`} >
                    {/* display icon + name with link / panel */}
                    <>
                        <h4>{props.orgName}</h4>
                        <h5>{props.userName}</h5>
                        <Row className={`sidebarUl`}>

                            {
                                props.siderBarLinks !== undefined ?
                                    props.siderBarLinks.map((eachLink, index) => {
                                        return (
                                            dispalyEachLink(eachLink, index)
                                        )
                                    }) : ""
                            }

                        </Row>

                    </>
                </Col>
                {/* /Area for horizontal bar and main */}
                <Col sm={12} lg={10}>
                    <Row>
                        {/* Horizontal bar */}
                        <Col sm={12} className={`menubar`}>

                        </Col>
                    </Row>
                    <Row>
                        {/* Main area */}
                        <Col sm={12}>
                            {

                                <SectionPanel
                                    panelTitle={panelTitle}
                                    section={section}
                                    ref={curSectionPanel}
                                    
                                />
                            }

                            {props.Main}
                        </Col>
                    </Row>

                </Col>

            </Row>
        
    )
}


export default Sidebar