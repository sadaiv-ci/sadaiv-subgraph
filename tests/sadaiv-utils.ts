import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import { NewBuildCreated, VerifiedBuilder } from "../generated/Sadaiv/Sadaiv"

export function createNewBuildCreatedEvent(
  repository: ethereum.Tuple,
  build: ethereum.Tuple
): NewBuildCreated {
  let newBuildCreatedEvent = changetype<NewBuildCreated>(newMockEvent())

  newBuildCreatedEvent.parameters = new Array()

  newBuildCreatedEvent.parameters.push(
    new ethereum.EventParam("repository", ethereum.Value.fromTuple(repository))
  )
  newBuildCreatedEvent.parameters.push(
    new ethereum.EventParam("build", ethereum.Value.fromTuple(build))
  )

  return newBuildCreatedEvent
}

export function createVerifiedBuilderEvent(
  email: string,
  walletAddress: Address
): VerifiedBuilder {
  let verifiedBuilderEvent = changetype<VerifiedBuilder>(newMockEvent())

  verifiedBuilderEvent.parameters = new Array()

  verifiedBuilderEvent.parameters.push(
    new ethereum.EventParam("email", ethereum.Value.fromString(email))
  )
  verifiedBuilderEvent.parameters.push(
    new ethereum.EventParam(
      "walletAddress",
      ethereum.Value.fromAddress(walletAddress)
    )
  )

  return verifiedBuilderEvent
}
