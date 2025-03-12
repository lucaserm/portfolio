import Particles from '@/components/particles';
import Link from 'next/link';

const navigation = [
  { name: 'Projetos', href: '/projects' },
  { name: 'Projetos Online', href: '/online' },
  { name: 'Contato', href: '/contact' },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="animate-fade-in my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="animate-glow animate-fade-left hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <Particles className="animate-fade-in absolute inset-0 -z-10" quantity={1000} />
      <h1 className="text-edge-outline animate-title font-display z-10 cursor-default bg-white bg-clip-text text-4xl whitespace-nowrap text-transparent duration-1000 sm:text-6xl md:text-9xl">
        Lucas Macedo
      </h1>

      <div className="animate-glow animate-fade-right hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 md:block" />
      <div className="animate-fade-in my-16 text-center">
        <h2 className="text-sm text-zinc-500">
          Olá, meu nome é Lucas! Sou desenvolvedor e entusiasta de tecnologia, sempre explorando
          novas ideias e criando projetos.
          <br /> No meu tempo livre, gosto de programar e experimentar diferentes tecnologias. Você
          pode conferir meus projetos no{' '}
          <Link
            target="_blank"
            href="https://github.com/lucaserm?tab=repositories"
            className="underline duration-500 hover:text-zinc-300"
          >
            Github
          </Link>
          <br />
          Caso queira saber mais sobre minha trajetória, Baixe aqui meu{' '}
          <a
            target="_blank"
            href="english-curriculum.pdf"
            download={true}
            className="underline duration-500 hover:text-zinc-300"
          >
            Currículo
          </a>
        </h2>
      </div>
    </div>
  );
}
