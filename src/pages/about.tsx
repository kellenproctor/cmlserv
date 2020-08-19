import * as React from "react"
import { Header, Container, Segment, Icon } from "semantic-ui-react"
import {withLayout} from "../components/Layout"

const AboutPage = () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2" icon textAlign="center" >
          <Icon name="universal access" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>
      <Segment vertical>
        <p>
          Commercial Services Limited ("CSL") provides structural advice,
          transaction advisory, treasury management, foreign exchange,
          remittance, custody, and escrow functions to small and mid-cap 
          businesses, family offices, emerging global business owners, institutions, 
          and private funds in Asia and Europe.
        </p>
        <p>
          Commercial Services is uniquely positioned via its established 
          Asia based relationships to provide operating support services, a 
          transactional bridge, and custody platform across Asia and Europe.
        </p>
        <p>
          The hallmark of Commercial Services is a client focus based on being... 
        </p>
        <p><em><strong>Involved, Connected, and Responsive</strong></em></p>
      </Segment>
    </Container>
  )
}

export default withLayout(AboutPage)
