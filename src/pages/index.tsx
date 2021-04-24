import Head from 'next/head'

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Podcastr</title>s
      </Head>

      <h1>Hello World</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data
    },
    revalidate: 60 * 60 * 1
  }
}
