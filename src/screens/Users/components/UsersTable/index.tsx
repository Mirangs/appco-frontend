import React from 'react';
import { Table, Pagination } from 'antd';
import { useHistory } from 'react-router-dom';

import './style.scss';
import { User } from '../../../../types';

export interface UserTableProps {
  data: User[];
  pages: number;
  onPageChanged: (page: number) => void;
  currentPage: number;
  pageSize: number;
}

const { Column } = Table;

const UsersTable: React.FC<UserTableProps> = ({
  data,
  pages,
  onPageChanged,
  currentPage,
  pageSize,
}) => {
  const history = useHistory();

  return (
    <section className='UsersTable'>
      <Table
        dataSource={data}
        rowKey='id'
        pagination={false}
        bordered={true}
        onRow={(record) => {
          return {
            onClick: () => {
              history.push(`/users/${record.id}`);
            },
          };
        }}
      >
        <Column title='id' dataIndex='id' />
        <Column title='First Name' dataIndex='first_name' />
        <Column title='Last Name' dataIndex='last_name' />
        <Column title='Email' dataIndex='email' />
        <Column title='Gender' dataIndex='gender' className='centered' />
        <Column
          title='IP Address'
          dataIndex='ip_address'
          className='centered'
        />
        <Column
          title='Total clicks'
          dataIndex='total_clicks'
          className='centered'
        />
        <Column
          title='Total page views'
          dataIndex='total_page_views'
          className='centered'
        />
      </Table>
      <Pagination
        current={currentPage}
        onChange={onPageChanged}
        total={pages * pageSize}
        pageSize={pageSize}
        showSizeChanger={false}
      />
    </section>
  );
};

export default UsersTable;
