import logoIcon from '../../assets/star-wars-logo.png'
import githubIcon from '../../assets/icons/download (1).jpg'
import linkedinIcon from '../../assets/icons/linkedin.png'
import whatsappIcon from '../../assets/icons/icons8-whatsapp-50.png'
import './styles.css'
import './script.js'

function ProjectContainer() {

    function hideModal() {
        const modal = document.getElementById('modal')
        modal.style.visibility = 'hidden'
    }

    return(
        <div className="projec-container">
            <header>
                <a className='logo-container' href="./" target="">
                    <img className="logoicon"  src={logoIcon}/>
                    <span className="logo-span"><b>Characters</b></span>
                </a>

                <div className='social-media'>
                    <a className='img-container' href="https://github.com/CaioCesarRibeiroTEC" target="_blank">
                        <img className="img-icon icon-github" id="icon" src={githubIcon} />
                    </a>

                    <a className='img-container' href="https://www.linkedin.com/in/caio-césar-ribeiro-b07b46325/" target="_blank">
                        <img className="img-icon icon-linkedin" id="icon" src={linkedinIcon}/>
                    </a>

                    <a className='img-container'href="https://wa.me/5562981934367/?text=textourl/" target="_blank">
                        <img className="img-icon icon-whats" id="icon3" src={whatsappIcon}/>
                    </a>
                </div>
            </header>

            <main className="main-container">
                <h1>Conheca todos os personagens de Star Wars em um so lugar</h1>

                <div className="main-content" id="main-content" ></div>

                <div className="modal" id="modal" onClick={() => hideModal()}>
                    <div class="modal-content" id="modal-content"></div>
                </div>

                <div className="buttons">
                    <button id="back-button" disabled>Anterior</button>
                    <button id="next-button" disabled>Próximo</button>
                </div>
            </main>
            
            <footer>
                <p className="footer-logo">Star Wars Characters</p>
                <p className="copyrigth">Desenvolvido por &copy; Caio César Ribeiro</p>
            </footer>
        </div>
    )
}

export default ProjectContainer;
