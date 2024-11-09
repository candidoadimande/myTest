import Bloglist from "./Bloglist"
export default function Blogs({blogs, isLoading}) {
  return (
    <div>
      {isLoading ? (
        <div>loading..</div> 
        ) : ( 
          blogs.map((item) => (
            <Bloglist item={item}/>
          ))
        )
      }
    </div>
  );
}""