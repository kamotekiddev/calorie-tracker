import { Input, InputProps } from "../ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

type FormInputProps<T> = {
  label?: string;
  name: Path<FieldValues & T>;
  control: Control<FieldValues & T>;
} & InputProps;

function FormInput<T>({ label, control, name, ...props }: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormDescription />
          {!!fieldState.error?.message && (
            <FormMessage>{fieldState.error?.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}

export default FormInput;
