default:
	@echo "Check Makefile for targets"

dev:
	docker-compose -f stack/stack.yml -p nuxtbase up \
		--no-deps --build --remove-orphans --force-recreate \
		pocketbase frontend landing