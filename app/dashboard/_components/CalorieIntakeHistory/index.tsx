import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import CalorieIntakeListItem from "./CalorieIntakeListItem";

function CalorieIntakeHistory() {
  return (
    <article>
      <div className="flex gap-4 mb-4 justify-between items-center">
        <h1 className="text-xl font-bold">Calorie Intake</h1>
        <Link href="" className={buttonVariants({ size: "sm" })}>
          View All
        </Link>
      </div>
      <section className="grid gap-2">
        <CalorieIntakeListItem />
        <CalorieIntakeListItem />
        <CalorieIntakeListItem />
      </section>
    </article>
  );
}

export default CalorieIntakeHistory;
