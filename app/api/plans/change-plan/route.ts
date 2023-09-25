import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
    try {
        const { id } = await req.json();
        const user = await getCurrentUser();

        if (!user)
            return NextResponse.json(
                { message: 'Unauthorized' },
                { status: 401 },
            );

        const existingPlan = await client.plan.findUnique({
            where: { id },
        });

        if (!existingPlan)
            return NextResponse.json(
                { message: 'Plan not found' },
                { status: 404 },
            );

        await client.plan.update({
            where: { used_by_id: user.id },
            data: { used_by_id: null },
        });

        const selectedPlan = await client.plan.update({
            where: { id },
            data: { used_by_id: user.id },
        });

        return NextResponse.json({
            message: 'Plan selected',
            body: selectedPlan,
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
