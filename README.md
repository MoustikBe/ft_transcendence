In order to have a version that can work directly when you download the git you need to configure the .env file
1. Create it in src/.env
2. Fill it with thoses data (see at the end of the files)
3. Make sure you edit your /etc/hosts with : 127.0.0.1   	transcendence.42.fr
4. For making it work in sgoinfre of 42 -> use port 4443 at the place of 443 and access throw https://localhost:4443
----------------------------------
DOMAIN_NAME=transcendence.42.fr

#sql configuration
SQL_DATABASE=transcendence
SQL_USER=
SQL_PASSWORD=
SQL_ROOT_PASSWORD=

#wordpress configuration
SITE_TITLE=transcendence
ADMIN_USER=
ADMIN_PASSWORD=
ADMIN_EMAIL=


#other client
USER1_LOGIN=
USER1_PASS=
USER1_MAIL=


