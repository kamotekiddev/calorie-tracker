import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CaloriePlanCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-slate-700 font-black">Plan A</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Calorie Per Day</CardDescription>
        <CardTitle className="text-4xl text-primary font-black">
          1,558
        </CardTitle>
      </CardContent>
    </Card>
  );
}

export default CaloriePlanCard;
