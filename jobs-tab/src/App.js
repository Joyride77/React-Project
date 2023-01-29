import React, { useEffect, useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [data, setData] = useState([]);
  const [order, setOrder] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }

  const print = data.map((e, idx) => {
    if (e.order === order) {
      return (
        <div key={idx} className="company-content">
          <h2 className="job-title">{e.title}</h2>
          <p className="company-name">{e.company}</p>
          <p className="date">{e.dates}</p>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[0]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[1]}</p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>{e.duties[2]}</p>
          </div>
        </div>
      );
    }
  });
  function handleOrder(e) {
    console.log(e.target.text);
    if (e.target.text === "John") {
      setOrder(1);
    } else if (e.target.text === "Smith") {
      setOrder(2);
    } else if (e.target.text === "Tom") {
      setOrder(3);
    }
  }
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>
            <a className="hover" onClick={handleOrder}>
              John
            </a>
          </h4>
          <h4>
            <a className="hover" onClick={handleOrder}>
              Smith
            </a>
          </h4>
          <h4>
            <a className="hover" onClick={handleOrder}>
              Tom
            </a>
          </h4>
        </div>
        <div>{print}</div>
      </div>
    </section>
  );
}

export default App;
