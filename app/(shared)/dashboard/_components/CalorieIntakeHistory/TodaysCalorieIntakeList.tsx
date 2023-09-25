import EmptyState from '@/components/EmptyState';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CalorieIntake } from '@prisma/client';

type TodaysCalorieIntakeListProps = {
    todaysCalorieIntakes?: CalorieIntake[];
};
function TodaysCalorieIntakeList({
    todaysCalorieIntakes = [],
}: TodaysCalorieIntakeListProps) {
    if (!todaysCalorieIntakes.length) return <EmptyState />;

    return (
        <Table>
            <TableHeader className='bg-muted'>
                <TableRow className='uppercase tracking-wide'>
                    <TableHead className='w-[100px]'>Calories</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead className='text-right'>Intake Time</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todaysCalorieIntakes.map((todaysCalorie) => (
                    <TableRow key={todaysCalorie.id}>
                        <TableCell>{todaysCalorie.calories} cal</TableCell>
                        <TableCell>{todaysCalorie.description}</TableCell>
                        <TableCell className='text-right'>
                            {todaysCalorie.createdAt.toLocaleTimeString()}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default TodaysCalorieIntakeList;
