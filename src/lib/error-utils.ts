import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";

export function toastAlert(message: string) {
  toast({
    title: message,
    variant: "destructive",
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function handleAxiosError(error: AxiosError<any, any>) {
  if (error.response) {
    // server responded with a error status code
    console.error("status code error", error.request.status);
    console.error(error.response.data, error.response.headers);

    toastAlert(error.response.data.error.message);
  } else if (error.request) {
    // The request was made but no response was received
    console.error(error.request);
    console.error("The request was made but no response was received");
    toastAlert("Sorry, no response from the server. Please try again");
  }
}
