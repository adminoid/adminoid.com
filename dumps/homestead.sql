-- MySQL dump 10.13  Distrib 5.7.19, for osx10.12 (x86_64)
--
-- Host: localhost    Database: homestead
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `feedback_messages`
--

DROP TABLE IF EXISTS `feedback_messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `feedback_messages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `message` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ip` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_agent` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback_messages`
--

LOCK TABLES `feedback_messages` WRITE;
/*!40000 ALTER TABLE `feedback_messages` DISABLE KEYS */;
/*!40000 ALTER TABLE `feedback_messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `folder` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `folder_in_public` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ext` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alt_ru` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `alt_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sort_order_id` int(11) DEFAULT NULL,
  `imageable_id` int(10) unsigned DEFAULT NULL,
  `imageable_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'public/images/portfolio/online-store-ikmed-ru','images/portfolio/online-store-ikmed-ru','0','jpg',NULL,NULL,0,7,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(2,'public/images/portfolio/online-store-ikmed-ru','images/portfolio/online-store-ikmed-ru','f_1545741da73a36a9','jpg',NULL,NULL,1,7,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(3,'public/images/portfolio/online-store-ikmed-ru','images/portfolio/online-store-ikmed-ru','f_3535741daa459a8d','jpg',NULL,NULL,2,7,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(4,'public/images/portfolio/online-store-ikmed-ru','images/portfolio/online-store-ikmed-ru','f_7345741daaadbd96','jpg',NULL,NULL,3,7,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(5,'public/images/portfolio/orders-control-panel-for-ikmed-ru','images/portfolio/orders-control-panel-for-ikmed-ru','f_14657436ae522b62','jpg',NULL,NULL,0,8,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(6,'public/images/portfolio/products-control-panel-for-ikmed-ru','images/portfolio/products-control-panel-for-ikmed-ru','0','jpg',NULL,NULL,0,9,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(7,'public/images/portfolio/products-control-panel-for-ikmed-ru','images/portfolio/products-control-panel-for-ikmed-ru','f_3105741bfd419e3d','jpg',NULL,NULL,1,9,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(8,'public/images/portfolio/products-control-panel-for-ikmed-ru','images/portfolio/products-control-panel-for-ikmed-ru','f_3495741bfd37ffb2','jpg',NULL,NULL,2,9,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(9,'public/images/portfolio/products-control-panel-for-ikmed-ru','images/portfolio/products-control-panel-for-ikmed-ru','f_4955741bfd3605da','jpg',NULL,NULL,3,9,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(10,'public/images/portfolio/prices-control-panel-for-ikmed-ru','images/portfolio/prices-control-panel-for-ikmed-ru','f_31957436ab2538b2','jpg',NULL,NULL,0,10,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(11,'public/images/portfolio/transfer-cpa-system','images/portfolio/transfer-cpa-system','0','jpg',NULL,NULL,0,11,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(12,'public/images/portfolio/transfer-cpa-system','images/portfolio/transfer-cpa-system','f_42258ad87fa5bfb4','jpg',NULL,NULL,1,11,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(13,'public/images/portfolio/e-shop-multilevel-referral-system','images/portfolio/e-shop-multilevel-referral-system','0','jpg',NULL,NULL,0,12,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(14,'public/images/portfolio/e-shop-multilevel-referral-system','images/portfolio/e-shop-multilevel-referral-system','f_01458ad8a2f10ae1','jpg',NULL,NULL,1,12,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(15,'public/images/portfolio/e-shop-multilevel-referral-system','images/portfolio/e-shop-multilevel-referral-system','f_99858ad8a4bafaf8','jpg',NULL,NULL,2,12,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(16,'public/images/portfolio/accounting-system-google-spreadsheet','images/portfolio/accounting-system-google-spreadsheet','f_89458ad8f9d7d5a1','jpg',NULL,NULL,0,13,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(17,'public/images/reviews/p-512719','images/reviews/p-512719','user-default-small','png','Виктория Власева',NULL,0,14,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(18,'public/images/reviews/p-487787','images/reviews/p-487787','user-default-small','png','Виктория Власева',NULL,0,15,'App\\Page','2017-11-02 09:49:43','2017-11-02 09:49:43'),(19,'public/images/reviews/p-483215','images/reviews/p-483215','user-default-small','png','Виктория Власева',NULL,0,16,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(20,'public/images/reviews/o-986653','images/reviews/o-986653','sm_f_506b359b77757','jpg','Игорь Варенников',NULL,0,17,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(21,'public/images/reviews/o-693422','images/reviews/o-693422','sm_f_4a393b7930b09','gif','Ideas-is-power Ideas',NULL,0,18,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(22,'public/images/reviews/o-654481','images/reviews/o-654481','user-default-small','png','roman som',NULL,0,19,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(23,'public/images/reviews/o-634582','images/reviews/o-634582','user-default-small','png','Людмила Кузьмина',NULL,0,20,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(24,'public/images/reviews/o-628902','images/reviews/o-628902','user-default-small','png','Andrey Medvedev',NULL,0,21,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(25,'public/images/reviews/o-626365','images/reviews/o-626365','user-default-small','png','Дмитрий Live',NULL,0,22,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(26,'public/images/reviews/o-611003','images/reviews/o-611003','sm_f_4d468237cd404','jpg','Ivan Bezfamilnyj',NULL,0,23,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(27,'public/images/reviews/o-592516','images/reviews/o-592516','sm_f_4b5b529bd88c2','jpg','Дмитрий Кипренский',NULL,0,24,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(28,'public/images/reviews/o-586571','images/reviews/o-586571','sm_f_4b9bbda34dced','jpg','Sergey Ts',NULL,0,25,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(29,'public/images/reviews/o-582584','images/reviews/o-582584','user-default-small','png','Vladislav Bosch',NULL,0,26,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(30,'public/images/reviews/o-352380','images/reviews/o-352380','sm_f_497331582d172','jpg','Mark Majorov',NULL,0,27,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(31,'public/images/reviews/o-335029','images/reviews/o-335029','user-default-small','png','Владимир Иванов',NULL,0,28,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(32,'public/images/reviews/o-328873','images/reviews/o-328873','sm_f_25557caeb903ff47','jpg','Андрей Макалкин',NULL,0,29,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44'),(33,'public/images/reviews/o-327774','images/reviews/o-327774','sm_f_4735ab4580d46','jpg','Дмитрий Соловей',NULL,0,30,'App\\Page','2017-11-02 09:49:44','2017-11-02 09:49:44');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (21,'2014_10_12_000000_create_users_table',1),(22,'2014_10_12_100000_create_password_resets_table',1),(23,'2017_02_13_124653_create_pages_table',1),(24,'2017_02_13_130314_create_images_table',1),(25,'2017_02_13_133253_create_tags_table',1),(26,'2017_02_13_133306_create_taggables_table',1),(27,'2017_02_13_133613_create_portfolio_works_table',1),(28,'2017_02_13_134912_create_news_table',1),(29,'2017_02_15_074202_create_reviews_table',1),(30,'2017_09_06_113336_create_feedback_messages_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `news`
--

DROP TABLE IF EXISTS `news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `news` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ru` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `content_ru` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_en` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `news`
--

