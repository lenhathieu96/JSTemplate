import React, {memo} from 'react';
import {Text} from 'react-native';
import equals from 'react-fast-compare';
import PropTypes from 'prop-types';

import styles from './styles';

export const RegularText = memo(({style, children, text, ...otherProps}) => {
  return (
    <Text
      style={[styles.regularText, style]}
      allowFontScaling={false}
      {...otherProps}>
      {text ? text : children}
    </Text>
  );
}, equals);

RegularText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
  text: PropTypes.string,
};
