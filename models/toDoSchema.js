const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true, 
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['COMPLETED', 'PENDING', 'INCOMPLETE'],
    }
},
    { 
        timestamps: true 
    }
);

const todoListSchema = mongoose.model('ToDoSchema', toDoSchema);

module.exports = todoListSchema;