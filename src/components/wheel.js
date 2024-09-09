import styles from "./wheel.module.css"

function Wheel() {
    return (
      <ul className={styles.wheel}>
        <li className={styles.elem}>one</li>
        <li className={styles.elem}>two</li>
        <li className={styles.elem}>three</li>
        <li className={styles.elem}>four</li>
        <li className={styles.elem}>five</li>
      </ul>
    );
  }
  
  export { Wheel }