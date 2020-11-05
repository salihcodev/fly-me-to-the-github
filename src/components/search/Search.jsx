import React from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { AppStateContext } from '../../context/Context';
import { BiError } from 'react-icons/bi';

// search comp.
const Search = () => {
  // store states:
  const [User, setUser] = React.useState('');

  // export from context:
  const { Requisites, Error, SearchGithubUser } = React.useContext(
    AppStateContext
  );

  // comp. methods:
  const Submission = (e) => {
    e.preventDefault();
    SearchGithubUser(User);
  };

  return (
    <SearchWrapper className="search-section border-gray-500 border border-solid rounded-md mb-16 py-4 px-6 ">
      <section className="search-user mb-4">
        {/* ERROR */}
        {Error.show && (
          <h4 className="no-user-error mb-4 text-yellow-600 bg-yellow-200 p-3 border border-solid border-yellow-400 rounded-md">
            <span className="text-yellow-500 inline text-2xl font-bold">
              <BiError />
            </span>{' '}
            <p className="inline mt-2 font-semibold">{Error.msg}</p>
          </h4>
        )}
        {Requisites > 0 && (
          <form className="form-control w-full flex" onSubmit={Submission}>
            <input
              type="text"
              name="search-user"
              id="search-user"
              placeholder="Type github username"
              value={User}
              onChange={(e) => setUser(e.target.value)}
              className="w-8 rounded-tl-md rounded-bl-md border border-gray-600 border-solid border-r-0 pl-2"
            />

            <button
              type="submit"
              className="flex-grow flex justify-around items-center text-gray-100 bg-teal-900 p-2 border border-gray-600 border-solid rounded-tr-md rounded-br-md border-l-0"
            >
              <span className="text">Search</span>
              <span className="icon text-2xl">
                <MdSearch />
              </span>
            </button>
          </form>
        )}
      </section>

      <section className="requisites">
        <div>
          <h4 className="statistic-req text-gray-700">
            Available requisites{' '}
            <span className="req-num font-bold">{Requisites}/60</span>
          </h4>
          <p className="spent-req text-gray-700">
            You spent{' '}
            <span
              className={`spent-req-num font-bold ${
                Requisites > 0 ? 'text-gray-700' : 'text-red-700'
              }`}
            >
              ({60 - Requisites})
            </span>{' '}
            requisites
          </p>
        </div>
      </section>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.section`
  form {
    input[type='text'] {
      flex-grow: 10;
    }
  }
`;
export default Search;
