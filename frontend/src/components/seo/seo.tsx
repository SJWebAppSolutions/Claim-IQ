import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  pageKeywords?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogLocale?: string;
  ogUrl?: string;
  siteName?: string;
  canonical?: string;
  robots?: string;
}

function setMetaTag(
  attribute: 'name' | 'property',
  content: string | undefined,
  attributeValue: string
): void {
  if (!attributeValue) return;

  const selector = `meta[${attribute}="${attributeValue}"]`;
  let metaTag = document.head.querySelector<HTMLMetaElement>(selector);

  if (!content) {
    if (metaTag) metaTag.remove();
    return;
  }

  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute(attribute, attributeValue);
    document.head.appendChild(metaTag);
  }

  metaTag.content = content;
}

function setCanonical(url?: string) {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!url) {
    if (link) link.remove();
    return;
  }

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

const SetSEODetails: React.FC<SEOProps> = (props) => {
  useEffect(() => {
    const {
      title,
      description,
      pageKeywords,
      ogType,
      ogTitle,
      ogDescription,
      ogImage,
      ogLocale,
      siteName,
      canonical,
      robots,
      ogUrl
    } = props;
    
    if (title) {
      document.title = title;
    }
    
    setMetaTag('name', description, 'description');
    setMetaTag('name', pageKeywords, 'keywords');

    setMetaTag('property', ogType, 'og:type');
    setMetaTag('property', ogTitle, 'og:title');
    setMetaTag('property', ogDescription, 'og:description');
    setMetaTag('property', ogLocale, 'og:locale');
    setMetaTag('property', siteName, 'og:site_name');
    setMetaTag('name', robots, 'robots');
    setMetaTag('property', ogUrl, 'og:url');
    setCanonical(canonical);

    if (ogImage) {
      setMetaTag('property', ogImage, 'og:image');
    } else {
      setMetaTag('property', undefined, 'og:image');
    }
  }, [props]);

  return null;
};

export default SetSEODetails;
