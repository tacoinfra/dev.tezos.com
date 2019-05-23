import React from "react"
import styled from "@emotion/styled"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ShellWrapper from "../components/ShellWrapper"
import ButtonAnchor from "../components/ButtonAnchor"
import NumberTitle from "../components/NumberTitle"
import PostList from "../components/PostList"
import PostListGroup from "../components/PostListGroup"
import SectionHeading from "../components/SectionHeading"
import contentList from "./content.json"
import { palette, breakpoints, spacings } from "../utils/variables"

const SiteIndex = ({ location }) => {
  const tutorials = contentList.filter(post => post.category === "tutorial")
  const tools = contentList.filter(post => post.category === "tool")

  return (
    <Layout
      location={location}
      title="Tezos Developer Portal"
      subtitle="Technical Resources for Software and Blockchain Developers"
      heroContent={
        <ButtonWrapper>
          <ButtonAnchor href="#/">Build & Run A Node</ButtonAnchor>
          <ButtonAnchor href="#/">Use Testnet Faucet</ButtonAnchor>
        </ButtonWrapper>
      }
    >
      <SEO title="Home" />

      <Wrapper>
        <CalloutGroup>
          <h2>Getting Started</h2>

          <PostListGroup columns={4}>
            <PostList title={<NumberTitle number={1}>Starting up a node on Tezos</NumberTitle>}>
              <p>Learn how to install the Tezos binaries, Master the command-line interface, and start exploring the blockchain.</p>

              <h4>Tutorial</h4>

              <ul>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
              </ul>
            </PostList>

            <PostList title={<NumberTitle number={2}>Learning a smart-contract language</NumberTitle>}>
              <p>Learn about Michelson, the smart-contract language of Tezos. Choose one of the high-level languages to program in, or program in Michelson directly.</p>

              <h4>Tutorial</h4>
              <ul>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
              </ul>

              <h4>Dev Tools</h4>
              <ul>
                <li><a href="#/">Morley / Lorenz</a></li>
                <li><a href="#/">Ligo</a></li>
                <li><a href="#/">Michelson Emacs Mode</a></li>
              </ul>
            </PostList>

            <PostList title={<NumberTitle number={3}>Deploying transactions to the testnet and mainnet</NumberTitle>}>
              <p>Create and sign transactions to be sent to the mainnet. This is where you’ll learn to deploy and interact with the contracts that you’ve created.</p>

              <h4>Tutorial</h4>
              <ul>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
              </ul>

              <h4>Dev Tools</h4>
              <ul>
                <li><a href="#/">Morley / Lorenz</a></li>
                <li><a href="#/">Ligo</a></li>
                <li><a href="#/">Michelson Emacs Mode</a></li>
              </ul>
            </PostList>

            <PostList title={<NumberTitle number={4}>Interacting with your contract through your node</NumberTitle>}>
              <p>Retrieve information about your contracts. Learn to query your node for information. Build applications, websites, and more!</p>

              <h4>Tutorial</h4>
              <ul>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
                <li><a href="#/">How to get Tezos</a></li>
              </ul>

              <h4>Dev Tools</h4>
              <ul>
                <li><a href="#/">Morley / Lorenz</a></li>
                <li><a href="#/">Ligo</a></li>
                <li><a href="#/">Michelson Emacs Mode</a></li>
              </ul>
            </PostList>
          </PostListGroup>
        </CalloutGroup>

        <Section>
          <SectionHeading centered>Dev Tools</SectionHeading>

          <PostListGroup columns={3}>
            <PostList title={<h3>Languages</h3>} link="/tools">
              <ul>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
              </ul>
            </PostList>

            <PostList title={<h3>Libraries</h3>} link="/tools">
              <ul>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
              </ul>
            </PostList>

            <PostList title={<h3>Tools</h3>} link="/tools">
              <ul>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
                <li>
                  <p><a href="#/">How to get Tezos</a></p>
                  <p>Minim non dolor ipsum aute proident.</p>
                </li>
              </ul>
            </PostList>
          </PostListGroup>
        </Section>

        <Section>
          <SectionHeading centered>Additional Tutorials</SectionHeading>

          <PostListGroup columns={4}>
            <PostList title={<h3>Baking</h3>} link="/tutorials">
              <ul>
                <li><a href="#/">Enim ea veniam laborum magna quis veniam occaecat sunt aliquip.</a></li>
                <li><a href="#/">Magna veniam consequat dolore ad officia.</a></li>
                <li><a href="#/">Nulla mollit eiusmod eu aliquip aliquip ex anim.</a></li>
                <li><a href="#/">Fugiat ad id nostrud amet anim anim.</a></li>
                <li><a href="#/">Nostrud pariatur sunt amet qui cupidatat.</a></li>
                <li><a href="#/">Ea cupidatat minim quis ad esse.</a></li>
              </ul>
            </PostList>

            <PostList title={<h3>Ledger</h3>} link="/tutorials">
              <ul>
                <li><a href="#/">Est ullamco excepteur magna ad voluptate.</a></li>
                <li><a href="#/">Non id est veniam dolor excepteur excepteur.</a></li>
                <li><a href="#/">Esse ex dolore occaecat tempor dolo.</a></li>
                <li><a href="#/">Culpa enim minim in incididunt ad sit.</a></li>
                <li><a href="#/">Anim enim quis esse qui ut deserunt.</a></li>
              </ul>
            </PostList>

            <PostList title={<h3>Hardware Wallets</h3>} link="/tutorials">
              <ul>
                <li><a href="#/">Minim consequat nisi adipisicing consequat officia deserunt anim.</a></li>
                <li><a href="#/">Pariatur consequat commodo aute laborum fugiat fugiat ad magna duis eu ullamco pariatur et aute.</a></li>
                <li><a href="#/">Ipsum est proident officia id dolore aute est occaecat veniam ad consequat consectetur.</a></li>
                <li><a href="#/">Eu ex irure eiusmod qui.</a></li>
                <li><a href="#/">Tempor excepteur eu eu mollit nostrud est ex aliqua dolore.</a></li>
              </ul>
            </PostList>

            <PostList title={<h3>DApp</h3>} link="/tutorials">
              <ul>
                <li><a href="#/">Dolor magna laborum pariatur irure incididunt ex.</a></li>
                <li><a href="#/">Anim labore adipisicing eu deserunt.</a></li>
                <li><a href="#/">Ex mollit irure eiusmod eiusmod.</a></li>
                <li><a href="#/">Excepteur ea sunt eiusmod proident Lorem Lorem aute qui pariatur tempor excepteur.</a></li>
                <li><a href="#/">Ut et adipisicing est id elit.</a></li>
              </ul>
            </PostList>
          </PostListGroup>
        </Section>

      </Wrapper>


      {/* <PostsSection id="posts">
        <PostColumn>
          <PostHeader>Tutorials</PostHeader>
          <PostList>
            {tutorials.map(tutorial => (
              <li key={tutorial.title}>
                <a href={tutorial.link}>{tutorial.title}</a>
              </li>
            ))}
          </PostList>
        </PostColumn>
        <PostColumn>
          <PostHeader>Dev Tools</PostHeader>
          <PostList>
            {tools.map(tool => (
              <li key={tool.title}>
                <a href={tool.link}>{tool.title}</a>
              </li>
            ))}
          </PostList>
        </PostColumn>
      </PostsSection> */}
    </Layout>
  )
}


/* Hero content */
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 552px;
  margin-top: 66px;

  > * {
    width: 256px;
  }

  a + a {
    margin-left: 40px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    margin-top: 26px;

    a + a {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

const StyledInput = styled.input`
  padding: 0px 0px 9px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0%;
  border-color: ${palette.gray};
  border-style: none none solid;
  border-width: medium medium 1px;
  border-image: none 100% / 1 / 0 stretch;
  border-radius: 0px;
  color: rgb(0, 0, 0);
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  appearance: none;
  margin-bottom: 0px;
  display: block;
  min-width: 310px;
`

/* Content components */
const Wrapper = styled(ShellWrapper)`
  & > * + * {
    margin-top: 60px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    & > * + * {
      margin-top: 80px;
    }
  }
`

/* Callout section */
const CalloutGroup = styled.section`
  padding: 40px 20px 20px;
  background-color: ${palette.lightGrey};

  & > h2 {
    text-align: center;
    margin-bottom: 40px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    padding: 64px 40px 40px;

    & > h2 {
      margin-bottom: 64px;
    }
  }
`

const Section = styled.section`
  & > * + * {
    margin-top: 40px;
  }
`

export default SiteIndex
