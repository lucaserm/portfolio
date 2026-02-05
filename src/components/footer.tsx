import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-16 text-black">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Let&apos;s Connect</h3>
            <p className="mb-6">
              I&apos;m always interested in new opportunities and collaborations. Feel free to reach
              out if you&apos;d like to work together!
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-muted-foreground transition-colors"
                >
                  lucas.macedo@ufms.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+5567981184141"
                  className="hover:text-muted-foreground transition-colors"
                >
                  +55 (67) 98118-4141
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Campo Grande, MS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link
                href="/repositories"
                className="hover:text-muted-foreground block transition-colors"
              >
                GitHub Repositories
              </Link>
              <Link
                href="/websites"
                className="hover:text-muted-foreground block transition-colors"
              >
                Live Websites
              </Link>
              <Link
                href="/projects"
                className="hover:text-muted-foreground block transition-colors"
              >
                Other Projects
              </Link>
              <a
                href="lucas-resume-2026.pdf"
                target="_blank"
                download={true}
                className="hover:text-muted-foreground block transition-colors"
                rel="noopener"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-black pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Lucas Macedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
