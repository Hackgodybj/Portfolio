import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Prototype_Pollution">
    <Container>
      <Title>
        Prototype Pollution <Badge>2019</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/proto.jpg" alt="icon" />
      </Center>
      <P>Prototype pollution is a vulnerability where an attacker is able to modify Object.prototype. Because nearly all objects in JavaScript are instances of Object, a typical object inherits properties (including methods) from Object.prototype. Changing Object.prototype can result in a wide range of issues, sometimes even resulting in remote code execution. </P>
      <P>which contains basic functionalities such as toString, constructor and hasOwnProperty.</P>
      <Heading as="h4" variant="section-title">Here’s a simple example of how prototype pollution works.</Heading>
      <P>Steps to reproduce the Prototype pollution attack</P>
      <UnorderedList my={4}>
      <ListItem>First make 2 or more empty objects just like shown below.</ListItem> 
      <Image src="/images/works/1.png" alt="icon" />

      <ListItem>Since they are empty objects so they don&apos;t have any actions&apos;s or commands defined.</ListItem> 
      <Image src="/images/works/2.png" alt="icon" />
      <ListItem>This is the Cruical point because this is the line that cause prototype pollution and overwrites all the  previous variables.</ListItem> 
      <ListItem>let&apos;s define &quot;Pwned&quot; as valus in Yash object&apos;s action using __proto___ function.</ListItem> 
      <Image src="/images/works/3.png" alt="icon" />
      </UnorderedList>
      <Heading as="h4" fontSize={18} my={6}>Why __Proto__?</Heading>
      <P>__proto__ is a way to inherit properties from an object in JavaScript. prototype is an accessor property that exposes the [[Prototype]] of the object through which it is accessed</P>
      
      <UnorderedList>
      <Heading as="h4" fontSize={18} my={6}>It overwrites the previous object&apos;s or variable&apos;s with &quot;Pwned&quot; as action set to Yash&apos;s object</Heading>
      <Image src="/images/works/4.png" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>This is how Prototype Pollution works in JavaScript..</Heading>

      <Heading as="h4" fontSize={18} my={6}>Key attack vectors for prototype pollution include user input fields and query parameters passed on to websites. If a site’s JavaScript code iterates through query parameters without sanitizing them, then it might end up running commands that change the object prototype.</Heading>
      <Heading as="h4" fontSize={18} my={6}>Prototype Pollution attack vector&apos;s:</Heading>
      <ListItem>Denial of Service – by triggering JavaScript exceptions</ListItem>
      <ListItem>Remote Code Execution – by tampering with the application source code to force the code path that the attacker injects</ListItem>
      <ListItem>XSS (Cross site scripting).</ListItem>
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Gadgets</Meta>
          <span>Wappalyzer-Plugin, Fingerprint.js</span>
        </ListItem>
        <ListItem>
          <Meta>Spinning up the Remote code execution(RCE)</Meta>
          <Link href="https://blog.p6.is/AST-Injection/">
            AST Injection, Prototype Pollution to RCE
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}><Center>Prototype pollution attack in NodeJS application</Center></Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://book.hacktricks.xyz/pentesting-web/deserialization/nodejs-proto-prototype-pollution#rce-abusing-environmental-variables">
            <Badge mr={2}>Hacktricks article</Badge>
            Basically, if a new process using node is spawned and you are able to poison the environmental variables it&apos;s possible to execute arbitrary commands.
It&apos;s also possible to poison environmental variables y setting the env property in some object inside JS.{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          Prevention&nbsp;
          <Link
            target="_blank"
            href="http://www.vector.co.jp/soft/cmt/win95/art/se350576.html"
          >
            from Prototype Pollution
          </Link>
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>Object.Freeze</Badge>
          <span>
           Object.freeze will mitigate almost all cases. Freezing an Object prevents new Prototypes from being added to it.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Schema validation</Badge>
          <span>
           Using schema validation to ensure that the JSON data contains the expected attributes. This will remove __proto__ if it appears in the JSON. 
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Map primitive</Badge>
          <span>
            Using map primitive, which was introduced in the EcmaScript 6 standard, and is now well-supported in the NodeJS environment.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>Object.create(null)</Badge>
          <span>
            Objects created using the Object.create(null) function won&apos;t have the__proto__ attribute.
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>recursive merge function&apos;s</Badge>
          <span>
             pay attention when using recursive merge functions, since they are more prone to Prototype Pollution vulnerabilities than other functions. 
          </span>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/proto_01.png" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
