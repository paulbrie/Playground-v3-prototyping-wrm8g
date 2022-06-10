import React from 'react'

import { Helmet } from 'react-helmet'

import Comment from '../components/comment'
import projectStyles from '../style.module.css'
import styles from './build-logs-modal.module.css'

const BuildLogsModal = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Playground v3 prototyping</title>
        <meta property="og:title" content="Playground v3 prototyping" />
      </Helmet>
      <h1 className={styles['text']}>Build logs modal</h1>
      <div className={styles['modal']}>
        <div
          className={` ${styles['container01']} ${projectStyles['modal-title']} `}
        >
          <span>Build Logs</span>
        </div>
        <div className={projectStyles['line_gray']}>
          <div className={styles['container03']}>
            <span className={styles['text2']}>
              Retrieving list of deployment files...
            </span>
          </div>
        </div>
        <div className={projectStyles['line_gray']}>
          <div className={styles['container05']}>
            <span className={styles['text3']}>
              Downloading 10 deployment files...
            </span>
          </div>
        </div>
        <div
          className={` ${projectStyles['line_gray']} ${styles['container06']} `}
        >
          <span className={styles['text4']}>Installing build runtime...</span>
        </div>
        <div className={projectStyles['line_gray']}>
          <div className={styles['container08']}>
            <span className={styles['text5']}>
              Build runtime installed: 1.976s
            </span>
          </div>
        </div>
        <div className={projectStyles['line_gray']}>
          <div className={styles['container10']}>
            <span className={styles['text6']}>Build Cache not found</span>
          </div>
        </div>
        <div className={projectStyles['line_gray']}>
          <div className={styles['container12']}>
            <span className={styles['text7']}>Installing dependencies...</span>
          </div>
        </div>
        <div
          className={` ${styles['container13']} ${projectStyles['modal-title']} `}
        >
          <div className={styles['container14']}>
            <div className={styles['container15']}></div>
          </div>
          <div className={styles['container16']}>
            <div className={styles['container17']}>
              <span className={styles['text8']}>Close</span>
            </div>
          </div>
        </div>
      </div>
      <Comment
        text='&lt;-- If it is a warning, remove "warning" and use the orange color'
        rootClassName="root-class-name2"
      ></Comment>
    </div>
  )
}

export default BuildLogsModal
