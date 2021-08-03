/// <reference types="react" />
import { propMaster, recpthaSetting } from "../Interfaces/interfaces";
declare type propsMasterwithoutReset = Omit<propMaster, "reset">;
interface Props extends propsMasterwithoutReset {
    recpthaSetting: recpthaSetting;
}
declare function Delete(props: Props): JSX.Element;
export default Delete;
//# sourceMappingURL=FormDelete.d.ts.map