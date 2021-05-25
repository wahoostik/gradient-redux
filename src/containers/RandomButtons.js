import { connect } from 'react-redux';
import RandomButtons from 'src/components/RandomButtons';
import { randomizeFirstColor, randomizeLastColor } from 'src/actions';
import { randomHexColor } from 'src/utils';

// ici on ne veut pas lire de l'info du state, on veut le modifier
const mapStateToProps = () => ({});

// Branchement en écriture du state
// on utilise mapDispatchToProps pour passer des fonctions qui vont modifier le state
// on a la fonction dispatch passée en paramètre
const mapDispatchToProps = (dispatch) => ({
  onClickRandomFirstButton: () => {
    // pour modifier le state avec Redux, il faut faire un dispatch d'une action
    // on prépare une nouvelle couleur random
    const color = randomHexColor();
    // on prépare l'action
    const action = randomizeFirstColor(color);
    // on va faire le dispatch de notre action
    dispatch(action);
  },
  onClickRandomLastButton: () => {
    // const action = randomizeLastColor();
    // dispatch(action);
    dispatch(randomizeLastColor());
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(RandomButtons);
export default connectedComponent;

// version courte
// export default connect(mapStateToProps, mapDispatchToProps)(RandomButtons);
