import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Daniel Martinez Dacol. <br />
        Direitos reservados.
      </p>
    </section>
  );
}

export default Footer;
