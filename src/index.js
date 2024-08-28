import Task from "./models/task"
import TaskList from "./models/task-list";

const tasklist = new TaskList();
const item1 = new Task({title: "Make bed", priority: 0, dueDate: new Date("2024/08/27")});
const item2 = new Task({title: "Cook dinner", priority: 2, dueDate: new Date("2024/08/28")});
const item3 = new Task({title: "Clean room", priority: 1});
const item4 = new Task({title: "Cook dinner", priority: 2, dueDate: new Date("2024/08/29")});


tasklist.add(item1);
tasklist.add(item2);
tasklist.add(item3);
tasklist.add(item4);

const startTime = (new Date()).getTime();
console.log("Sorted by title:");
console.log(tasklist.sortedBy("title"));
console.log("Sorted by due date:");
console.log(tasklist.sortedBy("dueDate"));
console.log("Sorted by priority:");
console.log(tasklist.sortedBy("priority"));
console.log("With an item removed: ")
tasklist.remove(item1);
console.log(tasklist.list);
console.log("Only the ones due August 28th")
console.log(tasklist.filter("dueDate", (new Date("2024/08/28").toString())))

const stopTime = (new Date()).getTime();
console.log(`Executed in ${stopTime - startTime}ms`)
