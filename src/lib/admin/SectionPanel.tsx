import React, { Component } from "react";
import { Row, Col, Collapse } from "reactstrap";
import Link from "next/link";

/**
 * section element in each sectionEach of sectionPanel of sidebar or admin
 */
export interface sectionElements {
  /** name of each elements */
  name: string;
  /** link to go after clicking */
  link: string;
}

/**
 * Each section of section panel of sidebar or admin
 */
export interface sectionEach {
  /** title of section */
  title: string;
  /** elements array each section contains */
  sectionElements: {
    /** name of each elements */
    name: string;
    /** link to go after clicking */
    link: string;
  }[];
}

/**
 * props in section panel of sidebar or admin
 */
export interface panelProps {
  /** Title is panel title */
  panelTitle: string;
  /** Contain array of section elements. Each section element is array of name and element */
  section: sectionEach[];
}

interface State {
  isOpen: boolean;
}

/**
 * SectionPanel — modern popup with light card style, scale+fade animation
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
        <Col sm={12}>
          <Collapse isOpen={this.state.isOpen}>
            <div className="sb-panel-overlay">
              <div className="sb-panel-header">
                <h4 className="sb-panel-title">
                  {this.props.panelTitle} Panel
                </h4>
                <button
                  className="sb-panel-close"
                  onClick={this.panelClose}
                  aria-label="Close panel"
                >
                  &#10005;
                </button>
              </div>
              <div className="sb-panel-grid">
                {this.props.section?.map((eachSection, i) => {
                  return (
                    <div key={i}>
                      <h5 className="sb-panel-section-title">
                        {eachSection.title}
                      </h5>
                      {eachSection.sectionElements.map(
                        (eachSectionElment, j) => {
                          return (
                            <Link
                              key={j}
                              href={eachSectionElment.link}
                              className="sb-panel-link"
                            >
                              {eachSectionElment.name}
                            </Link>
                          );
                        }
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Collapse>
        </Col>
      </Row>
    );
  }
}
