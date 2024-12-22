import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    lng: "pl",
    resources: {
        pl: {
            translation: {
                name: "Jestem Szymon",
                desc: "Szymon Żaba, 22-letni backend developer, specjalizuje się w tworzeniu wydajnych i skalowalnych systemów webowych. Pasjonuje się programowaniem od wczesnej młodości, a swoje umiejętności rozwijał, zgłębiając języki takie jak Python, Java oraz Node.js.",
                title: "Szymon Żaba - 22 letni Backend Developer",
                cvbutton: "Pobierz CV"
            }
        },
        en: {
            translation: {
                name: "I'm Szymon",
                desc: "Szymon Żaba, a 22-year-old backend developer, specializes in building efficient and scalable web systems. He has been passionate about programming since an early age and has honed his skills by exploring languages such as Python, Java, and Node.js.",
                title: "Szymon Żaba - a 22-year-old Backend Developer",
                cvbutton: "Download CV"
            }
        },
    },
})