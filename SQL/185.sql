SELECT d.name AS department, e.name AS employee, e.salary
FROM (
    SELECT *, 
        DENSE_RANK() OVER (
           PARTITION BY departmentId
           ORDER BY salary DESC
        ) AS r
    FROM Employee
) AS e
JOIN Department AS d ON d.id = e.departmentId
WHERE e.r <= 3;