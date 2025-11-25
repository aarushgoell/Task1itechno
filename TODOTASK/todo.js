const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let allTodos = [];
let id = 0;
const headings = ["Press 1: Add tasks", "Press 2: View tasks", "Press 3: Mark done", "Press 4: Delete tasks", "Press 5: For exit"]

console.log("\nWelcome to my todo App :)\n");
headings.map((head) => console.log(head));

console.log("\n");

rl.on("line", (input) => {
    if (input === "1") {
        rl.question("Enter task name: ", (taskName) => {
            allTodos.push({
                Task: taskName,
                TaskId: id++,
                isDone: "No"
            });
            console.log("Task added!");
        });
    }
    else if (input === "2") {
        if (allTodos.length === 0) {
            console.log("No tasks found!");
        } else {
            allTodos.forEach(todo => {
                console.log(`${todo.TaskId}. ${todo.Task} [${todo.isDone}]`);
            });
        }
    }
    else if (input == "3") {
        rl.question("Enter todoId that you want to toggle: ", (id) => {
            let check = false;
            for (let i = 0; i < allTodos.length; i++) {
                if (allTodos[i].TaskId == id) {
                    check = true;
                    if (allTodos[i].isDone == "No") {
                        allTodos[i].isDone = "Yes";
                    }
                    else {
                        allTodos[i].isDone = "No";
                    }
                }
            }
            if (check) {
                console.log("Todo toggled");
            }
            else {
                console.log("Incorrect id");
            }
        });
    }
    else if (input == "4") {
        rl.question("Enter todoId that u want to delete ", (id) => {
            const filteredArr = allTodos.filter((tod) => tod.TaskId != id);
            if (filteredArr.length == allTodos.length) {
                console.log("Incorrect TodoId");
            }
            else {
                allTodos = filteredArr;
                console.log("Todo is removed");
            }
        });
    }
    else if (input == "5") {
        console.log("Application exited ");
        rl.close();
    }
});