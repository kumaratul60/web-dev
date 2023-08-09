import React, { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        // const resp = await axios.get(url);
        // const data = await resp?.data;
        // setApiData(data);

        const resp = await fetch(url);
        const resData = await resp.json();

        setApiData(resData.data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, apiData, serverError };
};

export default useFetch;

// Usage in the actual component

const CustomFetchComponent = () => {
  const { isLoading, serverError, apiData } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );
  return (
    <div>
      <h2>API data</h2>
      {isLoading && <span>Loading.....</span>}
      {!isLoading && serverError ? (
        <span>Error in fetching data ...</span>
      ) : (
        <>
          {/* <span>{JSON.stringify(apiData)}</span> */}
          <span>{apiData}</span>
        </>
      )}
    </div>
  );
};

//----------- url has specific method to get api data

const useMethodFetch = (method, url, body) => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const resp = await axios({
          method: method,
          url: url,
          data: body,
        });
        const data = await resp?.data;

        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body]);

  return { isLoading, apiData, serverError };
};

const { isLoading, serverError, apiData } = useMethodFetch(
  "GET",
  "https://jsonplaceholder.typicode.com/posts/1",
  {}
);

// ----------- if api data has stored in redux then

const useFetchReduxData = (url) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        dispatch(fetchApiData());
        const resp = await axios.get(url);
        const data = await resp?.data;

        dispatch(fetchApiSuccess(data));
        setApiData(data);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        dispatch(fetchApiFailure());
        setIsLoading(false);
      }
    };

    fetchData();
  }, [dispatch, url]);

  return { isLoading, apiData, serverError };
};
