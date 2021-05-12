import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
*{
    margin: 0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#1b1b1b;  
    font-family: 'Itim', cursive;
    overflow-x:hidden;
}

html{
    @media (max-width:1750px){
        font-size:75%
    }
}

button{
    font-weight: bold;
    font-size:1.1rem;
    cursor:pointer;
    padding:1rem 2rem;
    border:3px solid #23d997;
    background:transparent;
    transition: all 0.5s ease;
    color:white;

    &:hover{
        background:#23d997;
    }
}

h2{
    font-weight:light;
    font-size:4rem;
}

h3{
    color:white;
}

h4{
    font-weight:bold;
    font-size:2rem
}

p{
    padding: 2rem 0rem;
    color:#ccc;
    font-size:1rem;
    line-height:150%;
}

span{
    font-weight:bold;
    color:#23d997;
}

a{
    color:white
}

`;

export default GlobalStyle;
