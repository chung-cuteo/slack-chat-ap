import { Row, Col, Button, Typography } from 'antd'
import firebase from '../../firebase/config';

const { Title } = Typography;
const fbProvider = new firebase.auth.FacebookAuthProvider()

const Login = () => {
  const handleFbLogin = () => {
    firebase.auth().signInWithPopup(fbProvider);
  }

  return (
    <Row justify='center' align='center'>
      <Col span={8} align='center'>
        <Title style={{ textAlign: 'center' }} level={3}>
          Well come to Slack
        </Title>
        <Button
          type='primary'
          style={{ display: 'flex', marginBottom: 5 }}
        >
          Login with Google
        </Button>
        <Button
          style={{ display: 'flex' }}
          type='primary'
          onClick={handleFbLogin}
        >
          Login with Facebook
        </Button>
      </Col>
    </Row>
  );
};

export default Login;