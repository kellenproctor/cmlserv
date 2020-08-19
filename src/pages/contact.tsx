import * as React from "react"
import { Header, Container, Segment, Icon } from "semantic-ui-react"
import { withLayout } from "../components/Layout"

const ContactPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2" icon textAlign="center">
          <Icon name="envelope" />
          <Header.Content>
            Contact
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          <strong>Commercial Services Limited</strong>
        </p>
        <p>701, 7/F, Tower 2, Silvercord</p>
        <p>30 Canton Road</p>
        <p>Tsim Sha Tsui</p>
        <p>Kowloon</p>
        <p>Hong Kong</p>
        <p>clientservice@cmlserv.com</p>
      </Segment>
    </Container>
  )
}

export default withLayout(ContactPage)