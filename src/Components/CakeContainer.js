import React from 'react';
import { buycake } from '../redux';
import { connect } from 'react-redux';
function CakeContainer(props) {
    return (
        <div>
            <h2>Number Of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buycake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        buycake: () => dispatch(buycake())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
