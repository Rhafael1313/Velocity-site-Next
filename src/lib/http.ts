import { IGetColorLinkHover, IGetHead, IGetHeaderAndFooter, IGetHome } from "global";

type inputHttpReq = {next?: NextFetchRequestConfig, cache?: RequestCache};

function httpReq<T>(query: string) {
    return async (prop?: inputHttpReq): Promise<T> => {
        const res = await fetch('https://sa-east-1.cdn.hygraph.com/content/cle393fme0i4301t273moh9ev/master', {
          ...prop,
            method: 'POST',                                          
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ query })
        });
        return await res.json();
    }
}

export const getColorLinkHover = httpReq<IGetColorLinkHover>(`
    query MyQuery {
        bussinesses {
          corDoLinkAnimado1 {
            hex
          }
          corDoLinkHover {
            hex
          }
        }
      }
`);

export const getHeaderAndFooter = httpReq<IGetHeaderAndFooter>(`
    query MyQuery {
      bussinesses {
        numeroDeTelefone
        corDoHeader {
          hex
        }
        whatsApp {
          textoDoLink
          linkDoElmento
          icone
          corDoIcone {
            hex
          }
        }
        instagram {
          textoDoLink
          linkDoElmento
          icone
          corDoIcone {
            hex
          }
        }
        facebook {
          textoDoLink
          linkDoElmento
          icone
          corDoIcone {
            hex
          }
        }
        endereco {
          textoDoLink
          linkDoElmento
          icone
          corDoIcone {
            hex
          }
        }
        iFrameGoogle
        horarioDeAtendimento {
          html
        }
      }
    }
`);

export const getHead = httpReq<IGetHead>(`
  query MyQuery {
    bussinesses {
      tituloDaPagina
      descricaoDeMetaDadosDaPagina
      iconeDaPagina {
        url
      }
    }
  }
`);

export const getHome = httpReq<IGetHome>(`
query MyQuery {
  atributos {
    id
    icone
    titulo
    descricao {
      text
    }
  }
  bussinesses {
    imagemCarroselMobile {
      url
    }
    imagensDoCarrosel {
      url
    }
    whatsApp {
      textoDoLink
      linkDoElmento
    }
  }
  planos {
    id
    nomeDoPlano
    quantosMegas
    preco
    privilegios {
      id
      url
    }
    promocao
    degrade
    cor1 {
      rgba {
        a
        b
        g
        r
      }
    }
    cor2 {
      rgba {
        a
        b
        g
        r
      }
    }
    informacoesImportantes
    listaDeObservacoesDoPlano {
      nome
      icone
      id
    }
  }
  planoDeTvs {
    listaDeIconesDeCanais
    planoDeApresentacao
  }
}
`);