export const todoUI= () => {

    const todoFactory = (title, dueDate, priority, description, checkbox) => {
        const sayTitle = () => console.log("I am a todo");
        return {title, dueDate, priority, description, checkbox, sayTitle };
    };
return{ todoFactory };
};

