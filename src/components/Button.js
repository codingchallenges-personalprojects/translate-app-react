import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'english' ? 'submit' : 'voorleggen';
    }
    render () {
        return (
            <ColorContext.Consumer>
             { (color) => 
                <button className= {`button ui ${color} `}>
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
                </button>
             }
            
               
            </ColorContext.Consumer>
        )
    }
}

export default Button;