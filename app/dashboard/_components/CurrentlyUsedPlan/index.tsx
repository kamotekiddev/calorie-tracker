import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

function CurrentlyUsedPlan() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardDescription>Target Calories</CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="text-3xl text-primary font-black">779.2 / 1,558</h1>
        </CardContent>
      </Card>
    </section>
  );
}

export default CurrentlyUsedPlan;
