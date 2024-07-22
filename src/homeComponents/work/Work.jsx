'use client'
import React, { useState } from "react";
import styles from "./work.module.css";
import { FaGithub } from "react-icons/fa6";
import Image from 'next/image'

// data
const dataArray = [
    {
        id: 1,
        img: "/assets/projects/add.svg",
        title: "Add User Functionality",
        category: "mini-project",
        link: "https://github.com/Shokh977/Add---user---functionality",
      },
      {
        id: 2,
        img: "/assets/projects/website.svg",
        title: "Static Single Page",
        category: "react-project",
        link: "https://github.com/Shokh977/Single-Page-Website-in-ReactJs",
      },
      {
        id: 3,
        img: "/assets/projects/login.svg",
        title: "Login with Authantication",
        category: "mini-project",
        link: "https://github.com/Shokh977/Dummy-Authtication-log-in",
      },
      ,
      {
        id: 4,
        img: "/assets/projects/form.svg",
        title: "React Form with Validation",
        category: "react-project",
        link: "https://github.com/Shokh977/Form-in-react",
      },
      ,
      {
        id: 5,
        img: "/assets/projects/todo.svg",
        title: "To Do App",
        category: "mini project",
        link: "https://github.com/Shokh977/To-Do-App",
      },
      ,
      {
        id: 6,
        img: "/assets/projects/compete.svg",
        title: "Traditional Rock-Paper-Scissors",
        category: "JS-mini-project",
        link: "https://github.com/Shokh977/Rock-paper-scissors",
      },
  ];
  
  export default dataArray;
  

export const Work = () => {
  const [items, setItems] = useState(dataArray);
  const [activeFilter, setActiveFilter] = useState(null);

  const filterItem = (categoryItem) => {
    const updatedItems = dataArray.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updatedItems);
    setActiveFilter(categoryItem);
  };

  let content;
  if (items.length <= 0) {
    content = <p className={styles.workError}>No Projects in this section...</p>;
  } else {
    content = (
      <div className={styles.workContainer}>
        {items.map((elem) => {
          const { id, img, title, category, link } = elem;
          return (
            <div className={styles.card} key={id}>
              <div className={styles.thumbnail}>
                <Image src={img} alt="" width={300} height={160} className={styles.img} />
                <div className={styles.mask}></div>
              </div>
              <span className={styles.category}>{category}</span>
              <h3 className={styles.title}>{title}</h3>
              <a href={link} className={styles.button} target="_blank">
                <FaGithub className={styles.buttonIcon} size={30}/>
              </a>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          Recent <span>Work</span>
        </h1>
        <p>
         
        </p>
      </div>

      <div className={styles.work} id="portfolio">
        <div className={styles.filters}>
          <span
            className={`${styles.workItem} ${activeFilter === null ? styles.active : ''}`}

            onClick={() => {
              setItems(dataArray);
              setActiveFilter(null);
            }}>
            Everything
          </span>
          <span
            className={`${styles.workItem} ${activeFilter === "mini-project" ? styles.active : ''}`}

            onClick={() => {
              filterItem("mini-project");
            }}>
            Mini Projects
          </span>
          <span
            className={`${styles.workItem} ${
              activeFilter === "react-project" ? styles.active : ""
            }`}
            onClick={() => {
              filterItem("react-project");
            }}>
            ReactJS
          </span>
          <span
            className={`${styles.workItem} ${
              activeFilter === "JS-project" ? styles.active: ""
            }`}
            onClick={() => {
              filterItem("JS-project");
            }}>
            Java Script
          </span>
        </div>
        {content}
      </div>
    </div>
  );
};
