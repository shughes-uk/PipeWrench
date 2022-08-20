set -e
# mkdir -p steamcmd
# curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_osx.tar.gz" | tar zxvf - --directory steamcmd
# cd steamcmd
steamcmd +runscript ../scripts/install_pz.txt
cd ..
