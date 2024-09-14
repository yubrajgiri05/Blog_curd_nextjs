import { NextResponse } from "next/server";
import Topic from "../../../../models/topic";
import connectMongoDB from "../../../../libs/mongodb";
import { Types } from "mongoose";


export async function POST(request) {
  try {
    const { title, description, author, date } = await request.json();
    console.log(title, description, author, date);

    if (!title || !description || !author || !date) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 } 
      );
    }

    await connectMongoDB();

    await Topic.create({ title, description, author, date });

    return NextResponse.json(
      {
        success: true,
        message: "Topic created",
      },
      { status: 201 } 
    );
  } catch (error) {
    console.error("Error creating topic:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create topic",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB(); 
    const topics = await Topic.find();

    return NextResponse.json(
      {
        success: true,
        topics,
      },
      { status: 200 } 
    );
  } catch (error) {
    console.error("Error retrieving topics:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve topics",
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing ID",
        },
        { status: 400 }
      );
    }

    await connectMongoDB();

    const deletedTopic = await Topic.findByIdAndDelete(id);

    if (!deletedTopic) {
      return NextResponse.json(
        {
          success: false,
          message: "Topic not found",
        },
        { status: 404 } 
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Topic deleted successfully",
      },
      { status: 200 } 
    );
  } catch (error) {
    console.error("Error deleting topic:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete topic",
        error: error.message,
      },
      { status: 500 } 
    );
  }
}