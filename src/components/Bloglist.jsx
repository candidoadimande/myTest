
import styled from "styled-components"
import {Link} from "react-router-dom"
const BloglistContainer = styled.div`
  width: 260px;
  margin: 20px auto;
`;
const Title = styled.h2`
  color: #DAA520;
  font-size: 18px;
`;

const Caption = styled.p`
  color: white;
  font-size: 13px;
  padding-top: 5px;

`;
export default function Bloglist({item}) {
  
  return (
    <BloglistContainer>
      <Link to={`/blogs/${item.id}`}>
        <Title>
          {item.title}
        </Title>
      </Link>
      <Caption color>
        ({item.idiom})
      </Caption>
      <Caption>
        {item.caption}
      </Caption>
    </BloglistContainer>
  )
}