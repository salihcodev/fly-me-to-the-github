import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaRegClipboard } from 'react-icons/fa';
import Header from '../../components/header/Header';
import LoginCover from '../../assets/login-cover.svg';
import { ImClipboard } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';

const Login = () => {
  const clipAlertWindow = React.useRef(null);
  const [ClipAlert, setClipAlert] = React.useState({
    msg: `default error`,
    show: false,
  });
  const toggleError = (msg, show) => setClipAlert({ msg, show });
  const { loginWithRedirect } = useAuth0();

  const imo = `>3`;
  return (
    <LoginPageWrapper
      className="h-full"
      style={{ background: `url(${LoginCover}) 0%/contain no-repeat` }}
    >
      <Header />
      <div className="note flex items-center justify-center">
        <p className="note-txt py-6 px-4 bg-white rounded-md text-gray-800 mt-4 mb-8 text-center">
          If you have trust issues to login with your mail, You can easily use
          my fake email and password{' '}
          <strong>-by clicking clipboard icon-</strong> which i'm using it to
          test my applications. Have a nice day {imo}
        </p>
      </div>
      <div className="logging-container m-auto">
        <section className="login-gate mb-16 flex items-center justify-center">
          <div className="w-screen">
            {/* clip alert */}
            <CopyError>
              {ClipAlert.show && (
                <h4
                  ref={clipAlertWindow}
                  className="clip-alert relative mb-4 text-green-500 bg-green-200 p-3 border border-solid border-green-400 rounded-md"
                >
                  <span
                    className="alert-closer absolute flex justify-center items-center w-6 h-6 text-green-500 bg-gray-100 rounded-full text-lg bg-opacity-50 cursor-pointer"
                    onClick={() =>
                      (clipAlertWindow.current.style.display = `none`)
                    }
                  >
                    <IoMdClose />
                  </span>
                  <span className="text-green-500 inline text-2xl font-bold">
                    <ImClipboard />
                  </span>{' '}
                  <p className="inline mt-2 font-semibold">{ClipAlert.msg}</p>
                </h4>
              )}
            </CopyError>
            <p
              className="email relative w-full my-2 pr-8 pl-4 py-4 bg-gray-200 rounded-sm border 
              border-solid border-gray-400"
            >
              <span id="mail-to-copy">codev.dev.env@gmail.com</span>
              <span
                className="to-copy  absolute cursor-pointer"
                onClick={() => {
                  const textToCopy = document.getElementById('mail-to-copy');
                  let range = document.createRange();
                  let selection = window.getSelection();
                  range.selectNodeContents(textToCopy);

                  selection.removeAllRanges();
                  selection.addRange(range);

                  try {
                    let isCopied = document.execCommand('copy');
                    toggleError(
                      `Email has been successfully copied to clipboard, You can use it in the nest step.`,
                      isCopied
                    );
                  } catch (err) {
                    toggleError(
                      `There is an error happened while coping you text. SADNESS`,
                      err
                    );
                  }
                }}
              >
                <FaRegClipboard />
              </span>
            </p>

            <p className="password w-full  my-2 px-2 pl-4  py-4 bg-gray-200 rounded-sm border border-solid border-gray-400">
              aA12345678
            </p>
          </div>
        </section>
        <section className="logging flex items-start justify-center h-40">
          <button
            onClick={loginWithRedirect}
            title="Fly on github"
            className="logging-btn w-screen border-2 border-gray-300 text-white py-4 px-6 flex justify-center font-bold bg-teal-800 rounded-md border-teal-900"
          >
            <span className="text">Login / Sign up</span>
            <span className="icon pl-4 pt-1">{FaLongArrowAltRight()} </span>
          </button>
        </section>
      </div>
    </LoginPageWrapper>
  );
};

export default Login;

const LoginPageWrapper = styled.main`
  padding: 0 1rem 3rem;
  transition: all ease-in-out 0.5s;

  .logging-btn {
    transition: all ease-in-out 0.3s;
    &:hover {
      transform: scale(1.06);
    }
  }

  .note-txt {
    max-width: 40rem;
  }

  .alert-closer {
    top: 0.5rem;
    right: 0.5rem;
  }

  .logging-container {
    width: 30rem;

    .to-copy {
      top: 5px;
      right: 3px;
    }
  }
`;

const CopyError = styled.div``;
