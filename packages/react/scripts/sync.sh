# Copy core dist
rm -rf node_modules/@musangowope/hot-components/dist node_modules/@musangowope/hot-components/components
cp -a ../../core/dist node_modules/@musangowope/hot-components/dist
cp -a ../../core/components node_modules/@musangowope/hot-components/components
cp -a ../../core/package.json node_modules/@musangowope/hot-components/package.json

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../core/node_modules/ionicons node_modules/ionicons
