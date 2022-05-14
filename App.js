import React, {Component} from 'react';
import {FlatList, Text, View} from 'react-native';
import {style} from './assets/style';

class BaruScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMhs: [],
    };
  }
  getDatamhs = () => {
    fetch('http://192.168.25.225/apiserver/public/mahasiswa')
      .then(response => response.json())
      .then(json => this.setState({dataMhs: json}))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.getDatamhs();
  }
  render() {
    return (
      <View>
        <Text style={style.textA}> Data Mahasiswa </Text>
        <FlatList
          data={this.state.dataMhs}
          keyExtractor={item => item.nobp}
          renderItem={({item, index}) => (
            <View style={style.kotakdua}>
              <Text> {++index} </Text>
              <Text style={style.textNama}> {item.nobp} </Text>
              <Text style={style.textNama}> {item.nama} </Text>
              <Text style={style.textNama}> {item.alamat} </Text>
              <Text style={style.textNama}> {item.nohp} </Text>
            </View>
          )}
        />
      </View>
    );
  }
}

export default BaruScreen;
