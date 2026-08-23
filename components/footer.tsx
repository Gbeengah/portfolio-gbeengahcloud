import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Blog", href: "https://gbeengah.medium.com/", external: true },
    { label: "Resume", href: "/Balogun_Gbenga_DevOps_Resume.pdf", download: true },
    { label: "Certifications", href: "/about" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Gbeengah", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/balogun-gbenga/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:bgbenga7@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="GbengaCloud"
                width={36}
                height={36}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-foreground">
                Gbenga<span className="text-primary">Cloud</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              DevOps & Cloud Infrastructure Engineer focused on automation, reliability, security, and scalable cloud systems.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  {...(social.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    {...("download" in link && link.download
                      ? { download: true }
                      : {})}
                    {...("external" in link && link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GbengaCloud. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built to showcase cloud engineering, automation, and DevOps projects.
          </p>
        </div>
      </div>
    </footer>
  );
}
