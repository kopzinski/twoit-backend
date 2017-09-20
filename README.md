# Lunch App - Sistema de escolha democrativa de restaurante

Desenvolvido com backend NodeJS e frontend Angular2.

## Tecnologias

Backend: NodeJS
Frontend: Angular2
Database: NeDB (NoSQL)

## Dados atuais
Estão precadastrados os usuarios:
kop
joao
jose
maria

E 4 restaurantes:
local aaa
local bbb
local ccc
local ddd

## Testes
Infelizmente não escrevi testes para este projeto. Questões de tempo.

## Pre-requisitos

É necessário ter o NodeJS e NPM funcionando.

## Run

Para rodar abra o diretorio lunchjs e execute o comando "node lunch.js"

## WebServices
Seguem as opções de serviço:

POST    /api/login
POST    /api/restaurantes
GET     /api/restaurantes
GET     /api/campeao
DELETE  /api/restaurantes/:restauranteId
GET     /api/restaurantes/:restauranteId
PUT     /api/restaurantes/:restauranteId
POST    /api/usuarios
GET     /api/usuarios
DELETE  /api/usuarios/:usuarioId
GET     /api/usuarios/:usuarioId
PUT     /api/usuarios/:usuarioId
