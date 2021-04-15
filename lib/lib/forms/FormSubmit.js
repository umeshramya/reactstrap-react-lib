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
const ButtonP_1 = __importDefault(require("../ButtonP"));
const AlertP_1 = __importDefault(require("../AlertP"));
const ModelP_1 = __importDefault(require("../ModelP"));
const FormSubmit = ({ curObj, curUri, Inputs, reset = () => { }, onSuccess, onError, successCallBack, errorCallback, validation = () => "", AxiosRequestConfig = {} }) => {
    const butRef = react_1.useRef(null);
    const modRef = react_1.useRef(null);
    const alerRef = react_1.useRef(null);
    react_1.useEffect(() => {
        var _a;
        (_a = alerRef.current) === null || _a === void 0 ? void 0 : _a.alertLight();
        return () => {
        };
    }, [curObj]);
    const submitHandle = (_curUri, _curObj, _onSuccess, _onError, _validation) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        let validationErrorMessage = "";
        try {
            (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
            (_b = butRef.current) === null || _b === void 0 ? void 0 : _b.showSpin();
            (_c = alerRef.current) === null || _c === void 0 ? void 0 : _c.alertLight();
            validationErrorMessage = _validation();
            if (validationErrorMessage !== "") {
                (_d = alerRef.current) === null || _d === void 0 ? void 0 : _d.alertError(validationErrorMessage);
                (_e = butRef.current) === null || _e === void 0 ? void 0 : _e.hideSpin();
                return;
            }
            let res;
            if (_curObj[0] === "GET") {
                res = yield axios_1.default.get(_curUri, AxiosRequestConfig).then(res => res);
            }
            else if (_curObj[0] === "DELETE") {
                res = yield axios_1.default.delete(_curUri, AxiosRequestConfig).then(res => res);
            }
            else if (_curObj[0] === "PUT") {
                res = yield axios_1.default.put(_curUri, _curObj[1], AxiosRequestConfig).then(res => res);
            }
            else {
                // default method POST
                res = yield axios_1.default.post(_curUri, _curObj[1], AxiosRequestConfig).then(res => res);
            }
            let _successMessage = _onSuccess(res, successCallBack);
            (_f = butRef.current) === null || _f === void 0 ? void 0 : _f.hideSpin();
            (_g = alerRef.current) === null || _g === void 0 ? void 0 : _g.alertSuccess(_successMessage);
        }
        catch (error) {
            let _errorMessage = _onError(error, errorCallback);
            (_h = alerRef.current) === null || _h === void 0 ? void 0 : _h.alertError(_errorMessage);
            (_j = butRef.current) === null || _j === void 0 ? void 0 : _j.hideSpin();
        }
    });
    return (react_1.default.createElement(reactstrap_1.Container, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(ModelP_1.default, { ref: modRef, Ok: (e) => {
                        var _a;
                        submitHandle(curUri, curObj, onSuccess, onError, validation);
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
                    }, modelText: "Press Ok to Submit data to server \\n Press cancel to exit", modelTitle: "Do you want to submit Data ?" }),
                react_1.default.createElement(reactstrap_1.Form, { onSubmit: (e) => {
                        var _a;
                        e.preventDefault();
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.show();
                    } },
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, null, Inputs)),
                    react_1.default.createElement(reactstrap_1.Row, null,
                        react_1.default.createElement(reactstrap_1.Col, null,
                            react_1.default.createElement(ButtonP_1.default, { text: "Submit", ref: butRef })),
                        react_1.default.createElement(reactstrap_1.Col, null,
                            react_1.default.createElement(ButtonP_1.default, { text: "Reset", color: "warning", onClick: reset })))),
                react_1.default.createElement(AlertP_1.default, { ref: alerRef })))));
};
exports.default = FormSubmit;
//# sourceMappingURL=FormSubmit.js.map