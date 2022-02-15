# Instructions

## Migrating and Seeding the Database

Before you run the project, create the tables and seed a couple apps and the block bank.

```shell
sequelize db:migrate
sequelize db:seed:all
```

You are now ready to run the project.

## Running the Project

```shell
yarn dev
```

## Queries

### Get an App and related data by ID

```
{
    app(id: 2){
    	id
    	title
    	user {
            id
            firstName
            lastName
        }
    	blocks {
            id
            title
        }
    }
}
```

### Get the bank of unmodified blocks

```
{
    blocks {
        id
        title
    }
}
```

### Add a block to an app
```
mutation {
    addBlockToApp(appId: 2, blockId: 1) {
        title
    }
}
```