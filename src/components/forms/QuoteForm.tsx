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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CONTACT_INFO } from "@/constants/contact";
import { sendQuoteEmail } from "@/lib/email";
import { ReCaptchaCheckbox } from "@/components/security/ReCaptchaCheckbox";
import { useCallback, useState } from "react";

const quoteSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()]{10,20}$/, "Phone number must be valid"),
  email: z.string().email("Invalid email address"),
  serviceType: z.string().min(1, "Please select a service type"),
  location: z.string().trim().min(2, "Location is required").max(150, "Location is too long"),
  preferredDate: z.string().optional(),
  description: z
    .string()
    .trim()
    .min(10, "Please provide some details about the project")
    .max(2000, "Project details are too long"),
  website: z.string().max(0).optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function QuoteForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaResetCounter, setCaptchaResetCounter] = useState(0);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceType: "",
      location: "",
      preferredDate: "",
      description: "",
      website: "",
    },
  });

  async function onSubmit(data: QuoteFormValues) {
    if (data.website) {
      return;
    }

    if (!captchaToken) {
      alert("Please complete captcha verification.");
      return;
    }

    try {
      await sendQuoteEmail({
        name: data.name,
        phone: data.phone,
        email: data.email,
        serviceType: data.serviceType,
        location: data.location,
        preferredDate: data.preferredDate,
        description: data.description,
      });
      alert("Quote request submitted successfully.");
      form.reset();
      setCaptchaResetCounter((value) => value + 1);
    } catch (error) {
      console.error("Quote form submission failed:", error);
      alert("Unable to submit quote request right now. Please try again.");
    }
  }

  const handleTokenChange = useCallback((token: string | null) => {
    setCaptchaToken(token);
  }, []);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
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
                  <Input
                    placeholder={CONTACT_INFO.phones.map((phone) => phone.display).join(" / ")}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="electrical">
                      Electrical Wiring
                    </SelectItem>
                    <SelectItem value="plumbing">Plumbing</SelectItem>
                    <SelectItem value="maintenance">Maintenance</SelectItem>
                    <SelectItem value="smart-home">Smart Home Setup</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location / Address</FormLabel>
                <FormControl>
                  <Input placeholder="City, Area or Pincode" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your requirements..."
                  className="min-h-[120px]"
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
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </Form>
  );
}
