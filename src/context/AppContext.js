import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const AppProvider = (props) => {
  const [navBcg, setNavBcg] = useState(false);
  const [diffPath, setDiffPath] = useState(false);
  const [myData, setMyData] = useState({ products: [] });
  const [firstFour, setFirstFour] = useState({ products: [] });
  const [errorMessage, setErrorMessage] = useState("");

  const URL = "http://localhost:3000/data.json";

  const getData = async () => {
    fetch(URL)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log("Loaded data:", data);
        setMyData(data);
        sortData(data);
      })
      .catch((error) => {
        console.log("error ", error);
        setErrorMessage(error);
      });
  };

  const sortData = (data) => {
    data.products.sort(function (a, b) {
      return new Date(b.added) - new Date(a.added);
    });

    setMyData(data);
    getFourFirst(data);
  };

  const getFourFirst = (data) => {
    setFirstFour(data.products.slice(0, 4));
  };

  window.onscroll = function () {
    scroll();
  };

  const scroll = () => {
    if (!diffPath) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        setNavBcg(true);
      } else {
        setNavBcg(false);
      }
    }
  };

  const setBcg = () => {
    setDiffPath(true);
    setNavBcg(true);
  };

  const resetDiffPath = () => setDiffPath(false);

  const storeObject = {
    navBcg,
    firstFour,
    myData,
    getData,
    setBcg,
    resetDiffPath,
  };

  return (
    <AppContext.Provider value={storeObject}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
