-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: fseletro
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'Juliana',NULL,NULL,NULL);
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `contato`
--

LOCK TABLES `contato` WRITE;
/*!40000 ALTER TABLE `contato` DISABLE KEYS */;
INSERT INTO `contato` VALUES (1,'Paula','juliana.costa@juliana.com',21123456789,'Muito bom','2020-10-30 22:58:15'),(2,'Giovanna','juliana.costa@juliana.com',21123456789,'olá isso é um teste para ver se a mensagem chega no db e se a quantidade de caracteres aqui foi o suficiente, favor entrar em contato para mais inforamações sobre o meu problema ','2020-10-30 23:07:08'),(3,'Henrique','juliana.costa@juliana.com',21123456789,'Muito bom','2020-10-30 23:20:35'),(4,'Juliana','juliana.costa@juliana.com',21123456789,'Satisfeita','2020-11-06 09:46:03');
/*!40000 ALTER TABLE `contato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES (1,NULL,'Juliana',NULL,'Geladeira Consul Frost Free com Dispenser 540L',1.00,2900),(2,NULL,'Paula',NULL,'Geladeira Consul Frost Free com Dispenser 540L',NULL,2900);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'geladeira','Geladeira Consul Frost Free com Dispenser 540L',3499.99,2899.99,'geladeiraconsul.png'),(2,'geladeira','Geladeira Refrigerador Electrolux Cycle Defrost 362L',2399.99,1560.90,'geladeiraeletrolux.png'),(3,'geladeira','Geladeira Samsung Automatica Duplex 384L',3450.90,2239.99,'geladeirasamsung.png'),(4,'fogao','Fogao Bosch Inox com 5 Bocas 110V ',1199.99,879.99,'fogaobosch.png'),(5,'fogao','Fogao Electrolux Eletrico Digital com 5 Bocas 110V',6499.99,5199.99,'fogaoelectrolux.png'),(6,'lavaloucas','Lava Loucas Brastemp Inox com Ciclo Pesado 110V',3259.99,2189.99,'lavaloucasbrastemp.png'),(7,'lavaloucas','Lava Loucas Electrolux com 10 Servicos 110V',3289.99,2899.99,'lavaloucaselectrolux.png'),(8,'lavaroupas','Lava Roupas Brastemp 9kg com Ciclo Tira Manchas 110V',3789.99,2899.89,'lavaroupasbrastemp.png'),(9,'microondas','Microondas Panasonic Digital com Funcao Kids 29L',449.90,369.89,'microondaspanasonic.png');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-04 17:22:15
