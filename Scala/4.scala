object Solution {
  def findMedianSortedArrays(nums1: Array[Int], nums2: Array[Int]): Double = {
    def getKth(a: Array[Int], b: Array[Int], k: Int): Int = {
      def loop(i: Int, j: Int, kk: Int): Int = {
        if (i == a.length) return b(j + kk - 1)
        if (j == b.length) return a(i + kk - 1)
        if (kk == 1) return math.min(a(i), b(j))
        val (pa, pb) = if (a.length - i < b.length - j) {
          val pa_ = math.min(kk / 2, a.length - i)
          (pa_, kk - pa_)
        } else {
          val pb_ = math.min(kk / 2, b.length - j)
          (kk - pb_, pb_)
        }
        val aVal = a(i + pa - 1)
        val bVal = b(j + pb - 1)
        if (aVal < bVal) loop(i + pa, j, kk - pa)
        else loop(i, j + pb, kk - pb)
      }
      loop(0, 0, k)
    }
    val total = nums1.length + nums2.length
    if (total % 2 == 1) {
      getKth(nums1, nums2, total / 2 + 1).toDouble
    } else {
      val left = getKth(nums1, nums2, total / 2)
      val right = getKth(nums1, nums2, total / 2 + 1)
      (left + right) / 2.0
    }
  }
}
