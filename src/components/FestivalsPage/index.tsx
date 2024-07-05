import React from "react"

import { getWindowSize } from '../../utils/getWindowSize';

import festaConceicao from '../../assets/FestaConceicao.png';
import festaSaoFrancisco from '../../assets/FestaSaoFrancisco.png';
import festaSenhoradaSaude from '../../assets/FestaSenhoradaSaude.png';
import festejoPenha from '../../assets/FestejoPenha.png';
import festejoSantaLuzia from '../../assets/FestejosSantaLuzia.png';
import festivalAssuncao from '../../assets/FestivalAssuncao.png';
import festivalIbiapaba from '../../assets/FestivalIbiapaba.png';
import festivalMel from '../../assets/FestivalMel.png';
import { Container,SubTitle, Title, List } from "./style";
import Festival from "../Festival";

const details = [
    {
        image: festivalMel,
        date:'MAIO',
        name:'Festival Mel',
        description:'Chorinho e Cachaça'
    },
    {
        image: festivalIbiapaba,
        date:'Última semana de Julho',
        name:'Festival Música na Ibiapaba',
    },
    {
        image: festivalAssuncao,
        date:'15 de Agosto',
        name:'Festejo Nossa Senhora da Assunção',
        description:'Padroeira da cidade'
    },
    {
        image: festaSenhoradaSaude,
        date:'11 de Setembro',
        name:'Festa de Nossa Senhora da Saúde',
        description:'Vila Manhoso (Lambedouro)'
    },
    {
        image: festaSaoFrancisco,
        date:'4 de Outubro',
        name:'Festa de São Francisco',
    },
    {
        image: festaConceicao,
        date:'07 de dezembrO',
        name:'Festa Nossa Senhora da Conceição',
        description:'Distrito de Quatiguaba'
    },
    {
        image: festejoSantaLuzia,
        date:'13 de Dezembro',
        name:'Festejos de Santa Luzia',
        description:'Oiticicas (Vale do Lambedouro)'
    },
    {
        image: festejoPenha,
        date:'07 de setembro',
        name:'Festejos Nossa Senhora da Penha',
        description:'Vila de General TIbúrcio - Distrito General Tibúrcio'
    },

];

const FestivalsPage = () =>{
    const windowSize = getWindowSize();
    return(
        <Container device={windowSize}>
            <Title device={windowSize}> Festivais anuais </Title>
            <SubTitle> Veja os mais diversos anuais e as suas respsctivas datas, planeje-se para acompanhar um evento melhor que o outro. </SubTitle>
            <List device={windowSize}>
                {
                    details.map((detail, index) =>(
                        <Festival image={detail.image} date={detail.date} name={detail.name} description={detail.description} key={index}/>
                    ))
                }
            </List>
        </Container>
    )
}

export default FestivalsPage