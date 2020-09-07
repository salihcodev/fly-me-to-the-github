import React from "react";
import styled from "styled-components";
import { MdSearch } from "react-icons/md";
import { AppStateContext } from "../../context/Context";

// search comp.
const Search = () => {
  // store states:
  const [User, setUser] = React.useState("");

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
    <SearchWrapper>
      <section className="search-user">
        {/* ERROR */}
        {Error.show && <p className="err-msg">{Error.msg}</p>}
        <form className="form-control" onSubmit={Submission}>
          <input
            type="text"
            name="search-user"
            id="search-user"
            placeholder="Type github username"
            value={User}
            onChange={(e) => setUser(e.target.value)}
          />
          {Requisites > 0 && (
            <button type="submit">
              <MdSearch /> Search
            </button>
          )}
        </form>
      </section>

      <section className="requisites">
        <p>
          <h4 className="statistic-req">requisites {Requisites}/60</h4>
          <span className="spent-req">
            you spent ({60 - Requisites}) requisites
          </span>
        </p>
      </section>
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div``;
export default Search;
