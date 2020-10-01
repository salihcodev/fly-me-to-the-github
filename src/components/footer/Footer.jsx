import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import { GiCoffeeCup } from 'react-icons/gi';
import { FiAtSign } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterWrapper className="px-10 mt-32 h-20  items-baseline ">
      <main className="footer-container flex  border-t solid border-gray-400 pt-4">
        {/* author section */}
        <div className="author flex-grow text-left">
          <p className="author-phrase  text-gray-700 text-sm flex items-center">
            Made with
            <span className="mx-1">
              <AiFillHeart />
            </span>
            and
            <span className="mx-1">
              <GiCoffeeCup />
            </span>
            Menufia, Egypt by
            <a
              href="https://twitter.com/salihcodev"
              target="_blank"
              className="text-teal-800 ml-1 font-semibold"
            >
              Ahmed Salih
            </a>
          </p>
        </div>

        {/* copyrights section */}
        <div className="copyrights flex-grow text-right">
          <p className="copyrights-policy text-gray-700 text-sm">
            {/* current year */}
            <span className="current-year mr-1">
              @{new Date().getFullYear()}
            </span>
            Allrights reserved to
            <a
              href="https://github.com/salihcodev"
              target="_blank"
              className="text-teal-800 ml-1 hover:border-gray-400 border-b"
            >
              @salihcodev
            </a>
          </p>
        </div>
      </main>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer``;
