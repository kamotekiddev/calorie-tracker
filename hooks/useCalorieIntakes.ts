import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";

import { CalorieIntake } from "@prisma/client";
import { CalorieIntakeFields } from "@/model/calorie-intake-schema";

export const useIntakeCalorie = () =>
  useMutation<
    { data: { message: string; body: CalorieIntake } },
    AxiosError,
    CalorieIntakeFields
  >((data) => axios.post("/api/calorie-intakes/intake", data));
