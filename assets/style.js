import {StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
const style = StyleSheet.create({
  flexsatu: {
    flex: 1,
  },
  flexdua: {
    flex: 2,
  },
  flextiga: {
    flex: 3,
  },
  textBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerBottom: {
    height: 55,
    flexDirection: 'row',
  },
  content: {
    flex: 1,
  },
  img: {
    width: 27,
    height: 27,
  },
  img2: {
    width: 350,
    height: 140,
    marginVertical: 30,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  img3: {
    width: 35,
    height: 35,
  },
  cari: {
    borderWidth: 10,
    borderRadius: 10,
    height: 35,
    borderColor: 'white',
    paddingLeft: 45,
    paddingRight: 15,
    backgroundColor: 'white',
    marginTop: 10,
  },
  kotak: {
    paddingVertical: 0,
    backgroundColor: '#f3e5f5',
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 14,
    elevation: 5,
    borderRadius: 10,
    height: 80,
    width: 80,
  },
  kotakdua: {
    backgroundColor: '#f3e5f5',
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 20,
    elevation: 5,
    borderRadius: 40,
    flexDirection: 'row',
    padding: 30,
  },
  imgCari: {
    position: 'absolute',
    top: 18,
    left: 15,
    height: 25,
    width: 25,
  },
  containerMain: {
    height: 115,
    flexDirection: 'row',
  },
  containerProduct: {
    marginHorizontal: 20,
    height: 350,
  },
  textProduct: {
    marginBottom: 5,
    fontSize: 18,
  },
  rowProduct: {
    marginBottom: 10,
    height: 150,
    flexDirection: 'row',
  },
  boxProduct: {
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    height: 150,
    alignSelf: 'stretch',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  textBlack: {
    color: '#000000',
  },
  textNama: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'RobotoMono-Regular',
  },
  textA: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'RobotoMono-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
});
export {style};
