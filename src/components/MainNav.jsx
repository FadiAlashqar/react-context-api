import React from 'react'
import { NavLink } from 'react-router-dom'

const MainNav = () => {
    const links = [
        {
            path: "/",
            page: "PostsPage",
        },
        {
            path: "/PostList",
            page: "PostList",
        }
    ]
    return (
        <header>
            <nav className='my-4'>
                <ul className='list-unstyled d-flex justify-content-center'>
                    {links.map((link, index) => {
                        return <li className='nav-list mx-3' key={index}>
                            <NavLink to={link.path}>{link.page}</NavLink>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default MainNav