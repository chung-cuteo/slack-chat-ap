import { Button, Avatar, Typography } from 'antd';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 230px;
  height:56px;
  padding: 0 15px;
  background: #3f0e40;
  border-bottom: 1px solid white;
  .username {
    color: white;
    margin-left: 5px;
  }
`;


const UserInfor = () => {
  return (
    <WrapperStyled>
      <div>
        <Avatar src=''></Avatar>
        <Typography.Text className='username'>chung</Typography.Text>
      </div>
      <Button
        ghost
        onClick={() => {
        }}
      >
        logOut
      </Button>
    </WrapperStyled>
  );
}

export default UserInfor;