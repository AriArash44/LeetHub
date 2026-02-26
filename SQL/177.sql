CREATE OR REPLACE FUNCTION NthHighestSalary(N INT) RETURNS TABLE (Salary INT) AS $$
BEGIN
    IF N < 1 THEN
        RETURN QUERY SELECT NULL::INT AS getNthHighestSalary;
    ELSE
        RETURN QUERY (
            SELECT DISTINCT e.salary AS getNthHighestSalary
            FROM Employee AS e
            ORDER BY e.salary DESC
            OFFSET N-1
            LIMIT 1
        );
    END IF;
END;
$$ LANGUAGE plpgsql;