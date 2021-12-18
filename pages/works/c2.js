import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Python Command-and-control servers">
    <Container>
      <Title>
        Python Command-and-control servers <Badge>2021</Badge>
      </Title>
      <P>
        It’s very common that after successful exploitation an attacker would put an agent that maintains communication with a c2 server on the compromised system, and the reason for that is very simple, having an agent that provides persistency over large periods and almost all the capabilities an attacker would need to perform lateral movement and other post-exploitation actions is better than having a reverse shell for example. There are a lot of free open source post-exploitation toolsets that provide this kind of capability, like Metasploit, Empire and many others, and even if you only play CTF&apos;s it’s most likely that you have used one of those before.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python (67.8%), C++ (21.2%), Powershell (10.8%), Shell (0.2%)</span>
        </ListItem>
        <ListItem>
          <Meta>Github Project link</Meta>
          <Link href="https://github.com/Hackgodybj/C2_Server_Encrypted_-_Advance">
            Have a look at c2 server. <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Working Images</Meta>
          <Link href="https://github.com/Hackgodybj/C2_Server_Encrypted_-_Advance/blob/main/Demo">
            C2 server working Images.
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Windows Executables / powershell scripts.</Meta>
          <Link href="https://github.com/Hackgodybj/C2_Server_Encrypted_-_Advance/tree/main/lib/templates">
            Download winodws executables and powershell scripts.
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Working Demo</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://raw.githubusercontent.com/Hackgodybj/C2_Server_Encrypted_-_Advance/main/Demo/1.png">
            <Badge mr={2}>Command&apos;s</Badge>
            Command examples you can run in C2, You can view the command&apos;s using HELP command.
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/Hackgodybj/C2_Server_Encrypted_-_Advance/blob/main/requirements.txt">
            <Badge mr={2}>Requirements</Badge>
            Flask, netifaces, readline, pycrypto「The Required modules for running the C2」
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      

      <WorkImage src="/images/works/the-four-painters_01.jpg" alt="walknote" />
      <WorkImage src="/images/works/the-four-painters_02.jpg" alt="walknote" />
      <WorkImage src="/images/works/7.jpg" alt="walknote"/>
    </Container>
  </Layout>
)

export default Work
