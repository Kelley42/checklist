const Task = (status, title, description, date, priority, location, whichDate, whichProject) => {
    return {
        status, 
        title,
        description,
        date, 
        priority,
        location,
        whichDate,
        whichProject,
    }
}

export { Task };