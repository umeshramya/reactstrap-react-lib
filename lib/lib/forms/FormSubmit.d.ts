import { ReactFragment } from 'react';
interface Props {
    /** req.body for post request */
    curObj: {};
    /**API rroute uri for post request */
    curUri: string;
    /**This is Form input elements. do not add Form elemet thise get rendered inside the form itself */
    Inputs: ReactFragment;
    /** pass function with reseting the values i.e. curObj and etc */
    reset: () => void;
}
declare const FormSubmit: ({ curObj, curUri, Inputs, reset }: Props) => JSX.Element;
export default FormSubmit;
//# sourceMappingURL=FormSubmit.d.ts.map