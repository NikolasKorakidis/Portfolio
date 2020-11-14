import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `
    I love creating new Websites from scratch. Come to me with a game plan or just tell me your idea and lets figure together how to build the best Website for you or your company!
    `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `Designing is the actual fun of Web Development. I use the latest technologies and i focus a lot on "looking awesome and be functional" principal!`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "app design",
    text: `With already a couple of mobile Apps but also many more Web Apps in my portfolio i am sure whatever your needs are we can put it on a desktop or mobile screen. I use React-Native for my phone Apps at the moment.`,
  },
]
