import { Card, Tag, Button, message } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const priorityColors = {
  high: 'red',
  medium: 'orange',
  low: 'green',
};

const priorityLabels = {
  high: 'Высокий',
  medium: 'Средний',
  low: 'Низкий',
};

const TaskCard = ({ task, onComplete }) => {
  const handleComplete = async () => {
    try {
      // Временная имитация
      console.log('Complete task:', task.id);
      message.success('Задача выполнена!');
      if (onComplete) onComplete(task.id);
    } catch (error) {
      message.error('Ошибка');
    }
  };

  return (
    <Card size="small" style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <strong>{task.title}</strong>
          <div>
            <Tag color={priorityColors[task.priority]}>{priorityLabels[task.priority]}</Tag>
            <span style={{ fontSize: 12, color: '#888' }}>Срок: {task.dueDate}</span>
          </div>
        </div>
        <Button 
          type="primary" 
          shape="circle" 
          icon={<CheckCircleOutlined />} 
          onClick={handleComplete}
          style={{ backgroundColor: '#52c41a' }}
        />
      </div>
    </Card>
  );
};

export default TaskCard;