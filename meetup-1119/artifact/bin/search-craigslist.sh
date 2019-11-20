#!/usr/bin/env bash

if [ -z ${NEXIAL_HOME+x} ]; then
  NEXIAL_HOME=~/projects/nexial-core
fi

if [ -z ${PROJECT_HOME+x} ]; then
  PROJECT_HOME=$(cd `dirname $0`/../..; pwd -P)
fi

$NEXIAL_HOME/bin/nexial.sh -plan "$PROJECT_HOME"/artifact/plan/search-plan.xlsx
