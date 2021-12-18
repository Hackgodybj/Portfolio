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
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Python Pickle">
    <Container>
      <Title>
        Python Pickle Exploitation <Badge>2019</Badge>
      </Title>
      <P>
        In a recent challenge I needed to get access to a system by exploiting the way Python deserializes data using the pickle module. In this article I want to give a quick introduction of how to pickle/unpickle data, highlight the issues that can arise when your program deals with data from untrusted sources and “dump” my own notes.
      </P>
      <Heading as="h4" fontSize={16} my={6}>What is pickle?</Heading>      

      <P>In Python, the pickle module lets you serialize and deserialize data. Essentially, this means that you can convert a Python object into a stream of bytes and then reconstruct it (including the object’s internal structure) later in a different process or environment by loading that stream of bytes.
      </P>
      <Heading as="h4" fontSize={16} my={6}>How to dump and load?</Heading>
      <P>In Python you can serialize objects by using pickle.dumps():</P>
       <Heading as="h4" variant="section-title">Example:</Heading>
        <P>import pickle</P>
        <P>pickle.dumps([&apos;hackgod&apos;, &apos;python&apos;, 78, 100])</P>
        <Heading as="h4" variant="section-title">The pickled representation we’re getting back from dumps will look like this:</Heading>
        <P>b&apos;\x80\x04\x95\x1c\x00\x00\x00\x00\x00\x00\x00]\x94(\x8c\x07hackgod\x94\x8c\x06python\x94KNKde.&apos;</P>
        <Heading as="h4" variant="section-title">Reading the serialized data back in::</Heading>
        <P>import pickle</P>
        <P>pickle.loads(b&apos;\x80\x04\x95\x1c\x00\x00\x00\x00\x00\x00\x00]\x94(\x8c\x07hackgod\x94\x8c\x06python\x94KNKde.&apos;)</P>
        <Heading as="h4" variant="section-title">our list object...</Heading>
        <P>[&apos;hackgod&apos;, &apos;python&apos;, 78, 100]</P>
      <Heading as="h4" fontSize={16} my={6}>Theory:</Heading>
      <P>What is actually happening behind the scenes is that the byte-stream created by dumps contains opcodes that are then one-by-one executed as soon as we load the pickle back in. If you are curious how the instructions in this pickle look like, you can use pickletools to create a disassembly: </P>      
        <Heading as="h4" variant="section-title">Code representation:</Heading>
        <P>&gt;&gt;&gt; import pickle</P>
        <P>&gt;&gt;&gt; data = pickle.dumps([&apos;hackgod&apos;, &apos;python&apos;, 78, 100])</P>
        <P>&gt;&gt;&gt; import pickletools</P>
        <P>&gt;&gt;&gt; pickletools.dis(data)</P>
        <P>    0: \x80 PROTO      4</P>
        <P>    2: \x95 FRAME      28</P>
        <P>   11: ]    EMPTY_LIST</P>
        <P>   12: \x94 MEMOIZE    (as 0)</P>
        <P>   13: (    MARK</P>
        <P>   14: \x8c     SHORT_BINUNICODE &apos;hackgod&apos;</P>
        <P>   23: \x94     MEMOIZE    (as 1)</P>
        <P>   24: \x8c     SHORT_BINUNICODE &apospython&apos</P>
        <P>   32: \x94     MEMOIZE    (as 2)</P>
        <P>   33: K        BININT1    78</P>
        <P>   35: K        BININT1    100</P>
        <P>   37: e        APPENDS    (MARK at 13)</P>
        <P>   38: .    STOP</P> 
        <P>highest protocol among opcodes = 4</P>
      <WorkImage src="/images/works/pickle_01.png" alt="Pichu*Pichu" />


      <Heading as="h4" fontSize={16} my={6}>Controlling the behavior of pickling/unpickling:</Heading>
      <P>Not every object can be serialized (e.g. file handles) and pickling and unpickling certain objects (like functions or classes) comes with restrictions. The Python docs give you a good overview what can and cannot be pickled.</P>
      <P>While in most cases you don’t need to do anything special to make an object “picklable”, pickle still allows you to define a custom behavior for the pickling process for your class instances.
         Reading a bit further down in the docs we can see that implementing __reduce__ is exactly what we would need to get code execution, when viewed from an attacker’s perspective:</P>
      <P>So by implementing __reduce__ in a class which instances we are going to pickle, we can give the pickling process a callable plus some arguments to run. While intended for reconstructing objects, we can abuse this for getting our own reverse shell code executed.</P>
      <Link href="https://docs.python.org/3/library/pickle.html#what-can-be-pickled-and-unpickled">Data that can be pickled / unpickled or Not.<ExternalLinkIcon mx="2px" /></Link>
          
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Language</Meta>
          <span>Python</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>PHP, jQuery, MySQL</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Python Pickle Exploits</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://gist.githubusercontent.com/mgeeky/cbc7017986b2ec3e247aab0b01a9edcd/raw/fb6e62345c58ba4ac01f98aa18ecdafbf17d73bb/pickle-payload.py">
            <Badge mr={2}>Python pickle RCE Payload</Badge>
            Python&aposs Pickle Remote Code Execution payload template. 
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://github.com/moreati/pickle-fuzz">
            <Badge mr={2}>Python Pickle Fuzzer by moreati</Badge>
            Rehabilitating Python&aposs pickle module{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <WorkImage src="/images/works/pichu2_eyecatch.png" alt="Pichu*Pichu" />
      <WorkImage src="/images/works/pichu2_01.png" alt="Pichu*Pichu" />
    </Container>
  </Layout>
)

export default Work
