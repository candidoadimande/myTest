export default function Bloglist({blogs}) {
  return (
    <div>
      {blogs.map((blog) => (
        <h3>{blog.title}</h3>
      ))}
    </div>
  );
}