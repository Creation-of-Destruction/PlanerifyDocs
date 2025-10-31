import { useTranslation } from "react-i18next";

export const useFlags = () => {
    const { t } = useTranslation();

    return [
        {
            value: "en",
            label: t("usedLanguage.english"),
            className: "fi fi-gb",
        },
        {
            value: "pl",
            label: t("usedLanguage.polish"),
            className: "fi fi-pl",
        },
    ];
};
