import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'brown', 
    padding: 15,
    shadowColor: '#fff', 
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 8,
  },
  title: {
    color: '#fff', // White text color
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;