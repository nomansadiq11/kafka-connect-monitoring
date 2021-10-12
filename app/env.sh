#!/bin/sh
sed -i -e "s|someurl|$kafka_url|g" config.js

echo "execuated successfully"