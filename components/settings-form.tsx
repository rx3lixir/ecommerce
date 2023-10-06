"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Store } from "@prisma/client";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

interface SettingsFormProps {
  initialData: Store;
}

const formScema = z.object({
  name: z.string().min(1),
});

type SettingsFormValues = z.infer<typeof formScema>;

export const SettingsForm: React.FC<SettingsFormProps> = ({ initialData }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(formScema),
    defaultValues: initialData,
  });

  const onSubmit = async (data: SettingsFormValues) => {
    console.log(data);
  };

  return (
    <>
      <div className=' flex items-center justify-between'>
        <Heading title='Settings' description='Manage your store preferences' />
        <Button
          disabled={loading}
          variant='destructive'
          size='sm'
          onClick={() => setOpen(true)}
        >
          <Trash className='h-4 w-4' />
        </Button>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-8 w-full'
        >
          <div className='grid grid-cols-3 gap-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <FormControl>
                      <Input
                        disabled={loading}
                        placeholder='Store name'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
          <Button disabled={loading} className='ml-auto' type='submit'>
            Save changes
          </Button>
        </form>
      </Form>
    </>
  );
};
