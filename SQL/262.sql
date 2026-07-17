WITH valid_trips AS (
    SELECT t.id, t.request_at, t.status
    FROM Trips t
    JOIN Users uc ON t.client_id = uc.users_id
    JOIN Users ud ON t.driver_id = ud.users_id
    WHERE uc.banned = 'No'
      AND ud.banned = 'No'
      AND t.request_at BETWEEN '2013-10-01' AND '2013-10-03'
)
SELECT
    vt.request_at AS Day,
    ROUND(
        (
            SELECT COUNT(*)
            FROM valid_trips cancelled
            WHERE cancelled.request_at = vt.request_at
              AND cancelled.status LIKE 'cancelled_by_%'
        )::numeric
        /
        NULLIF(
            (
                SELECT COUNT(*)
                FROM valid_trips total
                WHERE total.request_at = vt.request_at
            ),
            0
        ),
        2
    ) AS "Cancellation Rate"
FROM valid_trips vt
GROUP BY vt.request_at;
