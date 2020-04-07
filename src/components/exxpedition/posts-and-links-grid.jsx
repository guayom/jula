import styled from "@emotion/styled"

const PostsAndLinksGrid = styled.div`
  margin: 20px auto;
  max-width: 1300px;
  padding: 0 ${(p) => p.theme.space[3]}px;

  @media (min-width: ${(p) => p.theme.breakpoints[1]}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }
`

export default PostsAndLinksGrid
