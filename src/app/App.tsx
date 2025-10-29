import { ThemeProvider } from "@/components/theme-provider"
import {PointerHighlight} from "@/components/ui/pointer-highlight.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Badge} from "@/components/badge.tsx";
import {Tech} from "@/components/tech.tsx";
import {avatars} from "@/data/avatars.ts";
import {useTranslation} from "react-i18next";

export default function App() {
    const {t} = useTranslation();


    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div>
                <main className={"relative p-6 py-16 overflow-hidden max-w-5xl mx-auto container flex flex-col "}>
                    <Badge>
                        {t("badge")}
                    </Badge>
                    <h1 className="font-bold text-4xl  md:text-5xl sm:text-center flex  max-[536px]:flex-col text-foreground sm:items-center sm:justify-center mt-6"><PointerHighlight  rectangleClassName="bg-primary border-primary leading-loose" pointerClassName="text-foreground h-3 w-3" containerClassName="inline-block  mr-1"><span className="relative z-10 text-white">Planerify API</span></PointerHighlight> {t("title")}</h1>
                    <p className="sm:text-center mt-4 max-w-3xl flex  sm:items-center sm:justify-center text-foreground text-base md:text-lg mx-auto">
                        {t("description")}
                    </p>
                    <div className={"grid sm:grid-cols-2 sm:max-w-xl md:max-w-5xl gap-7 sm:gap-12 sm:mx-auto mt-6 sm:items-center sm:justify-center"}>
                        <div className="flex flex-col sm:max-w-xs sm:mx-auto">
                            <p className="mb-4 text-base/relaxed text-neutral-600 dark:text-neutral-300">{t("team")}</p>
                            <div className='flex -space-x-2'>
                                {avatars.map((avatar, index) => (
                                    <Avatar key={index} className='ring-primary size-12 ring-2'>
                                        <AvatarImage src={avatar.src} alt={avatar.name} />
                                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                        </div>
                        <div className="no-visible-scrollbar relative z-20 flex flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-4">
                            <Tech icon={<img src={"/python.svg"} className="h-4 w-4 grayscale dark:invert flex-shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300 sm:h-10 sm:w-10" alt={"python"}/>} name={"Python"} />
                            <Tech icon={<img src={"/selenium.svg"} className="h-4 w-4 grayscale dark:invert flex-shrink-0 stroke-1 text-neutral-600 dark:text-neutral-300 sm:h-10 sm:w-10" alt={"selenium"}/>} name={"Selenium"} />
                        </div>
                    </div>
                </main>
            </div>
        </ThemeProvider>
    )
}