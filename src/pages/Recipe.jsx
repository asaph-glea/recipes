import React from 'react'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function Recipe() {

  let params = useParams();

  const [details, setDetails] = useState({});

  const [activeTab, setActiveTab] = useState("instructions");

  const fetchDetails = async () =>{

    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  }

  useEffect(()=>{
    fetchDetails();
  }, [params.name])

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt=""/>
      </div>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
        {activeTab === 'instructions' && (
          <div>
          <h5 dangerouslySetInnerHTML={{__html:details.summary}}></h5>
          <br/>
          <h5 dangerouslySetInnerHTML={{__html:details.instructions}}></h5>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {details.extendedIngredients.map((ingredient)=>(
              <li key={ingredient.id}>{ingredient.original}</li>
            )
            )}
          </ul>
        )}

      </Info>
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
marin-top:5rem;
margin-bottom:2.5rem;
display:flex;
.active{
  background:linear-gradient(35deg, #494949, #313131);
  color:white;
}

h5{
  margin-bottom:2rem;
}
li{
  font-size:1rem;
  line-height:0.5rem;
}
ul{
  margin-top:2rem;
}
`
const Button = styled.button`
padding:0.5rem 1rem;
color:#313131;
background:white;
border:1px soolid black;
margin-right:2rem;
font-weight:600;
`
const Info = styled.div`
margin-left:10rem;
`

export default Recipe
