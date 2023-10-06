"use client";

import { Copy, Server } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Badge, BadgeProps } from "./ui/badge";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

interface ApiAlertProps {
  title: string;
  descrition: string;
  variant: "public" | "admin";
}

const textMap: Record<ApiAlertProps["variant"], string> = {
  public: "Public",
  admin: "Admin ",
};

const variantMap: Record<ApiAlertProps["variant"], BadgeProps["variant"]> = {
  public: "secondary",
  admin: "destructive",
};

export const ApiAlert: React.FC<ApiAlertProps> = ({
  title,
  descrition,
  variant = "public",
}) => {
  const onCopy = () => {
    navigator.clipboard.writeText(descrition);
    toast.success("API route copied to the clipboard");
  };

  return (
    <Alert>
      <Server className='h-4 w-4' />
      <AlertTitle className='flex items-center gap-x-2'>
        {title}
        <Badge variant={variantMap[variant]}>{textMap[variant]}</Badge>
      </AlertTitle>
      <AlertDescription className='mt-4 flex items-center justify-between'>
        <code className='relative rouned bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
          {descrition}
        </code>
        <Button variant='outline' size='icon' onClick={onCopy}>
          <Copy className='h-4 w-4' />
        </Button>
      </AlertDescription>
    </Alert>
  );
};
