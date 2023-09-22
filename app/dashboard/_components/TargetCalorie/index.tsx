import getCurrentlyUsedPlan from "@/actions/getCurrentlyUsedPlan";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function TargetCalorie() {
  const { currentlyUsedPlan } = await getCurrentlyUsedPlan();

  return (
    <Card className="bg-primary w-full">
      <CardHeader>
        <CardDescription className="text-white">
          Target Calories
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!currentlyUsedPlan && (
          <CardTitle className="text-white text-3xl">
            No Plan Selected
          </CardTitle>
        )}
        <CardTitle className="text-5xl font-black text-white">
          {currentlyUsedPlan?.target_calories}
        </CardTitle>
      </CardContent>
    </Card>
  );
}

export default TargetCalorie;
