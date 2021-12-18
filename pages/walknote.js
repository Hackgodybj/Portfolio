import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="HackTheBox">
    <Container>
      <Title>
        HackTheBox <Badge>2020 - Till Now</Badge>
      </Title>
      <P>
        Hack The Box is an online platform allowing you to test your penetration testing skills and exchange ideas and methodologies with other members of similar interests. It contains several challenges that are constantly updated.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Virtual Machine, Cloud based Parrot OS</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://www.hackthebox.com/blog">
            HackThebox offical Blogpost{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>My Achievement&apos;s</Meta>
          <span>(+ 50) Boxes, 2 Fortress, and (+ 30) HTB Challenges</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Hackthebox offical Site</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://ctf.hackthebox.com/">
            <Badge mr={2}>HTB University CTF</Badge>
            Team Name: Boot2Root
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://app.hackthebox.com/profile/badges/480436">
            <Badge mr={2}>Hackthebox Fortress</Badge>
            Akerva and Jet fortress completion badges.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://help.hackthebox.com/en/articles/5209118-gs-how-to-play-endgames">
            <Badge mr={2}>HackThebox Endgame Manual</Badge>
            Hackthebox Endgame basic manual
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>

        <ListItem>
          <Badge mr={2}>Hackthebox Battleground</Badge>
          <Link href="https://app.hackthebox.com/battlegrounds/lobby">
            Invite me here to play in hackthebox battleground!
          </Link>
          <ExternalLinkIcon mx="2px" />
        </ListItem>
      </UnorderedList>

      <SimpleGrid columns={2} gap={3}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
