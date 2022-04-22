import { Collapse, Typography, Button } from 'antd';
import styled from 'styled-components';
import { PlusSquareOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header,
    p {
      color: white;
    }

    .ant-collapse-content-box {
      display: flex;
      flex-direction: column;
      padding: 0 30px;
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom: 5px;
  color: white;
`;


const Room = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Collapse ghost defaultActiveKey={['1']} style={{ width: '100%' }}>
        <PanelStyled header='ChannelList' key='1'>
          <LinkStyled> aaaa</LinkStyled>
          <LinkStyled> aaaa</LinkStyled>
          <LinkStyled> aaaa</LinkStyled>
          <LinkStyled> aaaa</LinkStyled>
        </PanelStyled>
      </Collapse>
      <Button
        type='text'
        icon={<PlusSquareOutlined />}
        style={{ display: 'flex', alignItems: 'center', width: '100%', color: 'white', marginTop: '20px' }}
      >
        Add Room
      </Button>
    </div>
  );
}

export default Room;