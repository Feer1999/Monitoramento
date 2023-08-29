import "./style.css";
// import logo from 'assets/image/logo.png';
export function Nav (){
    return(
    
        <html>
        <body>
    <nav className="nav">
        <div className="container">
            <div className="logo">
                
                <a> <img  className="logo" src="logo" alt="logo"/></a> 
                <a href="#">Pulseira Monitoramento</a>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><a href="#">Sobre</a></li>
                    <li><a href="cadastro.html">Usuarios</a></li>
                    <li><a href="#">Servicos</a></li>
                    <li><a href="/">Area Restrita</a></li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>

    <section className="home">  
    </section>
    <div className="row">
		<h2 className="myH2">Monitorar é Saúde</h2>
		<p className="myP"/>
            Com o objetivo de melhorar o atendimento e proporcionar maior segurança aos pacientes,
             buscamos desenvolver um sistema integrado
            com uma pulseira de monitoramento de sinais vitais. Essa pulseira será utilizada pelos
            pacientes durante o atendimento na UPA e permitirá o monitoramento contínuo dos seus sinais vitais,
            como pressão arterial, frequência cardíaca, oxigenação sanguínea, entre outros.

        <p className="myP">
            Buscando desenvolver um sistema integrado com uma pulseira de monitoramento de sinais vitais para melhorar
            o atendimento e proporcionar maior segurança aos pacientes. A pulseira será utilizada durante o atendimento
            na UPA e permitirá o monitoramento contínuo dos sinais vitais dos pacientes. O sistema será responsável por
            receber e armazenar as informações dos pacientes, alertando os profissionais de saúde em caso de alterações
            significativas nos sinais vitais. Com isso, será possível agir rapidamente em situações de emergência e
            garantir um atendimento mais eficiente e seguro. Este sistema tem como objetivo melhorar a qualidade do 
            atendimento na UPA e proporcionar maior tranquilidade para os pacientes e seus familiares.
        </p>    
    </div>

    <footer className="main_footer container">
        <div className="content">
            <div className="colfooter">
                <h3 className="titleFooter"> Menu</h3>
                <ul>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="cadastro.html">Usuarios</a></li>
                    <li><a href="#">Servicos</a></li>
                    <li><a href="loguin.html">Area Restrita</a></li>
                </ul>
            </div>        
            <div className="colfooter">
               <h3 className="titleFooter"> Contato</h3>
               <p><i className="icon icon-mail"></i> ghf@hotmail.com</p>
               <p><i className="icon icon-phone"></i> 45 99000-1010</p>
               <p><i className="icon icon-whatsapp"></i> 45 99000-1010</p>
            </div>
            <div className="colfooter">
               <h3 className="titleFooter"> Redes Sociais</h3>         
               <a href="#" className="botao"><span> <img src="icons8-github.svg" alt="github"/> </span></a>            
               <a href="#" className="botao"><span> <img src="/assets/imageNav/icons8-trello.svg" alt="trello"/> </span></a>            
               <a href="#" className="botao"><span> <img src="/assets/imageNav/icons8-facebook.svg" alt="facebook"/> </span></a>            
            </div>
            <div className="clear"></div>
        </div>
        <div className="main_footer_copy">
            <p className="m-b-footer"> pulseira- 2023, todos os direitos reservados.</p> 
            <p className="by"><i className="icon icon-heart-3"></i> Desenvolvido por: <a href="#" title="Seu nome">Gilson</a></p>
        </div>
    </footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="navegacao.js"></script> 

    
</body>
</html>

    )
    
    
}



