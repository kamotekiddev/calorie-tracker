import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import getErrorMessage from '@/lib/getErrorMessage';

const getTodaysCalorieIntake = async () => {
    try {
        const today = new Date();
        const user = await getCurrentUser();
        if (!user) throw new Error('Unauthorized');

        const todaysCalorieIntakes = await client.calorieIntake.findMany({
            orderBy: { createdAt: 'desc' },
            where: {
                user_id: user.id,
                createdAt: {
                    gte: new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate(),
                        0,
                        0,
                        0,
                    ),
                    lt: new Date(
                        today.getFullYear(),
                        today.getMonth(),
                        today.getDate() + 1,
                        0,
                        0,
                        0,
                    ),
                },
            },
        });

        return { todaysCalorieIntakes };
    } catch (error) {
        return { isError: true, error: getErrorMessage(error) };
    }
};

export default getTodaysCalorieIntake;
