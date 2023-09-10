import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Searcher", function () {
	async function deploySearcher() {
		const [owner, otherAccount] = await ethers.getSigners();

		const BinarySearch = await ethers.getContractFactory("BinarySearch");
		const binarySearch = await BinarySearch.deploy();

		const Searcher = await ethers.getContractFactory("Searcher", {
			libraries: {
				BinarySearch: await binarySearch.getAddress(),
			},
		});
		const searcher = await Searcher.deploy();

		return { searcher, owner, otherAccount };
	}

	const payload2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	it("performs boolean search", async function () {
		const { searcher } = await loadFixture(deploySearcher);

		const result = await searcher.search(payload2, payload2[3]);
		const result2 = await searcher.search(payload2, 9999);

		expect(result).to.equal(true);
		expect(result2).to.equal(false);
	});

	it("performs index search", async function () {
		const { searcher } = await loadFixture(deploySearcher);

		const result = await searcher.searchIdx(payload2, payload2[3]);
		const result2 = await searcher.searchIdx(payload2, payload2[7]);
		const result3 = await searcher.searchIdx(payload2, payload2[1]);
		const result4 = await searcher.searchIdx(payload2, payload2[6]);
		const result5 = await searcher.searchIdx(payload2, 999);

		expect(result).to.equal(3);
		expect(result2).to.equal(7);
		expect(result3).to.equal(1);
		expect(result4).to.equal(6);
		expect(result5).to.gt(99999999);
	});
});
