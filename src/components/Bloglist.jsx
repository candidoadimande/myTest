
import styled from "styled-components"

const Title = styled.h2`
  color: #DAA520;
`;
export default function Bloglist({item}) {
  
  return (
    <div>
      <Title>{item.title}</Title>
      <p>{item.idiom}</p>
    </div>
  )
}