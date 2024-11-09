export default function useEffectComp({setBlogs, setisLoading}) {
    useEffect(() => {
    async function fetchBlog() {
      const res = await fetch(URL)
      const data = await res.json();
      setBlogs(data);
      setisLoading(false);
    }
    fetchBlog();
  }, []);
}