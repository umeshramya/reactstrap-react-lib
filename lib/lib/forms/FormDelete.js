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
function Delete({ uri, id, onSuccess, onError, successMessage, errorMessage }) {
    const butRef = react_1.useRef(null);
    const modRef = react_1.useRef(null);
    const alerRef = react_1.useRef(null);
    const submitHandle = (onSuccess = (res) => { }, onError = (res) => { }) => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        let _successMessage = "Successfully deleted the record";
        try {
            (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
            (_b = butRef.current) === null || _b === void 0 ? void 0 : _b.showSpin();
            (_c = alerRef.current) === null || _c === void 0 ? void 0 : _c.alertLight();
            let curObj = {
                id: id,
            };
            let res = yield axios_1.default.post(uri, curObj).then(res => res);
            yield onSuccess(res);
            if (res.data.mes === undefined) {
                if (successMessage !== undefined && successMessage !== "") {
                    _successMessage = successMessage;
                }
            }
            else {
                _successMessage = res.data.mes;
            }
            (_d = butRef.current) === null || _d === void 0 ? void 0 : _d.hideSpin();
            (_e = alerRef.current) === null || _e === void 0 ? void 0 : _e.alertSuccess(_successMessage);
        }
        catch (error) {
            yield onError(error);
            if (errorMessage === undefined) {
                (_f = alerRef.current) === null || _f === void 0 ? void 0 : _f.alertError(errorMessage);
            }
            else {
                (_g = alerRef.current) === null || _g === void 0 ? void 0 : _g.alertError(error);
            }
            (_h = butRef.current) === null || _h === void 0 ? void 0 : _h.hideSpin();
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(ModelP_1.default, { ref: modRef, Ok: (e) => {
                        var _a;
                        submitHandle(onSuccess, onError);
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
                    } }),
                react_1.default.createElement(reactstrap_1.Form, { onSubmit: (e) => {
                        var _a;
                        e.preventDefault();
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.show();
                    } },
                    react_1.default.createElement(ButtonP_1.default, { text: "Delete", color: "danger", ref: butRef })),
                react_1.default.createElement(AlertP_1.default, { ref: alerRef })))));
}
exports.default = Delete;
//# sourceMappingURL=FormDelete.js.map