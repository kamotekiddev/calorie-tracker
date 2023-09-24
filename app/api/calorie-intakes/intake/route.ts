import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import { CalorieIntakeSchema } from '@/model/calorie-intake-schema';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const user = await getCurrentUser();
        const body = await req.json();

        if (!user)
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 },
            );

        const response = CalorieIntakeSchema.safeParse(body);

        if (!response.success)
            return NextResponse.json(
                { message: 'Invalid Data' },
                { status: 400 },
            );
        // TODO create a multiple create of intake in 1 go using field array
        const newIntake = await client.calorieIntake.create({
            data: { ...body, user_id: user.id },
        });

        return NextResponse.json({
            message: 'New calorie intake added.',
            body: newIntake,
        });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error', error },
            { status: 500 },
        );
    }
}
