import { BUY_CAKE } from './cakeTypes'
//action
export const buycake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}