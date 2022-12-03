import {
  NewBuildCreated as NewBuildCreatedEvent,
  VerifiedBuilder as VerifiedBuilderEvent
} from "../generated/Sadaiv/Sadaiv"
import { NewBuildCreated, VerifiedBuilder } from "../generated/schema"

export function handleNewBuildCreated(event: NewBuildCreatedEvent): void {
  let entity = new NewBuildCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.repository_owner = event.params.repository.owner
  entity.repository_name = event.params.repository.name
  entity.build_developer = event.params.build.developer
  entity.build_cid = event.params.build.cid
  entity.build_branch = event.params.build.branch
  entity.build_commitMessage = event.params.build.commitMessage

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVerifiedBuilder(event: VerifiedBuilderEvent): void {
  let entity = new VerifiedBuilder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.email = event.params.email
  entity.walletAddress = event.params.walletAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
