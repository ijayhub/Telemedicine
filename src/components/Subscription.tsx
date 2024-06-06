import styles from '../styles/Subscription.module.css'
import Button from './Button'
export default function Subscription() {
  return (
    <section className={styles.bgSub}>
      <div className=' text-white text-center '>
        <h2 className="font-bold lg:text-6xl">Receive Daily Healthy Tips</h2>
        <p className="text-xs lg:text-base mt-3 lg:mt-6">Subscribe here to get healthy tips on how to stay fit, and live your best life.</p>
      </div>
      
      <div className={styles.formContainer}>
        <form action="https://fabform.io/f/E-126ki" method="post" className=" p-3 lg:p-4 lg:flex justify-center">
          <input type="text" title="subscription" name="subscription" placeholder='Enter your email address here' className={styles.input} />
          <Button value="Subscribe" className={styles.btnSub} type="submit" />
        </form>
      </div>
    </section>
  )
}
