import styles from "./Card.module.css";

const Card = ({
  title,
  subtitle,
  footer,
  children,
  padding,
  backgroundUrl,
  onClick,
  width,
}) => {
  return (
    <div
      className={styles.card}
      style={{
        padding: padding,
        gap: padding,
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: "cover",
        width: width ?? "max-content",
      }}
      onClick={onClick}
    >
      {title != null || subtitle != null ? (
        <div className={styles.header}>
          {title && <div className={styles.title}>{title}</div>}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </div>
      ) : (
        <></>
      )}
      <div className={styles.content}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
};

export default Card;
