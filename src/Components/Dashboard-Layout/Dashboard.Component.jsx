import React from 'react';

import { Switch, Route } from 'react-router-dom';

// Components
// import Header from '.'
import Header from './Header/Header.Component';
import Nav from './Nav/Nav.Component';
import Footer from './Footer/Footer.Component';
import DashboardMenu from './DashboardMenu/DashboardMenu.Component';
import FlexureShearMenu from './Flexure-Shear/Flexure-Shear-Menu/FlexureShearMenu.Component';
import FlexureShearJoistDesign from './Flexure-Shear/JoistDesign/JoistDesign.Component';
import BuiltUpBeamDesign from './Flexure-Shear/BuiltUpBeam/BuiltUpBeam.Component';
import SawnTimberBeam from './Flexure-Shear/SawnTimberBeam/SawnTimberBeam.Component';
import BiaxialBending from './Flexure-Shear/BiaxialBending/BiaxialBending.Component';

const Dashboard = () => {
    return (
        <div className="wrapper">
            <Header />
            <div className="main-content">
                <Nav />
                <main className="main-info">
                    <Switch>
                        <Route path='/' exact component={DashboardMenu} />
                        <Route path='/flexure-shear-design/' exact component={FlexureShearMenu} />
                        <Route path='/flexure-shear-design/joist-design/' component={FlexureShearJoistDesign} />
                        <Route path='/flexure-shear-design/built-up-beam/' component={BuiltUpBeamDesign} />
                        <Route path='/flexure-shear-design/sawn-timber-beam/' component={SawnTimberBeam} />
                        <Route path='/flexure-shear-design/biaxial-bending/' component={BiaxialBending} />
                    </Switch>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;