LOCK TABLES `news` WRITE;
/*!40000 ALTER TABLE `news` DISABLE KEYS */;
/*!40000 ALTER TABLE `news` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pages`
--

DROP TABLE IF EXISTS `pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pages` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uri` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_ru` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_ru` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template_ru` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `template_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ru` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `content_ru` text COLLATE utf8mb4_unicode_ci,
  `content_en` text COLLATE utf8mb4_unicode_ci,
  `show_in_main_menu` tinyint(1) NOT NULL DEFAULT '1',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  `_lft` int(10) unsigned NOT NULL DEFAULT '0',
  `_rgt` int(10) unsigned NOT NULL DEFAULT '0',
  `parent_id` int(10) unsigned DEFAULT NULL,
  `pageable_id` int(11) DEFAULT NULL,
  `pageable_type` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `pages_parent_id_slug_unique` (`parent_id`,`slug`),
  UNIQUE KEY `pages_uri_unique` (`uri`),
  KEY `pages__lft__rgt_parent_id_index` (`_lft`,`_rgt`,`parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pages`
--

LOCK TABLES `pages` WRITE;
/*!40000 ALTER TABLE `pages` DISABLE KEYS */;
INSERT INTO `pages` VALUES (1,'index','index','Главная','Main page','Разработка сайтов','Website development','pages.ru.index','pages.en.index',NULL,NULL,NULL,NULL,0,1,1,2,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(2,'price','price','Цена','Price','Выгодная цена за фильтрованный концентрат','Reasonable price for the filtered concentrate','pages.ru.price','pages.en.price',NULL,NULL,NULL,NULL,1,1,3,4,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(3,'tools','tools','Инструменты','Tools','Инструменты, которые я использую для создания сайтов','The tools I use to create sites','pages.ru.tools','pages.en.tools',NULL,NULL,NULL,NULL,1,1,5,6,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(4,'workflow','workflow','Процесс','Workflow','Пример рабочего процесса при разработке сайта','An example of a workflow in site development','pages.ru.workflow','pages.en.workflow',NULL,NULL,NULL,NULL,1,1,7,8,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(5,'portfolio','portfolio','Портфолио','Portfolio','Портфолио','Portfolio','pages.ru.portfolio','pages.en.portfolio',NULL,NULL,NULL,NULL,1,1,9,24,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(6,'reviews','reviews','Отзывы','Reviews','Отзывы','Reviews','pages.ru.reviews','pages.en.reviews',NULL,NULL,NULL,NULL,1,1,25,60,NULL,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(7,'online-store-ikmed-ru','portfolio/online-store-ikmed-ru',NULL,NULL,'Интернет-магазин \"ikmed.ru\"','Online Store ikmed.ru',NULL,NULL,'Backend: \nPHP 5.6, Laravel 4.2, Ubuntu (homestead/Forge), Linode;<br> \nFrontend:<br>\nHTML5, CSS3, LESS, LESS, Twitter bootstrap 3, Grunt;<br> \nJavaScript, Vue.js, JQuery, ExtJS, and other simple js frameworks;<br> \n<br>\nИнтеграция с: СДЭК, Яндекс.Касса, Яндекс.Маркет<br> \nSEO-оптимизация','Backend:<br>\nPHP 5.6, Laravel 4.2, Ubuntu (homestead / Forge), Linode;<br>\nFrontend:<br>\nHTML5, CSS3, LESS, LESS, Twitter bootstrap 3, Grunt;<br>\nJavaScript, Vue.js, JQuery, ExtJS, and other simple js frameworks;<br>\n<br>\nIntegration: SDEK, Yandeks.Kassa, of Yandex.Market<br>\nSEO-optimization',NULL,NULL,1,1,10,11,5,1,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(8,'orders-control-panel-for-ikmed-ru','portfolio/orders-control-panel-for-ikmed-ru',NULL,NULL,'Админка заказов для Интернет-магазина \"ikmed.ru\"','Orders control panel for e-shop \"ikmed.ru\"',NULL,NULL,'','',NULL,NULL,1,1,12,13,5,2,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(9,'products-control-panel-for-ikmed-ru','portfolio/products-control-panel-for-ikmed-ru',NULL,NULL,'Админка товаров для Интернет-магазина \"ikmed.ru\"','Products control panel for e-shop \"ikmed.ru\"',NULL,NULL,'witter Bootstrap, LESS<br> \nDropzone.js<br>\nSummernote.js<br>\nCRUD/Laravel resource','Twitter Bootstrap, LESS<br> \nDropzone.js<br>\nSummernote.js<br>\nCRUD/Laravel resource',NULL,NULL,1,1,14,15,5,3,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(10,'prices-control-panel-for-ikmed-ru','portfolio/prices-control-panel-for-ikmed-ru',NULL,NULL,'Панель управления ценами и акциями, мониторинг позиций на Яндекс.Маркет для Интернет магазина \"ikmed.ru\"','Prices and stocks (and monitoring positions on Yandex.market) control panel for internet shop \"ikmed.ru\"',NULL,NULL,'Интерактивный интерфейс, при изменении цены (например) – динамически пересчитываются все цифры и определяется позиция на маркете.','Interactive interface, the price change (for example) - dynamically translated all the numbers and determined position in the convenience store.',NULL,NULL,1,1,16,17,5,4,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(11,'transfer-cpa-system','portfolio/transfer-cpa-system',NULL,NULL,'Перенос CPA системы на новую платформу','Transfer CPA system to a new platform',NULL,NULL,'','',NULL,NULL,1,1,18,19,5,5,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(12,'e-shop-multilevel-referral-system','portfolio/e-shop-multilevel-referral-system',NULL,NULL,'Разработка Интернет магазина с многоуровневой реферальной системой','Development of an E-shop with multilevel referral system',NULL,NULL,'','',NULL,NULL,1,1,20,21,5,6,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(13,'accounting-system-google-spreadsheet','portfolio/accounting-system-google-spreadsheet',NULL,NULL,'Автоматизированная система учета в Google spreadsheet','Automated accounting system in Google spreadsheet',NULL,NULL,'','',NULL,NULL,1,1,22,23,5,7,'App\\PortfolioWork','2017-11-02 09:49:43','2017-11-02 09:49:43'),(14,'p-512719','reviews/p-512719',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,26,27,6,1,'App\\Review','2017-11-02 09:49:43','2017-11-02 09:49:43'),(15,'p-487787','reviews/p-487787',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,28,29,6,2,'App\\Review','2017-11-02 09:49:43','2017-11-02 09:49:43'),(16,'p-483215','reviews/p-483215',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,30,31,6,3,'App\\Review','2017-11-02 09:49:43','2017-11-02 09:49:44'),(17,'o-986653','reviews/o-986653',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,32,33,6,4,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(18,'o-693422','reviews/o-693422',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,34,35,6,5,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(19,'o-654481','reviews/o-654481',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,36,37,6,6,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(20,'o-634582','reviews/o-634582',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,38,39,6,7,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(21,'o-628902','reviews/o-628902',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,40,41,6,8,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(22,'o-626365','reviews/o-626365',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,42,43,6,9,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(23,'o-611003','reviews/o-611003',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,44,45,6,10,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(24,'o-592516','reviews/o-592516',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,46,47,6,11,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(25,'o-586571','reviews/o-586571',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,48,49,6,12,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(26,'o-582584','reviews/o-582584',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,50,51,6,13,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(27,'o-352380','reviews/o-352380',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,52,53,6,14,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(28,'o-335029','reviews/o-335029',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,54,55,6,15,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(29,'o-328873','reviews/o-328873',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,56,57,6,16,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44'),(30,'o-327774','reviews/o-327774',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,1,58,59,6,17,'App\\Review','2017-11-02 09:49:44','2017-11-02 09:49:44');
/*!40000 ALTER TABLE `pages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`),
  KEY `password_resets_token_index` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `portfolio_works`
--

DROP TABLE IF EXISTS `portfolio_works`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `portfolio_works` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title_ru` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description_ru` text COLLATE utf8mb4_unicode_ci,
  `description_en` text COLLATE utf8mb4_unicode_ci,
  `sort_order_id` int(11) DEFAULT NULL,
  `priority_level` enum('high','middle','low') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'low',
  `external_url` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `custom_date` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `custom_face` tinyint(1) NOT NULL DEFAULT '0',
  `chunk_ru` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `chunk_en` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `portfolio_works`
--

LOCK TABLES `portfolio_works` WRITE;
/*!40000 ALTER TABLE `portfolio_works` DISABLE KEYS */;
INSERT INTO `portfolio_works` VALUES (1,'Интернет-магазин \"ikmed.ru\"','Online Store ikmed.ru','Backend: \nPHP 5.6, Laravel 4.2, Ubuntu (homestead/Forge), Linode;<br> \nFrontend:<br>\nHTML5, CSS3, LESS, LESS, Twitter bootstrap 3, Grunt;<br> \nJavaScript, Vue.js, JQuery, ExtJS, and other simple js frameworks;<br> \n<br>\nИнтеграция с: СДЭК, Яндекс.Касса, Яндекс.Маркет<br> \nSEO-оптимизация','Backend:<br>\nPHP 5.6, Laravel 4.2, Ubuntu (homestead / Forge), Linode;<br>\nFrontend:<br>\nHTML5, CSS3, LESS, LESS, Twitter bootstrap 3, Grunt;<br>\nJavaScript, Vue.js, JQuery, ExtJS, and other simple js frameworks;<br>\n<br>\nIntegration: SDEK, Yandeks.Kassa, of Yandex.Market<br>\nSEO-optimization',0,'high','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5683403','https://www.ikmed.ru','2015-2016',1,'chunks/ru/portfolios/1','chunks/en/portfolios/1','2017-11-02 09:49:43','2017-11-02 09:49:43'),(2,'Админка заказов для Интернет-магазина \"ikmed.ru\"','Orders control panel for e-shop \"ikmed.ru\"','','',1,'high','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5683426','https://www.ikmed.ru','2015',1,'chunks/ru/portfolios/2','chunks/en/portfolios/2','2017-11-02 09:49:43','2017-11-02 09:49:43'),(3,'Админка товаров для Интернет-магазина \"ikmed.ru\"','Products control panel for e-shop \"ikmed.ru\"','witter Bootstrap, LESS<br> \nDropzone.js<br>\nSummernote.js<br>\nCRUD/Laravel resource','Twitter Bootstrap, LESS<br> \nDropzone.js<br>\nSummernote.js<br>\nCRUD/Laravel resource',2,'high','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5683494','https://www.ikmed.ru','2016',1,'chunks/ru/portfolios/3','chunks/en/portfolios/3','2017-11-02 09:49:43','2017-11-02 09:49:43'),(4,'Панель управления ценами и акциями, мониторинг позиций на Яндекс.Маркет для Интернет магазина \"ikmed.ru\"','Prices and stocks (and monitoring positions on Yandex.market) control panel for internet shop \"ikmed.ru\"','Интерактивный интерфейс, при изменении цены (например) – динамически пересчитываются все цифры и определяется позиция на маркете.','Interactive interface, the price change (for example) - dynamically translated all the numbers and determined position in the convenience store.',3,'high','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5683489','https://www.ikmed.ru','2016',1,'chunks/ru/portfolios/4','chunks/en/portfolios/4','2017-11-02 09:49:43','2017-11-02 09:49:43'),(5,'Перенос CPA системы на новую платформу','Transfer CPA system to a new platform','','',4,'middle','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5952421','','2016',0,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(6,'Разработка Интернет магазина с многоуровневой реферальной системой','Development of an E-shop with multilevel referral system','','',5,'middle','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5952433','','2016',0,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43'),(7,'Автоматизированная система учета в Google spreadsheet','Automated accounting system in Google spreadsheet','','',6,'middle','https://www.fl.ru/users/adminoid/viewproj.php?prjid=5952433','','2016',0,NULL,NULL,'2017-11-02 09:49:43','2017-11-02 09:49:43');
/*!40000 ALTER TABLE `portfolio_works` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reviews` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nick` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content_ru` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_en` text COLLATE utf8mb4_unicode_ci,
  `link_to_review` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_to_profile` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link_to_project` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `portfolio_work_id` int(10) unsigned DEFAULT NULL,
  `published_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,'Виктория Власева','Gosti_tyt','Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.','','https://www.fl.ru/users/adminoid/opinions/#p_512719','https://www.fl.ru/users/Gosti_tyt/','https://www.fl.ru/bezopasnaya-sdelka/?id=99258',NULL,'2013-09-14 10:54:00','2017-11-02 09:49:43','2017-11-02 09:49:43'),(2,'Виктория Власева','Gosti_tyt','Спасибо за сотрудничество! Надежный и грамотный специалист.','','https://www.fl.ru/users/adminoid/opinions/#p_487787','https://www.fl.ru/users/Gosti_tyt/','https://www.fl.ru/bezopasnaya-sdelka/?id=97128',NULL,'2013-08-23 10:58:00','2017-11-02 09:49:43','2017-11-02 09:49:43'),(3,'Виктория Власева','Gosti_tyt','Замечательный специалист, работа сделана даже раньше срока и качественно. <br>  \nСтавлю большой + и работаю дальше.','','https://www.fl.ru/users/adminoid/opinions/#p_483215','https://www.fl.ru/users/Gosti_tyt/','https://www.fl.ru/bezopasnaya-sdelka/?id=97023',NULL,'2013-08-19 14:43:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(4,'Игорь Варенников','Igor_Varennikov','Петр очень приятный, грамотный специалист. К сожалению наше сотрудничество закончилось не успев толком начаться, но осталось очень приятное впечатление. Если понадобится что то по Modx буду обращаться.','','https://www.fl.ru/users/adminoid/opinions/#o_986653','https://www.fl.ru/users/Igor_Varennikov/','',NULL,'2012-02-08 18:59:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(5,'Ideas-is-power Ideas','leidea','Петр отличный специалист. Выполнили очень сложный проект на Modx с созданием настраиваемого расписания занятий. К работе относится очень внимательно, выполняет всю работу до конца. Очень доволен. Будем работать дальше.','','https://www.fl.ru/users/adminoid/opinions/#o_693422','https://www.fl.ru/users/leidea','',NULL,'2010-12-08 16:52:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(6,'roman som','r-startsev','Петр готовил сайт под ключ для нашей компании. Показал себя очень ответственным, и сделал сайт таким каким мы его хотели видеть. Работой доволен – буду обращаться еще.','','https://www.fl.ru/users/adminoid/opinions/#o_654481','https://www.fl.ru/users/r-startsev/','',NULL,'2010-10-16 18:38:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(7,'Людмила Кузьмина','ole108','Заказывали технический аудит сайта (анализ пригодности для продвижения в поисковых системах), поиск причин ошибок и их устранение. Работой довольны: оперативно, профессионально и грамотно. Продолжаем сотрудничество.','','https://www.fl.ru/users/adminoid/opinions/#o_634582','https://www.fl.ru/users/ole108/','',NULL,'2010-09-14 08:01:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(8,'Andrey Medvedev','usremont','Поработали с Петром!!! )))<br> \nНужен был парсер для сайта под MODx, скрипт который на основе тхт файла наполняет сайт статьями и заполняет поля кейвордов дискрипшнов и всё такое.<br>\nВсё сделано и даже всё работает)) Я очень доволен. )))<br> \nДо Петра за эту работу брались ещё два человека и безрезультатно, а тут за два дня всё было выполнено (кстати как и договаривалис). <br>\nРекомендую, отличный программист!!!','','https://www.fl.ru/users/adminoid/opinions/#o_628902','https://www.fl.ru/users/usremont/','',NULL,'2010-09-04 11:18:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(9,'Дмитрий Live','open_your_eyes','Сотрудничал, +','','https://www.fl.ru/users/adminoid/opinions/#o_626365','https://www.fl.ru/users/open_your_eyes/','',NULL,'2010-08-31 04:30:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(10,'Ivan Bezfamilnyj','Ruspath','Брал консультацию, все ок.','','https://www.fl.ru/users/adminoid/opinions/#o_611003','https://www.fl.ru/users/Ruspath/','',NULL,'2010-08-03 17:07:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(11,'Дмитрий Кипренский','DmitryKeeper','Петр – один из наиболее ответственных специалистов, с которыми приходилось работать. Также, судя по результатам работы, чрезвычайно грамотный программист. <br>\nКонкретно по проекту был выполнен перенос сайта на систему управления MODx, написан дополнительный функционал к MODx, создан интерфейс на JQuery. Задачи были не из простых, но решены были достаточно качественно и оперативно, в процессе предлагались различные способы решения.','','https://www.fl.ru/users/adminoid/opinions/#o_592516','https://www.fl.ru/users/DmitryKeeper/','',NULL,'2010-06-30 16:31:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(12,'Sergey Ts','nejik','Очень замечательный и хороший человек. Так же очень хороший программист. Выручил и порядочно выполнил все поставленные цели, в установленные сроки. Цель была создание и доработка шаблона и самого движка Livestreet. Так же исправил все баги с модулями. Во время работы консультировал и давал советы. Проделанной работой очень доволен. Все на высшем уровне. Большое спасибо, буду заказывать еще. Рекомендую!','','https://www.fl.ru/users/adminoid/opinions/#o_586571','https://www.fl.ru/users/nejik/','',NULL,'2010-06-20 10:28:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(13,'Vladislav Bosch','Rossmann','Пётр справился с созданием сайта на отлично, хоть и является начинающим специалистом. Всё чётко, строго по ТЗ, аккуратно, доработки минимальные и выполнены максимально оперативно. Рекомендую, как надёжного и грамотного исполнителя.','','https://www.fl.ru/users/adminoid/opinions/#o_582584','https://www.fl.ru/users/Rossmann/','',NULL,'2010-06-12 18:53:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(14,'Mark Majorov','sexleksaker','Приятный человек, хороший PHP специалист. <br>\nГрамотно и быстро выявил и исправил ошибки на моем сайте. <br>\nЦена за выполненную работу была вполне приемлема. <br>\nРекомендую как довольный клиент.','','https://www.fl.ru/users/adminoid/opinions/#o_352380','https://www.fl.ru/users/sexleksaker/','',NULL,'2009-03-10 18:41:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(15,'Владимир Иванов','vlaspb','Хороший грамотный специалист в своём деле. <br>\nБыстро и грамотно разобрался в проблеме сервера и помог грамотно решить их <br>\nС уважение Влад.','','https://www.fl.ru/users/adminoid/opinions/#o_335029','https://www.fl.ru/users/vlaspb/','',NULL,'2009-02-05 19:53:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(16,'Андрей Макалкин','STIMIK','Очень понравилось как была выполнена работа, моментально настроил сервер, хотя многим это не удавалось, рекомендую всем этого фрилансера, буду и дальше работать с ним!','','https://www.fl.ru/users/adminoid/opinions/#o_328873','https://www.fl.ru/users/STIMIK/','',NULL,'2009-01-24 00:52:00','2017-11-02 09:49:44','2017-11-02 09:49:44'),(17,'Дмитрий Соловей','DSolovey','Быстро отозвался на проект, так же быстро приступил к выполнению задания. <br> \nЗадача стояла в настройке VPS, нужно было установить apache, mysql,php. Так же установить и настроить панель управления. <br>\nМного пояснять не пришлось, все схватывал на ходу!<br> \nОчень доволен работой, спасибо!','','https://www.fl.ru/users/adminoid/opinions/#o_327774','https://www.fl.ru/users/DSolovey/','',NULL,'2009-01-21 19:36:00','2017-11-02 09:49:44','2017-11-02 09:49:44');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taggables`
--

DROP TABLE IF EXISTS `taggables`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `taggables` (
  `tag_id` int(11) NOT NULL,
  `taggable_id` int(11) NOT NULL,
  `taggable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taggables`
--

LOCK TABLES `taggables` WRITE;
/*!40000 ALTER TABLE `taggables` DISABLE KEYS */;
INSERT INTO `taggables` VALUES (9,7,'App\\Page',NULL,NULL),(12,7,'App\\Page',NULL,NULL),(3,7,'App\\Page',NULL,NULL),(7,7,'App\\Page',NULL,NULL),(8,7,'App\\Page',NULL,NULL),(5,7,'App\\Page',NULL,NULL),(6,7,'App\\Page',NULL,NULL),(10,7,'App\\Page',NULL,NULL),(11,7,'App\\Page',NULL,NULL),(13,7,'App\\Page',NULL,NULL),(9,8,'App\\Page',NULL,NULL),(12,8,'App\\Page',NULL,NULL),(7,8,'App\\Page',NULL,NULL),(4,8,'App\\Page',NULL,NULL),(5,8,'App\\Page',NULL,NULL),(9,9,'App\\Page',NULL,NULL),(12,9,'App\\Page',NULL,NULL),(7,9,'App\\Page',NULL,NULL),(5,9,'App\\Page',NULL,NULL),(13,9,'App\\Page',NULL,NULL),(14,9,'App\\Page',NULL,NULL),(8,9,'App\\Page',NULL,NULL),(10,9,'App\\Page',NULL,NULL),(9,10,'App\\Page',NULL,NULL),(12,10,'App\\Page',NULL,NULL),(7,10,'App\\Page',NULL,NULL),(8,10,'App\\Page',NULL,NULL),(5,10,'App\\Page',NULL,NULL),(10,10,'App\\Page',NULL,NULL),(9,11,'App\\Page',NULL,NULL),(12,11,'App\\Page',NULL,NULL),(7,11,'App\\Page',NULL,NULL),(14,11,'App\\Page',NULL,NULL),(1,11,'App\\Page',NULL,NULL),(8,11,'App\\Page',NULL,NULL),(5,11,'App\\Page',NULL,NULL),(13,11,'App\\Page',NULL,NULL),(10,11,'App\\Page',NULL,NULL),(9,12,'App\\Page',NULL,NULL),(12,12,'App\\Page',NULL,NULL),(7,12,'App\\Page',NULL,NULL),(14,12,'App\\Page',NULL,NULL),(5,12,'App\\Page',NULL,NULL),(1,12,'App\\Page',NULL,NULL),(7,13,'App\\Page',NULL,NULL),(2,13,'App\\Page',NULL,NULL);
/*!40000 ALTER TABLE `taggables` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tags` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `icon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'lucidchart','static/img/adminoid/icons/tags/lucidchart.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(2,'google spreadsheet','static/img/adminoid/icons/tags/google-spreadsheet.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(3,'composer','static/img/adminoid/icons/tags/composer.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(4,'ext.js','static/img/adminoid/icons/tags/ext-js.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(5,'git','static/img/adminoid/icons/tags/git.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(6,'grunt','static/img/adminoid/icons/tags/grunt.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(7,'javascript','static/img/adminoid/icons/tags/javascript.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(8,'jquery','static/img/adminoid/icons/tags/jquery.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(9,'laravel','static/img/adminoid/icons/tags/laravel.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(10,'less','static/img/adminoid/icons/tags/less.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(11,'photoshop','static/img/adminoid/icons/tags/photoshop.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(12,'php','static/img/adminoid/icons/tags/php.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(13,'twitter bootstrap','static/img/adminoid/icons/tags/twitter-bootstrap.png','2017-11-02 09:49:43','2017-11-02 09:49:43'),(14,'vue.js','static/img/adminoid/icons/tags/vue-js.png','2017-11-02 09:49:43','2017-11-02 09:49:43');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-06 14:32:41
