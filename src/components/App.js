import React from 'react'
import NavHeader from './NavHeader'
import Header from './Header'
import About from './About'
import Join from './Join'
import Contact from './Contact'
import Footer from './Footer'

export default function App() {
    return (
        <div className='container'>
            <NavHeader />
            <Header />
            <About />
            <Join />
            <Contact />
            <Footer />
        </div>
    )
}
