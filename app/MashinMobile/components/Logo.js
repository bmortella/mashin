import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../assets/logoazul.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 136,
    height: 136,
    marginBottom: 12,
  },
});

export default memo(Logo);