/*用户信息导入*/
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('superuser', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'superuser01');
INSERT INTO sendroids.users (name, enabled, organization, password, username) VALUES ('user', true, 'organization', '$2a$10$/lTexwKe9fMC1Z5wlLuz9e4f8nJQa8P53Nwdo2Spj.0541UkmDX8e', 'user0001');

/*权限表数据导入 authority*/
INSERT INTO sendroids.authority (name, authority) VALUES ('user', 'USER');
INSERT INTO sendroids.authority (name, authority) VALUES ('superuser', 'SUPER_FORESTRY');

/*角色权限中间表数据导入 user_authority*/
INSERT INTO sendroids.user_authority (user_id, authority_id) values(1,1);
INSERT INTO sendroids.user_authority (user_id, authority_id) values(2,2);
