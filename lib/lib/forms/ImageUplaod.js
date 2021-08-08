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
const react_1 = __importStar(require("react"));
const reactstrap_1 = require("reactstrap");
const axios_1 = __importDefault(require("axios"));
const AlertP_1 = __importDefault(require("../units/AlertP"));
const ModelP_1 = __importDefault(require("../units/ModelP"));
const ButtonP_1 = __importDefault(require("../units/ButtonP"));
/**
 *
 *@props accept?: string;
 *@props fileName: string;
 *@props uri: string;
 *@returns ReactElement
 */
function FormUpload(props) {
    const [previewSource, setPreviewSource] = react_1.useState();
    const [UploadButtonDisable, setUploadButtonDisable] = react_1.useState(false);
    const butRef = react_1.useRef(null);
    const modRef = react_1.useRef(null);
    const alerRef = react_1.useRef(null);
    const onChangeHandler = (e) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onloadend = () => {
            setPreviewSource(fileReader.result);
        };
    };
    const submitHandler = () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        try {
            (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
            setUploadButtonDisable(true);
            (_b = butRef.current) === null || _b === void 0 ? void 0 : _b.showSpin();
            (_c = alerRef.current) === null || _c === void 0 ? void 0 : _c.alertLight();
            if (previewSource) {
                let res = yield axios_1.default.post(props.uri, { data: previewSource });
            }
        }
        catch (error) {
        }
        finally {
            (_d = alerRef.current) === null || _d === void 0 ? void 0 : _d.alertError("Error Occured");
            setUploadButtonDisable(false);
            (_e = butRef.current) === null || _e === void 0 ? void 0 : _e.hideSpin();
        }
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(reactstrap_1.Row, null,
            react_1.default.createElement(reactstrap_1.Col, null,
                react_1.default.createElement(ModelP_1.default, { ref: modRef, Ok: () => __awaiter(this, void 0, void 0, function* () {
                        var _f;
                        (_f = modRef.current) === null || _f === void 0 ? void 0 : _f.close();
                        yield submitHandler();
                    }), modelTitle: "Do you want to Upload file ?", modelText: "Press Ok to upload, Press cancel to exit" }),
                react_1.default.createElement(reactstrap_1.Form, { onSubmit: (e) => {
                        var _a;
                        e.preventDefault();
                        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.show();
                    } },
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(reactstrap_1.Label, null, "Upload"),
                        react_1.default.createElement(reactstrap_1.Input, { type: "file", accept: "image/*", multiple: false, onChange: (e) => {
                                onChangeHandler(e);
                            } })),
                    react_1.default.createElement(reactstrap_1.FormGroup, null,
                        react_1.default.createElement(ButtonP_1.default, { disabled: UploadButtonDisable, text: "Upload", ref: butRef })),
                    react_1.default.createElement(AlertP_1.default, { ref: alerRef })),
                previewSource && react_1.default.createElement("img", { src: previewSource, height: "100rem" })))));
}
exports.default = FormUpload;
//# sourceMappingURL=ImageUplaod.js.map