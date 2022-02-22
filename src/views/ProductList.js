import React, { useEffect, useState } from 'react';
import { baseUrl } from 'config';
import { Table } from 'reactstrap';
import axios from "axios";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";


function ProductList() {

    const [ products , setProducts] = useState([])

    let url = `${baseUrl}/products/search`;

    useEffect(() =>{
        axios.get(url)
            .then((response) =>{
                console.log("response inside product List", response)
                setProducts(response.data)
            })
            .catch((error) =>{
                console.log("error inside product List", error)
            })
        }, [])


        console.log("products list", products);

  return (
    <div className="content">
        {
            products.length === 0 ? 
              <h1>No Products Available</h1> 
              :
              <Table hover>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Our Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {              
                        products.map((item ,index) =>(
                            <tr key={index}>
                                {/* <th scope="row">
                                    {index}
                                </th> */}
                                <td>
                                    {item.productName}
                                </td>
                                <td>
                                    {item.category}
                                </td>
                                <td>
                                    {item.ourPrice}
                                </td>
                                <td>
                                    <div>
                                        <AiOutlineDelete
                                             color='red'
                                             size="1.5rem"
                                        />
                                        <BiEdit
                                            color='green'
                                            size="1.5rem"
                                            style={{marginLeft: '10px'}}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ))
                     }


                </tbody>
                </Table>

                    }
    </div>
  )

}

export default ProductList