import { getServerSession } from "next-auth";
import authOptions from "./auth-options";
import client from "./client";

const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) return null;

    const user = await client.user.findUnique({
      where: { email: session.user.email },
    });

    return user;
  } catch (error) {
    return null;
  }
};

export default getCurrentUser;
