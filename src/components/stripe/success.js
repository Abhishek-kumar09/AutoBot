import { Button, Container, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Success() {
  const history = useHistory();

  return (
    <Container>
      <Typography variant="h6">Your Last Payment Was Successfull</Typography>
      <Button
        className="block round accent"
        onClick={() => {
          history.push("/");
        }}
      >
        Go Back to Home
      </Button>
    </Container>
  );
}
