import { Component } from 'react';
import { PanelProps } from "./SectionPanel";
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
    userName?: string;
    siderBarLinks: sidebarLink[];
}
interface State {
    /**Title of panel toi be displayed */
    panelTitle: PanelProps["panelTitle"];
    /** array of section ine the panel */
    section: PanelProps["section"];
}
export default class Sidebar extends Component<Props, State> {
    state: {
        panelTitle: string;
        section: null;
    };
    private dispalyEachLink;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Sidebar.d.ts.map