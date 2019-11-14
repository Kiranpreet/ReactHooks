import React from 'react'
const ProductTable = props => (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {props.products.map(prod=>(
                <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.price}</td>
            </tr>
            ))
            }
        </tbody>
    </table>
)
export default ProductTable;