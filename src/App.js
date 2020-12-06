import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ItemCard from "./components/ItemCard";
import { Grid, Typography } from "@material-ui/core";
import NavBar from "./components/NavBar";
import BalanceCard from "./components/BalanceCard";
import TransactionsTopBase from "./components/TransactionsTopBase";

function App() {
  return (
    <>
      <TransactionsTopBase />
      <div>
        <ItemCard />

        <ItemCard />

        <ItemCard />

        <ItemCard />

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      <NavBar />
    </>
  );
}

export default App;
