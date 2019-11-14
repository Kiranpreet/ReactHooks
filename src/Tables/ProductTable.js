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
            {props.products.map(prod => (
                <tr key={prod.id}>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </td>
                </tr>
            ))
            }
        </tbody>
    </table>
)
export default ProductTable;