-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jan 27, 2021 at 12:52 PM
-- Server version: 5.7.30
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `webdev87`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `name`, `email`, `password`) VALUES
(6, 'qwe', 'qwe@qwe', '056eafe7cf52220de2df36845b8ed170c67e23e3');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `description`, `author_id`) VALUES
(1, 'Test Title', 'Test Desciption', 6),
(2, 'Hello new title', 'Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description ', 6),
(3, 'new post for testing', 'new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing ', 6),
(4, 'new post for testing new post for testing 2', 'new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing ', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_author_id` (`author_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_author_id` FOREIGN KEY (`author_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
