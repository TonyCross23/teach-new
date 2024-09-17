import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import * as z from 'zod';

// Schema validation for category
const categorySchema = z.object({
  catName: z.string().min(1, "Category name is required").max(100),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate the request body
    const { catName } = categorySchema.parse(body);

    // Check if the category catName already exists
    const existingCategory = await db.category.findFirst({
      where: { catName },
    });

    if (existingCategory) {
      return NextResponse.json(
        { message: "Category name already exists" },
        { status: 409 }
      );
    }

    // Create a new category
    const newCategory = await db.category.create({
      data: { name },
    });

    return NextResponse.json(
      { name: newCategory, message: "New category created successfully" },
      { status: 201 }
    );
  } catch (error: unknown) {
    // Improved error handling to provide more details
    return NextResponse.json(
      { message: "Something went wrong!", error: error.message },
      { status: 500 }
    );
  }
}
