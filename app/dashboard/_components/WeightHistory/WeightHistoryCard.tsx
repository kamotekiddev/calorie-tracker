import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WeightHistoryCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>78.9</CardTitle>
        <CardDescription className="text-primary">Kg</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default WeightHistoryCard;
