import React from 'react'
import { useContext } from 'react'
import PostContext from '../contexts/PostContext'


const PostCard = () => {

    const products = useContext(PostContext);

    return (

        products.map((product) => {
            return <div className="col-12 col-md-6 col-lg-4">
                <div key={product.id} className="card p-3">
                    <div className="card-title">
                        <h4>{product.title}</h4>
                    </div>
                    <div className="card-text">
                        <p>{product.content}</p>
                        <p><em>{product.category}</em></p>
                    </div>
                </div>

            </div>
        })

    )
}

export default PostCard