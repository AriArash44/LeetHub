SELECT d.name AS department, e1.name AS employee, e1.salary
FROM Employee e1
JOIN Department d ON d.id = e1.departmentId
WHERE NOT EXISTS (
    SELECT 1
    FROM Employee e2
    WHERE e2.salary > e1.salary AND e1.departmentId = e2.departmentId 
);