// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   Image,
//   TextInput,
//   Touchable,
//   TouchableOpacity,
// } from 'react-native';
// import {style} from './assets/style';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DetailProduct from './src/screen/DetailProduct';

// function HomeScreen({navigation}) {
//   return (
//     <View style={style.flexsatu}>
//       <View style={style.flexsatu}>
//         <TextInput placeholder="Cari apa nih ?" style={style.cari}></TextInput>
//         <Image
//           source={require('./assets/images/icons8-search-32.png')}
//           style={style.imgCari}
//         />
//         <Image
//           source={require('./assets/images/3.jpg')}
//           style={style.img2}></Image>
//       </View>
//       <View style={style.containerMain}>
//         <TouchableOpacity style={style.kotak}>
//           <Image
//             source={require('./assets/images/icons8-add-32.png')}
//             resizeMode="cover"
//             style={style.img3}
//           />
//           <Text>Add</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={style.kotak}>
//           <Image
//             source={require('./assets/images/icons8-store-32.png')}
//             resizeMode="cover"
//             style={style.img3}
//           />
//           <Text>Store</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={style.kotak}>
//           <Image
//             source={require('./assets/images/icons8-add-32.png')}
//             resizeMode="cover"
//             style={style.img3}
//           />
//           <Text>Add</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={(style.secondayColor, style.containerProduct)}>
//         <Text style={style.textProduct}>Product Terbaru</Text>
//         <View style={style.rowProduct}>
//           <View style={style.flexsatu}>
//             <TouchableOpacity style={style.boxProduct}>
//               <Image
//                 style={style.imageCategory}
//                 source={require('./assets/images/icons8-add-32.png')}></Image>
//               <Text style={style.textBlack}>TV LED Samsung</Text>
//               <Text style={style.textBlack}>Rp. 2.000.000</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={style.flexsatu}>
//             <TouchableOpacity style={style.boxProduct}>
//               <Image
//                 style={style.imageCategory}
//                 source={require('./assets/images/icons8-store-32.png')}></Image>
//               <Text style={style.textBlack}>Lemari TMUF 02A</Text>
//               <Text style={style.textBlack}>Rp. 3.000.000</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={style.rowProduct}>
//           <View style={style.flexsatu}>
//             <TouchableOpacity style={style.boxProduct}>
//               <Image
//                 style={style.imageCategory}
//                 source={require('./assets/images/icons8-store-32.png')}></Image>
//               <Text style={style.textBlack}>Kursi Hanko H-018</Text>
//               <Text style={style.textBlack}>Rp. 4.000.000</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={style.flexsatu}>
//             <TouchableOpacity style={style.boxProduct}>
//               <Image
//                 style={style.imageCategory}
//                 source={require('./assets/images/icons8-add-32.png')}></Image>
//               <Text style={style.textBlack}>Meja Informa</Text>
//               <Text style={style.textBlack}>Rp. 5.000.000</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={style.containerBottom}>
//         <View style={style.textBottom}>
//           <Image
//             source={require('./assets/images/icons8-home-page-32.png')}
//             resizeMode="cover"
//             style={style.img}
//           />
//           <Text>Home</Text>
//         </View>
//         <View style={style.textBottom}>
//           <Image
//             source={require('./assets/images/icons8-star-32.png')}
//             resizeMode="cover"
//             style={style.img}
//           />
//           <Text>Favourite</Text>
//         </View>
//         <View style={style.textBottom}>
//           <Image
//             source={require('./assets/images/icons8-mail-32.png')}
//             resizeMode="cover"
//             style={style.img}
//           />
//           <Text>Inbox</Text>
//         </View>
//         <View style={style.textBottom}>
//           <Image
//             source={require('./assets/images/icons8-user-32.png')}
//             resizeMode="cover"
//             style={style.img}
//           />
//           <Text>Account</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const St = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <St.Navigator>
//         <St.Screen name="Home" component={HomeScreen} />
//       </St.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
