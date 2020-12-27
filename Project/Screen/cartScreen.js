import React from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const CartScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container}>
        <Image source={require('../assets/3.webp')} style={styles.image} />
        <View style={styles.wrapper}>
          <Text style={styles.title}>Lorem Ipsum</Text>
          <Text style={styles.title}>IKG</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 15}}>Egp 350</Text>
            <Image source={require('../assets/2.jpg')} style={styles.icons} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default CartScreen;

const styles = StyleSheet.create({
  outerContainer: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
  },
  image: {
    width: '30%',
    height: '100%',
    marginEnd: 10,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,

    alignItems: 'center',
  },
  icons: {
    width: '5%',
    height: '100%',
  },
});
