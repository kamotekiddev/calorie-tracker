import client from '@/lib/client';
import getCurrentUser from '@/lib/getCurrentUser';

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
        return { error };
    }
};

export default getUserCalorieIntakes;
