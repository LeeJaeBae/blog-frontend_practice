import React from 'react';
import classNames from 'classnames/Bind';
import styles from './Header.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return <div className={cx('header')}> </div>;
};

export default Header;
