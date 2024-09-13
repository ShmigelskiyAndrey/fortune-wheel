import styles from "./wheel.module.css"

function Wheel() {
  const arr = ["one", "two", "three", "four", "five", "six"]
  const quantity = arr.length

  const generateElems = () => {
    const elem = arr.map((elem, index)=>(<li className={styles.elem} style={{"--idx": index}} key={index}>{elem}</li>))
    return <ul className={styles.wheel} id="wheel">{elem}</ul>
  }

  const rotation = () => {
    const wheel = document.getElementById("wheel");
    const rotationDegree = (Math.random() * 360) + 1800;

    let animation;
    let previousRotationDegree = 0;
    const newRotationDegree = previousRotationDegree + rotationDegree;

    animation = wheel.animate([
      { transform: `rotate(${previousRotationDegree}deg)` },
      { transform: `rotate(${newRotationDegree}deg)` }
    ], {
      duration: 4000,
      direction: 'normal',
      easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
      fill: 'forwards',
      iterations: 1
    });

    console.log(animation)
  }

    return (
      <div className={styles.container} style={{"--quantity": quantity}}>
        {generateElems()}
        <button className={styles.spin} onClick={()=> {rotation()}}>Spin</button>
      </div>
    );
    
  }

  
  export { Wheel }