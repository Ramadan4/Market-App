import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Drawer} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('MainHomeScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cart" color={color} size={size} />
              )}
              label="Cart"
              onPress={() => {
                props.navigation.navigate('CartScreen');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="ProductScreen"
              onPress={() => {
                props.navigation.navigate('ProductScreen');
              }}
            />
            {/* <DrawerItem
              icon={({color, size}) => (
                <Icon name="back" color={color} size={size} />
              )}
              label="ProductDetailes"
              onPress={() => {
                props.navigation.navigate('ProductDetailes');
              }}
            /> */}
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSectiopn: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
});
