import React, { useEffect, useState } from 'react'
import styles from './resultados.module.css'

const Resultados = () => {

    const [resultado, setResultado] = useState(false)

    const resultados = async () => {
        // const resul = await fetch('https://v3.football.api-sports.io/fixtures?next=5'
        // const resul = await fetch('https://v3.football.api-sports.io/fixtures?last=5'
        const resul = await fetch('https://v3.football.api-sports.io/fixtures?live=all', {
            method: 'Get',
            headers: {
                'x-rapidapi-key': '7bab77a6c633d688ed5b1c3dbc192735',
                'x-rapidapi-host': 'v3.football.api-sports.io'
            }
        })

        const data = await resul.json();
        console.log(data);
        setResultado(data.response);
    }

    useEffect(() => {
        // resultados()
    }, [])

    return (
        <>
        <h1>Partidos en vivo</h1>
            <div className={styles.container}>
                {
                    resultado ? (
                        resultado.map((resul) => (
                            <div className={styles.content} key={resul.fixture.id}>
                            
                                <div className={styles.infoLiga}>
                                    <div className={styles.logo}>
                                        <img src={resul.league.logo} alt='logo' />
                                        {/* <img src={img2} alt='equipo' /> */}
                                    </div>
                                    <p>
                                        {resul.league.name}
                                    </p>
                                </div>

                                <div className={styles.card}>
                                    <div className={styles.infoEquipo}>
                                        <div className={styles.equipo}>
                                            <div className={styles.logoEquipo}>
                                                <img src={resul.teams.home.logo} alt='equipo' />
                                            </div>
                                            <p>{resul.teams.home.name}</p>
                                        </div>

                                        <div className={styles.equipo}>
                                            <div className={styles.logoEquipo}>
                                                <img src={resul.teams.away.logo} alt='equipo' />
                                            </div>
                                            <p>{resul.teams.away.name}</p>
                                        </div>
                                    </div>
                                    <div className={styles.marcador}>
                                        {resul.goals.home } <br/> {resul.goals.away}
                                    </div>
                                    <span>{resul.fixture.status.elapsed}'</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1>No hay partidos :(</h1>
                    )
                }
            </div>

        </>
    )
}

export default Resultados