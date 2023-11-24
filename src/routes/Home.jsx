import "../styles/Home.style.css"


function Home() {

  return (
    <>
        <main className="">
            <section className="flex-generic">
                <section className="projeto">
                    <img src="\assets\totem-check-saude.png"></img>
                    <div className="row">
                        <img src="\assets\totem-check-saude-logo.png" alt="" class="imgName"/>
                        <p className="texto-preto">Revolucionando a experiência hospitalar, o Totem CheckSaúde oferece triagem inteligente e personalizada, proporcionando um atendimento ágil e humanizado. Sua inovação transforma a jornada do paciente, priorizando a eficiência e a precisão no cuidado de saúde.</p>
                    </div>
                    </section>
                <section className="infos">
                    <article className="">
                        <h1 className="texto-azul">O que é a solução</h1>
                        <p className="texto-preto">O Totem CheckSaúde é uma inovadora solução de triagem para hospitais brasileiros, desenvolvida para aprimorar o processo de atendimento ao paciente.</p>
                    </article>
                    <article className="">
                        <h1 className="texto-azul">O que ele fará</h1>
                        <p className="texto-preto">O Totem CheckSaúde coleta informações cruciais dos pacientes, como nome, data de nascimento, foto, e realiza verificações de identidade através da fala do CPF. Utilizando câmeras, analisa sinais visíveis como palidez e pupila dilatada, além de medir temperatura e pressão arterial de forma não invasiva. Com base nessas informações e respostas a um questionário, realiza a classificação de risco, atribuindo uma cor de pulseira e gerenciando os tempos de espera internamente.</p>
                    </article>
                    <article className="">
                        <h1 className="texto-azul">Como funcionará</h1>
                        <p className="texto-preto">Ao acessar ou cadastrar o paciente, o totem coleta dados e realiza verificações. Posteriormente, analisa sinais vitais e respostas do paciente, classificando-o de acordo com o Protocolo de Manchester. A classificação determina a cor da pulseira e gerencia os tempos de espera. Ao final, exibe o nome do paciente e o consultório no qual deve se dirigir, proporcionando um atendimento ágil, humanizado e eficiente.</p>
                    </article>
                </section>
            </section>
            <h1 className="texto-preto">VANTAGENS</h1>
            <section className="row">
                <article className="row">
                    <img src="\assets\passos-1.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1 className="texto-vermelho">01</h1>
                        <h3 className="texto-vermelho">Cadastra o paciente</h3>
                        <p className="texto-preto">Conduz o processo de cadastro do paciente, coletando informações essenciais para serem registradas no sistema hospitalar.</p>
                    </div>
                </article>
                <article className="row">
                    <img src="\assets\passos-2.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1 className="texto-vermelho">02</h1>
                        <h3 className="texto-vermelho">Faz o processo de triagem</h3>
                        <p className="texto-preto">Analisa sinais visíveis de saúde, mede temperatura e pressão arterial de forma não invasiva, etc.</p>
                    </div>
                </article>
                <article className="row">
                    <img src="\assets\passos-3.png" alt="" className="imgSm"/>
                    <div className="card">
                        <h1 className="texto-vermelho">03</h1>
                        <h3 className="texto-vermelho">Encaixa na fila</h3>
                        <p className="texto-preto">Com base nos dados obtidos, classifica o risco do paciente, determina a cor da pulseira e gerencia os tempos de espera internamente, proporcionando um atendimento ágil.</p>
                    </div>
                </article>
            </section>
        
        </main>
    </>
  )
}

export default Home
