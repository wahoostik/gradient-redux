// un container est un composant qui va donner a un Dumb/Stateless component
// des éléments du state via ses props
// on appelle ce type de composant un High Order Component (HoC)

// on importe la fonction connect qui va nous permettre de relier
// en lecture et écriture du state le Stateless component
import { connect } from 'react-redux';

// on importe le composant à connecter
import NbColors from 'src/components/NbColors';

// on prépare 2 fonctions qu'on passera à connect

// --- Branchement en lecture du state
// la 1e fonction sera là pour lire les infos du state
// par convention on l'appelle mapStateToProps
// elle prend en paramètre le state
// cette fonction renvoie un objet de props
const mapStateToProps = (state) => ({
  // nbColors du state dans le reducer
  nbColorsProps: state.nbColors,
});

const mapDispatchToProps = () => ({});

// on exécute connect en lui passant les 2 fonctions qu'on a préparé
// la fonction nous renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

// on donne le composant à connecter, la fonction que nous a à retourné connect
// cette fonction nous retourne un composant enrichi de props
const connectedComponent = componentToConnect(NbColors);

export default connectedComponent;
