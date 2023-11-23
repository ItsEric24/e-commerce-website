/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { DirectoryContainer, Body, BackgroundImage } from "./directory.styles";

function DirectoryItem({ category }) {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const navigationHandler = () => {
    navigate(route);
  };
  return (
    <DirectoryContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={navigationHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryContainer>
  );
}
export default DirectoryItem;
