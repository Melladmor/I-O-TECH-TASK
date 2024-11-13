import React, { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import Input from "../FormInput.tsx/Input";
import { useDispatch, useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { setPosts } from "../../redux/postsSlice";
import { useAppSelector } from "../../hooks/reduxHooks";
import Modal from "../Modal";
import AddPost from "./AddPost";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};
const Search = ({ search, setSearch }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <div className="flex flex-nowrap gap-4 w-full">
        <Input
          id="search"
          placeholder="Search"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="button btn_primary"
          onClick={() => setIsOpen(!isOpen)}>
          New Post
        </button>
      </div>
      <Modal title="Add New Post" isOpen={isOpen} setIsOpen={setIsOpen}>
        <AddPost closeModal={closeModal} />
      </Modal>
    </div>
  );
};

export default Search;
