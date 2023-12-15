import style from "./style.module.css";

export default function TVShowDetail({ tvShow }) {
  return (
    <div>
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating}>{tvShow.vote_average / 2}</div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}
