import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { Plan } from "@prisma/client";
import { PlanFields } from "@/model/plan-sechema";

const useCreatePlan = () =>
  useMutation<
    { data: { message: string; body: Plan } },
    AxiosError,
    PlanFields
  >((data) => axios.post("/api/plans", data));

export default useCreatePlan;
