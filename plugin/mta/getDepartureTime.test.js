import { getDepartureTime } from "./getDepartureTime"
import data from "./input.json"

describe("getBestVisited", () => {
  test("test", () => {
    const res = getDepartureTime(data)({ stopId: "A12N", routeId: "A", now: "1688065225" })
    expect(res).toBe("1688065225")
  })
})