import { toast } from "@/hooks/use-toast";

export function toastAlert(message: string) {
  toast({
    title: message,
    variant: "destructive",
  });
}
