export const BRAND_CONFIG = {
  doctorName: "Dra. Janaína Traina",
  crm: "CRM-MT 15993",
  phone: "5513997521234", // Updated phone number as requested
  instagram: "https://www.instagram.com/janainatraina/", // Updated to the correct handle
  location: "Sinop - MT",
  whatsappMessage: "Olá, vim pelo site e gostaria de agendar uma consulta com a Dra. Janaína Traina",
  gtagId: "AW-17130651921/CODIGO_CONVERSAO",
  heroPortrait: "/src/assets/images/janaina_portrait_1779398147059.png",
  aboutPhoto: "/src/assets/images/janaina_about_1779398163430.png",
};

export const triggerConversionAndGetUrl = () => {
  // Safely trigger Google Ads Conversion gtag
  if (typeof window !== 'undefined' && (window as any).gtag) {
    try {
      (window as any).gtag('event', 'conversion', {
        'send_to': BRAND_CONFIG.gtagId
      });
      console.log('gtag conversion tracking triggered successfully');
    } catch (e) {
      console.error('Error triggering gtag conversion:', e);
    }
  } else {
    console.log('gtag is not defined in the global window scoop; simulated conversion tracking successfully.');
  }

  // Construct and return WhatsApp Link
  const encodedText = encodeURIComponent(BRAND_CONFIG.whatsappMessage);
  return `https://wa.me/${BRAND_CONFIG.phone}?text=${encodedText}`;
};
