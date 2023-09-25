import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { CalorieIntake } from '@prisma/client';
import { useMemo } from 'react';

type TodaysCalorieIntakeListProps = {
    todaysCalorieIntakes?: CalorieIntake[];
};
function TodaysCalorieIntakeList({
    todaysCalorieIntakes = [],
}: TodaysCalorieIntakeListProps) {
    const totalIntake = useMemo(
        () =>
            todaysCalorieIntakes.reduce(
                (total, curr) => total + curr.calories,
                0,
            ),
        [],
    );

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
            <TableFooter className='bg-white hover:bg-white border-t text-gray-800'>
                <TableRow className='font-semibold'>
                    <TableCell>{totalIntake} cal</TableCell>
                    <TableCell>Total</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

export default TodaysCalorieIntakeList;
