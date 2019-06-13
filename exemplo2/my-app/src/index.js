import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'
import * as serviceWorker from './serviceWorker';
 
class Comentario extends React.Component{
    render() {
    return(
        <div className="comentario">
            <img className="comentario__perfil" src={this.props.imagem}></img>
            <div className="textos">
                <h1 className="comentario__nome">{this.props.nome}</h1>
                <h2 className="comentario__subtitulo">{this.props.subtitulo}</h2>
                <hr/>
                <p>{this.props.comentario}</p>
            </div>
        </div>
        )
    }
}


    class App extends React.Component{
        render(){
        return (
            <div>
                <h1 className="titulo_reprograma">Reprograma-Chocolate 🍫</h1>
                <Comentario 
                imagem="https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg"
                nome="Melina"
                subtitulo="AMEI ESSE VÍDEO KERO D+++"
                comentario="Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl."
                />
                <Comentario 
                imagem="https://static1.purebreak.com.br/articles/5/21/50/5/@/108524-spangles-e-um-gatinho-super-diapo-1.png"
                nome="Joana"
                subtitulo="Meh aChei NEEEM MAis Oi mEnOsx"
                comentario="Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl."
                />
            </div>
            )
        }
    }

    ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();



    /*const template = 
                <div className="pagina">
                    <div className="comentario">
                        <img className="comentario__perfil" src="https://t2.ea.ltmcdn.com/pt/images/3/9/6/img_meu_gatinho_chora_muito_e_normal_21693_600.jpg"></img>
                        <div className="textos">
                            <h1 className="comentario__nome">Mellina</h1>
                            <h2 className="comentario__subtitulo">AMEI ESSE VÍDEO KERO D+++</h2>
                            <hr/>
                            <p>Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                        </div>
                    </div>
                    <div className="comentario">
                        <img className="comentario__perfil" src="https://static1.purebreak.com.br/articles/5/21/50/5/@/108524-spangles-e-um-gatinho-super-diapo-1.png"></img>
                        <div className="textos">
                            <h1 className="comentario__nome">Joana</h1>
                            <h2 className="comentario__subtitulo">Meh aChei NEEEM MAis Oi mEnOsx</h2>
                            <hr/>
                            <p>Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Aenean aliquam molestie leo, vitae iaculis nisl.</p>
                        </div>
                    </div>
                </div>
                */
               
/* 
let contadorNum = 1;
const nome = {
    primeiroNome:"Jessica",
    sobreNome:"Lopes"
}

function nomeCompleto(nome){
    if(nome){
        return nome.primeiroNome + " " + nome.sobreNome;
    }
    else{
        return "Desconhecida"
    }
}
  
function verificarNumero(contador){
    if(contador===0){
        return 'Contador não iniciado'
    }
    else{
        return 'Contador Iniciado'
    }
}
*/ 
