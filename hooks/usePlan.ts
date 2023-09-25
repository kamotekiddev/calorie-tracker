import axios, { AxiosError } from 'axios';
import { useMutation } from 'react-query';
import { Plan } from '@prisma/client';
import { PlanFields } from '@/model/plan-sechema';

export const useCreatePlan = () =>
    useMutation<
        { data: { message: string; body: Plan } },
        AxiosError,
        PlanFields
    >((data) => axios.post('/api/plans', data));

export const useSetupPlan = () =>
    useMutation<
        { data: { message: string; body: Plan } },
        AxiosError,
        PlanFields
    >((data) => axios.post('/api/plans/setup-plan', data));

export const useUpdatePlan = () =>
    useMutation<{ data: { message: string; body: Plan } }, AxiosError, string>(
        (id) => axios.put('/api/plans/change-plan', { id }),
    );
