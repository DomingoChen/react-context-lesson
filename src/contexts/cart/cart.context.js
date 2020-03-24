import { creatContext } from 'react'

const CartContext = creatContext({
    hidden: true,
    toggleHidden: () => { },
})

export default CartContext;