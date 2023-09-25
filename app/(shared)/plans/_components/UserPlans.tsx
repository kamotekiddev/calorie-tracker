import { Plan } from '@prisma/client';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

type UserPlansProps = {
    userPlans?: Plan[];
};

function UserPlans({ userPlans = [] }: UserPlansProps) {
    return (
        <Table>
            <TableHeader>
                <TableRow className='bg-muted/50 uppercase tracking-wide'>
                    <TableHead className='w-[200px]'>Target Calorie</TableHead>
                    <TableHead>Plan Name</TableHead>
                    <TableHead className='text-right'>Created At</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {userPlans.map((plan) => (
                    <TableRow key={plan.id}>
                        <TableCell className='font-medium'>
                            {plan.target_calories}
                        </TableCell>
                        <TableCell>{plan.name}</TableCell>
                        <TableCell className='text-right'>
                            {plan.createdAt.toDateString()}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default UserPlans;
