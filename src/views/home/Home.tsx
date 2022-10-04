import { Container } from 'components'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'
import { walletAtom } from 'state/atoms'
import { Divider, Grid } from 'theme-ui'
import About from './components/About'
import TransactionsOverview from './components/GeneralOverview'
import Greet from './components/Greet'
import Portfolio from './components/Portfolio'
import TokenList from './components/TokenList'
import TokenStats from './components/TokenStats'

const VISITED_KEY = 'visited'

const Home = () => {
  const account = useAtomValue(walletAtom)
  const [visited, setVisited] = useState(
    !!account || !!localStorage.getItem(VISITED_KEY)
  )

  const handleDismiss = () => {
    setVisited(true)
    localStorage.setItem(VISITED_KEY, 'true')
  }

  useEffect(() => {
    if (account && !visited) {
      handleDismiss()
    }
  }, [account])

  return (
    <Container>
      {!account && !visited && <Greet onDismiss={handleDismiss} />}
      {!!account && <Portfolio />}
      <Grid columns={[1, 1, 1, 2]}>
        <TokenStats mb={0} />
        <TransactionsOverview mb={0} />
      </Grid>
      <Divider mb={2} mt={6} mx={[-5, -5]} sx={{ borderColor: 'darkBorder' }} />
      <TokenList mt={6} />
      <Divider my={5} mx={[-5, -5]} sx={{ borderColor: 'darkBorder' }} />
      <About />
    </Container>
  )
}

export default Home
