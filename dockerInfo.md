Build
```
docker build -t recipe-be:v1 .
```
Run
```
docker run --name ss-node -v "${PWD}:/app" -v /app/node_modules -p 3000:3000 --network super-supper --network-alias recipe -d recipe-be:v1


docker run \
    --name \ (name)
    --rm \ (remove when done)
    -v ${PWD}:/app \ (bind volume)
    -v /app/node_modules \ (bind volume)
    -p 3001:3000 \ (exposed port -- internalPort:exposedPort)
    --network super-supper \
    --network-alias recipe \
    recipe-be:v1
```

If db is needed
```
docker pull postgres 

docker run -v recipe-psql-data:/var/lib/psql -p 5432:5432 --name docker-postgres -e POSTGRES_PASSWORD={password-here} -e POSTGRES_DB=ss --network super-supper --network-alias psql -d postgres
```