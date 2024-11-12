import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Input from "../FormInput.tsx/Input";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { setPosts } from "../../redux/postsSlice";
import { useAppSelector } from "../../hooks/reduxHooks";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};
const Search = ({ search, setSearch }: Props) => {
  return (
    <div>
      <Input
        id="search"
        label="Search"
        placeholder="Search"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
