import styles from "./Option.module.css";

const Option = ({ name, label, onChange, options }) => {
  const choices = options.map((option) => {
    return <option key={option} value={option}>{option}</option>;
  });
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        className={styles.field}
        id={name}
        name={name}
        onChange={onChange}
      >
        {choices}
      </select>
    </>
  );
};

export default Option;
