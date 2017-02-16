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

Make sure you have git and node.js installed.

### Clone `Menuoso`

```shell
git clone https://github.com/ddbruce/websci-group-2 menuoso
cd menuoso
```

### Install Dependencies

```shell
npm install
```

### Run `server.js`

```shell
npm start
```

This is equivalent to `concurrently \"npm run build:watch\" \"npm run serve\"`, which starts an Express webserver on `localhost:3000` and rebuilds (transpiles) `.js` files on changes to `.ts` files.
