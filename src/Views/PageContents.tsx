import React from 'react';

import FavoriteStack from './FavoriteStack';
import Experience from './WorkExperience';

const PageContents = () => {
  return (
    <>
      <section id="work">
        <Experience />
      </section>

      <section id="skills">
        <FavoriteStack />
      </section>
    </>
  );
};

export default PageContents;
