export default class Task {
    constructor({
            id = _createRandomId(),
            title = "",
            priority = 1,
            dueDate = new Date(0),
            description = "",
            project = "",
            icon = "",
            repeatsEvery = null,
    }) {
        this.id = id;
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.project = project;
        this.icon = icon;
        this.repeatsEvery = repeatsEvery;
        this.isCompleted = false;
    }
};

function _createRandomId() {
    return Math.floor(Math.random() * 100000000)
}