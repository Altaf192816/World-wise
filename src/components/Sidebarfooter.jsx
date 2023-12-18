import styles from "./Sidebar.module.css";

function Sidebarfooter() {
    return (
        <footer className={styles.footer}>
            <p className={styles.copyright}>
                &copy; Copyright {new Date().getFullYear()} by Altaf.
            </p>
        </footer>
    )
}

export default Sidebarfooter
