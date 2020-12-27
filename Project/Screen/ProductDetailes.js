import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {AddToCardButton} from '../Component/AddToCardButton/index';
const ProductDetailes = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.uperView}>
        <Image
          style={styles.imageDetails}
          source={require('../assets/3.webp')}
        />
        <View style={{paddingVertical: 15}}>
          <Text style={styles.textImage}>طبق كشري انما اي </Text>
          <Text style={styles.textImage}>1 KG</Text>
          <Text style={styles.textImage}> EGP 15</Text>
        </View>
      </View>
      <View style={{flex: 1, paddingLeft: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <Text style={styles.textQty}>Qty</Text>
          <AddToCardButton />
        </View>
        <Text style={{marginLeft: 25, fontSize: 15}}> Total EGP 700 </Text>

        <View
          style={{
            margin: 25,
          }}>
          <Text style={{opacity: 0.5}}>
            Seafood is any form of sea life regarded as food by humans,
            prominently including fish and shellfish. Shellfish include various
            species of molluscs (e.g. bivalve molluscs such as clams, oysters,
            and mussels and cephalopods such as octopus and squid), crustaceans
            (e.g. shrimp, crabs, and lobster), and echinoderms (e.g. sea
            cucumbers and sea urchins). Historically, marine mammals such as
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFA500',
          borderColor: '#fff',
          borderRadius: 15,
          borderWidth: 1,
          marginHorizontal: 50,
          marginBottom: 10,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>ADD TO CART</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ProductDetailes;
const styles = StyleSheet.create({
  uperView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageDetails: {
    width: '80%',
    height: '60%',
    marginHorizontal: 15,
    borderRadius: 30,
  },
  textImage: {
    fontSize: 18,
    // fontWeight: 20,
    paddingVertical: 1,
  },
  textQty: {
    fontSize: 16,
    // fontWeight: 20,
    paddingVertical: 1,
  },
});
