'use client';

import Link from 'next/link';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    CalorieIntakeFields,
    CalorieIntakeSchema,
} from '@/model/calorie-intake-schema';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';
import { useIntakeCalorie } from '@/hooks/useCalorieIntakes';
import { useToast } from '@/components/ui/use-toast';
import FormInput from '@/components/form-elements/FormInput';

const defaultValues: CalorieIntakeFields = {
    calories: 0,
    description: '',
};

function IntakeCalorieForm() {
    const { toast } = useToast();
    const router = useRouter();
    const intakeCalorie = useIntakeCalorie();

    const form = useForm<CalorieIntakeFields>({
        defaultValues,
        resolver: zodResolver(CalorieIntakeSchema),
    });

    const onSubmit = async (values: CalorieIntakeFields) => {
        try {
            await intakeCalorie.mutateAsync(values);
            router.push('/dashboard');
        } catch (error) {
            if (isAxiosError<{ message: string }>(error))
                toast({
                    title: 'Error Occured',
                    description:
                        error.response?.data.message ||
                        'Please try again later.',
                    variant: 'destructive',
                });
        }
    };

    // TODO make this a modal

    return (
        <Form {...form}>
            <form className='w-full' onSubmit={form.handleSubmit(onSubmit)}>
                <Card>
                    <CardHeader>
                        <CardTitle>Intake Calorie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormInput
                            label='Calories'
                            name='calories'
                            control={form.control}
                        />
                        <FormInput
                            label='Description'
                            name='description'
                            control={form.control}
                        />
                    </CardContent>
                    <CardFooter className='flex gap-4 justify-end'>
                        <Link
                            href='/dashboard'
                            className={buttonVariants({ variant: 'outline' })}
                        >
                            Go Back
                        </Link>
                        <Button disabled={intakeCalorie.isLoading}>
                            Intake Calories
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}

export default IntakeCalorieForm;
