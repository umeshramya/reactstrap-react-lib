"use strict";
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
const submitHandle = ({ _curUri, _curObj, _onSuccess, _onError }) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g;
    try {
        (_a = modRef.current) === null || _a === void 0 ? void 0 : _a.close();
        (_b = butRef.current) === null || _b === void 0 ? void 0 : _b.showSpin();
        (_c = alerRef.current) === null || _c === void 0 ? void 0 : _c.alertLight();
        let res = yield axios_1.default.post(_curUri, _curObj).then(res => res);
        let _successMessage = _onSuccess(res, successCallBack);
        (_d = butRef.current) === null || _d === void 0 ? void 0 : _d.hideSpin();
        (_e = alerRef.current) === null || _e === void 0 ? void 0 : _e.alertSuccess(_successMessage);
    }
    catch (error) {
        let _errorMessage = _onError(error, errorCallback);
        (_f = alerRef.current) === null || _f === void 0 ? void 0 : _f.alertError(_errorMessage);
        (_g = butRef.current) === null || _g === void 0 ? void 0 : _g.hideSpin();
    }
});
//# sourceMappingURL=submithandle.js.map