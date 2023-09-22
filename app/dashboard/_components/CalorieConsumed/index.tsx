import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CalorieConsumed() {
  return (
    <Card className="bg-primary w-full">
      <CardHeader>
        <CardDescription className="text-white">Calorie Intake</CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-5xl font-black text-white">779</CardTitle>
      </CardContent>
    </Card>
  );
}

export default CalorieConsumed;
