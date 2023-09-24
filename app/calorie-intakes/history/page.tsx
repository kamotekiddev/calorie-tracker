import { Separator } from "@/components/ui/separator";
import CalorieIntakeList from "./_components/CalorieIntakeList";
import getUserCalorieIntakes from "@/actions/getUserCalorieIntakes";

async function History() {
  const { userCalorieIntakeHistory } = await getUserCalorieIntakes();

  return (
    <main className="p-4 max-w-5xl mx-auto">
      <header className="mb-4">
        <h1 className="text-xl font-bold">Calorie Intake History</h1>
      </header>
      <Separator />
      <CalorieIntakeList calorieIntakeHistory={userCalorieIntakeHistory} />
    </main>
  );
}

export default History;
