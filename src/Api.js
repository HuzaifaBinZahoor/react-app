import { useState, useEffect, useRef } from "react";

/* function that will display the fetched data */
function GithubUser({ name }) {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
}

/* Function for API Get Call */
function Api() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  /* here, the useEffect will be specifically for one time fetching data from API as page renders */
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/moonhighway`)
      .then((response) =>
        response.json()
      ) /* Here whatever data I will receieve will be converted into JSON */
      .then((data) => setData(data))
      .then((data) => setLoading(false))
      .catch(setError);
  }, []);

  /* As we have loading and error in place, we will rewrite our code like this */
  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;

  /* this below code is to display fetched data in a clean and nice formate */
  /*   if (data) */
  /* return <pre>{JSON.stringify(data, null, 2)}</pre>; */
  return <GithubUser name={data.name} />;
  //  return <h1>Data</h1>;
}

export default Api;
