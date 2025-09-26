import styles from "./ErrorAlert.module.css";

const ErrorAlert = ({ message }) => {
  return <div className={styles.error}>{message}</div>;
};

export default ErrorAlert;
