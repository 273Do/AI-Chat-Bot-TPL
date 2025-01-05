import { toast } from "@/hooks/use-toast";

const successToast = (title: string, message: string) => {
  toast({
    title: title,
    description: message,
  });
};

const errorToast = (title: string, message: string) => {
  toast({
    variant: "destructive",
    title: title,
    description: message,
    //   action: <ToastAction altText="Try again">Try again</ToastAction>,
  });
};

export { successToast, errorToast };
