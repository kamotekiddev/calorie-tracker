import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import CalorieIntakeListItem from "./CalorieIntakeListItem";
import getTodaysCalorieIntake from "@/actions/getTodaysCalorieIntake";

async function CalorieIntakeHistory() {
  const { todaysCalorieIntakes } = await getTodaysCalorieIntake();

  return (
    <article>
      <div className="flex gap-4 mb-4 justify-between items-center">
        <h1 className="text-xl font-bold">Calorie Intake</h1>
        <Link
          href="/calorie-intakes/intake"
          className={buttonVariants({ size: "sm" })}
        >
          Intake Calorie
        </Link>
      </div>
      <section className="grid border border-b-none rounded-lg overflow-hidden">
        {!todaysCalorieIntakes?.length && (
          <div className="p-4">No Data Found.</div>
        )}
        {todaysCalorieIntakes?.map((calorieIntake) => (
          <CalorieIntakeListItem
            key={calorieIntake.id}
            calorieIntake={calorieIntake}
          />
        ))}
      </section>
    </article>
  );
}

export default CalorieIntakeHistory;
