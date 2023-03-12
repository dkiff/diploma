-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 09 2023 г., 11:01
-- Версия сервера: 5.7.33
-- Версия PHP: 7.1.33

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
  `titleWidth` int(255) DEFAULT NULL,
  `titleHeight` int(255) DEFAULT NULL,
  `titleAlign` varchar(6) DEFAULT NULL,
  `titleFontColor` varchar(255) DEFAULT NULL,
  `titleOpacity` float DEFAULT NULL,
  `titleFontFamily` varchar(255) DEFAULT NULL,
  `titleBold` varchar(6) DEFAULT NULL,
  `titleItalic` varchar(6) DEFAULT NULL,
  `titleUnderline` varchar(32) DEFAULT NULL,
  `titleRazdels` varchar(500) DEFAULT NULL,
  `titlePXR` float DEFAULT NULL,
  `titlePYR` float DEFAULT NULL,
  `titleFontSizeR` int(255) DEFAULT NULL,
  `titleBgR` varchar(7) DEFAULT NULL,
  `titleWidthR` float DEFAULT NULL,
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
(1, 1, 1, 'wadwdawd', 'media/img/1/exhibitions/1/cover/котэ.jpg', 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  `razdelWidth` float NOT NULL DEFAULT '120',
  `razdelTextAlign` varchar(255) NOT NULL DEFAULT 'center',
  `razdelOpacity` float NOT NULL DEFAULT '1',
  `razdelFontSize` float NOT NULL DEFAULT '25',
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
(1, 1, 1, 1, 'Название раздела', '#ffffff', 80, 120, 'center', 1, 25, '#000000', 'normal', 'normal', 'none', '\'Courier New\'', '0', NULL, NULL);

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
(2, '2iii', 'Иван', 'Иванов', 'Иванович', 'Библиотека', 'Библиотекарь', 0, 0, '../img/defaultAva.png', 'dann122ert@gmail.com', '23fac4e1c7c94acf9863e37659b1514c', '2023-03-08', 0);

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
  ADD UNIQUE KEY `numEx` (`numEx`);

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
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT для таблицы `razdels`
--
ALTER TABLE `razdels`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `requests`
--
ALTER TABLE `requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
