import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    content: String
}, { timestamps: true })

const Todo = new mongoose.model('Todo', schema)
export default Todo 