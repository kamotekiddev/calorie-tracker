import client from "@/lib/client";
import getCurrentUser from "@/lib/getCurrentUser";

const getCurrentlyUsedPlan = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error("Unauthorized");

    const currenlyUsedPlan = await client.plan.findUnique({
      where: { used_by_id: user.id },
    });

    return { currenlyUsedPlan };
  } catch (error) {
    return { error };
  }
};

export default getCurrentlyUsedPlan;
