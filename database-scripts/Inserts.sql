#Adresy uczelni
INSERT INTO addresses VALUES (1, 'Warszawa', 'Krakowskie Przedmieście', '26/28', '00-927'); #UW
INSERT INTO addresses VALUES (2, 'Warszawa', 'Plac Politechniki', '1', '00-661'); #Politechnika Warszawska
INSERT INTO addresses VALUES (3, 'Warszawa', 'Koszykowa', '86', '02-008'); #PJATK
INSERT INTO addresses VALUES (4, 'Gdańsk', 'Marii Skłodowskiej-Curie', '3a', '80-210'); #GUMed
INSERT INTO addresses VALUES (5, 'Gdańsk', 'Gabriela Narutowicza', '11/12', '80-233'); #Politechnika Gdańska
INSERT INTO addresses VALUES (6, 'Gdańsk', 'Jana Bażyńskiego', '8', '80-309'); #Uniwersytet Gdański
INSERT INTO addresses VALUES (7, 'Olsztyn', 'Michała Oczapowskiego', '2', '10-719'); #Uniwersytet Warmińsko-Mazurski
INSERT INTO addresses VALUES (8, 'Olsztyn', 'Jagiellońska', '59', '11-041'); #Olsztyńska Szkoła Wyższa im. Józefa Rusieckiego
INSERT INTO addresses VALUES (9, 'Olsztyn', 'Artyleryjska', '3f', '10-165'); #Wyższa Szkoła Informatyki i Zarządzania im. Prof. Tadeusza Kotarbińskiego

#Adresy zakwaterowan
INSERT INTO addresses VALUES (10, 'Warszawa Śródmieście', 'Targowa przy Wileńskiej', '', '03-700'); #Warszawa Śródmieście
INSERT INTO addresses VALUES (11, 'Warszawa Mokotów', 'Pieńkowskiego', '4', '02-668'); #Ładny pokój od 01.02.2024 (lutego) - Galeria Mokotów / Metro Służew
INSERT INTO addresses VALUES (12, 'Warszawa Mokotow', 'Suwak', '13', '02-676'); #Akademik Suwak
INSERT INTO addresses VALUES (13, 'Gdańsk Wrzeszcz', 'Dmowskiego', '2', '80-264'); #Pokój do wynajęcia
INSERT INTO addresses VALUES (14, 'Gdańsk Wrzeszcz', 'Reja', '30', '80-404'); #Pokój we Wrzeszczu! SKM, PG, GUMED!
INSERT INTO addresses VALUES (15, 'Gdańsk Przymorze', 'Kołobrzeska', '', '80-397'); #Wynajmij 1 sypialnię apartament z 35 m² w Gdansk
INSERT INTO addresses VALUES (16, 'Olsztyn Osiedle Pojezierze', 'Kołobrzeska', '', '10-430'); #Do wynajęcia dwa idealne pokoje!
INSERT INTO addresses VALUES (17, 'Olsztyn', 'Czesława Kanafojskiego', '8', '10-722'); #Dom studenta nr. 9
INSERT INTO addresses VALUES (18, 'Olsztyn Osiedle Tadeusza Kościuszki', 'Marcina Kasprzaka', '9', '10-057'); #Mieszkanie dwupokojowe na wynajem

# INSERT INTO addresses VALUES (19, 'Kraków', 'Gołębia', '24', '31-007');
# INSERT INTO addresses VALUES (20, 'Kraków', 'Warszawska', '24', '31-155');
# INSERT INTO addresses VALUES (21, 'Kraków', 'aleja Kijowska', '14', '30-079');
# INSERT INTO addresses VALUES (22, 'Wrocław', 'plac Uniwersytecki', '1', '50-137');
# INSERT INTO addresses VALUES (23, 'Wrocław', 'Strzegomska', '55', '53-611');
# INSERT INTO addresses VALUES (24, 'Łódź', 'aleja Tadeusza Kościuszki', '4', '90-419');
# INSERT INTO addresses VALUES (25, 'Łódź', 'Stefana Żeromskiego', '116', '90-924');
# INSERT INTO addresses VALUES (26, 'Poznań', 'plac Marii Skłodowskiej-Curie', '5', '60-965');
# INSERT INTO addresses VALUES (27, 'Poznań', 'Wieniawskiego', '1', '61-712');

