'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { isAxiosError } from 'axios';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

import { SignUpFormSchema, SignUpFormFields } from '@/model/user-schema';
import { useSignUp } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import FormInput from '@/components/form-elements/FormInput';

const defaultValues: SignUpFormFields = {
    email: '',
    password: '',
    name: '',
    confirm_password: '',
};

function SignUpForm() {
    const router = useRouter();
    const { toast } = useToast();
    const signUp = useSignUp();

    const form = useForm<SignUpFormFields>({
        defaultValues,
        resolver: zodResolver(SignUpFormSchema),
    });

    const onSubmit = async (values: SignUpFormFields) => {
        try {
            await signUp.mutateAsync(values);
            router.replace('/dashboard');
        } catch (error) {
            if (isAxiosError<{ message: string }>(error))
                toast({
                    title: 'Error Occured',
                    description:
                        error.response?.data.message ||
                        'Something went wrong, Please try again later.',
                    variant: 'destructive',
                });
        }
    };

    return (
        <Form {...form}>
            <Card className='max-w-[400px] w-full'>
                <CardHeader>
                    <CardTitle className='text-xl font-extrabold text-center'>
                        Create an Account
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className='space-y-4'
                    >
                        <FormInput
                            name='email'
                            label='Email'
                            control={form.control}
                        />
                        <FormInput
                            name='name'
                            label='Name'
                            control={form.control}
                        />
                        <FormInput
                            name='password'
                            label='Password'
                            type='password'
                            control={form.control}
                        />
                        <FormInput
                            name='confirm_password'
                            label='Confirm Password'
                            type='password'
                            control={form.control}
                        />
                        <Button
                            type='submit'
                            className='w-full'
                            disabled={signUp.isLoading}
                        >
                            Sign Up
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <p className='text-sm w-full text-center'>
                        Already have an account?{' '}
                        <Link
                            href='/sign-in'
                            className='text-primary hover:underline font-semibold'
                        >
                            Sign In
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </Form>
    );
}

export default SignUpForm;
