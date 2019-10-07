import i18n from 'i18next';
import common_en from './languages/en.json'
import common_vi from './languages/vi.json'
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: common_en
    },
    vi: {
        translation: common_vi
    }
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;