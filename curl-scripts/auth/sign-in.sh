curl 'https://tic-tac-toe-api-production.herokuapp.com/sign-in' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo

# {
#     "user":{
#         "_id":"5f0fc59ea25eae00175c6efd",
#         "email":"lenilunderman@gmail.com",
#         "createdAt":"2020-07-16T03:12:30.735Z",
#         "updatedAt":"2020-07-16T03:22:34.242Z",
#         "__v":0,
#         "token":"e363dd42841ba7fa496f569a6eecb53f"
#     }
# }