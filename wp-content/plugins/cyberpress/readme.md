# CyberPress

* Contributors: fellan91, nko
* Tags: esports, games, matches, tournaments, teams
* Requires at least: 5.8
* Tested up to: 6.4
* Requires PHP: 7.2
* Stable tag: 2.5.4
* License: GPLv2 or later
* License URI: <http://www.gnu.org/licenses/gpl-2.0.html>

Manage eSport Tournaments, Matches, Teams and Players.

## Description

Manage eSport teams, players, matches and tournaments. Included individual players and teams profiles. Pages with information about matches and tournaments.

* Online Demo <https://getcyberpress.com/>

## Features

* Tournaments
* Matches
* Teams
* Players
* Games

## Installation

### Automatic installation

Automatic installation is the easiest option as WordPress handles the file transfers itself and you don’t need to leave your web browser. To do an automatic install of CyberPress, log in to your WordPress dashboard, navigate to the Plugins menu and click Add New.

In the search field type CyberPress and click Search Plugins. Once you’ve found our plugin you can view details about it such as the point release, rating and description. Most importantly of course, you can install it by simply clicking “Install Now”.

### Manual installation

The manual installation method involves downloading our CyberPress plugin and uploading it to your webserver via your favourite FTP application. The WordPress codex contains [instructions on how to do this here](https://codex.wordpress.org/Managing_Plugins#Manual_Plugin_Installation).

## Changelog

= 2.5.4 =

* fixed duplication archive pages after WP XML demo import
* tested with WP 6.4

= 2.5.3 =

* added displaying all available matches on the tournament page
* fixed regular page is not displaying when disabled one of the CyberPress archive pages
* fixed pagination links wrong URL in some cases
* minor changes

= 2.5.2 =

* fixed a single usage of `<?` instead of `<?php`, which leads to PHP error on settings page on some hosts

= 2.5.1 =

* added WordPress 6.0 compatibility
* fixed `check_thumbnail` method returns empty string on archive pages

= 2.5.0 =

* added WordPress 5.9 compatibility
* updated carbon-fields
* removed support for IE and other old browsers

= 2.4.2 =

* fixed WP 5.8 warnings
* changed required PHP to 7.2
* changed required WP to 5.8

= 2.4.1 =

* added settings for custom player roles

= 2.4.0 =

* removed jQuery dependency
* removed FontAwesome (used plain SVG instead)
* removed PhotoSwipe and OFI scripts from all pages except Match and Tournament (required only on these pages)

= 2.3.2 =

* fixed 404 errors on single and archive pages (properly rewrite rules now)

= 2.3.1 =

* updated Carbon Fields library (resolved OEmbed PHP error)

= 2.3.0 =

* added support for images lazy loading in Visual Portfolio plugin
* added Tournament Stage filter to Matches block
* fixed block filtering select results
* fixed 404 error in paged archives
* delete double paginations on single pages

= 2.2.2 =

* added `is_cyberpress` function to check for CyberPress pages
* added possibility to automatically hide empty table columns on single pages
* improved styles for react-select in Gutenberg blocks
* fixed PHP error in global/progress when total value is `0`
* fixed grid-gap variable for Row element

= 2.2.1 =

* fixed cyberpress-game-inline-link css variable usage

= 2.2.0 =

* completely rewritten styles (removed borders, use background instead)
* added CSS variables
* improved progress bar hints

= 2.1.4 =

* added RTL support
* added WordPress 5.5 support
* fixed Player and Team Lead words output on frontend

= 2.1.3 =

* removed limitation for 20 items per page on archive pages

= 2.1.2 =

* changed Twitch embed to JS API
* fixed Twitch embed error

= 2.1.1 =

* fixed meta fields load on some servers with symlinks used
* removed unused Gutenberg dependencies

= 2.1.0 =

* added support for Twenty themes (just better styles)
* added top margin to pagination
* updated FontAwesome
* fixed default column settings
* fixed jQuery error in editor
* fixed Tournament Stage option
* removed dashicons enqueue

= 2.0.0 =

* added Gutenberg support
* a lot of improvements, actually this is now production-ready plugin version, that we start using in our themes

= 1.0.0 =

* Initial Release
