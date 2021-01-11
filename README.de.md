# BuJo
Systemübergreifende Webanwendung zum Zeitmanagement mit digitaler Bullet-Journal-Funktion.

_Read this in other languages: [English](README.md), [Deutsch](README.de.md)._
## Frontend
### Installation
- [Node.js](https:/d/nodejs.org/en/download/) installieren
- Angular CLI installieren mit `npm install -g @angular/cli`
- Dependencies installieren mit `npm install`
### Server starten
`ng serve` ausführen. Benutze `ng serve --host 0.0.0.0`, um externe Verbindungen zu erlauben (z.B. von deinem Handy).
## Backend
### Installation
- [Python](https://www.python.org/downloads/) installieren
- [pip](https://pypi.org/project/pip/) (Package Installer for Python) installieren
  - [get-pip.py](https://bootstrap.pypa.io/get-pip.py) herunterladen. (z.B. Rechtsklick, 'Speichern unter...')
  - Im selben Ordner wie get-pip.py: `python get-pip.py` ausführen
- Dependencies installieren
  - Im _backend_ Ordner: `pip install flask` ausführen
  - Im _backend_ Ordner: `pip install flask_cors` ausführen
### Server starten
Im _backend_ Ordner: `python app.py` ausführen
## Datenbank
### Installation
- [MySQL Installer](https://dev.mysql.com/downloads/installer/) installieren
- MySQL Workbench 8.0.22 installieren
- MySQL Server 8.0.22 installieren
- Initialen Skript ausführen
  - Server starten
  - Im _database_ Ordner: init.sql öffnen
  - Skript ausführen
### Server starten
- MySQL Workbench öffnen
- 'Local instance MySQL80' unter 'MySQL Connections' öffnen
- Zu 'Startup / Shutdown' navigieren
- "Server starten" klicken
