import { useTranslations } from "@/hooks/useTranslations";

export const Footer = () => {
  const { t } = useTranslations('Footer');
  return (
    <footer>
      {t('about_me')}
    </footer>
  );
};