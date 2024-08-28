export default class TaskList {
    
    #list = [];
    
    get list() { return this.#list.slice(); }
    set list(anything) { throw new Error("List is read-only"); }


    add(task) {
        this.#list.push(task);
    }

    remove(task) {
        const taskIndex = this.#list.findIndex(item => item.id === task.id);
        this.#list.splice(taskIndex, 1);
    }

    sortedBy(mainProperty) {
        const listCopy = this.#list.slice();
        return listCopy.sort(_makeChainedSortFunction(mainProperty));
    }
}


function _makeChainedSortFunction(mainProperty) {

    const defaultOrder = ["dueDate", "priority", "project", "title"];

    // Move mainProperty to first index
    const updatedOrder = defaultOrder.filter(item => item !== mainProperty);
    updatedOrder.unshift(mainProperty);

    // Make a sorting function for each property, in order
    const orderedFunctions = updatedOrder.map(i => _makeCompareFunction(i));

    // Callback that tries the sorting functions in order and returns first !0 result
    return (a, b) => {
        for (let sortingFunc of orderedFunctions) {
            const result = sortingFunc(a, b);
            if (result) { return result }
        }
        return 0;
    };
}

function _makeCompareFunction(byProperty) {

    const priorityCallback = (a, b) =>
        b.priority - a.priority;
    const dueDateCallback = (a, b) => (a.dueDate.getTime() === 0)
        ? 1
        : a.dueDate.getTime() - b.dueDate.getTime();
    const defaultCallback = (a, b) =>
        ("" + a[byProperty]).localeCompare("" + b[byProperty], "en");

    if (byProperty === "priority") return priorityCallback;
    if (byProperty === "dueDate") return dueDateCallback;
    else return defaultCallback;
}