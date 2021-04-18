import React, { Component } from "react";
import { Row, Col, Jumbotron, Collapse } from "reactstrap";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";

interface sectionElements {
  /**name o each elements */
  name: string;
  /**link to go after clicking */
  link: string;
}

interface sectionEach {
  /**title of section */
  title: string;
  /** elements arracy each section contains */
  sectionElements: sectionElements[];
}

interface Props {
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
export default class SectionPanel extends Component<Props, State> {
  state = {
    isOpen: true,
  };

  toggel = (): void =>
    this.setState({ ...this.state, isOpen: !this.state.isOpen });

  render() {
    return (
      <Row>
        <Col sm={12}>
          <Collapse isOpen={this.state.isOpen}>
            <Jumbotron>
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
