import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import styles from '../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
  // Store email in state variable
  const [email, setEmail] = useState('');

  const handleSubmit = () => { 
    // Alert user when they submit their email
    const message = "A notification will be sent to " + email + " when we officially launch"
    alert(message) 
  }

  
  const handleChange = (event) => {
    // Update email state with contents of input field
    setEmail(event.target.value)
  }

  return (
    <div className={styles.container}>
     <Image src='/uCast.png' width='64' height='68'/>
     <h1 className={styles.title}>uCast</h1>
     <div class='form-group'>
     <p className={styles.description}>Provide an email to be notified when we launch</p>
      <div class='input-group'>
        <input className='form-control' onChange={ handleChange } placeholder="Email address"/>
        <div class='input-group-append'>
          <button className='input-group-text' onClick={ handleSubmit }>Submit</button>
        </div>
      </div>
     </div>
    </div>
  )
}