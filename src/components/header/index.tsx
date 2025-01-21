import styles from '../header/styles.module.css'

export function Header(){
    return(
        <header className={styles.header} >
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <h1 className={styles.logo}>Tarefa
                        <span>+</span>
                    </h1>
                </nav>
                <button className={styles.loginButton}>Acessar</button>
            </section>
        </header>
    )
}