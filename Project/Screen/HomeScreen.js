import axios from 'axios';
import React, {useEffect, useState} from 'react';
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

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://5bcce576cf2e850013874767.mockapi.io/task/categories')
      .then(({data}) => {
        console.log('defaultApp -> data', data);
        setData(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const _renderClothesCategory = ({item, index}) => {
    return (
      <View style={{flex: 1, height: 170}}>
        <TouchableOpacity
          style={styles.Bot_container}
          onPress={() =>
            navigation.navigate('ProductScreen', {Products: item.products})
          }>
          <ImageBackground
            source={{uri: item.category_img}}
            style={styles.image_Cart}>
            <Text style={styles.title}>{item.name}</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={require('../assets/1.jpg')} style={styles.image} />
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.list_Container}
          numColumns={2}
          renderItem={_renderClothesCategory}
        />
      </View>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageView: {
    flex: 1,
    height: '40%',
  },
  image: {
    height: '100%',
    width: Dimensions.get('window').width,
    alignSelf: 'center',
    //resizeMode: 'cover',
  },
  title: {
    //flex: 1,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
    alignItems: 'flex-end',
    marginTop: 100,
  },
  btu: {
    width: '50%',
    height: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  list_Container: {
    flex: 1,
    marginTop: 10,
  },
  view_ModelContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#bbb',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    margin: 10,
  },
  txt_ModelName: {
    fontSize: 15,
    color: '#000',
    marginVertical: 5,
  },
  img_Model: {height: '100%', width: '100%', marginVertical: 10},
  outerContainer: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
    marginHorizontal: 10,
    borderRadius: 15,
  },
  Bot_container: {
    flex: 1,
    padding: 15,
    borderRadius: 15,
    margin: 2,
  },
  image_Cart: {
    width: '100%',
    height: '100%',
    marginEnd: 10,
  },
});
