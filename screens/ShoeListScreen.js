import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ShoeItem from '../components/ShoeItem';

const ShoeListScreen = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = () => {
      setShoes([
        {
          id: '1',
          name: 'Nike Air Max Tn',
          price: 190,
          releaseYear: 1998,
          image: require('../assets/nike.jpg'),
        },
        {
          id: '2',
          name: 'Adidas Samba',
          price: 139,
          releaseYear: 1950,
          image: require('../assets/adidas.jpg'),
        },
        {
          id: '3',
          name: 'Puma Palermo',
          price: 101,
          releaseYear: 1980,
          image: require('../assets/puma.jpg'),
        },
        {
          id: '4',
          name: 'Converse 70s',
          price: 70,
          releaseYear: 1970,
          image: require('../assets/converse.jpg'),
        },
        {
          id: '5',
          name: 'Onitsuka Tiger',
          price: 303,
          releaseYear: 1981,
          image: require('../assets/onitsuka.jpg'),
        },
        {
          id: '6',
          name: 'New Balance 530',
          price: 108,
          releaseYear: 1992,
          image: require('../assets/nb.jpg'),
        },
        {
          id: '7',
          name: 'Vans Knu Skool',
          price: 75,
          releaseYear: 1998,
          image: require('../assets/vans.jpg'),
        },
        {
          id: '8',
          name: 'Reebok Club C 85',
          price: 82,
          releaseYear: 1985,
          image: require('../assets/reebok.jpg'),
        },
        {
          id: '9',
          name: 'Asics Gel-Kayano 14',
          price: 139,
          releaseYear: 2008,
          image: require('../assets/asics.jpg'),
        },
        {
          id: '10',
          name: 'DRMARTENS',
          price: 180,
          releaseYear: 1945,
          image: require('../assets/docmart.jpg'),
        },
      ]);
    };
    fetchShoes();
  }, []);

  return (
    <View style={styles.container}>
      <Header title="FootLocker" />
      <FlatList
        data={shoes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ShoeItem shoe={item} />}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222', // Dark background
  },
  listContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ShoeListScreen;