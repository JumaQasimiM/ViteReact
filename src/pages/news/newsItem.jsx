import propsTypes from "prop-types";
const NewsItem = (props) => {
  const login = (
    <div className="border mt-3">
      <h4>{props.title}</h4>
      <p>{props.description}</p>
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
