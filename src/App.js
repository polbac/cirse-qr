import { useState, useEffect } from 'react'
import Prismic from 'prismic-javascript'


function App() {
  const [downladFile, setDownloadFile] = useState(null)

  useEffect(() => {
    console.log('oh')
    Prismic.api("https://cirse-qr.cdn.prismic.io/api/v2")
      .then(res => {
        res.query('')
          .then(r => {
            document.location = r.results[0].data.download.url
          })
      })

    }, [])
  return (
    <p>cargando...</p>
  );
}

export default App;
