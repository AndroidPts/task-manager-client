import { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      console.log('Register data:', values);
      message.success('Регистрация прошла успешно');
      navigate('/login');
    } catch (error) {
      message.error('Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', padding: 20 }}>
      <Card title="Регистрация">
        <Form onFinish={onFinish}>
          <Form.Item name="fullName" rules={[{ required: true, message: 'Введите полное имя' }]}>
            <Input prefix={<UserOutlined />} placeholder="Полное имя" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Введите email' }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, min: 6, message: 'Пароль минимум 6 символов' }]}>
            <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to="/login">Уже есть аккаунт? Войти</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;