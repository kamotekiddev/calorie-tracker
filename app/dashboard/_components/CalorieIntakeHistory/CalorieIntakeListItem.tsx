import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CalorieIntakeListItem() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-black">120</CardTitle>
        <CardDescription className="text-primary">Calories</CardDescription>
      </CardHeader>
      <CardContent>200 grams white rice rice</CardContent>
    </Card>
  );
}

export default CalorieIntakeListItem;
