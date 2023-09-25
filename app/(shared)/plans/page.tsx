import { Separator } from '@/components/ui/separator';
import getUserPlans from '@/actions/getUserPlans';
import UserPlans from './_components/UserPlans';
import CreatePlanModal from '@/components/CreatePlanModal';

async function Plans() {
    const { plans } = await getUserPlans();

    return (
        <main className='p-4 max-w-5xl mx-auto w-full'>
            <div className='mb-4 flex gap-4 justify-between items-center'>
                <h1 className='text-xl font-bold'>Calorie Deficit Plans</h1>
                <CreatePlanModal />
            </div>
            <Separator />
            <UserPlans userPlans={plans} />
        </main>
    );
}

export default Plans;
