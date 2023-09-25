'use client';

import { Plan } from '@prisma/client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUpdatePlan } from '@/hooks/usePlan';

type UserPlansProps = {
    userPlans?: Plan[];
};

function UserPlans({ userPlans = [] }: UserPlansProps) {
    const changePlan = useUpdatePlan();

    return (
        <Table>
            <TableHeader>
                <TableRow className='bg-muted/50 uppercase tracking-wide'>
                    <TableHead className='w-[100px]'></TableHead>
                    <TableHead className='w-[200px]'>Target Calorie</TableHead>
                    <TableHead>Plan Name</TableHead>
                    <TableHead>Created At</TableHead>
                    <TableHead className='text-right'></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {userPlans.map((plan) => (
                    <TableRow key={plan.id}>
                        <TableCell>
                            {plan.used_by_id && <Badge>In-use</Badge>}
                        </TableCell>
                        <TableCell className='font-medium'>
                            {plan.target_calories}
                        </TableCell>
                        <TableCell>{plan.name}</TableCell>
                        <TableCell>{plan.createdAt.toDateString()}</TableCell>
                        <TableCell className='text-right'>
                            <Button
                                size='sm'
                                variant='outline'
                                disabled={changePlan.isLoading}
                                onClick={() => changePlan.mutate(plan.id)}
                            >
                                Use
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default UserPlans;
