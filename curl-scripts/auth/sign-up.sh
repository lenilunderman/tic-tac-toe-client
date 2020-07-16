curl 'https://tic-tac-toe-api-production.herokuapp.com/sign-up' \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'

echo

# {
#    "user":{
#        "_id":"5f0fc49fa25eae00175c6efc",
#        "email":"test3@gmail.com",
#        "createdAt":"2020-07-16T03:08:15.365Z",
#        "updatedAt":"2020-07-16T03:08:15.365Z",
#        "__v":0
#     }
# }



