@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Dang mo Be Vui Hoc tren http://127.0.0.1:8123 ...
start "" cmd /c "timeout /t 2 >nul & start http://127.0.0.1:8123/index.html"
python serve.py 8123
pause
