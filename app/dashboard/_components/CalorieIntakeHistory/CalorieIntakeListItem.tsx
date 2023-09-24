import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CalorieIntake } from "@prisma/client";

type CalorieIntakeListItemProps = {
  calorieIntake: CalorieIntake;
};

function CalorieIntakeListItem({ calorieIntake }: CalorieIntakeListItemProps) {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <div className="flex gap-6">
          <div className="mb-4">
            <CardTitle className="font-black leading-none">
              {calorieIntake.calories}
            </CardTitle>
            <CardDescription className="text-primary">Calories</CardDescription>
          </div>
          <p>{calorieIntake.description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default CalorieIntakeListItem;
