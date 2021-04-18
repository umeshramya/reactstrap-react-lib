"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectioPanel = exports.Table = exports.FormSubmit = exports.FormDelete = exports.ModelP = exports.ButtonP = exports.AlertP = void 0;
// main entry for libr
const AlertP_1 = __importDefault(require("./lib/AlertP"));
exports.AlertP = AlertP_1.default;
const ButtonP_1 = __importDefault(require("./lib/ButtonP"));
exports.ButtonP = ButtonP_1.default;
const ModelP_1 = __importDefault(require("./lib/ModelP"));
exports.ModelP = ModelP_1.default;
const FormSubmit_1 = __importDefault(require("./lib/forms/FormSubmit"));
exports.FormSubmit = FormSubmit_1.default;
const FormDelete_1 = __importDefault(require("./lib/forms/FormDelete"));
exports.FormDelete = FormDelete_1.default;
const Table_1 = __importDefault(require("./lib/tables/Table"));
exports.Table = Table_1.default;
const SectionPanel_1 = __importDefault(require("./lib/admin/SectionPanel"));
exports.SectioPanel = SectionPanel_1.default;
//# sourceMappingURL=index.js.map