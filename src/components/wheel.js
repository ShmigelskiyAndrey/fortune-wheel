import styles from "./wheel.module.css"

let arr = ["one", "two", "three", "four"]

function Wheel() {
  const list = document.getElementById("da")

 if (document.readyState === 'complete') {
  console.log("yyy")
  arr.map((elem)=>(
    list.append(document.createElement("div"))
  ))
}
  
    return (
      <ul className={styles.wheel} id="da">
        {/* <li className={styles.elem}>one</li>
        <li className={styles.elem}>two</li>
        <li className={styles.elem}>three</li>
        <li className={styles.elem}>four</li>
        <li className={styles.elem}>five</li>
        <li className={styles.elem}>six</li>
        <li className={styles.elem}>seven</li>
        <li className={styles.elem}>eight</li>
        <li className={styles.elem}>nine</li>
        <li className={styles.elem}>ten</li>
        <li className={styles.elem}>eleven</li>
        <li className={styles.elem}>twelve</li> */}
      </ul>
    );
    
  }
  
  export { Wheel }