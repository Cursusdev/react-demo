import React, { useState, useEffect } from 'react'
import { TagCloud } from 'react-tagcloud'

import { useTheme } from '../hooks/useTheme'

const data = [
  { value: 'jQuery', count: 25 },
  { value: 'MongoDB', count: 18 },
  { value: 'JavaScript', count: 38 },
  { value: 'React', count: 30 },
  { value: 'Nodejs', count: 28 },
  { value: 'Express.js', count: 25 },
  { value: 'HTML5', count: 33 },
  { value: 'CSS3', count: 20 },
  { value: 'Webpack', count: 22 },
  { value: 'Babel', count: 7 },
  { value: 'ECMAScript', count: 25 },
  { value: 'Jest', count: 15 },
  { value: 'Mocha', count: 17 },
  { value: 'React Native', count: 27 },
  { value: 'Angular', count: 30 },
  { value: 'TypeScript', count: 15 },
  { value: 'Flow', count: 30 },
  { value: 'ASP.NET', count: 11 },
  { value: 'Bash', count: 22 },
  { value: 'C++', count: 15 },
  { value: 'C#', count: 31 },
  { value: 'Postgres', count: 23 },
  { value: 'Redis', count: 18 },
  { value: 'GraphQL', count: 27 },
  { value: 'Visual Basic .NET', count: 32 },
  { value: 'Rust', count: 29 },
  { value: 'Java', count: 12 },
  { value: 'Microsoft', count: 28 },
  { value: 'AWS', count: 17 },
  { value: 'Azure', count: 29 },
  { value: 'Python', count: 15 },
  { value: 'Blockchain', count: 25 },
  { value: 'JAMStack', count: 12 },
  { value: 'Android', count: 9 },
  { value: 'iOS', count: 19 },
  { value: 'Go', count: 18 },
  { value: 'Transact-SQL', count: 31 },
  { value: 'SQL', count: 26 },
  { value: 'MySQL', count: 16 },
  { value: 'VBA', count: 22 },
  { value: 'Lisp', count: 20 },
  { value: 'Bitcoin', count: 10 },
  { value: 'Futura', count: 12 },
  { value: 'Ethereum', count: 23 },
  { value: 'Cordova', count: 29 },
  { value: 'Ionic', count: 14 },
  { value: 'Apache', count: 24 },
  { value: 'PHP', count: 26 },
  { value: 'Fluter', count: 25 },
  { value: 'Solidity', count: 18 },
  { value: 'Shell', count: 19 },
  { value: 'PowerShell', count: 22 },
  { value: 'Swift', count: 24 },
  { value: 'Assembly', count: 11 },
  { value: 'WebAssembly', count: 9 },
  { value: 'R', count: 18 },
  { value: 'Vue', count: 27 },
  { value: 'Cloud', count: 27 },
  { value: 'IPFS', count: 13 },
  { value: 'Github', count: 11 },
  { value: 'Wordpress', count: 23 },
  { value: 'Office365', count: 18 },
  { value: 'Web3JS', count: 12 },
  { value: 'D3JS', count: 15 },
  { value: 'Canvas', count: 28 },
  { value: 'Docker', count: 9 },
  { value: 'Xamarin', count: 19 },
  { value: 'GitLab', count: 12 },
  { value: 'Heroku', count: 17 },
  { value: 'Firebase', count: 22 },
  { value: 'Slack', count: 10 },
  { value: 'Google', count: 16 },
  { value: 'Firefox', count: 20 },
  { value: 'Brave', count: 27 },
  { value: 'NextJS', count: 11 },
  { value: 'NestJS', count: 18 },
  { value: 'REST API', count: 15 },
  { value: 'Truffle', count: 25 },
  { value: 'Liquid', count: 16 },
  { value: 'Ganache', count: 21},
  { value: 'Rinkeby', count: 26 },
  { value: 'SEO', count: 18 },
]




export const SimpleCloud = () => {
  // methods of functionalities
  const [theme, ] = useTheme()

  // const color = (theme == 'light') ? 'dark' : 'light'
  // const options = {
  //   luminosity: color
  // }

  let seed = 1337
  function random() {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }

  return (
    <TagCloud
      className='tag-cloud'
      minSize={15}
      maxSize={45}
      // colorOptions={options}
      tags={data}
      randomNumberGenerator={random}
      style={{ width: '90%', margin: '20% auto', textAlign: 'center', letterSpacing: '3px', lineHeight: '55px' }}
    />
  )
}
