import React, {PropTypes} from 'react'
import styles from './Link.css'

const Link = ({
  children,
  href,
  target = '_blank',
}) =>
  <a
    className={styles.link}
    href={href}
    target={target}
  >{children}</a>

Link.propTypes = {
  children: PropTypes.any,
  href: PropTypes.string,
  target: PropTypes.string,
}

export default Link
