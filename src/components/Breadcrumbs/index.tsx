import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

export interface Breadcrumb {
  name: string;
  link: string;
  exact?: boolean;
}

export interface BreadcrumbsProps {
  path: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ path }) => {
  return (
    <section className='Breadcrumbs'>
      <ul className='Breadcrumbs__list'>
        {path.map((entry) => (
          <li key={entry.name} className='Breadcrumbs__item'>
            <NavLink
              to={entry.link}
              className='Breadcrumbs__link'
              activeClassName='Breadcrumbs__link--active'
              exact={!!entry.exact}
            >
              {entry.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Breadcrumbs;
