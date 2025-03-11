import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";

export const LabelCustom = ({
  label,
  text,
}: {
  label?: string;
  text: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col border px-5 py-3 rounded-md w-full min-h-24">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <Label className="text-md">{text}</Label>
    </div>
  );
};

export const LabelInputRO = ({
  label,
  text,
}: {
  label?: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <Input className="text-md" readOnly value={text} />
    </div>
  );
};

export const LabelInputForm = ({
  field,
  label,
  placeholder,
  className,
  type,
  onChange,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: any;
  label?: string;
  placeholder: string;
  className?: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <FormItem className={className}>
      <FormLabel className="text-lg font-black">{label}</FormLabel>
      <FormControl>
        {onChange ? (
          <Input
            type={type}
            placeholder={placeholder}
            {...field}
            onChange={onChange}
          />
        ) : (
          <Input type={type} placeholder={placeholder} {...field} />
        )}
      </FormControl>
      <FormMessage />
    </FormItem>
  );
};
