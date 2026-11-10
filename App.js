import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import api from './src/services/api';
import { styles } from './styles';

export default function App() {
  let initial_moedas = [
    { id: 1, nome: 'Real', codigo: 'BRL' },
    { id: 2, nome: 'Dólar', codigo: 'USD' },
    { id: 3, nome: 'Euro', codigo: 'EUR' },
    { id: 4, nome: 'Bitcoin', codigo: 'BTC' },
  ]

  const [moedas, setMoedas] = useState(initial_moedas)
  const [valor, setValor] = useState('')
  const [de, setDe] = useState(0)
  const [para, setPara] = useState(1)
  const [resultado, setResultado] = useState('')

  let moedasItem = moedas.map((item, chave) => {
    return <Picker.Item key={chave} value={chave} label={item.nome} />
  })

  // Busca na API quanto vale 1 unidade da moeda em Reais (atributo ask)
  const buscarCotacao = async (codigo) => {
    if (codigo === 'BRL') {
      return 1;
    }

    const response = await api.get('/' + codigo + '-BRL');
    return parseFloat(response.data[codigo + 'BRL'].ask);
  }

  const converter = async () => {
    if (valor === '' || isNaN(parseFloat(valor))) {
      alert('Digite um valor válido!')
      return;
    }

    const cotacaoDe = await buscarCotacao(moedas[de].codigo)
    const cotacaoPara = await buscarCotacao(moedas[para].codigo)

    let valorEmReais = parseFloat(valor) * cotacaoDe
    let convertido = valorEmReais / cotacaoPara

    let casas = moedas[para].codigo === 'BTC' ? 8 : 2
    setResultado(convertido.toFixed(casas) + ' ' + moedas[para].codigo)
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Conversor de Moedas</Text>

      <View style={styles.linha}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={valor}
          onChangeText={(texto) => setValor(texto)}
        />
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>De:</Text>
        <View style={styles.areaPicker}>
          <Picker
            selectedValue={de}
            onValueChange={(itemValue, itemIndex) => setDe(itemValue)}
          >
            {moedasItem}
          </Picker>
        </View>
      </View>

      <View style={styles.linha}>
        <Text style={styles.label}>Para:</Text>
        <View style={styles.areaPicker}>
          <Picker
            selectedValue={para}
            onValueChange={(itemValue, itemIndex) => setPara(itemValue)}
          >
            {moedasItem}
          </Picker>
        </View>
      </View>

      <Pressable style={styles.botao} onPress={converter}>
        <Text style={styles.textoBotao}>Converter</Text>
      </Pressable>

      <Text style={styles.resultadoTitulo}>Valor convertido</Text>
      <View style={styles.areaResultado}>
        <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}
