export const todoUI= () => {

    const todoFactory = (title, dueDate, description, priority, checkbox) => {
        const sayTitle = () => console.log("I am a todo");
        return {title, dueDate, priority, description, checkbox, sayTitle };
    };
return{ todoFactory };
};