#Kierunki studiów
INSERT INTO fields_of_study VALUES (1, 'Informatyka');
INSERT INTO fields_of_study VALUES (2, 'Matematyka Stosowana');
INSERT INTO fields_of_study VALUES (3, 'Metafizyka');
INSERT INTO fields_of_study VALUES (4, 'Chemia');
INSERT INTO fields_of_study VALUES (5, 'Medycyna');
INSERT INTO fields_of_study VALUES (6, 'Marketing');
INSERT INTO fields_of_study VALUES (7, 'Zarządzanie');
INSERT INTO fields_of_study VALUES (8, 'Biotechnologia');
INSERT INTO fields_of_study VALUES (9, 'Finanse i rachunkowość');
INSERT INTO fields_of_study VALUES (10, 'Administracja');
INSERT INTO fields_of_study VALUES (11, 'Geografia');
INSERT INTO fields_of_study VALUES (12, 'Oceanografia');
INSERT INTO fields_of_study VALUES (13, 'Pedagogika');
INSERT INTO fields_of_study VALUES (14, 'Filozofia');
INSERT INTO fields_of_study VALUES (15, 'Ekonomia');
INSERT INTO fields_of_study VALUES (16, 'Stomatologia');
INSERT INTO fields_of_study VALUES (17, 'Architektura');
INSERT INTO fields_of_study VALUES (18, 'Budownictwo');

#Przystanki
INSERT INTO bus_stops VALUES (1, 'Targowa przy Wileńskiej');
INSERT INTO bus_stops VALUES (2, 'Wilanowska');
INSERT INTO bus_stops VALUES (3, 'Plac Unii Lubelskiej');
INSERT INTO bus_stops VALUES (4, 'Dmowskiego');
INSERT INTO bus_stops VALUES (5, 'Kołobrzeska');
INSERT INTO bus_stops VALUES (6, 'Reja');
INSERT INTO bus_stops VALUES (7, 'Jagiellońska');
INSERT INTO bus_stops VALUES (8, 'Marcina Kasprzaka');
INSERT INTO bus_stops VALUES (9, 'Artyleryjska');

#Uczelnie
INSERT INTO academies VALUES (1, 1, 'Uniwersytet Warszawski', 'https://www.uw.edu.pl');
INSERT INTO academies VALUES (2, 2, 'Politechnika Warszawska', 'https://www.pw.edu.pl/');
INSERT INTO academies VALUES (3, 3, 'Polsko-Japońska Akademia Technik Komputerowych', 'https://pja.edu.pl/');
INSERT INTO academies VALUES (4, 4, 'Gdański Uniwersytet Medyczny', 'https://gumed.edu.pl/');
INSERT INTO academies VALUES (5, 5, 'Politechnika Gdańska', 'https://pg.edu.pl/');
INSERT INTO academies VALUES (6, 6, 'Uniwersytet Gdański', 'https://ug.edu.pl/');
INSERT INTO academies VALUES (7, 7, 'Uniwersytet Warmińsko-Mazurski', 'https://uwm.edu.pl/');
INSERT INTO academies VALUES (8, 8, 'Olsztyńska Szkoła Wyższa im. Józefa Rusieckiego', 'https://www.osw.edu.pl/');
INSERT INTO academies VALUES (9, 9, 'Wyższa Szkoła Informatyki i Zarządzania im. Prof. Tadeusza Kotarbińskiego', 'http://owsiiz.edu.pl/');
# INSERT INTO academies VALUES (10, 19, 'Uniwersytet Jagielloński', 'https://www.uj.edu.pl/');
# INSERT INTO academies VALUES (11, 20, 'Politechnika Krakowska', 'https://www.pk.edu.pl/index.php?lang=pl');
# INSERT INTO academies VALUES (12, 21, 'Wyższa Szkoła Zarządzania i Bankowości w Krakowie', 'https://www.wszib.edu.pl/');
# INSERT INTO academies VALUES (13, 22, 'Uniwersytet Wrocławski', 'https://uwr.edu.pl/');
# INSERT INTO academies VALUES (14, 23, 'Uniwersytet Dolnośląski DSW Wrocław', 'https://www.dsw.edu.pl/');
# INSERT INTO academies VALUES (15, 24, 'Uniwersytet Medyczny w Łodzi', 'https://umed.pl/');
# INSERT INTO academies VALUES (16, 25, 'Politechnika Łódzka', 'https://p.lodz.pl/');
# INSERT INTO academies VALUES (17, 26, 'Politechnika Poznańska', 'https://www.put.poznan.pl/');
# INSERT INTO academies VALUES (18, 27, 'Uniwersytet im. Adama Mickiewicza w Poznaniu', 'https://amu.edu.pl/');

