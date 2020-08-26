import React from 'react';
import { Button } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const ButtonComponent = (props) => {
  return (
    <Button color={props.color} fontColor={props.fontColor}>
      <FontAwesomeIcon icon={props.fa === 'faSearch' ? faSearch : faStar} />
      <p>{props.text}</p>
    </Button>
  );
};
