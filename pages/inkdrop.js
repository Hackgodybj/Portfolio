import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="TryHackMe">
    <Container>
      <Title>
        TryHackme <Badge>2020 - Till now</Badge>
      </Title>
      <P>
        TryHackMe is an online platform that teaches cyber security through short, gamified real-world labs. We have content for both complete beginners and seasoned hackers, encorporating guides and challenges to cater for different learning styles.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://tryhackme.com/">
            https://tryhackme.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Platform Independent / cloud supported Kali Box</span>
        </ListItem>
        <ListItem>
          <Meta>My Achievement&apos;s</Meta>
          <span>King of the hill (2 times), Advent of cyber, +30 boxes solved</span>
        </ListItem>
        <ListItem>
          <Meta>King of the hill</Meta>
          <Link href="https://tryhackme.com/HackGodybj/badges/koth-game">
            Two games in a row (H1:hard, hackers) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
