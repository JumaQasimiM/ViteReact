import { useEffect, useState } from "react";
import NewsItem from "./newsItem.jsx";
const News = () => {
  const [articels, setArticels] = useState([]);
  // use fackapi
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      // show only 5 news
      .then((data) => setArticels(data.slice(0, 5)));
  }, []);
  return (
    <div className="container-xl">
      <div className="row">
        {/* useing props */}
        <NewsItem isLogedIn={true} title='todys news' description='Helllo firnds how are you'/>
        {/* useing api */}
        <div className="col-md-4">
          {articels.map((articel) => (
            <div key={articel.id} className="bg-info mb-2">
              <h4 className="bg-danger ">{articel.title}</h4>
              <p className="">Body: {articel.body}</p>
            </div>
          ))}
        </div>
        <div className="col-md-8 border">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          dolores quidem eos dignissimos dicta laudantium iste, voluptatum natus
          sapiente, reprehenderit voluptas quam possimus. Voluptatum doloremque,
          consectetur mollitia dolores itaque magni?
        </div>
      </div>
    </div>
  );
};

export default News;
