import React from "react";
import { AppStateContext } from "../../context/Context";
import styled from "styled-components";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

// setup user data template to spread out all other data about the user.
const UserdataTemp = ({ icon, text }) => (
  <li className="flex items-center">
    <span className="icon text-xl text-gray-700 mr-3">{icon}</span>
    <span className="user-data text-base text-gray-700">{text}</span>
  </li>
);

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

  const UserData = [
    {
      icon: <MdBusiness />,
      uData: company,
    },
    {
      icon: <MdLocationOn />,
      uData: location,
    },
    {
      icon: <MdLink />,
      uData: blog,
    },
    {
      icon: <AiOutlineTwitter />,
      uData: twitter_username,
    },
  ];

  return (
    <UserProfile className="user-profile border border-solid rounded-lg shadow-lg p-4">
      <section className="card-header">
        {/* user img */}
        <div className="user-img flex justify-center -mt-24 ">
          <div className="user-img-cover w-40 rounded-full border-4 border-solid p-1 bg-gray-600">
            <img
              src={avatar_url}
              alt={name}
              className="rounded-full w-full h-full"
            />
          </div>
        </div>

        {/* user basic info */}
        <div className="user-basic-info text-center mb-10 mt-6">
          <h3 className="user-name font-bold text-gray-800 text-2xl">{name}</h3>
          <span className="user-userName text-teal-900 bg-gray-300 rounded-full py-1 px-2 text-sm">
            <a href={html_url} className="user-profile-link">
              @{login}
            </a>
          </span>
        </div>
      </section>

      {/* user data */}
      <div className="about-data mb-12">
        <p className="bio text-gray-600 mb-4">{bio}</p>
        <ul className="user-more-info">
          {UserData.map(({ icon, uData }) => (
            <UserdataTemp icon={icon} text={uData} />
          ))}
        </ul>
      </div>

      {/* follower this user */}
      <div className="follow-user-container user-block">
        <button className="follow-user block text-center font-bold text-lg w-full border-solid border-2 border-teal-900 bg-teal-900 text-gray-100 py-2">
          <a href={html_url}>Follow {name && name.split(" ")[0]}</a>
        </button>
      </div>
    </UserProfile>
  );
};
export default Card;

const UserProfile = styled.section`
    /* height: 30rem; */
  border-color: #dedede;

  .user-img {
    .user-img-cover {
      border-color: #e7e9ea;
      box-shadow: 3px 0 21px -10px #777;
    }
  }
`;
