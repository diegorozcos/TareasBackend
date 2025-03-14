import { Request, Response } from 'express';
import bcrypt from 'bcryptjs'; 
import { HttpStatus } from '../types/httpStatus';
import userModel from '../models/user';


export const createUser = async(req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            res.status(HttpStatus.BAD_REQUEST).json({ message: "User already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ name, email, password: hashedPassword, role })
        await newUser.save();

        res.status(HttpStatus.CREATED).json({ message: "User created successfully"});
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while creating the user", error});
    }
}

export const getAllUsers = async(req: Request, res: Response) => {
    try {
        const allUsers = await userModel.find({ role: 'user' });
        res.status(HttpStatus.SUCCESS).json({ allUsers });
    } catch (error) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while retrieving all users" });
    }
}

export const getSingleUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        res.status(HttpStatus.SUCCESS).json({ user });
    } catch {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while retrieving a single user" });
    }
}

export const updateUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const updatedFields: any = {};

        if (name) updatedFields.name = name;
        if (email) updatedFields.email = email;
        if (password) updatedFields.password = await bcrypt.hash(password, 10);

        const updatedUser = await userModel.findByIdAndUpdate(id, updatedFields, {new: true});

        res.status(HttpStatus.SUCCESS).json({ updatedUser });
    } catch {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while updating the user" });
    }
}

export const deleteUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await userModel.findByIdAndDelete(id);
        res.status(HttpStatus.SUCCESS).json({ message: "User deleted succesfully" });
    } catch {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: "An error occured while deleting the user" });
    }
}