import { useTranslation } from "react-i18next";

export const useListAPI = () => {
  const { t } = useTranslation();

  return [
    {
      title: t("api_interface.authorization_api.authorization_api_name"),
      description: t("api_interface.authorization_api.authorization_api_desc"),
      src: "/app.png",
      is_required_param: true,
      is_logo: true,
      type: "PlanerifyAPI",
      url: "https://api.planerify.pl",
      required_param: t("api_interface.api_required"),
      response_success: t("api_interface.api_success"),
      response_error: t("api_interface.api_error"),
      response_success_json: `[
  "Połączono z API Planerify"
]`,
      response_error_json: `[
  "Nie połączono z API Planerify"
]`,
    },
    {
      title: t("api_interface.announcements_api.announcements_api_name"),
      description: t("api_interface.announcements_api.announcements_api_desc"),
      src: "/librus.png",
      is_logo: true,
      is_required_param: true,
      required_param: t("api_interface.api_required"),
      type: "Librus",
      url: "https://api.planerify.pl/announcements",
      response_returned: t("api_interface.api_title"),
      response_success: t("api_interface.api_success"),
      response_error: t("api_interface.api_error"),
      response_success_types: `{
  title: string;
  addedBy?: string;
  publishedAt?: string;
  content?: string;
}`,
      response_success_json: `{
  "title": "15-23 MAJA - ORGANIZACJA W SZKOLE",
  "addedBy": "Test Test",
  "publishedAt": "2025-05-15",
  "content": "Test Test"
}`,
      response_error_json: `{
  "error": "Brak ogłoszenia w librusie."
}`,
    },
    {
      title: t("api_interface.schedule_api.schedule_api_name"),
      description: t("api_interface.schedule_api.schedule_api_desc"),
      is_required_param: true,
      required_param: t("api_interface.api_required"),
      src: "/librus.png",
      is_logo: true,
      type: "Librus",
      url: "https://api.planerify.pl/schedule",
      response_returned: t("api_interface.api_title"),
      response_success: t("api_interface.api_success"),
      response_error: t("api_interface.api_error"),
      response_success_types: `{
  id?: string;
  lesson_number?: string;
  class?: string; 
  profile?: string; 
  date: string;
  lesson?: string;
  teacher?: string;
  location?: string;
  hour?: string;
  time_from: string;
  time_to: string;
  tags?: string[];
}`,
      response_success_json: `{
  "id": "1",
  "lesson_number": "2",
  "class": "1a",
  "profile": "KOS/KRYM LO",
  "date": "2025-05-15",
  "lesson": "Matematyka",
  "teacher": "Jan Kowalski",
  "location": "Sala 101",
  "hour": "08:00",
  "time_from": "08:00",
  "time_to": "08:45",
  "tags": ["odwołane"]
}`,
      response_error_json: `{
  "error": "Brak planu lekcji w librusie."
}`,
    },
  ];
};
