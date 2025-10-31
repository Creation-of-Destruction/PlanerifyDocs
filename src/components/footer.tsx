import { t } from "i18next";

export const Footer = () => (
  <footer className="mt-8 border-t max-w-4xl mx-auto border-input/50 p-8 text-left sm:text-center ">
    <p className={"text-base/relaxed text-foreground"}>
      © {new Date().getFullYear()} Planerify API — {t("footer.version_name")}{" "}
      1.0.0
    </p>
    <p className="mt-2 text-sm/relaxed text-muted-foreground">
      {t("footer.description")}
    </p>
    <p className={"mt-4 text-xs/relaxed text-muted-foreground"}>
      {t("footer.help")}
      {"  "}
      <a
        href="mailto:support@planerify.pl"
        className="underline hover:text-primary"
      >
        support@planerify.pl
      </a>
    </p>
    <h2 className="mt-5 sm:mt-0 sm:text-center text-left sm:mx-auto text-[min(9vw,9rem)] font-bold bg-clip-text text-transparent bg-gradient-to-b from-background to-primary/20 inset-x-0 lg:-mb-10 select-none whitespace-nowrap">
      PlanerifyAPI
    </h2>
  </footer>
);
