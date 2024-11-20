import styles from './Card.module.css'

function Card ({titulo, afazer, vapo}){
    return (
        <div className={styles.card}>
            <div className={styles.cookieCard}>
                <p className={styles.cookieHeading}>{titulo}</p>
                <p className={styles.cookieDescription}>{afazer}</p>
                <button className={styles.acceptButton} onChange={vapo}>Excluir</button>
            </div>
            <div className={styles.checkbox-wrapper-10}>
                <input defaultChecked type="checkbox" id="cb5" className={`${styles.tgl} ${styles.tgl_flip}`}/>
                <label htmlFor="cb5" data-tg-on="Yeah!" data-tg-off="Nope" className={styles.tgl_btn} />
            </div>
        </div>
    );
}
export default Card;