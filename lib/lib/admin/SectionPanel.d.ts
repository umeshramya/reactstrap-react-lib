import { Component } from "react";
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