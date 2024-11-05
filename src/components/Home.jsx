import { useState } from "react"
export default function Home({blogs,isLoading, query}) {
  return (
    <div className="blogs">
      {isLoading && <div>loading...</div>}
         {blogs && blogs.length && blogs.filter((item) => {
          if (query === "") {
            //if query is empty
            return item;
          } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return item;
          }
        }).map((item) => (
            <div className="blogs-container">
              <h2>{item.title}</h2>
              <p>{item.idioma
              }</p>
            </div>
          ))}
      </div>
  )
}