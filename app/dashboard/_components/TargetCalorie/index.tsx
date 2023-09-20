import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TargetCalorie() {
  return (
    <Card className="bg-primary w-full">
      <CardHeader>
        <CardDescription className="text-white">
          Target Calories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-3xl font-black text-white">1,558</CardTitle>
      </CardContent>
    </Card>
  );
}

export default TargetCalorie;
