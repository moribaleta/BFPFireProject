var DecisionTreeClassifier = function (lChilds, rChilds, thresholds, indices, classes) {

    this.lChilds = lChilds;
    this.rChilds = rChilds;
    this.thresholds = thresholds;
    this.indices = indices;
    this.classes = classes;

    var findMax = function (nums) {
        var index = 0;
        for (var i = 0; i < nums.length; i++) {
            index = nums[i] > nums[index] ? i : index;
        }
        return index;
    };

    this.predict = function (features, node) {
        node = (typeof node !== 'undefined') ? node : 0;
        if (this.thresholds[node] != -2) {
            if (features[this.indices[node]] <= this.thresholds[node]) {
                return this.predict(features, this.lChilds[node]);
            } else {
                return this.predict(features, this.rChilds[node]);
            }
        }
        return findMax(this.classes[node]);
    };

};


// Features:
//var features = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,100000];

var features = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5000]
console.log("class features %o", features)
// Parameters:
var lChilds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, -1, 14, -1, -1, 17, -1, -1, 20, -1, -1, 23, -1, -1, 26, 27, 28, -1, -1, -1, -1, -1, 34, -1, -1, 37, 38, 39, 40, 41, 42, 43, -1, 45, -1, -1, 48, 49, -1, -1, -1, -1, 54, 55, 56, -1, -1, -1, -1, -1, 62, -1, -1, -1, 66, 67, -1, -1, -1, 71, 72, 73, 74, 75, 76, 77, 78, 79, -1, 81, -1, -1, -1, -1, -1, -1, -1, 89, -1, -1, 92, -1, -1, -1, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, -1, 115, -1, -1, 118, -1, -1, 121, 122, 123, 124, -1, 126, -1, -1, -1, -1, -1, 132, -1, -1, 135, -1, -1, 138, -1, -1, 141, 142, -1, -1, -1, 146, 147, -1, -1, -1, 151, 152, -1, -1, -1, -1, -1, 158, -1, -1, 161, -1, -1, 164, -1, -1, 167, -1, -1, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, -1, 182, -1, -1, -1, -1, -1, 188, 189, 190, 191, 192, -1, 194, -1, -1, 197, -1, -1, -1, -1, -1, -1, 204, -1, -1, -1, 208, 209, 210, 211, -1, -1, -1, 215, -1, -1, -1, 219, 220, 221, -1, -1, 224, -1, -1, -1, 228, 229, 230, -1, -1, -1, -1, -1, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, -1, 249, -1, -1, 252, -1, -1, 255, -1, -1, 258, 259, 260, 261, -1, -1, -1, -1, -1, -1, -1, 269, 270, 271, -1, -1, -1, -1, 276, 277, -1, -1, -1, 281, -1, -1, -1, -1, 286, 287, 288, -1, -1, -1, -1, -1];
var rChilds = [292, 95, 70, 65, 36, 33, 32, 25, 22, 19, 16, 13, -1, 15, -1, -1, 18, -1, -1, 21, -1, -1, 24, -1, -1, 31, 30, 29, -1, -1, -1, -1, -1, 35, -1, -1, 64, 61, 60, 53, 52, 47, 44, -1, 46, -1, -1, 51, 50, -1, -1, -1, -1, 59, 58, 57, -1, -1, -1, -1, -1, 63, -1, -1, -1, 69, 68, -1, -1, -1, 94, 91, 88, 87, 86, 85, 84, 83, 80, -1, 82, -1, -1, -1, -1, -1, -1, -1, 90, -1, -1, 93, -1, -1, -1, 235, 234, 169, 166, 163, 160, 157, 156, 155, 150, 145, 140, 137, 134, 131, 120, 117, 114, -1, 116, -1, -1, 119, -1, -1, 130, 129, 128, 125, -1, 127, -1, -1, -1, -1, -1, 133, -1, -1, 136, -1, -1, 139, -1, -1, 144, 143, -1, -1, -1, 149, 148, -1, -1, -1, 154, 153, -1, -1, -1, -1, -1, 159, -1, -1, 162, -1, -1, 165, -1, -1, 168, -1, -1, 227, 218, 207, 206, 203, 202, 187, 186, 185, 184, 181, -1, 183, -1, -1, -1, -1, -1, 201, 200, 199, 196, 193, -1, 195, -1, -1, 198, -1, -1, -1, -1, -1, -1, 205, -1, -1, -1, 217, 214, 213, 212, -1, -1, -1, 216, -1, -1, -1, 226, 223, 222, -1, -1, 225, -1, -1, -1, 233, 232, 231, -1, -1, -1, -1, -1, 285, 284, 283, 280, 275, 268, 267, 266, 257, 254, 251, 248, -1, 250, -1, -1, 253, -1, -1, 256, -1, -1, 265, 264, 263, 262, -1, -1, -1, -1, -1, -1, -1, 274, 273, 272, -1, -1, -1, -1, 279, 278, -1, -1, -1, 282, -1, -1, -1, -1, 291, 290, 289, -1, -1, -1, -1, -1];
var thresholds = [0.5, 7500.0, 0.5, 0.5, 750.0, 0.5, 0.5, 350.0, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, 125000.0, 0.5, 77500.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 35000.0, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, -2.0, -2.0, 0.5, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, -2.0, -2.0, -2.0, 0.5, -2.0, -2.0, -2.0, -2.0, 0.5, 0.5, 0.5, -2.0, -2.0, -2.0, -2.0, -2.0];
var indices = [104, 122, 108, 110, 122, 77, 11, 122, 114, 56, 48, 94, -2, 12, -2, -2, 74, -2, -2, 46, -2, -2, 14, -2, -2, 4, 36, 64, -2, -2, -2, -2, -2, 54, -2, -2, 52, 37, 59, 10, 11, 2, 41, -2, 73, -2, -2, 88, 111, -2, -2, -2, -2, 55, 68, 50, -2, -2, -2, -2, -2, 5, -2, -2, -2, 0, 26, -2, -2, -2, 72, 92, 90, 18, 56, 29, 19, 17, 66, -2, 39, -2, -2, -2, -2, -2, -2, -2, 69, -2, -2, 48, -2, -2, -2, 122, 56, 122, 68, 37, 45, 20, 47, 91, 43, 76, 93, 36, 114, 55, 75, 85, 28, -2, 59, -2, -2, 67, -2, -2, 29, 61, 81, 46, -2, 54, -2, -2, -2, -2, -2, 29, -2, -2, 28, -2, -2, 10, -2, -2, 75, 50, -2, -2, -2, 1, 14, -2, -2, -2, 12, 10, -2, -2, -2, -2, -2, 122, -2, -2, 66, -2, -2, 75, -2, -2, 22, -2, -2, 14, 0, 13, 70, 86, 38, 88, 2, 9, 42, 1, -2, 17, -2, -2, -2, -2, -2, 67, 93, 24, 21, 63, -2, 30, -2, -2, 52, -2, -2, -2, -2, -2, -2, 47, -2, -2, -2, 81, 1, 60, 33, -2, -2, -2, 62, -2, -2, -2, 50, 108, 17, -2, -2, 48, -2, -2, -2, 89, 33, 43, -2, -2, -2, -2, -2, 53, 32, 86, 57, 55, 51, 87, 112, 13, 68, 2, 9, -2, 61, -2, -2, 12, -2, -2, 74, -2, -2, 89, 41, 27, 34, -2, -2, -2, -2, -2, -2, -2, 24, 94, 17, -2, -2, -2, -2, 18, 88, -2, -2, -2, 14, -2, -2, -2, -2, 0, 106, 26, -2, -2, -2, -2, -2];
var classes = [
    [344, 348, 338, 347],
    [344, 348, 338, 24],
    [341, 45, 12, 19],
    [335, 22, 4, 14],
    [334, 21, 4, 4],
    [288, 7, 2, 2],
    [287, 4, 2, 2],
    [287, 3, 2, 2],
    [272, 2, 1, 1],
    [268, 1, 1, 1],
    [262, 1, 1, 0],
    [256, 1, 0, 0],
    [250, 0, 0, 0],
    [6, 1, 0, 0],
    [6, 0, 0, 0],
    [0, 1, 0, 0],
    [6, 0, 1, 0],
    [6, 0, 0, 0],
    [0, 0, 1, 0],
    [6, 0, 0, 1],
    [6, 0, 0, 0],
    [0, 0, 0, 1],
    [4, 1, 0, 0],
    [4, 0, 0, 0],
    [0, 1, 0, 0],
    [15, 1, 1, 1],
    [15, 1, 0, 1],
    [15, 1, 0, 0],
    [15, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 3, 0, 0],
    [0, 3, 0, 0],
    [1, 0, 0, 0],
    [46, 14, 2, 2],
    [46, 10, 2, 2],
    [44, 5, 2, 2],
    [44, 3, 2, 2],
    [43, 2, 1, 1],
    [43, 1, 1, 1],
    [40, 0, 1, 0],
    [38, 0, 0, 0],
    [2, 0, 1, 0],
    [2, 0, 0, 0],
    [0, 0, 1, 0],
    [3, 1, 0, 1],
    [3, 0, 0, 1],
    [3, 0, 0, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 2, 0, 0],
    [2, 5, 0, 0],
    [0, 5, 0, 0],
    [2, 0, 0, 0],
    [0, 4, 0, 0],
    [1, 1, 0, 10],
    [0, 1, 0, 10],
    [0, 0, 0, 10],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [6, 23, 8, 5],
    [6, 23, 8, 1],
    [3, 23, 6, 1],
    [2, 23, 4, 1],
    [2, 23, 2, 1],
    [2, 23, 1, 1],
    [2, 23, 0, 1],
    [1, 23, 0, 1],
    [0, 23, 0, 1],
    [0, 21, 0, 0],
    [0, 2, 0, 1],
    [0, 2, 0, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 2, 0],
    [1, 0, 2, 0],
    [1, 0, 0, 0],
    [0, 0, 2, 0],
    [3, 0, 2, 0],
    [3, 0, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 0, 4],
    [3, 303, 326, 5],
    [3, 267, 161, 5],
    [3, 267, 138, 5],
    [2, 157, 45, 3],
    [2, 156, 34, 3],
    [2, 152, 26, 3],
    [2, 148, 19, 3],
    [2, 146, 15, 3],
    [2, 146, 14, 3],
    [2, 146, 13, 3],
    [2, 134, 8, 3],
    [1, 133, 7, 3],
    [1, 132, 6, 2],
    [0, 131, 6, 2],
    [0, 130, 6, 1],
    [0, 128, 5, 1],
    [0, 92, 1, 1],
    [0, 88, 1, 0],
    [0, 78, 0, 0],
    [0, 10, 1, 0],
    [0, 10, 0, 0],
    [0, 0, 1, 0],
    [0, 4, 0, 1],
    [0, 4, 0, 0],
    [0, 0, 0, 1],
    [0, 36, 4, 0],
    [0, 36, 3, 0],
    [0, 36, 2, 0],
    [0, 36, 1, 0],
    [0, 35, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 2, 1, 0],
    [0, 2, 0, 0],
    [0, 0, 1, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
    [0, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 0, 0],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 12, 5, 0],
    [0, 12, 2, 0],
    [0, 12, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 3, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 2, 4, 0],
    [0, 2, 0, 0],
    [0, 0, 4, 0],
    [0, 4, 7, 0],
    [0, 0, 7, 0],
    [0, 4, 0, 0],
    [0, 4, 8, 0],
    [0, 4, 0, 0],
    [0, 0, 8, 0],
    [0, 1, 11, 0],
    [0, 0, 11, 0],
    [0, 1, 0, 0],
    [1, 110, 93, 2],
    [1, 68, 86, 2],
    [1, 43, 77, 2],
    [1, 27, 69, 2],
    [1, 21, 69, 2],
    [0, 18, 69, 2],
    [0, 15, 69, 2],
    [0, 8, 12, 2],
    [0, 8, 12, 0],
    [0, 5, 12, 0],
    [0, 3, 12, 0],
    [0, 0, 10, 0],
    [0, 3, 2, 0],
    [0, 3, 0, 0],
    [0, 0, 2, 0],
    [0, 2, 0, 0],
    [0, 3, 0, 0],
    [0, 0, 0, 2],
    [0, 7, 57, 0],
    [0, 4, 57, 0],
    [0, 3, 57, 0],
    [0, 2, 57, 0],
    [0, 1, 53, 0],
    [0, 0, 49, 0],
    [0, 1, 4, 0],
    [0, 0, 4, 0],
    [0, 1, 0, 0],
    [0, 1, 4, 0],
    [0, 0, 4, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 3, 0, 0],
    [0, 3, 0, 0],
    [1, 3, 0, 0],
    [0, 3, 0, 0],
    [1, 0, 0, 0],
    [0, 6, 0, 0],
    [0, 16, 8, 0],
    [0, 16, 4, 0],
    [0, 15, 2, 0],
    [0, 15, 1, 0],
    [0, 15, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 1, 2, 0],
    [0, 1, 0, 0],
    [0, 0, 2, 0],
    [0, 0, 4, 0],
    [0, 25, 9, 0],
    [0, 25, 5, 0],
    [0, 2, 4, 0],
    [0, 2, 0, 0],
    [0, 0, 4, 0],
    [0, 23, 1, 0],
    [0, 23, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 4, 0],
    [0, 42, 7, 0],
    [0, 42, 4, 0],
    [0, 42, 1, 0],
    [0, 42, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 3, 0],
    [0, 0, 3, 0],
    [0, 0, 23, 0],
    [0, 36, 165, 0],
    [0, 27, 158, 0],
    [0, 24, 158, 0],
    [0, 22, 158, 0],
    [0, 19, 156, 0],
    [0, 15, 151, 0],
    [0, 11, 144, 0],
    [0, 10, 144, 0],
    [0, 9, 144, 0],
    [0, 4, 118, 0],
    [0, 2, 111, 0],
    [0, 1, 108, 0],
    [0, 0, 105, 0],
    [0, 1, 3, 0],
    [0, 1, 0, 0],
    [0, 0, 3, 0],
    [0, 1, 3, 0],
    [0, 1, 0, 0],
    [0, 0, 3, 0],
    [0, 2, 7, 0],
    [0, 0, 7, 0],
    [0, 2, 0, 0],
    [0, 5, 26, 0],
    [0, 3, 26, 0],
    [0, 2, 26, 0],
    [0, 1, 26, 0],
    [0, 0, 26, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 2, 0, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 4, 7, 0],
    [0, 2, 7, 0],
    [0, 1, 7, 0],
    [0, 0, 7, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 2, 0, 0],
    [0, 4, 5, 0],
    [0, 1, 5, 0],
    [0, 1, 0, 0],
    [0, 0, 5, 0],
    [0, 3, 0, 0],
    [0, 3, 2, 0],
    [0, 3, 0, 0],
    [0, 0, 2, 0],
    [0, 2, 0, 0],
    [0, 3, 0, 0],
    [0, 9, 7, 0],
    [0, 2, 7, 0],
    [0, 1, 7, 0],
    [0, 0, 7, 0],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
    [0, 7, 0, 0],
    [0, 0, 0, 323]
];


