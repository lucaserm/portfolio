'use client';
import { useEffect, useState } from 'react';
import GitHubRepos from '@/components/github-repos';
import LiveWebsites from '@/components/live-website';
import OtherProjects from '@/components/other-projects';
import Image from 'next/image';
import { Briefcase, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Home() {
  const [geolocation, setGeolocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
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
    <div className="flex w-full flex-col gap-12">
      <header className="flex min-h-screen w-full items-center justify-center">
        <div className="mx-auto grid max-w-5xl grid-cols-5 gap-3 px-4">
          <div className="col-span-3 text-justify">
            <div className="mb-1 flex flex-wrap gap-2">
              <Badge variant="outline">
                <MapPin className="h-4 w-4" /> Campo Grande, MS
              </Badge>
              <Badge variant="outline">
                <Briefcase className="h-4 w-4" /> Full-Stack Developer
              </Badge>
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-7xl">Lucas Macedo</h1>
            <p className="mb-8 text-xl leading-relaxed md:text-2xl">Full-Stack Developer</p>
            <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed">
              Passionate about creating beautiful, functional web applications with modern
              technologies. Specialized in Java, Next.js, and TypeScript with a focus on user
              experience and performance.
            </p>

            <div className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Campo Grande, MS</span>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mx-auto mb-3 h-48 w-48 rounded-full border-4 border-white shadow-2xl">
              <Image
                src="/photo.png"
                alt="Profile Photo"
                width={360}
                height={360}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/lucaserm"
                className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/lucaserm"
                className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:lucas.macedo@ufms.br"
                className="rounded-full bg-black/80 p-2 text-white transition-colors hover:bg-black"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
