# Simple-chat
Simple chat application with node and mysql
git clone https://github.com/arvind632/Simple-chat.git
npm install 
Create db cloudprint and import table notes.sql

CREATE TABLE `notes` (
  `idno` int(11) NOT NULL,
  `note` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


ALTER TABLE `notes`
  ADD PRIMARY KEY (`idno`);


ALTER TABLE `notes`
  MODIFY `idno` int(11) NOT NULL AUTO_INCREMENT;

Done !

Run server : node index.js
