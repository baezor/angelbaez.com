import Link from "next/link";

const navItems = {
  "https://github.com/baezor": {
    name: "github",
  },
  "https://www.linkedin.com/in/baezor/": {
    name: "linkedIn",
  },
  "https://www.instagram.com/baez0r/": {
    name: "instagram",
  },
  "https://prepain.mx/blog/author/angel/": {
    name: "prepa in",
  },
};

export function Footer() {
  return (
    <footer className="-ml-[8px] mt-16 tracking-tight">
      <div className="relative">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </footer>
  );
}
