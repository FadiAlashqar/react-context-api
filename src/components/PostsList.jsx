import React from 'react'
import MainNav from './MainNav';
import PostCard from './PostCard';


const PostsList = () => {

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
                    <PostCard />
                </div>
            </div >
        </>
    )
}

export default PostsList