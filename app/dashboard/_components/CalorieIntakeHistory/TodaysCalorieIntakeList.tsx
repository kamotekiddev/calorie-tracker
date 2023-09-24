import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalorieIntake } from "@prisma/client";

type TodaysCalorieIntakeListProps = {
  todaysCalorieIntakes?: CalorieIntake[];
};
function TodaysCalorieIntakeList({
  todaysCalorieIntakes = [],
}: TodaysCalorieIntakeListProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="uppercase tracking-wide">
          <TableHead className="w-[100px]">Calories</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todaysCalorieIntakes.map((todaysCalorie) => (
          <TableRow key={todaysCalorie.id}>
            <TableCell>{todaysCalorie.calories} cal</TableCell>
            <TableCell>{todaysCalorie.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TodaysCalorieIntakeList;
