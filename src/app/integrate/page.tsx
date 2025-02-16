"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  website: z.string().url().optional().or(z.literal("")),
  telegram: z.string().optional(),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  timeline: z.date().optional(),
  traffic: z.string().optional(),
  whitepaper: z.string().url().optional().or(z.literal("")),
  apiDocs: z.string().url().optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

export default function IntegratePage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: "",
      website: "",
      telegram: "",
      email: "",
      timeline: undefined,
      traffic: "",
      whitepaper: "",
      apiDocs: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <Section centerContent className="mx-auto max-w-6xl min-h-screen">
      <div className="flex lg:flex-row flex-col items-start">
        {/* Left Section */}
        <div className="flex flex-col flex-1 justify-center gap-4 p-6 lg:p-10">
          <Heading variant="h1" size="2xl">
            {`Let's see if we are a good fit`}
            <span className="block text-primary">Schedule a call with our team</span>
          </Heading>
          <Text className="text-muted-foreground">
            {`We're excited to see if we are a good fit. Expect a response within 24 hours.`}
          </Text>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-gray-900/50 p-6 lg:p-10 border border-white/10 rounded-lg w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="projectName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Project name" className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Website</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://yourwebsite.com"
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telegram"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telegram</FormLabel>
                    <FormControl>
                      <Input placeholder="@vdex" className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="contact@example.com"
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Target Launch Timeline</FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 w-4 h-4" />
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 w-auto">
                          <Calendar
                            mode="single"
                            selected={field.value ? new Date(field.value) : undefined}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="traffic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Organic Traffic</FormLabel>
                    <FormControl>
                      <Input placeholder="10,000 Visitors" className="bg-background" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whitepaper"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Provide link to your whitepaper</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://yourwebsite/whitepaper"
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="apiDocs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>API Documentation Link</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://api.yourwebsite.com/docs"
                        className="bg-background"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="mt-2 w-full">
                Complete Submission
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </Section>
  );
}
