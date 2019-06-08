import React from 'react';
import ReactDOM from 'react-dom';

import CustomTable from '../../components/Table';
import DeleteBalloon from '../../components/DeleteBalloon';

import data from './data';

class CatalogList extends React.Component {
  constructor(props) {
    super(props);

    this.columns = [
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
      },
      {
        title: '发布时间',
        dataIndex: 'date',
        key: 'date',
      },
      {
        title: '操作',
        key: 'action',
        render: (value, index, record) => (
          <span>

            <DeleteBalloon
              handleRemove={() => this.handleRemove(value, index, record)}
            />
          </span>
        ),
      },
    ];
  }


  render() {
    return (<div>
      <CustomTable
        dataSource={data.all}
        columns={this.columns}
        hasBorder={false}
        style={{ padding: '0 10px' }}
      />
    </div>);
  }
}

export default CatalogList;

