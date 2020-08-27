import React, { useState } from "react";

const FetchComponent = () => {
  const [query, setQuery] = useState("");
  const [link, setLink] = useState({});

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "__cfduid=d9160954faa4bd270b91e63679b6040f81598406033"
  );

  const raw = JSON.stringify({
    url: `${query}`,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

  const fetchRequest = () => {
    fetch(CORSURL + `https://rel.ink/api/links/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newUrl = {
          url: result.url,
          shortenUrl: `https://rel.ink/${result.hashid}`,
        };
        setLink(newUrl);
      })
      .catch((error) => console.log("Error: ", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRequest();
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  /*   const result = link.map((data) => {
    console.log(data);
    return (
      <p>
        {data.url} - {data.shortenUrl}
      </p>
    );
  }); */

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Shorten a link here..."
      />
      <button type="submit">Shorten It</button>
      <p>{link.shortenUrl}</p>
    </form>
  );
};

export default FetchComponent;
