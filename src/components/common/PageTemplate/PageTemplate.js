import React from 'react';
import classNames from 'classnames/Bind';
import Header from 'components/common/Header';
import styles from './PageTemplate.scss';

const cx = classNames.bind(styles);

const Pagetemplate = () => {
  return (
    <div className={cx('page-template')}>
      <Header />
    </div>
  );
};

export default Pagetemplate;
