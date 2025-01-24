import React from "react";
import { FormControl, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Popover } from "@radix-ui/react-popover";
import { PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ControllerRenderProps } from "react-hook-form";
import { TimePicker } from "./time-picker";
import { ptBR } from "date-fns/locale";

const DataPickerForm = ({
  field,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: ControllerRenderProps<any, any>;
  label: string;
}) => {
  return (
    <FormItem className="flex flex-col w-full">
      <FormLabel className="text-lg font-black">{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "w-full pl-3 text-left font-normal h-12",
                !field.value && "text-muted-foreground"
              )}
            >
              {field.value ? (
                format(field.value, "dd MMMM yyyy HH:mm", { locale: ptBR })
              ) : (
                <span>Escolha a data</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Select
            onValueChange={(value) =>
              field.onChange(
                new Date(
                  new Date().setDate(new Date().getDate() + parseInt(value))
                )
              )
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="1">Amanhã</SelectItem>
              <SelectItem value="3">Em 3 dias</SelectItem>
              <SelectItem value="7">Em uma semana</SelectItem>
              <SelectItem value="14">Em duas semanas</SelectItem>
              <SelectItem value="31">Em um mês</SelectItem>
            </SelectContent>
          </Select>
          <Calendar
            mode="single"
            numberOfMonths={2}
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) => date < new Date()}
            initialFocus
          />
          <div className="p-3 border-t border-border">
            <TimePicker setDate={field.onChange} date={field.value} />
          </div>
        </PopoverContent>
      </Popover>
      <FormMessage />
    </FormItem>
  );
};

export default DataPickerForm;
