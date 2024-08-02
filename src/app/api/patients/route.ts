import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  try {
    const { rows } = await sql`SELECT * FROM patients ORDER BY createdat DESC`;
    return NextResponse.json({ patients: rows }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 404 });
  }
}

export async function POST(request: Request) {
  try {
    const { name, avatar, description, website } = await request.json();

    await sql` INSERT INTO patients (id, name, avatar, description, website, createdat) VALUES (${uuidv4()}, ${name}, ${avatar}, ${description}, ${website},${new Date().toISOString()}) RETURNING *`;
    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, name, avatar, description, website } = await request.json();

    await sql`UPDATE patients SET name = ${name}, avatar = ${avatar}, description = ${description}, website = ${website} WHERE id = ${id}`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    await sql`DELETE FROM patients WHERE id = ${id}`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
