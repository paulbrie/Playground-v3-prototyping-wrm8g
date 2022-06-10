import React from 'react'

import PropTypes from 'prop-types'

import styles from './comment.module.css'

const Comment = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
    </div>
  )
}

Comment.defaultProps = {
  text: 'Your comment here',
  rootClassName: '',
}

Comment.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Comment
