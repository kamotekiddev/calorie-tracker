'use client';

import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Plan } from '@prisma/client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useUpdatePlan } from '@/hooks/usePlan';
import { useToast } from '@/components/ui/use-toast';

type UserPlansProps = {
    userPlans?: Plan[];
};

function UserPlans({ userPlans = [] }: UserPlansProps) {
    const router = useRouter();
    const { toast } = useToast();
    const changePlan = useUpdatePlan();

    const handleChangePlan = async (id: string) => {
        try {
            const { data } = await changePlan.mutateAsync(id);
            router.refresh();
            toast({ title: 'Success', description: data.message });
        } catch (error) {
            if (isAxiosError<{ message: string }>(error))
                toast({
                    title: 'Error Occured',
                    description:
                        error.response?.data.message ||
                        'Something went wrong, Please try again later.',
                });
        }
    };

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
                                onClick={() => handleChangePlan(plan.id)}
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
