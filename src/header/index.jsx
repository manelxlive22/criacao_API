import './header.css'

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <a href="/"><h1>CarXRacing</h1></a>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/cars">Carros</a></li>
                        <li><a href="/about">Sobre</a></li>
                     
                    </ul>
                </nav> 
            </header>
        </>
    )
}

export default Header