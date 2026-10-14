interface FaqItem {
  otazka: string;
  odpoved: string;
}

/** FAQPage JSON-LD, pouze z otázek s hotovou odpovědí (bez [DOPLNIT]). */
export function faqPageJsonLd(items: FaqItem[]) {
  const hotove = items.filter((item) => !item.odpoved.includes('[DOPLNIT'));
  if (hotove.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hotove.map((item) => ({
      '@type': 'Question',
      name: item.otazka,
      acceptedAnswer: { '@type': 'Answer', text: item.odpoved },
    })),
  };
}
