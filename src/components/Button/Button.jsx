import styles from "./Button.module.css";

const Button = ({
  label,
  backgroundColor,
  type,
  onClick,
  isOutlined = false,
}) => {
  return (
    <button
      style={{
        backgroundColor: isOutlined ? "white" : backgroundColor ?? "white",
        border: isOutlined ? `2px solid ${backgroundColor}` : "none",
        color: isOutlined ? backgroundColor : "inherit",
        placeSelf: "center",
      }}
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
