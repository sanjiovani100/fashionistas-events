import React from 'react';
import { FileUploads } from './components/FileUploads';
import { PaymentDetails } from './components/PaymentDetails';
import { FormSection } from '../../components/FormSection';

export const AdditionalRequirements = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-playfair mb-6">Additional Requirements</h2>
      
      <FormSection
        title="Brand Assets"
        description="Upload your company logo and brand guidelines"
      >
        <FileUploads />
      </FormSection>

      <FormSection
        title="Payment and Special Requirements"
        description="Specify your payment preferences and any special requirements"
      >
        <PaymentDetails />
      </FormSection>
    </div>
  );
};