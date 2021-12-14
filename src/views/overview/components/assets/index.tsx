import { Box, Grid, Text } from '@theme-ui/components'
import { Card } from 'components'
import InfoBox from 'components/info-box'
import { formatEther } from 'ethers/lib/utils'
import { IReserveToken } from 'state/reserve-tokens/reducer'
import { formatCurrency } from 'utils'

/**
 * RToken Assets overview
 * Display the market cap of the current RToken and the ratio between the RToken and their vault collaterals
 *
 * @prop data: IReserveToken
 * @returns React.Component
 */
const AssetsOverview = ({
  data: { token, vault },
  ...props
}: {
  data: IReserveToken
}) => (
  <Box {...props}>
    <Text sx={{ fontSize: 4, display: 'block' }} mb={2}>
      Assets
    </Text>
    <Card p={4}>
      <InfoBox
        title={`${
          token?.supply?.total
            ? formatCurrency(parseFloat(formatEther(token.supply.total)))
            : '0'
        } ${token.symbol}`}
        subtitle="In circulation"
      />
    </Card>
    <Grid columns={3} gap={0} mb={3}>
      {vault.collaterals.map((collateral) => (
        <Card key={collateral.id}>
          <InfoBox title="0.00" subtitle={collateral.token.name} />
        </Card>
      ))}
    </Grid>
  </Box>
)

export default AssetsOverview