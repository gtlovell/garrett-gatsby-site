import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const Team = () => {
  return (
    <Layout>
      <h1>Team</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. A tempore nam
        alias perspiciatis neque id nulla doloribus aperiam voluptatum sint
        incidunt illum dicta illo nemo fugit quae, itaque enim blanditiis. Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. A tempore nam alias
        perspiciatis neque id nulla doloribus aperiam voluptatum sint incidunt
        illum dicta illo nemo fugit quae, itaque enim blanditiis.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default Team;
