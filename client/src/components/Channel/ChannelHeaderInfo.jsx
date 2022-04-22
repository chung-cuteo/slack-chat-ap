import { UserAddOutlined } from '@ant-design/icons';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Tooltip, Avatar } from 'antd';

const ButtonGroupStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const HeaderStyled = styled.div`
  display: flex;
  width: calc(100% - 230px);
  height: 56px ;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 0 15px;
  border-bottom: 1px solid rgba(82, 38, 83);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &__title {
      margin: 0;
      font-weight: bold;
    }

    &__description {
      font-size: 12px;
    }
  }
`;

const ChannelHeaderInfo = () => {
  return (
    <HeaderStyled>
      <div className='header__info'>
        <p className='header__title'>channel 1</p>
        <span className='header__description'>this is channel 1</span>
      </div>
      <ButtonGroupStyled>
        <Button icon={<UserAddOutlined />} type='text'>Add member</Button>
        <Avatar.Group size='small' maxCount={3}>
          <Tooltip title='A'>
            <Avatar>A</Avatar>
          </Tooltip>
          <Tooltip title='B'>
            <Avatar>B</Avatar>
          </Tooltip>
          <Tooltip title='C'>
            <Avatar>C</Avatar>
          </Tooltip>
          <Tooltip title='D'>
            <Avatar>D</Avatar>
          </Tooltip>
        </Avatar.Group>
      </ButtonGroupStyled>
    </HeaderStyled>
  );
}

export default ChannelHeaderInfo