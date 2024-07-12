"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskStatus = void 0;
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["ToDo"] = 0] = "ToDo";
    TaskStatus[TaskStatus["Inprogress"] = 1] = "Inprogress";
    TaskStatus[TaskStatus["Completed"] = 2] = "Completed";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
