import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WeightHistoryCard() {
  return (
    <Card className="border-x-0 border-t-0 rounded-none shadow-none border-b">
      <CardHeader className="p-4">
        <CardDescription className="text-primary">Kg</CardDescription>
        <CardTitle className="font-black">78.9</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default WeightHistoryCard;
