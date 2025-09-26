import styles from "./TextField.module.css";

const TextField = ({
  onChange,
  name,
  label,
  placeholder,
  required = false,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={styles.input}
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        maxLength={25}
        autoComplete="on"
      />
    </>
  );
};

export default TextField;
