import Image from "next/image";
import styles from "../styles/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.contentContainer}>
        <div className={styles.heroTextContainer}>
          <p className={styles.heroHeaderText}>
            If a blueprint is the&nbsp; foundation, the 
            <span className={styles.heroHighlight}>
              <p className={[styles.heroHeaderText, styles.heroHeaderTextAlt].join(' ')}>
                Blackprint
              </p>
            </span> 
            is everything else.&nbsp;
          </p>
        </div>
      </div>
    </main>
  );
}
