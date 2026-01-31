import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatItDoes from "@/components/WhatItDoes";
import Pricing from "@/components/Pricing";
import SocialMedia from "@/components/SocialMedia";
import FAQ from "@/components/FAQ";
import SignUp from "@/components/SignUp";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatItDoes />
      <Pricing />
      <SocialMedia />
      <FAQ />
      <SignUp />
      <Footer />
    </main>
  );
}
