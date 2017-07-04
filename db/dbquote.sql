-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2017 at 04:39 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbquote`
--

-- --------------------------------------------------------

--
-- Table structure for table `quote`
--

CREATE TABLE `quote` (
  `id_quote` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `quote` text NOT NULL,
  `category` varchar(255) NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quote`
--

INSERT INTO `quote` (`id_quote`, `author`, `quote`, `category`, `date`) VALUES
(6, 'A. J. Liebling', 'I can write better than anybody who can write faster, and I can write faster than anybody who can write better.', 'Famous', '2017-06-29 02:23:12'),
(7, 'Moses Hadas in a review', 'This book fills a much-needed gap.', 'Famous', '2017-06-29 02:23:56'),
(8, 'Paul Erdos', 'A mathematician is a device for turning coffee into theorems.', 'Famous', '2017-06-29 02:24:18'),
(10, 'Lou Holtz', 'I can\'t believe that God put us on this earth to be ordinary.', 'Famous', '2017-07-02 04:56:00'),
(11, 'Johann Wolfgang von Goethe', 'Knowing is not enough; we must apply!', 'Famous', '2017-07-02 04:56:16'),
(12, 'Chinese Proverb', 'Tension is who you think you should be. Relaxation is who you are.', 'Various', '2017-07-02 04:56:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quote`
--
ALTER TABLE `quote`
  ADD PRIMARY KEY (`id_quote`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quote`
--
ALTER TABLE `quote`
  MODIFY `id_quote` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
