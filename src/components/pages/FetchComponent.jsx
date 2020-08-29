import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "../common/Button";

localStorage.setItem("links", JSON.stringify([]));
/* const a = [];
a.push(JSON.parse(localStorage.getItem("links")));
 */
const SaveDataToLocalStorage = (data) => {
  let a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("links")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(data);
  // Alert the array value
  alert(a); // Should be something like [Object array]
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("links", JSON.stringify(a));
};

const FetchComponent = () => {
  const [link, setLink] = useState({});
  const [loading, setLoading] = useState(false);

  const { register, errors, handleSubmit } = useForm();

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "__cfduid=d9160954faa4bd270b91e63679b6040f81598406033"
  );

  const CORSURL = "https://cors-anywhere.herokuapp.com/";

  const onSubmit = (data) => {
    setLoading(true);

    const raw = JSON.stringify({
      url: `${data.linkShortener}`,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(CORSURL + `https://rel.ink/api/links/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        const newUrl = {
          url: result.url,
          shortenUrl: `https://rel.ink/${result.hashid}`,
        };
        setLink(newUrl);
        setLoading(false);
        SaveDataToLocalStorage(newUrl);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Shorten Your Link *</label>

      <input
        name="linkShortener"
        placeholder="Enter Link Here..."
        type="text"
        ref={register({ required: true })}
      />

      <Button type="submit"> Shorten Link </Button>
      {loading && <p>Shortening Your Long Link...</p>}

      {errors.linkShortener && <p>Link is required</p>}

      <p>{link.shortenUrl}</p>

      {link.shortenUrl && (
        <CopyToClipboard text={link.shortenUrl}>
          <i className="fas fa-copy"></i>
        </CopyToClipboard>
      )}
    </form>
  );
};

export default FetchComponent;
