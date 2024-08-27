export default class Task {
    constructor({
            title = "",
            priority = 1,
            dueDate = new Date(0),
            description = "",
            project = "",
            icon = "",
            repeatsEvery = null,
    }) {
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
