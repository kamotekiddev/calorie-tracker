import React from "react";
import WeightHistoryCard from "./WeightHistoryCard";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function WeightHistory() {
  return (
    <article>
      <div className="flex gap-4 justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Weight History</h1>
        <Link href="" className={buttonVariants({ size: "sm" })}>
          View All
        </Link>
      </div>
      <section className="border rounded-lg border-b-0 overflow-hidden">
        <WeightHistoryCard />
        <WeightHistoryCard />
        <WeightHistoryCard />
      </section>
    </article>
  );
}

export default WeightHistory;
