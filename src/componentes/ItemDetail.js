import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export default function ItemDetail() {
	const {id} = useParams()
	const {addItem, setCart, cart, removeItem} = useContext(CartContext)
	const itemId = '1'
	const clear = () => setCart([])
	if(itemId === id) {
	return (
		<div>
			<ItemCount addItem={addItem} />
			<button onClick={clear}>Borrar items</button>
			{cart.length > 0 && (
				cart.map(element => {
					return (
						<div key={element.item.id}>
							<h1>{element.item.title}</h1>
							<button onClick={() => removeItem(element.item.id)}>Borrar del carrito</button>
						</div>
					)
				})
			)}
		</div>
	)
	}
	return(
		<p>Producto no enontrado</p>
	)
}
