import { t } from '@lingui/macro'
import { Container, InfoBox } from 'components'
import { useFormContext } from 'react-hook-form'
import { Box, Card, Grid } from 'theme-ui'
import DeployHeader from '../../deploy/components/DeployHeader'
import DeploymentStepTracker, {
  Steps,
} from '../../deploy/components/DeployStep'
import GovernanceForm from '../components/GovernanceForm'

const GovernanceSetup = () => {
  const {
    formState: { isValid },
  } = useFormContext()

  return (
    <>
      <DeploymentStepTracker step={Steps.GovernanceSetup} />
      <Container mt={-4}>
        <DeployHeader
          isValid={isValid}
          title={t`Define Governance`}
          subtitle={t`Use our sta`}
          confirmText={t`Confirm governance setup`}
        />
        <Card p={0}>
          <Grid columns={2} gap={0}>
            <Box
              sx={{ borderRight: '1px solid', borderColor: 'border' }}
              my={5}
              px={5}
            >
              <GovernanceForm />
            </Box>
            <Box p={5}>
              <InfoBox title="Something something" subtitle="sd" />
              <InfoBox  title="Something something" subtitle="sd" />
            </Box>
          </Grid>
        </Card>
      </Container>
    </>
  )
}

export default GovernanceSetup
