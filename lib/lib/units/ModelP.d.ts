import { Component } from "react";
interface Props {
    /**
     * e is event
     */
    Ok: (e: any) => void;
    /**
     * text to bedisplayes in body of modal
     */
    modelText: string;
    /**
     * title of model
     */
    modelTitle: string;
}
interface State {
    modal: boolean;
    text: string;
    title: string;
}
export default class ModelP extends Component<Props, State> {
    state: {
        modal: boolean;
        text: string;
        title: string;
    };
    /**This function toggels the the show hide of Modal */
    toggle: () => void;
    /**
     * This Shows the modal
     * @param curText Text to be displayed in body of Modal
     * @param curTitle Title of The modal
     */
    show: (curText?: string, curTitle?: string) => void;
    /**
     *
     * @returns Closes the modal
     */
    close: () => boolean;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ModelP.d.ts.map