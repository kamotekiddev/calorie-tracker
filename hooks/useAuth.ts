import axios, { AxiosError } from "axios";
import { useMutation } from "react-query";
import { User } from "@prisma/client";
import { SignUpFormFields } from "@/model/user-schema";

export const useSignUp = () => {
  return useMutation<
    { message: string; user: User },
    AxiosError,
    SignUpFormFields
  >((data) => axios.post("/api/sign-up", data));
};
