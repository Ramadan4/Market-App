import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductScreen = ({navigation, route}) => {
  const {Products, setProduct} = useState(route.params.Products);
  console.log(Products);
  const _renderClothesCategory = ({Products, index}) => {
    return (
      <TouchableOpacity
        style={styles.outerContainer}
        onPress={() => navigation.navigate('ProductDetailes')}>
        <View style={{justifyContent: 'center'}}>
          <Image
            source={require('../assets/3.webp')}
            style={styles.cartImage}
          />
        </View>
        <View style={{marginTop: 15, marginLeft: -25}}>
          <Text style={styles.cartText}>Lorem Ipsum</Text>
          <Text style={styles.cartText}>1 KG</Text>
          <Text style={styles.cartText}>EGP 400</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('../assets/2.jpg')} style={styles.image} />
        <View style={styles.textAbovImage}>
          <MaterialCommunityIcons
            style={{fontSize: 32, color: '#fff', paddingHorizontal: 15}}
            name="arrow-left"
          />
          <Text style={{fontSize: 22, color: '#fff', marginLeft: 30}}>
            Meat&Seafood
          </Text>
          <View style={{flexDirection: 'row', marginHorizontal: 40}}>
            <Icon
              style={{fontSize: 25, color: '#fff', paddingHorizontal: 25}}
              name="search"
            />
            <Icon
              style={{fontSize: 25, color: '#fff', paddingRight: 20}}
              name="cart"
              onPress={() => {
                navigation.navigate('CartScreen');
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            //paddingHorizontal: 4,
            paddingTop: 1,
          }}>
          <TouchableOpacity
            style={[styles.button_Meat_Sea, {borderRightWidth: 1}]}
            onPress={() => navigation.navigate('CartScreen')}>
            <Text style={styles.title}>Meat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_Meat_Sea} onPress={() => {}}>
            <Text style={styles.title}>Seafood</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.flatlist_View}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list_Container}
          numColumns={2}
          renderItem={_renderClothesCategory}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#FF8C00',
          borderRadius: 30,
        }}>
        <TouchableOpacity
          style={[styles.button_sort]}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text style={[styles.title, {fontWeight: 'bold', color: '#fff'}]}>
            Sort By
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button_sort]}
          onPress={() => navigation.navigate('CartScreen')}>
          <Text style={[styles.title, {fontWeight: 'bold', color: '#fff'}]}>
            Filter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 1,
  },
  image: {
    height: '82%',
    width: Dimensions.get('window').width,
  },
  title: {
    //flex: 1,
    //  fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    padding: 20,
  },
  button_Meat_Sea: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  //////////////
  flatlist_View: {
    flex: 1,
    // backgroundColor: '#fffbbb',
  },
  outerContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderRadius: 30,
  },
  list_Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cartImage: {
    width: 100,
    height: 70,
    borderRadius: 25,
  },
  cartText: {
    fontSize: 10,
    opacity: 0.8,
  },
  button_sort: {
    backgroundColor: '#FF8C00',
  },
  textAbovImage: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
