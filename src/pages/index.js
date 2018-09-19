import React from 'react'
import cover from '../templates/cover.jpg'
import Layout from '../components/layouts'
const IndexPage = () => (
  <Layout pathname={window.location.pathname}>
    <div>
      <h2>王沪宁 Wang huning (October 6, 1955)</h2>
      <img src={cover} alt="face" />
      <p>
        A Chinese political theorist and one of the top leaders of the Communist
        Party of China, a current member of the party's Politburo Standing
        Committee (China's top decision-making body) and secretary of the
        party's Secretariat. He served as secretary of the Secretariat between
        2007 and 2012, and as the head of Central Policy Research Office since
        2002. He was named chairman of Central Guidance Commission on Building
        Spiritual Civilization in November 2017. Wang is believed to have been
        one of the principal theorists behind the official political ideologies
        of three administrations: "Three Represents" by Jiang Zemin, the
        Scientific Development Concept by Hu Jintao, and the Chinese Dream of Xi
        Jinping.{' '}
        <em>
          (
          <a href="https://en.wikipedia.org/wiki/Wang_Huning">
            wikipedia, 2018
          </a>
          )
        </em>
      </p>
    </div>
  </Layout>
)

export default IndexPage
