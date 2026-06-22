import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import FloatingActions from "../components/FloatingActions";
import LogoSplash from "../components/LogoSplash";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Dentist"],
  "@id": "https://anaghdentalcare.com/#business",
  name: "Anagh Dental Care",
  alternateName: "अनघ डेंटल केअर",
  image: "https://anaghdentalcare.com/logo.jpeg",
  logo: "https://anaghdentalcare.com/logo.jpeg",
  description:
    "Expert dental clinic in Kiwale, Pimpri-Chinchwad, Pune. Services include Dental Implants, Teeth Whitening, Root Canal, Braces, Smile Designing, Veneers & more.",
  url: "https://anaghdentalcare.com",
  telephone: "+917972719443",
  email: "anaghdentalcare@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office no. 102, A-wing, First Floor, Alpine Astonia Complex",
    addressLocality: "Kiwale",
    addressRegion: "Maharashtra",
    postalCode: "411035",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.6524,
    longitude: 73.7707,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Card, UPI",
  areaServed: [
    "Kiwale",
    "Ravet",
    "Wakad",
    "Pimpri-Chinchwad",
    "Pune",
    "Maharashtra",
  ],
  medicalSpecialty: "Dentistry",
  hasMap: "https://maps.google.com/?q=Anagh+Dental+Care,+Alpine+Astonia+Complex,+Kiwale,+Pimpri-Chinchwad+411035",
  sameAs: [
    "https://www.instagram.com/anaghdentalcare",
    "https://www.facebook.com/anaghdentalcare",
  ],
};

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      <LogoSplash />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pt-[104px] lg:pt-[122px]">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
