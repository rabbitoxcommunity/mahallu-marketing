import { useTranslation } from "react-i18next"
import { Button } from "./Button"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ml" : "en"
    i18n.changeLanguage(newLang)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="font-medium min-w-[50px]"
    >
      {i18n.language === "en" ? "മലയാളം" : "English"}
    </Button>
  )
}
