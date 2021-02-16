import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import './header.scss'

export default function Header() {
  return (
    <div id="header">
      <h3>Auto Bot</h3>
      <section className="button-group">
        <button className="block round">Buy</button>
        <button className="block round">Auction</button>
        <button className="block round">Sell</button>
        <button className="block round">Today&apos;s Hits</button>
      </section>
      <Grid container spacing={1} alignItems="flex-end" className="search">
        <Grid item style={{ width: "90%" }}>
          <TextField
            id="input-with-icon-grid"
            label="Which database are you looking for?"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item>
          <SearchIcon />
        </Grid>
      </Grid>
      <div className="auth-btn">
        <button className="block round">Login</button>
        <button className="block round accent">Sign up</button>
      </div>
    </div>
  );
}
