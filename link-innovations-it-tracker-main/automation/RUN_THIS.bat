@echo off
echo.
echo ========================================
echo   Link Innovations Image Generator
echo ========================================
echo.
echo Generating images with AI...
echo.

npm run generate-images -- --scope services/ai-automation

echo.
echo ========================================
echo Done! Check: public/images/services/
echo ========================================
pause


