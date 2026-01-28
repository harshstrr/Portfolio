import jarvis from "../assets/portfolio/jarvis.png";
import musify from "../assets/portfolio/musify.png";
import moviehub from "../assets/portfolio/moviehub.png";
import weather from "../assets/portfolio/weather.png";
import cleaner from "../assets/portfolio/cleaner.png";
import stoj from "../assets/portfolio/stoj.png";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: jarvis,
      title : "Jarvis",
      link: 'https://jarvis-2-0-commands.vercel.app/',
      repo: 'https://github.com/itz-Harsh/JARVIS-2.0'
    },
    {
      id: 2,
      src: musify,
      title : "Musify",
      link: 'https://musify-harsh.vercel.app/',
      repo: 'https://github.com/itz-Harsh/Musify'
    },
    {
      id: 3,
      src: moviehub,
      title : "Moviehub",
      link: 'https://moviehub-harsh.vercel.app/',
      repo: 'https://github.com/itz-Harsh/MovieHub'
    },
    {
      id: 4,
      src: weather,
      title : "Weather ChatBot & API",

      link: 'https://weatherapi-harsh.vercel.app/weather?city=Delhi',
      repo: 'https://github.com/itz-Harsh/Weather_ChatBot__FlaskAPI'
    },
    {
      id: 5,
      src: cleaner,
      title : "Cleaner",
      link: 'https://github.com/itz-Harsh/Cleaner',
      repo: 'https://github.com/itz-Harsh/Cleaner'
    },
    {
      id: 6,
      src: stoj,
      title : "Spotify to JioSaavn Playlist Extractor",
      link: 'https://spotify-to-musify.vercel.app/',
      repo: 'https://github.com/itz-Harsh/Spotify--TO--Musify'
    },
  ];

  return (
    <div
      name="portfolio"
      className=" from-black to-gray-800 w-full text-white md:h-screen portfolio"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, repo , title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className=" items-center justify-center">
              <p className="text-center mt-4 text-lg font-semibold">{title}</p>
              <div className="flex items-center justify-center gap-16">
                <button className=" m-4 duration-200 hover:scale-105" onClick={ () => window.open(link, '_blank')}>
                  Demo
                </button>
                <button className=" duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                  GitHub
                </button>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
