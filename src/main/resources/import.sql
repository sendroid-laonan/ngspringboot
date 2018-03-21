/*用户信息导入*/
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('superuser', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'superuser01');
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('user', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'user0001');

/*权限表数据导入 authority*/
INSERT INTO sendroids.authority (name, authority) VALUES ('user', 'USER');
INSERT INTO sendroids.authority (name, authority) VALUES ('superuser', 'SUPER_FORESTRY');

/*角色权限中间表数据导入 user_authority*/
INSERT INTO sendroids.user_authority (user_id, authority_id) values(1,1);
INSERT INTO sendroids.user_authority (user_id, authority_id) values(2,2);

INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (1, '第一件商品', 700, 'http://c7.gg/KLCS', 5, '钢铁侠');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (2, '第二件商品', 500, 'http://c7.gg/KLDf', 4, '绿巨人');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (3, '第三件商品', 600, 'http://rrd.me/cU6QF', 4.5, '美国队长');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (4, '第四件商品', 250, 'http://rrd.me/cU6Q6', 3, '蜘蛛侠');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (5, '第五件商品', 100, 'http://rrd.me/cU6Q3', 2, '黑寡妇');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (6, '第六件商品', 500, 'http://kks.me/a5CTN', 4, '雷神');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (7, '第七件商品', 500, 'http://c7.gg/KMxr', 3.5, '绯红女巫');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (8, '第八件商品', 500, 'http://c7.gg/KMxM', 3.5, '黑豹');