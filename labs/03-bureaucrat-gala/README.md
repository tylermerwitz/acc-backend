# Buraucrat Gala

* `POST /invitation-requests`, JSON body w/ any `attendee` string
* Receive `200 OK`, with body of request -- including `id`.
* `POST /invitations`, with `id` given as `request-id`.
* `GET /invitations` to verify `attendee` was created.
