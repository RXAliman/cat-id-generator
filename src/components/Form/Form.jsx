import styles from "./Form.module.css";

const Form = ({ onSubmit, children }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(e);
    }} className={styles.form}>
      {children}
    </form>
  );
};

export default Form;
