import React from 'react'

import { Helmet } from 'react-helmet'

import Comment from '../components/comment'
import projectStyles from '../style.module.css'
import styles from './account-settings.module.css'

const AccountSettings = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Account Settings - Playground v3 prototyping</title>
        <meta
          property="og:title"
          content="Account Settings - Playground v3 prototyping"
        />
      </Helmet>
      <div className={styles['screen-section']}>
        <div className={styles['section']}>
          <span className={styles['text']}>Name</span>
          <span className={styles['text01']}>
            This is the name you used when you signed up
          </span>
          <input
            type="text"
            value="Paul Brie"
            placeholder="placeholder"
            className={` ${styles['textinput']} ${projectStyles['input']} `}
          />
        </div>
        <div className={styles['section1']}>
          <span className={styles['text02']}>Email</span>
          <span className={styles['text03']}>
            This is the e-mail account that your link is associated to
          </span>
          <input
            type="text"
            value="Paul Brie"
            placeholder="placeholder"
            className={` ${styles['textinput1']} ${projectStyles['input']} `}
          />
        </div>
        <div className={styles['section2']}>
          <span className={styles['text04']}>Github</span>
          <span className={styles['text05']}>
            Your teleportHQ account is linked to your Github account.
          </span>
          <button
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            Unlink
          </button>
        </div>
        <div className={styles['section3']}>
          <span className={styles['text06']}>Password</span>
          <span className={styles['text07']}>
            <span>
              Your TeleportHQ account can also be accessed by typing a password.
            </span>
          </span>
          <button
            className={` ${styles['button1']} ${projectStyles['button']} `}
          >
            Remove Password Access
          </button>
        </div>
        <div className={styles['section4']}>
          <span className={styles['text09']}>Delete Account</span>
          <span className={styles['text10']}>
            <span>
              If you want to delete your account click on the button below.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              Please be aware that this action will permanently erase all of
              your projects and associated data from our platform. This action
              cannot be undone.
            </span>
          </span>
          <button
            className={` ${styles['button2']} ${projectStyles['button']} `}
          >
            Delete Account
          </button>
        </div>
      </div>
      <Comment
        text="&lt;-- Can we show here the id of the Github account?"
        rootClassName="root-class-name3"
      ></Comment>
      <Comment
        text="&lt;-- Field should be disabled and a no-editing cursor should appear"
        rootClassName="root-class-name7"
      ></Comment>
      <Comment
        text="&lt;-- Please add our default hover effect"
        rootClassName="root-class-name4"
      ></Comment>
      <Comment
        text="Github and Password should only appear if the associations exist"
        rootClassName="root-class-name5"
      ></Comment>
      <Comment
        text="The password section should not appear if that's the only way of logging in."
        rootClassName="root-class-name6"
      ></Comment>
    </div>
  )
}

export default AccountSettings
