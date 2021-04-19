import { Component } from 'react';
import { PanelProps } from "./SectionPanel";
interface Props extends PanelProps {
    Main: Component;
}
interface State {
}
export default class Sidebar extends Component<Props, State> {
    state: {};
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=Sidebar.d.ts.map