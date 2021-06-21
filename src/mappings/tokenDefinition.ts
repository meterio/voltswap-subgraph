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
    let staticDefinitions = new Array<TokenDefinition>(2)

    // Add MTRG
    let tokenMeterGov = new TokenDefinition(
      Address.fromString('0x228ebbee999c6a7ad74a6130e81b12f9fe237ba3'),
      'MTRG',
      'MeterGov',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenMeterGov)

    // Add MTR
    let tokenMeter = new TokenDefinition(
      Address.fromString('0x687a6294d0d6d63e751a059bf1ca68e4ae7b13e2'),
      'MTR',
      'Meter',
      BigInt.fromI32(18)
    )
    staticDefinitions.push(tokenMeter)

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