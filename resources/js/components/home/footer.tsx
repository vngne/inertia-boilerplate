
export default function Footer() {
  return (
    <footer className="px-4 mx-auto border-t max-w-7xl sm:px-6 lg:px-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
            Built by{" "}
            <a
              href="https://github.com/ekovegeance"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              ekovegeance
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/ekovegeance/inertia-boilerplate"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}

