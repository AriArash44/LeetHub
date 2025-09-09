import scala.util.boundary, boundary.break

object Solution {
  def threeSumClosest(nums: Array[Int], target: Int): Int = boundary {
    val sorted = nums.sorted
    var candidateSolution = sorted(0) + sorted(1) + sorted(2)
    for (i <- 0 until sorted.length - 2) {
      var l = i + 1
      var r = sorted.length - 1
      while (r > l) {
        val curSum = sorted(i) + sorted(l) + sorted(r)
        if (math.abs(candidateSolution - target) > math.abs(curSum - target)) {
          candidateSolution = curSum
        }
        if (curSum > target) {
          r -= 1
        } else if (curSum < target) {
          l += 1
        } else {
          break(curSum) 
        }
      }
    }
    candidateSolution
  }
}
