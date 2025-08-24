import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { X } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  language: z.string().default("en"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const { t, i18n } = useTranslation();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      language: i18n.language,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Create form data for PHP submission
      const formData = new FormData();
      formData.append('name', data.fullName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('interest', '');
      formData.append('budget', '');
      formData.append('message', `Contact request from Yugoslavia 286 website - Language: ${data.language}`);
      
      // Submit to simple PHP handler
      const response = await fetch('/mail_simple.php', {
        method: 'POST',
        body: formData,
      });
      
      // Check if we got redirected (PHP success/error handling)
      if (response.redirected) {
        const url = new URL(response.url);
        if (url.searchParams.has('success')) {
          return { success: true };
        } else if (url.searchParams.has('error')) {
          throw new Error(url.searchParams.get('error') || 'Unknown error');
        }
      }
      
      if (!response.ok) {
        throw new Error('Network error');
      }
      
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: t('contact.success'),
      });
      
      form.reset();
      setIsOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || t('contact.error'),
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    const handleOpenContactForm = () => {
      setIsOpen(true);
    };

    window.addEventListener('openContactForm', handleOpenContactForm);
    return () => window.removeEventListener('openContactForm', handleOpenContactForm);
  }, []);

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate({ ...data, language: i18n.language });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-dark-gray">
            {t('contact.title')}
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.fullName')}
            </Label>
            <Input
              {...form.register('fullName')}
              className="w-full"
              placeholder={t('contact.fullName')}
            />
            {form.formState.errors.fullName && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.email')}
            </Label>
            <Input
              {...form.register('email')}
              type="email"
              className="w-full"
              placeholder={t('contact.email')}
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-2">
              {t('contact.phone')}
            </Label>
            <Input
              {...form.register('phone')}
              type="tel"
              className="w-full"
              placeholder={t('contact.phone')}
            />
            {form.formState.errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>



          <Button
            type="submit"
            disabled={mutation.isPending}
            className="w-full bg-luxury-teal hover:bg-light-teal text-white py-3 rounded-lg font-semibold transition-all"
          >
            {mutation.isPending ? "Sending..." : t('contact.send')}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
