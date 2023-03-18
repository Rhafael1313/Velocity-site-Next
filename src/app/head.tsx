import { getHead } from "@/lib/http"

export default async function Head() {
  const head = await getHead();
  const { tituloDaPagina, descricaoDeMetaDadosDaPagina, iconeDaPagina } = head.data.bussinesses[0];
  return (
    <>
      <title>{tituloDaPagina}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={descricaoDeMetaDadosDaPagina} />
      <link rel="icon" type="image/svg+xml" href={iconeDaPagina.url ?? 'Error'} />
    </>
  )
}
