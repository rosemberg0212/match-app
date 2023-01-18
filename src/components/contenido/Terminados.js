import React, { useEffect, useState } from 'react'
import styles from './terminados.module.css'

const Terminados = () => {

  const [resultado, setResultado] = useState(false)

  const api_key = process.env.REACT_APP_KEY;

  const resultados = async () => {
    const resul = await fetch(`https://v3.football.api-sports.io/fixtures?last=90`, {
      method: 'Get',
      headers: {
        'x-rapidapi-key': `${api_key}`,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    })

    const data = await resul.json();
    console.log(data.response);
    setResultado(data.response);
  }

  useEffect(() => {
    resultados()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <h1>Partidos Finalizados</h1>

      <div className={styles.contentEnd}>
        {
          resultado ? (

            resultado.map((resul) => (
              resul.fixture.status.long === 'Match Finished' ? (
                <div className={styles.cardEnd} key={resul.fixture.id}>
                  <p className={styles.titleEnd}>{resul.teams.home.name} VS {resul.teams.away.name}</p>
                  <p>{resul.league.name}</p>
                  <div className={styles.endEquipos}>
                    <div className={styles.home}>
                      <div className={styles.img}>
                        <img src={resul.teams.home.logo} alt='logo' />
                      </div>
                      <p>{resul.teams.home.name}</p>
                    </div>

                    <p className={styles.resultados}>{resul.goals.home} - {resul.goals.away}</p>

                    <div className={styles.home}>
                      <div className={styles.img}>
                        <img src={resul.teams.away.logo} alt='logo' />
                      </div>
                      <p>{resul.teams.away.name}</p>
                    </div>
                  </div>
                </div>
              ) : (
                null
              )
            ))

          ) : (
            <h1>No hay resultados</h1>
          )
        }

      </div>
    </>
  )
}

export default Terminados