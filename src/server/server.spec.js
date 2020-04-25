import {addNewTask, updateTask} from "./server";

(async function(){
    await addNewTask({
        name: "My task",
        id: "123456"
    });

    await updateTask({
        id: '123456',
        name: "MY TASK --- UPDATED!!!"
    })
})();

