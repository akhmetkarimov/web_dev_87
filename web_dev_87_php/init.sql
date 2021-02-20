-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 20, 2021 at 10:44 AM
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
(6, 'qwe', 'qwe@qwe', '056eafe7cf52220de2df36845b8ed170c67e23e3'),
(7, 'reg', 'reg@reg.com', 'e06b95860a6082ae37ef08874f8eb5fade2549da');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `category`) VALUES
(1, 'Fashion'),
(2, 'Sport'),
(3, 'Life'),
(4, 'News'),
(5, 'Science'),
(6, 'Music');

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `author_id` int(11) NOT NULL,
  `views` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `cover` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `title`, `description`, `author_id`, `views`, `category_id`, `cover`) VALUES
(2, 'Hello new title', 'Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description Hello new description ', 6, 22, 1, NULL),
(3, 'new post for testing edit from modal', '                            123123123123123                            zxczxcsada', 7, 4, 2, NULL),
(4, 'New title SQL', 'new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing new post for testing ', 6, 1, 3, NULL),
(5, 'qwe', 'qwe', 7, 15, 2, NULL),
(6, 'title ajax', 'title ajax', 7, 0, 4, NULL),
(7, 'title ajax 1', 'title ajax 1', 7, 0, 1, NULL),
(8, 'new', 'new', 7, 1, 5, NULL),
(9, 'new', 'new', 7, 0, 6, NULL),
(10, '123', '123', 7, 0, 1, NULL),
(11, '123', '123', 7, 0, 2, NULL),
(14, '123', '123', 7, 0, 1, NULL),
(15, '123', '123', 7, 3, 3, NULL),
(16, '123', '123', 7, 0, 6, NULL),
(17, '123', '123', 7, 0, 1, NULL),
(18, 'qwe', 'w2', 7, 0, 6, NULL),
(19, 'new', 'new 111', 7, 0, 4, NULL),
(20, '123', '123', 7, 0, 2, NULL),
(21, 'new item from window', 'new item from window', 7, 0, 3, NULL),
(22, 'new item from window 1', 'new item from window 1', 7, 0, 1, NULL),
(23, '111', '111', 7, 0, 4, NULL),
(24, '222', '222', 7, 1, 1, NULL),
(25, '123', '123', 7, 5, 4, NULL),
(26, 'qqqq', 'qqqq', 7, 29, 4, NULL),
(27, 'qwe', 'qwe', 7, 0, 1, NULL),
(28, 'qwe', 'qwe', 7, 0, 3, NULL),
(29, 'zxcv', 'zxcv', 7, 0, 4, NULL),
(30, 'qwerqwer', 'qwerqwer', 7, 0, 3, NULL),
(31, 'qwerqwer', 'qwerqwer', 7, 0, 4, NULL),
(32, '1234', '12341', 7, 0, 4, NULL),
(33, '1234', '1234', 7, 1, 4, NULL),
(34, 'asdfsdfad', 'sfdsfadsf', 7, 0, 4, NULL),
(35, '123r1243t', '3214341234', 7, 1, 4, NULL),
(36, 'adsfsdf', 'adsfasdf', 7, 0, 2, NULL),
(37, '12341324', '123441234', 7, 0, 6, NULL),
(38, 'adsfasd', 'fasdfasdf', 7, 1, 6, NULL),
(39, '23412341', '32412341324', 7, 0, 6, NULL),
(40, '11111', '111111', 7, 1, 6, NULL),
(41, '1111', '11111', 7, 2, 3, NULL),
(42, 'test img', 'test img', 7, 3, 1, 'images/posts/1613213187.jpg'),
(43, '1234 img', '1234', 7, 19, 1, 'images/posts/1613213367.jpg'),
(44, '1111', '11111', 7, 0, 1, 'images/posts/1613214130.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `content` text NOT NULL,
  `post_id` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uid` int(11) NOT NULL,
  `mark` int(11) NOT NULL DEFAULT '5'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id`, `content`, `post_id`, `date`, `uid`, `mark`) VALUES
(1, 'review from admin', 26, '2021-02-10 11:33:35', 7, 5),
(2, '11111', 26, '2021-02-10 11:43:34', 7, 5),
(3, 'new from web', 26, '2021-02-10 11:58:10', 7, 4),
(4, '123', 25, '2021-02-10 11:58:41', 7, 4),
(5, '453', 26, '2021-02-10 11:59:10', 7, 3),
(6, '123123213', 26, '2021-02-10 12:23:48', 7, 1),
(7, '123', 25, '2021-02-10 12:30:31', 7, 4),
(8, '1231231231232', 15, '2021-02-10 12:30:41', 7, 4),
(9, '1111123123', 5, '2021-02-10 12:35:06', 7, 2),
(10, 'gf;dsabfh', 43, '2021-02-18 14:53:10', 7, 1),
(11, 'new comment', 43, '2021-02-18 14:53:17', 7, 4),
(12, 'new comment rreivew', 43, '2021-02-18 14:53:29', 7, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_author_id` (`author_id`),
  ADD KEY `FD_category_id` (`category_id`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Fk_post_rev_id` (`post_id`),
  ADD KEY `Fk_user_rev_id` (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FD_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_author_id` FOREIGN KEY (`author_id`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `Fk_post_rev_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `Fk_user_rev_id` FOREIGN KEY (`uid`) REFERENCES `account` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
