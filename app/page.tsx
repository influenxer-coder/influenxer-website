import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatItDoes from "@/components/WhatItDoes";
import BuiltForAgencies from "@/components/BuiltForAgencies";
import DesignPartnerProgram from "@/components/DesignPartnerProgram";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatItDoes />
      <BuiltForAgencies />
      <DesignPartnerProgram />
      <Pricing />
      <FAQ />
      <ContactForm />
    </main>
  );
}
