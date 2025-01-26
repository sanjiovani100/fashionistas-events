import React from 'react';
import { SponsorshipLevel } from './components/SponsorshipLevel';
import { MarketingDetails } from './components/MarketingDetails';
import { FormSection } from '../../components/FormSection';

export const SponsorshipDetails = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-playfair mb-6">Sponsorship Details</h2>
      
      <FormSection
        title="Sponsorship Level"
        description="Choose your preferred sponsorship package"
      >
        <SponsorshipLevel />
      </FormSection>

      <FormSection
        title="Marketing Information"
        description="Tell us about your marketing objectives and target audience"
      >
        <MarketingDetails />
      </FormSection>
    </div>
  );
};