// app/visa-options/[visaType]/page.js
import { notFound } from 'next/navigation';
import { visaServices } from '@/data/visaServices';
import PageTitle from '@/components/visa-options/PageTitle';
import VisaDescription from '@/components/visa-options/VisaDescription';
import VisaCategories from '@/components/visa-options/VisaCategories';

export async function generateStaticParams() {
  return visaServices.map((visa) => ({
    visaType: visa.id,
  }));
}

export default function VisaPage({ params }) {
  const currentVisa = visaServices.find(option => option.id === params.visaType);
  
  if (!currentVisa) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <PageTitle title={currentVisa.title} />
      <VisaDescription description={currentVisa.description} />
      <VisaCategories title={currentVisa.title} categories={currentVisa.categories} />
    </div>
  );
}