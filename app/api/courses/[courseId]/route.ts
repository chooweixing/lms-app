import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "../../../../lib/db";

export async function PATCH(req: Request, {params}: {params: {courseId: string}}) {
    try {
        const {userId} = auth();
        console.log('test')
        if(!userId) {
            return new NextResponse("Unauthorized", {status: 401})
        }
        const {courseId} = params
        const values = await req.json()
        const course = await db.course.update({
            where: {
                id:courseId,
                userId
            },
            data: {
                ...values
            }
        })
        return new NextResponse("Successfully updated", {status: 200})
    } catch (error) {
        console.log("[COURSE_ID]", error)
        return new NextResponse("Internal Error", { status: 500})
    }
}