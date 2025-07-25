PATH_YML := ./srcs/docker-compose.yml
USER := $(shell whoami)
DATA_DIR := /home/$(USER)/data/mariadb

.PHONY: all up clean fclean re

$(NAME): up

up:
		mkdir -p $(DATA_DIR)
		docker-compose -f $(PATH_YML) up --build

all: up

clean: 
		docker-compose -f $(PATH_YML) down -v

fclean: clean
		docker system prune -af --volumes
		rm -rf $(DATA_DIR)/*

re: fclean all
