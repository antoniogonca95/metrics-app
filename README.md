# metrics-app

This simple app was developed with the purpose of storing metrics for an hour and returning the sum stored for a metric

## Endpoints 
- [Store metric - POST /metrics/{key}](#store-value-for-a-metric)
- [Get sum of stored metric values - GET /metrics/{key}/sum](#get-sum-of-stored-values-of-a-metric )

<br>

#### Store value for a metric
```http
POST /metrics/{key}
```

Body: 
```json
{  
  "value": "integer"   
}
```
Success Response
```json
HTTP 200 Ok
{}
```

Error Response:
```json
HTTP 400 Bad Request 
{
  "error": "Invalid value"
}
```
<br>

#### Get sum of stored values of a metric 
```http
GET /metrics/{key}/sum
```
Success Response
```json
HTTP 200 Ok
{
  "value": "integer"
}
```