import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    Navbar,
    Nav,
    NavItem,
    NavDropdown,
    MenuItem,
    Grid,
    Row,
    Col
} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as conf from './config.jsx';
import * as Stylo from './StyledComponents.jsx';
//import './style.css';

export default class NavbarAdaptat extends Component {
    constructor(props) {
        super(props);

        this.canviaSubcat = this.canviaSubcat.bind(this);
    }

    // static propTypes = {
    //     data PropTypes.shape({
    //         loading: PropTypes.bool,
    //         error: PropTypes.object,
    //         subcategories: PropTypes.array
    //     }).isRequired
    // }

    canviaSubcat() {
        //this.props.subcategoryIdAlState();
        this.props.filtrantMarca(null);
        this.props.filtrantColor(null);
        this.props.filtrantTalla(null);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps === this.props) {
            return false;
        } else {
            return true;
        }
    }

    render() {
        if (this.props.data.loading) {
            return (<div>Cargando...</div>);
        }

        if (this.props.data.error) {
            //console.log(this.props.data.error)
            return (<div>Ocurrió un error inesperado.</div>);
        }

        return (
            <Stylo.MainNavBar id="menu" className="navbar" role="navigation">
                {/*<label htmlFor="tm" id="toggle-menu">Menu</label>
                <input type="checkbox" id="tm" />
                <ul className="main-menu clearfix">
                    <li><a href="#">Vestidos
                            <span className="drop-icon">▾</span>
                            <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm1">▾</label>
                        </a>
                        <input type="checkbox" id="sm1"/>*/}
                        {/*<ul className="sub-menu">*/}
                        <ul className="main-menu clearfix">
                           {
                                this.props.data.subcategories.map(
                                    (v,i,a) => {
                                        return (
                                          <Stylo.liNav>
                                            <LinkContainer key={i} to={`/categoria/${v.nom_categoria.trim().toLowerCase().replace(/\s+/g, '.')}.${v.categoriaId}`}>
                                                <Stylo.aLink
                                                    eventKey={i}
                                                    onClick={this.canviaSubcat}
                                                    data-subcategory-id={v.categoriaId}
                                                >                   {v.nom_categoria}
                                                </Stylo.aLink>
                                            </LinkContainer>
                                          </Stylo.liNav>
                                        )
                                    }
                                )
                            }
                        </ul>
                    {/*</li>*/}
                   {/* <Stylo.liNav><Stylo.aLink href="#">Contáctanos</Stylo.aLink></Stylo.liNav>
                    <Stylo.liNav><Stylo.aLink href="#">Escríbenos</Stylo.aLink></Stylo.liNav>*/}
                {/*</ul>*/}
            </Stylo.MainNavBar>
        );
    }
}
