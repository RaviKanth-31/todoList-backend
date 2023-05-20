const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
    const todo = await ToDoModel.find();
    res.send(todo);
}

module.exports.saveToDo = (req, res) => {
    const { text, prem, ravi } = req.body;

    ToDoModel
        .create({ text, prem, ravi })
        .then((data) =>{ 
            console.log("Added Successfully...")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.deleteToDo = (req, res) => {
    const { _id } = req.body;

    console.log('id ---> ', _id);

    ToDoModel
        .findByIdAndDelete(_id)
        .then(() => res.set(201).send("Deleted Successfully..."))
        .catch((err) => console.log(err));
}

module.exports.updateTodo = (req, res) => {
    const { _id, text, prem, ravi } = req.body;

    ToDoModel
        .findByIdAndUpdate(_id, { text, prem, ravi })
        .then(() => res.set(201).send("Updated Successfully..."))
        .catch((err) => console.log(err));
}
