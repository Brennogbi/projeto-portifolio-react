import './App.jsx'
import {
  Header, Li, A, Nav, Ul,
  Divtitulo, MAIN, SECTION,
  DIVDECRICAO, DIVIMAGEM, SECTIONGRID,
  BLOCOIMGAEM, TITULOGRIDE, DESCRICAOGRIDE,
  PaginationContainer, PageButton, MobileMenu,
  ToggleButton, Footer,Titulofoter 
} from './styles.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import imagem1 from '../assets/Matusalém.png'
import imagem2 from '../assets/download.jpg'
import imagengrid from '../assets/fototeste.png'
import { useState } from 'react';

function App() {

  const [open, setOpen] = useState(false);
  const [imagemAtual, setImagemAtual] = useState(imagem1);
  const [ativoid, setAtivoid] = useState(null);
  const [categoria, setCategoria] = useState('todos');
  const [paginaatual, setpaginaatual] = useState(1);

  const itensporpagina = 3;

  const imagens = [
    { id: 1, titulo: "Arte 1", src: imagengrid, descricao: "Descrição 1", categoria: 'digital' },
    { id: 2, titulo: "Arte 2", src: imagem1, descricao: "Descrição 2", categoria: 'anime' },
    { id: 3, titulo: "Arte 3", src: imagem2, descricao: "Descrição 3", categoria: 'digital' },
    { id: 4, titulo: "Arte 4", src: imagem1, descricao: "Descrição 4", categoria: 'realismo' },
    { id: 5, titulo: "Arte 5", src: imagengrid, descricao: "Descrição 5", categoria: 'anime' },
  ];

  const imagensFiltradas = categoria === 'todos'
    ? imagens
    : imagens.filter((i) => i.categoria === categoria);

  const indiceultimo = paginaatual * itensporpagina;
  const indiceprimeiro = indiceultimo - itensporpagina;
  const imagenspaginadas = imagensFiltradas.slice(indiceprimeiro, indiceultimo);
  const totaldepaginas = Math.ceil(imagensFiltradas.length / itensporpagina);

  return (
    <>
      <Header>
        {/* Botão hamburguer */}
        <ToggleButton onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </ToggleButton>

        {/* Menu mobile atualizado */}
        <MobileMenu open={open}>
          <Ul>
            <Li><i className="bi bi-pencil"></i></Li>
            <Li><A href="#">Home</A></Li>
            <Li>
              <A href="#"
                data-active={categoria === 'todos'}
                onClick={(e) => { e.preventDefault(); setCategoria('todos'); setpaginaatual(1); setOpen(false); }}>
                Todos
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'realismo'}
                onClick={(e) => { e.preventDefault(); setCategoria('realismo'); setpaginaatual(1); setOpen(false); }}>
                Realismo
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'anime'}
                onClick={(e) => { e.preventDefault(); setCategoria('anime'); setpaginaatual(1); setOpen(false); }}>
                Animes
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'digital'}
                onClick={(e) => { e.preventDefault(); setCategoria('digital'); setpaginaatual(1); setOpen(false); }}>
                Digital
              </A>
            </Li>
            <Li><i className="bi bi-journal-richtext"></i></Li>
          </Ul>
        </MobileMenu>

        <Divtitulo>BEM VINDO AO MEU PORTIFOLIO</Divtitulo>

        {/* Menu desktop */}
        <Nav>
          <Ul>
            <Li><i className="bi bi-pencil"></i></Li>
            <Li><A href="#">Home</A></Li>
            <Li>
              <A href="#"
                data-active={categoria === 'todos'}
                onClick={(e) => { e.preventDefault(); setCategoria('todos'); setpaginaatual(1); }}>
                Todos
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'realismo'}
                onClick={(e) => { e.preventDefault(); setCategoria('realismo'); setpaginaatual(1); }}>
                Realismo
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'anime'}
                onClick={(e) => { e.preventDefault(); setCategoria('anime'); setpaginaatual(1); }}>
                Animes
              </A>
            </Li>
            <Li>
              <A href="#"
                data-active={categoria === 'digital'}
                onClick={(e) => { e.preventDefault(); setCategoria('digital'); setpaginaatual(1); }}>
                Digital
              </A>
            </Li>
            <Li><i className="bi bi-journal-richtext"></i></Li>
          </Ul>
        </Nav>
      </Header>

      <MAIN>
        <DIVIMAGEM>
          <img
            src={imagemAtual}
            alt="Foto do portfólio"
            onMouseOver={() => setImagemAtual(imagem2)}
            onMouseOut={() => setImagemAtual(imagem1)}
          />
        </DIVIMAGEM>

        <SECTION>
          <h1>Breno Santos</h1>
          <DIVDECRICAO>
            <p>Sou Breno, artista visual apaixonado por retratos, paisagens e arte digital.</p>
          </DIVDECRICAO>
        </SECTION>
      </MAIN>

      <h2 style={{ margin: '1rem 0', color: 'white' }}>
        Categoria: {categoria}
      </h2>

      <SECTIONGRID>
        {imagenspaginadas.map((img) => (
          <BLOCOIMGAEM
            key={img.id}
            $active={ativoid === img.id}
            onClick={() => setAtivoid(ativoid === img.id ? null : img.id)}
          >
            <TITULOGRIDE>{img.titulo}</TITULOGRIDE>
            <img id='arte' src={img.src} alt={img.titulo} />
            <DESCRICAOGRIDE>
              <p id='descricao'>{img.descricao}</p>
            </DESCRICAOGRIDE>
          </BLOCOIMGAEM>
        ))}
      </SECTIONGRID>

      <PaginationContainer>
        {Array.from({ length: totaldepaginas }, (_, index) => (
          <PageButton
            key={index + 1}
            onClick={() => setpaginaatual(index + 1)}
            $active={paginaatual === index + 1}
          >
            {index + 1}
          </PageButton>
        ))}
      </PaginationContainer>

      <Footer>
                          <Titulofoter>Entre em contato</Titulofoter>
        <ul>
             

          <li><a href="#"><i class="bi bi-instagram"></i></a></li>
          <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
          <li><a href="#"><i class="bi bi-youtube"></i></a></li>
          <li><a href="#"><i class="bi bi-tiktok"></i></a></li>

        </ul>



      </Footer>
    </>
  )
}

export default App
