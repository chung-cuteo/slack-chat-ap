import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch()
  const addChannel = async () => {
    const channelName = prompt("Please enter the enter name");
    if (channelName) {
      try {
        await addDoc(collection(db, 'rooms'),{
          name: channelName,
        });
      } catch (error) {
        console.log(error)
      }
    }
  };

  const seclectChannel = () => {
    if(id) {
      dispatch(enterRoom({
        roomId: id
      }))
    }
  };

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : seclectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;

const SidebarOptionContainer = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
