import {
  Address,
  BigInt,
} from "@graphprotocol/graph-ts"


// Initialize a Token Definition with the attributes
export class TokenDefinition {
  address : Address
  symbol: string
  name: string
  decimals: BigInt

  // Initialize a Token Definition with its attributes
  constructor(address: Address, symbol: string, name: string, decimals: BigInt) {
    this.address = address
    this.symbol = symbol
    this.name = name
    this.decimals = decimals
  }

  // Get all tokens with a static defintion
  static getStaticDefinitions(): Array<TokenDefinition> {
    let staticDefinitions = new Array<TokenDefinition>(4)

    // Add MTRG
    let tokenMeterGov = new TokenDefinition(
      Address.fromString('0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F'),
      'MTRG',
      'Meter Governance mapped by Meter.io',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenMeterGov)

    // Add TFUEL
    let tokenTFUEL = new TokenDefinition(
      Address.fromString('0x4dc08b15ea0e10b96c41aec22fab934ba15c983e'),
      'TFUEL',
      'Theta Fuel',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenTFUEL)

    let weth = new TokenDefinition(
      Address.fromString('0x3674d64aab971ab974b2035667a4b3d09b5ec2b3'),
      'ETH_SWAP',
      'ETH_SWAP',
      BigInt.fromI32(18)
    )

    staticDefinitions.push(weth) 
    let bnb = new TokenDefinition(
      Address.fromString('0xdff772186ace9b5513fb46d7b05b36efa0a4a20d'),
      'BNB_SWAP',
      'BNB_SWAP',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(bnb)

   

    return staticDefinitions
  }

  // Helper for hardcoded tokens
  static fromAddress(tokenAddress: Address) : TokenDefinition | null {
    let staticDefinitions = this.getStaticDefinitions()
    let tokenAddressHex = tokenAddress.toHexString()

    // Search the definition using the address
    for (let i = 0; i < staticDefinitions.length; i++) {
      let staticDefinition = staticDefinitions[i]
      if(staticDefinition.address.toHexString() == tokenAddressHex) {
        return staticDefinition
      }
    }

    // If not found, return null
    return null
  }

}
