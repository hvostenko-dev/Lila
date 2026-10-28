/**
 * Language-independent data shared across all locales.
 * Translatable texts live in src/i18n/locales/*.js
 */

export const SECTION_IDS = ["hero", "game", "pricing", "faq", "contact"];

export const CONTACT_INFO = {
  phoneDisplay: "+380 97 599 2075",
  phoneHref: "tel:+380975992075",
  whatsappHref: "https://wa.me/380975992075",
  telegramHandle: "@IrenaShraybman",
  telegramHref: "https://t.me/IrenaShraybman",
  email: "Irentishchenko@gmail.com",
  emailHref: "mailto:Irentishchenko@gmail.com",
  facebookHref: "https://www.facebook.com/share/1ANUQ9yhEu/",
  address: "Ha-Gdud ha-Ivri St 6, Ashdod",
  mapLink: "https://www.google.com/maps?q=Ha-Gdud%20ha-Ivri%20St%206%2C%20Ashdod",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3391.621260542409!2d34.64216231515784!3d31.801447281280622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502a391cb7a65ef%3A0x8a4444d0f7e2c664!2sHa-Gdud%20ha-Ivri%20St%206%2C%20Ashdod!5e0!3m2!1sen!2sil!4v1700213024000!5m2!1sen!2sil",
};

export const buildWhatsappLink = (text) =>
  `${CONTACT_INFO.whatsappHref}?text=${encodeURIComponent(text)}`;
