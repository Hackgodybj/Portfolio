import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="RAT">
    <Container>
      <Title>
        Remote Access Trojan (RAT) <Badge>2021</Badge>
      </Title>
      <P>A remote access Trojan (RAT) is a malware program that includes a back door for administrative control over the target computer. RATs are usually downloaded invisibly with a user-requested program -- such as a game -- or sent as an email attachment.</P>
      <P>
        It&apos;s different because it uses the .NET Sockets
          (Web Socket is an advanced technology that makes it possible to establish an interactive connection between server and client browser&apos;s. With this technology or API, we can send message to a server from client and also can receive an event driven response without having any TCP or HTTP protocol use.)
      </P>
      <P>
        Client-server binaries and source-code for controlling a remote machine behind a NAT with a command-line shell in Windows. Although the core provides support for communication with multiple RATs, the command-line interface used has limited capabilities distinguishing each one. The RAT process executable does not hide itself from taskbar or task manager as it was developed for educational purposes only. Please do not use for any malicious purposes.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>C# (sharp)</span>
        </ListItem>
        <ListItem>
          <Meta>Project</Meta>
          <Link href="https://github.com/Hackgodybj/Remote-Access-Trojan">
            Source code and a set of 2 binaries that are packed with the help of ILMerge.{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/contents/blog-financial-goal.png" alt="mode.tokyo" />
            <WorkImage src="/images/contents/rat.png" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
