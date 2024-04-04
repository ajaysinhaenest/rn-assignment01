/* eslint-disable @typescript-eslint/no-unused-vars */
// import {Button, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// // navigation
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

// const Home = ({navigation}: HomeProps) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.smallText}>Home Screen</Text>
//       <Button
//         title="Go to details"
//         // onPress={() => navigation.navigate("Details", {
//         //   productId: "86"
//         // })}

//         // onPress={() => navigation.navigate("Details")}

//         onPress={() =>
//           navigation.push('Details', {
//             productId: '86',
//           })
//         }
//       />
//     </View>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   smallText: {
//     color: '#000000',
//   },
// });

import {FlatList, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';

//React navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackPramList} from '../App';
import {PRODUCTS_LIST} from '../data';
import Separator from '../Shared/Components/Separator';
import ProductItem from '../Shared/Components/ProductItem';

type HomeProps = NativeStackScreenProps<RootStackPramList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Separator}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem navigation={navigation} key={item.id} product={item} />
          </Pressable>
        )}
      />
      {/* {PRODUCTS_LIST.map(item => (
        <ProductItem navigation={navigation} key={item.id} product={item} />
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
