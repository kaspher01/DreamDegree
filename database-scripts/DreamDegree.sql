CREATE DATABASE `dreamdegree`;

USE dreamdegree;

CREATE TABLE `addresses` (
  `id_address` int NOT NULL,
  `city` varchar(50) DEFAULT NULL,
  `street` varchar(100) DEFAULT NULL,
  `house_number` varchar(10) DEFAULT NULL,
  `zip_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `accommodations` (
  `id_accommodation` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `id_address` int DEFAULT NULL,
  `type_of_accommodation` enum('mieszkanie','pokoj','dom') DEFAULT NULL,
  `price` int DEFAULT NULL,
  `link` varchar(555) DEFAULT NULL,
  PRIMARY KEY (`id_accommodation`),
  KEY `id_address` (`id_address`),
  CONSTRAINT `accommodation_ibfk_1` FOREIGN KEY (`id_address`) REFERENCES `addresses` (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `fields_of_study` (
  `id_field_of_study` int NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id_field_of_study`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `academies` (
  `id_academy` int NOT NULL,
  `id_address` int DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `link` varchar(555) DEFAULT NULL,
  PRIMARY KEY (`id_academy`),
  KEY `id_address` (`id_address`),
  CONSTRAINT `academy_ibfk_1` FOREIGN KEY (`id_address`) REFERENCES `addresses` (`id_address`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE fields_of_study_in_academies (
    `id_academy` int DEFAULT NULL,
    `id_field_of_study` int DEFAULT NULL,
    CONSTRAINT fields_of_study_in_academies_ibfk_1 FOREIGN KEY (`id_academy`) REFERENCES academies (`id_academy`),
    CONSTRAINT fields_of_study_in_academies_ibfk_2 FOREIGN KEY (`id_field_of_study`) REFERENCES fields_of_study (`id_field_of_study`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bus_stops` (
  `id_bus_stop` int NOT NULL,
  `name` varchar(99) DEFAULT NULL,
  PRIMARY KEY (`id_bus_stop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `bus_lines` (
  `id_bus_line` int NOT NULL,
  `id_bus_stop` int DEFAULT NULL,
  `line_number` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_bus_line`),
  KEY `id_bus_stop` (`id_bus_stop`),
  CONSTRAINT `bus_line_ibfk_1` FOREIGN KEY (`id_bus_stop`) REFERENCES `bus_stops` (`id_bus_stop`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `transports` (
  `id_transport` int NOT NULL,
  `id_bus_line` int DEFAULT NULL,
  `type_of_transport` enum('autobus','tramwaj','pociag') DEFAULT NULL,
  PRIMARY KEY (`id_transport`),
  KEY `id_bus_line` (`id_bus_line`),
  CONSTRAINT `transport_ibfk_1` FOREIGN KEY (`id_bus_line`) REFERENCES `bus_lines` (`id_bus_line`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) DEFAULT NULL,
  `surname` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `favourites` (
  `id_user` int DEFAULT NULL,
  `id_academy` int DEFAULT NULL,
  CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`id_academy`) REFERENCES `academies` (`id_academy`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

