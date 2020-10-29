import styles from 'styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
        <section className={styles.tile}>
            <img className={styles.logo} src="/images/logo.svg" alt="Logo" />
            <div className={styles['icon__row']}>
                <div className={styles['icon__container']}>
                    <img src="/images/icon-document.svg" alt="Document Icon" />
                </div>
                <div className={styles['icon__container']}>
                    <img src="/images/icon-folder.svg" alt="Folder Icon" />
                </div>
                <div className={styles['icon__container']}>
                    <img src="/images/icon-upload.svg" alt="Upload Icon" />
                </div>
            </div>
        </section>

        <section className={styles.tile}>
            You’ve used <strong>815 GB</strong> of your storage



            <div className={styles['tile__progress-bar']}>
                <div className={styles['tile__progress-indicator']} />
            </div>
            <div className={styles['tile__min-max']}>
                <span>0 GB</span>
                <span>1000 GB</span>
            </div>
            <div className={styles['tile__alert']}>
                <span className={styles['tile__alert-amount']}>185</span> GB Left
            </div>
        </section>

    </div>
  )
}
