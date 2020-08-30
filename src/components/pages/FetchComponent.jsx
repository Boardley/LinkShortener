import React, { useState } from "react";
import styled from "styled-components";

import { useForm } from "react-hook-form";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Button, Input } from "../../components/common";

const Form = styled.form`
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 50vh;
  max-width: 70%;
  background: #3a3054;

  /* border: 1px solid #eee; */
  padding: 30px;
  /* box-sizing: border-box; */
  color: black;
  border-radius: 6px;

  > ${Button}:first-of-type {
    float: right;
    width: 10rem;
    margin: auto;
    margin-top: 1rem;
    padding: 0.9rem;
  }

  > ${Input} {
    margin-top: 1rem;
    padding: 1.4rem;
    width: 80%;
  }

  .text-color {
    color: #59d1d0;
    margin-left: 0.5rem;
  }

  .error-text {
    color: red;
    margin-left: 0.5rem;
  }
`;

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="linkShortener"
        placeholder="Shorten Link Here..."
        type="text"
        ref={register({ required: true })}
      />

      <Button type="submit"> Shorten Link </Button>
      {loading && <p className="text-color">Shortening Your Long Link...</p>}

      <p className="text-color">{link.shortenUrl}</p>

      {link.shortenUrl && (
        <CopyToClipboard text={link.shortenUrl}>
          <i className="text-color copy-icon fas fa-copy"></i>
        </CopyToClipboard>
      )}

      {errors.linkShortener && <p className="error-text">Please add a link.</p>}
    </Form>
  );
};

export default FetchComponent;
