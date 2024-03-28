import Image from "next/image"
import styles from "./singlePage.module.css"
import Menu from "@/components/menu/Menu"
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam perspiciatis officia facilis tempora facere. Aliquam nemo magni consequatur numquam commodi illum, nihil, ducimus illo ut architecto veniam? Repellendus, corrupti laboriosam.</p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore doloribus amet repudiandae eos non iste odio repellat tenetur, totam illo ea atque, ex quis quo. Recusandae iste omnis hic sed!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam amet aperiam quos ratione vel dolores laboriosam ad excepturi eligendi reiciendis a voluptatem facilis, maxime cupiditate harum accusantium. Atque, aliquid.</p>
          </div>
          <div className={styles.comment}>
           <Comments /> 
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage   