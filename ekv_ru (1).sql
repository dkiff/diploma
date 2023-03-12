-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 12 2023 г., 18:58
-- Версия сервера: 5.7.33-log
-- Версия PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `ekv.ru`
--

-- --------------------------------------------------------

--
-- Структура таблицы `books`
--

CREATE TABLE `books` (
  `id` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `numEx` int(255) NOT NULL,
  `numRazdel` int(255) NOT NULL,
  `numBook` int(255) NOT NULL,
  `authorName` varchar(1000) NOT NULL,
  `authorFamil` varchar(1000) NOT NULL,
  `fatherName` varchar(255) CHARACTER SET utf32 NOT NULL,
  `titleBook` varchar(500) NOT NULL,
  `textFacts` varchar(255) NOT NULL,
  `city` varchar(500) NOT NULL,
  `izdatel` varchar(500) NOT NULL,
  `year` int(4) NOT NULL,
  `volume` varchar(9999) NOT NULL,
  `img` varchar(1000) NOT NULL,
  `seria` varchar(500) NOT NULL,
  `annotation` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `exhibitions`
--

CREATE TABLE `exhibitions` (
  `id` int(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `numEx` int(255) NOT NULL,
  `exhibTitle` varchar(500) NOT NULL,
  `cover_path` varchar(500) NOT NULL,
  `countRazdel` int(255) NOT NULL,
  `titlePX` float DEFAULT NULL,
  `titlePY` float DEFAULT NULL,
  `titleFontSize` float DEFAULT NULL,
  `titleBg` varchar(255) DEFAULT NULL,
  `titleWidth` int(255) DEFAULT '600',
  `titleHeight` int(255) DEFAULT NULL,
  `titleAlign` varchar(6) DEFAULT NULL,
  `titleFontColor` varchar(255) DEFAULT NULL,
  `titleOpacity` float DEFAULT NULL,
  `titleFontFamily` varchar(255) DEFAULT NULL,
  `titleBold` varchar(6) DEFAULT NULL,
  `titleItalic` varchar(6) DEFAULT NULL,
  `titleUnderline` varchar(32) DEFAULT NULL,
  `titleRazdels` varchar(500) DEFAULT 'Разделы',
  `titlePXR` float DEFAULT NULL,
  `titlePYR` float DEFAULT NULL,
  `titleFontSizeR` int(255) DEFAULT NULL,
  `titleBgR` varchar(7) DEFAULT NULL,
  `titleWidthR` float DEFAULT '600',
  `titleHeightR` float DEFAULT NULL,
  `titleAlignR` varchar(7) DEFAULT NULL,
  `titleFontColorR` varchar(7) DEFAULT NULL,
  `titleOpacityR` float DEFAULT NULL,
  `titleFontFamilyR` varchar(500) DEFAULT NULL,
  `titleBoldR` varchar(10) DEFAULT NULL,
  `titleItalicR` varchar(10) DEFAULT NULL,
  `titleUnderlineR` varchar(255) DEFAULT NULL,
  `propBgBlock` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `exhibitions`
--

INSERT INTO `exhibitions` (`id`, `id_user`, `numEx`, `exhibTitle`, `cover_path`, `countRazdel`, `titlePX`, `titlePY`, `titleFontSize`, `titleBg`, `titleWidth`, `titleHeight`, `titleAlign`, `titleFontColor`, `titleOpacity`, `titleFontFamily`, `titleBold`, `titleItalic`, `titleUnderline`, `titleRazdels`, `titlePXR`, `titlePYR`, `titleFontSizeR`, `titleBgR`, `titleWidthR`, `titleHeightR`, `titleAlignR`, `titleFontColorR`, `titleOpacityR`, `titleFontFamilyR`, `titleBoldR`, `titleItalicR`, `titleUnderlineR`, `propBgBlock`) VALUES
(1, 2, 1, 'Корней Чуковский', 'media/img/2/exhibitions/1/cover/Фон.jpg', 3, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Разделы', NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 2, 2, 'wadawd', 'media/img/2/exhibitions/2/cover/Фон.png', 3, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 2, 3, 'awdwad', 'media/img/2/exhibitions/3/cover/Фон.jpg', 3, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 2, 4, 'awdwad', 'media/img/2/exhibitions/4/cover/Фон.jpg', 3, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 600, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `razdels`
--

CREATE TABLE `razdels` (
  `id` int(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  `numEx` int(11) NOT NULL,
  `numRazdel` int(11) NOT NULL,
  `titleRazdel` varchar(500) NOT NULL,
  `razdelBg` varchar(255) NOT NULL DEFAULT '#ffffff',
  `razdelHeight` float NOT NULL DEFAULT '80',
  `razdelWidth` float NOT NULL DEFAULT '250',
  `razdelTextAlign` varchar(255) NOT NULL DEFAULT 'center',
  `razdelOpacity` float NOT NULL DEFAULT '1',
  `razdelFontSize` float NOT NULL DEFAULT '20',
  `razdelFonColor` varchar(255) NOT NULL DEFAULT '#000000',
  `razdelFontWeight` varchar(255) NOT NULL DEFAULT 'normal',
  `razdelFontStyle` varchar(255) NOT NULL DEFAULT 'normal',
  `razdelTextDecoration` varchar(255) NOT NULL DEFAULT 'none',
  `razdelFontFamily` varchar(1000) NOT NULL DEFAULT '''Courier New''',
  `razdelBorderRadius` varchar(255) NOT NULL DEFAULT '0',
  `positionX` varchar(255) DEFAULT NULL,
  `positionY` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `razdels`
--

INSERT INTO `razdels` (`id`, `id_user`, `numEx`, `numRazdel`, `titleRazdel`, `razdelBg`, `razdelHeight`, `razdelWidth`, `razdelTextAlign`, `razdelOpacity`, `razdelFontSize`, `razdelFonColor`, `razdelFontWeight`, `razdelFontStyle`, `razdelTextDecoration`, `razdelFontFamily`, `razdelBorderRadius`, `positionX`, `positionY`) VALUES
(7, 2, 1, 1, 'Название раздела', '#ffffff', 80, 250, 'center', 1, 20, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(8, 2, 1, 2, 'Название раздела', '#ffffff', 80, 250, 'center', 1, 20, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(9, 2, 1, 3, 'Название раздела', '#ffffff', 80, 250, 'center', 1, 20, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(10, 2, 2, 1, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(11, 2, 2, 2, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(12, 2, 2, 3, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(13, 2, 3, 1, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(14, 2, 3, 2, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(15, 2, 3, 3, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(16, 2, 4, 1, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(17, 2, 4, 2, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL),
(18, 2, 4, 3, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL);

-- --------------------------------------------------------

--
-- Структура таблицы `requests`
--

CREATE TABLE `requests` (
  `id` int(11) NOT NULL,
  `user_name` varchar(500) NOT NULL,
  `user_surname` varchar(500) NOT NULL,
  `user_fatherName` varchar(500) NOT NULL,
  `user_jobPlace` mediumtext,
  `user_job` mediumtext NOT NULL,
  `user_email` text,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(255) NOT NULL,
  `firstName` varchar(500) NOT NULL,
  `secondName` varchar(500) NOT NULL,
  `fatherName` varchar(500) DEFAULT NULL,
  `jobPlace` mediumtext,
  `job` text,
  `adminAccess` tinyint(1) NOT NULL DEFAULT '0',
  `access` tinyint(1) NOT NULL DEFAULT '0',
  `img_path` varchar(500) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(50) NOT NULL,
  `data` varchar(20) NOT NULL,
  `redactPassword` int(1) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `firstName`, `secondName`, `fatherName`, `jobPlace`, `job`, `adminAccess`, `access`, `img_path`, `email`, `password`, `data`, `redactPassword`) VALUES
(1, '1ndd', 'Даниил', 'Никифоров', 'Дмитриевич', 'Библиотека', 'Администратор сайта', 1, 1, '../media/img/1/котэ.jpg', 'nikiforovdaniil256@gmail.com', '202cb962ac59075b964b07152d234b70', '2023-03-08', 1),
(2, '2iii', 'Иван', 'Иванов', 'Иванович', 'Библиотека', 'Библиотекарь', 0, 1, '../img/defaultAva.png', 'dann122ert@gmail.com', 'd8578edf8458ce06fbc5bb76a58c5ca4', '2023-03-11', 1),
(3, '3ksv', 'Сергей', 'Кравцев', 'Викторович', 'Комитет по культуре', 'Системный администратор', 0, 0, '../img/defaultAva.png', 'pleasure@gmail.com', 'cda2844d1d752dd02f186f4eef7f5d52', '2023-03-11', 0),
(4, '4bds', 'Даниил', 'Болотов', 'Сергеевич', 'Комитет по культуре', 'Программист', 0, 0, '../img/defaultAva.png', 'dkiff53@gmail.com', '91179f28849b7cc687a4e35696ab8a39', '2023-03-11', 0),
(5, '5uia', 'Иван', 'Ургант', 'Андреевич', 'Первый канал', 'Ведущий', 0, 0, '../img/defaultAva.png', 'urgant@gmail.com', '62edbde708ddef5482c8748cb4cb5cd1', '2023-03-11', 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `exhibitions`
--
ALTER TABLE `exhibitions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Индексы таблицы `razdels`
--
ALTER TABLE `razdels`
  ADD PRIMARY KEY (`id`),
  ADD KEY `numEx` (`numEx`) USING BTREE;

--
-- Индексы таблицы `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `users` ADD FULLTEXT KEY `login` (`login`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `books`
--
ALTER TABLE `books`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT для таблицы `exhibitions`
--
ALTER TABLE `exhibitions`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблицы `razdels`
--
ALTER TABLE `razdels`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `exhibitions`
--
ALTER TABLE `exhibitions`
  ADD CONSTRAINT `exhibitions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ограничения внешнего ключа таблицы `razdels`
--
ALTER TABLE `razdels`
  ADD CONSTRAINT `razdels_ibfk_1` FOREIGN KEY (`numEx`) REFERENCES `exhibitions` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
