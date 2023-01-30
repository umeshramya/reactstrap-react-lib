import React, { Component, useState, useRef, ReactElement } from "react";
import SectionPanel, { panelProps, sectionEach } from "./SectionPanel";
import { Row, Col } from "reactstrap";
import { useRouter } from "next/router";

/** These are the items which will displayed insde side bar */
interface sidebarLink {
  /**name diplayed in the sidebar */
  name: string;
  /**react-icons as component */
  icon?: any;
  /**sectionpanel or link to be shown on click */
  panel?: panelProps;
  link?: string;
}

interface Props {
  /** Main compone nt to be displayed */
  Main: ReactElement;
  /**Page name tobe displayed */
  pageName: string;
  /**horizontal bar component */
  barComponent?: any;
  /**orgnization name to be displayed above in sidebar */
  orgName?: string;
  /**user name as string */
  userName?: string;
  /**siderBarLinks*/
  siderBarLinks: sidebarLink[];
  /*background color main area*/
  mainBG?: string;
}

/**
 * @props Main: ReactElement;
 * @props pageName: string;
 * @props barComponent?: Component This for horzayal bar
 * @props orgName?: string;
 * @props userName?: string;
 * @props siderBarLinks: sidebarLink[];
 * @props mainBG?: string; background color of main area
 * @returns component
 */
const Sidebar = (props: Props) => {
  const router = useRouter();
  const curSectionPanel: any = useRef();

  let initPanelTitle: panelProps["panelTitle"] = "";
  let initSection: panelProps["section"] = [];

  const [panelTitle, setpanelTitle] = useState(initPanelTitle);
  const [section, setSection] = useState(initSection);

  const dispalyEachLink: any = (eachLink: sidebarLink, index: number): any => {
    return (
      <Col
        onClick={() => {
          if (eachLink.panel) {
            // change the states of panel
            setpanelTitle(eachLink.panel.panelTitle);
            setSection(eachLink.panel.section);

            curSectionPanel.current?.panelOpen();
          } else if (eachLink.link !== undefined) {
            // use router to push to new link
            router.push(eachLink.link);
          }
        }}
        sm={12}
        className={`sidebarLi`}
        key={index}
      >
        {eachLink.name}
      </Col>
    );
  };

  return (
    <Row>
      <style>
        {`

        
        .menubar{
            // background-color: #060b26;
            // color: #c5c5c5;
            height: 60px;
            margin-bottom: 10px;
            padding:8px;
        }
        
        
        .sidebar{
            // background-color: #060b26;
            // color: #f5f5f5;
            height: 100vh;
            position: sticky; 
            top: 0px;
            overflow-y: auto;
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




        @media only screen and (max-width: 600px) {
          .sidebar{
            height: 50vh;
            z-index:1;
          }
        }

        // .main{
        //   background-color: #ffff
        // }
        `}
      </style>

      {/* side bar */}
      <Col sm={12} lg={2} className={`sidebar bg-dark text-light`}>
        {/* display icon + name with link / panel */}
        <>
          <h5>{props.orgName}</h5>
          <h6>{props.userName}</h6>
          <Row className={`sidebarUl`}>
            {props.siderBarLinks !== undefined
              ? props.siderBarLinks.map((eachLink, index) => {
                  return dispalyEachLink(eachLink, index);
                })
              : ""}
          </Row>
        </>
      </Col>
      {/* /Area for horizontal bar and main */}
      <Col sm={12} lg={10}>
        <Row>
          {/* Horizontal bar */}
          <Col sm={12} className={`menubar bg-dark text-light`}>
            <Row>
              <Col>
                <h5>{props.pageName}</h5>
              </Col>
              <Col>{props.barComponent}</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {/* Main area */}
          <Col
            sm={12}
            className={`main ${
              props.mainBG === undefined ? "bg-white" : props.mainBG
            }`}
          >
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
  );
};

export default Sidebar;
