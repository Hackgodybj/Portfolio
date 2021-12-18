import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/works/menkiki_eyecatch.png'  
import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/works/proto.jpg'
import thumbAmembo from '../public/images/works/log4j_02.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tryhackme" title="TryHackMe" thumbnail={thumbInkdrop}>
            TryHackMe is an online platform that teaches cyber security through short, gamified real-world labs.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="hackthebox"
            title="HackThebox"
            thumbnail={thumbWalknote}
          >
            Hack The Box is an online platform allowing you to test your penetration testing skills and exchange ideas. 
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="c2"
            title="Python C2 Server"
            thumbnail={thumbFourPainters}
          >
            Python C2 Server is a multi client C2/post exploitation framework with some spyware features. Powered by Python 3.8. 6 and QT Framework. This program is in still development phase you may encouter some bugs.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="symbian" thumbnail={thumbMenkiki} title="Symbian">
             Symbian is the part of Bash/Shell Automation Framework used in Penetration Testing.... 
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Blog / Notes
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="pythonpickle" thumbnail={thumbPichu2} title="Python Pickle">
            Gaining access to a system by exploiting the way Python deserializes data using the pickle module.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="proto"
            thumbnail={thumbFreeDBTagger}
            title="Prototype Pollution"
          >
            JavaScript is prototype-based: when new objects are created, they carry over the properties and methods of the prototype “object”.
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="log4j" thumbnail={thumbAmembo} title="Apache Log4j">
            Apache Log4j is a Java-based logging utility, It is part of the Apache Logging Services, a project of the Apache Software Foundation. Log4j is one of several Java logging frameworks.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
