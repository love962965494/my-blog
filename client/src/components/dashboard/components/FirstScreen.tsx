import React from 'react'
import styled from 'styled-components'
import bg from '../../../assets/dashboard/bg.jpg'

const Section = styled.section`
  background: url(${bg}) no-repeat;
  background-size: cover;
  overflow: auto;
  padding: 20rem 0;
  color: #fff;
`

export default function FirstScreen() {
  return (
    <Section>
      <h3>中二少年的魔法笔记。。。。</h3>
      <h1>六花酱超ka wa yi~~~ & 邪王真眼sai ko！！！</h1>
      <h4>开始中二之旅吧，哇咔咔咔，呜哈哈哈哈~~</h4>
    </Section>
  )
}
