import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { sendContactEmail } from "@/lib/email";
import { ReCaptchaCheckbox } from "@/components/security/ReCaptchaCheckbox";
import { useCallback, useState } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Valid email is required"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()]{10,20}$/, "Valid phone number is required"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  website: z.string().max(0).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetCounter, setCaptchaResetCounter] = useState(0);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    if (data.website) {
      return;
    }

    if (!captchaToken) {
      alert("Please complete captcha verification.");
      return;
    }

    try {
      await sendContactEmail({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
      });
      alert("Message sent successfully.");
      form.reset();
      setCaptchaResetCounter((value) => value + 1);
    } catch (error) {
      console.error("Contact form submission failed:", error);
      alert("Unable to send message right now. Please try again.");
    }
  }

  const handleTokenChange = useCallback((token: string | null) => {
    setCaptchaToken(token);
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Phone Number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="How can we help?"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem className="hidden">
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ReCaptchaCheckbox
          onTokenChange={handleTokenChange}
          resetCounter={captchaResetCounter}
        />
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
