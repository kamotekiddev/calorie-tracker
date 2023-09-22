import getUserPlans from "@/actions/getUserPlans";
import CaloriePlanCard from "./CaloriePlanCard";

async function CaloriePlans() {
  const { plans } = await getUserPlans();

  return (
    <article>
      <h1 className="mb-4 text-xl font-bold text-slate-700">Plans</h1>
      <section className="grid gap-2">
        {plans?.map((plan) => (
          <CaloriePlanCard key={plan.id} plan={plan} />
        ))}
      </section>
    </article>
  );
}

export default CaloriePlans;
