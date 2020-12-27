import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';

export function AddToCardButton(props) {
  const [Quantity, setQuantity] = React.useState(0);

  const incrementQuantityHandler = () => {
    // this.setState((prevState) => ({Quantity: prevState.Quantity + 1}));
    setQuantity(Quantity + 1);
  };
  const decrementQuantityHandler = () => {
    // this.setState((prevState) => ({Quantity: prevState.Quantity - 1}));
    setQuantity(Quantity - 1);
  };
  const renderInitialButton = () => {
    return (
      <TouchableOpacity
        onPress={incrementQuantityHandler}
        style={{
          backgroundColor: '#FFA500',
          borderColor: '#fff',
          borderRadius: 20,
          borderWidth: 1,
          marginRight: 30,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'baseline',
        }}>
        <Text>ADD</Text>
      </TouchableOpacity>
    );
  };
  const renderIncreaseDecreseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plisMinus} onPress={incrementQuantityHandler}>
          +
        </Text>
        <Text> {Quantity} </Text>
        <Text style={styles.plisMinus} onPress={decrementQuantityHandler}>
          -
        </Text>
      </View>
    );
  };
  return (
    //  {/* {this.state.Quantity === 0
    //     ? this.renderInitialButton()
    //     : this.renderIncreaseDecreseButton()} */}
    Quantity === 0 ? renderInitialButton() : renderIncreaseDecreseButton()
  );
}
