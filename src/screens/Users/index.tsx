import React, { useState, useEffect } from 'react';

import './style.scss';
import Layout from '../../components/Layout';
import Breadcrumbs, { Breadcrumb } from '../../components/Breadcrumbs';
import Spinner from '../../components/Loader';
import { useLazyRequest } from '../../hooks/request';
import UsersTable from './components/UsersTable';

const PAGE_SIZE = 50;

const Users = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [fetchUsers, { data, loading, error }] = useLazyRequest();

  useEffect(() => {
    fetchUsers(`/api/users?limit=${PAGE_SIZE}&page=${currentPage}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const onPageChanged = (page: number) => {
    setCurrentPage(page);
  };

  const breadcrumsPath: Breadcrumb[] = [
    {
      name: 'Main',
      link: '/',
      exact: true,
    },
    {
      name: 'User statistics',
      link: '/users',
    },
  ];

  let content: React.ReactNode;

  if (error) {
    content = <p>Something went wrong...</p>;
  }

  if (loading) {
    content = <Spinner />;
  }

  if (!loading && data && data.length !== 0) {
    content = (
      <UsersTable
        data={data.users}
        pages={data.pages}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        pageSize={PAGE_SIZE}
      />
    );
  }

  return (
    <Layout>
      <Breadcrumbs path={breadcrumsPath} />

      <section className='Users'>
        <h2 className='Users__title'>Users statistics</h2>
        {content}
      </section>
    </Layout>
  );
};

export default Users;
