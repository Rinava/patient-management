import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const validate = ({
  name,
  avatar,
  description,
  website,
}: {
  name: string;
  avatar: string;
  description: string;
  website: string;
}) => {
  if (!name || !avatar || !description || !website) {
    return false;
  }

  if (
    !name.length ||
    !avatar.length ||
    !description.length ||
    !website.length
  ) {
    return false;
  }

  if (
    /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/.test(avatar) ===
    false
  ) {
    return false;
  }

  return true;
};

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

    if (!validate({ name, avatar, description, website })) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await sql` INSERT INTO patients (id, name, avatar, description, website, createdat) VALUES (${uuidv4()}, ${name}, ${avatar}, ${description}, ${website},${new Date().toISOString()}) RETURNING *`;
    return NextResponse.json({ status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, name, avatar, description, website } = await request.json();

    if (!validate({ name, avatar, description, website } || !id)) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await sql`UPDATE patients SET name = ${name}, avatar = ${avatar}, description = ${description}, website = ${website} WHERE id = ${id}`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }

    await sql`DELETE FROM patients WHERE id = ${id}`;
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
