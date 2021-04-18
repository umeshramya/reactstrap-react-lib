import { Component } from "react";
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
interface Props {
    /** Title is panel title*/
    panelTitle: string;
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
    state: {
        isOpen: boolean;
    };
    panelToggel: () => void;
    panelClose: () => void;
    panelOpen: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=SectionPanel.d.ts.map