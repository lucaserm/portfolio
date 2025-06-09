'use client';
import Particles from '@/components/particles';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'Projetos', href: '/projects' },
  { name: 'Projetos Online', href: '/online' },
  { name: 'Contato', href: '/contact' },
];

export default function Home() {
  const [geolocation, setGeolocation] = useState<{ latitude: number; longitude: number } | null>(
    null
  );
  const [geolocationError, setGeolocationError] = useState<string | null>(null);
  const [hasReportedGeolocation, setHasReportedGeolocation] = useState<boolean>(false);

  useEffect(() => {
    function getGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setGeolocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            switch (error.code) {
              case error.PERMISSION_DENIED:
                setGeolocationError('User denied the request for Geolocation.');
                break;
              case error.POSITION_UNAVAILABLE:
                setGeolocationError('Location information is unavailable.');
                break;
              case error.TIMEOUT:
                setGeolocationError('The request to get user location timed out.');
                break;
              default:
                setGeolocationError('An unknown error occurred.');
                break;
            }
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        setGeolocationError('Geolocation is not supported by this browser.');
      }
    }

    getGeolocation();
  }, []);

  useEffect(() => {
    console.log(geolocation, geolocationError, hasReportedGeolocation);
    if ((geolocation !== null || geolocationError !== null) && !hasReportedGeolocation) {
      async function sendAnalytics() {
        try {
          const userAgent = navigator.userAgent;
          const time = new Date().toLocaleString();
          const page = window.location.href;

          await fetch('api/analytics', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              userAgent,
              time,
              page,
              geolocation,
              geolocationError,
            }),
          });
          setHasReportedGeolocation(true);
        } catch (error) {
          console.error('Error sending analytics to API route:', error);
        }
      }

      sendAnalytics();
    }
  }, [geolocation, geolocationError, hasReportedGeolocation]);

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
