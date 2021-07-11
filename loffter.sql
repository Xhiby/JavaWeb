/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : loffter

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 11/07/2021 19:42:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for index_tis
-- ----------------------------
DROP TABLE IF EXISTS `index_tis`;
CREATE TABLE `index_tis`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `imgsrc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(10000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 76 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of index_tis
-- ----------------------------
INSERT INTO `index_tis` VALUES (1, 'Eone', '/user_upload_tis/show.jpg', '', '她真可爱!!');
INSERT INTO `index_tis` VALUES (2, 'Eone', '', 'LOFTER，从简约中领悟品质的真谛', '有没有那么一件单品、一张照片、一副美景或一杯暖饮，让你流连忘返、回味无穷？LOFTER的视觉设计，希望悄悄的留住你的视线，带给你唯一却熟悉的感觉…\r\n\r\n');
INSERT INTO `index_tis` VALUES (3, 'Eone', '/user_upload_tis/show1.jpg', '标题', '今天要去哪玩呢..');
INSERT INTO `index_tis` VALUES (8, 'Eone', '/user_upload_tis/1.jpg', '', '');
INSERT INTO `index_tis` VALUES (10, 'Eone', '/user_upload_tis/2.jpg', '', '');
INSERT INTO `index_tis` VALUES (12, 'Eone', '/user_upload_tis/3.jpg', '', '');
INSERT INTO `index_tis` VALUES (14, 'Wu', '/user_upload_tis/4.jpg', '', '神秘');
INSERT INTO `index_tis` VALUES (16, 'Wu', '/user_upload_tis/5.jpg', '', '这风车真白');
INSERT INTO `index_tis` VALUES (18, 'Wu', '/user_upload_tis/6.jpg', '', '真不戳');
INSERT INTO `index_tis` VALUES (20, 'Wu', '/user_upload_tis/7.jpg', '', '今晚的烟花..能陪我一起去看吗?');
INSERT INTO `index_tis` VALUES (22, 'Wu', '/user_upload_tis/8.jpg', '', '');
INSERT INTO `index_tis` VALUES (24, 'Wu', '/user_upload_tis/9.jpg', '', '');
INSERT INTO `index_tis` VALUES (26, 'Wu', '/user_upload_tis/10.jpg', '', '爱笑的你最可爱!!');
INSERT INTO `index_tis` VALUES (28, 'Test', '/user_upload_tis/11.jpg', '', '今天光线不错');
INSERT INTO `index_tis` VALUES (30, 'Test', '/user_upload_tis/12.jpg', '', '盒子里的猫娘? 喜欢吗 ^_^');
INSERT INTO `index_tis` VALUES (56, 'Test', '', 'LOFTER——专注兴趣，分享创作', '精致体验：LOFTER追求精致入微的视觉和交互体验，为每一片内容精心度量，让你的视角所触及的每一个像素，都蕴含独具匠心的精致设计。\r\n极简易用：LOFTER在功能方面努力做到简单易用，希望让用户的每一次操作都能简单快捷、随性而为，从而满足目标用户碎片化、高效率的记录需求。\r\n内容品质：LOFTER推崇纯粹的内容主义，摒弃一切与内容无关的琐碎和繁杂，并希望通过挖掘和推荐，打造一系列优秀的LOFTERS，激活目标用户的阅读兴趣。\r\n\r\n');
INSERT INTO `index_tis` VALUES (68, 'Test', NULL, '当你快挺不住的时候,磨难也挺不住了。', '');
INSERT INTO `index_tis` VALUES (69, 'Test', NULL, '秋风起', '秋风清，落叶起。  流浪的人儿你在何地。  风吹起，你的发鬓。  拂过你耳畔卿卿。  带着咿咿哩哩，  是熟悉的声音。  会不会想起，  谁的眼睛，  清澈见底。    天边云，门前溪。  歌唱的女孩儿在那里。  随风起，戴着爱意。  平了山河难平意。  迎着春风十里，  不如你的细语。  会不会想起，  谁的光阴，  有没有你。');
INSERT INTO `index_tis` VALUES (71, 'Test', '/user_upload_tis/1624292206970.jpg', NULL, '阿橘');
INSERT INTO `index_tis` VALUES (74, 'Wu', NULL, '苦中作乐那是圣人作乐，我在乐中也不知乐，', '');
INSERT INTO `index_tis` VALUES (75, 'Eone', '/user_upload_tis/1624292354338.jpg', NULL, '我想在你身上钻木取火，点燃此生');
INSERT INTO `index_tis` VALUES (76, 'Eone', '/user_upload_tis/1624292408592.jpg', NULL, '如果黑暗里没有人赐予我们光明，我们就自己给自己掌灯。 ');

-- ----------------------------
-- Table structure for user_tis
-- ----------------------------
DROP TABLE IF EXISTS `user_tis`;
CREATE TABLE `user_tis`  (
  `userid` int(0) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `userimg` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '/user_upload_img/1623560217728.png',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_tis
-- ----------------------------
INSERT INTO `user_tis` VALUES (1, 'Wu', '123', '/user_upload_img/1624248897044.jpg');
INSERT INTO `user_tis` VALUES (2, 'Eone', '123', '/user_upload_img/1623580208248.jpg');
INSERT INTO `user_tis` VALUES (3, 'Test', '123', '/user_upload_img/1623564354925.jpg');

SET FOREIGN_KEY_CHECKS = 1;
