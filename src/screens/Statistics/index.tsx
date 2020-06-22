import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import './style.scss';
import { useRequest, useLazyRequest } from '../../hooks/request';
import Layout from '../../components/Layout';
import Breadcrumbs, { Breadcrumb } from '../../components/Breadcrumbs';
import Spinner from '../../components/Loader';
import { Statistic } from '../../types';

const Statistics = () => {
  const { id } = useParams<{ id: string }>();
  const { data: userData, loading: userLoading, error: userError } = useRequest(
    `/api/users/${id}`
  );
  const [
    fetchStatistics,
    {
      data: statisticsData,
      loading: statisticsLoading,
      error: statisticsError,
    },
  ] = useLazyRequest();

  useEffect(() => {
    fetchStatistics(`/api/statistics/${id}`);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  const loading = userLoading || statisticsLoading;
  const error = userError || statisticsError;

  const breadcrumbsPath: Breadcrumb[] = [
    {
      name: 'Main',
      link: '/',
      exact: true,
    },
    {
      name: 'Users statistics',
      link: '/users',
      exact: true,
    },
    {
      name: userData && `${userData.first_name} ${userData.last_name}`,
      link: `/users/${id}`,
    },
  ];

  if (error) {
    return <p>Something went wrong</p>;
  }

  let clicksData, viewsData;
  if (!loading) {
    clicksData = {
      labels: statisticsData.map((statistic: any) => statistic.date),
      datasets: [
        {
          label: 'Clicks',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: '#3A80BA',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#3A80BA',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: statisticsData.map((statistic: Statistic) => statistic.clicks),
        },
      ],
    };
    viewsData = {
      ...clicksData,
      datasets: [
        {
          ...clicksData.datasets[0],
          label: 'Views',
          data: statisticsData.map(
            (statistic: Statistic) => statistic.page_views
          ),
        },
      ],
    };
  }

  return (
    <Layout>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Breadcrumbs path={breadcrumbsPath} />

          <section className='Statistics'>
            <h2 className='Statistics__title'>{`${userData.first_name} ${userData.last_name}`}</h2>

            <h3 className='Statistics__chart-title'>Clicks</h3>
            <div className='Statistics__chart'>
              <Line data={clicksData} legend={false} />
            </div>

            <h3 className='Statistics__chart-title'>Views</h3>
            <div className='Statistics__chart'>
              <Line data={viewsData} legend={false} />
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Statistics;
