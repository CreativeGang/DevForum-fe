import styled  from 'styled-components'

export const RepoWrapper =styled.div`
grid-area: github;`
export const RepoTitle =styled.p`
font-size: 1.5em;
font-weight: bold;
line-height: 1.6;
margin: 1rem 0;
color: #52b8ca;
`

export const RepoContainer  = styled.div`
display: flex;
color: #333;
border: #ccc 1px solid;
padding: 1rem;
margin: 1rem 0;
font-size: 1rem;
line-height: 1.6;`
export const RepoInfo = styled.div`
flex: 7;
flex-basis: 70%;
`
export const RepoName = styled.p`
font-weight: bold;
`

export const RepoLink = styled.a`
text-decoration: none;
    color: #52b8ca;
    font-weight: bold;`
export const RepoDescription = styled.p``
export const RepoNote = styled.div`
flex: 3;
flex-basis: 20%;

`
export const NoteList = styled.ul`
list-style: none;`

export const NoteItem = styled.li`    font-size: 0.8rem;
padding: 0.1rem;
text-align: center;
margin: 0.3rem;
display: list-item;
background: #f4f4f4;
    color: #333;
&.stars {
  background-color: #52b8ca;
  color: #fff;
}
&.watchers {    background-color: #343a40;
  color: #fff;}
`





