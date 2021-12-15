import { InjectedConnector } from '@web3-react/injected-connector'
import { NetworkConnector } from '@web3-react/network-connector'
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'
// import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { LedgerConnector } from '@web3-react/ledger-connector'
import { TrezorConnector } from '@web3-react/trezor-connector'
// import { LatticeConnector } from '@web3-react/lattice-connector'
// import { FrameConnector } from '@web3-react/frame-connector'
// import { AuthereumConnector } from '@web3-react/authereum-connector'
import { FortmaticConnector } from '@web3-react/fortmatic-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
// import { MagicConnector } from '@web3-react/magic-connector'
// import { PortisConnector } from '@web3-react/portis-connector'
// import { TorusConnector } from '@web3-react/torus-connector'

// TODO: Update node URLs
const keys = {
  RPC_URL_1: 'https://mainnet.infura.io/v3/84842078b09946638c03157f83405213',
  RPC_URL_3: 'https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213',
  FORTMATIC_API_KEY: 'pk_test_A6260FCBAA2EBDFB',
  MAGIC_API_KEY: 'pk_test_398B82F5F0E88874',
  PORTIS_DAPP_ID: 'e9be171c-2b7f-4ff0-8db9-327707511ee2',
}

const POLLING_INTERVAL = 12000
const RPC_URLS = {
  1: keys.RPC_URL_1,
  3: keys.RPC_URL_3,
}

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 31337],
})

export const network = new NetworkConnector({
  urls: { 1: RPC_URLS[1], 3: RPC_URLS[3] },
  defaultChainId: 1,
})

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[1], 3: RPC_URLS[3] },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
})

export const fortmatic = new FortmaticConnector({
  apiKey: 'pk_test_29814A316CEDFCF7',
  chainId: 1,
})

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[1],
  appName: 'reserve explorer',
  supportedChainIds: [1, 3, 31337],
})

export const trezor = new TrezorConnector({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  // TODO: Update with real information
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234',
})

///
// Connector examples
///
// export const lattice = new LatticeConnector({
//   chainId: 4,
//   appName: 'web3-react',
//   url: RPC_URLS[4]
// })
// export const frame = new FrameConnector({ supportedChainIds: [1] })
// export const authereum = new AuthereumConnector({ chainId: 42 })
// export const magic = new MagicConnector({
//   apiKey: keys.MAGIC_API_KEY,
//   chainId: 4,
//   email: 'hello@example.org'
// })
// export const portis = new PortisConnector({ dAppId: keys.PORTIS_DAPP_ID, networks: [1, 100] })
// export const torus = new TorusConnector({ chainId: 1 })
