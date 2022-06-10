import React from 'react'

import { Helmet } from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page1.module.css'

const Page1 = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Page1 - Playground v3 prototyping</title>
        <meta property="og:title" content="Page1 - Playground v3 prototyping" />
      </Helmet>
      <AppComponent></AppComponent>
    </div>
  )
}

export default Page1
