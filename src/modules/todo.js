const todoFactory = (title, dueDate, priority, description, checkbox) => {
    const sayTitle = () => console.log("this is my title");
    return {title, dueDate, priority, description, checkbox };
};

const dance = todoFactory("dancing");
