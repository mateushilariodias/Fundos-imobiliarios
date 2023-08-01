import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className='font-bold text-orange-500 text-center text-2xl bg-green-300'>Fundos imobiliários</h1>
      <article className='pt-4 pb-4 pl-4 pr-4 text-gray-700 lg:max-w-2xl lg:text-center lg:mx-auto space-y-4'>
        <p>Este site foi desenvolvido com dois objetivos principais:</p>
        <p>Descobrir o "número mágico" em um fundo imobiliário, que é o número de cotas que um investidor deve possuir para receber o valor de uma cota todos os meses. Este valor é determinado por uma combinação de fatores, incluindo o valor atual da cota, o rendimento mensal do fundo e quaisquer alterações futuras no valor da cota.</p>
        <p>Fornecer uma ferramenta para os investidores calcularem o valor em cotas que eles precisam investir para atingir uma renda desejada. Isso é feito com base no rendimento mensal por cota do fundo imobiliário, permitindo que os investidores planejem suas estratégias de investimento de acordo com seus objetivos de renda.</p>
        <p>Resumidamente, este site serve como uma ferramenta de planejamento e cálculo financeiro para investidores de fundos imobiliários, ajudando-os a determinar a quantidade e o valor de suas cotas, a fim de atingir seus objetivos de renda mensal.</p>
      </article>
      <main>
        <section>
          <h2>Calcular Magic Number</h2>
          {/* campo(s)
          botao 
          resultado*/}
          <div>
            <label htmlFor=""></label>
            <input type="number" name="" id="" />
          </div>
          <div>
            <label htmlFor=""></label>
            <input type="number" name="" id="" />
          </div>
        </section>
        <section>
          <h2>Calcular valor em cotas para alcançar a renda desejada</h2>
          {/* campo(s)
          botao 
          resultado*/}
        </section>
      </main>
      <aside>
        <div className='justify-center flex'>
          <iframe src="https://www.youtube.com/embed/3JqeEYMgu8Q" title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
      </aside>
    </>
  )
}
