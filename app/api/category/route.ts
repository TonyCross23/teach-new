import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

// Define the schema for validation
const categorySchema = z.object({
  name: z.string().min(1, "Category name is required").max(100, "Category name must be less than 100 characters"),
});

export async function POST(req: Request) {
  try {
    // Parse and validate the request body
    const body = await req.json();
    
    // Log the received body for debugging purposes
    console.log("Received body:", body);

    // Validate against schema
    const { name } = categorySchema.parse(body);

    // Check if the category already exists
    const existingCategory = await db.category.findFirst({
      where: { catName: name },
    });

    if (existingCategory) {
      return NextResponse.json({ message: "Category name already exists" }, { status: 409 });
    }

    // Create a new category
    const newCategory = await db.category.create({
      data: { catName: name },
    });

    return NextResponse.json({ name: newCategory, message: "New category created successfully" }, { status: 201 });
  } catch (error) {
    // Handle validation errors specifically
    if (error instanceof z.ZodError) {
      return NextResponse.json({ message: "Validation error", errors: error.errors }, { status: 400 });
    }

    // Handle other errors
    return NextResponse.json({ message: "Something went wrong!", error: error.message }, { status: 500 });
  }
}
