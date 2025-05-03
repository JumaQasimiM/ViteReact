import { useEffect, useState } from "react";
import NewsItem from "./newsItem.jsx";
const News = () => {
  const [articels, setArticels] = useState([]);
  // use fackapi
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      // show only 5 news
      .then((data) => setArticels(data.slice(0, 5)));
  }, []);
  return (
    <div className="row mt-5">
      {/* useing props */}
      <NewsItem isLogedIn={true} title description />
      {/* useing api */}
      <div className="col-md-4 text-center">
        {articels.map((articel) => (
          <div key={articel.id} className="border m-2">
            <p className="p-1">{articel.title}</p>
            <hr />
            <p className="p-1">Body: {articel.body}</p>
            <button className="btn btn-outline-info btn-sm m-3">read more</button>
          </div>
        ))}
      </div>
      <div className="col-md-8">
        <h1 className="text-center">News detail</h1>
      </div>
    </div>
  );
};

export default News;
