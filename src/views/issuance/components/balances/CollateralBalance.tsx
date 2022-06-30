import { formatUnits } from '@ethersproject/units'
import TokenBalance from 'components/token-balance'
import { useAtomValue } from 'jotai'
import { balancesAtom } from 'state/atoms'
import { Box, BoxProps, Text } from 'theme-ui'
import { Token } from 'types'
import { quantitiesAtom } from 'views/issuance/atoms'

interface Props extends BoxProps {
  token: Token
}

const CollateralBalance = ({ token, ...props }: Props) => {
  const quantities = useAtomValue(quantitiesAtom)
  const balances = useAtomValue(balancesAtom)

  if (!quantities[token.address]) {
    return (
      <TokenBalance
        symbol={token.symbol}
        balance={balances[token.address]}
        {...props}
      />
    )
  }

  return (
    <Box {...props}>
      <TokenBalance
        mb={2}
        symbol={token.symbol}
        balance={balances[token.address]}
      />
      <Text
        sx={{
          fontSize: 0,
          color:
            balances[token.address] <
            Number(formatUnits(quantities[token.address], token.decimals))
              ? 'red'
              : 'inherit',
        }}
      >
        Required: {formatUnits(quantities[token.address], token.decimals)}
      </Text>
    </Box>
  )
}

export default CollateralBalance
