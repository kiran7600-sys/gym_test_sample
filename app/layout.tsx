import type { Metadata } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import BackToTop from '@/components/layout/BackToTop';
import { ToastProvider } from '@/components/ui/Toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
});

export const metadata: Metadata = {
  title: 'IRONFORGE GYM | Premium Fitness Center',
  description:
    'Transform your body at IRONFORGE - premium gym with world-class equipment, certified trainers, and personalized fitness programs. Join 2500+ members today.',
  keywords: [
    'gym',
    'fitness',
    'personal training',
    'workout',
    'bodybuilding',
    'CrossFit',
    'yoga',
  ],
  openGraph: {
    title: 'IRONFORGE GYM | Premium Fitness Center',
    description:
      'Transform your body at IRONFORGE - premium gym with world-class equipment and certified trainers.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'IRONFORGE GYM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IRONFORGE GYM | Premium Fitness Center',
    description:
      'Transform your body at IRONFORGE - premium gym with world-class equipment and certified trainers.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'IRONFORGE GYM',
              description:
                'Premium fitness center with world-class equipment and certified trainers.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '99 Strength Boulevard',
                addressLocality: 'Fit City',
                addressRegion: 'FC',
                postalCode: '90210',
                addressCountry: 'US',
              },
              telephone: '+1-555-019-2834',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  opens: '05:00',
                  closes: '23:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '06:00',
                  closes: '21:00',
                },
              ],
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 19.1136,
                longitude: 72.8697,
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#090909] text-white font-sans antialiased">
        <ToastProvider>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
