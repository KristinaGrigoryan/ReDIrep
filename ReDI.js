
class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }
    toggleCompleted() {
        this.completed = !this.completed;
    }
}
let tasks = [];
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const filterAllButton = document.getElementById('filterAll');
const filterCompletedButton = document.getElementById('filterCompleted');
const filterIncompleteButton = document.getElementById('filterIncomplete');

