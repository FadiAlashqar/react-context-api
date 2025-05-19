import React from 'react'
import MainNav from './MainNav';
import { useContext } from 'react';
import PostContext from '../contexts/PostContext';

const PostsList = () => {

    const products = useContext(PostContext);


    return (
        <>
            <header><MainNav /></header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className='mx-3'>POST LIST</h1>
                    </div>
                </div>
                <div className="row g-4 d-flex justify-content-center">
                    {products.map((product) => {
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
                    })}
                </div>
            </div >
        </>
    )
}

export default PostsList