class Solution {
    /**
     * @param String $digits
     * @return String[]
     */
    const letterDict = [
        '2' => ["a", "b", "c"], 
        '3' => ["d", "e", "f"], 
        '4' => ["g", "h", "i"], 
        '5' => ["j", "k", "l"], 
        '6' => ["m", "n", "o"], 
        '7' => ["p", "q", "r", "s"], 
        '8' => ["t", "u", "v"], 
        '9' => ["w", "x", "y", "z"], 
    ];
    function letterCombinations($digits) {
        if ($digits === "") return [];
        $solution = [""];
        foreach (str_split($digits) as $digit) {
            $solutionTemp = [];
            foreach (self::letterDict[$digit] as $letter) {
                foreach ($solution as $combo) {
                    $solutionTemp[] = $combo . $letter;
                }
            }
            $solution = $solutionTemp;
        }
        return $solution;
    }
}