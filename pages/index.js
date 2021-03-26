import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  return (
    <div className={styles.container}>
     <Image src='/uCast.png' width='64' height='68'/>
     <h1 className={styles.title}>uCast</h1>
     <p className={styles.description}>Provide an email to be notified when we launch</p>
    </div>
  )
}
