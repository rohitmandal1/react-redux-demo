import { BUY_ICECREME } from './icecremeTypes'

const initialState = {
    numOfIcecreme: 15
}

const icecremeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_ICECREME:
            return {
                ...state,
                numOfIcecreme: state.numOfIcecreme -1
            }
    
        default: return state
    }
}

export default icecremeReducer