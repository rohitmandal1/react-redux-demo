import React from 'react'
import { connect } from 'react-redux';
import { buycake, buyIceCreme } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.itme}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCreme.numOfIcecreme 

    return {
        itme: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake? () => dispatch(buycake()) : () => dispatch(buyIceCreme())

    return {
        buyItem:dispatchFunction
    }
}

export default connect(null, mapDispatchToProps)(ItemContainer)
