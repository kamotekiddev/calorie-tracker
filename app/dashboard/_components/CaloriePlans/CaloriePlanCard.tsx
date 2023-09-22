import { Plan } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CaloriePlanCardProps = {
  plan: Plan;
};

function CaloriePlanCard({ plan }: CaloriePlanCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-700 font-black">{plan.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Calorie Per Day</CardDescription>
        <CardTitle className="text-4xl text-primary font-black">
          {plan.target_calories}
        </CardTitle>
      </CardContent>
    </Card>
  );
}

export default CaloriePlanCard;
