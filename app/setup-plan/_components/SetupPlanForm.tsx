'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import FormInput from '@/components/form-elements/FormInput';
import { Form } from '@/components/ui/form';
import { PlanFields, PlanSchema } from '@/model/plan-sechema';
import { useSetupPlan } from '@/hooks/usePlan';
import { useToast } from '@/components/ui/use-toast';
import { isAxiosError } from 'axios';

const defaultValues: PlanFields = {
    target_calories: 1500,
    name: '',
};

function SetupPlanForm() {
    const { toast } = useToast();
    const router = useRouter();
    const setupPlan = useSetupPlan();

    const form = useForm<PlanFields>({
        defaultValues,
        resolver: zodResolver(PlanSchema),
    });

    const onSubmit = async (values: PlanFields) => {
        try {
            await setupPlan.mutateAsync(values);
            router.replace('/dashboard');
        } catch (error) {
            if (isAxiosError<{ message: string }>(error))
                toast({
                    title: 'Error Occured',
                    description: error.response?.data.message,
                });
        }
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className='w-full max-w-xl'
            >
                <Card>
                    <CardHeader>
                        <CardTitle className='font-extrabold'>
                            Create Plan
                        </CardTitle>
                        <CardDescription>
                            Fill the details of your current plan
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <FormInput
                            label='Plan Name'
                            name='name'
                            control={form.control}
                        />
                        <FormInput
                            label='Target Calorie'
                            name='target_calories'
                            control={form.control}
                        />
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                        <Button disabled={setupPlan.isLoading} type='submit'>
                            Create Plan
                        </Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    );
}

export default SetupPlanForm;
