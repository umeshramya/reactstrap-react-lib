import { Component } from 'react';
interface Props {
}
interface State {
    text: string;
    color: string;
}
export default class AlertP extends Component<Props, State> {
    state: {
        text: string;
        color: string;
    };
    /**
     * This set boostrap color to  Alert
     * @param color Bootstrap color as string
     */
    alertColor: (color: string) => void;
    /**
     * This sets the text to Alert
     * @param text text dispaly in Alert
     */
    alertText: (text: string) => void;
    /**
     *  Along with setting text it converts the color of Alert to boostrap light
     * @param text text dispaly in Alert
     */
    alertLight: (text?: string) => void;
    /**
     * Along with setting text it converts the color of Alert to boostrap success
     * @param text text dispaly in Alert
     */
    alertSuccess: (text: string) => void;
    /**
     * This sets the color of Alert to boostrap danger
     * extracts the text from error.response.data if error is not a string
     * @param error display error dange rw ith message as string
     */
    alertError: (error: string) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=AlertP.d.ts.map