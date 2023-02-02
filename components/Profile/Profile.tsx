import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import styles from "./Profile.module.css";

interface ProfileProps {
  name: string
};

export const Profile = ({ name }: ProfileProps) => {
  const { t } = useTranslations("Profile");

  return (
    <section className={styles.Profile}>
      <div className={styles.Profile__Heading}>
        <Image className={styles.Profile__Image} src="/images/profile.jpg" alt="" width={100} height={100} priority />
        <h1 className={styles.Profile__Title}>{name}</h1>
      </div>
      <section>
        <p className={styles.Profile__Text} >{t("description")}</p>
      </section>
    </section>
  );
};
