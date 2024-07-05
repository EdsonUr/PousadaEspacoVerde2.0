import React from "react"
import { Image,Date,Name,Container,Description } from "./style";

interface Props{
    image:any,
    date:String,
    name:String,
    description?:String,
}

const Festival = ({image,date,name,description}:Props) =>{
    return(
        <Container>
            <Image src={image}/>
            <Date>
                {date.toUpperCase()}
            </Date>
            <Name>
                {name}
            </Name>
            {
                description? <Description> {description} </Description>:null
            }
        </Container>
        
    )
}

export default Festival