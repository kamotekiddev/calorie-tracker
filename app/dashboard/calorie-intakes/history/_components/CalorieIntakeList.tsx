import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CalorieIntake } from '@prisma/client';

type CalorieIntakeListProps = {
    calorieIntakeHistory?: CalorieIntake[];
};
function CalorieIntakeList({
    calorieIntakeHistory = [],
}: CalorieIntakeListProps) {
    return (
        <Table>
            <TableHeader className='uppercase tracking-wide'>
                <TableRow className='bg-muted/50'>
                    <TableHead className='w-[100px]'>Calories</TableHead>
                    <TableHead>Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {calorieIntakeHistory.map((calorieIntake) => (
                    <TableRow key={calorieIntake.id}>
                        <TableCell className='font-semibold'>
                            {calorieIntake.calories}
                        </TableCell>
                        <TableCell>{calorieIntake.description}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default CalorieIntakeList;
