import React from 'react';
import {Container} from 'reactstrap';

const Footer = () => {
    return(
        <Container
        fluid
        tag="footer"
        className="text-center bg-info text-white text-uppercase fixed-bottom"
        >
            App made with love by Gaurav Pandey
        </Container>
    )
}

export default Footer;