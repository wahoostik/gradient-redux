import { connect } from 'react-redux';

// on importe le composant à connecter
import Colors from 'src/components/Colors';

const mapStateToProps = (state) => ({
  // du state dans le reducer
  firstColorProps: state.firstColor,
  lastColorProps: state.lastColor,
  directionProps: state.direction,
});

const mapDispatchToProps = () => ({});

// on exécute connect en lui passant les 2 fonctions qu'on a préparé
// la fonction nous renvoie une fonction (closure)
const componentToConnect = connect(mapStateToProps, mapDispatchToProps);

// on donne le composant à connecter, la fonction que nous a à retourné connect
// cette fonction nous retourne un composant enrichi de props
const connectedComponent = componentToConnect(Colors);

export default connectedComponent;
