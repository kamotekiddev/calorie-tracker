import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import { PlanSchema } from '@/model/plan-sechema';
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

        const response = PlanSchema.safeParse(body);

        if (!response.success)
            return NextResponse.json(
                { message: 'Invalid Data' },
                { status: 400 },
            );

        const newPlan = await client.plan.create({
            data: { ...body, user_id: user.id },
        });

        return NextResponse.json({ message: 'New plan added.', body: newPlan });
    } catch (error) {
        return NextResponse.json(
            { message: 'Internal server error', error },
            { status: 500 },
        );
    }
}
