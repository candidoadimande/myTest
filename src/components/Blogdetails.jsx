import {useParams} from "react-router-dom"
import useFetch from "./useFetch"
import styled from "styled-components"

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h2`
  color: #DAA520;
  font-size: 20px;
`;

const Body = styled.div`
  color: white;
  margin: 15px 0;
  line-height: 1.8em;
  text-align: justify;
  font-size: 15px;
`;
export default function Blogdetails() {
  const {id} = useParams();
  const { data: item, isLoading} = useFetch('http://localhost:8000/blogs/' + id);
  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : (
          <Wrapper>
            <article>
              <Title>{item.title}</Title>
              <Body>{item.body}</Body>
            </article>
          </Wrapper>
        )}
    </div>
  )
}
