# BuJo
Cross-system web application for time management including a digital bullet journal feature.

_Read this in other languages: [English](README.md), [Deutsch](README.de.md)._
## Frontend
### Installation
- Install [Node.js](https://nodejs.org/en/download/)
- Install Angular CLI using `npm install -g @angular/cli`
- Install dependencies using `npm install`
### Starting the Server
Run `ng serve`. Use `ng serve --host 0.0.0.0` to allow external access (e.g. from your mobile phone).
## Backend
### Installation
- Install [Python](https://www.python.org/downloads/)
- Install [pip](https://pypi.org/project/pip/) (Package Installer for Python)
  - Download [get-pip.py](https://bootstrap.pypa.io/get-pip.py) (e.g. rightclick, 'Save as...')
  - Run `python get-pip.py` in the same folder as get-pip.py
- Install dependencies
  - In the _backend_ folder, run `pip install flask`
  - In the _backend_ folder, run `pip install flask_cors`
### Starting the Server
In the _backend_ folder, run `python app.py`
## Database
### Installation
- Install [MySQL Installer](https://dev.mysql.com/downloads/installer/)
- Install MySQL Workbench 8.0.22
- Install MySQL Server 8.0.22
- Execute initial script
  - Start the Server
  - Open init.sql in the _database_ folder
  - Execute the script
### Starting the Server
- Open MySQL Workbench
- Open 'Local instance MySQL80' under 'MySQL Connections'
- Navigate to 'Startup / Shutdown'
- Click 'Start Server'
