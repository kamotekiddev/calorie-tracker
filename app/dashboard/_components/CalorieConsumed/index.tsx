import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getTodaysCalorieIntake from "@/actions/getTodaysCalorieIntake";

async function CalorieConsumed() {
  const { todaysCalorieIntakes } = await getTodaysCalorieIntake();

  const totalCalorieIntakeForToday = todaysCalorieIntakes?.reduce(
    (total, curr) => total + curr.calories,
    0
  );

  return (
    <Card className="bg-primary w-full">
      <CardHeader>
        <CardDescription className="text-white">
          Todays Calorie Intake
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-5xl font-black text-white">
          {totalCalorieIntakeForToday}
        </CardTitle>
      </CardContent>
    </Card>
  );
}

export default CalorieConsumed;
