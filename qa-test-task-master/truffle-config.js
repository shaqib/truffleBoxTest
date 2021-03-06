module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
		ganache_cli: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*"
		}

  },
  compilers: {
    solc: {
      version: '0.5.8',
    },
  },
};
