import { ReactElement } from "react";
import { panelProps } from "./SectionPanel";
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
    /**orgnization name to be displayed above in sidebar */
    orgName?: string;
    /**user name as string */
    userName?: string;
    /**siderBarLinks*/
    siderBarLinks: sidebarLink[];
}
declare const Sidebar: (props: Props) => JSX.Element;
export default Sidebar;
//# sourceMappingURL=Sidebar.d.ts.map