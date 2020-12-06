import React from "react";
import axios from "axios";

const URL = "";

export const fetchMonthExpense = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
    },
  });

  return data;
};

export const fe = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
    },
  });

  return data;
};
