import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/SkullyfoxPoly.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Foxhub</h1>
                <p>
                    Foxhub est un groupe communautaire discord de Gaming et de Développement informatique, <br/>
                    Il est composé d'un serveur Gaming et d'un serveur de développement informatique(Web, Logiciel etc...). <br/>
                    Pour plus d'informations et pour les liens des serveur, retrouvez ci-dessous les rubriques Pop-up descriptives.
                </p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('common')}}>Réglement Commun</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('gaming')}}>Foxhub Gaming</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('dev')}}>Foxhub Dev</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
