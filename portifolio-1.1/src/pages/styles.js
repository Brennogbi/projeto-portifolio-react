import styled, { css, keyframes } from "styled-components";



const slidedow = keyframes`

0%{
  transform: translate(-100%)
}
100%{
  transform: translateY(0);
}




`





export const Header = styled.header`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  background: #080808ff;
  padding: 15px 0;
  z-index: 1000;
  animation: ${slidedow} 1.3s ease-out forwards;
  transition: all 0.5s ease;
 
  box-shadow:   0px 0px  30px #ffffff94;

  
`

export const Divtitulo = styled.div`
  display: flex; justify-content: center; align-items: center;
  color: white; font-size: 20px;

  @media (max-width: 768px) { font-size: 16px; }
`

export const Li = styled.li`
 list-style: none;


 
`

export const A = styled.a`
  color: white;
  font-size: 20px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.5s ease-in-out;
  opacity: 0.7;

  &:hover { transform: scale(1.2); }

  &[data-active="true"] {
    font-weight: 700;
    border-bottom: 2px solid currentColor;
    opacity: 1;

  
}
     
  


  
`

export const Nav = styled.nav`
  display: flex; 
  justify-content: center;

  @media (max-width: 768px) {
    display: none;  // oculta o Nav no mobile
  }
`

export const Ul = styled.ul`
  list-style: none;
  display: flex; justify-content: space-between;
  gap: 30px; margin: 0; padding: 0;


    
  

  i { font-size: 20px; color: white; }

  @media (max-width:480px) {
    i{ display: none; }
    
  }


  
`

// botão menu
export const ToggleButton = styled.button`
  background: none; border: none;
  cursor: pointer; display: none;
  flex-direction: column; gap: 5px;
  z-index: 1000;

  span {
    width: 25px; height: 3px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) { display: flex; }
`;

// menu mobile atualizado
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-100%")}; 
  height: 100vh;
  width: 250px;
  background: #08080891;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 999;
  

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
  }

  li  { list-style: none; }

  a{
    color: white;
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s;
    list-style: none;

    &[data-active="true"] {
      font-weight: 700;
      border-bottom: 2px solid currentColor;
      opacity: 1;
    }

    &:hover { color: #00bcd4; }
  }

  i { font-size: 20px; color: white; }
`


//----------------------------------------------------------------------------------------
// maim


export const MAIN =styled.main`
display: flex;
  justify-content: center;   /* centraliza na horizontal */
  align-items: center;       /* centraliza na vertical */
  min-height: 100vh;         /* ocupa a tela toda */
  padding: 20px;
  gap: 80px;                 /* espaço entre imagem e texto */


  /* Responsivo */
  @media (max-width: 768px) {
    flex-direction: column; /* fica em coluna no celular */
    text-align: center;
    min-height: 100vh;
  }


`

export const DIVIMAGEM = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  

  img {
    max-width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid white;
    box-shadow: 5px 5px 10px #d8d8d89a;
    transition: all 0.5s ease;
      animation: ${slidedow} 1.3s ease-out forwards;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  /* Responsivo */
  @media (max-width: 480px) {
    img {
      max-width: 200px;
      height: 200px;
    
    }
  }
`;


export const SECTION = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 50px;
    margin-right: 210px;
  }

  /* Responsivo */
  @media (max-width: 768px) {
    h1 {
      margin-right: 0; /* remove deslocamento no celular */
      text-align: center;
      font-size: 40px; /* menor no mobile */
    }
  }
`;


export const DIVDECRICAO =styled.div`

 display: flex;
  align-items: center;
  justify-content: center;

  width: 500px;
  min-height: 100px;
  background: #504f4fff;
  border-radius: 10px;
  padding: 1rem;

  p {
    color: white;
    margin: 0;
    text-align: center;
  }

  //responsivo

  @media (max-width:480px ){
    width: 90%; //ocupa quase toda largura
    
  }



`

//PARTE PARA EXIBIR DESENHOS

export const SECTIONGRID = styled.div`
  width: 100%;
  height:60v;
  background: #252525ff;
  padding: 20px;
  
  box-shadow: 0px 0px 10px #ffffffd2;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr)); 
  gap: 20px; 
  justify-items: center; 

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); /* força 2 colunas */
    gap: 20px; /* espaço menor entre elas */
      padding: 10px;
      
     
   
  }

  
`



export const BLOCOIMGAEM = styled.div`
  display: flex;
  flex-direction: column;     
  align-items: center;
  width: 200px;
  height: 300px;
  border: 1px solid white;
  border-radius: 10px;
  background: #161616ff;
  padding: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, opacity;

  &:hover {
    box-shadow: 5px 5px 15px rgba(255,255,255,0.5);
    
  }

  @media (max-width: 480px){

      width: 175px;
  height: 250px;
 
    
  }

  img {
    width: 150px;
    max-width: 150px;
    height: 150px;
    border-radius: 12px;
    object-fit: cover;
    margin-bottom: 10px;
  }

  /* Quando o bloco está ativo → vira "flutuante" */
  ${({ $active }) =>
    $active &&
    css`
      position: fixed;        /* fica por cima de tudo */
      top: 50%;               /* centraliza */
      left: 50%;
      transform: translate(-50%, -50%) scale(2.0);
      z-index: 9999;          /* sobrepõe os outros */
      box-shadow: 0 0 25px rgba(255,255,255,0.6);
      
    `}
`



export const TITULOGRIDE = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  color: white;
`

export const DESCRICAOGRIDE = styled.div`
  max-width: 90%;
  margin-top: 8px;
  padding-top: 5px;
  border-top: 1px solid #555;

  p {
    font-size: 12px;
    text-align: center;
    color: #ddd;
  }
`



export const PaginationContainer = styled.div`
  margin: 20px 0;
  text-align: center;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background: ${(props) => (props.$active ? "#555" : "#222")};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: #444;
    transform: scale(1.1);
  }
`;


//FOOTER

export const Footer= styled.footer`

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

  box-shadow: 0px 0px 10px #ffffffb7;




ul{
  display: flex;
  gap: 50px;
  list-style: none
}

i{
  font-size: 30px;
  color: #6e6e6eff;
  
  
   &:hover { 
    color: #ffffffff;

   
  
  
  }
  
}

a{
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s ease-in-out;

  

  &:hover { transform: scale(1.2);
     
  
  
  }
}



`
export const Titulofoter = styled.h3`

color: aliceblue;
font-size: 20px;
`