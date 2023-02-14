import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0,
    };
  }

  masukkanAngka = (value) => {
    if(this.state.hitung == 0) {
      this.setState({hitung: value})
    } else {
      this.setState({hitung: this.state.hitung + '' + value});
    }
  }

  hitungHasil = () => {
    let hasil = eval(this.state.hitung)
    this.setState({hitung: hasil})
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#212121" barStyle="light-content" />

        <View style={styles.hasil}>
          <View style={styles.barisHasil}>
            <Text style={styles.angkaHasil}>{this.state.hitung}</Text>
          </View>
        </View>

        <View style={{flex: 1}}>
          <View style={styles.isi}>
            <TouchableOpacity style={styles.barisClear} onPress={() => this.setState({hitung: 0})}>
              <Text style={styles.clear}>Clear</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.isi}>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(7)}>
              <Text style={styles.angka}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(8)}>
              <Text style={styles.angka}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(9)}>
              <Text style={styles.angka}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barisKanan} onPress={() => this.masukkanAngka('*')}>
              <Text style={styles.kanan}>x</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.isi}>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(4)}>
              <Text style={styles.angka}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(5)}>
              <Text style={styles.angka}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(6)}>
              <Text style={styles.angka}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barisKanan} onPress={() => this.masukkanAngka('-')}>
              <Text style={styles.kanan}>-</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.isi}>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(1)}>
              <Text style={styles.angka}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(2)}>
              <Text style={styles.angka}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(3)}>
              <Text style={styles.angka}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barisKanan} onPress={() => this.masukkanAngka('+')}>
              <Text style={styles.kanan}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.isi}>
            <TouchableOpacity style={styles.baris} onPress={() => this.masukkanAngka(0)}>
              <Text style={styles.angka}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.baris}>
              <Text style={styles.angka}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barisKanan} onPress={() => this.masukkanAngka('/')}>
              <Text style={styles.kanan}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.barisKanan} onPress={() => this.hitungHasil()}>
              <Text style={styles.kanan}>=</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },

  isi: {
    flexDirection: 'row',
  },

  barisClear: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
  },

  baris: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    width: 80,
    height: 70,
    backgroundColor: '#78909c',
    borderRadius: 60,
  },

  barisKanan: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    width: 80,
    height: 70,
    backgroundColor: '#4fc3f7',
    borderRadius: 60,
  },

  angka: {
    color: '#FFFFFF',
    fontSize: 32,
    textAlign: 'center',
  },

  kanan: {
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  },

  clear: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'right',
  },

  hasil: {
    flex: 0.5,
    justifyContent: 'flex-end',
  },

  barisHasil: {
    color: '#FFFFFF',
    fontSize: 24,
    padding: 10,
    margin: 10,
  },

  angkaHasil: {
    color: '#FFFFFF',
    fontSize: 40,
    textAlign: 'right',
  },
});

export default App;
