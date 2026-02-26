SELECT max(salary) AS SecondHighestSalary 
FROM (SELECT *
      FROM Employee
      WHERE salary <> (SELECT max(salary)
                       FROM Employee))