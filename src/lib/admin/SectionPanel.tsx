import React, { Component } from "react";
import { Row, Col, Collapse, Container } from "reactstrap";
import * as IoIcons from "react-icons/io";
import Link from "next/link";
import ButtonP from "../units/ButtonP";

/**
 * section element in each ectionEach of sectionPanel of sidebar or admin
 */
export interface sectionElements {
  /**name o each elements */
  name: string;
  /**link to go after clicking */
  link: string;
}

/**
 * Each section of section panel of sidebar or admin
 */
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
/**
 * props in section panel of sidebar or admin
 */
export interface panelProps {
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
export default class SectionPanel extends Component<panelProps, State> {
  state = {
    isOpen: false,
  };

  panelToggel = (): void =>
    this.setState({ ...this.state, isOpen: !this.state.isOpen });
  panelClose = (): void => this.setState({ ...this.state, isOpen: false });
  panelOpen = (): void => this.setState({ ...this.state, isOpen: true });

  render() {
    return (
      <Row>
        {/* <ButtonP onClick={close} text="click" /> */}

        <Col sm={12}>
          <Collapse isOpen={this.state.isOpen}>
              <Container className= "bg-dark text-white rounded-3 p-5 rounded-lg m-3">
              <IoIcons.IoMdClose
                size={50}
                onClick={this.panelClose}
                style={{ cursor: "pointer" }}
              />
              <h4> {`${this.props.panelTitle} Panel`}</h4>
              <Row>
                {this.props.section?.map((eachSection, i) => {
                  return (
                    <Col sm={12} md={6} lg={3} key={i}>
                      <h5>{eachSection.title}</h5>
                      {eachSection.sectionElements.map(
                        (eachSectionElment, j) => {
                          return (
                            <Row key={j}>
                              <Col sm={12}>
                                <Link href={eachSectionElment.link}>
                                  {eachSectionElment.name}
                                </Link>
                              </Col>
                            </Row>
                          );
                        }
                      )}
                    </Col>
                  );
                })}
              </Row>
              </Container>
          </Collapse>
        </Col>
      </Row>
    );
  }
}
