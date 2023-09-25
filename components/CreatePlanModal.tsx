'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog';
import FormInput from '@/components/form-elements/FormInput';
import { PlanFields, PlanSchema } from '@/model/plan-sechema';
import { useCreatePlan } from '@/hooks/usePlan';

const defaultValues: PlanFields = {
    target_calories: 0,
    name: '',
};

function CreatePlanModal() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const createPlan = useCreatePlan();

    const form = useForm<PlanFields>({
        defaultValues,
        resolver: zodResolver(PlanSchema),
    });

    const closeModal = () => {
        if (createPlan.isLoading) return null;
        form.reset(defaultValues);
        setOpen(false);
    };

    const onSubmit = async (values: PlanFields) => {
        try {
            await createPlan.mutateAsync(values);
            router.refresh();
            form.reset(defaultValues);
            closeModal();
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

    const handleOpenChange = (open: boolean) =>
        open ? setOpen(true) : closeModal();

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button size='sm' variant='outline' className='flex gap-2'>
                    New Plan
                    <Plus className='w-4 h-4' />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <Form {...form}>
                    <form
                        className='w-full'
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className='space-y-4'>
                            <DialogHeader>
                                <DialogTitle>New Plan</DialogTitle>
                            </DialogHeader>
                            <FormInput
                                label='Plan Name'
                                name='name'
                                control={form.control}
                            />
                            <FormInput
                                label='Target Calories'
                                name='target_calories'
                                control={form.control}
                            />
                            <DialogFooter className='flex gap-2 justify-end'>
                                <Button disabled={createPlan.isLoading}>
                                    Create
                                </Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default dynamic(() => Promise.resolve(CreatePlanModal), {
    ssr: false,
});
