import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { openModal, modalState } from "../features/modalSlice";

const SidebarOption = ({ Icon, title, addChannelOption, id }) => {
  const dispatch = useDispatch();
  const channelData = useSelector(modalState);

  const addChannel = async () => {
    dispatch(openModal(true));

    if (channelData.channel.name && channelData.channel.desc) {
      try {
        await addDoc(collection(db, "rooms"), {
          name: channelData.channel.name,
          desc: channelData.channel.desc,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const seclectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
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
