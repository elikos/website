#!/bin/sh
bundle exec htmlproofer ./src --http-status-ignore 999 --empty-alt-ignore
