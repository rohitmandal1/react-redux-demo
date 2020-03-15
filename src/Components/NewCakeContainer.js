import React, { useState } from 'react';
import { buycake } from '../redux';
import { connect } from 'react-redux';
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number Of cakes - {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => props.buycake(number)}>Buy { number } Cake</button>
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
        buycake: number => dispatch(buycake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (NewCakeContainer)
