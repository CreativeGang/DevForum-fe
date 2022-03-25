import styled from 'styled-components'

export const ExperienceWrapper  = styled.div`
flex: 1 1 auto;
margin-right: 10px;
`

export const ExperienceHeader =  styled.div`
    color: #2b3b4b;
    background: #d4d4d;
    font-family: 'Nunito Sans', sans-serif;
    font-size: clamp(2rem, 3vw, 5rem) ;
    font-weight: 800;
    margin-bottom: 1rem;
`

export const ExperienceTable  = styled.table`
font-family: 'Nunito Sans', sans-serif;
color: #2b3b4b;
width: 100%;
`

export const ExperienceThead  = styled.thead`
font-family: 'Nunito Sans', sans-serif;

`
export const ExperienceTableRow  = styled.tr`
// display: flex;
// justify-content: space-evenly;

`
export const ExperienceTableHeading = styled.th.attrs({
  align: 'left'
})`
background-color: #d2d7db;
font-weight:800;
padding: 5px 5px;
flex:1 1 auto;
border-right: 2px solid #fff;
vertical-align: top;
text-align: left;
&:last-child {
  border-right: none;
}

`
export const ExperienceTableBody  = styled.tbody`

`

export const ExperienceTableData = styled.td.attrs({
  align: "left"
})`
font-weight:400;
padding: 5px 5px;
flex:1 1 auto;
text-align:left;`
export const ExperienceTableButton = styled.button`
padding: 5px 10px;
background-color: #eb3223;
outline: none;
color: #fff;
border: none;
border-radius: 3px;
`

