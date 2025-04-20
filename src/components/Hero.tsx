export default function Hero() {
  return (
    <section className="md:mx-0 mx-4 text-white flex flex-col items-center md:pt-0 pt-[180px] md:justify-center h-screen gap-[17px]">
      <h1 className="md:text-[60px] text-[25px] font-medium tracking-[0.2px] md:leading-[88px] text-center">
        <span className="text-[#008fff]">Escale 2x</span> mais rápido <br />
        usando <span className="text-[#008fff]">Inteligência Artificial</span>
      </h1>
      <p className="text-center text-[14px]">
        Sistemas automatizados que captam clientes, respondem automaticamente e
        fecham negócios <br /> enquanto você só precisa se preocupar com seu
        trabalho.
      </p>
      <div className="mt-10 flex gap-10 font-medium">
        <a
          href="#"
          className="md:px-7 md:py-5 px-3 py-3 bg-[#4452FE] hover:bg-transparent border border-transparent hover:shadow-xl shadow-white/10 hover:border-white hover:scale-110 duration-300 text-[17px]"
        >
          Análise gratuita
        </a>
        <a
          href="#"
          className="md:px-7 md:py-5 px-3 py-3 border text-[17px] hover:bg-[#4452FE] hover:border-transparent hover:shadow-xl shadow-white/10 hover:scale-110 duration-300"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
}
