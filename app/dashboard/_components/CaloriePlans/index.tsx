import React from "react";
import CaloriePlanCard from "./CaloriePlanCard";

function CaloriePlans() {
  return (
    <article>
      <h1 className="mb-4 text-xl font-bold text-slate-700">Plans</h1>
      <section className="flex flex-wrap gap-4">
        <CaloriePlanCard />
        <CaloriePlanCard />
      </section>
    </article>
  );
}

export default CaloriePlans;
