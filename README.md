# Menuoso

MEAN stack Web app integrated with Raspberry Pi to provide restaurant managers with digital menus that are easy to edit, arrange, and style.

Authors
- Andrew Aquino
- Dan Bruce
- Jason Kim
- Blake Lingenau
- Jeremy Simon

## Installing/Running

### Prerequisites

Make sure you have git, node.js, and MongoDB installed.

### Clone `Menuoso`

```shell
git clone https://github.com/ddbruce/websci-group-2 menuoso
cd menuoso
```

### Install Dependencies

```shell
npm install
```

### Run MongoDB daemon if you're not doing so already

```shell
mongod
```

From the [MongoDB documentation](https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod):

>**mongod** is the primary daemon process for the MongoDB system. It handles data requests, manages data access, and performs background management operations.

### Run `server.js` in a separate terminal

```shell
npm start
```

This command does the following:

1. rebuilds (transpiles) `.js` files on changes to `.ts` files
2. starts an Express webserver on `localhost:3000`
3. rebuilds `.css` files on changes to `.scss` files

### Accessing the menu editor:
### Since the save function in the menu-builder is not yet complete, to put in menu data to play with for our demo, use menu.json, section.json, and item.json.
### In a command line in the directory of your MongoDB installation, put mongoimport --db menuoso --collection menus --file x --jsonArray, x being menu.json, section.json, and item.json path
### Finally, in a mongo terminal with Menuoso running, put db.users.update({"username": yourUsername}, {$set: {"menus": [ObjectId("58f816b4d22a8025b8425bf5")]}}) where yourUsername is the username you registered with