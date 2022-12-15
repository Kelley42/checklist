const Task = (status, title, description, date, priority, location, originalDate) => {
    return {
        status, 
        title,
        description,
        date, 
        priority,
        location,
        originalDate,
    }
}

export { Task };