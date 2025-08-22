import styles from "./MyComponent.module.css";

const MyComponent = () => {
  return (
    <div>
      <p className={styles.textRed}>
        Red text!
      </p>
      <p className={styles["text-green"]}>
        Green text!
      </p>
    </div>
  );
};

export default MyComponent;
