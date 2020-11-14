import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `
    I love creating new WebSites from scratch. Come to me with a game plan or just tell me your idea and lets figure together how to build the best Website for your or your company!
    `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Designing is the actual fun of Web Development. I use the latest technologies on the market and i focus a lot on "looking awesome and be functional" principal!`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `With already a couple of mobile Apps but also many more Web Apps in my portfolio i am sure whatever is your needs we can put it on a desktop or a mobile screen. I use React-Native for my phone Apps but whatever is your needs i am sure i can adjust for them.`,
  },
]
