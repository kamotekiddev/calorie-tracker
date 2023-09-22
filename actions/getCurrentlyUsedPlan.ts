import client from "@/lib/client";
import getCurrentUser from "@/lib/getCurrentUser";

const getCurrentlyUsedPlan = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error("Unauthorized");

    const currentlyUsedPlan = await client.plan.findUnique({
      where: { user_id: user.id, used_by_id: user.id },
    });

    return { currentlyUsedPlan };
  } catch (error) {
    return { error };
  }
};

export default getCurrentlyUsedPlan;
