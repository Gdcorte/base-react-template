import type { NextPage } from 'next'
import Head from 'next/head'
import {ThemedButton, BaseButton} from "@gdcorte/react-core-components"
import styled from 'styled-components'

const TempDivStyled = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;

  button {
    margin: 18px;
  }

`

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Default Template</title>
        <meta name="description" content="Great things coming up!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TempDivStyled>
        <div style={{margin: "18px", fontSize: "2rem"}}>
          <p>
            This is a base template, 
          </p>
          <p>
            new and exciting changes are coming this way
          </p>
        </div>

        <ThemedButton
          disabled={false}
        >
          That is a themed button ^.^ !! 
        </ThemedButton>


        <BaseButton
          shape={"pill"}
        >
          This does not use any theme whatsoever... 
        </BaseButton>
      </TempDivStyled>

    </div>
  )
}

export default Home
