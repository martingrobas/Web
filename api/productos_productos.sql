CREATE DATABASE  IF NOT EXISTS `Productos` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `Productos`;
-- MySQL dump 10.13  Distrib 8.0.26, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: Productos
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `precio` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `categoria` varchar(45) DEFAULT NULL,
  `seEnvia` tinyint DEFAULT NULL,
  `seRetira` tinyint DEFAULT NULL,
  `imagenes` varchar(300) DEFAULT NULL,
  `imagenes2` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Silla Gaming','Silla bonita y delicada apta para todos los gamers',50000,5,78,'Gaming',1,1,'https://eloutput.com/app/uploads-eloutput.com/2020/10/Razer-Iskur-silla-gaming.jpg?x=480&y=375&quality=40','https://www.muycomputer.com/wp-content/uploads/2020/11/Trust-sillas-gaming-e1604478882742.jpg'),(2,'Teclado Corne','El teclado que todos los programadores desean',25500,5,12,'Gaming',1,1,'https://i.ytimg.com/vi/m4627C_dnps/maxresdefault.jpg','https://i.ytimg.com/vi/PORNXyLBeB4/maxresdefault.jpg'),(3,'Escritorio Gaming','Blanco, confortable y multifuncion',20000,3,92,'Gaming',1,1,'https://www.lidl.es/media/product/0/0/2/6/4/8/9/escritorio-blanco-zoom--2.jpg','https://i.pinimg.com/originals/9d/8a/a5/9d8aa559ae1aee99e07281e80abc5d66.jpg'),(4,'Consola xbox one','De ultima generacion',80000,3,71,'Gaming',1,1,'https://i.blogs.es/119bb7/xbox-one-1/450_1000.jpg','https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/01/xbox-one-s.jpg'),(5,'PlayStation 5','La mejor consola del año 2021',120000,4,13,'Gaming',1,1,'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/06/playstation-5-1964465.jpg?itok=EXk3Upcm','https://media.revistagq.com/photos/5fac283dfa14a4b433f675ab/16:9/w_1280,c_limit/playstation-5-critica.jpg'),(6,'Mouse Razer Deathrader','El ultimo mouse gaming del momento',16300,4,52,'Gaming',1,1,'https://s1.eestatic.com/2020/01/14/omicrono/hardware/videojuegos-hardware-ordenadores_459714478_142380794_1024x576.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVbpvM_0ei17DjiRAT_BEZZs7mjrRnTNDXg&usqp=CAU'),(7,'Joystick para PC','Para jugar mas comodo a los juegos de PC',4300,3,83,'Gaming',1,1,'http://d2r9epyceweg5n.cloudfront.net/stores/001/049/074/products/joystick-noga-ng-2131-para-pc-usb-d_nq_np_950024-mla28634253875_112018-f1-a632559080361ab7ff15893799171481-640-0.jpg','https://http2.mlstatic.com/D_NQ_NP_660878-MLA44752919640_012021-O.jpg'),(8,'Microfono Blue Yeti','El que todos los youtubers y streamers utilizan',33400,5,39,'Gaming',1,1,'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2021/08/blue-yeti-x-world-warcraft-edition-analisis-opinion-2451579.jpg?itok=99vY718h','https://www.macworld.es/cmsdata/slideshow/3791064/blue_yeti_x_principal.jpeg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 19:10:43
