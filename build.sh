#!/bin/bash
# Use -gt 1 to consume two arguments per pass in the loop (e.g. each
# argument has a corresponding value to go with it).
# Use -gt 0 to consume one or more arguments per pass in the loop (e.g.
# some arguments don't have a corresponding value to go with it such
# as in the --default example).
# note: if this is set to -gt 0 the /etc/hosts part is not recognized ( may be a bug )
# http://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash
PATH=.:/usr/local/bin:$PATH

while [[ $# -gt 0 ]]
do
key="$1"

case $key in
    -v|--verbose)
    VERBOSE="YES"
    ;;
    -c|--clean)
    CLEAN="YES"
    ;;
    -r|--registry)
    OVERRIDE_REGISTRY="YES"
    REGISTRY="$2"
    ;;
    -n|--number)
    SPECIFIC_BUILD_NUMBER="YES"
    BUILD_NUM="$2"
    shift # past argument
    ;;
    *)
     # unknown option
    ;;
esac
shift # past argument or value
done

echo VERBOSE FLAG   = "${VERBOSE}"
echo CLEAN FLAG   = "${CLEAN}"
echo OVERRIDE_REGISTRY   = "${OVERRIDE_REGISTRY}"
echo SPECIFIC_BUILD_NUMBER   = "${SPECIFIC_BUILD_NUMBER}"

if [ "$OVERRIDE_REGISTRY" == "YES" ];then
    echo USING OVERRIDEN REGISTRY   = "${REGISTRY}"
else
    REGISTRY="https://registry.npm.taobao.org"
fi

if [ "${SPECIFIC_BUILD_NUMBER}" == "YES" ];then
    echo BULIDING BUILD   = "${BUILD_NUM}"
else
    BUILD_NUM="$(date '+%Y%m%d%H%M%S')"
    echo BULIDING BUILD   = "${BUILD_NUM}"
fi

echo "Building web application with registry: ${REGISTRY}"
echo "Current dir: " `pwd`
# npm config set registry ${REGISTRY}

echo "Set sass_binary_path to .npmrc"
# npm config set sass_binary_path "$PWD/build/node-sass/linux-x64-57_binding.node"

LOG_LEVEL=" --loglevel warn"
if [ "$VERBOSE" == "YES" ];then
    LOG_LEVEL=" --loglevel silly"
fi

echo "Setting log level to: $LOG_LEVEL"

rm -rf dist

if [ "$CLEAN" == "YES" ];then
    echo "Cleaning existing npm packages"
    rm -rf node_modules/*
fi

echo "install packages"
npm install --registry=$REGISTRY  --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist  --userconfig=$HOME/.cnpmrc --save

echo "Building..."
# npm run dll $LOG_LEVEL          # deleted since 0.11 does not need dll. YELING:no need to run dll since 0.11
# npm run build $LOG_LEVEL

npm run build $LOG_LEVEL --registry=$REGISTRY  --cache=$HOME/.npm/.cache/cnpm --disturl=https://npm.taobao.org/dist  --userconfig=$HOME/.cnpmrc

echo "Packaging application into: main-app-${BUILD_NUM}.tar"
rm -rf dist/static
tar -cf dist/main-app-${BUILD_NUM}.tar dist/*

exit 0

