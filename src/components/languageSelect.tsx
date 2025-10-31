"use client";

import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFlags } from "@/data/flags.tsx";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export const LanguageSelect = () => {
  const { t, i18n } = useTranslation();
  const flags = useFlags();
  const [cookie, setCookie] = useCookies(["language"]);

  useEffect(() => {
    if (cookie.language && cookie.language !== i18n.language) {
      i18n.changeLanguage(cookie.language);
    }
  }, [cookie.language, i18n]);

  const handleChange = (value: string) => {
    i18n.changeLanguage(value);
    setCookie("language", value, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  };

  const currentFlag = flags.find((flag) => flag.value === i18n.language);

  return (
    <div>
      <Select onValueChange={handleChange} value={i18n.language}>
        <SelectTrigger className="border-input">
          <SelectValue>
            <div className="flex items-center gap-2">
              <span className={currentFlag?.className}></span>
            </div>
          </SelectValue>
        </SelectTrigger>

        <SelectContent className="border-input">
          <SelectGroup>
            <SelectLabel className="text-xs text-foreground px-2 py-1">
              {t("usedLanguage.label")}
            </SelectLabel>
            {flags.map((flag) => (
              <SelectItem key={flag.value} value={flag.value}>
                <div className="flex items-center gap-2">
                  <span className={flag.className}></span>
                  <span>{flag.label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
