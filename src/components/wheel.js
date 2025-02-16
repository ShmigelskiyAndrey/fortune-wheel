import { useEffect, useCallback } from "react"
import styles from "./wheel.module.css"

function Wheel({size = window.innerWidth / 100 * 50}) {
  const arr = ["one", "two", "еркуу"]
  const quantity = arr.length

  const result = useCallback((realRotationDegree) => {
    const degreePerElement = 360 / quantity;
    let choosenElement;

    while (realRotationDegree >= 360) {
      realRotationDegree = realRotationDegree - 360;
    };

    if (realRotationDegree <= degreePerElement/2 || 360 - realRotationDegree <= degreePerElement/2) {
      choosenElement = 0;
    } else {
      choosenElement = Math.floor((realRotationDegree + (degreePerElement / 2)) / degreePerElement);
    }

    const resultElement = document.querySelector(`[style*='--position: ${choosenElement}']`);
    console.log(resultElement)

    resultElement.animate([
      {transform: "scale(1, 1)"},
      {transform: "scale(1.1, 1.3)"},
      {transform: "scale(1, 1)"},
    ], {
      delay: 4000,
      duration: 1000,
      easing: 'cubic-bezier(0.12, 0, 0.39, 0)',
    })
  },[quantity])

  useEffect(()=>{
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spinBtn") 
    let previousRotationDegree = 0;
    
    spinBtn.addEventListener('click', () => {
      const rotationDegree = (Math.random() * 360) + 1800;
      const newRotationDegree = previousRotationDegree + rotationDegree;
      const realRotationDegree = newRotationDegree - 1800;

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
      previousRotationDegree = realRotationDegree;
      result(realRotationDegree);
    })
  },[result])

  const generateElems = () => {
    const elem = arr.map((elem, index)=>(<li className={styles.elem} style={{"--idx": index}} key={index}><span style={{"--position": index}}>{elem}</span></li>))
    return <ul className={styles.wheel} id="wheel" style={{"--size": size + "px"}}>{elem}</ul>
  }
  
    return (
      <div className={styles.container} style={{"--quantity": quantity}}>
        <div className={styles.picker}></div>
        {generateElems()}
        <button className={styles.spin} id="spinBtn">Spin</button>
      </div>
    );
    
  }

  
  export { Wheel }