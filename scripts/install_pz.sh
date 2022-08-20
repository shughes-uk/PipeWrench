set -e
# mkdir -p steamcmd
# curl -sqL "https://steamcdn-a.akamaihd.net/client/installer/steamcmd_osx.tar.gz" | tar zxvf - --directory steamcmd
# cd steamcmd
steamcmd +runscript $PWD/scripts/install_pz.txt +quit
cd ..
