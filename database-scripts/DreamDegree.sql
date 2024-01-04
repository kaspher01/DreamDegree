CREATE DATABASE `dreamdegree`;

use dreamdegree;

CREATE TABLE `address` (
  `id_address` int NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `house_number` varchar(10) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `accommodation` (
  `id_accommodation` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `id_address` int DEFAULT NULL,
  `type_of_accommodation` enum('mieszkanie','pokoj','dom') DEFAULT NULL,
  PRIMARY KEY (`id_accommodation`),
  KEY `id_address` (`id_address`),
  CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`id_address`) REFERENCES `address` (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `field_of_study` (
  `id_field_of_study` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_field_of_study`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `academy` (
  `id_academy` int NOT NULL,
  `id_address` int DEFAULT NULL,
  `id_field_of_study` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_academy`),
  KEY `id_address` (`id_address`),
  KEY `id_field_of_study` (`id_field_of_study`),
  CONSTRAINT `academy_ibfk_1` FOREIGN KEY (`id_address`) REFERENCES `address` (`id_address`),
  CONSTRAINT `academy_ibfk_2` FOREIGN KEY (`id_field_of_study`) REFERENCES `field_of_study` (`id_field_of_study`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `bus_stop` (
  `id_bus_stop` int NOT NULL,
  `name` varchar(99) DEFAULT NULL,
  PRIMARY KEY (`id_bus_stop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `bus_line` (
  `id_bus_line` int NOT NULL,
  `id_bus_stop` int DEFAULT NULL,
  PRIMARY KEY (`id_bus_line`),
  KEY `id_bus_stop` (`id_bus_stop`),
  CONSTRAINT `bus_line_ibfk_1` FOREIGN KEY (`id_bus_stop`) REFERENCES `bus_stop` (`id_bus_stop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `transport` (
  `id_transport` int NOT NULL,
  `id_bus_line` int DEFAULT NULL,
  `type_of_transport` enum('autobus','tramwaj','pociag') DEFAULT NULL,
  PRIMARY KEY (`id_transport`),
  KEY `id_bus_line` (`id_bus_line`),
  CONSTRAINT `transport_ibfk_1` FOREIGN KEY (`id_bus_line`) REFERENCES `bus_line` (`id_bus_line`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `search_engine` (
  `id_search_engine` int NOT NULL,
  `id_academy` int DEFAULT NULL,
  `id_accommodation` int DEFAULT NULL,
  `id_transport` int DEFAULT NULL,
  PRIMARY KEY (`id_search_engine`),
  KEY `id_academy` (`id_academy`),
  KEY `id_accommodation` (`id_accommodation`),
  KEY `id_transport` (`id_transport`),
  CONSTRAINT `search_engine_ibfk_1` FOREIGN KEY (`id_academy`) REFERENCES `academy` (`id_academy`),
  CONSTRAINT `search_engine_ibfk_2` FOREIGN KEY (`id_accommodation`) REFERENCES `accommodation` (`id_accommodation`),
  CONSTRAINT `search_engine_ibfk_3` FOREIGN KEY (`id_transport`) REFERENCES `transport` (`id_transport`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE `user` (
  `id_user` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;