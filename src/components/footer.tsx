import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contact" className="text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-slate-300 mb-6">
              I'm always interested in new opportunities and collaborations. Feel free to reach out if you'd like to
              work together!
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/lucaserm"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/lucaserm"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:lucas.macedo@ufms.br"
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <a href="mailto:your.email@example.com" className="hover:text-white transition-colors">
                  lucas.macedo@ufms.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4" />
                <a href="tel:+5567981184141" className="hover:text-white transition-colors">
                  +55 (67) 98118-4141
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4" />
                <span>Campo Grande, MS</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-slate-300">
              <a href="#repositories" className="block hover:text-white transition-colors">
                GitHub Repositories
              </a>
              <a href="#websites" className="block hover:text-white transition-colors">
                Live Websites
              </a>
              <a href="#projects" className="block hover:text-white transition-colors">
                Other Projects
              </a>
              <a 
                href="english-curriculum.pdf" 
                target="_blank" 
                download={true} 
                className="block hover:text-white transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Lucas Macedo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
