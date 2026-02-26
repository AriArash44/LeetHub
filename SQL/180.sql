WITH two_cons AS (Select l1.num, l1.id
                  FROM Logs AS l1
                  JOIN Logs AS l2
                  on l1.id = l2.id - 1 
                  AND l1.num = l2.num
) SELECT DISTINCT tc1.num AS ConsecutiveNums
  FROM two_cons AS tc1
  WHERE tc1.num = (SELECT tc2.num
                   FROM two_cons AS tc2
                   WHERE tc1.id = tc2.id - 1)