#Zakwaterowania
INSERT INTO accommodations VALUES (1, 'Warszawa Śródmieście', 10, 'pokoj', 1800, 'https://adresowo.pl/o/n0w4a6');
INSERT INTO accommodations VALUES (2, 'Ładny pokój od 01.02.2024 (lutego) - Galeria Mokotów / Metro Służew', 11, 'pokoj', 1100, 'https://www.olx.pl/d/oferta/ladny-pokoj-od-01-02-2024-lutego-galeria-mokotow-metro-sluzew-CID3-IDXWzVB.html');
INSERT INTO accommodations VALUES (3, 'Akademik Suwak', 12, 'mieszkanie', 2530, 'https://studentdepot.pl/nasze-akademiki/akademik-warszawa/');
INSERT INTO accommodations VALUES (4, 'Pokój do wynajęcia', 13, 'pokoj', 1450, 'https://ogloszenia.trojmiasto.pl/nieruchomosci-mam-do-wynajecia/pokoj-do-wynajecia-gdansk-wrzeszcz-gumed-politechnika-ogl65464264.html');
INSERT INTO accommodations VALUES (5, 'Pokój we Wrzeszczu! SKM, PG, GUMED!', 14, 'pokoj', 800, 'https://www.olx.pl/d/oferta/pokoj-we-wrzeszczu-skm-pg-gumed-1100-zl-ze-wszystkimi-oplatami-CID3-IDXEdG3.html?isPreviewActive=0&sliderIndex=2');
INSERT INTO accommodations VALUES (6, 'Wynajmij 1 sypialnię apartament z 35 m² w Gdansk', 15, 'mieszkanie', 2950, 'https://rentola.pl/og%C5%82oszenia/piekna-kawalerka-w-super-lokalizacji-ebf2fb?utm_source=Lifull-connect&utm_medium=CPC&utm_campaign=new-users-desktop-pl');
INSERT INTO accommodations VALUES (7, 'Do wynajęcia dwa idealne pokoje!', 16, 'mieszkanie', 2450, 'https://www.otodom.pl/pl/oferta/do-wynajecia-dwa-idealne-pokoje-ID4of5u');
INSERT INTO accommodations VALUES (8, 'Dom studenta nr. 9', 17, 'pokoj', 1130, 'https://zak.olsztyn.pl/ds9/');
INSERT INTO accommodations VALUES (9, 'Mieszkanie dwupokojowe na wynajem', 18, 'mieszkanie', 2800, 'https://www.domiporta.pl/nieruchomosci/wynajme-mieszkanie-dwupokojowe-olsztyn-marcina-kasprzaka-51m2/154894902');

