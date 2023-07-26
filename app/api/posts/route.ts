import {NextResponse} from "next/server";
import {posts} from "@/app/api/posts/posts";

export async function GET(req: Request) {
    return NextResponse.json(posts)
}