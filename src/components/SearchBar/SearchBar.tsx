import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";

import { FC } from "react";
import { SearchBarProps } from "./SearchBarTypes";

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (values: { query: string }) => {
    if (!values.query.trim()) {
      toast.error("Enter a search query");
      return;
    }
    onSearch(values.query);
  };
  return (
    <header className={css.header}>
      <div>
        <Formik initialValues={{ query: "" }} onSubmit={handleSubmit}>
          <Form className={css.searchForm}>
            <Field
              className={css.searchInput}
              type="text"
              name="query"
              placeholder="Search images and photos"
              autoComplete="off"
              autoFocus
            ></Field>
            <button type="submit" className={css.searchBtn}>
              <FaSearch />
            </button>
          </Form>
        </Formik>
      </div>
    </header>
  );
};

export default SearchBar;