#Linie
INSERT INTO bus_lines VALUES (1, 1, 'N192');
INSERT INTO bus_lines VALUES (2, 2, 'M1');
INSERT INTO bus_lines VALUES (3, 1, '131');
INSERT INTO bus_lines VALUES (4, 1, '127');
INSERT INTO bus_lines VALUES (5, 1, '2');
INSERT INTO bus_lines VALUES (6, 1, '6');
INSERT INTO bus_lines VALUES (7, 1, '1');
INSERT INTO bus_lines VALUES (8, 1, '109');
INSERT INTO bus_lines VALUES (9, 1, '136');

#Rodzaje transportu
INSERT INTO transports VALUES (1, 1, 'autobus');
INSERT INTO transports VALUES (2, 1, 'pociag');
INSERT INTO transports VALUES (3, 1, 'tramwaj');
INSERT INTO transports VALUES (4, 1, 'autobus');
INSERT INTO transports VALUES (5, 1, 'tramwaj');
INSERT INTO transports VALUES (6, 1, 'tramwaj');
INSERT INTO transports VALUES (7, 1, 'tramwaj');
INSERT INTO transports VALUES (8, 1, 'autobus');
INSERT INTO transports VALUES (9, 1, 'autobus');

#Kierunki na uczelniach
INSERT INTO fields_of_study_in_academies VALUES(1, 4);
INSERT INTO fields_of_study_in_academies VALUES(1, 6);
INSERT INTO fields_of_study_in_academies VALUES(1, 7);
INSERT INTO fields_of_study_in_academies VALUES(1, 10);
INSERT INTO fields_of_study_in_academies VALUES(1, 13);
INSERT INTO fields_of_study_in_academies VALUES(2, 1);
INSERT INTO fields_of_study_in_academies VALUES(2, 2);
INSERT INTO fields_of_study_in_academies VALUES(2, 11);
INSERT INTO fields_of_study_in_academies VALUES(2, 18);
INSERT INTO fields_of_study_in_academies VALUES(3, 1);
INSERT INTO fields_of_study_in_academies VALUES(3, 2);
INSERT INTO fields_of_study_in_academies VALUES(3, 17);
INSERT INTO fields_of_study_in_academies VALUES(4, 5);
INSERT INTO fields_of_study_in_academies VALUES(4, 8);
INSERT INTO fields_of_study_in_academies VALUES(4, 16);
INSERT INTO fields_of_study_in_academies VALUES(5, 1);
INSERT INTO fields_of_study_in_academies VALUES(5, 2);
INSERT INTO fields_of_study_in_academies VALUES(5, 3);
INSERT INTO fields_of_study_in_academies VALUES(5, 12);
INSERT INTO fields_of_study_in_academies VALUES(5, 18);
INSERT INTO fields_of_study_in_academies VALUES(6, 4);
INSERT INTO fields_of_study_in_academies VALUES(6, 6);
INSERT INTO fields_of_study_in_academies VALUES(6, 7);
INSERT INTO fields_of_study_in_academies VALUES(6, 8);
INSERT INTO fields_of_study_in_academies VALUES(6, 10);
INSERT INTO fields_of_study_in_academies VALUES(7, 4);
INSERT INTO fields_of_study_in_academies VALUES(7, 9);
INSERT INTO fields_of_study_in_academies VALUES(7, 10);
INSERT INTO fields_of_study_in_academies VALUES(7, 13);
INSERT INTO fields_of_study_in_academies VALUES(7, 14);
INSERT INTO fields_of_study_in_academies VALUES(8, 11);
INSERT INTO fields_of_study_in_academies VALUES(8, 12);
INSERT INTO fields_of_study_in_academies VALUES(8, 14);
INSERT INTO fields_of_study_in_academies VALUES(8, 15);
INSERT INTO fields_of_study_in_academies VALUES(9, 1);
INSERT INTO fields_of_study_in_academies VALUES(9, 7);
INSERT INTO fields_of_study_in_academies VALUES(9, 9);
INSERT INTO fields_of_study_in_academies VALUES(9, 15);
