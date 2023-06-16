import React, { useState } from "react";
import { AccordionsWrapper, Input, Title, Wrapper } from "./styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Accordions } from "./components/accordions";
import mulk_sahibi from "../../assets/FAQs/mulk_sahibi.json";
import yatirimci from "../../assets/FAQs/yatirimci.json";
import Minisearch from "minisearch";

export const FAQ = () => {
  const minisearch = new Minisearch({
    fields: ['question', "answer"],
    storeFields: ['question', 'answer', 'category', 'id'],
    searchOptions: {
      boost: { question: 2, answer: 1 },
      fuzzy: 0.2,
      prefix: true,
    }
  })

  let qa = mulk_sahibi.map((item, i) => ({ ...item, category: 'mulk', id: i }))
  const offset = qa.length
  qa.push(...yatirimci.map((item, i) => ({ ...item, category: 'yatirim', id: i + offset })))

  minisearch.addAll(qa)

  const [results, setResults] = useState(qa)

  const search = (event) => {
    const query = event.target.value.trim();
    if (query === '') {
      setResults(qa)
    } else {
      const res = minisearch.search(query)
      console.log(res)
      setResults(res)
    }
    setExpanded(false)
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  return (
    <Wrapper>
      <Title>Aklınızda soru kalmasın</Title>
      {/* <Desc>
        Here are a few of the questions we get the most. If you don't see what's
        on your mind, reach out to us anytime on phone, chat, or email.
      </Desc> */}
      <Input
        onChange={search}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      // placeholder="Sorunuz"
      ></Input>
      <AccordionsWrapper>
        <Accordions expanded={expanded} handleChange={handleChange} items={results.filter(result => result.category === "mulk")} title="Mülk Sahibi" />
        <Accordions expanded={expanded} handleChange={handleChange} items={results.filter(result => result.category === "yatirim")} title="Yatırımcı" />
      </AccordionsWrapper>
    </Wrapper>
  );
};
