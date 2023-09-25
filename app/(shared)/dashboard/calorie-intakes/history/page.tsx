import { Separator } from '@/components/ui/separator';
import CalorieIntakeList from './_components/CalorieIntakeList';
import getUserCalorieIntakes from '@/actions/getUserCalorieIntakes';
import ErrorMessage from '@/components/ErrorMessage';

async function History() {
    const { userCalorieIntakeHistory, isError, error } =
        await getUserCalorieIntakes();

    if (isError)
        return (
            <main className='p-4 w-full max-w-5xl mx-auto'>
                <ErrorMessage error={error} />
            </main>
        );

    return (
        <main className='p-4 max-w-5xl w-full mx-auto'>
            <header className='mb-4'>
                <h1 className='text-xl font-bold'>Calorie Intake History</h1>
            </header>
            <Separator />
            <CalorieIntakeList
                calorieIntakeHistory={userCalorieIntakeHistory}
            />
        </main>
    );
}

export default History;
