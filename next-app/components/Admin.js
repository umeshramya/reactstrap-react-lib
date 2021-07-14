import React from 'react'
import { Row, Col } from 'reactstrap'
import { Sidebar, SectioPanel } from "reactstrap-react-lib"


export default function Admin() {
    const Employee = [

        { name: "create", link: "/employee/create" },
        { name: "edit", link: "/employee/edit" },
        { name: "delete", link: "/employee/delete" },
    ]
    const Shifts = [
        { name: "create", link: "/shifts/create" },
        { name: "edit", link: "/shifts/edit" },
        { name: "delete", link: "/shifts/delete" },
    ]

    const Roster = [
        { name: "create", link: "/shifts/create" },
        { name: "edit", link: "/shifts/edit" },
        { name: "delete", link: "/shifts/delete" },
    ]

    const Onboarding = [
        { name: "create", link: "/shifts/create" },
        { name: "edit", link: "/shifts/edit" },
        { name: "delete", link: "/shifts/delete" },
    ]


    const section = [
        { title: "Employee", sectionElements: Employee },
        { title: "Shifts", sectionElements: Shifts },
        { title: "Roster", sectionElements: Roster },
        { title: "Onboarding", sectionElements: Onboarding }

    ]

    return (
        <>
            <Row>
                <Col>


                    {/* <SectioPanel
            panelTitle={"Employee"}
            section = {[
                {title : "Employee",sectionElements : Employee},
                {title : "Shifts", sectionElements : Shifts},
                {title : "Roster", sectionElements : Roster},
                {title : "Onboarding", sectionElements : Onboarding}
            ]}
        /> */}

                    <Sidebar
                        Main={<h3>Umesh </h3>}
                        orgName="JJH Hubli"
                        userName="umesh"
                        siderBarLinks={[
                            { name: "Zoho", link: "/admin/Zoho" },
                            { name: "Employee", panel: { "panelTitle": "Employee", "section": section } }
                        ]}
                        pageName="My Page Name"
                        barComponent={<><input type="text" /></>}
                    />


                </Col>
            </Row >

        </>
    )
}