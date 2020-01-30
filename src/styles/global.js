
import { createGlobalStyle } from 'styled-components'//utilizando style-components em vez de css

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap'); /*importando a fonte*/

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  html, body, #root { /*Para ocupar a altura toda da tela*/
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif; /*se não conseguir carregar a roboto carrega a sans*/
    background: #ecf1f8;
    color: #333;
    -webkit-font-smoothing: antialiased ! important; /*para deixar a fonte mais detalhada dentro do chrome*/
  }

  ul {
    list-style: none;
  }

`;
