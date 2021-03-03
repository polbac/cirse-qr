import { useEffect } from 'react'
import Prismic from 'prismic-javascript'


function App() {

  useEffect(() => {
    Prismic.api("https://qr-cirse.cdn.prismic.io/api/v2")
      .then(res => {
        res.query('')
          .then(r => {
            console.log('r',r)
            document.location = r.results[0].data.download.url
          })
      })

    }, [])
  return (
    <p>cargando...</p>
  );
}

export default App;
