const Task = (status, title, description, date, priority, location, originalDate, whichDate, whichProject) => {
    return {
        status, 
        title,
        description,
        date, 
        priority,
        location,
        originalDate,
        whichDate,
        whichProject,
    }
}

export { Task };