"use client"
import Button from '@/components/Button';
import styles from '../../styles/Feedback.module.css'
import {useState}from 'react'

  // cause it tsx i defined the cols and rows of textarea
  const cols: number = 30; 
  const rows: number = 10; 
export default function Form() {

  
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-blue-800 text-2xl lg:text-5xl font-bold pt-20 mb-6">
            FeedBack Form
          </h3>
          <p className="text-slate-500">Health is Wealth<span className="text-blue-800 ml-2 animate-pulse font-bold">Send us a message</span></p>
        </div>
        <form className={styles.formContainer} action="https://fabform.io/f/IYltgSK" method="post">
          <div className={styles.formdiv}>
            <input
              type="text"
              name="name"
              placeholder="firstName: Jane"
              className={styles.inputFbk}
              required
            />
          </div>
          <div className={styles.formdiv}>
            <input
              type="text"
              name="name"
              placeholder="lastName: Smith"
              className={styles.inputFbk}
              required
            />
          </div>
          <div className={styles.formdiv}>
            <input
              type="email"
              name="email"
              placeholder="xxx@gmail.com"
              className={styles.inputFbk}
              required
            />
          </div>
          <div className={styles.formdiv}>
            <input
              type="tel"
              name="name"
              placeholder="080"
              className={styles.inputFbk}
              required
            />
          </div>
          <div className={styles.formdiv1}>
            <textarea
              id="message"
              name="message"
              title="Message"
              cols={cols}
              rows={rows}
              className={styles.inputFbk}
              placeholder='Your Feedback Message'
              required
              />
          </div>
          <div className="mt-3">
            <Button value="Send" className={styles.btnForm} type="submit"/>
          </div>
        </form>
    </div>
    </div>
  )
}