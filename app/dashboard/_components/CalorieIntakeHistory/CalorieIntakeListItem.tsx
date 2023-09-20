import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function CalorieIntakeListItem() {
  return (
    <Card className="shadow-none border-t-0 border-x-0 rounded-none border-b">
      <CardHeader className="p-4">
        <CardTitle className="font-black leading-none">120</CardTitle>
        <CardDescription className="text-primary">Calories</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">200 grams white rice rice</CardContent>
    </Card>
  );
}

export default CalorieIntakeListItem;
