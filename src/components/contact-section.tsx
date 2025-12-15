"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Check, Loader2 } from 'lucide-react';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { AnimatedUnderline } from './animated-underline';
import { cn } from '@/lib/utils';


const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background">
      <motion.div
        className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
          <div className="flex justify-center mt-2"><AnimatedUnderline /></div>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            I’m currently available for freelance work and new opportunities. Have a project in mind? Let's talk.
          </p>
        </div>
        
        <div className="mt-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="floating-label-container">
                    <FormControl>
                      <Input placeholder="Name" {...field} className={cn("peer", "floating-label-input")} />
                    </FormControl>
                    <FormLabel className="floating-label">Name</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="floating-label-container">
                    <FormControl>
                      <Input type="email" placeholder="Email" {...field} className={cn("peer", "floating-label-input")} />
                    </FormControl>
                    <FormLabel className="floating-label">Email</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="floating-label-container">
                    <FormControl>
                      <Textarea placeholder="Message" {...field} className={cn("peer min-h-[120px]", "floating-label-input")} />
                    </FormControl>
                    <FormLabel className="floating-label">Message</FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting || isSuccess} className="w-full text-lg py-6">
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : isSuccess ? (
                  <>
                    <Check className="mr-2 h-5 w-5" />
                    Message Sent!
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Form>
        </div>
      </motion.div>
    </section>
  );
}
