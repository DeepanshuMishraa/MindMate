import { connectDb } from "@/lib/mongoDb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await connectDb();
        const {email} = await req.json();

      const user =  await User.findOne({email}).select("_id");
        console.log("user: ",user)
        return NextResponse.json({
            user
        })
    }catch(Err){
        console.log(Err);
    }
}