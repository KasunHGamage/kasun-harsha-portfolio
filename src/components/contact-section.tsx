"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";
import { Check, Loader2, ArrowRight } from 'lucide-react';

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
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { socialLinks } from '@/lib/data';


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
  const linkedInUrl = socialLinks.find(link => link.name === 'LinkedIn')?.url || '#';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  
  const nameValue = useWatch({ control: form.control, name: 'name' });
  const emailValue = useWatch({ control: form.control, name: 'email' });
  const messageValue = useWatch({ control: form.control, name: 'message' });

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
    <motion.div
      className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get in Touch</h2>
        <p className="mt-4 text-lg leading-8 text-foreground/80 max-w-xl mx-auto">
          Have a project in mind? I’m available for freelance work and collaborations.
        </p>
      </div>
      
      <div className="mt-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem 
                  className="floating-label-container"
                  data-state={nameValue ? 'has-value' : 'empty'}
                >
                  <FormControl>
                    <Input {...field} className="floating-label-input" />
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
                <FormItem 
                  className="floating-label-container"
                  data-state={emailValue ? 'has-value' : 'empty'}
                >
                  <FormControl>
                    <Input type="email" {...field} className="floating-label-input" />
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
                <FormItem 
                  className="floating-label-container"
                  data-state={messageValue ? 'has-value' : 'empty'}
                >
                  <FormControl>
                    <Textarea {...field} className="min-h-[220px] floating-label-input" />
                  </FormControl>
                  <FormLabel className="floating-label">Message</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-center pt-4">
              <Button type="submit" variant="primary-apple" size="lg" disabled={isSubmitting || isSuccess} className="h-[60px] px-10 text-lg">
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
            </div>
          </form>
        </Form>
        <div className="mt-12 text-center">
          <Link href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center text-muted-foreground font-medium hover:text-primary transition-colors">
              Connect on LinkedIn
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
