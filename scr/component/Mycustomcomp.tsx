import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Mycustomcomp = ({ title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color || '#fff' }]}>
      <Text style={styles.title}>{title || 'Default Title'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Mycustomcomp;
