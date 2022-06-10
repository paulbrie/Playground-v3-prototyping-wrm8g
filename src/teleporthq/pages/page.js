import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page - Playground v3 prototyping</title>
        <meta property="og:title" content="Page - Playground v3 prototyping" />
      </Helmet>
      <div className={styles['container1']}>
        <div className={projectStyles['section']}></div>
        <div className={` ${styles['hero']} ${projectStyles['section']} `}>
          <div className={styles['container2']}></div>
          <div className={styles['container3']}></div>
          <div className={styles['container4']}></div>
        </div>
        <div
          className={` ${styles['body']} ${projectStyles['section']} `}
        ></div>
        <div className={projectStyles['section']}></div>
      </div>
    </div>
  )
}

export default Page
