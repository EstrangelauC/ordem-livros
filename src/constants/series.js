import autores from "./autores";

const series = [
    {
        id: "harry-potter",
        titulo: "Harry Potter",
        descricao:
          "A série de livros Harry Potter, escrita por J.K. Rowling, acompanha a jornada de um jovem bruxo e seus amigos na Escola de Magia e Bruxaria de Hogwarts. Uma saga marcada por amizade, coragem e batalhas épicas entre o bem e o mal.",
        autor: autores[0],
        ano: 1997,
        imagem: "https://i.pathehome.com/collection/global/phc-o0dvqhi5iz/713294-wizardingworld_bc_fr.png",
        livros: [
          {
            id: "harry-potter-e-a-pedra-filosofal",
            titulo: "Harry Potter e a Pedra Filosofal",
            autor: autores[0],
            ano: 1997,
            ordem: 1,
            imagem: "https://m.media-amazon.com/images/I/813K2bpj8yL._SL1500_.jpg",
            link:"https://www.amazon.fr/Harry-Potter-Pedra-Filosofal-Rowling-ebook/dp/B0192CTP7A/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=8ZRUMSVAW3B0&dib=eyJ2IjoiMSJ9.PDxSg8TW7fU0CPTJz9ux_17T_4n1iaD0yh-W8-2x3GdmRTmm1KdRNapUVrc2K24XZCMCLWan-e4tmau9Ce0iXt666nsWmHqnZjVBniYu-BR_z-H17p2uKOhl_Kj3HcLvXjk7L-wJ7gTY_y9D6oQTYefgqidpOWdibnkN4zoprOcvv_R1988WXdPwo2zxAaI6kqggrv914_4sC3bHFgkW_QCqPsydpcKYb4up0hRhkRzSXF4wNNMfypxjST9TlkFkyhTAcp7td-N4eXTHZ-ePKBlO2Gx-Mtw6_fV-2pTTmjc.ytFF6KsNc-4oerVoEeN04bbeBwSwoMqPBFp65WSE7Ic&dib_tag=se&keywords=Harry+Potter+e+a+Pedra+Filosofal&qid=1747580452&sprefix=harry+potter+e+a+pedra+filosofal%2Caps%2C72&sr=8-2"
          },
          {
            id: "harry-potter-e-a-camara-secreta",
            titulo: "Harry Potter e a Câmara dos Secreta",
            autor: autores[0],
            ano: 1998,
            ordem: 2,
            imagem: "https://m.media-amazon.com/images/I/81D+5aMHzFL._SY522_.jpg",
            link:"https://www.amazon.fr/Harry-Potter-Ca%CC%82mara-Secreta-Rowling-ebook/dp/B01LQM96K0/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1EM9UR0J2BVRC&dib=eyJ2IjoiMSJ9.A8SceWRw2GS-u1gUEzhV9Jnp-v-xKiWq0wfXhxMxST3GjHj071QN20LucGBJIEps.qvcOrF7qXRFMCzelh0bKkYgB6l6eW2nHARc5fGYM-gs&dib_tag=se&keywords=Harry+Potter+e+a+C%C3%A2mara+dos+Secreta&qid=1747581026&sprefix=harry+potter+e+a+c%C3%A2mara+dos+secreta%2Caps%2C135&sr=8-3"
          },
          {
            id: "harry-potter-e-o-prisioneiro-de-azkaban",
            titulo: "Harry Potter e o Prisioneiro de Azkaban",
            autor: autores[0],
            ano: 1999,
            ordem: 3,
            imagem: "https://m.media-amazon.com/images/I/81NzkljRi9L._SL1500_.jpg",
            link:"https://www.amazon.fr/Harry-Potter-Prisioneiro-Azkaban-Rowling-ebook/dp/B0192CTP84/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=14EOO9TYO11F5&dib=eyJ2IjoiMSJ9.dOIpZckdx_hRee3Zk7DaMj-f58Q8P_gBrRPeWVM3fR3Sg4Iiea4FS4cvdVghw7Z2TJePgw3weEHulINRDzZRMK13Je8AmwPUy5j55GbhaLE.tyacaRIujU1nh8T3ETkTKfoctIGSI6LOUkx65iG339o&dib_tag=se&keywords=Harry+Potter+e+o+Prisioneiro+de+Azkaban&qid=1747581105&sprefix=harry+potter+e+o+prisioneiro+de+azkaban%2Caps%2C127&sr=8-1"
          },
          {
            id: "harry-potter-e-o-calice-de-fogo",
            titulo: "Harry Potter e o Cálice de Fogo",
            autor: autores[0],
            ano: 2000,
            ordem: 4,
            imagem: "https://m.media-amazon.com/images/I/81IsnaNraBL._SY522_.jpg",
            link:"https://www.amazon.fr/Harry-Potter-C%C3%A1lice-Fogo-Rowling-ebook/dp/B0192CTP8E/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=OY7D15LHZKUT&dib=eyJ2IjoiMSJ9.iuEmQtK6evGiBZ9GfQ-uWOvQTcUZ-LOdsIQqly6e5SmQw70wwW4SamoNdKxJtOmUmQboTwxaUWM1pqZgk0OBrt8veq5QwM6d2KmsVGiJlKU.Ki6kNztIpEf2kOo_IStpU9tdtvErqBWMaBYJuvYsbiw&dib_tag=se&keywords=Harry+Potter+e+o+C%C3%A1lice+de+Fogo&qid=1747581171&sprefix=harry+potter+e+o+c%C3%A1lice+de+fogo%2Caps%2C137&sr=8-1"
          },
          {
            id: "harry-potter-e-a-ordem-da-fenix",
            titulo: "Harry Potter e a Ordem da Fênix",
            autor: autores[0],
            ano: 2003,
            ordem: 5,
            imagem: "https://m.media-amazon.com/images/I/81ZQUV67MGL._SY522_.jpg",
            link:"https://www.amazon.fr/Harry-Potter-Ordem-Fe%CC%82nix-Rowling-ebook/dp/B01LQM96IC/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2N5WCVH9DR8K1&dib=eyJ2IjoiMSJ9.xTri9AyZnZU7rt6-ORaW5v4FhN9jdzlsKdFNvvCs52mXRhBOS55A7Czn5P1bZk_ZwUgJa5rWLxzF0OMNda0iDOwZ9y-ykCCsIAxHOq161jfQI_i41hsREQexdAecpnXt.a_30k-AFCi57p_ziaN-yeh640gmKewxvNvEZJFVCzmQ&dib_tag=se&keywords=Harry+Potter+e+a+Ordem+da+F%C3%AAnix&qid=1747581224&sprefix=harry+potter+e+a+ordem+da+f%C3%AAnix%2Caps%2C99&sr=8-1"
          },
          {
            id: "harry-potter-e-o-principe-misterioso",
            titulo: "Harry Potter e o Príncipe Misterioso",
            autor: autores[0],
            ano: 2005,
            ordem: 6,
            imagem: "https://m.media-amazon.com/images/I/81EjGI+6B1L._SY522_.jpg",
            link: "https://www.amazon.fr/Harry-Potter-Pr%C3%ADncipe-Misterioso-Rowling-ebook/dp/B0192CTPAC/ref=sr_1_3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=9VGDV3KCM21H&dib=eyJ2IjoiMSJ9.uPpL9bhcpi0NMaC82FFXLRE2BvmMFg3fg-2TbpowF87Dxl8xhcwVWLK6WI3Rj-iV.0APaUOVrAepVWLZXhcsYyUTjbXP9DOLI7i7NVZ_GwRY&dib_tag=se&keywords=Harry+Potter+e+o+Pr%C3%ADncipe+Misterioso&qid=1747581509&sprefix=harry+potter+e+o+pr%C3%ADncipe+misterioso%2Caps%2C61&sr=8-3"
          },
          {
            id: "harry-potter-e-os-talismas-da-morte",
            titulo: "Harry Potter e os Talismãs da Morte",
            autor: autores[0],
            ano: 2007,
            ordem: 7,
            imagem: "https://m.media-amazon.com/images/I/81KhQDVdZmL._SY522_.jpg",
            link: "https://www.amazon.fr/Harry-Potter-Talisma%CC%83s-Morte-Portuguese-ebook/dp/B0192CTPBQ/ref=sr_1_1?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1WOSK7V0DUM0U&dib=eyJ2IjoiMSJ9.YpMHvsgOz4TWcZRNlJQPHetfYHqdV7aEHWZf45hpe1cdJaVLFJFFIcGRxMKXhy_T.JPYvdahoOpqy42ngBIbU-akj3nUq-T37XH-L9FgPh28&dib_tag=se&keywords=Harry+Potter+e+os+Talism%C3%A3s+da+Morte&qid=1747581580&sprefix=harry+potter+e+os+talism%C3%A3s+da+morte%2Caps%2C134&sr=8-1"
          },
          {
            id: "harry-potter-e-a-crianca-amaldicoada",
            titulo: "Harry Potter e a Criança Amaldiçoada",
            autor: autores[0],
            ano: 2016,
            ordem: 8,
            imagem: "https://m.media-amazon.com/images/I/A1KCc5VBFYL._SY522_.jpg",
            link: "https://www.amazon.fr/Harry-Potter-Crian%C3%A7a-Amaldi%C3%A7oada-Portuguese/dp/8532530435/ref=sr_1_2?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1F74A95IX0078&dib=eyJ2IjoiMSJ9.2_7kdfgDNciBscED5-bIkDLKhlGRD-Qxc9jdkGHdgsHGjHj071QN20LucGBJIEps.iJMvGQKzUiwusd_MQITAWxApxBnnFn3B44B66tUkyLI&dib_tag=se&keywords=Harry+Potter+e+a+Crian%C3%A7a+Amaldi%C3%A7oada&qid=1747581644&sprefix=harry+potter+e+a+crian%C3%A7a+amaldi%C3%A7oada%2Caps%2C108&sr=8-2"
          }
          
        ]
    },

    {
      id: "senhor-dos-aneis",
      titulo: "O Senhor dos Anéis",
      descricao:
        "A épica série escrita por J.R.R. Tolkien acompanha a jornada pela Terra Média na luta contra o mal que ameaça o mundo. Com elfos, anões, hobbits e homens, a saga é uma das obras mais influentes da literatura fantástica.",
      autor: autores[1],
      ano: 1937,
      imagem: "https://i.ebayimg.com/images/g/NokAAOSwHLtjK7U3/s-l1600.jpg",
      livros: [
        {
          id: "o-hobbit",
          titulo: "O Hobbit",
          autor: autores[1],
          ano: 1937,
          ordem: 1,
          imagem: "https://m.media-amazon.com/images/I/81t2CVWEsUL._SY522_.jpg",
          link: "https://www.amazon.fr/Hobbit-Portuguese-J-R-R-Tolkien-ebook/dp/B00FPQ7YKU"
        },
        {
          id: "a-sociedade-do-anel",
          titulo: "O Senhor dos Anéis: A Sociedade do Anel",
          autor: autores[1],
          ano: 1954,
          ordem: 2,
          imagem: "https://m.media-amazon.com/images/I/91eJw8T1j-L._SY522_.jpg",
          link: "https://www.amazon.fr/Sociedade-Anel-Senhor-dos-Portuguese-ebook/dp/B00FPQ9TXM"
        },
        {
          id: "as-duas-torres",
          titulo: "O Senhor dos Anéis: As Duas Torres",
          autor: autores[1],
          ano: 1954,
          ordem: 3,
          imagem: "https://m.media-amazon.com/images/I/81xQC+Ecr0L._SY522_.jpg",
          link: "https://www.amazon.fr/Senhor-dos-An%C3%A9is-Duas-Portuguese-ebook/dp/B00FPQ9VC4"
        },
        {
          id: "o-retorno-do-rei",
          titulo: "O Senhor dos Anéis: O Retorno do Rei",
          autor: autores[1],
          ano: 1955,
          ordem: 4,
          imagem: "https://m.media-amazon.com/images/I/81-Vw6K4dtL._SY522_.jpg",
          link: "https://www.amazon.fr/Senhor-dos-An%C3%A9is-Retorno-Portuguese-ebook/dp/B00FPQ9X7U"
        }
      ]
    },

    {
      id: "cronicas-de-gelo-e-fogo",
      titulo: "As Crónicas de Gelo e Fogo",
      descricao:
        "Escrita por George R. R. Martin, esta série de fantasia épica mergulha num mundo brutal e político, onde famílias nobres disputam o Trono de Ferro enquanto antigas ameaças emergem do norte. Com personagens complexos e reviravoltas inesperadas, tornou-se um fenómeno literário e televisivo.",
      autor: autores[2],
      ano: 1996,
      imagem: "https://m.media-amazon.com/images/I/81C0TRpD-hL._AC_UF1000,1000_QL80_.jpg",
      livros: [
        {
          id: "a-guerra-dos-tronos",
          titulo: "A Guerra dos Tronos",
          autor: autores[2],
          ano: 1996,
          ordem: 1,
          imagem: "https://m.media-amazon.com/images/I/91ZUgQ3P55L._SY522_.jpg",
          link: "https://www.amazon.fr/Guerra-dos-Tronos-Portuguese-ebook/dp/B01M8KTSXE"
        },
        {
          id: "a-furia-dos-reis",
          titulo: "A Fúria dos Reis",
          autor: autores[2],
          ano: 1998,
          ordem: 2,
          imagem: "https://m.media-amazon.com/images/I/91IR5pGON8L._SY522_.jpg",
          link: "https://www.amazon.fr/F%C3%BAria-dos-Reis-Portuguese-ebook/dp/B01M0E4KPV"
        },
        {
          id: "a-tormenta-de-espadas",
          titulo: "A Tormenta de Espadas",
          autor: autores[2],
          ano: 2000,
          ordem: 3,
          imagem: "https://m.media-amazon.com/images/I/81zxGcqSNiL._SY522_.jpg",
          link: "https://www.amazon.fr/Tormenta-Espadas-Portuguese-ebook/dp/B01M28ISRD"
        },
        {
          id: "o-festim-dos-corvos",
          titulo: "O Festim dos Corvos",
          autor: autores[2],
          ano: 2005,
          ordem: 4,
          imagem: "https://m.media-amazon.com/images/I/91J5XvAOlDL._SY522_.jpg",
          link: "https://www.amazon.fr/Festim-dos-Corvos-Portuguese-ebook/dp/B01M3PBL2A"
        },
        {
          id: "a-danca-dos-dragoes",
          titulo: "A Dança dos Dragões",
          autor: autores[2],
          ano: 2011,
          ordem: 5,
          imagem: "https://m.media-amazon.com/images/I/81cZtfxfswL._SY522_.jpg",
          link: "https://www.amazon.fr/Dan%C3%A7a-dos-Drag%C3%B5es-Portuguese-ebook/dp/B01M7YK4FB"
        }
      ]
    }
    
    
      
]

export default series;