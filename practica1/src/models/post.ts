import { Schema, model, SchemaTypes } from "mongoose";

const postSchema = new Schema({
    title: { type: SchemaTypes.String, required: true },
    content: { type: SchemaTypes.String, required: true },
    date: { type: SchemaTypes.Date, default: Date.now },
    author: { type: SchemaTypes.ObjectId, required: true, ref: 'users' }
})

const postModel = model('posts', postSchema);

export default postModel;