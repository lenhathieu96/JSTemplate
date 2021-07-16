import React, {memo} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons';
import isEqual from 'react-fast-compare';
import PropTypes from 'prop-types';

import {RegularText} from '@components';

import styles from './styles';
import {Color} from '@utils/color';
import {biggest} from '@utils/fontsize';

export const Button = memo(
  ({
    label,
    labelStyle,
    icon,
    reverse = false,
    iconColor = Color.primary,
    iconSize = biggest,
    style,

    onPress,
  }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            styles.iconContainer,
            style,
            // eslint-disable-next-line react-native/no-inline-styles
            {flexDirection: reverse ? 'row-reverse' : 'row'},
          ]}>
          {label ? (
            <RegularText style={[styles.label, labelStyle]}>
              {label}
            </RegularText>
          ) : null}
          {icon ? <Icon name={icon} size={iconSize} color={iconColor} /> : null}
        </View>
      </TouchableWithoutFeedback>
    );
  },
  isEqual,
);

Button.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  reverse: PropTypes.bool,
  iconColor: PropTypes.string,
  iconSize: PropTypes.number,
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
