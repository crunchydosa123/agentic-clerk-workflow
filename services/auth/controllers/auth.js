import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

const prisma = new PrismaClient();

const userSchema = z.object({
    email: z.string().email(),
    password: z.string(),
});

export const register = async (req, res)=>{
    try{
        const {email, password} = userSchema.parse(req.body);

        const existingUser = await prisma.user.findUnique({ where: {email}});
        if(existingUser) return res.status(400).json({error: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prisma.user.create({
            data: {email, password: hashedPassword}
        });

        res.status(201).json({ message: "User registered successfully" });
    }catch(error){
        res.status(400).json({ error: error.message });
    }
}

export const login = async (req, res)=>{
    try{
        const {email, password} = userSchema.parse(req.body);

        const user = await prisma.user.findUnique({ where: {email}});
        if(!user) return res.status(400).json({ error: "Invalid Credentials"});
        
        
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) return res.status(400).json({error: "Invalid credentials"});
        
        const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET, { expiresIn: "2h"});

        res.json({token});
    }catch(error){
        res.status(400).json({ error: error.message });
    }
};