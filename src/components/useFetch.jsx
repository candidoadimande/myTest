import {useState, useEffect} from "react"
export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  //const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setisLoading(false);
    }
    fetchData();
  }, [url]);
  return (
    {data, isLoading}
  )
}