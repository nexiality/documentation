---
layout: default
title: Installing Nexial Automation The Easy Way
parent: Videos
tags: commands userguide quickstart
comments: true
---

<iframe width="820" height="555" src="https://www.youtube-nocookie.com/embed/n_EBXE7sWJ4" 
  frameborder="0" style="margin-bottom:20px" allow="autoplay; encrypted-media" allowfullscreen></iframe>
- [Watch it on Youtube](https://www.youtube.com/watch?v=n_EBXE7sWJ4)
- The latest Java is version 16 (see below for download links)
- The latest version of Nexial Installer is [v1.4.6](https://github.com/nexiality/nexial-installer/releases/tag/nexial-installer-v1.4.6)

-----

## References & Links

### Download Nexial Installer
- [Nexial Installer](https://github.com/nexiality/nexial-installer#get-installer)


### Download JDK
{% include download_jdk.html %}


### CI-friendly Code Sample

#### Shell script sample to install/upgrade Nexial Automation

```
#!/bin/sh

NEXIAL_INSTALLER_HOME=~/projects/nexial-installer
NEXIAL_INSTALLER_DISTRO=https://github.com/nexiality/nexial-installer/releases/download/nexial-installer-v1.4.6/nexial-installer-1.4.6.zip

# download installer
rm -f "$TMPDIR/nexial-installer.zip"
wget -O "$TMPDIR/nexial-installer.zip" "$NEXIAL_INSTALLER_DISTRO"
build_ret=$?
if [ ${build_ret} != 0 ]; then
  echo "FAILED to download nexial installer from $NEXIAL_INSTALLER_DISTRO"
  exit ${build_ret}
fi

# unzip installer
rm -fR "$NEXIAL_INSTALLER_HOME"
build_ret=$?
if [ ${build_ret} != 0 ]; then
  echo "FAILED to delete existing nexial installer directory $NEXIAL_INSTALLER_HOME"
  exit ${build_ret}
fi

mkdir -p "$NEXIAL_INSTALLER_HOME"
unzip "$TMPDIR/nexial-installer.zip" -d "$NEXIAL_INSTALLER_HOME"
build_ret=$?
if [ ${build_ret} != 0 ]; then
  echo "FAILED to unzip nexial installer to $NEXIAL_INSTALLER_HOME"
  exit ${build_ret}
fi

# install latest nexial
cd "$NEXIAL_INSTALLER_HOME/bin" || exit 1
chmod -f 755 "*.sh"
./install-latest.cmd
build_ret=$?
if [ ${build_ret} != 0 ]; then
  echo "FAILED to install latest nexial"
  exit ${build_ret}
fi
```

#### Additional Tools for Windows
- [GNU Wget](https://eternallybored.org/misc/wget/)
- [unzip](http://stahlworks.com/dev/index.php?tool=zipunzip)

#### Windows batch script sample to install/upgrade Nexial Automation

```batch
@echo off

set NEXIAL_INSTALLER_HOME=C:\projects\nexial-installer
set NEXIAL_INSTALLER_DISTRO=https://github.com/nexiality/nexial-installer/releases/download/nexial-installer-v1.4.6/nexial-installer-1.4.6.zip

:download-installer
	del /f /q %TEMP%\nexial-installer.zip
	wget -O %TEMP%\nexial-installer.zip %NEXIAL_INSTALLER_DISTRO%
	if ERRORLEVEL 1 (
		echo ERROR: Error downloading Nexial Installer
		echo Exiting...
		exit /b 1
	)

:unzip-installer
	rmdir /s /q %NEXIAL_INSTALLER_HOME%
	if ERRORLEVEL 1 (
		echo ERROR: Unable to delete/reinstall Nexial Installer
		echo Exiting...
		exit /b 1
	)

	mkdir %NEXIAL_INSTALLER_HOME%
	unzip %TEMP%\nexial-installer.zip -d %NEXIAL_INSTALLER_HOME%
	if ERRORLEVEL 1 (
		echo ERROR: Unable to unzip Nexial Installer
		echo Exiting...
		exit /b 1
	)

:install-latest
	cd /d %NEXIAL_INSTALLER_HOME%\bin
	call install-latest.cmd
	if ERRORLEVEL 1 (
		echo ERROR: Unable to install latest Nexial 
		echo Exiting...
		exit /b 1
	)

:end
```

-----
