import { Request, Response } from 'express';
import postModel from '../models/post';
import userModel from '../models/user';
import { HttpStatus } from '../types/httpStatus';

export const createPost = async(req: Request, res: Response) => {
    try {
        const { title, content } = req.body;

        const newPost = new postModel({ title, content, author: (req as any).user.id });
        await newPost.save();

        res.status(HttpStatus.SUCCESS).json(newPost);
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while creating the post" });
    }
}

export const getPosts = async(req: Request, res: Response) => {
    try {
        const posts = await postModel.find().populate('author', 'name email');
        res.status(HttpStatus.SUCCESS).json(posts);
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while retrieving all posts" });
    }
}