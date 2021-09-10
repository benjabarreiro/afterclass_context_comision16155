import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function Item() {
	const {variable} = useContext(CartContext)
	return (
		<div>
			{variable}
			<Link to="/1">Ir al detalle</Link>
		</div>
	)
}
