import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const user = await getCurrentUser();

        if (!user)
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 },
            );

        const currentlyUsedPlan = await client.plan.findUnique({
            where: { used_by_id: user?.id },
        });

        return NextResponse.json(currentlyUsedPlan);
    } catch (error) {
        return NextResponse.json(error);
    }
}
