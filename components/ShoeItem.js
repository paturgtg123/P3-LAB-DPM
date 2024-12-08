import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Animated } from 'react-native';

const ShoeItem = ({ shoe }) => {
  const scaleValue = new Animated.Value(1);

  // Fungsi untuk menangani klik dan membuka URL website resmi sepatu
  const handlePress = () => {
    const websiteUrl = getShoeWebsite(shoe.id);
    Linking.openURL(websiteUrl);
  };

  // URL untuk masing-masing sepatu berdasarkan ID
  const getShoeWebsite = (shoeId) => {
    const websites = {
      '1': 'https://www.nike.com/id/w/air-max-plus-shoes-ahvdnzy7ok',
      '2': 'https://www.adidas.co.id/en/samba-og-shoes-68187.html',
      '3': 'https://id.puma.com/in/koleksi/lifestyle/palermo',
      '4': 'https://www.converse.id/chuck-70-hi-unisex-black.html?color=294',
      '5': 'https://www.onitsukatiger.com/id/en-id/?gad_source=1&gclid=Cj0KCQiApNW6BhD5ARIsACmEbkW3ZhVOUImtdBboKvMI-Ngxyl8Zyf3ZKLCzd2cgOuUXJK2_9DsJUWAaAhMtEALw_wcB',
      '6': 'https://www.newbalance.co.id/women/shop-by-style/530.html',
      '7': 'https://www.vans.com/en-us/shoes-c00081/knu-skool-suede-shoe-pvn0009qc6bt',
      '8': 'https://www.reebok.id/collections/club-c?gad_source=1&gclid=Cj0KCQiApNW6BhD5ARIsACmEbkUAC-dZmuXXtn3kJNL6zuOqK1FDftgRCeRmqne70i7TnoaoXZzCUiAaAu1bEALw_wcB',
      '9': 'https://asics.co.id/koleksi/stability/gel-kayano?srsltid=AfmBOorsCrCEydCWWNE5Lu2B9Gm6C8-LCLEdPjNWD0wblOuOHvhYs52b',
      '10': 'https://www.drmartens.com/us/en/?srsltid=AfmBOoqkfKl3HTO5gdXZuS4kc5yvS-JPPGGgPWOknYHBBavk0F2bTo_a',
    };
    return websites[shoeId] || 'https://www.google.com';
  };

  // Animasi scale saat ditekan
  const onPressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 3,
      tension: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onPress={handlePress}
      style={styles.card}
    >
      <Animated.View style={[styles.imageContainer, { transform: [{ scale: scaleValue }] }]}>
        <Image source={shoe.image} style={styles.image} />
      </Animated.View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{shoe.name}</Text>
        <Text style={styles.price}>${shoe.price}</Text>
        <Text style={styles.releaseYear}>Release Year: {shoe.releaseYear}</Text> 
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#333', // Dark background
    borderRadius: 20,
    margin: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#fff',
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 10,
    elevation: 8,
    overflow: 'hidden',
    width: '45%',
    position: 'relative',
  },
  imageContainer: {
    width: '100%',
    height: 150,
    overflow: 'hidden',
    borderRadius: 15,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#444',
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
  },
  releaseYear: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 5,
  },
});

export default ShoeItem;
