import { useState } from 'react'
import { Grid } from 'theme-ui'
import BackupBasket from './BackupBasket'
import CollateralModal from './CollateralModal'
import PrimaryBasket from './PrimaryBasket'

/**
 * View: Deploy
 * BasketSetup view
 */
const BasketSetup = () => {
  const [collateralModal, setCollateralModal] = useState<{
    basket: 'primary' | 'backup'
    targetUnit?: string
  } | null>(null)

  return (
    <>
      <Grid gap={5} columns={[1, 2]} mb={4}>
        <PrimaryBasket onAdd={setCollateralModal} />
        <BackupBasket onAdd={setCollateralModal} />
      </Grid>
      {!!collateralModal && (
        <CollateralModal
          targetUnit={collateralModal?.targetUnit}
          basket={collateralModal?.basket}
          onClose={() => setCollateralModal(null)}
        />
      )}
    </>
  )
}

export default BasketSetup
