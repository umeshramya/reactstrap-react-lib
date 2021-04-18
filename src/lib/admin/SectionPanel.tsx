import React, { Component } from 'react'
import {Row,Col, Jumbotron, Collapse} from "reactstrap"
import * as RiIcons from "react-icons/ri"
import Link from "next/link"

interface sectionElements{
    /**name o each elements */
    name : string;
    /**link to go after clicking */
    link : string;
}

interface sectionEach{
    /**title of section */
    title: string;
    /** elements arracy each section contains */
    sectionElements : sectionElements[];
}

interface Props {
    /** Title is panel title*/
    panelTitle:string;
    /** contain sections Each */
    section : sectionEach[];
    
}


interface State {
    isOpen :boolean;
}

export default class SectionPanel extends Component<Props, State> {
    state = {
        isOpen:true,

    }

    toggel = ():void=>this.setState({...this.state, isOpen : !this.state.isOpen});


    render() {
        return (
            <Row>
                <Col>
                    <Collapse isOpen={this.state.isOpen}>
                        <Jumbotron>
                       
                        <h4>  {`${this.props.panelTitle} Panal`}</h4>
                            <Row>
                                {
                                    this.props.section.map((s,i)=>{

                                        return(
                                            <Col sm={12} md={4} lg={3} key={i}>
                                                {   <>
                                                    <h5>{s.title}</h5>
                                                    <Row>

                                                            {
                                                                s.sectionElements.map((t, k)=>{
                                                                        {
                                                                            <Row key={k}>
                                                                                <Col sm={12}>
                                                                                    <Link href={t.link}>{t.name}</Link>
                                                                                </Col>
                                                                            </Row>
                                                                        }

                                                                })
                                                            }

                                                    </Row>

                                                    </>

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

        )
    }
}
