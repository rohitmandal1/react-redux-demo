import React from 'react';
import { connect } from 'react-redux';
import { buyIceCreme } from '../redux';
function IceCremeContainer(props) {
    return (
        <div>
            <h2>Number Of iceCreme - {props.numOfIcecreme}</h2>
            <button onClick={props.buyIceCreme}>Buy iceCreme</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIcecreme: state.iceCreme.numOfIcecreme
    }
} 

const mapDispatchToProps = dispatch =>{
    return {
        buyIceCreme: () => dispatch(buyIceCreme())
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (IceCremeContainer)
