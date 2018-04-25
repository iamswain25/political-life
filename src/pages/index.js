import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>王沪宁 Wang huning (October 6, 1955)</h2>
    <img src="https://img2.secretchina.com/pic/2017/11-18/p2035071a907147589-ss.jpg" />
    <p>a Chinese political theorist and one of the top leaders of the Communist Party of China, a current member of the party's Politburo Standing Committee (China's top decision-making body) and secretary of the party's Secretariat. He served as secretary of the Secretariat between 2007 and 2012, and as the head of Central Policy Research Office since 2002. He was named chairman of Central Guidance Commission on Building Spiritual Civilization in November 2017.
Wang is believed to have been one of the principal theorists behind the official political ideologies of three administrations: "Three Represents" by Jiang Zemin, the Scientific Development Concept by Hu Jintao, and the Chinese Dream of Xi Jinping.</p>

    <ul>
      <li><Link to="/kr" >목록</Link></li>
      <li><Link to="/cn" >目录</Link></li>
    </ul>
  </div>
)

export default IndexPage;