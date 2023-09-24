import { redirect } from 'next/navigation';
import getCurrentUser from '@/lib/getCurrentUser';
import SignInForm from './_components/SignInForm';

async function SignIn() {
    const user = await getCurrentUser();

    if (user) redirect('/dashboard');

    return (
        <main className='p-4 grid h-screen place-items-center'>
            <SignInForm />
        </main>
    );
}

export default SignIn;
