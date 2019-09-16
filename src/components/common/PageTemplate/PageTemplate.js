import React from 'react';
import classNames from 'classnames/Bind';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

const Pagetemplate = () => {
  return <div className={cx('page-template')}> </div>;
};

export default Pagetemplate;
