import { ThemeProvider } from "@/components/theme-provider";
import { PointerHighlight } from "@/components/ui/pointer-highlight.tsx";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.tsx";
import { BadgeOther } from "@/components/ui/badge.tsx";
import { Tech } from "@/components/tech.tsx";
import { avatars } from "@/data/avatars.ts";
import { useTranslation } from "react-i18next";
import { SchoolsItems } from "@/components/schoolsItems.tsx";
import { LanguageSelect } from "@/components/languageSelect.tsx";
import { Github, LucideCode } from "lucide-react";
import { CodeAPI } from "@/components/codeAPI.tsx";
import { useListAPI } from "@/data/listAPI.tsx";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler.tsx";
import { Footer } from "@/components/footer.tsx";

export default function App() {
  const { t } = useTranslation();
  const listAPI = useListAPI();

  return (
    <ThemeProvider defaultTheme="light" storageKey="theme">
      <div className="absolute top-6 right-6 z-50 flex gap-4 items-center justify-center">
        <LanguageSelect />
        <a
          href={"https://github.com/Creation-of-Destruction"}
          target={"_blank"}
        >
          <Github />
        </a>
        <AnimatedThemeToggler />
      </div>
      <div className={"pt-6"}>
        <main
          className={
            "relative p-6 pt-16 overflow-hidden max-w-4xl mx-auto container flex flex-col "
          }
        >
          <BadgeOther className={"sm:mx-auto"}>
            <LucideCode className="mr-2 h-4 w-4" />
            {t("badge")}
          </BadgeOther>
          <h1 className="font-bold text-4xl  md:text-5xl sm:text-center flex  max-[536px]:flex-col text-foreground sm:items-center sm:justify-center mt-6">
            <PointerHighlight
              rectangleClassName="bg-primary border-primary leading-loose"
              pointerClassName="text-foreground h-3 w-3"
              containerClassName="inline-block  mr-1"
            >
              <span className="relative z-10 text-white">Planerify API</span>
            </PointerHighlight>{" "}
            {t("title")}
          </h1>
          <p className="sm:text-center mt-4 max-w-3xl flex  sm:items-center sm:justify-center text-foreground text-base md:text-lg mx-auto">
            {t("description")}
          </p>
          <div
            className={
              "grid sm:grid-cols-2 sm:max-w-xl md:max-w-5xl gap-7 sm:gap-12 sm:mx-auto mt-6 sm:items-center sm:justify-center"
            }
          >
            <div className="flex flex-col sm:max-w-xs sm:mx-auto">
              <p className="mb-4 text-base/relaxed text-foreground">
                {t("team")}
              </p>
              <div className="flex -space-x-2">
                {avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="ring-muted-foreground size-12 ring-2"
                  >
                    <AvatarImage src={avatar.src} alt={avatar.name} />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
            <div className="no-visible-scrollbar relative z-20 flex flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3">
              <Tech
                icon={
                  <img
                    src={"/python.svg"}
                    className="h-4 w-4  flex-shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300 sm:h-10 sm:w-10"
                    alt={"python"}
                  />
                }
                name={"Python"}
              />
              <Tech
                icon={
                  <img
                    src={"/selenium.svg"}
                    className="h-4 w-4  flex-shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300 sm:h-10 sm:w-10"
                    alt={"selenium"}
                  />
                }
                name={"Selenium"}
              />
              <Tech
                icon={
                  <img
                    src={"/librus.png"}
                    className="h-4 w-4 flex-shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300 sm:h-10 sm:w-10"
                    alt={"selenium"}
                  />
                }
                name={"Librus"}
              />
            </div>
          </div>
          <SchoolsItems />
          <div className={"flex flex-col  sm:justify-center sm:items-center"}>
            <BadgeOther className={"mt-6 mb-3"}>
              <LucideCode className="mr-2 h-4 w-4" />
              {t("badgeAPI")}
            </BadgeOther>
            <h2
              className={
                "font-bold text-4xl  md:text-5xl sm:text-center flex  max-[536px]:flex-col text-foreground sm:items-center sm:justify-center"
              }
            >
              {t("titleAPI")}
            </h2>
            <div className={"mt-12 space-y-12"}>
              {listAPI.map((list, i) => (
                <CodeAPI key={i} {...list} />
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
