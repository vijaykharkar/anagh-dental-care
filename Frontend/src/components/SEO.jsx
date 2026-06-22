import { Helmet } from "react-helmet-async";

const SITE_URL = "https://anaghdentalcare.com";
const BRAND = "Anagh Dental Care";
const DEFAULT_TITLE = `${BRAND} | Best Dental Clinic in Kiwale, Pimpri-Chinchwad Pune`;
const DEFAULT_DESC =
  "Anagh Dental Care – Expert dental clinic in Kiwale, Pimpri-Chinchwad, Pune. Services: Dental Implants, Teeth Whitening, Root Canal, Braces, Smile Designing & more. Dr. Sagar. Call: +91 79727 19443.";
const DEFAULT_KW =
  "Anagh Dental Care, dental clinic Kiwale, dentist Pimpri-Chinchwad, dental clinic Pune, dental implants Pune, teeth whitening Kiwale, root canal Pimpri-Chinchwad, braces Pune, Dr Sagar dentist, best dentist near me, dental clinic near me";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description = DEFAULT_DESC,
  keywords = DEFAULT_KW,
  canonical = "/",
  ogImage = DEFAULT_IMAGE,
  ogType = "website",
  noindex = false,
}) {
  const fullTitle = title ? `${title} | ${BRAND}` : DEFAULT_TITLE;
  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={BRAND} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
