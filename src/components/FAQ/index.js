import React, { useState } from "react";
import { AccordionsWrapper, Desc, Input, Title, Wrapper } from "./styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Accordions } from "./components/accordions";
export const FAQ = () => {
  const items = [
    {
      title: "How do I get started?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
    {
      title: "Why should I use Open Roof?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
    {
      title: "How to restore your chat history?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
    {
      title: "Verifying your number",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
    {
      title: "How to manage your notifications?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
    {
      title: "How to change privacy settings?",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, nibh nibh ultricies nunc, quis ultricies nunc elit nec lorem.",
    },
  ];
  const [filteredList, setFilteredList] = new useState(items);
  const filterBySearch = (event) => {
    const query = event.target.value;
    let updatedList = [...items];
    updatedList = updatedList.filter(
      (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
    setFilteredList(updatedList);
  };
  return (
    <Wrapper>
      <Title>How can we help you?</Title>
      <Desc>
        Here are a few of the questions we get the most. If you don't see what's
        on your mind, reach out to us anytime on phone, chat, or email.
      </Desc>
      <Input
        onChange={filterBySearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        placeholder="Search your question"
      ></Input>
      <AccordionsWrapper>
        <Accordions items={filteredList} title="Asked By Users" />
        <Accordions items={filteredList} title="Asked By Home owners" />
      </AccordionsWrapper>
    </Wrapper>
  );
};
