import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './demo.module.css'

const Demo = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Demo - Playground v3 prototyping</title>
        <meta property="og:title" content="Demo - Playground v3 prototyping" />
      </Helmet>
    </div>
  )
}

export default Demo
