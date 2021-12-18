import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Symbian">
    <Container>
      <Title>
        Symbian <Badge>2020</Badge>
      </Title>
      <P>
         Symbian is the part of Bash/Shell Automation Framework used in Penetration Testing....!!
          Bash scripting is writing CLI commands in a file and executing them the same way one would execute a program written in a high level language, such as python. Most system administrators use bash to automate tasks and make their job easier by not repeating common jobs everyday.
      </P>
      <P>
        Symbian helps you to make tasks such as reverse shell, adding a cronjob, creating a persistant foothold uding SSH-key pairs, etc, using bash scripting automation techniques,
        This Framework is in developement phase.
      </P>
      <UnorderedList my={4}>
        <ListItem>Adding a CronJob</ListItem>
        <ListItem>Download / Upload files from victim using netcat, wget.</ListItem>
        <ListItem>Linux Enumeration.</ListItem>
        <ListItem>Persistance using SSH Key-Pairs.</ListItem>
        <ListItem>Reverse shell using Python, bash, netcat.</ListItem>
        <ListItem>Spawning a TTY shell.</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Linux / any unix kernel</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Bash / Shell</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Hackgodybj/Symbian">
            Symbian/Github <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Some examples of Bash automation</Meta>
          <Link href="https://towardsdatascience.com/8-bash-script-tips-for-automation-projects-2c63d8716f9a">
            Examples of Bash automation scripts{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        
      </List>

      <Box align="center" my={6}>
        <Link
          className="link-appstore"
          href="https://github.com/Hackgodybj/Symbian"
          target="_blank"
        >
          <Image
            maxW={240}
            src="/images/works/appstore.png"
            className="image-appstore"
            alt="Download on App Store"
          />
        </Link>
      </Box>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <SimpleGrid columns={2} gap={2}>

        
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
