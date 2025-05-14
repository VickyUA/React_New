import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.cardwrapper}>
      <div className={css.imagewrapper}>
        <div className={css.imagewrap}>
          <img src={image} alt="User avatar" />
        </div>

        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
