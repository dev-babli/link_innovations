import { Code } from "lucide-react";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Link Innovations",
    url: "/",
  },
  tagline = "IT Development Solutions",
  menuItems = [
    {
      title: "Services",
      links: [
        { text: "Web Development", url: "#" },
        { text: "Mobile Apps", url: "#" },
        { text: "Cloud Solutions", url: "#" },
        { text: "DevOps", url: "#" },
        { text: "Consulting", url: "#" },
        { text: "Support", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "#" },
        { text: "Team", url: "#" },
        { text: "Blog", url: "#" },
        { text: "Careers", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Privacy", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", url: "#" },
        { text: "Case Studies", url: "#" },
        { text: "Tech Stack", url: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { text: "GitHub", url: "#" },
        { text: "LinkedIn", url: "#" },
        { text: "Twitter", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 Link Innovations. All rights reserved.",
  bottomLinks = [
    { text: "Terms of Service", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 border  rounded-t-4xl ">
      <div className="container max-w-7xl mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center text-2xl gap-2 lg:justify-start">
                <Code />
                Link Innovations
              </div>
              <p className="mt-4 text-base font-medium text-white">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-medium text-lg text-white">{section.title}</h3>
                <ul className="text-white space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url} className="text-white hover:text-accent-cyan">{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-white mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
            <p className="text-white">{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url} className="text-white hover:text-accent-cyan">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };