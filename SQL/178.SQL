SELECT sc.score, rank
FROM Scores AS sc
JOIN (SELECT s1.score, count(s1.score) AS rank
      FROM (SELECT DISTINCT score FROM Scores) AS s1
      JOIN (SELECT DISTINCT score FROM Scores) AS s2
      ON s2.score >= s1.score
      GROUP BY s1.score) AS ranks
on sc.score = ranks.score
ORDER BY sc.score DESC