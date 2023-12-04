export const calculatePagesAmount = (todos, itemsPerPage) => {
    return Math.ceil(todos.length / itemsPerPage);
}

export const getFilteredTodos = (todos, itemsPerPage, currentPage) => {
    return todos.slice(itemsPerPage * (currentPage - 1), itemsPerPage * currentPage);
}

