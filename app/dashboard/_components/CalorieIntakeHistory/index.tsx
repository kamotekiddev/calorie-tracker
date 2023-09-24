import Link from "next/link";
import getTodaysCalorieIntake from "@/actions/getTodaysCalorieIntake";
import TodaysCalorieIntakeList from "./TodaysCalorieIntakeList";

async function CalorieIntakeHistory() {
  const { todaysCalorieIntakes } = await getTodaysCalorieIntake();

  return (
    <article>
      <div className="flex gap-4 mb-4 justify-between items-center">
        <h1 className="text-xl font-bold">Todays Intake</h1>
        <Link className="flex hover:underline" href="/calorie-intakes/history">
          View History
        </Link>
      </div>
      <section>
        <TodaysCalorieIntakeList todaysCalorieIntakes={todaysCalorieIntakes} />
      </section>
    </article>
  );
}

export default CalorieIntakeHistory;
