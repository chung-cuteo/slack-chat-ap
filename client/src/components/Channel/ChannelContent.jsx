import { UserAddOutlined } from '@ant-design/icons';
import { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button, Form, Input } from 'antd';
import Message from '../Message';

const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: calc(100% - 230px);
  margin-left: 230px;
  height: 100vh;
  padding: 15px;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 5px;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const MessageListStyled = styled.div`
  max-height: 100%;
  overflow-y: auto;
`;
const ChannelContent = () => {
  return (
    <ContentStyled>
      <MessageListStyled>
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
        <Message
          key='1'
          text='da gui'
          photoURL='aa'
          displayName='chung'
          createdAt='aa'
        />
      </MessageListStyled>
      <FormStyled>
        <Form.Item name='message'>
          <Input
            placeholder='Enter a message...'
            bordered={false}
            autoComplete='off'
          />
        </Form.Item>
        <Button type='primary'>
          Send
        </Button>
      </FormStyled>
    </ContentStyled>
  );
}

export default ChannelContent;