function Footer() {
  return (
    <footer className="my-8 ">

      <div className="w-11/12 md:w-4/5 mx-auto py-8 text-center">

        <p className="text-white font-medium ">
          Frontend Developer |  React.js Developer
        </p>

        <div className="flex justify-center gap-6 mt-4">

          <a
            href="https://github.com/Doniamagdy"
            target="_blank"
            className="text-purple-300 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/donia-magdy-b6480612b"
            target="_blank"
            className="text-purple-300 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;