import { connect } from 'react-redux';
import DirectionButtons from 'src/components/DirectionButtons/Button';
import { changeDirection } from 'src/actions';

const mapStateToProps = () => ({});
// const mapStateToProps = (state, ownProps) => ({});

// les props qui sont passées sur un container peuvent être récupérer
// via le 2e paramètre des fonctions mapStateToProps et mapDispatchToProps
// par convention on les appelle ownProps, ce sera un objet
// On peut également le déstructurer
/*
const mapDispatchToProps = (dispatch, { direction }) => ({
  onClickDirectionButtons: () => {
    const action = changeDirection(direction);
    dispatch(action);
  },
});
*/
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickDirectionButtons: () => {
    const action = changeDirection(ownProps.direction);
    dispatch(action);
  },
});

const componentToConnect = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = componentToConnect(DirectionButtons);
export default connectedComponent;
