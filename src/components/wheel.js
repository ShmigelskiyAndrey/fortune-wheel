import styles from "./wheel.module.css"

function Wheel() {
  const arr = ["one", "two", "three", "four", "five", "six"]
  const quantity = arr.length

  const generateElems = () => {
    const elem = arr.map((elem, index)=>(<li className={styles.elem} style={{"--idx": index}} key={index}>{elem}</li>))
    return <ul className={styles.wheel} id="wheel" style={{"--size": "600px"}}>{elem}</ul>
  }

  const rotation = () => {
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spinBtn") 
    let previousRotationDegree = 0;

    spinBtn.addEventListener('click', () => {
      const rotationDegree = (Math.random() * 360) + 1800;
      const newRotationDegree = previousRotationDegree + rotationDegree;

      wheel.animate([
        { transform: `rotate(${previousRotationDegree}deg)` },
        { transform: `rotate(${newRotationDegree}deg)` }
      ], {
        duration: 4000,
        direction: 'normal',
        easing: 'cubic-bezier(0.440, -0.205, 0.000, 1.130)',
        fill: 'forwards',
        iterations: 1
      });
      previousRotationDegree = newRotationDegree;
      result(rotationDegree);
    })
  }

  const result = (rotationDegree) => {
    let degree = rotationDegree - 1800;
    const degreePerElement = 360 / quantity;
    let count = 0;
    while (degree > 0) {
      count++;
      degree = degree - degreePerElement;
    }
    console.log(count)
  }

  setTimeout(()=> {rotation()}, 1)

    return (
      <div className={styles.container} style={{"--quantity": quantity}}>
        <div className={styles.picker}></div>
        {generateElems()}
        <button className={styles.spin} id="spinBtn">Spin</button>
      </div>
    );
    
  }

  
  export { Wheel }