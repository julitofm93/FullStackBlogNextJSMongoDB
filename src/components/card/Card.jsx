import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/p1.jpeg" alt='' fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            </Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore minima enim aliquam quis fugit nostrum sit, optio numquam accusantium vel quasi aut quam dolor error quod aliquid veritatis animi quisquam.
            </p>
            <Link href="/"  className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card