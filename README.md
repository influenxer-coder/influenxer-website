# Influenxers AI - Marketing Website

Marketing website for Influenxers AI, an AI pitch & growth copilot for performance agencies.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components for each section
  - `Hero.tsx` - Hero section with main CTA
  - `WhatItDoes.tsx` - Feature cards explaining the workflow
  - `BuiltForAgencies.tsx` - Benefits for performance agencies
  - `DesignPartnerProgram.tsx` - Design partner program section
  - `Pricing.tsx` - Pricing tiers
  - `FAQ.tsx` - Frequently asked questions
  - `ContactForm.tsx` - Contact form component

## Contact Form

The contact form is currently set up to log form submissions to the console. To wire it to an API:

1. Update `components/ContactForm.tsx`
2. Replace the `handleSubmit` function with your API endpoint
3. Example:
   ```typescript
   const response = await fetch('/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData),
   });
   ```

## Deploy on Vercel

This project is ready to deploy on Vercel:

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The site will be available at `influenxers.com` once you configure your custom domain in Vercel.

### Environment Variables

If you need to add API keys or other environment variables:
1. Go to your Vercel project settings
2. Add environment variables in the "Environment Variables" section
3. Redeploy your application

## Features

- ✅ Mobile-first responsive design
- ✅ Conversion-focused layout
- ✅ Clean, modern UI
- ✅ All sections: Hero, Features, Benefits, Design Partner Program, Pricing, FAQ, Contact Form
- ✅ Ready for Vercel deployment
