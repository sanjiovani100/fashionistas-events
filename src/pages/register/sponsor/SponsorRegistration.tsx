import React from 'react';
import { PageLayout } from "@/components/layout/PageLayout";
import { SponsorForm } from "@/components/forms/registration/SponsorForm";
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { commonSchema, sponsorSchema, type FormSchema } from '@/components/forms/registration/schemas/formSchemas';
import { useFormSubmission } from '@/components/forms/registration/hooks/useFormSubmission';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { CommonFields } from '@/components/forms/registration/components/CommonFields';
import { Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SponsorRegistration = () => {
  const { submitForm, isSubmitting } = useFormSubmission();
  const form = useForm<FormSchema>({
    resolver: zodResolver(commonSchema.merge(sponsorSchema)),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      references: ''
    }
  });

  const onSubmit = async (data: FormSchema) => {
    await submitForm(data, 'sponsor');
  };

  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-br from-black via-deep-purple to-black py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4"
        >
          <Link 
            to="/register" 
            className="inline-flex items-center text-fashion-pink hover:text-fashion-pink/80 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Role Selection
          </Link>

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Sponsor Application</h1>
            <p className="text-xl text-gray-300 font-montserrat">Partner with us</p>
          </div>

          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-md p-8 rounded-xl border border-fashion-pink/20">
            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <CommonFields form={form} />
                  <SponsorForm />
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-fashion-pink to-deep-purple hover:opacity-90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default SponsorRegistration;