import React from 'react'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './custom.module.css'

const Custom = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Custom - Playground v3 prototyping</title>
        <meta
          property="og:title"
          content="Custom - Playground v3 prototyping"
        />
      </Helmet>
      <div className={styles['container01']}>
        <div className={styles['container02']}>
          <div
            className={` ${styles['container03']} ${projectStyles['modal-title']} `}
          >
            <div className={styles['container04']}>
              <span className={styles['text']}>Code Inspector</span>
            </div>
            <div className={styles['container05']}>
              <span className={styles['c-s-s-modules']}>Next.js</span>
            </div>
            <div className={styles['container06']}>
              <span className={styles['c-s-s-modules1']}>CSS Modules</span>
            </div>
          </div>
          <div className={styles['container07']}>
            <div className={styles['container08']}>
              <div className={styles['container09']}>
                <div className={styles['container10']}>
                  <span>Code</span>
                  <span>CSS Modules</span>
                </div>
              </div>
              <div className={styles['container11']}>
                <span>
                  <span className={styles['text3']}></span>
                  <span>Your Files</span>
                </span>
              </div>
            </div>
            <div className={styles['container12']}></div>
          </div>
          <div className={styles['container13']}>
            <div className={styles['container14']}></div>
            <div className={styles['container15']}>
              <div className={styles['container16']}>
                <span className={styles['text5']}>Download</span>
                <img
                  alt="pastedImage"
                  src="/playground_assets/[object Object]-zy4h.svg"
                  className={styles['pasted-image']}
                />
              </div>
            </div>
            <div className={styles['container17']}>
              <span className={styles['text6']}>Publish</span>
              <img
                alt="pastedImage"
                src="/playground_assets/[object Object]-zy4h.svg"
                className={styles['pasted-image1']}
              />
              <img
                alt="pastedImage"
                src="/playground_assets/[object Object]-y1gd.svg"
                className={styles['pasted-image2']}
              />
            </div>
          </div>
        </div>
      </div>
      <div>Place holder for widget timer</div>
    </div>
  )
}

export default Custom
