SELECT w1.id
FROM Weather AS w1
JOIN Weather AS w2
  ON w2.recordDate = w1.recordDate - 1
WHERE w1.temperature > w2.temperature;
