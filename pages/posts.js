import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFourPainters from '../public/images/works/the-four-painters_eyecatch.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Github-Plus (Python C2 server)"
            thumbnail={thumbFourPainters}
            href="https://githubplus.com/Hackgodybj/C2_Server_Encrypted_-_Advance"/>
          <GridItem
            title="HacktheBox Profile"
            thumbnail={thumbMyDeskSetup}
            href="https://app.hackthebox.com/profile/480436"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="TryHackme Profile"
            thumbnail={thumb500PaidUsers}
            href="https://tryhackme.com/p/HackGodybj"
          />
          <GridItem
            title="Remote-Access-Trojan (C#)"
            thumbnail={thumbFinancialGoal}
            href="https://github.com/Hackgodybj/Remote-Access-Trojan"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="HacktheBox Intelligence (Medium)"
            thumbnail={thumbHowToPriceYourself}
            href="https://drive.google.com/file/d/1ls5pJ5LIiwhaOPcpg68XaJGnq1t7uRpv/view?usp=sharing"
          />
          </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
