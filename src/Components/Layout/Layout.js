import { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';


const Layout = (props) => {
    return (
        <Fragment>
            <Header></Header>
            <main>{props.children}</main>
            <Footer></Footer>
        </Fragment>
    );
};

export default Layout;