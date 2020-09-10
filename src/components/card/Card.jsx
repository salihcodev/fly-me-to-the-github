import React from "react";
import { AppStateContext } from "../../context/Context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

const Card = () => {
  const { User } = React.useContext(AppStateContext);
  const {
    login,
    avatar_url,
    html_url,
    name,
    company,
    blog,
    location,
    bio,
    twitter_username,
  } = User;

  return (
    <section className="user-profile user-section">
      <nav className="card-header">
        <div className="user-img user-block">
          <div className="user-img-cover">
            <img src={avatar_url} alt={name} />
          </div>
        </div>
        <div className="user-basic-info user-block">
          <div className="flex-shield">
            <h3 className="user-name">{name}</h3>
            <span className="user-userName">
              <a href={html_url} className="user-profile-link">
                @{login}
              </a>
            </span>
          </div>
        </div>
        <div className="follow-user-container user-block">
          <button className="follow-user">
            <a href={html_url}>Follow {name && name.split(" ")[0]}</a>
          </button>
        </div>
      </nav>

      <div className="about-user">
        <p className="bio">{bio}</p>
        <ul className="user-more-info">
          <li className="user-info location">
            <span className="icon">{MdLocationOn()} </span>
            {location}
          </li>
          <li className="user-info company">
            <span className="icon">{MdBusiness()} </span>
            {company}
          </li>
          <li className="user-info blog">
            <span className="icon">{MdLink()} </span>
            <a href={blog}>{blog}</a>
          </li>
          <li className="user-info twitter-username">
            <span className="icon">{AiOutlineTwitter()}</span>@
            {twitter_username}
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Card;

// import necessary mocks data from context:
