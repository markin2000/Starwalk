function loadLevelGraph(levelNumber) {
	var V, E;

	if (levelNumber == 0) {
		V = [
			{x: 175, y:77},
			{x: 166, y:203},
			{x: 179, y:295},
			{x: 169, y:382},
			{x: 174, y:470},
			{x: 181, y:548},
			{x: 170, y:646},
			{x: 281, y:646},
			{x: 285, y:547},
			{x: 283, y:465},
			{x: 275, y:391},
			{x: 282, y:283},
			{x: 283, y:204},
			{x: 289, y:74},
			{x: 418, y:64},
			{x: 416, y:189},
			{x: 414, y:287},
			{x: 407, y:377},
			{x: 419, y:450},
			{x: 414, y:538},
			{x: 409, y:646},
			{x: 536, y:645},
			{x: 541, y:544},
			{x: 544, y:452},
			{x: 542, y:370},
			{x: 542, y:273},
			{x: 529, y:180},
			{x: 526, y:64},
			{x: 668, y:61},
			{x: 660, y:172},
			{x: 662, y:268},
			{x: 658, y:358},
			{x: 650, y:453},
			{x: 641, y:547},
			{x: 634, y:648},
			{x: 740, y:655},
			{x: 739, y:545},
			{x: 745, y:453},
			{x: 741, y:353},
			{x: 750, y:261},
			{x: 747, y:164},
			{x: 757, y:54},
			];

		E = [
			{fromIndex: 0, toIndex:1},
			{fromIndex: 1, toIndex:2},
			{fromIndex: 2, toIndex:3},
			{fromIndex: 3, toIndex:4},
			{fromIndex: 4, toIndex:5},
			{fromIndex: 5, toIndex:6},
			{fromIndex: 7, toIndex:8},
			{fromIndex: 8, toIndex:9},
			{fromIndex: 9, toIndex:10},
			{fromIndex: 10, toIndex:11},
			{fromIndex: 11, toIndex:12},
			{fromIndex: 12, toIndex:13},
			{fromIndex: 13, toIndex:14},
			{fromIndex: 14, toIndex:15},
			{fromIndex: 15, toIndex:16},
			{fromIndex: 16, toIndex:17},
			{fromIndex: 17, toIndex:18},
			{fromIndex: 18, toIndex:19},
			{fromIndex: 19, toIndex:20},
			{fromIndex: 21, toIndex:22},
			{fromIndex: 22, toIndex:23},
			{fromIndex: 23, toIndex:24},
			{fromIndex: 24, toIndex:25},
			{fromIndex: 25, toIndex:26},
			{fromIndex: 26, toIndex:27},
			{fromIndex: 27, toIndex:28},
			{fromIndex: 28, toIndex:29},
			{fromIndex: 29, toIndex:30},
			{fromIndex: 30, toIndex:31},
			{fromIndex: 31, toIndex:32},
			{fromIndex: 32, toIndex:33},
			{fromIndex: 33, toIndex:34},
			{fromIndex: 35, toIndex:36},
			{fromIndex: 36, toIndex:37},
			{fromIndex: 37, toIndex:38},
			{fromIndex: 38, toIndex:39},
			{fromIndex: 39, toIndex:40},
			{fromIndex: 40, toIndex:41},
			{fromIndex: 0, toIndex:13},
			{fromIndex: 14, toIndex:27},
			{fromIndex: 28, toIndex:41},
			{fromIndex: 1, toIndex:12},
			{fromIndex: 12, toIndex:15},
			{fromIndex: 15, toIndex:26},
			{fromIndex: 26, toIndex:29},
			{fromIndex: 29, toIndex:40},
			{fromIndex: 2, toIndex:11},
			{fromIndex: 11, toIndex:16},
			{fromIndex: 16, toIndex:25},
			{fromIndex: 25, toIndex:30},
			{fromIndex: 30, toIndex:39},
			{fromIndex: 3, toIndex:10},
			{fromIndex: 10, toIndex:17},
			{fromIndex: 17, toIndex:24},
			{fromIndex: 24, toIndex:31},
			{fromIndex: 31, toIndex:38},
			{fromIndex: 4, toIndex:9},
			{fromIndex: 9, toIndex:18},
			{fromIndex: 18, toIndex:23},
			{fromIndex: 23, toIndex:32},
			{fromIndex: 32, toIndex:37},
			{fromIndex: 5, toIndex:8},
			{fromIndex: 8, toIndex:19},
			{fromIndex: 19, toIndex:22},
			{fromIndex: 22, toIndex:33},
			{fromIndex: 33, toIndex:36},
			{fromIndex: 6, toIndex:7},
			{fromIndex: 7, toIndex:20},
			{fromIndex: 20, toIndex:21},
			{fromIndex: 21, toIndex:34},
			{fromIndex: 34, toIndex:35},
		];
	}
	else if (levelNumber == 1) {
		V = [
			{x: 562, y:207},
			{x: 664, y:112},
			{x: 675, y:293},
			{x: 773, y:197},
			{x: 885, y:286},
			{x: 954, y:190},
			{x: 1058, y:281},
			{x: 1130, y:182},
			{x: 859, y:102},
			{x: 1043, y:94},
			{x: 1232, y:274},
			{x: 1295, y:176},
			{x: 1211, y:91},
			{x: 568, y:384},
			{x: 780, y:387},
			{x: 967, y:378},
			{x: 1147, y:369},
			{x: 1321, y:359},
			{x: 676, y:483},
			{x: 890, y:480},
			{x: 1080, y:476},
			{x: 1264, y:474},
			{x: 578, y:586},
			{x: 798, y:580},
			{x: 993, y:569},
			{x: 1183, y:554},
			{x: 1348, y:551},
			{x: 681, y:703},
			{x: 916, y:700},
			{x: 1118, y:693},
			{x: 1278, y:682},
			];

		E = [
			{fromIndex: 0, toIndex:1},
			{fromIndex: 0, toIndex:2},
			{fromIndex: 13, toIndex:2},
			{fromIndex: 13, toIndex:18},
			{fromIndex: 22, toIndex:18},
			{fromIndex: 22, toIndex:27},
			{fromIndex: 11, toIndex:12},
			{fromIndex: 11, toIndex:10},
			{fromIndex: 17, toIndex:10},
			{fromIndex: 17, toIndex:21},
			{fromIndex: 26, toIndex:21},
			{fromIndex: 26, toIndex:30},
			{fromIndex: 7, toIndex:12},
			{fromIndex: 7, toIndex:9},
			{fromIndex: 7, toIndex:6},
			{fromIndex: 7, toIndex:10},
			{fromIndex: 16, toIndex:10},
			{fromIndex: 16, toIndex:6},
			{fromIndex: 16, toIndex:20},
			{fromIndex: 16, toIndex:21},
			{fromIndex: 25, toIndex:21},
			{fromIndex: 25, toIndex:20},
			{fromIndex: 25, toIndex:29},
			{fromIndex: 25, toIndex:30},
			{fromIndex: 5, toIndex:9},
			{fromIndex: 5, toIndex:8},
			{fromIndex: 5, toIndex:4},
			{fromIndex: 5, toIndex:6},
			{fromIndex: 15, toIndex:6},
			{fromIndex: 15, toIndex:4},
			{fromIndex: 15, toIndex:19},
			{fromIndex: 15, toIndex:20},
			{fromIndex: 24, toIndex:20},
			{fromIndex: 24, toIndex:19},
			{fromIndex: 24, toIndex:28},
			{fromIndex: 24, toIndex:29},
			{fromIndex: 23, toIndex:19},
			{fromIndex: 23, toIndex:18},
			{fromIndex: 23, toIndex:27},
			{fromIndex: 23, toIndex:28},
			{fromIndex: 18, toIndex:14},
			{fromIndex: 14, toIndex:19},
			{fromIndex: 14, toIndex:4},
			{fromIndex: 14, toIndex:2},
			{fromIndex: 2, toIndex:3},
			{fromIndex: 3, toIndex:4},
			{fromIndex: 3, toIndex:8},
			{fromIndex: 3, toIndex:1},
		];
	}
	else if (levelNumber == 2) {
		var V = [
			{x: 921, y:462},
			{x: 923, y:304},
			{x: 764, y:374},
			{x: 756, y:549},
			{x: 918, y:638},
			{x: 1081, y:560},
			{x: 1081, y:387},
			{x: 628, y:307},
			{x: 632, y:143},
			{x: 923, y:141},
			{x: 772, y:76},
			{x: 1231, y:151},
			{x: 1227, y:305},
			{x: 1089, y:63},
			{x: 770, y:219},
			{x: 1086, y:214},
			];

		var E = [
			{fromIndex: 14, toIndex:7},
			{fromIndex: 14, toIndex:8},
			{fromIndex: 14, toIndex:10},
			{fromIndex: 14, toIndex:9},
			{fromIndex: 14, toIndex:1},
			{fromIndex: 14, toIndex:2},
			{fromIndex: 15, toIndex:9},
			{fromIndex: 15, toIndex:1},
			{fromIndex: 15, toIndex:13},
			{fromIndex: 15, toIndex:11},
			{fromIndex: 15, toIndex:12},
			{fromIndex: 15, toIndex:6},
			{fromIndex: 0, toIndex:1},
			{fromIndex: 0, toIndex:2},
			{fromIndex: 0, toIndex:3},
			{fromIndex: 0, toIndex:4},
			{fromIndex: 0, toIndex:5},
			{fromIndex: 0, toIndex:6},
			{fromIndex: 2, toIndex:7},
			{fromIndex: 7, toIndex:8},
			{fromIndex: 8, toIndex:10},
			{fromIndex: 10, toIndex:9},
			{fromIndex: 13, toIndex:9},
			{fromIndex: 13, toIndex:11},
			{fromIndex: 12, toIndex:11},
			{fromIndex: 12, toIndex:6},
			{fromIndex: 5, toIndex:6},
			{fromIndex: 5, toIndex:4},
			{fromIndex: 3, toIndex:2},
			{fromIndex: 3, toIndex:4},
			{fromIndex: 2, toIndex:1},
			{fromIndex: 6, toIndex:1},
			{fromIndex: 9, toIndex:1},
		];
	}

	window.V = V;
	window.E = E;
}
