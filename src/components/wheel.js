import styles from "./wheel.module.css"

function Wheel() {
  const arr = ["one", "two", "three", "four", "five", "six"]
  const quantity = arr.length

  const generateElems = ()=> {
    const elem = arr.map((elem, index)=>(<li className={styles.elem} style={{"--idx": index}} key={index}>{elem}</li>))
    return <ul className={styles.wheel}>{elem}</ul>
  }


    return (
      <div className={styles.container} style={{"--quantity": quantity}}>
        {generateElems()}
      </div>
    );
    
  }

  
  export { Wheel }