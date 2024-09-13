import { NextResponse } from "next/server";
import Topic from "../../../../../models/topic";
import connectMongoDB from "../../../../../libs/mongodb";

export async function PUT(request,{params}){
    const{ id } = params;
    const {newTitle:title, newDescription:description, newAuthor: author, newDate: date } =await  request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title, description, author, date});
    return NextResponse.json({success: true, message: "Topic updated"},{status: 200});
}

export async function GET ({params}){
    const{ id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic},{status: 200});    

}