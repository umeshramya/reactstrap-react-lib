import React, { Component } from 'react';
import SectionPanel, { PanelProps } from "./SectionPanel";
/** These are the items which will displayed insde side bar */
interface sidebarLink {
    /**name diplayed in the sidebar */
    name: string;
    /**react-icons as component */
    icon: Component;
    /**sectionpanel or link to be shown on click */
    panel?: PanelProps;
    link?: string;
}
interface Props extends PanelProps {
    /** Main compone nt to be displayed */
    Main: Component;
    /**orgnization name to be displayed above in sidebar */
    orgName?: string;
    /**user name as string */
    userName?: string;
    /**siderBarLinks*/
    siderBarLinks: sidebarLink[];
}
interface State {
    /**Title of panel toi be displayed */
    panelTitle: PanelProps["panelTitle"];
    /** array of section ine the panel */
    section: PanelProps["section"];
}
export default class Sidebar extends Component<Props, State> {
    curSectionPanel: React.RefObject<SectionPanel>;
    router: import("next/router").NextRouter;
    constructor(props: Props);
    state: {
        panelTitle: string;
        section: null;
    };
    private dispalyEachLink;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=SidebarClass.d.ts.map