"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res, next) {
    res.send("booking API");
});
app.get("/tours", function (req, res, next) {
    res.send("get a list of tours...");
});
app.post("/tours", function (req, res, next) {
    res.send("add a new tour...");
});
app.listen(process.env.PORT || 8091, function () { console.log("server started"); });
