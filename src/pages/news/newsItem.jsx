import propsTypes from "prop-types";
const NewsItem = (props) => {
  const login = (
    <div>
      <h2>{props.title}</h2>
      <h2>{props.description}</h2>
    </div>
  );

  const loginNot = <p>Plase login to continue</p>;
  return props.isLogedIn ? login : loginNot;
};
NewsItem.propsTypes = {
  isLogedIn: propsTypes.bool,
  title: propsTypes.string,
};

NewsItem.defaultProps = {
  isLogedIn: false,
  title: "Not news yet",
};

export default NewsItem;
