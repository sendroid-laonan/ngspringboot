/*用户信息导入*/
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('superuser', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'superuser01');
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('user', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'user0001');

/*权限表数据导入 authority*/
INSERT INTO sendroids.authority (name, authority) VALUES ('user', 'USER');
INSERT INTO sendroids.authority (name, authority) VALUES ('superuser', 'SUPER_FORESTRY');

/*角色权限中间表数据导入 user_authority*/
INSERT INTO sendroids.user_authority (user_id, authority_id) values(1,1);
INSERT INTO sendroids.user_authority (user_id, authority_id) values(2,2);

INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (1, '第一件商品', 700, 'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=4aad268b793e6709aa0d4dad5aaef458/aa18972bd40735fa0be6941598510fb30f24080c.jpg', 5, '钢铁侠');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (2, '第二件商品', 500, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3161909102,1797636916&fm=27&gp=0.jpg', 4, '绿巨人');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (3, '第三件商品', 600, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2014643766,2990512176&fm=27&gp=0.jpg', 4.5, '美国队长');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (4, '第四件商品', 250, 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=935826160,647726659&fm=27&gp=0.jpg', 3, '蜘蛛侠');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (5, '第五件商品', 100, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4099230187,3694553795&fm=27&gp=0.jpg', 2, '黑寡妇');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (6, '第六件商品', 500, 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2817818411,691158177&fm=27&gp=0.jpg', 4, '雷神');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (7, '第七件商品', 500, 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4154569467,2324634667&fm=27&gp=0.jpg', 3.5, '绯红女巫');
INSERT INTO sendroids.product (id, title, price, url, rating, remark) VALUES (8, '第八件商品', 500, 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3877991492,3459567157&fm=27&gp=0.jpg', 3.5, '黑豹');