// Prediction:
var clf = new DecisionTreeClassifier(lChilds, rChilds, thresholds, indices, classes);

function validateForm(features, report) {
    if (features.length > 0) {
        //let features = x_input.split(",").map(Number);
        var prediction = clf.predict(features);
        return {
            prediction,
            features,
            recommendation: getRecommendation(report)
        }
    }
    return null;
}

var recommendationObject = {
    Binondo: {
        classes: {
            TIME: ['10AM', '11AM', '12PM', '2PM', '5PM'],
            MONTH: ['JAN', 'FEB', 'MAY', 'AUG', 'OCT', 'NOV'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'Open Flame', 'LPG'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Rubbish']
        },
        existing: ['Barangay Ugnayan', 'Identify Fire Hydrant and Prone Areas', 'Checking of Fire Equipment', 'Checking of Fire Hazard (low cable, narrow street)', 'Fire Safety Seminar and Drills'  ],
        suggested: ['House to House Campaign of Fire Safety', 'Regular Posting of Contact and Locations of BFP Police, Hospital, and Evacuation', 'Fire Truck Positioning', 'Addtional equipment and fire hydrants']
    },
    Ermita: {
        classes: {
            TIME: ['2PM', '4PM', '6PM', '7PM', '8PM', '9PM', '10PM'],
            MONTH: ['MARCH', 'MAY', 'JUNE', 'JULY', 'SEPT', 'OCT', 'NOV', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'Open Flame', 'LPG'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Vehicle']
        },
        existing: ['Distribution of Safety Flyers', 'Inspection of narrow streets and hydrant', 'Testing and checking of equipment', 'Barangay Ugnayan', 'Fire Safety Seminar and Drills'  ],
        suggested: ['Fire awareness campaign quarterly', 'Crowd Management', 'Update of Road information', 'Creation of Brgy Fire Brigade', 'Additional truck, hydrants and other equipment']
    },
    Intramuros: {
        classes: {
            TIME: ['12PM', '3PM', '7PM', '8PM'],
            MONTH: ['FEB', 'MAY', 'MARCH', 'OCT', 'NOV'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'LPG leak'],
            ESTABLISHMENT: ['Electrical', 'Residential', 'Unclear']
        },
        existing: ['Giving flyers for fire safety tips', 'Barangay Ugnayan', 'Identify fire hazard/congested areas', 'checking of road obstructions', 'checking of intertwining electrical and cable wire'],
        suggested: ['recommend proper authorities for clearing operation on road obstruction', 'additional fire truck', 'provide fire equipments', 'identify access road to alternate route to narrow street', 'Oplan Pamayanan (House to House Campaign)']
    },
    Malate: {
        classes: {
            TIME: ['5PM', '7PM', '8PM', '9PM', '2AM', '11AM'],
            MONTH: ['JAN', 'MARCH', 'APRIL', 'MAY', 'JULY', 'AUG'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'LPG leak'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential']
        },
        existing: ['Barangay Ugnayan', 'Distribution of Safety Flyers', 'Testing and checking of equipment', 'Inspection of narrow streets and hydrant', 'Fire Safety Seminar and Drills' ],
        suggested: ['Update of Road information', 'Fire awareness campaign quarterly', 'Creation of Brgy Fire Brigade', 'Crowd Management', 'Additional truck, hydrants and other equipment']
    },
    Paco: {
        classes: {
            TIME: ['9AM', '10AM', '12PM', '11PM', '6pm', '8pm'],
            MONTH: ['FEB', 'MARCH', 'APR', 'MAY', 'JULY', 'OCT', 'NOV'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'Open Flame', 'LPG'],
            ESTABLISHMENT: ['Rubbish', 'Electrical', 'Residential', 'Vehicle']
        },
        existing: ['Barangay Ugnayan', 'Flyer Distribution', '. Checking of Fire hazzard' ],
        suggested: ['House to House Campaign', 'Coordinate the electrical issue to proper authorities', 'Removal of illegal parking and other obstruction', 'Posting of different location of fire hydrants', 'Reducing the usage of electrical appliances and devices during preparation of lunch and dinner']
    },
    Pandacan: {
        classes: {
            TIME: ['7PM', '6PM', '8PM', '10PM', '10AM', '11AM'],
            MONTH: ['MAY', 'JUNE', 'JULY', 'JAN', 'SEPT', 'OCT'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'Aircon'],
            ESTABLISHMENT: ['Rubbish', 'Electrical', 'Residential', 'Vehicle']
        },
        existing: ['Fire Safety and Disaster Campaign', 'Monitoring of Fire Prone Areas', 'Barangay Ugnayan', '. Identify  alternate route', 'Identify fire hazard, defective hydrant & low cables' ],
        suggested: ['Strengthen and Improve Brgy Fire brigdae', 'Regular checking of fire hydrant and other fire fighting equipment', '. Posting of nearest BFP, Police, Hospital, Evacuation', 'Strategic Fire truck Positioning', 'Installation of Fire Warning System']

    },
    "Port Area": {
        classes: {
            TIME: ['7PM', '8PM', '10PM', '11PM', '9AM'],
            MONTH: ['JAN', 'MAY', 'OCT', 'NOV'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Vehicle']
        },
        existing: ['Giving flyers for fire safety tips', 'Barangay Ugnayan', 'identify fire hazard/congested areas', 'checking of road obstructions', 'checking of intertwining electrical and cable wire' ],
        suggested: ['Posting of nearest BFP, Police, Hospital, Evacuation', 'House to House Campaign', 'Reducing the usage of electrical appliances and devices during preparation of dinner', 'Creation of Brgy Fire Brigade', 'Implementation of clearing obstruction']

    },
    Quiapo: {
        classes: {
            TIME: ['5PM', '6PM', '7PM', '8PM', '1OAM', '11AM'],
            MONTH: ['JAN', 'FEB', 'MAY', 'JUNE', 'JULY', 'SEPT', 'OCT'],
            CAUSES: ['Electrical', 'Under Investigation', 'Cigarette', 'Open Flame', 'LPG', 'Arson'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Rubbish', 'Recom']
        },
        existing: ['Barangay Ugnayan', 'Flyers Dissemination to Residents', 'Direct Information of Safety and Emergency Awareness' ],
        suggested: ['Removal of different obstruction on roads and hydrant', 'Compose of Brgy. Fire Bridage', 'Identify access road and alternate route to fire prone areas', 'Posting of contacts and location of BFP, Police, Hospital and Evacuation', 'Reducing the usage of electrical devices during preparation of dinner']

    },
    Sampaloc: {
        classes: {
            TIME: ['6PM', '7PM', '8PM', '9PM', '10AM', '11AM', '12PM', '1PM'],
            MONTH: ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'Open Flame', 'LPG', 'Cigarette', 'Candle'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Vehicle', 'Rubbish', 'Recom']
        },
        existing: ['Identify Fire Prone Areas/Fire Hazard', 'Barangay Ugnayan', 'Location of Nearest Fire Hydrant', 'Obstruction of Roads/Street', 'Identify the location of evacuation, hospital, bfp, police' ],
        suggested: ['house to House Campaign of Fire Safety', 'Posting of Fire Safety Tips', 'Frequent Fire Safety Seminar and Drills', 'Brgy. Fire Brigade', 'Strategic Fire Truck Positioning', 'Clearing the obstruction along narrow streets', 'Additional fire hydrants, truck', 'Contact the Meralco for electrical connection issues and MAYNILAD for water resources']

    },
    'Santa Mesa': {
        classes: {
            TIME: ['6PM', '7PM', '8PM', '9PM', '10AM', '11AM', '12PM', '1PM'],
            MONTH: ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'Open Flame', 'LPG', 'Cigarette', 'Candle'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Vehicle', 'Rubbish', 'Recom']
        },
        existing: ['Identify Fire Prone Areas/Fire Hazard', 'Barangay Ugnayan', 'Location of Nearest Fire Hydrant', 'Obstruction of Roads/Street', 'Identify the location of evacuation, hospital, bfp, police' ],
        suggested: ['house to House Campaign of Fire Safety', 'Posting of Fire Safety Tips', 'Frequent Fire Safety Seminar and Drills', 'Brgy. Fire Brigade', 'Strategic Fire Truck Positioning', 'Clearing the obstruction along narrow streets', 'Additional fire hydrants, truck', 'Contact the Meralco for electrical connection issues and MAYNILAD for water resources']

    },
    'San Andres': {
        classes: {
            TIME: ['5AM', '7PM', '8PM', '9PM'],
            MONTH: ['JAN', 'JULY', 'NOV'],
            CAUSES: ['Electrical', 'Under Investigation', 'Candle', 'Cigarette'],
            ESTABLISHMENT: ['Electrical', 'Residential']
        },
        existing: ['Barangay Ugnayan', 'Firemen Visibility', 'Identify Fire Prone Areas', 'House to House Campaign', 'Distribution of Fire Safety leaflets', 'Fire Hydrant testing and inspection' ],
        suggested: ['Create Brgy Fire Bridage', 'request of additional fire equipments', 'Reducing the usage of electrical devices during preparation of lunch and dinner', 'Additional fire truck', 'Routing Plan and Clearing of obstruction' ]

    },
    'San Miguel': {
        classes: {
            TIME: ['6PM', '7PM', '8PM', '11AM', '12PM', '1PM'],
            MONTH: ['JAN', 'MAY', 'JUNE', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'LPG', 'Cigarette'],
            ESTABLISHMENT: ['Electrical']
        },
        existing: ['Barangay Ugnayan', 'House to House Campaign', 'Flyers Dissemination to Residents', 'Direct Information of Safety and Emergency Awareness' ],
        suggested: ['Clearing of obstruction along roads', 'Additional equipment', 'Reducing the usage of electrical devices during preparation of lunch and dinner', 'Route plan and make secondary exits', ]

    },
    'San Nicolas': {
        classes: {
            TIME: ['4PM', '7PM'],
            MONTH: [],
            CAUSES: ['Electrical'],
            ESTABLISHMENT: ['Electrical']
        },
        existing: ['Barangay Ugnayan', 'House to House Campaign', 'Fire Truck Visibility' ],
        suggested: ['Posting of Fire Safety Tips', 'Fire Safety Seminar and Drills', 'Brgy. Fire Brigade', 'Working fire fighting equipments', ]
    },
    'Santa Ana': {
        classes: {
            TIME: ['6PM', '7PM', '9PM', '10PM', '10AM', '11AM', '12PM', '1PM'],
            MONTH: ['JAN', 'FEB', 'APRIL', 'MAY', 'JUNE', 'JULY', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'LPG Leak', 'Cigarette', 'Candle'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Vehicle', 'Rubbish']
        },
        existing: ['Barangay ugnayan', 'Firemen Visibility', 'Identify Fire Prone Areas', 'House to House Campaign', 'Distribution of Fire Safety leaflets', 'Fire Hydrant testing and inspection' ],
        suggested: ['Create Brgy Fire Bridage', 'request of additional fire equipments', 'Reducing the usage of electrical devices during preparation of lunch and dinner', 'Additional fire truck', 'Routing Plan and Clearing of obstruction' ]

    },
    'Santa Cruz': {
        classes: {
            TIME: ['7PM', '8PM', '9PM', '10PM', '10AM', '11AM', '12PM', '1PM'],
            MONTH: ['DEC', 'JAN', 'FEB', 'AUG', 'APRIL', 'MAY'],
            CAUSES: ['Electrical', 'Under Investigation', 'Open Flame', 'LPG', 'Cigarette'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Recom', 'Rubbish']
        },
        existing: ['Distribution of Fire Safety leaflets', 'Inspection Alleys and streets', 'Barangay ugnayan', 'identify fire hazard', 'Fire Truck positioning' ],
        suggested: ['Reducing the usage of electrical devices during preparation of lunch and dinner', 'Create Brgy Fire Bridage', 'Installation of early warning system', 'Routing plan', 'update Road Information', 'Regular checking of fire fighting equipment' ]

    },
    Tondo: {
        classes: {
            TIME: ['5PM', '6PM', '9AM', '7PM', '8PM', '9PM', '10PM', '10AM', '11AM', '12PM'],
            MONTH: ['JAN', 'FEB', 'MAR', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'],
            CAUSES: ['Electrical', 'Under Investigation', 'Open Flame', 'LPG', 'Cigarette'],
            ESTABLISHMENT: ['Commercial', 'Electrical', 'Residential', 'Rubbish', 'Vehicle']
        },
        existing: ['Barangay ugnayan', 'Conduct of Fire Safety Seminars and Drills', 'Identify and inspection of hydrant', 'Organize Fire Bridage', 'Posting of Fire Safety Tips', 'Identification of Nearest evacuation, hospital and hydrant ' ],
        suggested: ['Strict Implementation House to House Campaign', 'Checking of Electrical connection with the help of MERALCO', 'Request for additional Fire Hydrant and water source to MAYNILAD', 'Clearing of road obstruction in narrow streets', 'Crowd management', 'Make Secondary exits', 'Additional fire truck and personnel', 'Increase number of fire volunteers and group multipliers' ]

    },

}

function getRecommendation(report) {
    console.log(report)
    let district_data = recommendationObject[report.DISTRICT]

    if (district_data) {
        console.log(district_data)
        var pass = 0

        Object.keys(district_data.classes).map(key => {
            let class_type = district_data.classes[key]

            if (class_type.length == 0) {
                pass++
            } else {
                class_type.map((item_value) => {
                    if (report[key]) {
                        if (report[key].indexOf(item_value) !== -1) {
                            pass++
                        }
                    }

                })
            }
        })

        if (pass >= 3) {
            return {
                suggested: district_data.suggested,
                existing: district_data.existing
            }
        }
    }

    return null
}