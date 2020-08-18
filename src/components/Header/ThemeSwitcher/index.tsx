
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

import './style.scss';

type tProps = {
  name: string,
  checked: boolean,
  checkedLabel?: string,
  uncheckedLabel?: string,
  onChange: () => void
};

export default ({
  name,
  checked,
  onChange
}: tProps) => (
  <>
    <label className={`wrapperLabel ${checked ? 'dark' : ''}`}>
      <span className='sliderLabel sliderLabel__left'>
        <FontAwesomeIcon icon={faSun} className='icon' />
      </span>
      <input
        name={name}
        type='checkbox'
        checked={checked}
        onChange={onChange}
      />
      <span className='slider' />
      <span className='sliderLabel sliderLabel__right'>
        <FontAwesomeIcon icon={faMoon} className='icon' />
      </span>
    </label>
  </>
);
