import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CalorieIntake } from '@prisma/client';
import EmptyState from '@/components/EmptyState';

type CalorieIntakeListProps = {
    calorieIntakeHistory?: CalorieIntake[];
};
function CalorieIntakeList({
    calorieIntakeHistory = [],
}: CalorieIntakeListProps) {
    if (!calorieIntakeHistory.length) return <EmptyState />;

    return (
        <Table>
            <TableHeader className='uppercase tracking-wide'>
                <TableRow className='bg-muted/50'>
                    <TableHead>Calories</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className='text-right'>
                        Intake Date Time
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {calorieIntakeHistory.map((calorieIntake) => (
                    <TableRow key={calorieIntake.id}>
                        <TableCell className='font-semibold'>
                            {calorieIntake.calories}
                        </TableCell>
                        <TableCell>{calorieIntake.description}</TableCell>
                        <TableCell className='text-right'>
                            {calorieIntake.createdAt.toLocaleString()}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CalorieIntakeList;
