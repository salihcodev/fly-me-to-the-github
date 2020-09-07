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
    <CardWrapper className="user-profile user-section">
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

      <section className="about-user">
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
      </section>
    </CardWrapper>
  );
};
const CardWrapper = styled.main`
  background: #fff;
  padding: 2rem 0;

  @media (max-width: 800px) {
    .user-block {
      min-width: 27vw !important;
    }
  }

  nav.card-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .user-img {
      .user-img-cover {
        width: 120px;
        border-radius: 50%;
        border: 2px solid #ddd;

        img {
          border-radius: 50%;
        }
      }
    }
    .user-basic-info {
      display: block;
      padding-top: 20px;
      justify-content: end !important;

      h3 {
        margin: 0;
        padding: 0;
      }

      a {
        color: #196775;
      }
    }
    .follow-user-container {
      button {
        padding: 0.8rem 0.6rem;
        border: none;
        background: #196775;
        text-transform: uppercase;

        a {
          color: #fff;
        }
      }
    }

    .user-block {
      display: flex;
      justify-content: center;
      min-width: 13rem;

      flex-shield {
        display: flex;
      }
    }
  }

  .about-user {
    padding: 2rem 3rem;

    ul {
      li {
        display: flex;
        align-items: center;

        .icon {
          font-size: 18px;
          display: block;
          width: 30px;
          height: 25px;
        }
      }

      .blog {
        .icon {
          font-size: 20px !important;
          margin-top: 3px;
        }
      }

      .twitter-username {
        .icon {
          margin-top: 3px;
        }
      }
    }

    .user-info.blog {
      a {
        color: #333;
        text-decoration: underline;
      }
    }
  }
`;
export default Card;

// import necessary mocks data from context:
