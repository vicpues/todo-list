export default class TodoItem {
    constructor({
            title,
            priority,
            description = "",
            project = "",
            dueDate = new Date(0),
            icon = "",
            repeatsEvery = null,
    }) {
        this._title = title;
        this._priority = priority;
        this.description = description;
        this.project = project;
        this._dueDate = dueDate;
        this.icon = icon;
        this.repeatsEvery = repeatsEvery;
        this.isCompleted = false;
    }

    ZERO_DATE = new Date(0);
    

    get title() {return this._title;}
    set title(newTitle) {
        if (!newTitle || typeof newTitle !== "string") {
            throw new TypeError("ToDo title must be a non-empty string");
        } else {
            this._title = newTitle;
        }
    }


    get priority() {return this._priority;}
    set priority(newPriority) {
        if (!["high", "medium", "low"].includes(newPriority)) {
            throw new TypeError('ToDo priority must be "high", "medium" or "low"');
        } else {
            this._priority = newPriority;
        }
    }

    
    get dueDate() {
        return (this._dueDate === this.ZERO_DATE)
            ? null
            : this._dueDate
    }
    set dueDate(newDate) {
        if (isNaN(new Date(newDate))) {
            throw TypeError("Invalid date");
        } else {
            this._dueDate = newDate;
        };
    }
};
