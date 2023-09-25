'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form } from '@/components/ui/form';
import {
    CalorieIntakeFields,
    CalorieIntakeSchema,
} from '@/model/calorie-intake-schema';
import { Button } from '@/components/ui/button';
import { useIntakeCalorie } from '@/hooks/useCalorieIntakes';
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

const defaultValues: CalorieIntakeFields = {
    calories: 0,
    description: '',
};

function IntakeCalorieModal() {
    const [open, setOpen] = useState(false);
    const { toast } = useToast();
    const router = useRouter();
    const intakeCalorie = useIntakeCalorie();

    const form = useForm<CalorieIntakeFields>({
        defaultValues,
        resolver: zodResolver(CalorieIntakeSchema),
    });

    const closeModal = () => {
        if (intakeCalorie.isLoading) return null;
        form.reset(defaultValues);
        setOpen(false);
    };

    const onSubmit = async (values: CalorieIntakeFields) => {
        try {
            await intakeCalorie.mutateAsync(values);
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
            <DialogTrigger>
                <Button className='flex gap-2'>
                    Intake
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
                                <DialogTitle>Intake Calorie</DialogTitle>
                            </DialogHeader>
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
                            <DialogFooter className='flex gap-2 justify-end'>
                                <Button disabled={intakeCalorie.isLoading}>
                                    Intake Calories
                                </Button>
                            </DialogFooter>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default dynamic(() => Promise.resolve(IntakeCalorieModal), {
    ssr: false,
});
