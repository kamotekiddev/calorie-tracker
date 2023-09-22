import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalorieIntake } from "@prisma/client";

type CalorieIntakeListItemProps = {
  calorieIntake: CalorieIntake;
};

function CalorieIntakeListItem({ calorieIntake }: CalorieIntakeListItemProps) {
  return (
    <Card className="shadow-none border-t-0 border-x-0 rounded-none border-b">
      <CardHeader className="p-4">
        <CardTitle className="font-black leading-none">
          {calorieIntake.calories}
        </CardTitle>
        <CardDescription className="text-primary">Calories</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">{calorieIntake.description}</CardContent>
    </Card>
  );
}

export default CalorieIntakeListItem;
