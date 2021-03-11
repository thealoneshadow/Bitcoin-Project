import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "7bc3337b033c43ad9ee8e43c3e1aeade";

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
export default NewsContextProvider;