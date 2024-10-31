import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

export const getUsers = async(req, res) =>{
    try{    
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed to find user"});
    }

};

export const getUser = async(req, res) =>{
    const id = req.params.id;
    try{    
        const user = await prisma.user.findUnique({
            where: {
              id: id,
            },
          })
        res.status(200).json(user);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed to find user"});
    }

};

export const updateUser = async(req, res) =>{
    const id = req.params.id;
    const {username, email, password} = req.body;
    try{    
        const updateUser = await prisma.user.update({
            where: {
              id:id ,
            },
            data: {
              username: username,
            },
          })
        res.status(200).json(updateUser);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed to find user"});
    }
};

export const deleteUser = async(req, res) =>{
    const id = req.params.id;
    try{    
        const deleteUser = await prisma.user.delete({
            where: {
              id: id,
            },
          })
        res.status(200).json(deleteUser);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Failed to find user"});
    }

};