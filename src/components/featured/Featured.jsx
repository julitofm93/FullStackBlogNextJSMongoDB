import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.textContainer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda repudiandae dicta unde dolorem tempora inventore molestias rerum, eius reiciendis doloribus, aperiam illo sunt, adipisci ipsam nam eaque delectus odit.</h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Qui eos deleniti officia
            id consectetur eveniet asperiores harum voluptas?
            Nobis magni ducimus reiciendis dolor autem
            exercitationem quisquam dicta cum, placeat
            excepturi.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured