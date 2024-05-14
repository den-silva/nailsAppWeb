import './Header.css'

function Header(){
    return (
        <div>
            <header className="header">
                <div className='container'>                
                    <a href='https://google.com.br' target='_blank' className='link'>
                        <img src='/imagens/beauty.png' alt='Logo' className='LogoImage'/>
                    </a>               
                    <nav className="menu">
                        <div >
                            <ul className="menu">
                                <li><a href='' className='botao'>Sobre</a></li>
                                <li><a href='' className='botao'>Editar Perfil</a></li>
                                <li><a href='' className='botao'>Sair</a></li>
                            </ul>                        
                        </div>
                    </nav>                    
                </div>
            </header>
        </div>
    )
}

export default Header


