import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord
} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hola, I&apos;m Yash Bhardwaj by profession I&apos;m CyberSecurity Enthusiast !!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            HackGodybj
          </Heading>
          <p>Cybersec / Infosec (  Developer / Exploitation framework tools / Reverse Engineering / Binary Exploitation )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/hack.jpeg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          HackGodybj is my alias for cybersec or the internet my real name is Yash Bhardwaj and I am from India.
          passion for testing systems and creating Exploitation framework's. 
          I love Python and React-JS. Recently, I built a C2-server and Symbian framework using my skills.
          {' '}
          <NextLink href="/works/symbian">
            <Link>Symbian</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Delhi, India.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed the RedHat certified Engineer in the mastery of linux from Shriram millienium school of computer.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Started exploring the outer offsec world ( Testing skills in the outer world such as Bug bounty, cracking online boxes on HacktheBox and TryHackME )
        </BioSection>
        <BioSection>
          <BioYear>2020 to present</BioYear>
          Currently preparing for OSCP (Offensive security certified professional)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Internet Surfing, Music,{' '}
          <Link href="https://app.hackthebox.com/" target="_blank">
            HacktheBox
          </Link>
          , Playing at HackerOne,{' '}
          <Link href="https://tryhackme.com" target="_blank">
            TryHackME
          </Link>
          , Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Find me on the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/hackgodybj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @HackGodybj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/hackgodybj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @HackGodybj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/hackgodybj" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @hackgodybj
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoDiscord} />}
              >
                Discord
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://app.hackthebox.com/profile/480436"
            title="HacktheBox"
            thumbnail={thumbYouTube}
          >
            My hackthebox profile page
          </GridItem>
          <GridItem
            href="https://tryhackme.com/p/HackGodybj"
            title="TryHackme"
            thumbnail={thumbInkdrop}
          >
            My tryhackme profile page
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
