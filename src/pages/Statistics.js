import { useState } from 'react';
import { Card, Button, Row, Col, Statistic, Progress } from 'antd';

const Statistics = () => {
  const [period, setPeriod] = useState('week');
  
  const stats = {
    total: 12,
    completed: 8,
    overdue: 2,
    percent: 66.7,
  };

  return (
    <div style={{ padding: 20 }}>
      <Button.Group style={{ marginBottom: 20 }}>
        <Button type={period === 'week' ? 'primary' : 'default'} onClick={() => setPeriod('week')}>Неделя</Button>
        <Button type={period === 'month' ? 'primary' : 'default'} onClick={() => setPeriod('month')}>Месяц</Button>
      </Button.Group>

      <Row gutter={16}>
        <Col span={24}>
          <Card title="Продуктивность">
            <Progress type="circle" percent={stats.percent} />
            <div style={{ marginTop: 20 }}>
              <Statistic title="Всего задач" value={stats.total} />
              <Statistic title="Выполнено вовремя" value={stats.completed} valueStyle={{ color: '#3f8600' }} />
              <Statistic title="Просрочено" value={stats.overdue} valueStyle={{ color: '#cf1322' }} />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;