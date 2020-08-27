import React, { useState } from "react";
import { useForm } from "react-hook-form";

const FetchComponent = () => {
  const [query, setQuery] = useState("");
  const [link, setLink] = useState({});

  const { register, errors } = useForm();

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

  return (
    <form onSubmit={handleSubmit}>
      <label>Shorten Your Link *</label>

      <input
        onChange={handleChange}
        name="linkShortener"
        placeholder="Enter Link Here..."
        type="text"
        ref={register({ required: true })}
      />

      {errors.linkShortener && <span>Link is required</span>}

      <button type="submit">Shorten It</button>
      <p>{link.shortenUrl}</p>
    </form>
  );
};

export default FetchComponent;
