import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const AdditionalFamilyMembers = () => (
  <div className="border-t border-b border-gray-200 py-4 mt-8">
    <h4 className="text-lg font-semibold mb-2">Additional Family Members</h4>
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-1 font-medium">Partners/Spouse</div>
      <div className="col-span-1 text-right">$ 500.00</div>
      <div className="col-span-1 text-right">+GST</div>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-2">
      <div className="col-span-1 font-medium">Children</div>
      <div className="col-span-1 text-right">$ 250.00</div>
      <div className="col-span-1 text-right">+GST</div>
    </div>
  </div>
);

const PricingTable = ({ visaType }) => {
  // Special handling for business visas
  if (visaType === 'business') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <Card className="p-6">
          <h3 className="text-2xl font-bold text-center text-red-600 mb-4">
            Business Visas – Fixed Quote Based On Your Individual Requirement And Circumstances.
          </h3>
          <div className="mt-6 space-y-4">
            <AdditionalFamilyMembers />
            
            <div className="space-y-4 text-gray-700 mt-8">
              <h4 className="text-lg font-semibold text-red-600">Note:</h4>
              <p>GST is the NZ Goods & Services Tax and is 15%. It is payable by all clients, if applicable.</p>
              <p>Our fees structure does not include INZ fees or other fees such as medicals or police checks.</p>
              <p className="text-red-600 font-medium">
                If you wish to lodge your own visa application but would like pre-lodgement checking or advice, we work to an hourly rate of NZD250 + GST.
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  // Define features for other visa types
  const visaFeatures = {
    temporary: [
      { name: 'Student Visa', basic: '$ 1200', premium: '$ 900' },
      { name: 'Variation of Condition', basic: '$ 1000', premium: '$ 700' },
      { name: 'Temporary Work Visa', basic: '$ 2100', premium: '$ 1800' },
      { name: 'Partnership Based Visa', basic: '$ 1800', premium: '$ 1500' },
      { name: 'Visitor Visa - to Holiday', basic: '$ 1100', premium: '$ 800' },
      { name: 'Visitor Visa - to visit relative', basic: '$ 900', premium: '$ 600' },
      { name: 'Working Holiday Visa', basic: '', premium: '$ 500' },
      { name: 'Specific Purpose or Event Visa', basic: '$ 2200', premium: '$ 1900' },
    ],
    residence: [
      { name: 'Residence From Work Visa', basic: '$ 2900', premium: '$ 2600' },
      { name: 'At Residence Stage', basic: '', premium: '$ 500' },
      { name: 'Skilled Migrant Category Visa', basic: '$ 5500', premium: '$ 5000' },
      { name: 'EOI Stage: 50%', basic: '', premium: '' },
      { name: 'ITA Stage: 50%', basic: '', premium: '' },
      { name: 'Partnership Based Residence Visa', basic: '$ 3000', premium: '$ 2500' },
    ],
    other: [
      { name: 'Section 61 Request', basic: '$ 2500', premium: '$ 2000' },
      { name: 'Request for Special Directions', basic: '$ 2500', premium: '$ 2000' },
      { name: 'Request for Reconsideration', basic: '$ 1800', premium: '$ 1000' },
      { name: 'Client Complaint Resolution Process', basic: '', premium: '$ 1200' },
      { name: 'Character Waiver Request', basic: '$ 1500', premium: '$ 1000' },
    ],
  };

  const features = visaFeatures[visaType] || [];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="space-y-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] text-xl font-bold text-red-600">Service Features</TableHead>
              <TableHead className="text-xl font-bold text-red-600">New Clients</TableHead>
              <TableHead className="text-xl font-bold text-red-600">Returning Clients</TableHead>
              <TableHead className="text-xl font-bold text-red-600">Additional</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow key={feature.name}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell>
                  {typeof feature.basic === 'boolean' ? (
                    feature.basic ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )
                  ) : (
                    feature.basic
                  )}
                </TableCell>
                <TableCell>
                  {typeof feature.premium === 'boolean' ? (
                    feature.premium ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <X className="h-4 w-4 text-red-500" />
                    )
                  ) : (
                    feature.premium
                  )}
                </TableCell>
                <TableCell>+GST</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <AdditionalFamilyMembers />

        <div className="space-y-4 text-gray-700">
          <h4 className="text-lg font-semibold text-red-600">Note:</h4>
          <p>GST is the NZ Goods & Services Tax and is 15%. It is payable by all clients, if applicable.</p>
          <p>Our fees structure does not include INZ fees or other fees such as medicals or police checks.</p>
          <p className="text-red-600 font-medium">
            If you wish to lodge your own visa application but would like pre-lodgement checking or advice, we work to an hourly rate of NZD250 + GST.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;