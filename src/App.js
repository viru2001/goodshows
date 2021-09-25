import { useState } from "react";
import "./styles.css";
const moviesData = {
  Comedy: [
    {
      name: "Ted Lasso",
      description:
        "Follows an American football coach Ted Lasso who heads to the U.K. to manage a struggling London football team in the top flight of English football.",
      rating: "imdb 8.8/10"
    },
    {
      name: " Only Murders in the Building ",
      description:
        "Three strangers who share an obsession with true crime suddenly find themselves caught up in one. ",
      rating: "imdb 8.3/10"
    },
    {
      name: "Brooklyn Nine-Nine ",
      description:
        "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
      rating: "imdb 8.4/10"
    },
    {
      name: " Good Girls",
      description:
        "Three suburban mothers suddenly find themselves in desperate circumstances and decide to stop playing it safe and risk everything to take their power back.",
      rating: "imdb 7.8/10"
    }
  ],

  Romance: [
    {
      name: "Downton Abbey",
      description:
        "A chronicle of the lives of the British aristocratic Crawley family and their servants in the early twentieth century.",
      rating: "imdb 7.5/10"
    },
    {
      name: "Friends",
      description:
        "Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
      rating: "imdb 8.8/10"
    },
    {
      name: "You ",
      description:
        "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
      rating: "imdb 7.7/10"
    },
    {
      name: "Vikings",
      description:
        "Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean",
      rating: "imdb 8.5/10"
    }
  ],

  Drama: [
    {
      name: "Lucifer",
      description:
        "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
      rating: "imdb 8.1/10"
    },
    {
      name: "Dune",
      description:
        "Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      rating: "imdb 8.5/10"
    },
    {
      name: "Ted Lasso",
      description:
        "Follows an American football coach Ted Lasso who heads to the U.K. to manage a struggling London football team in the top flight of English football.",
      rating: "imdb 8.8/10"
    },
    {
      name: "The Walking Dead ",
      description:
        "Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
      rating: "imdb 8.2/10"
    }
  ],

  Thriller: [
    {
      name: "Malignant",
      description:
        "Madison is paralyzed by shocking visions of grisly murders, and her torment worsens as she discovers that these waking dreams are in fact terrifying realities.",
      rating: "imdb 6.3/10"
    },
    {
      name: "Clickbait ",
      description:
        "When family man, Nick Brewer, is abducted in a crime with a sinister online twist, those closest to him race to uncover who is behind it and why.",
      rating: "imdb 7.3/10"
    },
    {
      name: "Money Heist ",
      description:
        "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
      rating: "imdb 8.3/10"
    },
    {
      name: "Only Murders in the Building ",
      description:
        "Three strangers who share an obsession with true crime suddenly find themselves caught up in one.",
      rating: "imdb 8.3/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState("Comedy");

  const handleGenreBtnClick = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <>
      <nav>
        <div className="heading-center">Good Movies and TV Shows</div>
      </nav>

      <div className="container">
        <h1 className="title">What to Watch ?</h1>

        <div className="btns">
          {Object.keys(moviesData).map((genre, index) => {
            return (
              <button
                key={index}
                onClick={() => handleGenreBtnClick(genre)}
                className="btn"
              >
                {genre}
              </button>
            );
          })}
        </div>
      </div>

      <div className="info">
        <ul className="list-unoredered">
          {moviesData[selectedGenre].map((movie, index) => {
            return (
              <li key={index} className="list-element">
                <div className="movie-name">{movie.name}</div>
                <p>{movie.description}</p>
                <div className="movie-rating">
                  <strong>{movie.rating}</strong>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
