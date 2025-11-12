#!/usr/bin/env bash
# Instala dependências do sistema necessárias antes do pip install
apt-get update && apt-get install -y gcc python3-dev
pip install -r requirements.txt
