import client from "@/lib/client";
import getCurrentUser from "@/lib/getCurrentUser";

const getUserPlans = async () => {
  try {
    const user = await getCurrentUser();
    if (!user) throw new Error("Unauthorized");

    const plans = await client.plan.findMany({
      where: { user_id: user.id },
    });

    return { plans };
  } catch (error) {
    return { error };
  }
};

export default getUserPlans;
