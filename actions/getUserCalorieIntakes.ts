import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';
import getErrorMessage from '@/lib/getErrorMessage';

const getUserCalorieIntakes = async () => {
    try {
        const user = await getCurrentUser();
        if (!user) throw new Error('Unauthorized');

        const userCalorieIntakeHistory = await client.calorieIntake.findMany({
            orderBy: { createdAt: 'desc' },
            where: {
                user_id: user.id,
            },
        });

        return { userCalorieIntakeHistory };
    } catch (error) {
        return { isError: true, error: getErrorMessage(error) };
    }
};

export default getUserCalorieIntakes;
