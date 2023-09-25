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
