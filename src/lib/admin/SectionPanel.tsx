import React, { Component } from "react";
import { Row, Col, Jumbotron, Collapse } from "reactstrap";
import * as IoIcons from "react-icons/io"
import Link from "next/link";
import ButtonP from "../ButtonP";

export interface sectionElements {
  /**name o each elements */
  name: string;
  /**link to go after clicking */
  link: string;
}

export interface sectionEach {
  /**title of section */
  title: string;
  /** elements arracy each section contains */
  sectionElements: {
    /**name o each elements */
    name: string;
    /**link to go after clicking */
    link: string;
  }[];
}

 export interface PanelProps {
  /** Title is panel title*/
  panelTitle: string;
  /*
    * Contain array of section elements
    * Each section elememt is array of name and element
    * 
  */
  section: sectionEach[];
}

interface State {
  isOpen: boolean;
}

/**
 * @panelTitle  This is panel title prop
 * @Section  This props is array of section elements each  section eleemnts is array of name and link property. name is name to dispolyed over the link
 * 
 */
export default class SectionPanel extends Component<PanelProps, State> {
  state = {
    isOpen: true,
  };

 panelToggel = (): void =>this.setState({ ...this.state, isOpen: !this.state.isOpen });
 panelClose =():void=>this.setState({...this.state, isOpen : false})
 panelOpen = ():void => this.setState({...this.state, isOpen:true});

  render() {
    return (
      <Row>
        {/* <ButtonP onClick={close} text="click" /> */}

        <Col sm={12}>
          <Collapse isOpen={this.state.isOpen}>
            <Jumbotron>
            <IoIcons.IoMdClose  size = {50} onClick={this.panelClose}  style={{cursor:"pointer"}}/>
              <h4> {`${this.props.panelTitle} Panal`}</h4>
              <Row>
                {
                  this.props.section.map((eachSection,i)=>{
                    return(
                    
                      <Col sm={12} md={6} lg={3} key={i}>
                        <h5>{eachSection.title}</h5> 
                        {
                          eachSection.sectionElements.map((eachSectionElment, j)=>{
                            return(
                                <Row key={j}>
                                  <Col sm={12}>
                                    <Link href={eachSectionElment.link}>{eachSectionElment.name}</Link>
                                  </Col>
                                </Row>
                            )
                          })
                        }
                      </Col>
                    
                    )
                  })
                }
              </Row>
            </Jumbotron>
           </Collapse>
         </Col>
       </Row>
    );
  }
}
