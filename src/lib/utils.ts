import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sanitizeString(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-zA-Z0-9]/g, "-") // Substitui caracteres especiais por hífen
    .replace(/-+/g, "-") // Remove hífens consecutivos
    .replace(/^-|-$/g, "") // Remove hífens no início/fim
    .toLowerCase(); // Converte para minúsculas
}

export const formatDate = (date: string | number | Date) => {
  return format(date, "d 'de' MMMM 'de' yyyy 'às' HH:mm", {
    locale: ptBR,
  });
};

