import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { ethers } from "ethers";
import "dotenv/config";

const config: HardhatUserConfig = {
	solidity: "0.8.19",
	networks: {
		hardhat: {
			accounts: [
				{
					privateKey: process.env.DEPLOYER_PK ?? "",
					balance: ethers.parseEther("10000").toString(),
				},
				{
					privateKey: process.env.OTHER_PK ?? "",
					balance: ethers.parseEther("10000").toString(),
				},
			],
		},
	},
};

export default config;
