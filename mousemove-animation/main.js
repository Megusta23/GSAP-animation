import "./style.css";
import testImage from "./test.jpg";
import gsap from "gsap";

document.querySelector("#app").innerHTML = `
  <div id="container">
    <img src="${testImage}" alt="Image">
    <div id="trail"></div>
  </div>
`;

const container = document.getElementById("container");
const trail = document.getElementById("trail");
const image = document.querySelector("#container img");

const trailElements = [];

container.addEventListener("mouseover", (event) => {
  const { clientX, clientY } = event;

  const trailElement = document.createElement("img");
  trailElement.style.left = `${clientX - trailElement.offsetWidth / 2}px`;
  trailElement.style.top = `${clientY - trailElement.offsetHeight / 2}px`;
  trail.appendChild(trailElement);
  trailElements.push(trailElement);

  gsap.to(trailElement, {
    opacity: 0,
    duration: 1,
    ease: "Power2.easeOut",
    onComplete: () => trail.removeChild(trailElement),
  });

  gsap.to(image, {
    x: event.clientX - image.offsetWidth / 2,
    y: event.clientY - image.offsetHeight / 2,
    ease: "Power2.easeOut",
  });
});
