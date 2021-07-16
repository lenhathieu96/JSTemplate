import React, {memo} from 'react';
import {View, SafeAreaView} from 'react-native';
import equals from 'react-fast-compare';
import PropTypes from 'prop-types';

import styles from './styles';

export const Block = memo(
  ({safeArea = false, style, children, ...otherProps}) => {
    return safeArea ? (
      <SafeAreaView style={[styles.root, style]} {...otherProps}>
        {children}
      </SafeAreaView>
    ) : (
      <View style={[styles.root, style]} {...otherProps}>
        {children}
      </View>
    );
  },
  equals,
);

Block.propTypes = {
  safeArea: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.node,
};
