
import { View, Text, StyleSheet } from 'react-native';

const produits = [
  { id: 1, nom: 'Clavier', categorie: 'Accessoires', prix: 120, stock: 5 },
  { id: 2, nom: 'Souris', categorie: 'Accessoires', prix: 80, stock: 8 },
  { id: 3, nom: 'Écran', categorie: 'Informatique', prix: 900, stock: 0 },
  { id: 4, nom: 'Casque', categorie: 'Accessoires', prix: 240, stock: 3 },
];

const p = produits.filter(p => p.stock > 0);

const valeurStock = produits.reduce(
  (somme, p) => somme + p.prix * p.stock,
  0
);

export default function App() {
  return (
    <View style={styles.ecran}>
      <Text style={styles.titre}>Catalogue des produits</Text>

      <Text style={styles.ligne}>
        Nombre de produits disponibles : {p.length}
      </Text>

      <Text style={styles.ligne}>
        Valeur du stock : {valeurStock} MAD
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ecran: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 26,
    backgroundColor: '#F2F7FD',
  },
  titre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00235C',
    marginBottom: 20,
  },
  ligne: {
    fontSize: 17,
    paddingVertical: 8,
    color: '#00235C',
  },
});
