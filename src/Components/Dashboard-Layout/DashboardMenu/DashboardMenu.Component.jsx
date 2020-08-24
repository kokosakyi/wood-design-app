import React from 'react';

import CardMenu from './../CardMenu/CardMenu.Component';

const DashboardMenu = ({ match }) => {
    return (
        <React.Fragment>
        <CardMenu heading="Flexure/Shear Design" imageUrl="/img/flexure-design.jpg" setUrl={`${match.url}flexure-shear-design/`} />
        <CardMenu heading="Compression Members" imageUrl="/img/compression-design.jpg" setUrl={`${match.url}compression-design/`} />
        <CardMenu heading="Tension Members" imageUrl="/img/tension-design.jpg" />
        <CardMenu heading="Combined Axial/Bending" imageUrl="/img/combined-design.jpg" />
        <CardMenu heading="Connection Design" imageUrl="/img/connection-design.jpg" />
    </React.Fragment>
    )
}

export default DashboardMenu;