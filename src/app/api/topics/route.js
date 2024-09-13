import { NextResponse } from "next/server";
import Topic from "../../../../models/topic";
import connectMongoDB from "../../../../libs/mongodb";
import { Types } from "mongoose";


export async function POST(request) {
  try {
    const { title, description, author, date } = await request.json();
    console.log(title, description, author, date);

    // Check if all fields are provided
    if (!title || !description || !author || !date) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 } // Set status code for bad request
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Create a new topic
    await Topic.create({ title, description, author, date });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Topic created",
      },
      { status: 201 } // Set status code for successful creation
    );
  } catch (error) {
    console.error("Error creating topic:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create topic",
        error: error.message,
      },
      { status: 500 } // Set status code for server error
    );
  }
}

export async function GET() {
  try {
    // Connect to MongoDB
    await connectMongoDB(); // Connect to MongoDB

    // Get all topics
    const topics = await Topic.find();

    // Return success response
    return NextResponse.json(
      {
        success: true,
        topics,
      },
      { status: 200 } // Set status code for successful retrieval
    );
  } catch (error) {
    console.error("Error retrieving topics:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to retrieve topics",
        error: error.message,
      },
      { status: 500 } // Set status code for server error
    );
  }
}

export async function DELETE(request) {
  try {
    // Parse the request URL to get the topic id from the query string
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // Check if id is provided and valid
    if (!id || !Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid or missing ID",
        },
        { status: 400 } // Set status code for bad request
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Find and delete the topic by id
    const deletedTopic = await Topic.findByIdAndDelete(id);

    // Check if the topic was found and deleted
    if (!deletedTopic) {
      return NextResponse.json(
        {
          success: false,
          message: "Topic not found",
        },
        { status: 404 } // Set status code for not found
      );
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Topic deleted successfully",
      },
      { status: 200 } // Set status code for successful deletion
    );
  } catch (error) {
    console.error("Error deleting topic:", error);

    // Return error response
    return NextResponse.json(
      {
        success: false,
        message: "Failed to delete topic",
        error: error.message,
      },
      { status: 500 } // Set status code for server error
    );
  }
}