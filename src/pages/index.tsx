import * as React from "react";
import { Link } from "gatsby";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

const IndexPage = (props: LayoutProps) =>
  <div>
    {/* Master head */}
    <Segment vertical textAlign="center" className="masthead" id="landing">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems}
      />
      <Container text>
        <Header as="h1">Commercial Services</Header>
        <Header as="h2">Involved - Connected - Responsive</Header>
      </Container>
    </Segment>

    {/* FX */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Foreign Exchange</Header>
            <p>
              Currency conversion services at market rates with reasonable 
              fees
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right" textAlign="center">
            <Icon name="dollar" size="massive" />
            <Icon name="arrow right" size="huge" />
            <Icon name="euro" size="massive" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Remittance */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Remittances</Header>
            <p>
              Payment and remittance services
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right" textAlign="center">
            <Icon name="send" size="massive" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Escrow */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Header>Escrow</Header>
            <p>
              Secure account structure for transfer of high value digital assets
            </p>
          </Grid.Column>
          <Grid.Column width="6" floated="right" textAlign="center">
            <Icon name="envelope" size="massive" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid textAlign="center" relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
            </Header>
            <p>
              Let us know how we can help you achieve your goals!
            </p>
            <Button as={Link} to="/contact">Get in touch!</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>;

export default withLayout(IndexPage);
