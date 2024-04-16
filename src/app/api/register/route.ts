import { connectDb } from "@/lib/mongoDb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"


export async function POST(req:NextRequest){
    try{

        const {name,email,employment,password} = await req.json();

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        await connectDb();
        if( await User.findOne({email}).select("_id")){
            return NextResponse.json({
                message:"user already exists"
            },{status:400});
        }
        await User.create({name,email,employment,password:hashedPassword});
        return NextResponse.json({
            message:"user registered successfully"
        },{status:201});
    }catch(err){
        console.log(err)
    }
}