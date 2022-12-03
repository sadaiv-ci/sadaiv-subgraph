import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { NewBuildCreated } from "../generated/schema"
import { NewBuildCreated as NewBuildCreatedEvent } from "../generated/Sadaiv/Sadaiv"
import { handleNewBuildCreated } from "../src/sadaiv"
import { createNewBuildCreatedEvent } from "./sadaiv-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let repository = "ethereum.Tuple Not implemented"
    let build = "ethereum.Tuple Not implemented"
    let newNewBuildCreatedEvent = createNewBuildCreatedEvent(repository, build)
    handleNewBuildCreated(newNewBuildCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewBuildCreated created and stored", () => {
    assert.entityCount("NewBuildCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewBuildCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "repository",
      "ethereum.Tuple Not implemented"
    )
    assert.fieldEquals(
      "NewBuildCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "build",
      "ethereum.Tuple Not implemented"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
