import React from "react";
import avatar from "../../assets/avatar.png";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
          <UserInfo nome="Person 1" image={avatar} percentual={25} />
          <UserInfo nome="Person 2" image={avatar} percentual={65} />
          <UserInfo nome="Person 3" image={avatar} percentual={45} />
          <UserInfo nome="Person 4" image={avatar} percentual={72} />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
