import useFetch from "./useFetch"
import Bloglist from "./Bloglist"
export default function Blogs() {
    const {data: blogs, isLoading} = useFetch('http://localhost:8000/blogs')
  return (
    <div>
      {isLoading ? (
          <div>loading...</div> 
        ) : (
          blogs.map((item) => (
            <Bloglist item={item}/>
          ))
        )
      }
    </div>
  )
}