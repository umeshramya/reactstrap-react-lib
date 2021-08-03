"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = __importStar(require("react"));
const reactstrap_1 = require("reactstrap");
const router_1 = require("next/router");
const ButtonP_1 = __importDefault(require("../units/ButtonP"));
const AlertP_1 = __importDefault(require("../units/AlertP"));
const ModelP_1 = __importDefault(require("../units/ModelP"));
const querystring_1 = __importDefault(require("querystring"));
const FormSubmit = ({ curObj, curUri, Inputs, reset = () => { }, onSuccess, onError, successCallBack, errorCallback, recpthaSetting, validation = () => "", AxiosRequestConfig = {}, triggerSubmit, triggerReset, showResetButton = false }) => {
    const butRef = react_1.useRef(null);
    const modRef = react_1.useRef(null);
    const alerRef = react_1.useRef(null);
    const [triggerSubmitCount, setTriggerSubmitCount] = react_1.useState(0);
    const [triggerResetCount, setTriggerResetCount] = react_1.useState(0);
    const [submitDisable, setSubmitDisable] = react_1.useState(false);
    const router = router_1.useRouter();
    react_1.useEffect(() => {
        var _a;
        (_a = alerRef.current) === null || _a === void 0 ? void 0 : _a.alertLight();
        return () => { };
    }, [curObj]);
    react_1.useEffect(() => {
        if (triggerSubmitCount > 0) {
            submitHandle(curUri, curObj, onSuccess, onError, validation);
        }
        setTriggerSubmitCount(triggerSubmitCount + 1);
        return () => { };
    }, [triggerSubmit]);
    react_1.useEffect(() => {
        if (triggerResetCount > 0) {
            reset();
        }
        setTriggerResetCount(triggerResetCount + 1);
        return () => { };
    }, [triggerReset]);
    const submitHandle = (_curUri, _curObj, _onSuccess, _onError, _validation) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        let validationErrorMessage = "";
        try {
            (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
            (_b = butRef.current) === null || _b === void 0 ? void 0 : _b.showSpin();
            setSubmitDisable(true);
            (_c = alerRef.current) === null || _c === void 0 ? void 0 : _c.alertLight();
            validationErrorMessage = _validation();
            if (validationErrorMessage !== "") {
                (_d = alerRef.current) === null || _d === void 0 ? void 0 : _d.alertError(validationErrorMessage);
                (_e = butRef.current) === null || _e === void 0 ? void 0 : _e.hideSpin();
                setSubmitDisable(false);
                return;
            }
            let res;
            if (_curObj[0] === "GET") {
                res = yield axios_1.default.get(_curUri, AxiosRequestConfig).then((res) => res);
            }
            else if (_curObj[0] === "DELETE") {
                res = yield axios_1.default
                    .delete(_curUri, AxiosRequestConfig)
                    .then((res) => res);
            }
            else if (_curObj[0] === "PUT") {
                res = yield axios_1.default
                    .put(_curUri, _curObj[1], AxiosRequestConfig)
                    .then((res) => res);
            }
            else if (curObj[0] === "ACTION") {
                // code to use router to push the page said
                router.push(`${_curUri}/?${querystring_1.default.stringify(_curObj[1])}`);
                (_f = butRef.current) === null || _f === void 0 ? void 0 : _f.hideSpin();
                setSubmitDisable(false);
                (_g = alerRef.current) === null || _g === void 0 ? void 0 : _g.alertSuccess("Successfully completed action");
                return;
            }
            else {
                // default method POST
                res = yield axios_1.default
                    .post(_curUri, _curObj[1], AxiosRequestConfig)
                    .then((res) => res);
            }
            let _successMessage = _onSuccess(res, successCallBack);
            (_h = butRef.current) === null || _h === void 0 ? void 0 : _h.hideSpin();
            setSubmitDisable(false);
            (_j = alerRef.current) === null || _j === void 0 ? void 0 : _j.alertSuccess(_successMessage);
        }
        catch (error) {
            let _errorMessage = _onError(error, errorCallback);
            (_k = alerRef.current) === null || _k === void 0 ? void 0 : _k.alertError(_errorMessage);
            (_l = butRef.current) === null || _l === void 0 ? void 0 : _l.hideSpin();
            setSubmitDisable(false);
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(ModelP_1.default, { ref: modRef, Ok: (e) => {
                        var _a;
                        submitHandle(curUri, curObj, onSuccess, onError, validation);
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
                    }, modelText: "Press Ok to Submit data to server, Press cancel to exit", modelTitle: "Do you want to submit Data ?" }),
                react_1.default.createElement(reactstrap_1.Form, { onSubmit: (e) => {
                        var _a;
                        e.preventDefault();
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.show();
                    } },
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, null, Inputs)),
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, null,
                            react_1.default.createElement(ButtonP_1.default, { text: "Submit", ref: butRef, disabled: submitDisable, recpthaSetting: recpthaSetting })),
                        showResetButton ?
                            react_1.default.createElement(reactstrap_1.Col, null,
                                react_1.default.createElement(ButtonP_1.default, { text: "Reset", color: "warning", onClick: reset, disabled: false })) : "")),
                react_1.default.createElement(AlertP_1.default, { ref: alerRef })))));
};
exports.default = FormSubmit;
//# sourceMappingURL=FormSubmit.js.map