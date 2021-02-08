import Link from "next/link";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./mediaButtons.module.css";

const socialMediaList = [
  { name: "linkedin", url: "https://www.linkedin.com/in/anfepar", icon: "/images/linkedin.png" },
  { name: "github", url: "https://github.com/anfepar", icon: "/images/github.png" },
];

export default function MediaButton() {
  return (
    <ButtonGroup
      className={styles.container}
      color="primary"
      aria-label="outlined primary button group"
    >
      {socialMediaList.map((media) => (
        <Button key={media.name} variant="contained">
          <Link href={media.url}>
            <img src={media.icon} />
          </Link>
        </Button>
      ))}
    </ButtonGroup>
  );
}
