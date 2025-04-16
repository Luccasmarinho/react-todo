export function findDuplicateTask(allTasks, id, name) {
    let findName;
    !id 
        ? findName = allTasks.find((e) => e.name == name.name) 
        : findName = allTasks.find((e) => e.name == name.name && e.id != id)
    return findName == undefined ? false : true
}