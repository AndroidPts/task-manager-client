import { useState, useEffect } from 'react';
import { Typography, FloatButton, Empty, Spin } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import TaskCard from '../components/TaskCard';

const { Title, Text } = Typography;

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = { fullName: 'Пользователь' };

  useEffect(() => {
    // Имитация загрузки задач на сегодня
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Пример задачи', priority: 'high', dueDate: new Date().toISOString().split('T')[0] }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Spin size="large" style={{ display: 'block', margin: '50px auto' }} />;

  return (
    <div style={{ padding: 20, paddingBottom: 80 }}>
      <Title level={4}>Добрый день, {user.fullName}!</Title>
      <Text type="secondary">{new Date().toLocaleDateString('ru-RU')}</Text>

      <Title level={5} style={{ marginTop: 20 }}>Задачи на сегодня</Title>
      
      {tasks.length === 0 ? (
        <Empty description="На сегодня задач нет, можно отдохнуть" />
      ) : (
        tasks.map(task => <TaskCard key={task.id} task={task} />)
      )}

      <FloatButton icon={<PlusOutlined />} type="primary" />
    </div>
  );
};

export default Dashboard;