import React, { useEffect, useState } from 'react';
import {
  Button,
  Form,
  Message,
  Modal,
  PageHeader,
  Popconfirm,
  Table,
} from '@arco-design/web-react';
import '@arco-design/web-react/dist/css/arco.css';
import './App.css';
import { EmployeeInfo } from './service';

function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentEditingInfo, setCurrentEditingInfo] = useState<EmployeeInfo>(
    {}
  );
  const [form] = Form.useForm();
  const [isCreating, setIsCreating] = useState(true);

  const resetForm = () => {
    setIsCreating(true);
    setCurrentEditingInfo({});
    setModalVisible(false);
  };

  /**
   * 补全获取列表方法
   * 接口地址：https://dummy.restapiexample.com/api/v1/employees
   * 要求：
   * 1. 数据请求成功后，将数据中列表的部分通过setTableData进行数据更新，并通过全局提示Message组件弹出成功提示"列表拉取成功！"
   * 2. 如果数据请求失败，则通过全局提示Message组件弹出失败提示"雇员列表获取失败，请重试"
   */
  const fetchData = async () => {
    setIsLoading(true);
    /** 在此处补全任务一代码 */
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'employee_name',
    },
    {
      title: '年龄',
      dataIndex: 'employee_age',
    },
    {
      title: '工资',
      dataIndex: 'employee_salary',
      render: (salary: number) => Number(salary).toLocaleString(),
    },
    {
      title: '操作',
      render: (_: any, record: any) => {
        const { id, employee_name } = record;

        return (
          <>
            <Button
              type="text"
              onClick={() => {
                setCurrentEditingInfo(record);
                setModalVisible(true);
                setIsCreating(false);
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title="确定要删除这条记录吗？"
              onOk={async () => {
                Message.info({ content: `成功删除雇员 ${employee_name}` });
                fetchData();
              }}
              onCancel={() => {
                Message.error({ content: '没有删除成功，请重试' });
              }}
            >
              <Button type="text" status="danger">
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <div id="container">
      <PageHeader
        className="header"
        title="雇员管理系统"
        subTitle="雇员管理系统可以清晰的看到在职的雇员信息"
      />
      <div id="content">
        <div id="tableContainer">
          <div id="toolbar">
            <Button
              type="primary"
              size="small"
              onClick={() => {
                setModalVisible(true);
              }}
            >
              录入雇员信息
            </Button>
          </div>
          <Table
            noDataElement={
              <p>
                数据获取失败
                <Button
                  style={{ marginLeft: 10 }}
                  type="primary"
                  onClick={() => fetchData()}
                >
                  重新获取
                </Button>
              </p>
            }
            loading={isLoading}
            columns={columns}
            data={tableData}
            pagination={{ pageSize: 15 }}
          />
        </div>
      </div>
      <Modal
        unmountOnExit
        title="雇员信息"
        visible={isModalVisible}
        onOk={() => {
          // 在此处补全任务三代码
        }}
        onCancel={() => {
          resetForm();
        }}
        autoFocus={false}
        focusLock={true}
      >
        <Form form={form} initialValues={currentEditingInfo}>
          {/* 在此处补全任务二代码 */}
        </Form>
      </Modal>
    </div>
  );
}

export default App;
