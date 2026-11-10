import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 15,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 28,
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: '#222',
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    width: 70,
    fontSize: 20,
    textAlign: 'right',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#222',
    fontSize: 18,
    padding: 10,
  },
  areaPicker: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#222',
  },
  botao: {
    height: 50,
    marginTop: 10,
    backgroundColor: '#4a7bd0',
    justifyContent: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFF',
  },
  resultadoTitulo: {
    textAlign: 'center',
    fontSize: 22,
    color: 'blue',
    marginTop: 20,
    marginBottom: 10,
  },
  areaResultado: {
    height: 60,
    borderWidth: 2,
    borderColor: 'blue',
    justifyContent: 'center',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    color: 'blue',
  },
});

export { styles };
