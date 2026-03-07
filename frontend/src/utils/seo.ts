export interface NormalizedSEO {
  title?: string;
  description?: string;
  pageKeywords?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogLocale?: string;
  siteName?: string;
  robots?: string;
  canonical?: string;
}

type SEOItem = Partial<{
  title: string;
  description: string;
  pageKeywords: string;
  keywords: string;
  ogType: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogLocale: string;
  siteName: string;
  robots: string;
  canonical: string;
  url: string;
}>;

export const normalizeSEO = (seo: unknown): NormalizedSEO => {
  if (!Array.isArray(seo) || seo.length === 0) {
    return {};
  }

  const data = seo[0] as SEOItem;

  return {
    title: data?.title,
    description: data?.description,
    pageKeywords: data?.pageKeywords ?? data?.keywords,
    ogType: data?.ogType,
    ogTitle: data?.ogTitle,
    ogDescription: data?.ogDescription,
    ogImage: data?.ogImage,
    ogLocale: data?.ogLocale,
    siteName: data?.siteName,
    robots: data?.robots,
    canonical: data?.canonical ?? data?.url,
  };
};
