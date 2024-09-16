import styles from "./wheel.module.css"

function Wheel() {
  const arr = ["one", "two", "three", "four"]
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
    console.log(degree)
    const degreePerElement = 360 / quantity;
    console.log(degreePerElement)

    if (degree <= degreePerElement/2 || 360 - degree <= degreePerElement/2) {
      return console.log("0");
    }

    let resultElement = Math.floor((degree - (degreePerElement / 2)) / degreePerElement);
    console.log(resultElement)
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