import React, {Component} from 'react';
import {Text, View} from 'react-native';

class BaruScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMhs: [],
    };
  }
  getDatamhs = () => {
    fetch('http://192.168.184.225/apiserver/public/mahasiswa')
      .then(response => response.json())
      .then(json => console.log(json))
      .then(err => console.log(err));
  };
  componentDidMount() {
    this.getDatamhs();
  }
  render() {
    return (
      <View style={{flex: 1, margin: 5}}>
        <Text>Ini adalah halaman baru</Text>
      </View>
    );
  }
}

export default BaruScreen;
