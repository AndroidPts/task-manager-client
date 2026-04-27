import { useState } from 'react';
import { Card, Form, Input, Button, Switch, Divider, message, Popconfirm } from 'antd';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePasswordChange = async (values) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error('Пароли не совпадают');
      return;
    }
    message.success('Пароль изменён (демо)');
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
    message.info('Вы вышли из аккаунта');
  };

  return (
    <div style={{ padding: 20 }}>
      <Card title="Личные данные">
        <Form layout="vertical">
          <Form.Item label="Имя"><Input placeholder="Иван Иванов" /></Form.Item>
          <Form.Item label="Email"><Input disabled value="user@example.com" /></Form.Item>
        </Form>
      </Card>

      <Card title="Смена пароля" style={{ marginTop: 20 }}>
        <Form onFinish={handlePasswordChange} layout="vertical">
          <Form.Item name="oldPassword" label="Старый пароль" rules={[{ required: true }]}><Input.Password /></Form.Item>
          <Form.Item name="newPassword" label="Новый пароль" rules={[{ required: true, min: 6 }]}><Input.Password /></Form.Item>
          <Form.Item name="confirmPassword" label="Повторите пароль" rules={[{ required: true }]}><Input.Password /></Form.Item>
          <Button type="primary" htmlType="submit">Сменить пароль</Button>
        </Form>
      </Card>

      <Card title="Тема оформления" style={{ marginTop: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Тёмная тема</span>
          <Switch checked={darkMode} onChange={setDarkMode} />
        </div>
      </Card>

      <Divider />

      <Popconfirm title="Выйти из аккаунта?" onConfirm={handleLogout}>
        <Button danger block>Выйти из аккаунта</Button>
      </Popconfirm>
    </div>
  );
};

export default Profile;