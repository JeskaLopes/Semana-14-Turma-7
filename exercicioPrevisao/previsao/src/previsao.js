import React from 'react'
import Titulo from './titulo';
import PrevisaoImg from './previsaoImg'
import Temperatura from './temperatura'

class Card extends React.Component{
    render() {
        return(
            <div className="previsao">
                <Titulo
                    data={this.props.data}
                    resumo={this.props.resumo}
                />
                <PrevisaoImg
                    imagem={this.props.imagem}
                />
                < Temperatura 
                    temperatura={this.props.temperatura}
                /> 
            </div>
        )
    }
}

export default Card;