---
layout: default
title: Installing Nexial Automation The Easy Way
level: 1
tags: commands userguide quickstart
comments: true
---

## Installing and Upgrade Nexial Automation the Easy Way

[Install & Upgrade Nexial Automation The Easy Way!](https://www.youtube.com/watch?v=n_EBXE7sWJ4&cc_load_policy=1)
<iframe width="820" height="555" src="https://www.youtube-nocookie.com/embed/n_EBXE7sWJ4&cc_load_policy=1" 
  frameborder="0" style="margin-bottom:20px" allow="autoplay; encrypted-media" allowfullscreen></iframe>

-----

## References:
- [Oracle Java SE Development Kit 14 Downloads](https://www.oracle.com/java/technologies/javase-jdk14-downloads.html)
- [JDK 1.4.0.2 General-Availability Release, GNU GPL v2](https://jdk.java.net/14/)
- [Amazon Corretto 11 (OpenJDK)](https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html)
- [AdoptOpenJDK OpenJDK  v14](https://adoptopenjdk.net/?variant=openjdk14&jvmVariant=hotspot)
- [Download Nexial Installer](https://github.com/nexiality/nexial-installer#get-installer)
- [GNU Wget for Windows](https://eternallybored.org/misc/wget/)
- [unzip for Windows](http://stahlworks.com/dev/index.php?tool=zipunzip)

## Code Sample

### Shell script (*NIX/Mac) for installing/upgrading latest version of Nexial Automation (suitable for CI/CD toolchain)
```shell script
#!/bin/sh


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

### Windows batch script for installing/upgrading latest version of Nexial Automation (suitable for CI/CD toolchain)
```batch
@echo off


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
