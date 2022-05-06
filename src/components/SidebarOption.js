import { useDispatch } from "react-redux";
import styled from "styled-components";
import { enterRoom } from "../features/appSlice";
import { openModal } from "../features/modalSlice";

const SidebarOption = ({ Icon, title, addChannelOption, selectOption, id }) => {
  const dispatch = useDispatch();
  
  const handleAddChannel = async () => {
    dispatch(openModal(true));
  };

  const handleSeclectChannel = () => {
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
      onClick={
        addChannelOption
          ? handleAddChannel
          : selectOption
          ? handleSeclectChannel
          : null
      }
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
    padding: 15px 10px 15px 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
