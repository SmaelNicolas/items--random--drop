export const getItem = () => {
	let number = Math.floor(Math.random() * 10000) + 1;

	if (number < 7000) return { rarity: "common", number };
	if (number < 8000) return { rarity: "uncommon", number };
	if (number < 8900) return { rarity: "rare", number };
	if (number < 9500) return { rarity: "mythical", number };
	if (number < 9900) return { rarity: "legendary", number };
	if (number < 10001) return { rarity: "immortal", number };
};
