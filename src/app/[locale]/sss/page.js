"use client";
import React, { useState } from "react";
import { AccordionsWrapper, Input, Title, Wrapper } from "./styles";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Accordions } from "./components/accordions";
import mulk_sahibi from "../../../../public/assets/FAQs/mulk_sahibi.json";
import yatirimci from "../../../../public/assets/FAQs/yatirimci.json";
import Minisearch from "minisearch";
import { useParams } from "next/navigation";
import {useTranslations} from 'next-intl';


export default function FAQ() {
  const t = useTranslations('faq');
  const params = useParams()

  const minisearch = new Minisearch({
    fields: ["question", "answer"],
    storeFields: ["question", "answer", "category", "id"],
    searchOptions: {
      boost: { question: 2, answer: 1 },
      fuzzy: 0.2,
      prefix: true,
    },
  });
  
let qa = [];

const offset = qa.length;
if (params.locale === "en") {
  qa = [
    ...mulk_sahibi.en.map((item, i) => ({
      ...item,
      category: "mulk",
      id: `mulk_${i}`,
    })),
    ...yatirimci.en.map((item, i) => ({
      ...item,
      category: "yatirim",
      id: i + offset,
    })),
  ];
} else {
  qa.push(
    ...yatirimci.tr.map((item, i) => ({
      ...item,
      category: "yatirim",
      id: i + offset + yatirimci.en.length,
    }))
  );
  qa.push(
        ...mulk_sahibi.tr.map((item, i) => ({
          ...item,
          category: "mulk",
          id: `mulk_${i + offset}`
        }))
         );
}
  minisearch.addAll(qa);

  const [results, setResults] = useState(qa);

  const search = (event) => {
    const query = event.target.value.trim();
    if (query === "") {
      setResults(qa);
    } else {
      const res = minisearch.search(query);
      console.log(res);
      setResults(res);
    }
    setExpanded(false);
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    console.log(panel);
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Wrapper>
      <Title>{t('title')}</Title>
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
        <Accordions
          expanded={expanded}
          handleChange={handleChange}
          items={results.filter((result) => result.category === "mulk")}
          title={t("titleonefaq")}
        />
        <Accordions
          expanded={expanded}
          handleChange={handleChange}
          items={results.filter((result) => result.category === "yatirim")}
          title={t("titletwofaq")}
        />
      </AccordionsWrapper>
    </Wrapper>
  );
}
