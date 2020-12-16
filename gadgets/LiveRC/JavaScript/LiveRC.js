/*
 ┌──────────────────────────────────────────────────────────────────────────────┐
 │                                                                              │
 │                                                                              │
 │     LLLL         III                          RRRRRRRRRR        CCCCC        │
 │     LLLL         III                          RRRRRRRRRRRR    CCCCCCCCC      │
 │     LLLL                                      RRR      RRR   CCC     CCC     │
 │     LLLL         III  VV     VV  EEEEEEEEE    RRR      RRR  CCC              │
 │     LLLL         III   VV   VV   EEE          RRRRRRRRRRR   CCC              │
 │     LLLL         III   VV   VV   EEEEEE       RRRRRRRRRR    CCC              │
 │     LLLL         III    VV VV    EEEEEE       RRR     RRR    CCC     CCC     │
 │     LLLLLLLLLLL  III    VVVVV    EEE          RRR      RRR    CCCCCCCCC      │
 │     LLLLLLLLLLL  III     VVV     EEEEEEEEE    RRR       RRR     CCCCC        │
 │                                                                              │
 │                                                                              │
 └──────────────────────────────────────────────────────────────────────────────┘

{{Boîte déroulante|largeur=30%|alignB=right|titre=Sommaire|contenu={{Sommaire à droite}}}}

== Legal announcements ==

=== License ===

<div class="mw-code">
Copyright © 2013, copyright holders : see below

For any purpose, you can choose one of the following licenses :

{{Boîte déroulante/début|titre='''[http://opensource.org/licenses/mit-license.php MIT/X11]'''}}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.

Except as contained in this notice, the name of the copyright holders shall not be used in advertising or otherwise to promote the sale, use or other dealings in this Software without prior written authorization from the copyright holders.

{{Boîte déroulante/fin}}{{Boîte déroulante/début|titre='''[http://creativecommons.org/licenses/by-sa/3.0/ CC-BY-SA-3.0 Unported]'''}}
You are free:
* to Share — to copy, distribute and transmit the work
* to Remix — to adapt the work
* to make commercial use of the work

Under the following conditions:
* Attribution — You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
* Share Alike — If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

With the understanding that:
* Waiver — Any of the above conditions can be waived if you get permission from the copyright holder.
* Public Domain — Where the work or any of its elements is in the public domain under applicable law, that status is in no way affected by the license.
* Other Rights — In no way are any of the following rights affected by the license:
** Your fair dealing or fair use rights, or other applicable copyright exceptions and limitations;
** The author's moral rights;
** Rights other persons may have either in the work itself or in how the work is used, such as publicity or privacy rights.
* Notice — For any reuse or distribution, you must make clear to others the license terms of this work. The best way to do this is with a link to this web page.

{{Boîte déroulante/fin}}
</div>

=== Authors ===

<div class="mw-code">
* Auteur : [[:fr:User:EDUCA33E]]
* Développement et maintenance :
** [[:fr:User:TiChou]],
** [[:pl:User:Leafnode]],
** [[:it:User:Jalo]],
** [[:fr:User:Nakor]],
** [[:fr:User:Arkanosis]],
** [[:pl:User:Nux]],
** [[:fr:User:Argos42]],
** [[:fr:User:Orlodrim]],
** [[:fr:User:Dr Brains]]
</div>

== Documentation ==

<div class="mw-code">
* [//fr.wikipedia.org/wiki/Wikipédia:LiveRC/Documentation Wikipédia:LiveRC/Documentation]

{{Catégorisation JS|LiveRC}}
{{clr}}
</div>

== Code source ==

=== Variables globales ===

<source lang="javascript"> */

  window.LiveRC_Version = "1.0.5";
  window.LiveRC_Version_Dev = "1.0.6-beta";

/* </source>

==== Paramètres de LiveRC ====

<source lang=javascript> */

  window.Custom_lrcParams = {};

  window.lrcParams = {
    "Language"                : "en",                                                     // Langue de l’interface (par défaut)
    "PageTitle"               : mw.config.get('wgSiteName')+":LiveRC",                    // Page principale de LiveRC
    "SandboxPage"             : mw.config.get('wgSiteName')+":Bac à sable",               // Page bac à sable
    "CommonsURL"              : "//upload.wikimedia.org/wikipedia/commons/",              // Adresse des images Commons
    "SearchURL"               : "https://duckduckgo.com/?q=$1",                           // Moteur de recherche externe
    "TchatURL"                : "https://kiwiirc.com/client/irc.freenode.net/?nick=$2$1", // Adresse du client IRC
    "TchatChannel"            : "#wikipedia-fr-liverc",                                   // Canal de tchat
    "WhoisURL"                : "https://tools.wmflabs.org/whois/$1/lookup",              // URL de l’outil Whois
    "RClinkid"                : "n-recentchanges",                                        // ID du lien "Modifications récentes"
    "MiniPreviewHeight"       : '250px', // Hauteur maxi par défaut du minidiff;
    "PreviewWindowHeight"     : '250px', // Hauteur par défaut de la fenêtre de prévisualisation;
    "HistoryWindowHeight"     : '250px', // Hauteur par défaut de l’historique des prévisualisations;
    "SearchWindowHeight"      : '250px', // Hauteur par défaut de la fenêtre de recherche Google;
    "TchatWindowHeight"       : '350px', // Hauteur par défaut de la fenêtre de tchat;
    "FollowWindowHeight"      : '100px', // Hauteur des listes de suivi;
    "TZ"                      : '00:00', // Fuseau horaire (+02:00, 02:00, -0200, -05:45, ...)
    "InterwikiList"           : '',      // Langues des interwikis montrés (exemple : 'de|en|es|fr|it')
    "RCLimit"                 : 50,      // Nombre de ligne maximum de la table de RC;
    "Refresh"                 : 10,      // Délai de rafraichissement des RC
    "ArticleLengthLimit"      : 0,       // Limite du nombre de caractères affichés de l’article dans les RC
    "UserLengthLimit"         : 0,       // Limite du nombre de caractères affichés de l’utilisateur dans les RC
    "MinYellowWatchers"       : 5,       // Limite basse du nombre de suiveurs de la page (rouge/jaune)
    "MinGreenWatchers"        : 10,      // Limite basse du nombre de suiveurs de la page (jaune/vert)
    "MinBacklinks"            : 3,       // Limite basse du nombre de backlinks vers la page
    "MinLinks"                : 3,       // Limite basse du nombre de liens sur la page
    "BoldComments"            : false,   // Commentaires de modification en gras
    "ShowArticleLength"       : true,    // Afficher la taille totale de la page
    "ShowTimer"               : true,    // Afficher le timer
    "ShowPreviewOnTop"        : false,   // Afficher la prévisualisation au-dessus des RC
    "LoadUsersInGroupsList"   : true,    // Charger la liste des bots et sysops
    "LoadWatchlist"           : true,    // Charger la liste des articles et utilisateurs suivis (coûteux au démarrage)
    "LoadIPCat"               : true,    // Charger les catégories d'utilisateurs (coûteux au démarrage)
    "LoadLastBlocks"          : true,    // Charger les derniers blocages (coûteux au démarrage)
    "GetPageInfos"            : true,    // Charger les infos sur les pages (coûteux)
    "GetFileInfos"            : true,    // Charger les infos sur les images uploadées (coûteux)
    "GetWikidataInfos"        : false,   // Charger les infos wikidata sur les rc wikidata (coûteux)
    "UseMiniDiff"             : false,   // Afficher le diff-réduit (très coûteux)
    "ShowNotifications"       : true,    // Afficher les notifications
    "ShowInterwikiList"       : true,    // Montrer les liens inter-langues dans les RC
    "InterwikiPreviewEnabled" : true,    // Activer la prévisualisation des pages interwiki
    "KeepAllLines"            : false,   // Conserver toutes les lignes RC
    "InvertUpdate"            : false,   // Inverser le sens d’apparition des RC
    "AutoCloseDiff"           : false,   // Supprimer une ligne après visualisation du diff
    "PreloadLines"            : true,    // Préchargement des diff en utilisant le bouton [Suivant]
    "SubstWarnings"           : true,    // Substitution des modèles d'avertissement
    "BypassWatchdefault"      : true     // Ne pas ajouter automatiquement les pages modifiées à la liste de suivi
  };

/* </source>

==== Options de démarrage ====

<source lang=javascript> */

  window.Custom_lrcOptionMenuValues = {};

  window.lrcOptionMenuValues = {
    "LiveRCDisplayed"          : true,    // Afficher l’interface de LiveRC
    "LiveRCRCTableDisplayed"   : true,    // Afficher le tableau des RC
    "LiveRCTchatDisplayed"     : false,   // Afficher la fenêtre de tchat
    "LiveRCPreviewDisplayed"   : false,   // Afficher la fenêtre de prévisualisation
    "LiveRCFollowDisplayed"    : true,    // Afficher les listes de suivi
    "DisplayDebug"             : false,   // Afficher le panneau de débogage
    "Debug_Ajax"               : false,   // Panneau de débogage : Afficher les requêtes Ajax
    "Debug_Errors"             : false,   // Panneau de débogage : N’afficher que les erreurs
    "Stop"                     : false,   // Case "Pause"
    "Diff"                     : false,   // Case "Diff réduit"
    "RC"                       : true,    // Case "RC"
    "RC_edit"                  : true,    // Case "RC (modifications normales)"
    "RC_minor"                 : true,    // Case "RC (modifications mineurs)"
    "RC_new"                   : true,    // Case "RC (nouvelles pages)"
    "RC_categorize"            : false,   // Case "RC (changements de catégories)"
    "RC_external"              : false,   // Case "RC (edits wikidata)"
    "Log"                      : true,    // Case "Journaux"
    "WL_watched"               : true,    // Case "Pages suivies"
    "WL_unwatched"             : true,    // Case "Pages non suivies"
    "Tags"                     : false,   // Case "Balises"
    "Tags_notag"               : true,    // Case "Balises" : ''Pas de balise''
    "NS"                       : false,   // Case "Espaces de noms"
    "User"                     : true,    // Case "Utilisateurs"
    "User_IP"                  : true,    // Case "IP"
    "User_REGISTERED"          : true,    // Case "Enregistrés"
    "User_NEWBIE"              : true,    // Case "Débutants"
    "User_AUTOPATROLLED"       : false,   // Case "Confirmés"
    "User_HideOwnSubpage"      : false,   // Case "Masquer les modifications d’un utilisateur sur ses propres sous-pages"
    "User_ShowAllSelf"         : true,    // Case "Toujours afficher mes propres modifications"
    "User_ShowAllContact"      : true,    // Case "Toujours afficher mes contacts"
    "User_ShowAllWatchlist"    : true,    // Case "Toujours afficher ma liste de suivi"
    "User_ShowAllRevert"       : true,    // Case "Toujours afficher les révocations"
    "User_ShowAllBlanking"     : true,    // Case "Toujours afficher les blanchiments"
    "User_ShowAllReplaced"     : true     // Case "Toujours afficher les remplacements"
  };

/* </source>

==== Textes de l'interface ====

===== Textes non traduits =====

<source lang=javascript> */

  window.Custom_UnTranslatedTexts = {};

  window.UnTranslatedTexts = {
    ON_ARTICLE:             "sur",
    UPDATEMESSAGES:         "Mise à jour de la configuration Mediawiki locale",
    MWSiteGlobalLegend:     "Configuration locale de Mediawiki",
    MWGeneralConfigLegend:  "Configuration générale de Mediawiki",
    MWLanguagesLegend:      "Langues supportées",
    MWMessagesLegend:       "Messages système",
    MWExtensionsLegend:     "Extensions Mediawiki",
    MWNamespacesLegend:     "Espaces de noms",
    MWMagicwordsLegend:     "Mots magiques",
    MWInterwikimapLegend:   "Table interwiki",
    MWWikibaseLegend:       "Wikibase",
    MWTagsLegend:           "Balises",
    TAG_RESUME:             "Bandeau",
    USERMSG_RESUME:         "Message",
    EMPTY_RESUME:           "Blanchiment",
    USERTHANK_RESUME:       "Remerciement",
    BLOCKTEMPLATE:          "Blocage",
    RESUMESTART:            "[[WP:LRC|LiveRC]] : ",
    Comment:                "Personnalisation pour LiveRC"
  };
/* </source>

===== Textes traduits =====

<source lang=javascript> */

   // Textes
  window.lrcTexts = {};
  window.lrcTranslatedTexts = {};
  window.Custom_lrcTranslatedTexts = {};

   // Descriptions de variables
  window.lrcParamDesc = {};
  window.lrcTranslatedParamDesc = {};
  window.Custom_lrcTranslatedParamDesc = {};

/* </source>

==== Icônes ====

<source lang=javascript> */

  window.Custom_lrcIcons = {};

  window.lrcIcons = {
  // Page & Edit type
    "AdQIcon" : {
      type:1,
      src:"thumb/c/c7/Fairytale_bookmark_gold.png/10px-Fairytale_bookmark_gold.png",
      width:10,
      height:10
    },
    "APDQIcon" : {
      type:1,
      src:"thumb/e/e0/Fairytale_bookmark_half_gold_silverlight_question.png/10px-Fairytale_bookmark_half_gold_silverlight_question.png",
      width:10,
      height:10
    },
    "BAIcon" : {
      type:1,
      src:"thumb/0/08/Fairytale_bookmark_silver.png/10px-Fairytale_bookmark_silver.png",
      width:10,
      height:10
    },
    "HomonIcon" : {
      type:0,
      src:"thumb/7/72/Disambig.svg/16px-Disambig.svg.png",
      width:16,
      height:16
    },
    "StubIcon" : {
      type:0,
      src:"thumb/a/a6/Construction_cone.png/16px-Construction_cone.png",
      width:16,
      height:16
    },
    "PaSIcon" : {
      type:0,
      src:"thumb/9/9e/Icono_consulta_borrar.png/16px-Icono_consulta_borrar.png",
      width:16,
      height:16
    },
    "CopyrightIcon" : {
      type:0,
      src:"thumb/b/b0/Copyright.svg/16px-Copyright.svg.png",
      width:16,
      height:16
    },
    "RecentIcon" : {
      type:0,
      src:"thumb/1/19/Ambox_currentevent.svg/16px-Ambox_currentevent.svg.png",
      width:16,
      height:16
    },
    "R3RIcon" : {
      type:0,
      src:"thumb/b/bc/R3R.svg/16px-R3R.svg.png",
      width:16,
      height:16
    },
    "WIPIcon" : {
      type:0,
      src:"thumb/6/6a/Under_construction_icon-orange.svg/16px-Under_construction_icon-orange.svg.png",
      width:16,
      height:13
    },
    "LockIcon" : {
      type:0,
      src:"thumb/e/e0/Padlock-gold.svg/16px-Padlock-gold.svg.png",
      width:16,
      height:16
    },
    "ExtendedLockIcon" : {
      type:0,
      src:"thumb/e/e0/Padlock-gold.svg/16px-Padlock-gold.svg.png", // TODO - créer une version grise de l'icône
      width:16,
      height:16
    },
    "FullLockIcon" : {
      type:0,
      src:"thumb/4/48/Padlock-red.svg/16px-Padlock-red.svg.png",
      width:16,
      height:16
    },
    "TrackingCategoriesIcon" : {
      type:0,
      src:"4/49/Error.png",
      width:16,
      height:16
    },
    "Watchers0Icon" : {
      type:0,
      src:"thumb/b/b5/Webroot_Spy_Sweeper_%28red%29.png/12px-Webroot_Spy_Sweeper_%28red%29.png",
      width:12,
      height:12
    },
    "Watchers1Icon" : {
      type:0,
      src:"thumb/4/48/Webroot_Spy_Sweeper_%28orange%29.png/12px-Webroot_Spy_Sweeper_%28orange%29.png",
      width:12,
      height:12
    },
    "Watchers2Icon" : {
      type:0,
      src:"thumb/f/ff/Webroot_Spy_Sweeper_%28yellow%29.png/12px-Webroot_Spy_Sweeper_%28yellow%29.png",
      width:12,
      height:12
    },
    "Watchers3Icon" : {
      type:0,
      src:"thumb/0/01/Webroot_Spy_Sweeper_%28green%29.png/12px-Webroot_Spy_Sweeper_%28green%29.png",
      width:12,
      height:12
    },
    "RedirectIcon" : {
      type:0,
      src:"thumb/7/71/Symbol_redirect_arrow_with_gradient.svg/16px-Symbol_redirect_arrow_with_gradient.svg.png",
      width:16,
      height:10
    },
    "ExternalIcon" : {
      type:0,
      src:"thumb/e/e4/Wikidata-logo_S.svg/16px-Wikidata-logo_S.svg.png",
      width:16,
      height:9
    },
    "FlowIcon" : {
      type:0,
      src:"thumb/6/64/Talk_page_icon_crystal.png/16px-Talk_page_icon_crystal.png",
      width:16,
      height:16
    },
  // Logs
    "ManagetagsIcon" : {
      type:0,
      src:"thumb/7/7b/Gnome-mime-manpage.png/16px-Gnome-mime-manpage.png",
      width:16,
      height:16
    },
    "ChangetagIcon" : {
      type:0,
      src:"thumb/b/b4/Curation_Bar_Icon_Add_Tags_Blue_with_transparent_background.png/16px-Curation_Bar_Icon_Add_Tags_Blue_with_transparent_background.png",
      width:16,
      height:16
    },
    "AbusefilterIcon" : {
      type:0,
      src:"thumb/7/78/Nuvola_apps-agent_and_Icon_tools_red.png/16px-Nuvola_apps-agent_and_Icon_tools_red.png",
      width:16,
      height:13
    },
    "AbuselogIcon" : {
      type:0,
      src:"thumb/5/5e/Nuvola_apps_agent.svg/16px-Nuvola_apps_agent.svg.png",
      width:16,
      height:13
    },
    "UploadIcon" : {
      type:0,
      src:"thumb/4/47/Gartoon-Gnome-dev-floppy.png/16px-Gartoon-Gnome-dev-floppy.png",
      width:16,
      height:16
    },
    "ImportIcon" : {
      type:0,
      src:"thumb/a/a0/Document_arrow_green.svg/32px-Document_arrow_green.svg.png",
      width:32,
      height:16
    },
    "NewUserIcon" : {
      type:0,
      src:"thumb/c/c1/Crystal_personal.png/16px-Crystal_personal.png",
      width:16,
      height:16
    },
    "BlockIcon" : {
      type:0,
      src:"thumb/8/8b/B1.svg/16px-B1.svg.png",
      width:16,
      height:16
   },
    "DeleteIcon" : {
      type:0,
      src:"thumb/e/ef/Editcut.png/16px-Editcut.png",
      width:16,
      height:16
    },
    "MoveIcon" : {
      type:0,
      src:"thumb/0/0e/Forward.png/16px-Forward.png",
      width:16,
      height:16
    },
    "ProtectIcon" : {
      type:0,
      src:"thumb/6/64/Crystal_Clear_action_lock3.png/16px-Crystal_Clear_action_lock3.png",
      width:16,
      height:16
    },
    "ThanksIcon" : {
      type:0,
      src:"thumb/7/7d/Heart_icon.svg/16px-Heart_icon.svg.png",
      width:16,
      height:16
    },
    "RenameuserIcon" : {
      type:0,
      src:"thumb/b/b9/Blue_&_gray_people.png/15px-Blue_&_gray_people.png",
      width:16,
      height:16
    },
    "RightsIcon" : {
      type:0,
      src:"thumb/0/07/Fairytale_kdmconfig.png/18px-Fairytale_kdmconfig.png",
      width:16,
      height:16
    },
    "MassMessageIcon" : {
      type:0,
      src:"thumb/b/b3/Nuvola_apps_email-several.png/16px-Nuvola_apps_email-several.png",
      width:16,
      height:16
    },
    "CheckUserIcon" : {
      type:0,
      src:"thumb/c/cb/Nuvola_search_person.png/16px-Nuvola_search_person.png",
      width:16,
      height:16
    },
    "OversightIcon" : {
      type:0,
      src:"thumb/2/2c/Icon_delete.svg/16px-Icon_delete.svg.png",
      width:16,
      height:16
    },
    "ReviewIcon" : {
      type:0,
      src:"thumb/6/66/Copyvio-NormalMagnifier.png/16px-Copyvio-NormalMagnifier.png",
      width:16,
      height:16
    },
    "StableIcon" : {
      type:0,
      src:"thumb/a/a7/Copyvio-WarningMagnifier.png/16px-Copyvio-WarningMagnifier.png",
      width:16,
      height:16
    },
    "PagetriageDeletionIcon" : {
      type:0,
      src:"thumb/c/cb/Curation_Bar_Icon_Trash_Blue_with_transparent_background.png/16px-Curation_Bar_Icon_Trash_Blue_with_transparent_background.png",
      width:16,
      height:16
    },
    "PagetriageCurationIcon" : {
      type:0,
      src:"thumb/5/5c/Curation_Bar_Icon_Love_Blue_with_transparent_background.png/16px-Curation_Bar_Icon_Love_Blue_with_transparent_background.png",
      width:16,
      height:16
    },
    "EducationProgramIcon" : {
      type:0,
      src:"thumb/4/47/WIKI_AND_ACADEMIA.PNG/16px-WIKI_AND_ACADEMIA.PNG",
      width:16,
      height:16
    },
    "LiquidThreadsIcon" : {
      type:0,
      src:"thumb/e/e7/FAQ_icon.svg/16px-FAQ_icon.svg.png",
      width:16,
      height:16
    },
    "TranslateIcon" : {
      type:0,
      src:"thumb/4/40/Icono_de_traducción.svg/16px-Icono_de_traducción.svg.png",
      width:16,
      height:16
    },
    "OAuthIcon" : {
      type:0,
      src:"thumb/e/e9/Crystal_Clear_Password.png/16px-Crystal_Clear_Password.png",
      width:16,
      height:16
    },
    "MoodBarIcon" : {
      type:0,
      src:"thumb/7/75/Oxygen480-emotes-face-plain.svg/16px-Oxygen480-emotes-face-plain.svg.png",
      width:16,
      height:16
    },
    "InterwikiIcon" : {
      type:0,
      src:"thumb/1/19/Interprogetto.png/16px-Interprogetto.png",
      width:16,
      height:16
    },
  // User type
    "SharedIPIcon" : {
      type:0,
      src:"thumb/b/b7/WLM_logo.svg/16px-WLM_logo.svg.png",
      width:16,
      height:16
    },
    "ScolarIPIcon" : {
      type:0,
      src:"thumb/9/98/Crystal_kdmconfig.png/16px-Crystal_kdmconfig.png",
      width:16,
      height:16
    },
    "OpenProxyIcon" : {
      type:0,
      src:"thumb/0/0a/Crystal_Clear_kdmconfig-danger.png/16px-Crystal_Clear_kdmconfig-danger.png",
      width:16,
      height:16
    },
    "NewbieIcon" : {
      type:0,
      src:"thumb/c/c1/Crystal_personal.png/16px-Crystal_personal.png",
      width:16,
      height:16
    },
    "SysopIcon" : {
      type:0,
      src:"thumb/6/61/Gnome-stock_person_admin2.svg/16px-Gnome-stock_person_admin2.svg.png",
      width:16,
      height:16
   },
    "BotIcon" : {
      type:0,
      src:"thumb/c/c2/Gnome-stock_person_bot.svg/16px-Gnome-stock_person_bot.svg.png",
      width:16,
      height:16
    },
    "BlockedIcon" : {
      type:0,
      src:"thumb/b/b8/Modern_clock_chris_kemps_01_with_Octagon-warning.svg/16px-Modern_clock_chris_kemps_01_with_Octagon-warning.svg.png",
      width:16,
      height:16
    },
    "CopyrightUserIcon" : {
      type:0,
      src:"thumb/b/b0/Copyright.svg/16px-Copyright.svg.png",
      width:16,
      height:16
    },
    "SpamblacklistUserIcon" : {
      type:0,
      src:"thumb/b/b5/Nospam_at.svg/16px-Nospam_at.svg.png",
      width:16,
      height:16
    },
    "PediaProjectIcon" : {
      type:0,
      src:"thumb/7/79/A13a_French_road_sign.svg/15px-A13a_French_road_sign.svg.png",
      width:16,
      height:16
    },
// Edit type (comments)
    "MinorEditIcon" : {
      type:0,
      src:"thumb/d/d0/M_in_a_Circle.png/12px-M_in_a_Circle.png",
      width:12,
      height:12
    },
    "RevertIcon" : {
      type:0,
      src:"thumb/2/2c/Nuvola_actions_undo.png/12px-Nuvola_actions_undo.png",
      width:12,
      height:12
    },
    "ReplacedIcon" : {
      type:0,
      src:"thumb/9/95/Categorie_III.svg/12px-Categorie_III.svg.png",
      width:12,
      height:12
    },
    "RedirectedIcon" : {
      type:0,
      src:"thumb/7/7f/Redirect_arrow_without_text_(cropped).svg/12px-Redirect_arrow_without_text_(cropped).svg.png",
      width:12,
      height:12
    },
    "BlankingIcon" : {
      type:0,
      src:"thumb/4/41/Kde_crystalsvg_eraser.png/12px-Kde_crystalsvg_eraser.png",
      width:12,
      height:12
    },
    "WPCIcon" : {
      type:0,
      src:"thumb/2/2d/Nuvola_web_broom.svg/12px-Nuvola_web_broom.svg.png",
      width:12,
      height:12
    },
    "AWBIcon" : {
      type:0,
      src:"thumb/b/b4/AWB_logo_draft.png/12px-AWB_logo_draft.png",
      width:12,
      height:12
    },
    "BandeauxPortailsIcon" : {
      type:0,
      src:"thumb/e/e1/Portal_icon.svg/12px-Portal_icon.svg.png",
      width:12,
      height:12
    },
    "BandeauxEbauchesIcon" : {
      type:0,
      src:"thumb/3/37/Icon-wrench.png/12px-Icon-wrench.png",
      width:12,
      height:12
    },
    "HotCatIcon" : {
      type:0,
      src:"thumb/f/fd/Magnify-clip_%28sans_arrow%29.svg/12px-Magnify-clip_(sans_arrow).svg.png",
      width:12,
      height:12
    },
    "PopupsIcon" : {
      type:0,
      src:"thumb/1/11/Toolbaricon_hiddencomment.png/12px-Toolbaricon_hiddencomment.png",
      width:12,
      height:12
    },
    "CatRenameIcon" : {
      type:0,
      src:"thumb/5/56/Crystal_Project_2rightarrow.png/12px-Crystal_Project_2rightarrow.png",
      width:12,
      height:12
    },
    "LRCIcon" : {
      type:0,
      src:"thumb/b/b2/LiveRC.svg/12px-LiveRC.svg.png",
      width:12,
      height:12
    },
  // Interface icons
    "TchatButtonIcon" : {
      type:0,
      src:"thumb/7/7a/Mercury_bw.png/25px-Mercury_bw.png",
      width:32,
      height:32
    },
    "DebugButtonIcon" : {
      type:0,
      src:"thumb/6/69/Logviewer_bw.png/32px-Logviewer_bw.png",
      width:32,
      height:32
    },
    "ConfigButtonIcon" : {
      type:0,
      src:"thumb/2/27/Folder-system.png/32px-Folder-system.png",
      width:32,
      height:32
    },
    "LiveRCButtonIcon" : {
      type:0,
      src:"thumb/6/66/Exaile_bw.png/32px-Exaile_bw.png",
      width:32,
      height:32
    },
    "RCListButtonIcon" : {
      type:0,
      src:"thumb/7/78/Ethereal.png/25px-Ethereal.png",
      width:25,
      height:25
    },
    "PreviewButtonIcon" : {
      type:0,
      src:"thumb/0/05/Preferences-desktop-screensaver.png/25px-Preferences-desktop-screensaver.png",
      width:25,
      height:25
    },
    "FollowButtonIcon" : {
      type:0,
      src:"thumb/3/35/Utilities-system-monitor.png/25px-Utilities-system-monitor.png",
      width:25,
      height:25
    },
    "HistoryButtonIcon" : {
      type:0,
      src:"thumb/c/c7/File-manager.png/25px-File-manager.png",
      width:25,
      height:25
    },
    "LogoIcon" : {
      type:0,
      src:"thumb/2/2d/LiveRC_Ts-for_anim.svg/52px-LiveRC_Ts-for_anim.svg.png",
      width:52,
      height:32
    },
    "AnimatedLogoIcon" : {
      type:0,
      src:"9/97/LiveRC_Ts-anim1.gif",
      width:52,
      height:32
    },
    "FavIcon" : {
      type:0,
      src:"thumb/b/b2/LiveRC.svg/16px-LiveRC.svg.png",
      width:16,
      height:16
    },
    "SuggestExistIcon" : {
      type:0,
      src:"thumb/b/be/P_yes.svg/20px-P_yes.svg.png",
      width:20,
      height:20
    },
    "SuggestNoExistIcon" : {
      type:0,
      src:"thumb/4/42/P_no.svg/20px-P_no.svg.png",
      width:20,
      height:20
    }
  };

/* </source>

==== Paramètres des fonctions automatiques ====

===== Avertissement =====

<source lang=javascript> */

  window.Custom_lstAverto = [];

  window.lstAverto = [
    { template: "Test 0"                , string: "Test 0"            , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Test 1"                , string: "Test 1"            , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Test 2"                , string: "Test 2"            , hasPage: false, addName: false, addSectionTitle: false },
    { template: "Test 3"                , string: "Test 3"            , hasPage: false, addName: false, addSectionTitle: false },
    { template: "Seul avertissement"    , string: "Test 4"            , hasPage: false, addName: false, addSectionTitle: false },
    { template: "Retrait injustifié"    , string: "Retrait injustifié", hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Motivation modif"      , string: "Résumé"            , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "LE HC"                 , string: "LE hors-critères"  , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "LE dans texte"         , string: "LE dans texte"     , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Spammeur"              , string: "Spam"              , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Ortho"                 , string: "Ortho"             , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Ajout POV"             , string: "Non-neutre"        , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Non-encyclo"           , string: "Non-encyclo"       , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Faut sourcer"          , string: "Faut sourcer"      , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Faut sourcer EV"       , string: "Faut sourcer EV"   , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Maladresse"            , string: "Modif corrigée"    , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Suppr Bandeaux"        , string: "Bandeaux"          , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Bienvenue Copyvio 1"   , string: "Copyright"         , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Compte publicitaire"   , string: "PU publicitaire"   , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "BSI CAA"               , string: "BSI CAA"           , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "BSI BàS"               , string: "BSI BàS"           , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "BSI promo"             , string: "BSI promo"         , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "BSI canular"           , string: "BSI canular"       , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Aide sources"          , string: "Aide sources"      , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "Aide images"           , string: "Aide images"       , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "Aide wikification"     , string: "Aide wikif"        , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Aide liens"            , string: "Aide liens"        , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "AideMeta/Promo"        , string: "Aide BandoPromo"   , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "AideMeta/RefLié"       , string: "Aide BandoRefLié"  , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "AideMeta/RefSec"       , string: "Aide BandoRefSec"  , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "AideMeta/TI"           , string: "Aide BandoTI"      , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "AideMeta/Delist"       , string: "Aide BandoDelist"  , hasPage: true,  addName: true,  addSectionTitle: false },
    { template: "Bienvenue"             , string: "Bienvenue"         , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "Bienvenue IP"          , string: "Bienvenue IP"      , hasPage: false, addName: true,  addSectionTitle: false },
    { template: "Bienvenue IP méritante", string: "Bienvenue IP +"    , hasPage: false, addName: true,  addSectionTitle: false }
  ];

/* </source>

===== Blanchiment =====

<source lang=javascript> */

  window.Custom_lstBlank = [];

  window.lstBlank = [
    {tooltip: "copyvio"      , resume: "[[WP:COPY|copie de site web sans autorisation explicite]]" },
    {tooltip: "CAA"          , resume: "[[WP:CAA|critères d’admissibilité non atteints]]"          },
    {tooltip: "non encyclo"  , resume: "[[WP:P|non encyclopédique en l’état]]"                     },
    {tooltip: "BaS"          , resume: "bac à sable"                                               },
    {tooltip: "vandalisme"   , resume: "vandalisme"                                                }
  ];

/* </source>

===== Révocation =====

<source lang=javascript> */

  window.Custom_lrcRevertMessages = [];

  window.lrcRevertMessages = [
    { resume: "[[Wikipédia:Bac à sable|Bac à sable]]" , text: "Bac à sable" },
    { resume: "[[Wikipédia:Vandalisme|Vandalisme]]"   , text: "Vandalisme"  },
    { resume: "Retrait d’information non sourcée"     , text: "Non-sourcé"  },
    { resume: "Traduction automatique"                , text: "Trad auto"   }
  ];

/* </source>

===== Bandeaux =====

<source lang=javascript> */

  window.Custom_lstBando = [];

  window.lstBando = [
    { template: "Admissibilité à vérifier" , string: "admissibilité"          , withDate: "$month $year" },
    { template: "Copie à vérifier"         , string: "copyvio"                , withDate: ""             },
    { template: "À sourcer"                , string: "à sourcer"              , withDate: "$month $year" },
    { template: "À wikifier"               , string: "à wikifier"             , withDate: "$month $year" },
    { template: "Sources secondaires"      , string: "sources secondaires"    , withDate: "$month $year" },
    { template: "Sources à lier"           , string: "sources à lier"         , withDate: "$month $year" },
    { template: "À délister"               , string: "à délister"             , withDate: "$month $year" },
    { template: "Rédaction"                , string: "rédaction"              , withDate: "$month $year" },
    { template: "Travail inédit"           , string: "TI"                     , withDate: ""             },
    { template: "Règle des 3 révocations"  , string: "R3R"                    , withDate: ""             }
  ];

/* </source>

===== Requête aux administrateurs =====

<source lang=javascript> */

  window.Custom_lstReport = [];

  window.lstReport = [
        {  userright:"delete",
           text:"REPORTING_DELETION",
           page:"Wikipédia:Demande de suppression immédiate",
           template:"Wikipédia:LiveRC/Modèles/Demande de suppression",
           parampage:true,
           paramuser:false,
           resume:"[[:$1]]",
           reasonsdropdownname:"deletereason-dropdown"
        },
        {  userright:"protect",
           text:"REPORTING_PROTECTION",
           page:"Wikipédia:Demande de protection de page",
           template:"Wikipédia:LiveRC/Modèles/Demande de protection",
           parampage:true,
           paramuser:false,
           resume:"{{a-court|$1}}",
           reasonsdropdownname:"protect-dropdown"
        },
        {  userright:"block",
           text:"REPORTING_BLOCK",
           page:"Wikipédia:Vandalisme en cours",
           template:"Wikipédia:LiveRC/Modèles/Demande de blocage",
           parampage:false,
           paramuser:true,
           resume:"Demande de blocage : [[User:$2|$2]]",
           reasonsdropdownname:"ipbreason-dropdown"
        },
        {  userright:"anyRight",
           text:"REPORTING_HELP",
           page:"Wikipédia:Forum des nouveaux",
           template:"Wikipédia:LiveRC/Modèles/Nouveau ayant besoin d'aide",
           parampage:false,
           paramuser:true,
           resume:"Demande d'aide pour un nouveau : [[User:$2|$2]]",
           reasonsdropdownname:""
        }
    ];

/* </source>

==== Boutons de suppression de lignes ====

<source lang=javascript> */

  window.Custom_lrcSupprLineParams = [];

  window.lrcSupprLineParams = [
    {textid:"HIDE_ALL"      , color:"red"              , class:"*"          , separator:"|" },
    {textid:"HIDE_REVIEWED" , color:"rgb(255,235,71)"  , class:"RcChecked"  , separator:""  },
    {textid:"HIDE_REVERTS"  , color:"rgb(255,99,83)"   , class:"RcRevert"   , separator:""  },
    {textid:"HIDE_NEW"      , color:"rgb(178,243,113)" , class:"RcNew"      , separator:""  },
    {textid:"HIDE_BLANKING" , color:"white"            , class:"RcBlanking" , separator:""  },
    {textid:"HIDE_LOG"      , color:"blue"             , class:"RcLog"      , separator:""  }
  ];

/* </source>

==== Variables d'état (pour test sur rc.state) ====

===== Commentaire de modif =====

<source lang=javascript> */

  window.Custom_commenttests = [];

  window.commenttests = [
    { state: "REVERT"     , icon:"RevertIcon",           class:"RcRevert",           regex: /\b([Aa]nnulation|[Rr]évocation)\b|^(Undid|Revert to( the)?) revision|^(Undoing|Reverted( \d+)?) edit|^r(e)?v(ert(ing|ed)?)?\b|^La dernière modification du texte .* a été rejetée/, hide:false},
    { state: "BLANKING"   , icon:"BlankingIcon",         class:"RcBlanking",         regex: /^Résumé automatique : blanchiment|^[Bb]lanchi|(Live|Patrouille) *(RC)?( : )?Blanchiment/  , hide:false},
    { state: "REPLACED"   , icon:"ReplacedIcon",         class:"RcReplaced",         regex: /^Résumé automatique : contenu remplacé par/  , hide:false},
    { state: "REDIRECTED" , icon:"RedirectedIcon",       class:"RcRedirected",       regex: /^Page redirigée vers|^#REDIRECT/,   hide:false},
    { state: "WPCLEANER"  , icon:"WPCIcon",              class:"RcWPC",              regex: /(WPCleaner|Correction syntaxique)/, hide:false},
    { state: "AWB"        , icon:"AWBIcon",              class:"RcAWB",              regex: /(AWB|AutoWikiBrowser)/,             hide:false},
    { state: "POPUPS"     , icon:"PopupsIcon",           class:"RcPopups",           regex: /(P|p)opups/,                        hide:false}
  ];

/* </source>

===== Catégories de pages =====

<source lang=javascript> */

  window.Custom_categoriestests = [];

  window.categoriestests = [
    { state: "ADQ"       , icon:"AdQIcon"      , class:"RcADQ",       regex: /Article de qualité( contesté|)$/                },
    { state: "BA"        , icon:"BAIcon"       , class:"RcBA",        regex: /Bon article$/                                   },
    { state: "APDQ"      , icon:"APDQIcon"     , class:"RcAPDQ",      regex: /Article potentiellement (bon|de qualité)/       },
    { state: "STUB"      , icon:"StubIcon"     , class:"RcStub",      regex: /Wikipédia:ébauche/                              },
    { state: "COPYRIGHT" , icon:"CopyrightIcon", class:"RcCopyright", regex: /Article soupçonné de travail sous copyright/    },
    { state: "PAS"       , icon:"PaSIcon"      , class:"RcPaS",       regex: /Page proposée à la suppression/                 }
  ];

/* </source>

===== Catégories d'utilisateurs =====

<source lang=javascript> */

  window.Custom_watchCategories = [];

  window.watchCategories = [
    { state: "SCOLARIP"      , icon:"ScolarIPIcon"      , class:"RcScolarIP",      category: "Adresse IP scolaire"                  },
    { state: "SHAREDIP"      , icon:"SharedIPIcon"      , class:"RcSharedIP",      category: "Adresse IP partagée"                  },
    { state: "OPENPROXY"     , icon:"OpenProxyIcon"     , class:"RcOpenProxy",     category: "Proxy ouvert"                         },
    { state: "COPYRIGHTUSER" , icon:"CopyrightUserIcon" , class:"RcCopyrightUser", category: "Utilisateur enfreignant un copyright" },
    { state: "PEDIAPROJECT"  , icon:"PediaProjectIcon"  , class:"RcPediaProject",  category: "Utilisateur projet pédagogique"       }
  ];

/* </source>

===== Modèles =====

<source lang=javascript> */

  window.Custom_templatestests = [];

  window.templatestests = [
    { state: "PORTAIL"    , icon:""             , class:"RcPortail"  , template: "Méta lien vers portail"          },
    { state: "RECENT"     , icon:"RecentIcon"   , class:"RcRecent"   , template: "Méta bandeau d'événement récent" },
    { state: "R3R"        , icon:"R3RIcon"      , class:"RcR3R"      , template: "Règle des 3 révocations"         },
    { state: "PAS"        , icon:"PaSIcon"      , class:"RcPaS"      , template: "Suppression"                     },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copie de site"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copie à vérifier"                },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Copyrighté"                      },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Texte copyvio"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Image copyvio"                   },
    { state: "COPYRIGHT"  , icon:"CopyrightIcon", class:"RcCopyright", template: "Synopsis"                        },
    { state: "WIP"        , icon:"WIPIcon"      , class:"RcWIP"      , template: "En cours"                        },
    { state: "WIP"        , icon:"WIPIcon"      , class:"RcWIP"      , template: "En travaux"                      }
  ];

/* </source>

==== Autres variables personnalisables ====

===== Extensions =====

<source lang=javascript> */

  window.Custom_lrcExtensions = [];

  window.lrcExtensions = [
    {
      "name":"ProposeTranslationExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/ProposeTranslationExtension.js",
      "desc":"Ajoute un formulaire pour proposer une traduction de l’interface.",
      "neededright": ""
    },
    {
      "name":"InstallAndConfigLiveRCExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/InstallAndConfigLiveRCExtension.js",
      "desc":"Fournit une interface de configuration lorsque l’utilisateur est présent sur la page d’installation",
      "neededright": ""
    },
    {
      "name":"UserWarningsExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/UserWarningsExtension.js",
      "desc":"Ajoute une icône aux utilisateurs ayant reçu un avertissement. En option, indique si la page de discussion de l’utilisateur existe ou non.",
      "neededright": ""
    },
    {
      "name":"MostModifiedPagesExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/MostModifiedPagesExtension.js",
      "desc":"Ajoute une icône aux pages ayant été modifiées récemment par plusieurs utilisateurs ou ayant fait l’objet de plusieurs reverts.",
      "neededright": ""
    },
    {
      "name":"LinkOnIconExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/LinkOnIconExtension.js",
      "desc":"Lie les icônes PàS, AdQ, BA et copyvio aux pages de discussion associées.",
      "neededright": ""
    },
    {
      "name":"LinkOnLanglinkCountExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/LinkOnLanglinkCountExtension.js",
      "desc":"Ajoute un lien vers wikidata par dessus le compteur de liens inter-langues.",
      "neededright": ""
    },
    {
      "name":"ToolbarExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/ToolbarExtension.js",
      "desc":"Fournit une barre d’outils lors d’une édition.",
      "neededright": ""
    },
    {
      "name":"HotCatsMulti",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/HotCatsMulti.js",
      "desc":"Permet d’ajouter/modifier/retirer une ou plusieurs catégories lors de la prévisualisation d’une page",
      "neededright": ""
    },
    {
      "name":"CategoryRC",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/CategoryRCExtension.js",
      "desc":"Permet de ne surveiller que les pages appartenant à une ou plusieur catégories",
      "neededright": ""
    },
    {
      "name":"PreviewAllLinksExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/PreviewAllLinksExtension.js",
      "desc":"Permet de prévisualiser tout lien interne de la fenêtre de prévisualisation",
      "neededright": ""
    },
    {
      "name":"PreviewThisPageExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/PreviewThisPageExtension.js",
      "desc":"Permet de prévisualiser une page au choix",
      "neededright": ""
    },
    {
      "name":"DiffExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/DiffExtension.js",
      "desc":"Permet d’avoir les fonctions automatiques de LiveRC dans les diff \"normaux\"",
      "neededright": ""
    },
    {
      "name":"AskForRevisionDeleteFromHistExtension",
      "url":"//fr.wikipedia.org/w/index.php?title=MediaWiki:Gadget-LiveRC.js/Extensions/AskForRevisionDeleteFromHistExtension.js",
      "desc":"Ajoute des cases à cocher et un bouton dans la prévisualisation d’un historique pour demander un masquage (non sysop)",
      "neededright": "!deleterevision"
    }

  ];


/* </source>

===== Styles CSS =====

; Voir [[MediaWiki:Gadget-LiveRC.js/CSS.js]]

<source lang=javascript> */


/* </source>

===== Onglets du menu de configuration =====

<source lang=javascript> */

    // Config panel tabs
  window.Custom_lstParamMenuTabs = {};
  window.lstParamMenuTabs = {
    "lrcParams"              : true,
    "lrcOptionMenuValues"    : true,
    "lstBlank"               : true,
    "lrcRevertMessages"      : true,
    "lstAverto"              : true,
    "lstBando"               : true,
    "lstReport"              : false,
    "lrcIcons"               : true,
    "lrcTranslatedTexts"     : true,
    "lrcTranslatedParamDesc" : true,
    "UnTranslatedTexts"      : true,
    "lrcExtensions"          : false,
    "commenttests"           : true,
    "categoriestests"        : true,
    "templatestests"         : true,
    "watchCategories"        : true,
    "lrcSupprLineParams"     : false,
    "ContactListLegend"      : true,
    "HiddenListLegend"       : true,
    "ExtensionsLegend"       : true,
    "lrcCSSstyles"           : true
  };

/* </source>

==== Variables non personnalisables ====

<source lang=javascript> */

// Configuration

  if(typeof(window.LiveRC_Config)==="undefined") window.LiveRC_Config = {};

  if(typeof(LiveRC_Config["InstallationPage"])==="undefined")
    LiveRC_Config["InstallationPage"] = ( mw.config.get('wgServer')==='//fr.wikipedia.org' ? "MediaWiki:Gadget-LiveRC-frWP.js" : "Mediawiki:Gadget-LiveRC.js" );

  if(typeof(LiveRC_Config["SiteConfigPage"])==="undefined")
    LiveRC_Config["SiteConfigPage"] = "MediaWiki:Gadget-LiveRCSiteConfig.js";      // Page de stockage de la config locale

  if(typeof(LiveRC_Config["CSSPage"])==="undefined")
    LiveRC_Config["CSSPage"] = "MediaWiki:Gadget-LiveRC-local.css";                // Page de stockage du css local

  if(typeof(LiveRC_Config["UserParamPage"])==="undefined")
    LiveRC_Config["UserParamPage"] = "/LiveRCparam";                               // Sous-page utilisateur de stockage des personnalisations

  if(typeof(LiveRC_Config["HostServerPath"])==="undefined")
    LiveRC_Config["HostServerPath"] = "//fr.wikipedia.org/w/index.php?title=";     // Serveur hébergeant le code de LiveRC


  LiveRC_Config["BugzillaURL"] = "https://fr.wikipedia.org/wiki/Discussion MediaWiki:Gadget-LiveRC.js";

  LiveRC_Config["LaunchProcess"] = [];    // Process d'initialisation
  LiveRC_Config["LaunchProcessForce"] = {};

    // Configuration du wiki local
  LiveRC_Config["MediawikiGeneralConfig"] = {};                        // Liste des paramètres de configuration
  LiveRC_Config["MediawikiLanguages"] = {};                            // Liste des langues supportées
  LiveRC_Config["MediawikiMessages"] = {};                             // Liste des messages système Mediawiki
  LiveRC_Config["MediawikiExtensions"] = {};                           // Liste des extensions Mediawiki
  LiveRC_Config["MediawikiNamespaces"] = {};                           // Liste des espaces de noms
  LiveRC_Config["MediawikiMagicwords"] = {};                           // Liste des mots magiques
  LiveRC_Config["MediawikiUsergroups"] = {};                           // Liste des groupes d'utilisateurs et des droits associés
  LiveRC_Config["MediawikiInterwikimap"] = {};                         // Liste des liens interwiki possibles
  LiveRC_Config["MediawikiWikibase"] = {};                             // Liste des paramètres de la wikibase
  LiveRC_Config["MediawikiTags"] = {};                                 // Liste des balises Abuse filter

  LiveRC_Config["ToolTags"] = {   // Balises pour marquer les édits faits avec des outils automatiques
    "LiveRC" : ""
  };

    // Informations sur l'utilisateur courant
  LiveRC_Config["UserInfos"] = {
    Rights      : [],                                                   // Liste des droits
    Groups      : [],                                                   // Liste des groupes
    isAdmin     : (mw.config.get('wgUserGroups').indexOf("sysop")!=-1), // Utilisateur administrateur;
    isBlocked   : false,                                                // Utilisateur bloqué
    EditCount   : 0,                                                    // Editcount
    RealName    : "",                                                   // "Vrai" nom (si renseigné)
    eMail       : "",                                                   // adresse mail (si renseignée)
    Preferences : {},                                                   // Préférences
    APIlimit    : 499                                                   // Limite de requête API
  };
    // Gestion des langues
  LiveRC_Config["SupportedLanguages"] = ["fr", "en", "it"];
  LiveRC_Config["AvailableLanguages"] = [];
  LiveRC_Config["LoadedLanguages"] = [];
  LiveRC_Config["LoadFunctions"] = [];

    //Historique des prévisualisations
  LiveRC_Config["History"] = {
    "Type"   : [],
    "Params" : [],
    "URL"    : [],
    "Text"   : [],
    "Index"  : -1,
    "IsOld"  : false
  };

    // Listes de suivi spéciales
  LiveRC_Config["SpecialLogList"] = [];         // Définition des listes de suivi spéciales
  LiveRC_Config["SpecialLogListConfig"] = {     // Configuration des listes spéciales
    "liveAbuseLog"       : { "Values" : {}, "DefaultState" : true  },  // Liste des déclenchements de filtre anti-abus
    "liveTag"            : { "Values" : {}, "DefaultState" : true  },  // Liste des modifications balisées
    "liveSpam"           : { "Values" : {}, "DefaultState" : false },  // Liste des utilisateurs ayant déclenché le filtre anti-spam
    "liveRevoc"          : { "Values" : {}, "DefaultState" : true  },  // Liste des utilisateurs révoqués
    "liveNewUsers"       : { "Values" : {}, "DefaultState" : true  },  // Liste des utilisateurs inscrits durant la session
    "liveContact"        : { "Values" : {}, "DefaultState" : false },  // Liste des utilisateurs suivis
    "liveHidden"         : { "Values" : {}, "DefaultState" : false },  // Liste des utilisateurs masqués
    "liveSuivi"          : { "Values" : {}, "DefaultState" : false },  // Liste des pages suivies
    "liveHiddenPages"    : { "Values" : {}, "DefaultState" : false },  // Liste des pages masquées
    "liveNewPages"       : { "Values" : {}, "DefaultState" : true  },  // Liste des nouvelles pages
    "livePendingChanges" : { "Values" : {}, "DefaultState" : true  }   // Liste des pages en attente de validation
  };


   // Listes d'utilisateurs locaux par groupe
  LiveRC_Config["UserGroupList"] = {
    "sysop" : { list:[], show:false },
    "bot"   : { list:[], show:false }
  };

    // Autres listes
  LiveRC_Config["Blocks"] = [];                // Liste des utilisateurs récemment bloqués
  LiveRC_Config["UserCat"] = {};               // Liste des catégories d'utilisateurs
  LiveRC_Config["Blocked"] = [];               // Liste des utilisateurs bloqués durant la session
  LiveRC_Config["Notificationtimestamp"] = {}; // Liste des notificationtimestamp
  LiveRC_Config["ListLoaded"] = {};            // État de chargement des liste spéciales

    // IDs à rechercher pour le contenu d'une page
  LiveRC_Config["PageContentIds"] = [
    'bodyContent',
    'article',
    'mw_contentholder'
  ];

    // Menu de paramétrage
  LiveRC_Config["LiveRCcustomParams"] = {};
  LiveRC_Config["ParamStartComment"] = '//<sou'+'rce lang="javascript">//<pr'+'e>//<no'+'wiki>\n\n';
  LiveRC_Config["ParamEndComment"] = '//END PARAMS\n//</no'+'wiki></pr'+'e></sour'+'ce>\n';
  LiveRC_Config["MediawikiConfigComment1"] = "// AUTOMATIC SAVE BEGIN";  // Config locale : commentaire début
  LiveRC_Config["MediawikiConfigComment2"] = "// AUTOMATIC SAVE END";    // Config locale : commentaire fin
  LiveRC_Config["CustomCatTemplate"] = 'Catégorisation JS';
  LiveRC_Config["AlwaysShownTabs"] = ["lstParamMenuTabs"];

    // Z-index Checklists
  LiveRC_Config["CheckListZIndex"] = 6000;

  // Limitations
  LiveRC_Config["RevertLimit"] = 10;
  LiveRC_Config["LimitationsRight"] = {
    "Default" : "autopatrol",
    "Revert"  : "autopatrol",
    "Blank"   : "autopatrol",
    "Tag"     : "autopatrol",
    "Message" : "autopatrol",
    "Thank"   : "autopatrol",
    "Report"  : "autopatrol"
  };
  // Utilisateurs qui ne sont pas concernés par la limitation (reservé aux développeurs)
  LiveRC_Config["LimitationsWhitelist"] = ["Dr Brains"];
  // Utilisateurs qui sont interdits d'outils automatiques
  LiveRC_Config["LimitationsBlacklist"] = [];

// Timestamps d'initialisation des RC, Log et Filtres
  LiveRC_Config["LastRCid"] = 0;
  LiveRC_Config["LastLOGid"] = 0;
  LiveRC_Config["LastFILTERid"] = 0;
  LiveRC_Config["LastRCtimestamp"] = 1;
  LiveRC_Config["LastLOGtimestamp"] = 1;
  LiveRC_Config["LastFILTERtimestamp"] = 1;
  LiveRC_Config["LastCUtimestamp"] = 1;

// Autres initialisations
  LiveRC_Config["ClockTime"] = {};             // Horloge de LiveRC ("H","M","S")
  LiveRC_Config["Timeout"] = {};               // Liste des timeout
  LiveRC_Config["LoadingTime"] = 0;            // Temps de chargement, en secondes
  LiveRC_Config["RequestError"] = 0;           // Nombre de requêtes RC consécutives échoués
  LiveRC_Config["PendingDebug"] = [];          // Ligne de débogage en attente
  LiveRC_Config["AlertCount"] = -1;            // Index des alertes
  LiveRC_Config["NextFreeID"] = 0;             // Index des ID automatiques
  LiveRC_Config["NextPreviewIndex"] = 0;       // Index des prévisualisations

  // Préchargement de la prévisualisation
  LiveRC_Config["RCEvents"] = {};
  LiveRC_Config["AllLinesSeen"] = true;

    // Suggestions de pages
  LiveRC_Config["SuggestParams"] = {};
  LiveRC_Config["SuggestParams"]["ZIndex"] = 5;                // Propriété "z-index" de départ
  LiveRC_Config["SuggestParams"]["Input"] = [];                // Matrice des <input> (champ de saisie)
  LiveRC_Config["SuggestParams"]["Suggest"] = [];              // Matrice des <select> (liste de suggestions)
  LiveRC_Config["SuggestParams"]["ExistInput"] = [];           // Matrice des <input> (page existe ou pas)
  LiveRC_Config["SuggestParams"]["ExistImg"] = [];             // Matrice des <img> (page existe ou pas)
  LiveRC_Config["SuggestParams"]["IsRunning"] = [];            // Matrice de l'état de la requête de suggestions
  LiveRC_Config["SuggestParams"]["Index"] = 1;                 // Index de départ (id)
      // Valeurs configurables
  LiveRC_Config["SuggestParams"]["NSFilter"] = [];             // Matrice de l'option de filtrage par espace de noms
  LiveRC_Config["SuggestParams"]["StripNS"] = [];              // Matrice de l'option d'affichage de l'espace de noms
  LiveRC_Config["SuggestParams"]["SuggestLimit"] = [];         // Matrice de la limite des suggestions
  LiveRC_Config["SuggestParams"]["SuggestSelectLimit"] = [];   // Matrice de la taille de la liste de suggestions
  LiveRC_Config["SuggestParams"]["ListDown"] = [];             // Matrice de l'affichage de la liste de suggestions
  LiveRC_Config["SuggestParams"]["AddExist"] = [];             // Matrice de l'affichage de l'icône
  LiveRC_Config["SuggestParams"]["Prefix"] = [];               // Matrice des préfixes de filtrage
  LiveRC_Config["SuggestParams"]["Suffix"] = [];               // Matrice des suffixes de filtrage
  LiveRC_Config["SuggestParams"]["RedirectFilter"] = [];       // Matrice des filtrages de redirection
      // Valeurs par défaut
  LiveRC_Config["SuggestParams"]["NSFilter"][0] = false;
  LiveRC_Config["SuggestParams"]["StripNS"][0] = false;
  LiveRC_Config["SuggestParams"]["SuggestLimit"][0] = 10;
  LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][0] = 5;
  LiveRC_Config["SuggestParams"]["ListDown"][0] = false;
  LiveRC_Config["SuggestParams"]["AddExist"][0] = false;
  LiveRC_Config["SuggestParams"]["Prefix"][0] = false;
  LiveRC_Config["SuggestParams"]["Suffix"][0] = false;
  LiveRC_Config["SuggestParams"]["RedirectFilter"][0] = "all";

    // List des extensions LiveRC installées par l'utilisateur
  LiveRC_Config["InstalledLiveRCExtensions"] = [];
  LiveRC_Config["UsedLiveRCExtensions"] = [];

    // List des mots magiques utilisés
  LiveRC_Config["NeededMagicWords"] = [];

    // Liste des messages systèmes utilisés
  LiveRC_Config["NeededMessages"] = [
    "abusefilter-log",
    "abusefilter-action-block",
    "abusefilter-action-blockautopromote",
    "abusefilter-action-degroup",
    "abusefilter-action-disallow",
    "abusefilter-action-rangeblock",
    "abusefilter-action-tag",
    "abusefilter-action-throttle",
    "abusefilter-action-warn",
    "abusefilter-log-noactions",
    "abusefilter-edit-warn-actions",
    "block-log-flags-angry-autoblock",
    "block-log-flags-anononly",
    "block-log-flags-hiddenname",
    "block-log-flags-noautoblock",
    "block-log-flags-nocreate",
    "block-log-flags-noemail",
    "block-log-flags-nousertalk",
    "hide",
    "show",
    "watch",
    "unwatch",
    "log",
    "mycontris",
    "protect-unchain-permissions",
    "red-link-title",
    "revertpage",
    "markedaspatrolled",
    "whatlinkshere-filters",
    "whatlinkshere-hideimages",
    "whatlinkshere-hidelinks",
    "whatlinkshere-hideredirs",
    "whatlinkshere-hidetrans",
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];

    // Types de journaux, avec extensions mediawiki et/ou droits nécessaires
  LiveRC_Config["LogNames"] = {
    'upload':             {page:'uploadlogpage'                                                                         },
    'newusers':           {page:'newuserlogpage'                                                                        },
    'patrol':             {page:'patrol-log-page'                                                                       },
    'move':               {page:'movelogpage'                                                                           },
    'merge':              {page:'mergelog'                                                                              },
    'protect':            {page:'protectlogpage'                                                                        },
    'delete':             {page:'dellogpage'                                                                            },
    'block':              {page:'blocklogpage'                                                                          },
    'rights':             {page:'rightslog'                                                                             },
    'import':             {page:'importlogpage'                                                                         },
    'managetags':         {page:'log-name-managetags'                                                                   },
    'tag':                {page:'log-name-tag'                                                                          },
    'gblblock':           {page:'globalblocking-logpage',           extension:'GlobalBlocking'                          },
    'globalauth':         {page:'centralauth-log-name',             extension:'Central Auth'                            },
    'gblrename':          {page:'log-name-gblrename',               extension:'Central Auth'                            },
    'gblrights':          {page:'centralauth-rightslog-name',       extension:'Central Auth'                            },
    'renameuser':         {page:'log-name-renameuser',              extension:'Renameuser'                              },
    'abusefilter':        {page:'abusefilter-log-name',             extension:'Abuse Filter'                            },
    'abuselog':           {page:'abusefilter-log',                  extension:'Abuse Filter'                            },
    'thanks':             {page:'log-name-thanks',                  extension:'Thanks'                                  },
    'massmessage':        {page:'log-name-massmessage',             extension:'MassMessage'                             },
    'suppress':           {page:'suppressionlog',                   extension:'Oversight',        right:'suppressionlog'},
    'checkuser':          {page:'checkuserlog',                     extension:'CheckUser',        right:'checkuser-log' },
    'pagetriage-curation':{page:'log-name-pagetriage-curation',     extension:'PageTriage'                              },
    'pagetriage-deletion':{page:'log-name-pagetriage-deletion',     extension:'PageTriage'                              },
    'review':             {page:'review-logpage',                   extension:'Flagged Revisions'                       },
    'stable':             {page:'stable-logpage',                   extension:'Flagged Revisions'                       },
    'online':             {page:'log-name-online',                  extension:'Education Program'                       },
    'campus':             {page:'log-name-campus',                  extension:'Education Program'                       },
    'course':             {page:'log-name-course',                  extension:'Education Program'                       },
    'institution':        {page:'log-name-institution',             extension:'Education Program'                       },
    'instructor':         {page:'log-name-instructor',              extension:'Education Program'                       },
    'student':            {page:'log-name-student',                 extension:'Education Program'                       },
    'student':            {page:'log-name-student',                 extension:'Education Program'                       },
    'translatorsandbox':  {page:'log-name-translatorsandbox',       extension:'Translate'                               },
    'translationreview':  {page:'log-name-translationreview',       extension:'Translate'                               },
    'pagetranslation':    {page:'log-name-pagetranslation',         extension:'Translate'                               },
    'notifytranslators':  {page:'log-name-notifytranslators',       extension:'TranslationNotifications'                },
    'liquidthreads':      {page:'lqt-log-name',                     extension:'Liquid Threads'                          },
    'mwoauthconsumer':    {page:'mwoauthconsumer-consumer-logpage', extension:'OAuth'                                   },
    'moodbar':            {page:'moodbar-log-name',                 extension:'MoodBar'                                 },
    'interwiki':          {page:'log-name-interwiki',               extension:'Interwiki'                               }
  };

    // Catégories de suivi ([[Special:TrackingCategories]])
  LiveRC_Config["TrackingCategories"] = [
    "expensive-parserfunction-category",
    "post-expand-template-argument-category",
    "post-expand-template-inclusion-category",
    "hidden-category-category",
    "broken-file-category",
    "node-count-exceeded-category",
    "expansion-depth-exceeded-category",
    "score-error-category",
    "massmessage-list-category",
    "commonsmetadata-trackingcategory-no-license",
    "commonsmetadata-trackingcategory-no-description",
    "commonsmetadata-trackingcategory-no-author",
    "commonsmetadata-trackingcategory-no-source",
    "geodata-broken-tags-category",
    "geodata-unknown-globe-category",
    "geodata-unknown-region-category",
    "geodata-unknown-type-category",
    "scribunto-common-error-category",
    "scribunto-module-with-errors-category"
  ];


    // Hooks
  LiveRC_Config["Hooks"] = {
  /* Lancement */
    "BeforeInitActivationProcess"   : [],
    "AfterInitActivationProcess"    : [],
    "AfterGotUserInfos"             : [],
    "AfterGotSiteInfos"             : [],
    "AfterTranslationsLoaded"       : [],
    "AfterSpecialLogList"           : [],
    "AfterOptions"                  : [],
  /* Requête RC */
    "BeforeRC"                      : [],
    "AfterRC"                       : [],
    "AfterRCNotification"           : [],
    "AfterSpecialLogListUpdated"    : [],
    "AfterAllSpecialLogListUpdated" : [],
  /* Prévisualisation */
    "AfterPreviewDiff"              : [],
    "AfterPreviewArticle"           : [],
    "AfterPreviewHistory"           : [],
    "AfterPreviewContribs"          : [],
    "AfterPreviewDeletedContribs"   : [],
    "AfterPreviewLog"               : [],
    "AfterPreviewFilter"            : [],
    "AfterPreviewEdit"              : [],
    "AfterPreviewMove"              : [],
    "AfterPreviewProtect"           : [],
    "AfterPreviewDelete"            : [],
    "AfterPreviewBlock"             : [],
    "AfterPreviewRevisiondelete"    : [],
    "AfterPreviewWhatlinkshere"     : [],
    "AfterPreviewStabilization"     : [],
    "AfterPreviewChangetag"         : [],
    "AfterPreviewInterwiki"         : [],
    "AfterMiniDiffPrewiew"          : [],
  /* Menu de configuration */
    "AfterFillParamPanel"           : [],
    "AfterCreateParamPanel"         : [],
    "BeforeParamPanelSaved"         : [],
  /* Autres */
    "AfterDisplayDebug"             : [],
    "AfterDisplayTchat"             : [],
    "AfterDisplayNewWindowTchat"    : []
  };

  // Config extensions mediawiki. TODO : trouver un moyen pour remplir ces variables automatiquement (via l'API ?)
    /* === Flagged Revisions === */
     // Liste des namespaces où la validation est active
  LiveRC_Config["FlagRevNamespaces"] = [0, 6, 10, 828];
     // Stabilisation intégrée à l'outil de protection
  LiveRC_Config["FlagRevProtection"] = false;
    /* === Flow === */
     // Liste des pages où flow est actif
  LiveRC_Config["FlowOccupyPages"] = ["Discussion Wikipédia:Flow", "Wikipédia:Forum des nouveaux/Flow"];
     // Liste des namespaces où flow est actif
  LiveRC_Config["FlowOccupyNamespaces"] = [2600];
     // Actions permises sur les pages où flow est actif
  LiveRC_Config["FlowCoreActionWhitelist"] = ['info', 'history', 'protect', 'unprotect', 'unwatch', 'watch'];



    // Variables obsolètes, conservées pour compatibilité avec anciennes personnalisations
  var lang_log = [];
  var lrcManageParamsDesc = [];
  var lrcHotCatsVariables = [];
  var lrcHotCatsText = [];
  var lrcHooks = [];
  var lrcIcon = [];
  var lrcManageParams_Desc = [];
  var lrcParams_Custom = [];
  var lrcOptionMenuValues_Custom = [];
  var lstBlank_Custom = [];
  var lrcRevertMessages_Custom = [];
  var lstAverto_Custom = [];
  var lstBando_Custom = [];
  var lrcIcons_Custom = [];
  var lrcExtensions_Custom = [];
  var UnTranslatedTexts_Custom = [];
  var lrcTexts_Custom = [];
  var lrcParamDesc_Custom = [];

  // fonction spéciale pour supprimer/modifier un paramètre chargé dans le LiveRCparam.js d'un utilisateur

window.LiveRC_getSpecialCustom = function(){

    for(var tag in LiveRC_Config["MediawikiTags"]){
        if(typeof(LiveRC_Config["MediawikiTags"][tag]) === "boolean") delete LiveRC_Config["MediawikiTags"][tag];
    }

    for(var a=0,l=lrcIcons.length;a<l;a++){
      if(lrcIcons[a].type == "sup_img") lrcIcons[a].type = 1;
      else if(lrcIcons[a].type == "sub_img") lrcIcons[a].type = 2;
      else lrcIcons[a].type = 0;
      if(!lrcIcons[a].height) lrcIcons[a].height = lrcIcons[a].width;
    }
    for(var a=0,l=Custom_lrcIcons.length;a<l;a++){
      if(Custom_lrcIcons[a].type == "sup_img") Custom_lrcIcons[a].type = 1;
      else if(Custom_lrcIcons[a].type == "sub_img") Custom_lrcIcons[a].type = 2;
      else Custom_lrcIcons[a].type = 0;
      if(!Custom_lrcIcons[a].height) lrcIcons[a].height = Custom_lrcIcons[a].width;
    }
    for(var a=0,l=Custom_commenttests.length;a<l;a++){
      if(!Custom_commenttests[a].hide) Custom_commenttests[a].hide = false;
      if(Realtypeof(Custom_commenttests[a].regex)=="string") Custom_commenttests[a].regex = new RegExp(Custom_commenttests[a].regex);
    }
    for(var a=0,l=commenttests.length;a<l;a++){
      if(Realtypeof(commenttests[a].regex)=="string") commenttests[a].regex = new RegExp(commenttests[a].regex);
    }
    for(var a=0,l=Custom_categoriestests.length;a<l;a++){
      if(Realtypeof(Custom_categoriestests[a].regex)=="string") Custom_categoriestests[a].regex = new RegExp(Custom_categoriestests[a].regex);
    }
    for(var a=0,l=categoriestests.length;a<l;a++){
      if(Realtypeof(categoriestests[a].regex)=="string") categoriestests[a].regex = new RegExp(categoriestests[a].regex);
    }
    if(typeof(lrcUserWarningsMessages)!="undefined"){
      for(var a=0,l=lrcUserWarningsMessages.length;a<l;a++){
        if(Realtypeof(lrcUserWarningsMessages[a].regex)=="string") lrcUserWarningsMessages[a].regex = new RegExp(lrcUserWarningsMessages[a].regex);
      }
    }
    if(typeof(Custom_lrcUserWarningsMessages)!="undefined"){
      for(var a=0,l=Custom_lrcUserWarningsMessages.length;a<l;a++){
        if(Realtypeof(Custom_lrcUserWarningsMessages[a].regex)=="string") Custom_lrcUserWarningsMessages[a].regex = new RegExp(Custom_lrcUserWarningsMessages[a].regex);
      }
    }
    for(var a=0,l=Custom_lstBando.length;a<l;a++){
      if(typeof(Custom_lstBando[a].withDate)==="boolean" && Custom_lstBando[a].withDate) Custom_lstBando[a].withDate = "$month $year";
      else if(!Custom_lstBando[a].withDate) Custom_lstBando[a].withDate = "";
    }
    for(var a=0,l=Custom_lstAverto.length;a<l;a++){
      if(typeof(Custom_lstAverto[a].addSectionTitle)==="undefined") Custom_lstAverto[a].addSectionTitle = false;
    }
    if(typeof(Custom_lrcParams["LoadSysopBotList"])!="undefined") Custom_lrcParams["LoadUsersInGroupsList"] = Custom_lrcParams["LoadSysopBotList"];

    for(var a=0,l=Custom_lrcExtensions.length;a<l;a++){
      delete Custom_lrcExtensions[a]["Installed"];
      if(!Custom_lrcExtensions[a]["neededright"]) Custom_lrcExtensions[a]["neededright"] = "";
    }
    for(var a=0,l=lrcExtensions.length;a<l;a++){
      if(!lrcExtensions[a]["neededright"]) lrcExtensions[a]["neededright"] = "";
    }
    if(typeof(Custom_lrcEditToolBarSetup)==="object" && typeof(lrcEditToolBarSetup)==="object"){
      for(var a=0,l=Custom_lrcEditToolBarSetup.length;a<l;a++){
        var IconId = Custom_lrcEditToolBarSetup[a].iconid.split("ToolbarIcon_").join("");
        if(["enum", "list", "gallery", "table", "math"].indexOf(IconId)!==-1 && Custom_lrcEditToolBarSetup[a].before.indexOf("\n")==-1){
          for(var b=0,m=lrcEditToolBarSetup.length;b<m;b++){
            if(lrcEditToolBarSetup[b].iconid.split("ToolbarIcon_").join("") != IconId) continue;
            Custom_lrcEditToolBarSetup[a] = lrcEditToolBarSetup[b];
          }
        }
      }
    }
    var ObsoleteCustomParams = [
      "AddExtensionCustom",
      "LoadSysopBotList",
      "ShowAllRevoc",
      "ShowAllBlank",
      "HideWPCleaner",
      "HideAWB",
      "RvMinorEdit",
      "AddStyleCustom",
      "RCType",
      "RCns",
      "ShowUserInfos"
    ];
    var ParamToOption = [
      "ShowAllSelf",
      "ShowAllContact",
      "ShowAllWatchlist",
      "HideOwnSubpage"
    ];
    var OptionToParam = [
      "InterwikiList"
    ];
    for(var param in Custom_lrcParams){
      if(ObsoleteCustomParams.indexOf(param)!=-1) delete Custom_lrcParams[param];
      if(ParamToOption.indexOf(param)!=-1){
        Custom_lrcOptionMenuValues[("User_"+param)] = Custom_lrcParams[param];
        delete Custom_lrcParams[param];
      }
    }
    for(var option in Custom_lrcOptionMenuValues){
      if(ObsoleteCustomParams.indexOf(option)!=-1) delete Custom_lrcOptionMenuValues[option];
      if(OptionToParam.indexOf(option)!=-1){
        Custom_lrcParams[option] = Custom_lrcOptionMenuValues[option];
        delete Custom_lrcOptionMenuValues[option];
      }
    }

  };

/* </source>

=== Fonctions utilitaires ===

==== Ajax ====

<source lang="javascript"> */

window.wpajax = {
  /* preloadReq.state
     0 : no request
     1 : pending request
     2 : pending request, the result will be used with preloadReq.bundle
         (preloadReq is locked until the request is complete)
     3 : completed request
  */
  preloadReq: {url: null, xmlhttp: null, bundle: null, state: 0},
  preload: function(url) {
    if (!lrcMakeParam("PreloadLines")) return;
    var plr = wpajax.preloadReq;
    if (plr.state == 2) return 0;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState != 4
          || !((plr.state == 1 || plr.state == 2) && plr.url == url)) return;
      var oldState = plr.state;
      plr.xmlhttp = xmlhttp;
      plr.state = 3;
      if (oldState == 2)
        wpajax.httpComplete(xmlhttp, plr.bundle);
    };
    plr.state = 1;
    plr.url = url;
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
    return 1;
  },
  // mandatory: bundle.url
  // optional:  bundle.async
  // optional:  bundle.method
  // optional:  bundle.headers
  // optional:  bundle.data
  // optional:  bundle.onSuccess (xmlhttprequest, bundle)
  // optional:  bundle.onFailure (xmlhttprequest, bundle)
  // optional:  bundle.otherStuff OK too, passed to onSuccess and onFailure
  http: function(bundle) {
    lrcDisplayDebug("Ajax request sent : " + bundle.url + (bundle.data ? " ; data = "+bundle.data : ""), true);
    var plr = wpajax.preloadReq;
    if (!(bundle.method || bundle.headers || bundle.async == false || bundle.data)
        && (plr.state == 1 || plr.state == 3) && plr.url == bundle.url) {
      if (plr.state == 1) {
        plr.state = 2;
        plr.bundle = bundle;
      } else {
        wpajax.httpComplete(plr.xmlhttp, bundle);
      }
      return 2;
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4)
        wpajax.httpComplete(xmlhttp, bundle);
    };
    xmlhttp.open(bundle.method ? bundle.method : "GET", bundle.url, bundle.async == false ? false : true);
    if (bundle.headers) {
      for (var field in bundle.headers)
        try {
          xmlhttp.setRequestHeader(field, bundle.headers[field]);
        } catch(err) {
          //Argos42 : pour rendre LiveRC fonctionnel sur chrome
        }
    }
    xmlhttp.send(bundle.data ? bundle.data : null);
    return 1;
  },
  httpComplete: function(xmlhttp, bundle) {
    if (xmlhttp.status == 200 || xmlhttp.status == 302) {
      if (bundle.onSuccess)
        bundle.onSuccess(xmlhttp, bundle);
    } else if (bundle.onFailure) {
      bundle.onFailure(xmlhttp, bundle);
    }
    lrcDisplayDebug("Ajax request received : " + bundle.url + (bundle.data ? " ; data = "+bundle.data : "") + " (" + xmlhttp.status+")", true);
  }
};

/* </source>

==== Hook functions ====

<source lang="javascript"> */

// Ajout d'une fonction à un hook

window.LiveRC_AddHook = function(Type, func){
  if(typeof(LiveRC_Config["Hooks"][Type])==="undefined") LiveRC_Config["Hooks"][Type] = [];
  if(typeof(func)==="function") LiveRC_Config["Hooks"][Type].push(func);
};

// Exécution des fonctions

window.LiveRC_RunHooks = function(Type, Params){
  var HookResult = true;
  if(typeof(LiveRC_Config["Hooks"][Type])!='undefined'){
    lrcDisplayDebug("Run hook ("+Type+")");
    for(var a=0,l=LiveRC_Config["Hooks"][Type].length;a<l;a++){
      var ThisHookResult = LiveRC_Config["Hooks"][Type][a](Params);
      if(ThisHookResult===false) HookResult = false;
    }
  }
  return HookResult;
};

/* </source>

==== Fonctions d'état ====

<source lang="javascript"> */

window.lrcHasState = function(state, thisState){
    if(!state) return false;
    return (state.indexOf(thisState)!=-1);
};

window.lrcAddState = function(state, thisState){
    if(!state) state = [];
    if(!lrcHasState(state, thisState)) state[(state.length)] = thisState;
    return state;
};

window.lrcRemoveState = function(state, thisState){
    if(!state) return [];
    var index = state.indexOf(thisState);
    if(index!=-1) state = state.splice(index, 1);
    return state;
};

/* </source>

==== Fonctions de suivi ====

<source lang="javascript"> */

// Requête AJAX Ajout/Retrait d'un utilisateur ou d'une page du suivi

window.watchAPICall = function(title, watch) {
  var url = lrcGetAPIURL({format:"xml",action:"query",meta:"tokens",type:"watch"});
  wpajax.http({url: url, onSuccess: watchAPICallStep2, title: title, watch: watch});
};

window.watchAPICallStep2 = function(xmlreq, data){
  var tokens = xmlreq.responseXML.getElementsByTagName("tokens")[0];
  var url = lrcGetAPIURL({format:"xml",action:'watch'});
  var postdata = "title=" + encodeURIComponent(data.title)
              + "&token=" + encodeURIComponent(tokens.getAttribute("watchtoken"))
              + (data.watch ? "" : "&unwatch=1");
  var headers = {"Content-Type": "application/x-www-form-urlencoded"};
  wpajax.http({url: url, method: "POST", headers: headers, data: postdata, onSuccess: watchAPICallStep3,datas:data});
};

window.watchAPICallStep3 = function(xmlreq, data){
  var olddatas = data.datas;
  if(!olddatas) return;
  var title = olddatas.title;
  if(!title) return;
  var messageprefix = "WATCHLIST";
  if(title.indexOf('LiveRCWatch:')!=-1){
    title = title.split('LiveRCWatch:').join('');
    messageprefix = "WATCHUSER";
    try{ updateFollowContact(); }catch(e){ };
  }else if(title.indexOf('LiveRCHidden:')!=-1){
    title = title.split('LiveRCHidden:').join('');
    messageprefix = "HIDEUSER";
    try{ updateFollowHiddenUsers(); }catch(e){ };
  }else if(title.indexOf('LiveRCHiddenPage:')!=-1){
    title = title.split('LiveRCHiddenPage:').join('');
    messageprefix = "HIDEPAGE";
    try{ updateFollowHiddenPages(); }catch(e){ };
  }else{
    try{ updateFollowWatchlist(); }catch(e){ };
  }
  var messagesuffix = (olddatas.watch ? "ON" : "OFF");
  LiveRC_alert(lrcMakeText(messageprefix+messagesuffix).split("$1").join("<b>"+title+"</b>"));
};

// Basculement du bouton de suivi/masquage d'utilisateur

window.lrcToggleWatchLink = function(WatchLink){
   try{
     var Li = WatchLink.parentNode.parentNode;
     var Spans = lrcGetElementsByClass("watchedLink", Li, "span");
     for(var a=0,l=Spans.length;a<l;a++){
        if(Spans[a].style.display == "none"){
          Spans[a].style.display = "";
        }else{
          Spans[a].style.display = "none";
        }
     }
  }catch(e){ }
};

window.addPageToSuivi = function(title){
  if(typeof(LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title])!="undefined") return
  LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title] = {};
  LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title].ts = "--:--";
  LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title].edits = [];
};


window.removePageFromSuivi = function(title){
  if(typeof(LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title])=="undefined") return
  delete LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title];
};
/* </source>

===== Hors LiveRC =====

<source lang="javascript"> */

// Ajout du bouton de suivi d'utilisateur

window.LiveWatchInitButtons = function(Req, data) {
  var Li = document.getElementById('n-liveRC');
  if(!Li) return;
  var user = data.user;
  var api = Req.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;
  LiveRC_getMediawikiDefaultLanguage();
  if(!LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"]) LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"] = {};
  if(!LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"]) LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"] = {};
  var ThisIsContact = false;
  var ThisIsHidden = false;
  var Pages = api.getElementsByTagName('page');
  if(Pages[0] && Pages[0].getAttributeNode('watched')){
    ThisIsContact = true;
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user] = {};
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].ts = "--:--";
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].edits = [];
  }
  if(Pages[1] && Pages[1].getAttributeNode('watched')){
    ThisIsHidden = true;
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user] = {};
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].ts = "--:--";
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].edits = [];
  }
  var UL = Li.getElementsByTagName('ul')[0];
  if(!UL){
    UL = document.createElement('ul');
    Li.appendChild(UL);
  }
  var ContactLi = document.createElement('li');
  ContactLi.appendChild(lrcCreateWatchUserLink(mw.config.get('wgTitle'), ThisIsContact, 1));
  ContactLi.id = 'n-liveRC-contact';
  var HiddenLi = document.createElement('li');
  HiddenLi.appendChild(lrcCreateHideUserLink(mw.config.get('wgTitle'), ThisIsHidden, 1));
  HiddenLi.id = 'n-liveRC-hidden';
  UL.appendChild(ContactLi);
  UL.appendChild(HiddenLi);

  var Links = Li.getElementsByTagName('a');
  for(var a=1,l=Links.length;a<l;a++){
    var Link = Links[a];
    Link.title = Link.title + ' (LiveRC)';
    Link.className = "";
  }
  lrcDisplayDebug('Add watch/hide links in tools panel : got user status (watched='+ThisIsContact+' ; hidden='+ThisIsHidden+')');
};

/* </source>

===== Dans LiveRC =====

====== Suivi de page ======

<source lang="javascript"> */

// Création du bouton de suivi de page

window.lrcCreateWatchPageLink = function(title, watched, type, trID){
  var UnwatchLinkText = (type ? lrcGetMediawikiMessage("unwatch", true) : lrcMakeText("USER_UNWATCH_SHORT") );
  var WatchLinkText = (type ? lrcGetMediawikiMessage("watch", true) : lrcMakeText("USER_WATCH_SHORT") );
  var WatchLinks = document.createElement('span');
  if(!lrcGetFlowStatusForAction(title, "watch")) return WatchLinks;
  var WatchLinks_UnWatch = document.createElement('span');
  WatchLinks_UnWatch.className = "watchedLink";
  if(!watched) WatchLinks_UnWatch.style.display = "none";
  var UnWatchLink = document.createElement('a');
  if(!type) UnWatchLink.className = "pageunwatchLink";
  UnWatchLink.href = lrcGetUglyPageURL(title,'&action=unwatch');
  UnWatchLink.onclick = function(){
    LiveRC_WatchArticle(title, false, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  UnWatchLink.title = lrcGetMediawikiMessage("unwatch", true) + ' « '+title+' »';
  UnWatchLink.innerHTML = UnwatchLinkText;
  WatchLinks_UnWatch.appendChild(UnWatchLink);
  WatchLinks.appendChild(WatchLinks_UnWatch);
  var WatchLinks_Watch = document.createElement('span');
  WatchLinks_Watch.className = "watchedLink";
  if(watched) WatchLinks_Watch.style.display = "none";
  var WatchLink = document.createElement('a');
  if(!type) WatchLink.className = "pagewatchLink";
  WatchLink.href = lrcGetUglyPageURL(title,'&action=watch');
  WatchLink.onclick = function(){
    LiveRC_WatchArticle(title, true, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  WatchLink.title = lrcGetMediawikiMessage("watch", true) + ' « '+title+' »';
  WatchLink.innerHTML = WatchLinkText;
  WatchLinks_Watch.appendChild(WatchLink);
  WatchLinks.appendChild(WatchLinks_Watch);
  return WatchLinks;
};

// Ajout du bouton de suivi de page

window.LiveRC_WatchArticle = function(page, watch, trid){
  var sothername = lrcGetOtherPagename(page);
  if(watch){
    addPageToSuivi(page);
    if(sothername) addPageToSuivi(sothername);
    watchAPICall(page, true);
  }else{
    removePageFromSuivi(page);
    if(sothername) removePageFromSuivi(sothername);
    watchAPICall(page, false);
  }
  if (trid == null) return;
  var tr = document.getElementById(trid);
  if (tr == null) return;
  if(watch) {
    lrcAddClass(tr, "RcWatched");
  }else{
    lrcRemoveClass(tr, "RcWatched");
  }
};

/* </source>

====== Suivi d'utilisateur ======

<source lang="javascript"> */

window.lrcCreateWatchUserLink = function(user, watched, type, trID){
  var UnwatchLinkText = (type ? lrcGetMediawikiMessage("unwatch", true) : lrcMakeText("USER_UNWATCH_SHORT") );
  var WatchLinkText = (type ? lrcGetMediawikiMessage("watch", true) : lrcMakeText("USER_WATCH_SHORT") );
  var ContactLinks = document.createElement('span');
  var ContactLinks_UnWatch = document.createElement('span');
  ContactLinks_UnWatch.className = "watchedLink";
  if(!watched) ContactLinks_UnWatch.style.display = "none";
  var UnWatchLink = document.createElement('a');
  if(!type) UnWatchLink.className = "userwatchLink";
  UnWatchLink.href = "javascript:;";
  UnWatchLink.onclick = function(){
    LiveRC_WatchUser(user, false, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  UnWatchLink.title = lrcGetMediawikiMessage("unwatch", true) + ' « '+user+' »';
  UnWatchLink.innerHTML = UnwatchLinkText;
  ContactLinks_UnWatch.appendChild(UnWatchLink);
  ContactLinks.appendChild(ContactLinks_UnWatch);
  var ContactLinks_Watch = document.createElement('span');
  ContactLinks_Watch.className = "watchedLink";
  if(watched) ContactLinks_Watch.style.display = "none";
  var WatchLink = document.createElement('a');
  if(!type) WatchLink.className = "userunwatchLink";
  WatchLink.href = "javascript:;";
  WatchLink.onclick = function(){
    LiveRC_WatchUser(user, true, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  WatchLink.title = lrcGetMediawikiMessage("watch", true) + ' « '+user+' »';
  WatchLink.innerHTML = WatchLinkText;
  ContactLinks_Watch.appendChild(WatchLink);
  ContactLinks.appendChild(ContactLinks_Watch);
  return ContactLinks;
};

window.LiveRC_WatchUser = function(uname, watch, trid) {
  var WLitem = LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][uname];
  var page = 'LiveRCWatch:' + uname;
  if (!WLitem && watch) {
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][uname] = {};
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][uname].ts = "--:--";
    LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][uname].edits = [];
    watchAPICall(page, true);
  } else if (WLitem && !watch) {
    watchAPICall(page, false);
    delete LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][uname];
  }else{
    return;
  }
  if (trid == null) return;
  var tr = document.getElementById(trid);
  if (tr == null) return;
  if(watch) {
    lrcAddClass(tr, "RcContact");
  }else{
    lrcRemoveClass(tr, "RcContact");
  }
};

/* </source>

====== Masquage d'utilisateur ======

<source lang="javascript"> */

window.lrcCreateHideUserLink = function(user, hidden, type, trID){
  var UnhideLinkText = (type ? lrcGetMediawikiMessage("show", true) : lrcMakeText("USER_UNHIDE_SHORT") );
  var HideLinkText = (type ? lrcGetMediawikiMessage("hide", true) : lrcMakeText("USER_HIDE_SHORT") );
  var HiddenLinks = document.createElement('span');
  var HiddenLinks_UnHide = document.createElement('span');
  HiddenLinks_UnHide.className = "watchedLink";
  if(!hidden) HiddenLinks_UnHide.style.display = "none";
  var UnHideLink = document.createElement('a');
  if(!type) UnHideLink.className = "userhideLink";
  UnHideLink.href = "javascript:;";
  UnHideLink.onclick = function(){
    LiveRC_HideUser(user, false, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  UnHideLink.title = lrcGetMediawikiMessage("show") + ' « '+user+' »';
  UnHideLink.innerHTML = UnhideLinkText;
  HiddenLinks_UnHide.appendChild(UnHideLink);
  HiddenLinks.appendChild(HiddenLinks_UnHide);

  var HiddenLinks_Hide = document.createElement('span');
  HiddenLinks_Hide.className = "watchedLink";
  if(hidden) HiddenLinks_Hide.style.display = "none";
  var HideLink = document.createElement('a');
  if(!type) HideLink.className = "userhideLink";
  HideLink.href = "javascript:;";
  HideLink.onclick = function(){
    LiveRC_HideUser(user, true, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  HideLink.title = lrcGetMediawikiMessage("hide") + ' « '+user+' »';
  HideLink.innerHTML = HideLinkText;
  HiddenLinks_Hide.appendChild(HideLink);
  HiddenLinks.appendChild(HiddenLinks_Hide);
  return HiddenLinks;
};


window.LiveRC_HideUser = function(uname, hide, trid) {
  var WLitem = LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][uname];
  var page = 'LiveRCHidden:' + uname;
  if (!WLitem && hide) {
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][uname] = {};
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][uname].ts = "--:--";
    LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][uname].edits = [];
    watchAPICall(page, true);
  } else if (WLitem && !hide) {
    watchAPICall(page, false);
    delete LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][uname];
  }
  if(trid == null) return;
  var tr = document.getElementById(trid);
  if(tr == null) return;
  if(hide){
    supprLigne(tr.id);
  }
};

/* </source>

====== Masquage de page ======

<source lang="javascript"> */

window.lrcCreateHidePageLink = function(title, hidden, type, trID){
  var UnhideLinkText = (type ? lrcGetMediawikiMessage("show", true) : lrcMakeText("USER_UNHIDE_SHORT") );
  var HideLinkText = (type ? lrcGetMediawikiMessage("hide", true) : lrcMakeText("USER_HIDE_SHORT") );
  var HiddenLinks = document.createElement('span');
  var HiddenLinks_UnHide = document.createElement('span');
  HiddenLinks_UnHide.className = "watchedLink";
  if(!hidden) HiddenLinks_UnHide.style.display = "none";
  var UnHideLink = document.createElement('a');
  if(!type) UnHideLink.className = "pagehideLink";
  UnHideLink.href = "javascript:;";
  UnHideLink.onclick = function(){
    LiveRC_HidePage(title, false, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  UnHideLink.title = lrcGetMediawikiMessage("show") + ' « '+title+' »';
  UnHideLink.innerHTML = UnhideLinkText;
  HiddenLinks_UnHide.appendChild(UnHideLink);
  HiddenLinks.appendChild(HiddenLinks_UnHide);

  var HiddenLinks_Hide = document.createElement('span');
  HiddenLinks_Hide.className = "watchedLink";
  if(hidden) HiddenLinks_Hide.style.display = "none";
  var HideLink = document.createElement('a');
  if(!type) HideLink.className = "pagehideLink";
  HideLink.href = "javascript:;";
  HideLink.onclick = function(){
    LiveRC_HidePage(title, true, trID);
    lrcToggleWatchLink(this);
    return false;
  };
  HideLink.title = lrcGetMediawikiMessage("hide") + ' « '+title+' »';
  HideLink.innerHTML = HideLinkText;
  HiddenLinks_Hide.appendChild(HideLink);
  HiddenLinks.appendChild(HiddenLinks_Hide);
  return HiddenLinks;
};


window.LiveRC_HidePage = function(title, hide, trid) {
  var WLitem = LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title];
  var page = 'LiveRCHiddenPage:' + title;
  if (!WLitem && hide) {
    LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title] = {};
    LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title].ts = "--:--";
    LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title].edits = [];
    watchAPICall(page, true);
  } else if (WLitem && !hide) {
    watchAPICall(page, false);
    delete LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title];
  }
  if(trid == null) return;
  var tr = document.getElementById(trid);
  if(tr == null) return;
  if(hide){
    supprLigne(tr.id);
  }
};


/* </source>

===== Remise à zéro des <code>notificationtimestamp</code> =====

<source lang="javascript"> */

window.RAZnotificationtimestamps = function(){
  for(var title in LiveRC_Config["Notificationtimestamp"]){
    var timestamp = LiveRC_Config["Notificationtimestamp"][title];
    if(!timestamp) continue;
    var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'notificationtimestamp',titles:title});
    wpajax.http({ url: URL,
                onSuccess: RAZthisnotificationtimestamp,
                title: title,
                timestamp:timestamp
    });
  }
};

window.RAZthisnotificationtimestamp = function(Req, data){
  var title = data.title;
  var timestamp = data.timestamp;

  var Page = Req.responseXML.getElementsByTagName("page")[0];
  var notificationtimestamp = encodeURIComponent(Page.getAttribute("notificationtimestamp"));
  if(notificationtimestamp == timestamp) return;
  var EditParam = {};
  EditParam["titles"] = title;
  EditParam["timestamp"] = timestamp;
  EditParam["converttitles"] = "1";
  EditParam["token"] = Page.getAttribute("edittoken");
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL({action:'setnotificationtimestamp'}),
                  method: "POST", headers: headers,
                  onSuccess:RAZthisnotificationtimestampDone,
                  data: Params,
                  editparams:EditParam
  });
};

window.RAZthisnotificationtimestampDone = function(Req, data){
  var title = data.editparams["titles"];
  var ts = data.editparams["timestamp"];
  var translatedts = tsToDate(ts)+' '+tsToHhMm(ts);
  lrcDisplayDebug("notificationtimestamp reset for page "+title+" done ("+translatedts+")");
  delete LiveRC_Config["Notificationtimestamp"][title];
};

/* </source>

==== Horloges ====

<source lang="javascript"> */

window.lrcSetClocks = function(){
  var ClockSpanTitle = document.getElementById('ClockSpanTitle');
  if(ClockSpanTitle){
    ClockSpanTitle.className="RunningClock";
    var Link = ClockSpanTitle.parentNode;
    if(Link){
      Link.href= "javascript:lrcToggleClockState('ClockSpanTitle');";
      Link.title= lrcMakeText("CLOCKTITLE");
      lrcClockTimer("ClockSpanTitle");
    }
  }
};

window.lrcClockTimer = function(ID){
  var Now = new Date();
  var Heures = Now.getHours();
  var Minutes = Now.getMinutes();
  var Secondes = Now.getSeconds();
  LiveRC_Config["ClockTime"]["H"] = Heures;
  LiveRC_Config["ClockTime"]["M"] = Minutes;
  LiveRC_Config["ClockTime"]["S"] = Secondes;
  if(ID){
    var ClockSpan = document.getElementById(ID);
    if(ClockSpan){
      if(lrcHasClass(ClockSpan, "RunningClock")){
        ClockSpan.innerHTML =  (Heures < 10 ? '0' : '') + Heures + ':' + (Minutes < 10 ? '0' : '') + Minutes + ':' + (Secondes<10 ? '0' : '') + Secondes;
      }
    }
  }
  if(LiveRC_Config["Timeout"][("Clock_"+ID)]) clearTimeout(LiveRC_Config["Timeout"][("Clock_"+ID)]);
  LiveRC_Config["Timeout"][("Clock_"+ID)] = setTimeout("lrcClockTimer("+lrcEscapeStr(ID)+");", 1000);
};

window.lrcToggleClockState = function(ID){
  var ClockSpan = document.getElementById(ID);
  if(!ClockSpan) return;
  if(lrcHasClass(ClockSpan, "RunningClock")){
    lrcRemoveClass(ClockSpan, "RunningClock");
    lrcAddClass(ClockSpan, "FrozenClock");
  }else{
    lrcRemoveClass(ClockSpan, "FrozenClock");
    lrcAddClass(ClockSpan, "RunningClock");
  }
};

window.LiveRC_CreateTimer = function(){
  var TimerTD = document.getElementById("LiveRCTimer");
  if(!TimerTD) return;
  var Buttons = document.getElementById("LiveRCButtons");
  if(Buttons) TimerTD.style.width = Buttons.offsetWidth + "px";
  if(!lrcMakeParam("ShowTimer")) return;
  var divtimer = document.createElement('div');
  divtimer.id = "lrctimecount";
  divtimer.className = "lrctimecount";
  TimerTD.appendChild(divtimer);
  var tenhour = document.createElement('div');
  tenhour.className = "lrctimecountelement tenhours";
  var hour = document.createElement('div');
  hour.className = "lrctimecountelement hours";
  var tenminut = document.createElement('div');
  tenminut.className = "lrctimecountelement tenminuts";
  var minut = document.createElement('div');
  minut.className = "lrctimecountelement minuts";
  var tensecond = document.createElement('div');
  tensecond.className = "lrctimecountelement tenseconds";
  var second = document.createElement('div');
  second.className = "lrctimecountelement seconds";
  divtimer.appendChild(tenhour);
  divtimer.appendChild(hour);
  divtimer.appendChild(document.createTextNode(' '));
  divtimer.appendChild(tenminut);
  divtimer.appendChild(minut);
  divtimer.appendChild(document.createTextNode(' '));
  divtimer.appendChild(tensecond);
  divtimer.appendChild(second);
  var Now = new Date();
  var H = Now.getHours();
  var M = Now.getMinutes();
  var S = Now.getSeconds();
  var TH =  Math.floor(H/10);
  H = H - (TH * 10);
  var TM =  Math.floor(M/10);
  M = M - (TM * 10);
  var TS =  Math.floor(S/10);
  S = S - (TS * 10);
  LiveRC_Config["TimerInitialValues"] = {Global:Now.getTime(), TH:TH, H:H, TM:TM, M:M, TS:TS, S:S};
  lrcSetTimer();
};

window.lrcSetTimer = function(){
  var divtimer = document.getElementById("lrctimecount");
  if(!divtimer) return;
  var InitialValues = LiveRC_Config["TimerInitialValues"];
  var Now = new Date().getTime();
  var time = Now - InitialValues["Global"];
  var TH = Math.floor(time/36000000);
  time = time - (TH*36000000);
  var H = Math.floor(time/3600000);
  time = time - ( H*3600000);
  var TM = Math.floor(time/600000);
  time = time - (TM*600000);
  var M = Math.floor(time/60000);
  time = time - ( M*60000);
  var TS = Math.floor(time/10000);
  time = time - (TS*10000);
  var S = Math.floor(time/1000);
  var tenhour = $(divtimer).find("div.tenhours")[0];
  var hour = $(divtimer).find("div.hours")[0];
  var tenminut = $(divtimer).find("div.tenminuts")[0];
  var minut = $(divtimer).find("div.minuts")[0];
  var tensecond = $(divtimer).find("div.tenseconds")[0];
  var second = $(divtimer).find("div.seconds")[0];
  if(TH != InitialValues["TH"]){
    lrcSetTimerElement(tenhour, TH);
    LiveRC_Config["TimerInitialValues"]["TH"] = TH;
  }
  if(H != InitialValues["H"]){
    lrcSetTimerElement(hour, H);
    LiveRC_Config["TimerInitialValues"]["H"] = H;
  }
  if(TM != InitialValues["TM"]){
    lrcSetTimerElement(tenminut, TM);
    LiveRC_Config["TimerInitialValues"]["TM"] = TM;
  }
  if(M != InitialValues["M"]){
    lrcSetTimerElement(minut, M);
    LiveRC_Config["TimerInitialValues"]["M"] = M;
  }
  if(TS != InitialValues["TS"]){
    lrcSetTimerElement(tensecond, TS);
    LiveRC_Config["TimerInitialValues"]["TS"] = TS;
  }
  if(S != InitialValues["S"]){
    lrcSetTimerElement(second, S);
    LiveRC_Config["TimerInitialValues"]["S"] = S;
  }
  if(LiveRC_Config["Timeout"]["Timer"]) clearTimeout(LiveRC_Config["Timeout"]["Timer"]);
  LiveRC_Config["Timeout"]["Timer"] = setTimeout(function(){ lrcSetTimer(); }, 1000 );
};

window.lrcSetTimerElement = function(el, val){
  if(!el) return;
  var posX = (Math.round(10*(-12.5 * val))/10);
  var posY = 0;
  el.style.backgroundPosition = posX+"px "+posY+"px";
};

/* </source>

==== Zones de déplacement et redimensionnement ====

<source lang="javascript"> */

// Détermination du type de navigateur

window.LiveRC_NavIsIE = (function () {
    var agt = navigator.userAgent.toLowerCase();
    var is_ie = agt.indexOf("msie") !== -1 && agt.indexOf("opera") === -1;
    return function () {
        return is_ie;
    };
})();

// Détermination de la hauteur de l'écran

window.LiveRC_GetScreenHeight = function(){
     var ScreenHeight = 0;
     if( typeof( window.innerHeight ) == 'number' ) {
          ScreenHeight = parseInt(window.innerHeight);
     }else if( document.documentElement && document.documentElement.clientHeight ){
          ScreenHeight = parseInt(document.documentElement.clientHeight);
     }else if( document.body && document.body.clientHeight ){
          ScreenHeight = parseInt(document.body.clientHeight);
     }
     return ScreenHeight;
};

// Détermination de la largeur de l'écran

window.LiveRC_GetScreenWidth = function(){
     var ScreenWidth = 0;
     if( typeof( window.innerWidth ) == 'number' ) {
          ScreenWidth = parseInt(window.innerWidth);
     }else if( document.documentElement && document.documentElement.clientWidth ){
          ScreenWidth = parseInt(document.documentElement.clientWidth);
     }else if( document.body && document.body.clientWidth ){
          ScreenWidth = parseInt(document.body.clientWidth);
     }
     return ScreenWidth;
};

// Détermination du positionnement de la souris

window.LiveRC_GetMousePosition = function(event){
     if(LiveRC_NavIsIE()){
          var Mouse_X = parseInt( event.clientX + document.getElementsByTagName('body')[0].scrollLeft );
          var Mouse_Y = parseInt( event.clientY + document.getElementsByTagName('body')[0].scrollTop );
     }else{
          var Mouse_X = parseInt( event.clientX );
          var Mouse_Y = parseInt( event.clientY );
     }
     return {"X": Mouse_X, "Y": Mouse_Y};
};

// Mise en place d'une zone de déplacement

window.LiveRC_SetMoveZone = function(anchorNode, elementsToMove){
     if((!anchorNode)||(!elementsToMove)) return;
     anchorNode.onmousedown = function(event){
          if(!event) { event = window.event; }
          var PositionSouris = LiveRC_GetMousePosition(event);
          var PositionSouris_X = PositionSouris["X"];
          var PositionSouris_Y = PositionSouris["Y"];
          for(var a=0;a<elementsToMove.length;a++){
               elementsToMove[a].initialX = parseInt( PositionSouris_X - elementsToMove[a].offsetLeft);
               elementsToMove[a].initialY = parseInt( PositionSouris_Y - elementsToMove[a].offsetTop);
          }
          lrcAddClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          document.getElementsByTagName('body')[0].onmousemove = function(event) {
               if(!event) { event = window.event; }
               PositionSouris = LiveRC_GetMousePosition(event);
               PositionSouris_X = PositionSouris["X"];
               PositionSouris_Y = PositionSouris["Y"];
               for(var a=0;a<elementsToMove.length;a++){
                    var Element = elementsToMove[a];
                    if(!Element) continue;
                    var PositionGauche = parseInt( PositionSouris_X ) - Element.initialX;
                    var PositionHaut = parseInt(PositionSouris_Y ) - Element.initialY;
                    Element.style.left = PositionGauche + 'px';
                    Element.style.top = PositionHaut + 'px';
                    Element.style.right = '';
                    Element.style.bottom = '';
               }
          };
          document.getElementsByTagName('body')[0].onmouseup=function(event){
               document.getElementsByTagName('body')[0].onmousemove = null;
               document.getElementsByTagName('body')[0].onmouseup = null;
               lrcRemoveClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          };
     }
     anchorNode.style.cursor = "move";
};

// Mise en place d'une zone de redimensionnement vertical

window.LiveRC_SetVerticalResizeZone = function(anchorNode, ToResizeNodes, containerNode, invert){
     if((!anchorNode)||(!ToResizeNodes)) return;
     invert = (invert===true ? -1 : 1);
     anchorNode.onmousedown = function(event){
          if(!event) { event = window.event; }
          var positionSouris_Y = (LiveRC_GetMousePosition(event)["Y"] * invert);
          var MaxHeight = LiveRC_GetScreenHeight();
          for(var a=0;a<ToResizeNodes.length;a++){
               ToResizeNodes[a].initialHeight = parseInt( (MaxHeight-positionSouris_Y) - ToResizeNodes[a].offsetHeight );
          }
          lrcAddClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          document.getElementsByTagName('body')[0].onmousemove=function(event) {
               if(!event) { event = window.event; }
               var positionSouris_Y = (LiveRC_GetMousePosition(event)["Y"] * invert);
               var MaxHeight = LiveRC_GetScreenHeight();
               var HeightLimit = false;
               for(var a=0;a<ToResizeNodes.length;a++){
                    var NewHeight = parseInt((MaxHeight-positionSouris_Y) - ToResizeNodes[a].initialHeight);
                    if(NewHeight>MaxHeight) HeightLimit = true;
               }
               if(HeightLimit) return;
               for(var a=0;a<ToResizeNodes.length;a++){
                    var Element = ToResizeNodes[a];
                    if(!Element) continue;
                    var NewHeight = parseInt((MaxHeight-positionSouris_Y) - Element.initialHeight);
                    NewHeight = (NewHeight>0 ? NewHeight : 1);
                    if(Element.tagName && (Element.tagName.toLowerCase()=="iframe" || Element.tagName.toLowerCase()=="img")){
                         Element.height = NewHeight;
                    }else{
                         Element.style.height = NewHeight + 'px';
                    }
               }
               lrcInitTableHeight();

          };
          document.getElementsByTagName('body')[0].onmouseup = function(event) {
               document.getElementsByTagName('body')[0].onmousemove = null;
               document.getElementsByTagName('body')[0].onmouseup = null;
               lrcRemoveClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
          };
     };
     lrcaddCustomizableClasses(anchorNode, "LiveRC_MenuAnchor");
     lrcAddClass(containerNode, "LiveRC_MenuContainer");
     anchorNode.style.cursor = "n-resize";
};

// Mise en place d'une zone de redimensionnement total

window.LiveRC_SetTotalResizeZone = function(anchorNode, elementsToResize, Container){
  if((!anchorNode)||(!elementsToResize)) return;
  if(!LiveRC_Config["TotalResize"]) LiveRC_Config["TotalResize"] = [];
  var ID = Container.id;
  if(!ID) return;
  LiveRC_Config["TotalResize"][ID] = [];
  LiveRC_Config["TotalResize"][ID].initialWidthDiffs = [];
  LiveRC_Config["TotalResize"][ID].initialHeightDiffs  = [];
  for(var a=0;a<elementsToResize.length;a++){
    var element = elementsToResize[a];
    LiveRC_Config["TotalResize"][ID].initialWidthDiffs[a] = ( Container.offsetWidth - element.offsetWidth );
    LiveRC_Config["TotalResize"][ID].initialHeightDiffs[a] = ( Container.offsetHeight - element.offsetHeight );
  }
  anchorNode.onmousedown = function(event){
    if(!event) { event = window.event; }
    var PositionSouris = LiveRC_GetMousePosition(event);
    var PositionSouris_X = PositionSouris["X"];
    var PositionSouris_Y = PositionSouris["Y"];
    Container.initialWidth = ( PositionSouris_X - Container.offsetWidth ) ;
    Container.initialHeight = ( PositionSouris_Y - Container.offsetHeight ) ;
    Container.style.top = Container.offsetTop + 'px';
    Container.style.left = Container.offsetLeft + 'px';
    Container.style.right = '';
    Container.style.bottom = '';
    lrcAddClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
    document.getElementsByTagName('body')[0].onmousemove = function(event) {
      if(!event) { event = window.event; }
      var PositionSouris = LiveRC_GetMousePosition(event);
      var PositionSouris_X = PositionSouris["X"];
      var PositionSouris_Y = PositionSouris["Y"];
      var NewWidth = ( PositionSouris_X - Container.initialWidth );
      var NewHeight = ( PositionSouris_Y - Container.initialHeight );
      Container.style.width = parseInt( NewWidth ) + 'px';
      Container.style.height = parseInt( NewHeight ) + 'px';
      for(var a=0;a<elementsToResize.length;a++){
        var Element = elementsToResize[a];
        if(!Element) continue;
        var NewElementWidth = parseInt( NewWidth - LiveRC_Config["TotalResize"][(Container.id)].initialWidthDiffs[a] );
        var NewElementHeight = parseInt( NewHeight - LiveRC_Config["TotalResize"][(Container.id)].initialHeightDiffs[a] );
        NewElementWidth = (NewElementWidth > 0 ? NewElementWidth : 1);
        NewElementHeight = (NewElementHeight > 0 ? NewElementHeight : 1);
        if(Element.tagName && (Element.tagName.toLowerCase()=="iframe" || Element.tagName.toLowerCase()=="img")){
          Element.width  = NewElementWidth + 'px';
          Element.height = NewElementHeight + 'px';
        }else{
          Element.style.width  = NewElementWidth + 'px';
          Element.style.height = NewElementHeight + 'px';
        }
      }
    };
    document.getElementsByTagName('body')[0].onmouseup = function(event) {
      document.getElementsByTagName('body')[0].onmousemove = null;
      document.getElementsByTagName('body')[0].onmouseup = null;
      lrcRemoveClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
    };
  };
  anchorNode.style.cursor = "se-resize";
};

/* </source>

==== Suggestions ====

<source lang="javascript"> */

window.LiveRC_Suggest_UpDateLabel = function(InputNode, NewID){
     var OldId = InputNode.id;
     var TheNode = InputNode.parentNode;
     if(!OldId || !TheNode) return;
     var Labels = TheNode.getElementsByTagName('label');
     for(var a=0,l=Labels.length;a<l;a++){
          var For = Labels[a].getAttribute("for");
          if(For){
               if(For == OldId){
                    Labels[a].setAttribute("for", NewID);
                    return;
               }
          }
     }
};

window.LiveRC_Suggest_GetSuggestionIndex = function( Element ){
    return parseInt(Element.id.replace(/[^0-9]/g, ""));
};

window.LiveRC_Suggest_ucFirst = function(Text, Namespace) {
    if(LiveRC_Config["MediawikiNamespaces"][Namespace]["case"] === "first-letter"){
        Text = Text.substr(0,1).toUpperCase() + Text.substr(1,Text.length);
    }
    return Text;
};

window.LiveRC_Suggest_setVar = function(Args, id) {
    if(typeof(Args[id])!="undefined") return Args[id];
    return LiveRC_Config["SuggestParams"][id][0];
};

/* </source>

===== Suggestions de page =====

<source lang="javascript"> */

window.LiveRC_Suggest_AddPageSuggestion = function(Args){
     if(!Args) return;
     var InputNode = Args["InputNode"];
     if(!InputNode) return;
     var GlobalIndex = LiveRC_Config["SuggestParams"]["Index"]++;
     var NSFilter = LiveRC_Suggest_setVar(Args, "NSFilter");
     var StripNS = LiveRC_Suggest_setVar(Args, "StripNS");
     var SuggestLimit = LiveRC_Suggest_setVar(Args, "SuggestLimit");
     var SuggestListSize = LiveRC_Suggest_setVar(Args, "SuggestSelectLimit");
     var AddExist = LiveRC_Suggest_setVar(Args, "AddExist");
     var ListDown = LiveRC_Suggest_setVar(Args, "ListDown");
     var Prefix = LiveRC_Suggest_setVar(Args, "Prefix");
     var Suffix = LiveRC_Suggest_setVar(Args, "Suffix");
     var RedirectFilter = LiveRC_Suggest_setVar(Args, "RedirectFilter");
     LiveRC_Suggest_UpDateLabel(InputNode, "InputWithSuggestion_"+GlobalIndex);
     InputNode.id = "InputWithSuggestion_"+GlobalIndex;
     var ExistInputNode = document.createElement("input");
     ExistInputNode.type = "hidden";
     ExistInputNode.id = "ThisPageExist_"+GlobalIndex;
     ExistInputNode.value = "0";
     InputNode.parentNode.insertBefore(ExistInputNode, InputNode.nextSibling);
     if(AddExist===true){
          var ExistImgNode = document.createElement("span");
          ExistImgNode.id = "ThisPageExistIMG_"+GlobalIndex;
          ExistImgNode.className = "SuggestionExist";
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join("").split("  ").join(" ");
          InputNode.parentNode.insertBefore(ExistImgNode, InputNode.nextSibling);
     }
     var SelectNode = document.createElement('select');
     SelectNode.id = "SuggestionForInput_"+GlobalIndex;
     SelectNode.style.display = "none";
     SelectNode.className = "SuggestionList";
     InputNode.parentNode.insertBefore(SelectNode, InputNode.nextSibling);
     LiveRC_Config["SuggestParams"]["Input"][GlobalIndex] = InputNode;
     LiveRC_Config["SuggestParams"]["Suggest"][GlobalIndex] = SelectNode;
          LiveRC_Config["SuggestParams"]["ExistInput"][GlobalIndex] = ExistInputNode;
     if(AddExist===true){
          LiveRC_Config["SuggestParams"]["ExistImg"][GlobalIndex] = ExistImgNode;
     }
     LiveRC_Config["SuggestParams"]["NSFilter"][GlobalIndex] = NSFilter;
     if(!NSFilter) StripNS = false;
     if(Prefix){
          if(NSFilter){
               var ThisNamespaceName = lrcGetNamespaceName(NSFilter);
               var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
               if(Prefix.match(Match)!=null){
                    Prefix = Prefix.substring((ThisNamespaceName=="" ? "" : ThisNamespaceName+":").length, Prefix.length);
               }
               StripNS = true;
          }
     }
     LiveRC_Config["SuggestParams"]["NSFilter"][GlobalIndex] = NSFilter;
     LiveRC_Config["SuggestParams"]["StripNS"][GlobalIndex] = StripNS;
     LiveRC_Config["SuggestParams"]["Prefix"][GlobalIndex] = Prefix;
     LiveRC_Config["SuggestParams"]["Suffix"][GlobalIndex] = Suffix;
     LiveRC_Config["SuggestParams"]["SuggestLimit"][GlobalIndex] = SuggestLimit;
     LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][GlobalIndex] = SuggestListSize;
     LiveRC_Config["SuggestParams"]["ListDown"][GlobalIndex] = ListDown;
     LiveRC_Config["SuggestParams"]["AddExist"][GlobalIndex] = AddExist;
     LiveRC_Config["SuggestParams"]["RedirectFilter"][GlobalIndex] = RedirectFilter;
     LiveRC_Config["SuggestParams"]["IsRunning"][GlobalIndex] = false;
     InputNode.onkeyup = function(){
          var ThisIndex = LiveRC_Suggest_GetSuggestionIndex(this);
          LiveRC_Suggest_GetPageSuggestions(ThisIndex);
     };
     return GlobalIndex;
};

window.LiveRC_Suggest_GetPageSuggestions = function(Index){
     var IsRunning = LiveRC_Config["SuggestParams"]["IsRunning"][Index];
     if(IsRunning===true) return;
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var Suffix = LiveRC_Config["SuggestParams"]["Suffix"][Index];
     var RedirectFilter = LiveRC_Config["SuggestParams"]["RedirectFilter"][Index];
     var Page = Input.value;
     if(Page===""){
          Select.style.display = "none";
          return;
     }
     var ValueNamespace = (NamespaceFilter ? NamespaceFilter : getNamespaceInfoFromPage(Prefix+Page));
     var ValuePageName = getNamespaceInfoFromPage(Page, "PageName");
     if(StripNamespace && NamespaceFilter && !Prefix){
          var ThisNamespaceName = lrcGetNamespaceName(NamespaceFilter);
          var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
          if(Page.match(Match)!=null){ Page = ValuePageName; }
          var ThisCanonicalNamespaceName = lrcGetNamespaceName(NamespaceFilter, true);
          var CanonicalMatch = new RegExp("^"+ThisCanonicalNamespaceName+":", "ig");
          if(Page.match(CanonicalMatch)!=null){ Page = LiveRC_Suggest_ucFirst(ValuePageName, NamespaceFilter); }
          Input.value = LiveRC_Suggest_ucFirst(Page, NamespaceFilter);
     }else if(Prefix && NamespaceFilter){
          Match = new RegExp("^"+Prefix, "ig");
          if(Page.match(Match)!=null){
               Page = Page.substring(Prefix.length, Page.length);
          }
          Page = Prefix+Page;
     }else if(Prefix && !NamespaceFilter){
          ValueNamespace = getNamespaceInfoFromPage((Prefix+Page),"NamespaceNumber");
          Page = getNamespaceInfoFromPage((Prefix+Page), "PageName");
     }else if(!Prefix && !NamespaceFilter){
          ValueNamespace = getNamespaceInfoFromPage(Page,"NamespaceNumber");
          Page = getNamespaceInfoFromPage(Page, "PageName");
          Input.value = lrcGetNamespaceName(ValueNamespace)+(ValueNamespace ? ":" : "") + LiveRC_Suggest_ucFirst(Page, ValueNamespace);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = true;
     var APILimit = LiveRC_Config["UserInfos"].APIlimit;
     if(Limit>APILimit) Limit = APILimit;
     var URL =  lrcGetAPIURL({format:'xml',action:'query',list:'allpages',apnamespace:ValueNamespace,apprefix:Page,apfilterredir:RedirectFilter,aplimit:Limit});
     wpajax.http({url:URL,
                  onSuccess:LiveRC_Suggest_GetPageSuggestionsDone,
                  index: Index
     });
};

window.LiveRC_Suggest_GetPageSuggestionsDone = function(Req, data){
     var Index = data.index;
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var Suffix = LiveRC_Config["SuggestParams"]["Suffix"][Index];
     var RedirectFilter = LiveRC_Config["SuggestParams"]["RedirectFilter"][Index];
     var xml = Req.responseXML ;
     if ( xml == null ) return ;
     var titles = new Array () ;
     var pages = xml.getElementsByTagName("p") ;
     for(var i=0;i<pages.length;i++){
          var s = pages[i].getAttribute("title");
          if(Suffix){
               var Reg = new RegExp(Suffix+"$", "g");
               if(s.match(Reg)==null) continue;
          }
          if(StripNamespace){
               var ThisNamespaceName = lrcGetNamespaceName(NamespaceFilter);
               var Match = new RegExp("^"+ThisNamespaceName+":", "ig");
               if(s.match(Match)!=null){
                    s = getNamespaceInfoFromPage(s, "PageName");
               }
               var CanonicalThisNamespaceName = lrcGetNamespaceName(NamespaceFilter, true);
               var Cani=onicalMatch = new RegExp("^"+CanonicalThisNamespaceName+":", "ig");
               if(s.match(Cani=onicalMatch)!=null){
                    s = getNamespaceInfoFromPage(s, "PageName");
               }
          }
          if(Prefix){
               s = s.substring(s.indexOf(Prefix)+Prefix.length, s.length);
          }
          if(titles.indexOf(s)==-1) titles.push(s);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = false;
     LiveRC_Suggest_ShowPageSuggestions(titles, Index);
};

window.LiveRC_Suggest_ShowPageSuggestions = function(titles, Index){
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var ExistInputNode = LiveRC_Config["SuggestParams"]["ExistInput"][Index];
     var ExistImgNode = LiveRC_Config["SuggestParams"]["ExistImg"][Index];
     var ListDown = LiveRC_Config["SuggestParams"]["ListDown"][Index];
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var TheNamespace = "";
     if(NamespaceFilter!==false){
          TheNamespace = lrcGetNamespaceName(NamespaceFilter);
          TheNamespace = (TheNamespace ==="" ? "" : TheNamespace+":");
     }
     if(Prefix){
          TheNamespace += Prefix;
     }
     var CurrentValue = Input.value;
     if(ExistInputNode) ExistInputNode.value = "0";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
     if(titles.length==0){
          Select.style.display = "none" ;
          Input.title = "";
          return;
     }
     Select.style.display = "inline" ;
     if(ExistInputNode) ExistInputNode.value = "1";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
     if(titles[0]===Input.value){
          Select.style.display = "none" ;
          Input.title = "";
          return;
     }
     var TailleListe = LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][Index];
     if (titles.length < TailleListe ) TailleListe = titles.length;
     Select.size = TailleListe ;
     Select.style.align = "left" ;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     Select.style.position = "relative" ;
     Select.style.width = Input.offsetWidth + "px" ;
     Select.style.height = (TailleListe * 20) + "px" ;
     while(Select.firstChild) Select.removeChild(Select.firstChild);
     for ( var i = 0 ; i < titles.length ; i++ ) {
          var opt = document.createElement("option");
          var ot = document.createTextNode(titles[i]);
          opt.appendChild(ot) ;
          opt.value = titles[i];
          Select.appendChild(opt) ;
     }
     Select.onkeyup = LiveRC_Suggest_ReplacePageSuggestionsKeyPress;
     Select.onclick = LiveRC_Suggest_ReplacePageSuggestions;
     if(ListDown){
          Select.style.top = parseInt(Input.offsetHeight) + "px";
          Select.style.marginBottom = "-" + ((TailleListe * 20) + parseInt(Input.offsetHeight)) + "px" ;
     }else{
          Select.style.marginTop = "-" + (TailleListe * 20) + "px" ;
     }
     Select.style.marginLeft = "-" + Input.offsetWidth + "px" ;
     var suggestion = titles[0] ;
     if(suggestion.match(new RegExp("^"+CurrentValue))==null){
          LiveRC_Suggest_GetPageSuggestions(Index);
          return;
     }
     var StripNamespace = LiveRC_Config["SuggestParams"]["StripNS"][Index];
     var CurrentValueLength = CurrentValue.length;
     if(StripNamespace){
          var NamespaceName = getNamespaceInfoFromPage(CurrentValue,"NamespaceName");
          NamespaceName = ( NamespaceName==="" ? "" : NamespaceName+":");
          if(NamespaceName==TheNamespace){
               CurrentValueLength = getNamespaceInfoFromPage(CurrentValue,"PageName").length + TheNamespace.length;
          }
     }else if(NamespaceFilter!==false && !Prefix){
          var NamespaceName = getNamespaceInfoFromPage(CurrentValue,"NamespaceName");
          NamespaceName = ( NamespaceName==="" ? "" : NamespaceName+":");
          if(NamespaceName==TheNamespace){
               CurrentValueLength = getNamespaceInfoFromPage(CurrentValue,"PageName").length + TheNamespace.length;
          }else{
               CurrentValueLength = CurrentValueLength  + TheNamespace.length;
          }
     }
     //alert("CurrentValueLength : "+CurrentValueLength+"\nsuggestion.length : "+suggestion.length);
     Input.value = suggestion;
     Input.title = TheNamespace + suggestion;
     if (Input.createTextRange) {
          var ra = Input.createTextRange();
          ra.moveStart("character", CurrentValueLength);
          ra.moveEnd("character", suggestion.length);
          ra.select();
     } else if( Input.setSelectionRange ) {
          Input.setSelectionRange( CurrentValueLength, suggestion.length );
     } else {
          Input.selectionStart = CurrentValueLength;
          Input.selectionEnd = suggestion.length ;
     }
     if(ExistImgNode){
          CurrentValue = Input.value;
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TheNamespace+CurrentValue);
     }
};

window.LiveRC_Suggest_ReplacePageSuggestionsKeyPress = function(e){
     if (!e) e = window.event;
     if (e.keyCode != 13) return;
     LiveRC_Suggest_ReplacePageSuggestions();
};

window.LiveRC_Suggest_ReplacePageSuggestions = function(){
     var Index = LiveRC_Suggest_GetSuggestionIndex(this);
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     if(!Input|| !Select) return;
     var NamespaceFilter = LiveRC_Config["SuggestParams"]["NSFilter"][Index];
     var Prefix = LiveRC_Config["SuggestParams"]["Prefix"][Index];
     var TheNamespace = "";
     if(NamespaceFilter){
          TheNamespace = lrcGetNamespaceName(NamespaceFilter);
          TheNamespace = (TheNamespace ==="" ? "" : TheNamespace+":");
     }
     if(Prefix){
          TheNamespace += Prefix;
     }
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     var Options = Select.getElementsByTagName('option');
     for(var a=0;a<Options.length;a++){
          if(Options[a].selected){
            Input.value = Options[a].value;
            Input.title = TheNamespace+Options[a].value;
            Input.focus();
            LiveRC_Suggest_GetPageSuggestions(Index);
            return;
        }
    }
};

/* </source>

===== Suggestions d'utilisateur =====

<source lang="javascript"> */

window.LiveRC_Suggest_AddUserSuggestion = function(Args){
     if(!Args) return;
     var InputNode = Args["InputNode"];
     if(!InputNode) return;
     var GlobalIndex = LiveRC_Config["SuggestParams"]["Index"]++;
     var SuggestLimit = LiveRC_Suggest_setVar(Args, "SuggestLimit");
     var SuggestListSize = LiveRC_Suggest_setVar(Args, "SuggestSelectLimit");
     var AddExist = LiveRC_Suggest_setVar(Args, "AddExist");
     var ListDown = LiveRC_Suggest_setVar(Args, "ListDown");
     LiveRC_Suggest_UpDateLabel(InputNode, "InputWithSuggestion_"+GlobalIndex);
     InputNode.id = "InputWithSuggestion_"+GlobalIndex;
     var ExistInputNode = document.createElement("input");
     ExistInputNode.type = "hidden";
     ExistInputNode.id = "ThisPageExist_"+GlobalIndex;
     ExistInputNode.value = "0";
     InputNode.parentNode.insertBefore(ExistInputNode, InputNode.nextSibling);
     if(AddExist===true){
          var ExistImgNode = document.createElement("span");
          ExistImgNode.id = "ThisPageExistIMG_"+GlobalIndex;
          ExistImgNode.className = "SuggestionExist";
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join("").split("  ").join(" ");
          InputNode.parentNode.insertBefore(ExistImgNode, InputNode.nextSibling);
     }
     var SelectNode = document.createElement('select');
     SelectNode.id = "SuggestionForInput_"+GlobalIndex;
     SelectNode.style.display = "none";
     SelectNode.className = "SuggestionList";
     InputNode.parentNode.insertBefore(SelectNode, InputNode.nextSibling);
     LiveRC_Config["SuggestParams"]["Input"][GlobalIndex] = InputNode;
     LiveRC_Config["SuggestParams"]["Suggest"][GlobalIndex] = SelectNode;
          LiveRC_Config["SuggestParams"]["ExistInput"][GlobalIndex] = ExistInputNode;
     if(AddExist===true){
          LiveRC_Config["SuggestParams"]["ExistImg"][GlobalIndex] = ExistImgNode;
     }
     LiveRC_Config["SuggestParams"]["SuggestLimit"][GlobalIndex] = SuggestLimit;
     LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][GlobalIndex] = SuggestListSize;
     LiveRC_Config["SuggestParams"]["ListDown"][GlobalIndex] = ListDown;
     LiveRC_Config["SuggestParams"]["AddExist"][GlobalIndex] = AddExist;
     LiveRC_Config["SuggestParams"]["IsRunning"][GlobalIndex] = false;
     InputNode.onkeyup = function(){
          var ThisIndex = LiveRC_Suggest_GetSuggestionIndex(this);
          LiveRC_Suggest_GetUserSuggestions(ThisIndex);
     };
     return GlobalIndex;
};

window.LiveRC_Suggest_GetUserSuggestions = function(Index){
     var IsRunning = LiveRC_Config["SuggestParams"]["IsRunning"][Index];
     if(IsRunning===true) return;
     var Limit = LiveRC_Config["SuggestParams"]["SuggestLimit"][Index];
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var Page = Input.value;
     if(Page===""){
          Select.style.display = "none";
          return;
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = true;
     var APILimit = LiveRC_Config["UserInfos"].APIlimit;
     if(Limit>APILimit) Limit = APILimit;
     var URL = lrcGetAPIURL({format:'xml',action:'query',list:'allusers',auprefix:Page,aulimit:Limit});
     wpajax.http({url:URL,
                  onSuccess:LiveRC_Suggest_GetUserSuggestionsDone,
                  index: Index
     });
};

window.LiveRC_Suggest_GetUserSuggestionsDone = function(Req, data){
     var Index = data.index;
     var xml = Req.responseXML ;
     if ( xml == null ) return ;
     var titles = new Array () ;
     var pages = xml.getElementsByTagName("u") ;
     for(var i=0;i<pages.length;i++){
          var s = pages[i].getAttribute("name");
        if(titles.indexOf(s)==-1) titles.push(s);
     }
     LiveRC_Config["SuggestParams"]["IsRunning"][Index] = false;
     LiveRC_Suggest_ShowUserSuggestions(titles, Index);
};

window.LiveRC_Suggest_ShowUserSuggestions = function(titles, Index){
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     var ExistInputNode = LiveRC_Config["SuggestParams"]["ExistInput"][Index];
     var ExistImgNode = LiveRC_Config["SuggestParams"]["ExistImg"][Index];
     var ListDown = LiveRC_Config["SuggestParams"]["ListDown"][Index];
     var TailleListe = LiveRC_Config["SuggestParams"]["SuggestSelectLimit"][Index];

     var CurrentValue = Input.value;
     if(ExistInputNode) ExistInputNode.value = "0";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestNoExistIcon").split("$1").join(CurrentValue);
     }
     if(titles.length==0){
          Select.style.display = "none" ;
          Input.title = "";
          return;
     }
     Select.style.display = "inline" ;
     if(ExistInputNode) ExistInputNode.value = "1";
     if(ExistImgNode){
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(TCurrentValue);
     }
     if(titles[0]===Input.value){
          Select.style.display = "none" ;
          Input.title = "";
          return;
     }
     if (titles.length < TailleListe ) TailleListe = titles.length;
     Select.size = TailleListe ;
     Select.style.align = "left" ;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     Select.style.position = "relative" ;
     Select.style.width = Input.offsetWidth + "px" ;
     Select.style.height = (TailleListe * 20) + "px" ;
     while(Select.firstChild) Select.removeChild(Select.firstChild);
     for ( var i = 0 ; i < titles.length ; i++ ) {
          var opt = document.createElement("option");
          var ot = document.createTextNode(titles[i]);
          opt.appendChild(ot) ;
          opt.value = titles[i];
          Select.appendChild(opt) ;
     }
     Select.onkeyup = LiveRC_Suggest_ReplaceUserSuggestionsKeyPress;
     Select.onclick = LiveRC_Suggest_ReplaceUserSuggestions;
     if(ListDown){
          Select.style.top = parseInt(Input.offsetHeight) + "px";
          Select.style.marginBottom = "-" + ((TailleListe * 20) + parseInt(Input.offsetHeight)) + "px" ;
     }else{
          Select.style.marginTop = "-" + (TailleListe * 20) + "px" ;
     }
     Select.style.marginLeft = "-" + Input.offsetWidth + "px" ;
     var suggestion = titles[0] ;
     if(suggestion.match(new RegExp("^"+CurrentValue))==null){
          LiveRC_Suggest_GetUserSuggestions(Index);
          return;
     }
     var CurrentValueLength = CurrentValue.length;
     Input.value = suggestion;
     Input.title = lrcGetNamespaceName(2, true)+":"+suggestion;
     if (Input.createTextRange) {
          var ra = Input.createTextRange();
          ra.moveStart("character", CurrentValueLength);
          ra.moveEnd("character", suggestion.length);
          ra.select();
     } else if( Input.setSelectionRange ) {
          Input.setSelectionRange( CurrentValueLength, suggestion.length );
     } else {
          Input.selectionStart = CurrentValueLength;
          Input.selectionEnd = suggestion.length ;
     }
     if(ExistImgNode){
          CurrentValue = Input.value;
          ExistImgNode.innerHTML = lrcMakeIcon("SuggestExistIcon").split("$1").join(suggestion);
     }
};

window.LiveRC_Suggest_ReplaceUserSuggestionsKeyPress = function(e){
     if (!e) e = window.event;
     if (e.keyCode != 13) return;
     LiveRC_Suggest_ReplaceUserSuggestions();
};

window.LiveRC_Suggest_ReplaceUserSuggestions = function(){
     var Index = LiveRC_Suggest_GetSuggestionIndex(this);
     var Select = LiveRC_Config["SuggestParams"]["Suggest"][Index];
     var Input = LiveRC_Config["SuggestParams"]["Input"][Index];
     if(!Input|| !Select) return;
     Select.style.zIndex = LiveRC_Config["SuggestParams"]["ZIndex"]++ ;
     var Options = Select.getElementsByTagName('option');
     for(var a=0;a<Options.length;a++){
          if(Options[a].selected){
            Input.value = Options[a].value;
            Input.title = lrcGetNamespaceName(2, true)+":"+Options[a].value;
            Input.focus();
            LiveRC_Suggest_GetUserSuggestions(Index);
            return;
        }
    }
};

/* </source>

==== Boîtes pop-up ====

<source lang="javascript"> */

window.LiveRC_CreateNewAlert = function(){
  var Alert = document.getElementById("LiveRCAlert");
  if(!Alert){
    var Target = document.getElementById("LiveRCContainer");
    if(!Target) Target = document.body;
    if(!Target) return;
    Alert = document.createElement('ul');
    Alert.id = "LiveRCAlert";
    lrcAddClass(Alert, "error");
    lrcaddCustomizableClasses(Alert, "LiveRCAlert");
    Target.insertBefore(Alert, Target.firstChild);
  }
  Alert.style.maxWidth = Math.round(LiveRC_GetScreenWidth()/2) + "px";
  Alert.style.minWidth = Math.round(LiveRC_GetScreenWidth()/4) + "px";
  LiveRC_Config["AlertCount"]++;
  var Lis = Alert.getElementsByTagName('li');
  var index = LiveRC_Config["AlertCount"];
  var id = "LiveRCAlert_"+index;
  var NewLi = document.createElement('li');
  NewLi.id = id;
  lrcAddClass(NewLi, "LiveRC_Opacity_100");
  Alert.appendChild(NewLi);
  return NewLi;
};

/* </source>

===== prompt =====

<source lang="javascript"> */

window.LiveRC_prompt = function(text, onOK, onCancel, suggestion){
  if(!text) return;
  if(!suggestion) suggestion = '';
  text = text.split("\n").join("");
  var NewLi = LiveRC_CreateNewAlert();
  var id = NewLi.id;
  var Fieldset = document.createElement('fieldset');
  NewLi.appendChild(Fieldset);
  var Ptext = document.createElement('p');
  Ptext.className = "AlertText";
  Ptext.innerHTML = text;
  Fieldset.appendChild(Ptext);
  var Psuggest = document.createElement('input');
  Psuggest.id = id+"_AlertSuggest";
  Psuggest.type = "text";
  Psuggest.className = "AlertSuggest";
  if(suggestion) Psuggest.value = suggestion;
  Fieldset.appendChild(Psuggest);
  var Pbuttons = document.createElement('p');
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  var OKFunction = function(){
    var SuggestInput = document.getElementById(id+"_AlertSuggest");
    if(typeof(onOK)==="function" && SuggestInput) onOK(SuggestInput.value);
    NewLi.parentNode.removeChild(NewLi);
    return false;
  };
  OKInput.onclick = OKFunction;
  OKInput.onselect = OKFunction;
  Pbuttons.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  var CancelFunction = function(){
    var SuggestInput = document.getElementById(id+"_AlertSuggest");
    if(typeof(onCancel)==="function" && SuggestInput) onCancel(SuggestInput.value);
    NewLi.parentNode.removeChild(NewLi);
    return false;
  };
  CancelInput.onclick = CancelFunction;
  CancelInput.onselect = CancelFunction;
  Pbuttons.appendChild(CancelInput);
  NewLi.appendChild(Pbuttons);
  Psuggest.focus();
  return NewLi;
};

/* </source>

===== confirm =====

<source lang="javascript"> */

window.LiveRC_confirm = function(text, onOK, onCancel){
  if(!text) return;
  text = text.split("\n").join("");
  var NewLi = LiveRC_CreateNewAlert();
  var Fieldset = document.createElement('fieldset');
  NewLi.appendChild(Fieldset);
  var Ptext = document.createElement('p');
  Ptext.className = "AlertText";
  Ptext.innerHTML = text;
  Fieldset.appendChild(Ptext);
  var Pbuttons = document.createElement('p');
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  var OKFunction = function(){
    if(typeof(onOK)==="function") onOK();
    NewLi.parentNode.removeChild(NewLi);
    return false;
  };
  OKInput.onclick = OKFunction;
  OKInput.onselect = OKFunction;
  Pbuttons.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  var CancelFunction = function(){
    if(typeof(onCancel)==="function") onCancel();
    NewLi.parentNode.removeChild(NewLi);
    return false;
  };
  CancelInput.onclick = CancelFunction;
  CancelInput.onselect = CancelFunction;
  Pbuttons.appendChild(CancelInput);
  NewLi.appendChild(Pbuttons);
  OKInput.focus();
  return NewLi;
};

/* </source>

===== alert =====

<source lang="javascript"> */

window.LiveRC_alert = function(text){
  if(!text) return;
  var NewLi = LiveRC_CreateNewAlert();
  var id = NewLi.id;
  NewLi.innerHTML = text.split("\n").join("");
  NewLi.onmouseover = function(){
    LiveRC_alert_stopOpacity(this.id);
  };
  NewLi.onmouseout = function(){
    LiveRC_Config["Timeout"][this.id] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr(this.id)+", false, 5, 75);", 500);
  };
  LiveRC_Config["Timeout"][id] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr(id)+", false, 5, 75);", 3000);
  return NewLi;
};

window.LiveRC_alert_setOpacity = function(id, removefunc, diff, delay){
  if(!diff) diff = 5;
  if(!delay) delay = 75;
  var Element = document.getElementById(id);
  if(!Element || !Element.className) return;
  var ElClass = Element.className.match(/LiveRC_Opacity_[0-9]*/);
  if(ElClass==null){
    lrcAddClass(Element, "LiveRC_Opacity_100");
    LiveRC_alert_setOpacity(id, removefunc, diff, delay);
    return;
  }
  clearTimeout(LiveRC_Config["Timeout"][id]);
  var Opacity = parseInt(ElClass[0].replace(/\D/g, ""));
  if(typeof(Opacity)!="number") return;
  var NewOpacity = (Opacity-parseInt(diff));
  if(NewOpacity < 1){
    if(!removefunc){
      Element.parentNode.removeChild(Element);
    }else{
      if(typeof(removefunc)==="function") removefunc(ElClass[0]);
    }
    return;
  }
  if(NewOpacity > 100){
    Element.className = Element.className.replace(ElClass[0], "LiveRC_Opacity_100");
    return;
  }
  Element.className = Element.className.replace(ElClass[0], "LiveRC_Opacity_"+NewOpacity);
  LiveRC_Config["Timeout"][id] = setTimeout(function(){ LiveRC_alert_setOpacity(id, removefunc, diff, delay); }, delay);
};

window.LiveRC_alert_stopOpacity = function(id){
  var Element = document.getElementById(id);
  if(!Element || !Element.className) return;
  var ElClass = Element.className.match(/LiveRC_Opacity_[0-9]*/);
  if(ElClass==null) return;
  Element.className = Element.className.replace(ElClass[0], "LiveRC_Opacity_100");
  LiveRC_Config["Timeout"][id] = clearTimeout(LiveRC_Config["Timeout"][id]);
};

/* </source>

==== Module de gestion des variables ====

===== Récupération des styles locaux =====

<source lang=javascript> */

window.liveOldLocalCSS = function(){
    lrcDisplayDebug("Get LiveRC local styles");
    var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'revisions',rvlimit:'1',rvprop:'ids',titles:LiveRC_Config["CSSPage"]});
    wpajax.http({url: URL, onSuccess: liveOldLocalCSSOldid});
    LiveRC_LaunchProcessNextStep();
};

window.liveOldLocalCSSOldid = function(RequeteOldid){
  var ObjetXML = RequeteOldid.responseXML;
  if (ObjetXML){
    var LastRevision = ObjetXML.getElementsByTagName('rev')[0];
    if (LastRevision){
      var Oldid = LastRevision.getAttribute('revid');
      var URL = lrcGetUglyPageURL(LiveRC_Config["CSSPage"],'&action=raw&oldid='+Oldid);
      wpajax.http({url:URL, onSuccess:LiveRC_ManageParams_GetOldCSS, page:LiveRC_Config["CSSPage"]});
    }
  }
};

/* </source>

===== Récupération des styles personnalisés =====

<source lang=javascript> */

window.liveOldPersonalCSS = function(){
    lrcDisplayDebug("Get LiveRC personal styles");
    var Page = 'User:'+mw.config.get('wgUserName')+ LiveRC_Config["UserParamPage"]+".css";
    var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'revisions',rvlimit:'1',rvprop:'ids',titles:Page});
    wpajax.http({url: URL, onSuccess: LiveRC_ManageParams_GetOldCSSOldid});
    LiveRC_LaunchProcessNextStep();
};

window.LiveRC_ManageParams_GetOldCSSOldid = function(RequeteOldid){
  var ObjetXML = RequeteOldid.responseXML;
  if (ObjetXML){
    var LastRevision = ObjetXML.getElementsByTagName('rev')[0];
    if (LastRevision){
      var Oldid = LastRevision.getAttribute('revid');
      var URL = lrcGetUglyPageURL('User:'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.css','&action=raw&oldid='+Oldid);
      wpajax.http({url:URL, onSuccess:LiveRC_ManageParams_GetOldCSS, page:'User:'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.css'});
    }
  }
};

/* </source>

===== Parsing des styles  =====

<source lang=javascript> */

window.LiveRC_ManageParams_GetOldCSS = function(Req, data){
     var localpage = (data.page === LiveRC_Config["CSSPage"]);
     var Response = Req.responseText;
     if(Response=="") return;
     Response = Response.split("/*");
     for(var a=0,l=Response.length;a<l;a++){
       if(Response[a].indexOf("*/")!=-1) Response[a] = Response[a].split("*/")[1];
     }
     Response = Response.join("");
     Response = Response.replace(/[ ]*\n[ ]*/g, "");
     var FoundSetup = false;
     var Reg = new RegExp("[^\\}]*\\{[^\\}]*\\}", "g");
     var matches = Response.match(Reg);
     if(matches == null) return;
     var personalstylescount = 0;
     for(var a=0,l=matches.length;a<l;a++){
         var Thismatch = matches[a];
         var matchtarget = Thismatch.split("{")[0];
         matchtarget = matchtarget.replace(/^ /g, "").replace(/ $/g, "");
         var matchstyle = Thismatch.split("}")[0].split("{")[1];
         matchstyle = LiveRC_ManageParams_StripStyle(matchstyle);
         var styleupdated = false;
         for(var b=0,r=lrcCSSstyles.length;b<r;b++){
             var target = lrcCSSstyles[b].target;
             if(target != matchtarget) continue;
             lrcCSSstyles[b].style = LiveRC_ManageParams_StripStyle(lrcCSSstyles[b].style);
             if(localpage) lrcCSSstyles[b].localstyle = matchstyle;
             else lrcCSSstyles[b].customstyle = matchstyle;
             styleupdated = true;
         }
         if(!styleupdated){
             personalstylescount++;
             var NewStyleItem = {};
             if(localpage){
               NewStyleItem.localtarget = matchtarget;
               NewStyleItem.localstyle = matchstyle;
             }else{
               NewStyleItem.customtarget = matchtarget;
               NewStyleItem.customstyle = matchstyle;
             }
             lrcCSSstyles.push(NewStyleItem);
         }
     }
     LiveRC_ManageParams_FillOpenedStylesMenu();
};

window.LiveRC_ManageParams_StripStyle = function(style){
  if(!style) return "";
  return style.replace(/^ /g, "").replace(/ $/g, "").replace(/( )*;( )*/g, ";").replace(/( )*:( )*/g, ":").replace(/;;/g, ";");
};

/* </source>

===== Fonctions d'ajout de variables =====

====== Variables par défaut ======

<source lang="javascript"> */

window.defineParam = function(textcode, Param){
  lrcParams[textcode] = Param;
};

window.defineOption = function(textcode, Option){
  lrcOptionMenuValues[textcode] = Option;
};

window.defineBlankMessages = function(BlankMessages){
  lstBlank = BlankMessages;
};

window.defineRevertMessages = function(RevertMessages){
  lrcRevertMessages = RevertMessages;
};

window.defineWarningTemplates = function(WarningTemplates){
  lstAverto = WarningTemplates;
};

window.defineTagTemplates = function(TagTemplates){
  lstBando = TagTemplates;
};

window.defineReportParams = function(ReportParams){
  lstReport = ReportParams;
};

window.defineIcon = function(textcode, Icon){
  lrcIcons[textcode] = Icon;
};

window.defineUnTranslatedText = function(textcode, UnTranslatedText){
  UnTranslatedTexts[textcode] = UnTranslatedText;
};

window.defineExtensions = function(Extensions){
  lrcExtensions = Extensions;
};

window.defineCommentTests = function(CommentTests){
  commenttests = CommentTests;
};

window.defineTemplateTest = function(TemplateTest){
  templatestests = TemplateTest;
};

window.definePageCategoryTests = function(PageCategoryTests){
  categoriestests = PageCategoryTests;
};

window.defineUserCategoryTests = function(UserCategoryTests){
  watchCategories = UserCategoryTests;
};

window.defineSupprLineParams = function(SupprLineParams){
  lrcSupprLineParams = SupprLineParams;
};

window.addParamMenuTab = function(textcode, ParamMenuTab){
  lstParamMenuTabs[textcode] = ParamMenuTab;
};

window.addTradToTranslatedTexts = function(textcode, lang, text){
  if(typeof(lrcTranslatedTexts[textcode])!="object") lrcTranslatedTexts[textcode] = [];
  if(typeof(lrcTranslatedTexts[textcode][lang])==="undefined") lrcTranslatedTexts[textcode][lang] = text;
};

window.addTradToTranslatedParamDesc = function(textcode, lang, text){
  if(typeof(lrcTranslatedParamDesc[textcode])!="object") lrcTranslatedParamDesc[textcode] = [];
  if(typeof(lrcTranslatedParamDesc[textcode][lang])==="undefined") lrcTranslatedParamDesc[textcode][lang] = text;
};

window.addTradToExtensions = function(extensionname, lang, text){
  for(var a=0,l=lrcExtensions.length;a<l;a++){
    if(lrcExtensions[a]["name"] != extensionname) continue;
    lrcExtensions[a][("desc-"+lang)] = text;
    delete lrcExtensions[a]["desc"];
  }
};

window.addTradToCSSstyles = function(stylename, lang, text){
  for(var a=0,l=lrcCSSstyles.length;a<l;a++){
    if(lrcCSSstyles[a]["target"] != stylename) continue;
    lrcCSSstyles[a][("desc-"+lang)] = text;
    delete lrcCSSstyles[a]["desc"];
  }
};

/* </source>

====== Variables personnalisées ======

<source lang=javascript> */

window.addCustomParam = function(textcode, Param){
  Custom_lrcParams[textcode] = Param;
};

window.addCustomOption = function(textcode, Option){
  Custom_lrcOptionMenuValues[textcode] = Option;
};

window.defineCustomBlankMessages = function(BlankMessages){
  Custom_lstBlank = BlankMessages;
};

window.defineCustomRevertMessages = function(RevertMessages){
  Custom_lrcRevertMessages = RevertMessages;
};

window.defineCustomWarningTemplates = function(WarningTemplates){
  Custom_lstAverto = WarningTemplates;
};

window.defineCustomTagTemplates = function(TagTemplates){
  Custom_lstBando = TagTemplates;
};

window.defineCustomReportParams = function(ReportParams){
  Custom_lstReport = ReportParams;
};

window.addCustomIcon = function(textcode, Icon){
  Custom_lrcIcons[textcode] = Icon;
};

window.addCustomTradToTranslatedTexts = function(textcode, Args){
  if(typeof(Custom_lrcTranslatedTexts[textcode])!="object") Custom_lrcTranslatedTexts[textcode] = [];
  for(var lang in Args){
    var text = Args[lang];
    Custom_lrcTranslatedTexts[textcode][lang] = text;
  }
};

window.addCustomTradToTranslatedParamDesc = function(textcode, Args){
  if(typeof(Custom_lrcTranslatedParamDesc[textcode])!="object") Custom_lrcTranslatedParamDesc[textcode] = [];
  for(var lang in Args){
    var text = Args[lang];
    Custom_lrcTranslatedParamDesc[textcode][lang] = text;
  }
};

window.addCustomUnTranslatedText = function(textcode, UnTranslatedText){
  Custom_UnTranslatedTexts[textcode] = UnTranslatedText;
};

window.defineCustomExtensions = function(Extensions){
  Custom_lrcExtensions = Extensions;
};

window.defineCustomCommentTests = function(CommentTests){
  Custom_commenttests = CommentTests;
};

window.defineCustomTemplateTest = function(TemplateTest){
  Custom_templatestests = TemplateTest;
};

window.defineCustomPageCategoryTests = function(PageCategoryTests){
  Custom_categoriestests = PageCategoryTests;
};

window.defineCustomUserCategoryTests = function(UserCategoryTests){
  Custom_watchCategories = UserCategoryTests;
};

window.defineCustomSupprLineParams = function(SupprLineParams){
  Custom_lrcSupprLineParams = SupprLineParams;
};

window.addCustomParamMenuTab = function(textcode, ParamMenuTab){
  Custom_lstParamMenuTabs[textcode] = ParamMenuTab;
};

window.lrcSetConfigSetting = function(variable, textcode, value){
  if(typeof(window[variable])==="undefined") return;
  if(textcode===false){
    window[variable] = value;
  }else{
    if(typeof(textcode)!=="undefined") window[variable][textcode] = value;
  }
};

/* </source>

===== Création du menu de paramétrage =====

====== Remplissage de la variable globale ======

<source lang=javascript> */

// Création des variables

window.LiveRC_ManageParams_GlobalFill = function(){
    LiveRC_Config["LiveRCcustomParams"] = [];
    LiveRC_ManageParams_Fill(lrcParams              , "lrcParams"              , "addCustomParam"                      , false );
    LiveRC_ManageParams_Fill(lrcOptionMenuValues    , "lrcOptionMenuValues"    , "addCustomOption"                     , false );
    LiveRC_ManageParams_Fill(lstBlank               , "lstBlank"               , "defineCustomBlankMessages"           , true  );
    LiveRC_ManageParams_Fill(lrcRevertMessages      , "lrcRevertMessages"      , "defineCustomRevertMessages"          , true  );
    LiveRC_ManageParams_Fill(lstAverto              , "lstAverto"              , "defineCustomWarningTemplates"        , true  );
    LiveRC_ManageParams_Fill(lstBando               , "lstBando"               , "defineCustomTagTemplates"            , true  );
    LiveRC_ManageParams_Fill(lstReport              , "lstReport"              , "defineCustomReportParams"            , true  );
    LiveRC_ManageParams_Fill(lrcIcons               , "lrcIcons"               , "addCustomIcon"                       , false );
    LiveRC_ManageParams_Fill(lrcTranslatedTexts     , "lrcTranslatedTexts"     , "addCustomTradToTranslatedTexts"      , false );
    LiveRC_ManageParams_Fill(lrcTranslatedParamDesc , "lrcTranslatedParamDesc" , "addCustomTradToTranslatedParamDesc"  , false );
    LiveRC_ManageParams_Fill(UnTranslatedTexts      , "UnTranslatedTexts"      , "addCustomUnTranslatedText"           , false );
    LiveRC_ManageParams_Fill(lrcExtensions          , "lrcExtensions"          , "defineCustomExtensions"              , true  );
    LiveRC_ManageParams_Fill(commenttests           , "commenttests"           , "defineCustomCommentTests"            , true  );
    LiveRC_ManageParams_Fill(templatestests         , "templatestests"         , "defineCustomTemplateTest"            , true  );
    LiveRC_ManageParams_Fill(categoriestests        , "categoriestests"        , "defineCustomPageCategoryTests"       , true  );
    LiveRC_ManageParams_Fill(watchCategories        , "watchCategories"        , "defineCustomUserCategoryTests"       , true  );
    LiveRC_ManageParams_Fill(lrcSupprLineParams     , "lrcSupprLineParams"     , "defineCustomSupprLineParams"         , true  );
    LiveRC_RunHooks("AfterFillParamPanel");
    LiveRC_ManageParams_Fill(lstParamMenuTabs       , "lstParamMenuTabs"       , "addCustomParamMenuTab"               , false);
};

window.LiveRC_ManageParams_Fill = function(OptionArray, ArrayName, AddCustomFunction, AddButton){
    if(typeof(lstParamMenuTabs[ArrayName])==="undefined") lstParamMenuTabs[ArrayName] = true;
    var TheOptionArray = [];
    var CustomOptionArray = false;
    var test = "Custom_"+ ArrayName;
    if(!LiveRC_Config["GlobalFill_OnlyDefault"]){
        CustomOptionArray = eval( test );
        if(typeof(CustomOptionArray) !== "object"){
            test = ArrayName + "_Custom";
            try{ CustomOptionArray = eval( test ); }catch(e){ };
        }
    }else{
        CustomOptionArray = OptionArray;
    }
    if(typeof(CustomOptionArray) === "object" && !LiveRC_Config["GlobalFill_OnlyDefault"]){
        if(AddButton){ // ------------------------------------------- if there is a custom array, search values
            var foundvalues = false;
            for(var val in CustomOptionArray){
                if(['number','string','boolean','object','regexp'].indexOf(Realtypeof(CustomOptionArray[val]))!=-1)
                    foundvalues = true;
            }
            if(foundvalues) TheOptionArray = CustomOptionArray; // --- if found values : take in account the custom array
            else TheOptionArray = OptionArray;                  // --- if not, take in account the normal array
        }else{  // --------------------------------------------------- otherwise, merge the two arrays
            for(var val in OptionArray) TheOptionArray[val] = OptionArray[val];
            for(var val in CustomOptionArray) TheOptionArray[val] = CustomOptionArray[val];
        }
    }else{
        TheOptionArray = OptionArray;
    }
    var Types = null;
    for(var Param in TheOptionArray){
        var ParamName = Param;
        var ParamDefValue = OptionArray[Param];
        var ParamCustomValue = CustomOptionArray[Param];
        var CustomValueType = Realtypeof(ParamCustomValue);
        var CustomValueTest = (['number','string','boolean','regexp'].indexOf(CustomValueType) != -1 );
        if(CustomValueType == "object"){
            CustomValueTest = false;
            for(var X in ParamCustomValue){
                if(['number','string','boolean','regexp'].indexOf(Realtypeof(ParamCustomValue[X]))!= -1 ) CustomValueTest = true;
            }
        }
        if(!Types && AddButton) Types = LiveRC_ManageParams_Fill_GetVarTypes(ParamOldValue);
        var ParamOldValue = ( CustomValueTest ? ParamCustomValue : ParamDefValue);
        var ParamType = Realtypeof(ParamOldValue);  // 'number', 'string', 'boolean', 'object', 'regexp';
        if(['number', 'string', 'boolean', 'object', 'regexp'].indexOf(ParamType) !== -1){
            var NewArray = {};
            NewArray["ArrayName"]            = ArrayName;
            NewArray["Name"]                 = ParamName;
            NewArray["Desc"]                 = lrcMakeParamDescription(ParamName);
            NewArray["ValueType"]            = ParamType;
            NewArray["AddButton"]            = (AddButton ? true : false);
            NewArray["AddCustomFunction"]    = AddCustomFunction;
            NewArray["CustomValue"]          = ParamCustomValue;
            NewArray["DefaultValue"]         = ParamDefValue;
            NewArray["OldValue"]             = ParamOldValue;
            if(Types) NewArray["ItemsTypes"] = Types;
            if(!LiveRC_Config["LiveRCcustomParams"][ArrayName])
              LiveRC_Config["LiveRCcustomParams"][ArrayName] = [];
            LiveRC_Config["LiveRCcustomParams"][ArrayName][ParamName] = NewArray;
        }
    }
};

window.LiveRC_ManageParams_Fill_GetVarTypes = function(ParamObject){
    var Types = [];
    if(Realtypeof(ParamObject)!="object") return false;
    for(var VarIndex in ParamObject){
        if(!ParamObject.hasOwnProperty(VarIndex)) continue;
        Types.push(lrcEscapeStr(VarIndex)+":"+lrcEscapeStr(Realtypeof(ParamObject[VarIndex])));
    }
    if(Types.length===0) return null;
    return '{'+Types.join(",")+'}';
};

/* </source>

====== Ouverture/Fermeture du menu de paramétrage ======

<source lang=javascript> */

// Fermeture du menu

window.LiveRC_ManageParams_CloseMenu = function(){
    var ID = "LiveRC_ParamMenu";
    var Menu = document.getElementById(ID);
    if(Menu){
        lrcRemoveClass(document.body, "LiveRCConfigDisplayed");
        Menu.parentNode.removeChild(Menu);
        clearTimeout(LiveRC_Config["Timeout"]["ManageParams"]);
        updateFollowContact();
        updateFollowHiddenUsers();
        updateFollowHiddenPages();
        lrcInitTableHeight();
    }
};

// Création du menu

window.LiveRC_ManageParams_OpenMenu = function(onlydefault){
    var OldMenu = document.getElementById("LiveRC_ParamMenu");
    if(OldMenu){
        LiveRC_ManageParams_CloseMenu();
        return;
    }
    lrcAddClass(document.body, "LiveRCConfigDisplayed");
    LiveRC_Config["GlobalFill_OnlyDefault"] = (!onlydefault ? false : true);

    LiveRC_ManageParams_GlobalFill();
    var TargetDiv = document.getElementById("OutFixedBottomPanel");
    if(!TargetDiv) return;

    var Menu = document.createElement('div');
    Menu.id = "LiveRC_ParamMenu";
    lrcAddClass(Menu, "LiveRC_Opacity_100");
    var MenuAnchor = document.createElement('div');
    MenuAnchor.id = "LiveRC_ParamMenuAnchor";
    MenuAnchor.innerHTML = lrcMakeText("ConfigMenuTitle");
    Menu.appendChild(MenuAnchor);
    var MenuContent = document.createElement('div');
    MenuContent.id = "LiveRC_ParamMenuContent";
    lrcaddCustomizableClasses(MenuContent, "LiveRC_MenuContent");
    var Form = document.createElement('form');
    Form.id = "LiveRC_ParamMenuForm";
    MenuContent.appendChild(Form);
    for(var ThisVariableIndex in LiveRC_Config["LiveRCcustomParams"]){
        var ArrayVariable = LiveRC_Config["LiveRCcustomParams"][ThisVariableIndex];
        var VariableFieldset = document.createElement('fieldset');
        VariableFieldset.id = "LiveRC_OptionsContent_"+ThisVariableIndex;
        VariableFieldset.className = "LiveRC_ParamMenuFieldset";
        VariableFieldset.setAttribute("style", "text-align:left;");
        var VariableLegend = document.createElement('legend');
        VariableLegend.appendChild(document.createTextNode(lrcMakeParamDescription(ThisVariableIndex)));
        VariableFieldset.appendChild(VariableLegend);
        VariableFieldset.appendChild(LiveRC_ManageParams_CreateActionButtons());
        var VariableDiv = document.createElement('div');
        VariableDiv.className = "LiveRC_ParamMenuPart";
        var VariableUl = document.createElement('ul');
        var ArraysInArray = false;
        var count = 0;
        for(var q in ArrayVariable){
          count++;
          if(ArrayVariable[q]["ValueType"]=='object') ArraysInArray = true;
        }
        if(count==0) continue;
        if(!ArraysInArray) VariableUl.setAttribute("style", "-moz-column-count:2;-webkit-column-count:2;column-count:2;");
        VariableDiv.appendChild(VariableUl);
        VariableFieldset.appendChild(VariableDiv);
        var AddButton;
        for(var a in ArrayVariable){
            var ThisVariable = ArrayVariable[a];
            AddButton = ThisVariable["AddButton"];
            var P = LiveRC_ManageParams_CreateLiFromParam(ThisVariable);
            VariableUl.appendChild(P);
        }
        if(AddButton && ThisVariable["ItemsTypes"]){
            var P = document.createElement('li');
            var Types = ThisVariable["ItemsTypes"];
            var func = 'LiveRC_ManageParams_AddNewParam('+lrcEscapeStr(ThisVariableIndex)+', '+Types+');';
            P.innerHTML = '<a id="AddParam_'+ThisVariableIndex+'" title="'+lrcMakeText("AddParamLineButton_Title")+'" href="javascript:'+func+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
            VariableUl.appendChild(P);
        }
        Form.appendChild(VariableFieldset);
    }
    Menu.appendChild(MenuContent);
    TargetDiv.appendChild(Menu);
    LiveRC_ManageParams_TransformInputToSelect();
    LiveRC_ManageParams_MoveFollowListsOptions();
    LiveRC_ManageParams_MoveLogOptions();
    LiveRC_ManageParams_MoveTagsOptions();
    LiveRC_ManageParams_MoveNamespaceOptions();
    LiveRC_ManageParams_MoveUsersOptions();
    LiveRC_ManageParams_AddIconsDescriptions();
    LiveRC_ManageParams_AddNewIcon_CreateAddButton();
    LiveRC_ManageParams_AddTextTranslationsLangToggleAndDescriptions();
    LiveRC_ManageParams_AddNewText_CreateAddButton();
    LiveRC_ManageParams_RemoveSomeExtensions();
    LiveRC_ManageParams_AddContactListMenu();
    LiveRC_ManageParams_AddHiddenListMenu();
    LiveRC_ManageParams_AddHiddenPagesListMenu();
    LiveRC_ManageParams_AddExtensionsMenu();
    LiveRC_ManageParams_AddStylesMenu();

    LiveRC_RunHooks("AfterCreateParamPanel");

    LiveRC_ManageParams_CreateToggleButtons();
    LiveRC_ManageParams_ToggleMenu();
    LiveRC_ManageParams_HideSomeTabs();
    LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_ParamMenuAnchor"),
                         lrcGetElementsByClass("LiveRC_ParamMenuPart",document.getElementById("LiveRC_ParamMenu"),"div"),
                         document.getElementById("LiveRC_ParamMenu")
                        );
    lrcInitTableHeight();
};


window.LiveRC_ManageParams_HideSomeTabs = function(){
  for(var tab in lstParamMenuTabs){
    if(lrcMakeParamMenuTabs(tab) === false){
      var Fieldset = document.getElementById("LiveRC_OptionsContent_"+tab);
      if(Fieldset) Fieldset.style.display = "none";
      var Input = document.getElementById("LiveRC_OptionsContentInput_"+tab);
      if(Input) Input.style.display = "none";
    }
    if(LiveRC_Config["AlwaysShownTabs"].indexOf(tab)!=-1){
      var LI = document.getElementById("LI_"+tab);
      if(LI){
        var Inputs = LI.getElementsByTagName('input');
        for(var a=0,l=Inputs.length;a<l;a++){
          if(Inputs[a].type == "checkbox") Inputs[a].disabled = "disabled";
        }
      }
    }
  }
  var InputsP = document.getElementById("ToggleButtons");
  if(InputsP){
    var Inputs = InputsP.getElementsByTagName('input');
    var index = 0;
    var Input = Inputs[index];
    while(Input && Input.style && Input.style.display == "none"){
      index++;
      Input = Inputs[index];
    }
    if(Input && index !== 0) LiveRC_ManageParams_ToggleMenu(Input);
  }
};

window.LiveRC_ManageParams_CreateLiFromParam = function(ThisVariable){
  var ThisVariable_Desc = ThisVariable["Desc"];
  var ThisVariable_Name = ThisVariable["Name"];
  var ThisVariable_AddButton = ThisVariable["AddButton"];
  var ThisVariable_ValueType = ThisVariable["ValueType"];
  var ThisVariable_OldValue = ThisVariable["OldValue"];
  var ThisVariable_DefaultValue = ThisVariable["DefaultValue"];
  var LetOneItem = (typeof(ThisVariable["LetOneItem"])==="boolean" && ThisVariable["LetOneItem"]===false ? false : true);
  var P = document.createElement('li');
  lrcaddCustomizableClasses(P, "ParamMenuLi");
  lrcAddClass(P, "RealParamMenuLi");
  var addtitle = true;
  var thisvartitle = ThisVariable_Desc;
  for(var d=0,s=10;d<s;d++){ if(thisvartitle.indexOf("Desc"+d)!=-1) addtitle = false; }
  if(addtitle){
    P.title = thisvartitle;
    P.id = "LI_"+ThisVariable_Name;
  }
  var HiddenInput = document.createElement('input');
  HiddenInput.type = "hidden";
  HiddenInput.name = "variable_index";
  HiddenInput.value = ThisVariable_Name;
  P.appendChild(HiddenInput);
  var AddButton = ThisVariable_AddButton;
  if(ThisVariable_ValueType!='object'){
    var ValueSpan = LiveRC_ManageParams_CreateNewParamSpan(ThisVariable_OldValue, ThisVariable_ValueType, ThisVariable_Name, ThisVariable_Desc);
    if(ObjIsDifferent(ThisVariable_OldValue, ThisVariable_DefaultValue))
      lrcAddClass(P, "ParamMenuLiCustom");
    P.appendChild(ValueSpan);
  }else{
    for(var VarIndex in ThisVariable_OldValue){
      var VariableType = Realtypeof(ThisVariable_OldValue[VarIndex]);
      if(["boolean","number","string","regexp"].indexOf(VariableType)==-1) continue;
      var ValueSpan = LiveRC_ManageParams_CreateNewParamSpan(ThisVariable_OldValue[VarIndex], VariableType, VarIndex, VarIndex, true);
      if(Realtypeof(ThisVariable_DefaultValue)==="undefined" || ObjIsDifferent(ThisVariable_OldValue[VarIndex], ThisVariable_DefaultValue[VarIndex]))
        lrcAddClass(ValueSpan, "ParamMenuLiCustom");
      P.appendChild(ValueSpan);
      P.appendChild(document.createTextNode(" "));
    }
    if(AddButton) P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink(LetOneItem));
  }
  return P;
};

// Ajouter une nouvelle ligne

window.LiveRC_ManageParams_AddNewParam = function(Id, Vars, LetOne){
    var LetOneItem = (typeof(LetOne)==="boolean" && LetOne===false ? false : true);
    var Link = document.getElementById('AddParam_'+Id);
    if(!Link) return;
    var Variable = LiveRC_Config["LiveRCcustomParams"][Id];
    var ThisVariableName = 0;
    var Li = Link.parentNode;
    PreviousLi = Li.previousSibling;
    if(PreviousLi){
        var PreviousLiHidden = PreviousLi.getElementsByTagName('input')[0];
        if(PreviousLiHidden){
            var PreviousLiHiddenValue = PreviousLiHidden.value;
            if(typeof(parseInt(PreviousLiHiddenValue))==="number") ThisVariableName = (parseInt(PreviousLiHiddenValue) + 1);
        }
    }
    var P = document.createElement('li');
    lrcaddCustomizableClasses(P, "ParamMenuLi");
    lrcAddClass(P, "RealParamMenuLi");
    lrcAddClass(P, "ParamMenuLiCustom");
    var HiddenInput = document.createElement('input');
    HiddenInput.type = "hidden";
    HiddenInput.name = "variable_index";
    HiddenInput.value = ThisVariableName;
    P.appendChild(HiddenInput);
    for(var iName in Vars){
        var ValueSpan = LiveRC_ManageParams_CreateNewParamSpan("", Vars[iName], iName, iName, true);
        P.appendChild(ValueSpan);
        P.appendChild(document.createTextNode(" "));
    }
    P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink(LetOneItem));
    Li.parentNode.insertBefore(P, Li);
};

window.LiveRC_ManageParams_CreateNewParamSpan = function(VarValue, VariableType, VarIndex, Desc, LabelFirst){
  Desc = ( Desc ? Desc : VarIndex);
  var ValueSpan = document.createElement('span');
  lrcAddClass(ValueSpan, "ParamMenuLiElement");
  lrcAddClass(ValueSpan, "ParamMenuLiElement_"+VariableType);
  if(["boolean","number","string","regexp"].indexOf(VariableType)!=-1){
    var Input = document.createElement('input');
    Input.name = VarIndex;
    if(VariableType=="boolean"){
      Input.type = "checkbox";
      if(VarValue) Input.checked = "checked";
    }else{
      Input.type = "text";
      if(VariableType=="string" || VariableType == "regexp") Input.size = 35;
      if(VariableType=="number") Input.size = 4;
      Input.setAttribute("style", "padding:2px;margin:0");
      if(VariableType=="regexp"){
        Input.value = VarValue.toString();
      }else if(VariableType=="string"){
        Input.value = lrcEscapeStrSpecialChars(VarValue);
      }else{
        Input.value = VarValue;
      }
    }
    var Label = document.createElement('label');
    Label.setAttribute('for', VarIndex);
    Label.innerHTML = Desc;
    if(LabelFirst){
      ValueSpan.appendChild(Label);
      ValueSpan.appendChild(document.createTextNode(":"));
      ValueSpan.appendChild(Input);
    }else{
      ValueSpan.appendChild(Input);
      ValueSpan.appendChild(document.createTextNode(" "));
      ValueSpan.appendChild(Label);
    }
  }
  return ValueSpan;
};

// Bouton de suppression de ligne (paramètres)

window.LiveRC_ManageParams_AddDeleteParamLineLink = function(LetOne){
    var Link = document.createElement('a');
    Link.innerHTML = lrcMakeText("DeleteParamLineButton_Text");
    Link.title = lrcMakeText("DeleteParamLineButton_Title");
    Link.href = "javascript:;";
    Link.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this, LetOne); };
    return Link;
};

// Bouton de suppression de ligne (utilisateur suivi/masqué)

window.LiveRC_ManageParams_AddDeleteUserLink = function(){
    var Link = document.createElement('a');
    Link.innerHTML = lrcMakeText("DeleteUserButton_Text");
    Link.title = lrcMakeText("DeleteUserButton_Title");
    Link.href = "javascript:;";
    Link.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this, false); };
    return Link;
};

// Bouton de suppression de ligne (page masquée)

window.LiveRC_ManageParams_AddDeletePageLink = function(){
    var Link = document.createElement('a');
    Link.innerHTML = lrcMakeText("DeletePageButton_Text");
    Link.title = lrcMakeText("DeletePageButton_Title");
    Link.href = "javascript:;";
    Link.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this, false); };
    return Link;
};

// Suppression d'une ligne

window.LiveRC_ManageParams_DeleteThisParam = function(Link, LetOneLine){
    var Line = Link.parentNode;
    var UL = Line.parentNode;
    var LineNumber = lrcGetElementsByClass("ParamMenuLi", UL, "li").length;
    if(LetOneLine && LineNumber==1) return;
    Line.parentNode.removeChild(Line);
    return false;
};

// Création boutons d’action ( Valider / RAZ )

window.LiveRC_ManageParams_CreateActionButtons = function(){
    var ActionP = document.createElement('p');
    ActionP.className = 'ActionButtons';
    var OKInput = document.createElement('input');
    OKInput.type = "button";
    OKInput.value = lrcMakeText("OK");
    OKInput.onclick = function(){ LiveRC_ManageParams_CheckMenu(this); return false;};
    OKInput.onselect = function(){ LiveRC_ManageParams_CheckMenu(this); return false;};
    ActionP.appendChild(OKInput);
    var RAZInput = document.createElement('input');
    RAZInput.type = "button";
    RAZInput.value = lrcMakeText("RAZ");
    RAZInput.onclick = function(){ LiveRC_ManageParams_RAZParams(this); return false;};
    RAZInput.onselect = function(){ LiveRC_ManageParams_RAZParams(this); return false;};
    ActionP.appendChild(RAZInput);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    ActionP.appendChild(CancelInput);
    return ActionP;
};

// Création des onglets

window.LiveRC_ManageParams_CreateToggleButtons = function(){
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    var P = document.createElement('p');
    P.id = "ToggleButtons";
    var Fieldsets = Form.getElementsByTagName('fieldset');
    for(var a=0,l=Fieldsets.length;a<l;a++){
        var Id = ""+Fieldsets[a].id.split("LiveRC_OptionsContent_").join("");
        var Input = document.createElement('input');
        Input.id = "LiveRC_OptionsContentInput_"+Id;
        Input.type = "button";
        Input.value = lrcMakeParamDescription(Id+"_short");
        Input.title = lrcMakeParamDescription(Id);
        Input.onclick = function(){ LiveRC_ManageParams_ToggleMenu(this); return false;};
        Input.onselect = function(){ LiveRC_ManageParams_ToggleMenu(this); return false;};
        P.appendChild(Input);
    }
    var NSMessages = getNamespaceInfoFromPage(LiveRC_Config["SiteConfigPage"]);
    if( LiveRC_Config["SiteConfigPage"].indexOf(".js") != -1
        &&
        ( ( NSMessages==8 && lrcUserHasRight("editinterface")
          )
          ||
          ( NSMessages==2 && ( lrcUserHasRight("edituserjs")
                               ||
                               LiveRC_Config["SiteConfigPage"].indexOf(mw.config.get('wgUserName')) !=- 1
                             )
          )
        )
      ){
        var MSInput = document.createElement('input');
        MSInput.type = "button";
        MSInput.id = "MWConfigSaveButton";
        MSInput.value = lrcMakeText("MWSiteInfoLegend");
        MSInput.title = lrcMakeText("UPDATEMESSAGES");
        MSInput.onclick = function(){ LiveRC_GetSiteInfos(true, this); return false;};
        MSInput.onselect = function(){ LiveRC_GetSiteInfos(true, this); return false;};
        P.appendChild(MSInput);
    }
    Form.parentNode.insertBefore( P, Form);
    LiveRC_Config["Timeout"]["ManageParams"] = setTimeout("LiveRC_ManageParams_SetMenuHeights()", 500);
};

// Gestion des onglets

window.LiveRC_ManageParams_ToggleMenu = function(Input){
    var Id = false;
    if(Input) Id = Input.id.split("LiveRC_OptionsContentInput_").join("LiveRC_OptionsContent_");
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    var Onglets = document.getElementById("ToggleButtons").getElementsByTagName('input');
    var Fieldsets = lrcGetElementsByClass("LiveRC_ParamMenuFieldset",Form,"fieldset");
    for(var a=0,l=Fieldsets.length;a<l;a++){
        if(!Onglets[a]) continue;
        if(Id){
            Onglets[a].style.fontWeight = ((Id == Fieldsets[a].id)? "bold" : "");
            Fieldsets[a].style.display = ((Id == Fieldsets[a].id)? "" : "none");
        }else{
            Onglets[a].style.fontWeight = ((a==0)? "bold" : "");
            Fieldsets[a].style.display = ((a==0)? "" : "none");
        }
    }
};

// Égalisation de la hauteur des menus
window.LiveRC_ManageParams_SetMenuHeights = function(){
  var Menu = document.getElementById("LiveRC_ParamMenu");
  if(!Menu) return;
  var HeightFound = false;
  var FieldSets = Menu.getElementsByTagName('fieldset');
  for(var b=0,m=FieldSets.length;b<m;b++){
    if(FieldSets[b].style.display == "none") continue;
    var MenuPart =  lrcGetElementsByClass("LiveRC_ParamMenuPart",FieldSets[b],'div')[0];
    if(!MenuPart) continue;
    var StyleHeight = MenuPart.style.height;
    if(StyleHeight) HeightFound = StyleHeight;
  }
  if(HeightFound){
    var MenuParts = lrcGetElementsByClass("LiveRC_ParamMenuPart",Menu,'div');
    for(var a=0,l=MenuParts.length;a<l;a++) MenuParts[a].style.height = HeightFound;
  }
  clearTimeout(LiveRC_Config["Timeout"]["ManageParams"]);
  LiveRC_Config["Timeout"]["ManageParams"] = setTimeout("LiveRC_ManageParams_SetMenuHeights()", 500);
};

// Création d'un sous-menu

window.LiveRC_ManageParams_CreateNewListMenu = function(menuname, buttons, columns){
    var Form = document.getElementById("LiveRC_ParamMenuForm");
    if(!Form || !menuname) return;
    var NewListFieldset = document.createElement('fieldset');
    NewListFieldset.id = "LiveRC_OptionsContent_"+menuname;
    NewListFieldset.className = "LiveRC_ParamMenuFieldset";
    var NewListLegend = document.createElement('legend');
    NewListLegend.appendChild(document.createTextNode(lrcMakeParamDescription(menuname)));
    NewListFieldset.appendChild(NewListLegend);
    if(buttons) NewListFieldset.appendChild(buttons);
    var NewListDiv = document.createElement('div');
    NewListDiv.className = "LiveRC_ParamMenuPart";
    var NewListUl = document.createElement('ul');
    NewListUl.id = "LiveRC_OptionsContent_"+menuname+"ListUL";
    if(typeof(columns)=="number")
      NewListUl.setAttribute("style", "-moz-column-count:"+columns+";-webkit-column-count:"+columns+";column-count:"+columns+";");
    NewListDiv.appendChild(NewListUl);
    NewListFieldset.appendChild(NewListDiv);
    Form.appendChild(NewListFieldset);
    return NewListUl;
};

/* </source>

====== Modifications spéciales du menu de paramétrage ======

<source lang=javascript> */

// Déplacer les options « Afficher le journal XXX » (listes de suivi spéciales)

window.LiveRC_ManageParams_MoveFollowListsOptions = function(){
  var FollowOption = document.getElementById("LI_LiveRCFollowDisplayed");
  if(!FollowOption) return;
  var Target = FollowOption.nextSibling;
  for(var a=0,l=LiveRC_Config["SpecialLogList"].length;a<l;a++){
    var Li = document.getElementById("LI_Display"+LiveRC_Config["SpecialLogList"][a]);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }
};

// Déplacer les options « Case "XXX" » (journaux)

window.LiveRC_ManageParams_MoveLogOptions = function(){
  var LogOption = document.getElementById("LI_Log");
  if(!LogOption) return;
  var Target = LogOption.nextSibling;
  for(var id in LiveRC_Config["LogNames"]){
    var Li = document.getElementById("LI_Log_"+id);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }
};

// Déplacer les options « Case Espace de noms : XXX »

window.LiveRC_ManageParams_MoveNamespaceOptions = function(){
  var NSOption = document.getElementById("LI_NS");
  if(!NSOption) return;
  var Target = NSOption.nextSibling;
  for(var id in LiveRC_Config["MediawikiNamespaces"]){
    var Li = document.getElementById("LI_NS_"+id);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }
};

// Déplacer les options « Balise "XXX" »

window.LiveRC_ManageParams_MoveTagsOptions = function(){
  var TagsOption = document.getElementById("LI_Tags");
  if(!TagsOption) return;
  var Target = TagsOption.nextSibling;
  for(var tagname in LiveRC_Config["MediawikiTags"]){
    var Li = document.getElementById("LI_Tags_"+tagname);
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }
};

// Déplacer les options « Utilisateur "XXX" »

window.LiveRC_ManageParams_MoveUsersOptions = function(){
  var TagsOption = document.getElementById("LI_User_AUTOPATROLLED");
  if(!TagsOption) return;
  var Target = TagsOption.nextSibling;
  for(var group in LiveRC_Config["UserGroupList"]){
    var Li = document.getElementById("LI_UserG_"+group.toUpperCase());
    if(Li){
      Li.parentNode.removeChild(Li);
      Target.parentNode.insertBefore(Li, Target);
    }
  }
};

// Masque les extensions que l'utilisateur ne peut pas utiliser

window.LiveRC_ManageParams_RemoveSomeExtensions = function(){
  if(LiveRC_Config["GlobalFill_OnlyDefault"]) return;
  var ExtTab = document.getElementById("LiveRC_OptionsContent_lrcExtensions");
  if(!ExtTab) return;
  var Lis = ExtTab.getElementsByTagName('li');
  var ExtToHide = LiveRC_GetExtensionsToHide();
  for(var a=0,l=Lis.length;a<l;a++){
    var ThisLi = Lis[a];
    if(!lrcHasClass(ThisLi, "ParamMenuLi")) continue;
    var InputName = ThisLi.getElementsByTagName('input')[1];
    if(!InputName) continue;
    var ExtName = InputName.value;
    if(!ExtName) continue;
    var Hide = (ExtToHide.indexOf(ExtName)!==-1);
    if(Hide) ThisLi.style.display = "none";
  }
};

// Transformer certaines <input> en <select> pour limiter les choix possibles

window.LiveRC_ManageParams_TransformInputToSelect = function(){
  var InputsToTransform = [];
// ======= lrcParams =======
// ["Language"]-----------------
  var Langs = [];
  for(var a=0,l=LiveRC_Config["SupportedLanguages"].length;a<l;a++){
    var langcode = LiveRC_Config["SupportedLanguages"][a];
    var newLang = {};
    newLang.value = langcode;
    newLang.text = LiveRC_Config["MediawikiLanguages"][langcode];
    Langs[Langs.length] = newLang;
  }
  InputsToTransform["Language"] = Langs;
// ----------------- ["TZ"]
  var TimeZones = [];
  for(var a=1,l=48;a<l;a++){
    var hour = (a-24);
    var ThisValue = (hour>0 ? "+":"")+TwoDigitsForNumber(hour)+":00";
    var newTZ = {};
    newTZ.value = ThisValue;
    newTZ.text = ThisValue;
    TimeZones[TimeZones.length] = newTZ;
  }
  InputsToTransform["TZ"] = TimeZones;
  LiveRC_ManageParams_CheckInputsToTransform(InputsToTransform);
// ======= lrcIcons =======
  InputsToTransform = [];
  var node = document.getElementById('LiveRC_OptionsContent_lrcIcons');
// ----------------- ["XXX"]["type"]
  var IconTypeOptions = [{value:"-1",text:"no"},{value:"0",text:"img"},{value:"1",text:"sup"},{value:"2",text:"sub"}];
  InputsToTransform["type"] = IconTypeOptions;
  LiveRC_ManageParams_CheckInputsToTransform(InputsToTransform, node);
};

window.LiveRC_ManageParams_CheckInputsToTransform = function(InputsToTransform, node){
  var remainingInputs = 0
  for(var InputName in InputsToTransform){
    remainingInputs++
    var Li = document.getElementById("LI_"+InputName);
    if(Li){
      var ThisInputToTransform = [];
      ThisInputToTransform[InputName] = InputsToTransform[InputName];
      delete InputsToTransform[InputName];
      LiveRC_ManageParams_CheckInputsToTransformInThisNode(ThisInputToTransform, Li);
      remainingInputs--;
    }
  }
  if(remainingInputs>0) LiveRC_ManageParams_CheckInputsToTransformInThisNode(InputsToTransform, node);
};

window.LiveRC_ManageParams_CheckInputsToTransformInThisNode = function(InputsToTransform, node){
  if(!node) node = document.getElementById("LiveRC_ParamMenuForm");
  if(!node) return;
  var Inputs = node.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input && Input.type && Input.type=="text" && Input.name && InputsToTransform[Input.name])
    LiveRC_ManageParams_TransformThisInputToSelect(Input, InputsToTransform[Input.name]);
  }
};

window.LiveRC_ManageParams_TransformThisInputToSelect = function(Input, SuggestionsArray){
  if(!Input) return;
  var DefaultValue = Input.value;
  var Select = document.createElement('select');
  Select.name = Input.name;
  for(var a=0,l=SuggestionsArray.length;a<l;a++){
    var Suggestion = SuggestionsArray[a];
    var opt = document.createElement('option');
    opt.value = Suggestion.value;
    if(Suggestion.value === DefaultValue || Suggestion.value === parseInt(DefaultValue) ){
      opt.selected = "selected";
      opt.style.fontWeight = "bold";
    }
    opt.innerHTML = (Suggestion.text ? Suggestion.text : '');
    Select.appendChild(opt);
  }
  Select.style.width = Input.offsetWidth + "px";
  Input.parentNode.insertBefore(Select, Input);
  Input.parentNode.removeChild(Input);
};
/* </source>

====== Modifications spéciales de l'onglet des icônes ======

<source lang=javascript> */

// Ajoute une description dans l'onglet des icones ainsi qu'un aperçu

window.LiveRC_ManageParams_AddIconsDescriptions = function(){
  var IconFieldset = document.getElementById("LiveRC_OptionsContent_lrcIcons");
  if(!IconFieldset) return;
  var IconLis = IconFieldset.getElementsByTagName('li');
  for(var a=0,l=IconLis.length;a<l;a++){
    LiveRC_ManageParams_AddIconDescription(IconLis[a]);
  }
};

window.LiveRC_ManageParams_AddIconDescription = function(IconLi){
  var IconName = IconLi.getElementsByTagName('input')[0];
  if(!IconName) return;
  IconName = IconName.value;
  var Label = document.createElement('label');
  lrcAddClass(Label, "lrcIcons_Label");
  var UpdateLink = '<a id="IconTestLink_'+IconName+'" '
                 + 'title="'+lrcMakeText("IconTestUpdate_TIP")+'" '
                 + 'href="javascript:;" '
                 + 'onclick="lrcMakeCustomIcon(this); return false;" '
                 + '>'+lrcMakeText("IconTestUpdate_SHORT")+'</a>'
  Label.innerHTML = ' = <span id="IconTest_'+IconName+'">'+lrcMakeIcon(IconName)+'</span> <sup>'+UpdateLink+'</sup> : ' + lrcMakeParamDescription(IconName);
  IconLi.appendChild(document.createTextNode(" "));
  IconLi.appendChild(Label);
  if(typeof(lrcIcons[IconName])==="undefined"){
    IconLi.appendChild(document.createTextNode(" "));
    IconLi.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
  }
};

window.lrcMakeCustomIcon = function(Link){
  if(!Link) return;
  var IconName = Link.id.split("IconTestLink_").join("");
  var ImageSpan = document.getElementById("IconTest_"+IconName);
  var IconLi = document.getElementById("LI_"+IconName);
  if(!ImageSpan || !IconLi ) return;
  var Icon = {};
  var Elements = [];
  var InputList = IconLi.getElementsByTagName('input');
  var SelectList = IconLi.getElementsByTagName('select');
  for(var a=0,l=InputList.length;a<l;a++) Elements.push(InputList[a]);
  for(var a=0,l=SelectList.length;a<l;a++) Elements.push(SelectList[a]);
  for(var a=1,l=Elements.length;a<l;a++){
    var Input = Elements[a];
    Icon[Input.name] = Input.value;
  }
  var Title_Alt = ( typeof(lrcMakeText(IconName+"_Title"))==="string" ? lrcMakeText(IconName+"_Title") : "$1" );
  var SRC = (Icon.src ? lrcMakeParam("CommonsURL")+Icon.src : "");
  var width = (Icon.width ? Icon.width : 14);
  var height = (Icon.height ? Icon.height : width);
  Icon.height = height;
  var HTML = ''
  if(Icon.type == "sup_img" || Icon.type == "1"){ Icon.type = 1; HTML += '<sup>'; }
  if(Icon.type == "sub_img" || Icon.type == "2"){ Icon.type = 2; HTML += '<sub>'; }
  if(Icon.type == "img") Icon.type = 0;
  HTML += '<img id="'+IconName+'" '
        + 'src="'+SRC+'" '
        + 'width="'+width+'" '
        + 'height="'+height+'" '
        + 'title="'+Title_Alt+'" '
        + 'alt="'+Title_Alt+'" />'
  if(Icon.type == 1) HTML += '</sup>';
  if(Icon.type == 2) HTML += '</sub>';
  if(Icon.type == -1) HTML = '';
  ImageSpan.innerHTML = HTML;
};

window.LiveRC_ManageParams_AddNewIcon_CreateAddButton = function(){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_lrcIcons");
  if(!Fieldset) return;
  var VariableUl = Fieldset.getElementsByTagName('ul')[0];
  if(!VariableUl) return;
  var P = document.createElement('li');
  var func = 'LiveRC_ManageParams_AddNewIcon_CreateForm(this);'
  P.innerHTML = '<a id="AddParam_lrcIcons" href="javascript:;" onClick="'+func+'" '
              + 'title="'+lrcMakeText("AddParamLineButton_Title")+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
  VariableUl.appendChild(P);
};

window.LiveRC_ManageParams_AddNewIcon_CreateForm = function(Link){
  var ParentLi = Link.parentNode;
  var Li = document.createElement('li');
  lrcaddCustomizableClasses(Li, "ParamMenuLi");
  var IDLabel = document.createElement('label');
  IDLabel.setAttribute('for', "id");
  IDLabel.innerHTML = lrcMakeText("CreateNewIcon_ID");
  Li.appendChild(IDLabel);
  var IDInput = document.createElement('input');
  IDInput.type = "text";
  IDInput.value = "";
  IDInput.name = "id";
  Li.appendChild(IDInput);
  Li.appendChild(document.createTextNode(" "));
  var TextLabel = document.createElement('label');
  TextLabel.setAttribute('for', "tooltip");
  TextLabel.innerHTML = lrcMakeText("CreateNewIcon_title")+" ("+lrcMakeParam("Language")+")";
  Li.appendChild(TextLabel);
  var TextInput = document.createElement('input');
  TextInput.type = "text";
  TextInput.value = "";
  TextInput.name = "tooltip";
  Li.appendChild(TextInput);
  Li.appendChild(document.createTextNode(" "));
  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  OKInput.onclick = function(){ LiveRC_ManageParams_AddNewIcon_CheckForm(this); return false;};
  OKInput.onselect = function(){ LiveRC_ManageParams_AddNewIcon_CheckForm(this); return false;};
  Li.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  CancelInput.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;};
  CancelInput.onselect = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;};
  Li.appendChild(CancelInput);
  ParentLi.parentNode.insertBefore(Li, ParentLi);
};

window.LiveRC_ManageParams_AddNewIcon_CheckForm = function(OKInput){
  var Li = OKInput.parentNode;
  var Inputs = Li.getElementsByTagName('input');
  var CheckedParams = [];
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "text") continue;
    var InputName = Input.name;
    var InputValue = Input.value;
    var Label = Input.previousSibling.innerHTML;
    if(!InputValue){
      LiveRC_alert(lrcMakeText("CreateNewIcon_InputEmpty").split("$1").join("<b>"+Label+"</b>"));
      return;
    }
    CheckedParams[InputName] = InputValue;
  }
  var ID = CheckedParams["id"];
  var Tooltip = CheckedParams["tooltip"];
  var Desc = lrcMakeText("CreateNewIcon_DescTemplate").split("$1").join(Tooltip);
  var Form = document.getElementById("LiveRC_ParamMenuForm");
  if(!Form) return;
  var ExistingLi = getElementWithId("LI_"+ID, 'li', Form);
  var ExistingLiBis = getElementWithId("LI_Desc"+ID, 'li', Form);
  if(ExistingLi || ExistingLiBis){
      LiveRC_alert(lrcMakeText("CreateNewText_IDExists").split("$1").join(ID));
      return;
  }
  var RunFonctionWithExistingTitle = function(){
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), lrcMakeText(ID+"_Title"));
    LiveRC_ManageParams_AddNewText_AddNewIconLi(ID);
    Li.parentNode.removeChild(Li);
  };
  var RunFonctionWithNewTitle = function(){
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID+"_Title"), Desc);
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), Tooltip);
    LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedTexts", (ID+"_Title"), Tooltip);
    LiveRC_ManageParams_AddNewText_AddNewIconLi(ID);
    Li.parentNode.removeChild(Li);
  };
  var ExistingLiTer = getElementWithId("LI_"+ID+"_Title", 'li', Form);
  if(ExistingLiTer){
    var ConfirmText = '<ul>'+lrcMakeText("CreateNewIcon_TitleExists").split("$1").join("<li>"+lrcMakeText(ID+"_Title")+"</li>")+"</ul>";
    LiveRC_confirm(ConfirmText, RunFonctionWithExistingTitle);
  }else{
    RunFonctionWithNewTitle();
  }
};

window.LiveRC_ManageParams_AddNewText_AddNewIconLi = function(ID){
  Custom_lrcIcons[ID] = {"type":0,"src":"thumb/0/00/LiveRC-anim.gif/14px-LiveRC-anim.gif","width":14,"height":14};
  var FakeIconArray = [];
  FakeIconArray[ID] = {"type":1,"src":"","width":1,"height":1};
  LiveRC_ManageParams_Fill(FakeIconArray, "lrcIcons", false);
  var IconLi = LiveRC_ManageParams_CreateLiFromParam(LiveRC_Config["LiveRCcustomParams"]["lrcIcons"][ID]);
  var IconFieldset = document.getElementById('LiveRC_OptionsContent_lrcIcons');
  var AllLis = IconFieldset.getElementsByTagName('li');
  var TheLi = false;
  for(var a=0,l=AllLis.length;a<l;a++){
    var ThisLi = AllLis[a];
    if(lrcHasClass(ThisLi, "RealParamMenuLi")) TheLi = ThisLi;
  }
  if(TheLi){
    TheLi.parentNode.insertBefore(IconLi, TheLi.nextSibling);
    var IconTypeOptions = [{value:"-1",text:"no"},{value:"0",text:"img"},{value:"1",text:"sup"},{value:"2",text:"sub"}];
    var InputToTransform = [];
    InputToTransform["type"] = IconTypeOptions;
    LiveRC_ManageParams_CheckInputsToTransformInThisNode(InputToTransform, IconLi);
    LiveRC_ManageParams_AddIconDescription(IconLi);
  }
};

/* </source>

====== Modifications spéciales des onglets de textes ======

<source lang=javascript> */

//  Ajoute des boutons pour switcher entre les traductions dans les variables textuelles + descriptions

window.LiveRC_ManageParams_AddTextTranslationsLangToggleAndDescriptions = function(){
  var Variables = ["lrcTranslatedTexts", "lrcTranslatedParamDesc"];
  for(var v=0,vlen=Variables.length;v<vlen;v++){
    var Variable = Variables[v];
    var Fieldset = document.getElementById("LiveRC_OptionsContent_"+Variable);
    if(!Fieldset) return;
    var Lis = Fieldset.getElementsByTagName('li');
    for(var a=0,l=Lis.length;a<l;a++){
      LiveRC_ManageParams_AddTextTranslationsAndDescription(Lis[a], Variable);
    }
    var ActionsButtons = lrcGetElementsByClass("ActionButtons", Fieldset, "p")[0];
    if(ActionsButtons){
      var Span = document.createElement('span');
      lrcAddClass(Span, "LangToggleButtons");
      var SelectedInputIndex = 0;
      for(var a=0,l=LiveRC_Config["SupportedLanguages"].length;a<l;a++){
        var lang = LiveRC_Config["SupportedLanguages"][a];
        var Display = ((LiveRC_Config["AvailableLanguages"].indexOf(lang)!=-1) ? '' : 'display:none;');
        var Button = document.createElement('input');
        Button.className = "LangToggleButton_" + Variable;
        Button.type = "button";
        Button.value = lang;
        Button.title = LiveRC_Config["MediawikiLanguages"][lang];
        Button.onclick = function(){ LiveRC_ManageParams_ToggleTextTranslations(this); };
        Button.onselect = function(){ LiveRC_ManageParams_ToggleTextTranslations(this); };
        Span.appendChild(Button);
        if(lang == lrcMakeParam("Language")){
          SelectedInputIndex = a;
          Button.setAttribute("style", "font-weight:bold;padding:0;color:darkGreen;text-decoration:underline;");
        }else{
          Button.setAttribute("style", "font-weight:bold;padding:0;color:darkGreen;"+Display);
        }
      }
      ActionsButtons.appendChild(document.createTextNode(" • • • "));
      ActionsButtons.appendChild(Span);
      var Inputs = Span.getElementsByTagName('input');
      for(var a=0,l=Inputs.length;a<l;a++){
        if(a!=SelectedInputIndex) LiveRC_ManageParams_ToggleTextTranslations(Inputs[a]);
      }
    }
  }
};

window.LiveRC_ManageParams_AddTextTranslationsAndDescription = function(Li, Variable){
  var varName = Li.getElementsByTagName('input')[0];
  if(varName){
    varName = varName.value;
    var Label = document.createElement('label');
    lrcAddClass(Label, "Texts_Label");
    Label.innerHTML = " = " + lrcMakeParamDescription(varName);
    Li.appendChild(document.createTextNode(" "));
    Li.appendChild(Label);
    try{
      var CustomText;
      eval('CustomText = lrcEscapeStr('+Variable+'['+lrcEscapeStr(varName)+']);');
      if(typeof(CustomText)==="undefined"){
        Li.appendChild(document.createTextNode(" "));
        Li.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
      }
   }catch(e){
      lrcDisplayDebug("Error on LiveRC_ManageParams_AddTextTranslationsAndDescription : " + Variable +" "+varName, false, true); // ###
   };
  }
};

window.LiveRC_ManageParams_ToggleTextTranslations = function(input){
  if(!input) return;
  var Lang = input.value;
  if(Lang == lrcMakeParam("Language")) return;
  var Variable = input.className.split("LangToggleButton_").join("");
  var Fieldset = document.getElementById("LiveRC_OptionsContent_"+Variable);
  if(!Fieldset) return;
  var Display = "";
  if(input.style.color == "red"){
    input.style.color = "darkGreen";
  }else{
    input.style.color = "red";
    Display = "none";
  }
  var Inputs = Fieldset.getElementsByTagName("input");
  for(var i=0,ilen=Inputs.length;i<ilen;i++){
    var ThisInput = Inputs[i];
    if(ThisInput.type != "text") continue;
    var InputName = ThisInput.name;
    if(InputName != Lang) continue;
    if(LiveRC_Config["SupportedLanguages"].indexOf(InputName)==-1) continue;
    var Span = ThisInput.parentNode;
    while(Span && !lrcHasClass(Span,"ParamMenuLiElement")){ Span = Span.parentNode; if(!Span) break; }
    if(!Span || !lrcHasClass(Span,"ParamMenuLiElement")) continue;
    Span.style.display = Display;
  }
};

window.LiveRC_ManageParams_AddNewText_CreateAddButton = function(){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_lrcTranslatedTexts");
  if(!Fieldset) return;
  var VariableUl = Fieldset.getElementsByTagName('ul')[0];
  if(!VariableUl) return;
  var P = document.createElement('li');
  var func = 'LiveRC_ManageParams_AddNewText_CreateForm(this);'
  P.innerHTML = '<a id="AddParam_lrcTranslatedTexts" href="javascript:;" onClick="'+func+'" '
              + 'title="'+lrcMakeText("AddParamLineButton_Title")+'" >'+lrcMakeText("AddParamLineButton_Text")+'</a>';
  VariableUl.appendChild(P);
};

window.LiveRC_ManageParams_AddNewText_CreateForm = function(Link){
  var ParentLi = Link.parentNode;
  var Li = document.createElement('li');
  lrcaddCustomizableClasses(Li, "ParamMenuLi");

  var IDLabel = document.createElement('label');
  IDLabel.setAttribute('for', "id");
  IDLabel.innerHTML = lrcMakeText("CreateNewText_ID")+" ";
  Li.appendChild(IDLabel);
  var IDInput = document.createElement('input');
  IDInput.type = "text";
  IDInput.value = "";
  IDInput.name = "id";
  Li.appendChild(IDInput);
  Li.appendChild(document.createTextNode(" "));

  var TextLabel = document.createElement('label');
  TextLabel.setAttribute('for', "text");
  TextLabel.innerHTML = lrcMakeText("CreateNewText_text")+" ("+lrcMakeParam("Language")+") ";
  Li.appendChild(TextLabel);
  var TextInput = document.createElement('input');
  TextInput.type = "text";
  TextInput.value = "";
  TextInput.name = "text";
  Li.appendChild(TextInput);
  Li.appendChild(document.createTextNode(" "));

  var DescLabel = document.createElement('label');
  DescLabel.setAttribute('for', "desc");
  DescLabel.innerHTML = lrcMakeText("CreateNewText_desc")+" ("+lrcMakeParam("Language")+") ";
  Li.appendChild(DescLabel);
  var DescInput = document.createElement('input');
  DescInput.type = "text";
  DescInput.value = "";
  DescInput.name = "desc";
  Li.appendChild(DescInput);
  Li.appendChild(document.createTextNode(" "));

  var OKInput = document.createElement('input');
  OKInput.type = "button";
  OKInput.value = lrcMakeText("OK");
  OKInput.onclick = function(){ LiveRC_ManageParams_AddNewText_CheckForm(this); return false;};
  OKInput.onselect = function(){ LiveRC_ManageParams_AddNewText_CheckForm(this); return false;};
  Li.appendChild(OKInput);
  var CancelInput = document.createElement('input');
  CancelInput.type = "button";
  CancelInput.value = lrcMakeText("Cancel");
  CancelInput.onclick = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;};
  CancelInput.onselect = function(){ LiveRC_ManageParams_DeleteThisParam(this); return false;};
  Li.appendChild(CancelInput);
  ParentLi.parentNode.insertBefore(Li, ParentLi);
};

window.LiveRC_ManageParams_AddNewText_CheckForm = function(OKInput){
  var Li = OKInput.parentNode;
  var Inputs = Li.getElementsByTagName('input');
  var CheckedParams = [];

  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "text") continue;
    var InputName = Input.name;
    var InputValue = Input.value;
    var Label = Input.previousSibling.innerHTML;
    if(!InputValue){
      LiveRC_alert(lrcMakeText("CreateNewText_InputEmpty").split("$1").join("<b>"+Label+"</b>"));
      return;
    }
    CheckedParams[InputName] = InputValue;
  }
  var ID = CheckedParams["id"];
  var Text = CheckedParams["text"];
  var Desc = CheckedParams["desc"];
  var Form = document.getElementById("LiveRC_ParamMenuForm");
  if(!Form) return;
  var ExistingLi = getElementWithId("LI_"+ID, 'li', Form);
  var ExistingLiBis = getElementWithId("LI_Desc"+ID, 'li', Form);
  if(ExistingLi || ExistingLiBis){
      LiveRC_alert(lrcMakeText("CreateNewText_IDExists").split("$1").join(ID));
      return;
  }
  LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedParamDesc", ("Desc"+ID), Desc);
  LiveRC_ManageParams_AddNewText_AddNewTextLi("lrcTranslatedTexts", ID, Text);
  Li.parentNode.removeChild(Li);
};

window.LiveRC_ManageParams_AddNewText_AddNewTextLi = function(Variable, ID, Text){
  var TextArray = {};
  TextArray[ID] = [];
  var FakeArray = {};
  FakeArray[ID] = [];
  var ExplodedArray = [];
  var FakeExplodedArray = [];
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    TextArray[ID][Lang] = Text;
    FakeArray[ID][Lang] = "";
    ExplodedArray.push(lrcEscapeStrHTML(Lang)+':'+lrcEscapeStrHTML(Text));
    FakeExplodedArray.push(lrcEscapeStrHTML(Lang)+':'+'""');
  }
  eval( "Custom_"+Variable+'[\"'+ID+'\"] = {'+ExplodedArray.join(",")+'};');
  eval( Variable+'[\"'+ID+'\"] = {'+FakeExplodedArray.join(",")+'};');
  LiveRC_ManageParams_Fill(FakeArray, Variable, false);
  var TextLi = LiveRC_ManageParams_CreateLiFromParam(LiveRC_Config["LiveRCcustomParams"][Variable][ID]);

  var TextFieldset = document.getElementById('LiveRC_OptionsContent_'+Variable);
  var AllLis = TextFieldset.getElementsByTagName('li');
  var TheLi = false;
  for(var a=0,l=AllLis.length;a<l;a++){
    var ThisLi = AllLis[a];
    if(lrcHasClass(ThisLi, "RealParamMenuLi")) TheLi = ThisLi;
  }
  if(TheLi){
    TheLi.parentNode.insertBefore(TextLi, TheLi.nextSibling);
    LiveRC_ManageParams_UpdateTranslationToggleStates(Variable, TextLi);
    LiveRC_ManageParams_AddTextTranslationsAndDescription(TextLi, Variable);
  }
};

window.LiveRC_ManageParams_UpdateTranslationToggleStates = function(VariableName, Li){
  var Fieldset = document.getElementById("LiveRC_OptionsContent_"+VariableName);
  if(!Fieldset) return;
  var ToggleSates = LiveRC_ManageParams_UpdateTranslationToggleStates_GetLangStates(Fieldset);
  if(!ToggleSates) return;
  var Spans =  lrcGetElementsByClass("ParamMenuLiElement", Li, "span");
  for(var a=0,l=Spans.length;a<l;a++){
    var Label = Spans[a].getElementsByTagName('label')[0];
    if(!Label) continue;
    var SpanLang = Label.innerHTML;
    if(ToggleSates[SpanLang] === true) Spans[a].style.display = "none";
  }
};

window.LiveRC_ManageParams_UpdateTranslationToggleStates_GetLangStates = function(Fieldset){
  if(!Fieldset) return false;
  var LangButtons = lrcGetElementsByClass("LangToggleButtons", Fieldset, "span")[0];
  if(!LangButtons) return false;
  var ToggleStates = [];
  var Inputs = LangButtons.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    ToggleStates[Inputs[a].value] = (Inputs[a].style.color == "red");
  }
  return ToggleStates;
};

/* </source>

====== Onglet de gestion des contacts ======

<source lang=javascript> */

// Création du menu des contacts

window.LiveRC_ManageParams_AddContactListMenu = function(){
    var ContactListUl = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!ContactListUl) ContactListUl = LiveRC_ManageParams_CreateNewListMenu("ContactListLegend", LiveRC_ManageParams_CreateContactButtons(), 3);
    if(!ContactListUl) return;
    while(ContactListUl.firstChild){ ContactListUl.removeChild(ContactListUl.firstChild); }
    var count = 0;
    for (var user in LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"]) {
        if(!LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user]) continue;
        count++;
        var P = document.createElement('li');
        lrcaddCustomizableClasses(P, "ParamMenuLi");
        var Link = lrcGetUserLink(user, false, "contact");
        P.appendChild(Link);
        var RealLink = Link.getElementsByTagName('a')[0];
        RealLink.title = user;
        RealLink.innerHTML = user;
        P.appendChild(document.createTextNode(" "));
        P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
        ContactListUl.appendChild(P);
    }
    if(count<1 && !LiveRC_Config["ListLoaded"]["Watchlist"]){
        var P = document.createElement('li');
        lrcAddClass(P, "error");
        P.style.textAlign = "center";
        P.innerHTML = lrcMakeText("WatchlistNotLoaded");
        ContactListUl.appendChild(P);
    }
};

// Création boutons

window.LiveRC_ManageParams_CreateContactButtons = function(){
    var Paragraphe = document.createElement('p');
    Paragraphe.className = 'ActionButtons';
    var InputAdd = document.createElement('input');
    InputAdd.type = "button";
    InputAdd.value = lrcMakeText("ADDCONTACT");
    InputAdd.onclick = function(){ LiveRC_ManageParams_AddNewContact(); };
    InputAdd.onselect = function(){ LiveRC_ManageParams_AddNewContact(); };
    Paragraphe.appendChild(InputAdd);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_CheckContactListMenu(); };
    InputOK.onselect = function(){ LiveRC_ManageParams_CheckContactListMenu(); };
    Paragraphe.appendChild(InputOK);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    Paragraphe.appendChild(CancelInput);
    return Paragraphe;
};

// Ajout d'un contact

window.LiveRC_ManageParams_AddNewContact = function(Name){
    var Ul  = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!Ul) return;
    var P = document.createElement('li');
    lrcaddCustomizableClasses(P, "ParamMenuLi");
    var Span = document.createElement('span');
    var Input = document.createElement('input');
    Input.type = "text";
    Input.value = (Name ? Name : "");
    Span.appendChild(Input);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_AddThisContact(this); };
    InputOK.onselect = function(){ LiveRC_ManageParams_AddThisContact(this); };
    Span.appendChild(InputOK);
    P.appendChild(Span);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
    Ul.appendChild(P);
    LiveRC_Suggest_AddUserSuggestion({
        "InputNode"       : Input,
        "ListDown"        : true
    });
    Input.focus();
};

// Ajout d'un contact (validation)

window.LiveRC_ManageParams_AddThisContact = function(OK){
    if(!OK) return;
    var Li = OK.parentNode.parentNode;
    if(!Li) return;
    var UserInput = Li.getElementsByTagName('input')[0];
    if(!UserInput) return;
    var user = UserInput.value;
    if(!user) return;
    Li.removeChild(Li.getElementsByTagName('span')[0]);
    var Link = lrcGetUserLink(user, false, "contact");
    Li.insertBefore(Link, Li.firstChild);
    var RealLink = Link.getElementsByTagName('a')[0];
    RealLink.title = user;
    RealLink.innerHTML = user;
};

// Vérification du menu des contacts

window.LiveRC_ManageParams_CheckContactListMenu = function(){
    var Menu = document.getElementById("LiveRC_OptionsContent_ContactListLegendListUL");
    if(!Menu) return;
    var Contacts = lrcGetElementsByClass("contact", Menu, "a");
    var ContactList = [];
    for(var a=0,l=Contacts.length;a<l;a++){
        var userName = Contacts[a].title;
        ContactList.push(userName);
        if(!LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][userName]){
            LiveRC_WatchUser(userName , true);
        }
    }
    for(var user in LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"]){
        if(ContactList.indexOf(user)==-1){
            LiveRC_WatchUser(user, false);
        }
    }
};
/* </source>

====== Onglet de gestion des utilisateurs masqués ======

<source lang=javascript> */

// Création du menu des utilisateurs masqués

window.LiveRC_ManageParams_AddHiddenListMenu = function(){
    var HiddenListUl = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!HiddenListUl) HiddenListUl = LiveRC_ManageParams_CreateNewListMenu("HiddenListLegend", LiveRC_ManageParams_CreateHiddenButtons(), 3);
    if(!HiddenListUl) return;
    while(HiddenListUl.firstChild){ HiddenListUl.removeChild(HiddenListUl.firstChild); }
    var count = 0;
    for (var user in LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"]) {
        if(!LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user]) continue;
        count++;
        var P = document.createElement('li');
        lrcaddCustomizableClasses(P, "ParamMenuLi");
        var Link = lrcGetUserLink(user, false, "hiddenuser");
        P.appendChild(Link);
        var RealLink = Link.getElementsByTagName('a')[0];
        RealLink.title = user;
        RealLink.innerHTML = user;
        P.appendChild(document.createTextNode(" "));
        P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
        HiddenListUl.appendChild(P);
    }
    if(count<1 && !LiveRC_Config["ListLoaded"]["Watchlist"]){
        var P = document.createElement('li');
        lrcAddClass(P, "error");
        P.style.textAlign = "center";
        P.innerHTML = lrcMakeText("WatchlistNotLoaded");
        HiddenListUl.appendChild(P);
    }
};

// Création boutons

window.LiveRC_ManageParams_CreateHiddenButtons = function(){
    var Paragraphe = document.createElement('p');
    Paragraphe.className = 'ActionButtons';
    var InputAdd = document.createElement('input');
    InputAdd.type = "button";
    InputAdd.value = lrcMakeText("ADDHIDDEN");
    InputAdd.onclick = function(){ LiveRC_ManageParams_AddNewHidden(); };
    InputAdd.onselect = function(){ LiveRC_ManageParams_AddNewHidden(); };
    Paragraphe.appendChild(InputAdd);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_CheckHiddenListMenu(); };
    InputOK.onselect = function(){ LiveRC_ManageParams_CheckHiddenListMenu(); };
    Paragraphe.appendChild(InputOK);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    Paragraphe.appendChild(CancelInput);
    return Paragraphe;
};

// Ajout d'un utilisateur masqué

window.LiveRC_ManageParams_AddNewHidden = function(Name){
    var Ul  = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!Ul) return;
    var P = document.createElement('li');
    lrcaddCustomizableClasses(P, "ParamMenuLi");
    var Span = document.createElement('span');
    var Input = document.createElement('input');
    Input.type = "text";
    Input.value = (Name ? Name : "");
    Span.appendChild(Input);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_AddThisHidden(this); };
    InputOK.onselect = function(){ LiveRC_ManageParams_AddThisHidden(this); };
    Span.appendChild(InputOK);
    P.appendChild(Span);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteUserLink());
    Ul.appendChild(P);
    LiveRC_Suggest_AddUserSuggestion({
        "InputNode"       : Input,
        "ListDown"        : true
    });
    Input.focus();
};

// Ajout d'un utilisateur masqué (validation)

window.LiveRC_ManageParams_AddThisHidden = function(OK){
    if(!OK) return;
    var Li = OK.parentNode.parentNode;
    if(!Li) return;
    var UserInput = Li.getElementsByTagName('input')[0];
    if(!UserInput) return;
    var user = UserInput.value;
    if(!user) return;
    Li.removeChild(Li.getElementsByTagName('span')[0]);
    var Link = lrcGetUserLink(user, false, "hiddenuser");
    Li.insertBefore(Link, Li.firstChild);
    var RealLink = Link.getElementsByTagName('a')[0];
    RealLink.title = user;
    RealLink.innerHTML = user;
};

// Vérification du menu des utilisateurs masqués

window.LiveRC_ManageParams_CheckHiddenListMenu = function(){
    var Menu = document.getElementById("LiveRC_OptionsContent_HiddenListLegendListUL");
    if(!Menu) return;
    var Hiddens = lrcGetElementsByClass("hiddenuser", Menu, "a");
    var HiddenList = [];
    for(var a=0,l=Hiddens.length;a<l;a++){
        var userName = Hiddens[a].title;
        HiddenList.push(userName);
        if(!LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][userName]){
            LiveRC_HideUser(userName , true);
        }
    }
    for(var user in LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"]){
        if(HiddenList.indexOf(user)==-1){
            LiveRC_HideUser(user, false);
        }
    }
};

/* </source>

====== Onglet de gestion des pages masquées ======

<source lang=javascript> */

// Création du menu des pages masquées

window.LiveRC_ManageParams_AddHiddenPagesListMenu = function(){
    var HiddenListUl = document.getElementById("LiveRC_OptionsContent_HiddenPagesListLegendListUL");
    if(!HiddenListUl) HiddenListUl = LiveRC_ManageParams_CreateNewListMenu("HiddenPagesListLegend", LiveRC_ManageParams_CreateHiddenPagesButtons(), 3);
    if(!HiddenListUl) return;
    while(HiddenListUl.firstChild){ HiddenListUl.removeChild(HiddenListUl.firstChild); }
    var count = 0;
    for (var title in LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"]) {
        if(!LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title]) continue;
        count++;
        var P = document.createElement('li');
        lrcaddCustomizableClasses(P, "ParamMenuLi");
        var Link = lrcGetPageLink({title:title});
        P.appendChild(Link);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(LiveRC_ManageParams_AddDeletePageLink());
        HiddenListUl.appendChild(P);
    }
    if(count<1 && !LiveRC_Config["ListLoaded"]["Watchlist"]){
        var P = document.createElement('li');
        lrcAddClass(P, "error");
        P.style.textAlign = "center";
        P.innerHTML = lrcMakeText("WatchlistNotLoaded");
        HiddenListUl.appendChild(P);
    }
};

// Création boutons

window.LiveRC_ManageParams_CreateHiddenPagesButtons = function(){
    var Paragraphe = document.createElement('p');
    Paragraphe.className = 'ActionButtons';
    var InputAdd = document.createElement('input');
    InputAdd.type = "button";
    InputAdd.value = lrcMakeText("ADDHIDDENPAGE");
    InputAdd.onclick = function(){ LiveRC_ManageParams_AddNewHiddenPage(); };
    InputAdd.onselect = function(){ LiveRC_ManageParams_AddNewHiddenPage(); };
    Paragraphe.appendChild(InputAdd);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_CheckHiddenPageListMenu(); };
    InputOK.onselect = function(){ LiveRC_ManageParams_CheckHiddenPageListMenu(); };
    Paragraphe.appendChild(InputOK);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    Paragraphe.appendChild(CancelInput);
    return Paragraphe;
};

// Ajout d'une page masquée

window.LiveRC_ManageParams_AddNewHiddenPage = function(Name){
    var Ul  = document.getElementById("LiveRC_OptionsContent_HiddenPagesListLegendListUL");
    if(!Ul) return;
    var P = document.createElement('li');
    lrcaddCustomizableClasses(P, "ParamMenuLi");
    var Span = document.createElement('span');
    var Input = document.createElement('input');
    Input.type = "text";
    Input.value = (Name ? Name : "");
    Span.appendChild(Input);
    var InputOK = document.createElement('input');
    InputOK.type = "button";
    InputOK.value = lrcMakeText("OK");
    InputOK.onclick = function(){ LiveRC_ManageParams_AddThisHiddenPage(this); };
    InputOK.onselect = function(){ LiveRC_ManageParams_AddThisHiddenPage(this); };
    Span.appendChild(InputOK);
    P.appendChild(Span);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeletePageLink());
    Ul.appendChild(P);
    LiveRC_Suggest_AddPageSuggestion({
        "InputNode"       : Input,
        "ListDown"        : true
    });
    Input.focus();
};

// Ajout d'une page masquée (validation)

window.LiveRC_ManageParams_AddThisHiddenPage = function(OK){
    if(!OK) return;
    var Li = OK.parentNode.parentNode;
    if(!Li) return;
    var UserInput = Li.getElementsByTagName('input')[0];
    if(!UserInput) return;
    var title = UserInput.value;
    if(!title) return;
    Li.removeChild(Li.getElementsByTagName('span')[0]);
    var Link = lrcGetPageLink({title:title});
    Li.insertBefore(Link, Li.firstChild);
};

// Vérification du menu des pages masquées

window.LiveRC_ManageParams_CheckHiddenPageListMenu = function(){
    var Menu = document.getElementById("LiveRC_OptionsContent_HiddenPagesListLegendListUL");
    if(!Menu) return;
    var Hiddens = lrcGetElementsByClass("lrc_ArticleLink", Menu, "a");
    var HiddenList = [];
    for(var a=0,l=Hiddens.length;a<l;a++){
        var pagetitle = Hiddens[a].title;
        HiddenList.push(pagetitle);
        if(!LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][pagetitle]){
            LiveRC_HidePage(pagetitle, true);
        }
    }
    for(var page in LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"]){
        if(HiddenList.indexOf(page)==-1){
            LiveRC_HidePage(page, false);
        }
    }
};

/* </source>

====== Onglet de gestion des extensions ======

<source lang=javascript> */

// Création du menu des extensions

window.LiveRC_ManageParams_AddExtensionsMenu = function(){
    var ExtensionUl = LiveRC_ManageParams_CreateNewListMenu("ExtensionsLegend", LiveRC_ManageParams_CreateActionButtons());
    if(!ExtensionUl) return;
    var ExtensionsToHide = LiveRC_GetExtensionsToHide();
    var ExtensionList = Custom_lrcExtensions;
    if(!ExtensionList ||ExtensionList.length==0) ExtensionList = lrcExtensions;
    for(var a=0,l=ExtensionList.length;a<l;a++){
        var ThisExtension = ExtensionList[a];
        if(ExtensionsToHide.indexOf(ThisExtension["name"])!==-1) continue;
        var P = document.createElement('li');
        lrcaddCustomizableClasses(P, "ParamMenuLi");
        var Input = document.createElement('input');
        Input.id = ThisExtension["name"];
        Input.name = ThisExtension["name"];
        Input.type = "checkbox";
        if(LiveRC_Config["UsedLiveRCExtensions"].indexOf(ThisExtension["name"])!==-1) Input.checked = "checked";
        var ExtDesc = ThisExtension[("desc-"+lrcMakeParam("Language"))];
        if(!ExtDesc) ExtDesc = ThisExtension[("desc-"+LiveRC_Config["MediawikiGeneralConfig"]["lang"])];
        if(!ExtDesc) ExtDesc = ThisExtension["desc"];
        var Label = document.createElement('label');
        Label.setAttribute('for', ThisExtension["name"]);
        Label.innerHTML = '<a href="'+ThisExtension["url"]+'" target="_blank" >'+ThisExtension["name"]+'</a>&nbsp;:&nbsp;' +ExtDesc;
        P.appendChild(Input);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(Label);
        ExtensionUl.appendChild(P);
    }
};

/* </source>

====== Onglet de gestion des styles personnels ======

<source lang=javascript> */

// Création du menu des styles


window.LiveRC_ManageParams_AddStylesMenu = function(){
    var StylesUl = LiveRC_ManageParams_CreateNewListMenu("lrcCSSstyles", LiveRC_ManageParams_CreateStylesButtons());
    if(!StylesUl) return;
    LiveRC_ManageParams_FillOpenedStylesMenu();
};

window.LiveRC_ManageParams_FillOpenedStylesMenu = function(){
    var StylesUl = document.getElementById("LiveRC_OptionsContent_lrcCSSstylesListUL");
    if(!StylesUl) return;
    while(StylesUl.firstChild){ StylesUl.removeChild(StylesUl.firstChild); };
    var isInstallPage = (mw.config.get("wgPageName") == LiveRC_Config["InstallationPage"]);
    var personalstylecount = 0;
    for(var a=0,l=lrcCSSstyles.length;a<l;a++){
        var ThisStyle = lrcCSSstyles[a];
        var localtarget = false;
        var customtarget = false;
        var target = ThisStyle.target;
        if(!target){
            target = ThisStyle.localtarget;
            if(target){
                localtarget = true;
            }else{
                target = ThisStyle.customtarget;
                customtarget = true;
            }
        }
        if(!target) continue;
        var customstyle = true, localstyle = false;
        var style = ThisStyle.customstyle;
        if(!style || style === ThisStyle.style){
            style = ThisStyle.localstyle;
            customstyle = false;
            localstyle = true;
            if(!style || style === ThisStyle.style){
                style = ThisStyle.style;
                localstyle = false;
            }
        }
        var styleName = target.replace(/ /g, "_");
        var P = document.createElement('li');
        lrcaddCustomizableClasses(P, "ParamMenuLi");
        var TargetInput = document.createElement('input');
        TargetInput.id = "target-"+styleName;
        TargetInput.name = "target-"+styleName;
        TargetInput.type = "text";
        TargetInput.size = 30;
        TargetInput.value = target;
        if(customtarget || (localtarget && isInstallPage)) TargetInput.style.color = "red";
        else TargetInput.disabled = "disabled";
        var StyleInput = document.createElement('input');
        StyleInput.id = "style-"+styleName;
        StyleInput.name = "style-"+styleName;
        StyleInput.type = "text";
        StyleInput.size = 60;
        StyleInput.value = style;
        if(customstyle || (localstyle  && isInstallPage)) StyleInput.style.color = "red";
        var Label = document.createElement('label');
        Label.setAttribute('for', styleName);
        var StyleDesc = ThisStyle[("desc-"+lrcMakeParam("Language"))];
        if(!StyleDesc) StyleDesc = ThisStyle["desc"];
        if(!StyleDesc){
            personalstylecount++;
            StyleDesc = lrcMakeText("NewPersonalStyle")+" "+personalstylecount;
        }
        Label.innerHTML = StyleDesc;
        if(customtarget || (localtarget && isInstallPage)) Label.style.color = "red";
        P.appendChild(TargetInput);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(StyleInput);
        P.appendChild(document.createTextNode(" "));
        P.appendChild(Label);
        if(customtarget || (localtarget && isInstallPage)){
            P.appendChild(document.createTextNode(" "));
            P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
        }
        StylesUl.appendChild(P);
    }
    StylesUl.appendChild(LiveRC_ManageParams_CreateAddNewStyleButton());
};

window.LiveRC_ManageParams_CreateStylesButtons = function(){
    var ActionP = document.createElement('p');
    ActionP.className = 'ActionButtons';
    var OKInput = document.createElement('input');
    OKInput.type = "button";
    OKInput.value = lrcMakeText("OK");
    OKInput.onclick = function(){ LiveRC_ManageParams_CheckCSSMenu(this); return false;};
    OKInput.onselect = function(){ LiveRC_ManageParams_CheckCSSMenu(this); return false;};
    ActionP.appendChild(OKInput);
    var RAZInput = document.createElement('input');
    RAZInput.type = "button";
    RAZInput.value = lrcMakeText("RAZ");
    RAZInput.onclick = function(){ LiveRC_ManageParams_RAZCSSParams(this); return false;};
    RAZInput.onselect = function(){ LiveRC_ManageParams_RAZCSSParams(this); return false;};
    ActionP.appendChild(RAZInput);
    var CancelInput = document.createElement('input');
    CancelInput.type = "button";
    CancelInput.value = lrcMakeText("Cancel");
    CancelInput.onclick = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    CancelInput.onselect = function(){ LiveRC_ManageParams_CloseMenu(this); return false;};
    ActionP.appendChild(CancelInput);
    return ActionP;
};

window.LiveRC_ManageParams_CreateAddNewStyleButton = function(){
    var P = document.createElement('li');
    var Types = []
    for(var VarIndex in lrcCSSstyles[0]){
        Types.push(lrcEscapeStr(VarIndex)+":"+lrcEscapeStr(""));
    }
    P.innerHTML = '<a id="AddParam_lrcCSSstyles" '
                + 'href="javascript:LiveRC_ManageParams_AddNewStyle('+lrcEscapeStr("lrcCSSstyles")+', {'+Types.join(",")+'});" >(+)</a>';
    return P;
};

// Ajouter une nouvelle ligne

window.LiveRC_ManageParams_AddNewStyle = function(Id, Vars){
    var Link = document.getElementById('AddParam_'+Id);
    if(!Link) return;
    var P = document.createElement('li');
    lrcaddCustomizableClasses(P, "ParamMenuLi");
    var LiId = generateNewID();
    var TargetInput = document.createElement('input');
    TargetInput.id = "target-"+LiId;
    TargetInput.name = "target-"+LiId;
    TargetInput.type = "text";
    TargetInput.size = 30;
    TargetInput.value = "";
    TargetInput.style.color = "red";
    var StyleInput = document.createElement('input');
    StyleInput.id = "style-"+LiId;
    StyleInput.name = "style-"+LiId;
    StyleInput.type = "text";
    StyleInput.size = 60;
    StyleInput.value = "";
    StyleInput.style.color = "red";
    var Label = document.createElement('label');
    Label.setAttribute('for', LiId);
    Label.innerHTML = lrcMakeText("NewPersonalStyle");
    Label.style.color = "red";
    P.appendChild(TargetInput);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(StyleInput);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(Label);
    P.appendChild(document.createTextNode(" "));
    P.appendChild(LiveRC_ManageParams_AddDeleteParamLineLink());
    var Li = Link.parentNode;
    Li.parentNode.insertBefore(P, Li);
};

window.LiveRC_ManageParams_CheckCSSMenu = function(OKInput, page, resumeID){
    if(!page) page = lrcGetNamespaceName(2)+":"+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+".css";
    if(!resumeID) resumeID = "Comment";
    var StyleMenu = document.getElementById("LiveRC_OptionsContent_lrcCSSstyles");
    if(!StyleMenu) return;
    var NewStyles = [];
    NewStyles.push("\n/* ** "+lrcMakeText("Comment") + " ** */\n\n");
    var StyleLis = StyleMenu.getElementsByTagName('li');
    for(var a=0,l=StyleLis.length;a<l;a++){
        var Li = StyleLis[a];
        var Inputs = Li.getElementsByTagName('input');
        var StyleTargetInput = Inputs[0];
        var StyleParamsInput = Inputs[1];
        if(!StyleTargetInput || !StyleParamsInput) continue;
        var StyleTarget = StyleTargetInput.value;
        var StyleParams = StyleParamsInput.value;
        if(!StyleTarget || !StyleParams) continue;
        StyleParams = LiveRC_ManageParams_StripStyle(StyleParams);
        var Stylechanged = true;
        for(var s=0,lens=lrcCSSstyles.length;s<lens;s++){
            if(!Stylechanged) continue;
            var OldStyle = lrcCSSstyles[s];
            var OldStyleTarget = OldStyle.target;
            if(!OldStyleTarget || (OldStyleTarget != StyleTarget)) continue;
            var OldStyleParams = OldStyle.style;
            if(!OldStyleParams) continue;
            if(StyleParams == LiveRC_ManageParams_StripStyle(OldStyleParams) ) Stylechanged = false;
        }
        if(!Stylechanged) continue;
        var StyleNameLabel = Li.getElementsByTagName('label')[0];
        var StyleName = (StyleNameLabel ? StyleNameLabel.innerHTML : "");
        StyleParams = StyleParams.replace(/;$/g, "").split(";");
        var NewStyleText = '/* --- ' + StyleName + ' --- */\n\n'
                         + StyleTarget + ' {\n'
                         + '  ' + StyleParams.join(';\n  ') + ';\n'
                         + '}\n\n\n';
        NewStyles.push(NewStyleText);
    }
    LiveRC_ManageParams_SaveCSSParams(NewStyles, OKInput, page, resumeID);
};

window.LiveRC_ManageParams_RAZCSSParams = function(RAZInput, page, resumeID){
    if(!page) page = lrcGetNamespaceName(2)+":"+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+".css";
    if(!resumeID) resumeID = "Comment";
    var NewStyles = [];
    NewStyles.push("\n/* ** "+lrcMakeText("Comment") + " ** */\n\n");
    LiveRC_ManageParams_SaveCSSParams(NewStyles, RAZInput, page, resumeID);
};

window.LiveRC_ManageParams_SaveCSSParams = function(NewStyles, Input, page, resumeID){
    var Menu = document.getElementById("LiveRC_OptionsContent_lrcCSSstyles");
    if(Input) Input.disabled = "disabled";
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(!P){
        P = document.createElement('p');
        P.id = "LiveRC_ParamMenuRunning";
        Menu.insertBefore(P,Menu.firstChild);
    }
    if(P){
        P.innerHTML = lrcMakeText("EditRunning").split("$1").join(page)
                    + '<span style="text-decoration:blink;">…</span>';
    }
    wpajax.http({ url: lrcGetUglyPageURL(page, '&action=edit'),
                onSuccess: LiveRC_ManageParams_SaveCSSParamsRunning, newtext:NewStyles.join(""), input:Input,page:page,resumeID:resumeID});
};


window.LiveRC_ManageParams_SaveCSSParamsRunning = function(Req, data){
    var page = data.page;
    var resumeID = data.resumeID;
    var Temp = document.createElement('div');
    Temp.id = "TempDiv";
    Temp.style.display = "none";
    document.body.insertBefore(Temp, document.body.firstChild);
    Temp.innerHTML = Req.responseText;
    var Textarea = getElementWithId("wpTextbox1", 'textarea', Temp);
    Textarea.value = data.newtext + "\n/* {{"+LiveRC_Config["CustomCatTemplate"] +"}} */\n";
    getElementWithId("wpSummary", 'input', Temp).value = lrcMakeText("RESUMESTART") + lrcMakeText(resumeID);
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML += "<br />"
                     + lrcMakeText("SaveRunning").split("$1").join(page)
                     + '<span style=\"text-decoration:blink;\">…</span>';
    }
    var Editform = getElementWithId("editform", 'form', Temp);
    var action = Editform.action;
    var params = [];
    var Params = getFormParams(Editform);
    for(var Param in Params){
        params.push(Param+"="+encodeURIComponent(Params[Param]));
    }
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST", headers: headers,
                  onSuccess:LiveRC_ManageParams_SaveCSSParamsDone,
                  data: params.join("&"),
                  input:data.input,
                  page:page
    });
    if(Temp) Temp.parentNode.removeChild(Temp);
};

window.LiveRC_ManageParams_SaveCSSParamsDone = function(Req, data){
    var page = data.page;
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML = ""
                    + lrcMakeText("SaveDone").split("$1").join(page)
                    + "<br/>"
                    + '<span class="error">' + lrcMakeText("SaveRefresh") + '</span>'
                    + '<sup>'
                      +  '<a class="LiveRC_ManageParams_SaveParamsRefresh" '
                        +  'href="javascript:;" onclick="LiveRC_ManageParams_SaveParamsRefresh();" '
                        +  'title="'+lrcMakeText("HideRefreshP_TIP")+'" >'
                        + lrcMakeText("HideRefreshP_SHORT")
                      +  '</a>'
                    +  '</sup>';
    }
    if(data.input) data.input.disabled = false;
};

/* </source>

===== Vérification du menu / sauvegarde =====

<source lang=javascript> */

window.LiveRC_ManageParams_CheckMenu = function(Input){
    var Menu = document.getElementById("LiveRC_ParamMenu");
    if(!Menu) return;
    lrcDisableLink(Input);
 // Variables
    var FieldSets = Menu.getElementsByTagName('fieldset');
    for(var b=0,m=FieldSets.length;b<m;b++){
        var ArrayName = FieldSets[b].id.split("LiveRC_OptionsContent_").join("");
        if(!LiveRC_Config["LiveRCcustomParams"][ArrayName]) continue;
        var AddButton = LiveRC_Config["LiveRCcustomParams"][ArrayName]["AddButton"];
        var Lis = FieldSets[b].getElementsByTagName('li');
        for(var a=0,l=Lis.length;a<l;a++){
            var ThisLi = Lis[a];
            if(!lrcHasClass(ThisLi, "RealParamMenuLi")) continue;
            var Inputs = [];
            Inputs.push(ThisLi.getElementsByTagName('input')[0]);
            var ElementSpans = lrcGetElementsByClass("ParamMenuLiElement", ThisLi, "span");
            for(var y=0,z=ElementSpans.length;y<z;y++){
                var ElementSpan = ElementSpans[y];
                var InputList = ElementSpan.getElementsByTagName('input');
                var SelectList = ElementSpan.getElementsByTagName('select');
                for(var S=0,Slen=InputList.length;S<Slen;S++){ Inputs.push(InputList[S]); }
                for(var S=0,Slen=SelectList.length;S<Slen;S++){ Inputs.push(SelectList[S]); }
            }
            if(Inputs.length<2) continue;
            var LiParamName = Inputs[0].value;
            var Type;
            try{
                Type = LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["ValueType"];
            }catch(e){
                Type = "object";
            }
            if(Type=="object"){   // ------------------------- object
                if(typeof(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName])=='undefined'){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName] = {};
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["ValueType"] = "object";
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["AddButton"] = true;
                }
                var NewValue = [];
                for(var i=1,il=Inputs.length;i<il;i++){
                    var Input = Inputs[i];
                    var iName = Input.name;
                    var iValue;
                    if(Input.type && Input.type=="checkbox"){
                        iValue = Input.checked;
                    }else{
                        iValue = Input.value;
                        if(lrcHasClass(Input.parentNode, "ParamMenuLiElement_number")) iValue = parseInt(iValue);
                        if(lrcHasClass(Input.parentNode, "ParamMenuLiElement_regexp")){
                            iValue =  iValue.replace(/^\//, "").replace(/\/(\D)?$/, "");
                            iValue = new RegExp(iValue);
                        }
                    }
                    NewValue[iName] = iValue;
                }
                LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = NewValue;
            }else{                // ------------------------- boolean, number, text
                var Input = Inputs[1];
                if(!Input) continue;
                var InputType = Input.type;
                var InputId = Input.id;
                if(typeof(LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName])=='undefined'){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName] = {};
                }
                if(InputType && InputType=="checkbox"){
                    LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = Input.checked;
                }else{
                    if(lrcHasClass(Input.parentNode, "ParamMenuLiElement_string")) LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = Input.value;
                    if(lrcHasClass(Input.parentNode, "ParamMenuLiElement_number")) LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = parseInt(Input.value);
                    if(lrcHasClass(Input.parentNode, "ParamMenuLiElement_regexp")){
                        var iValue =  Input.value.replace(/^\//, "").replace(/\/(\D)?$/, "");
                        LiveRC_Config["LiveRCcustomParams"][ArrayName][LiParamName]["NewValue"] = new RegExp(iValue);
                    }
                }
            }
        }
    }
// Extensions
    var ExtensionToInstall = [];
    var ExtensionsFieldset = document.getElementById("LiveRC_OptionsContent_ExtensionsLegend");
    var Inputs = ExtensionsFieldset.getElementsByTagName('input');
    var Extensions = lrcExtensions_Custom;
    if(!Extensions || Extensions.length==0) Extensions = Custom_lrcExtensions;
    if(!Extensions || Extensions.length==0) Extensions = lrcExtensions;
    for(var a=0,l=Inputs.length;a<l;a++){
        var iName = Inputs[a].name;
        if(Inputs[a].checked){
            for(var b=0,m=Extensions.length;b<m;b++){
                var ExtName = Extensions[b]["name"];
                if(ExtName==iName) ExtensionToInstall[ExtName] = true;
            }
        }
    }
    LiveRC_ManageParams_CreateNewParamPage(ExtensionToInstall);
};

// Création nouveau script (≠RAZ)

window.LiveRC_ManageParams_CreateNewParamPage = function(ExtensionToInstall){
    var TextVariables = {
        "lrcTranslatedTexts"     : "addCustomTradToTranslatedTexts",
        "lrcTranslatedParamDesc" : "addCustomTradToTranslatedParamDesc"
    };
    var ParamPage = "// "+lrcMakeText("EditCustom")+ "\n";
    var Variables = "\n/* ** "+lrcMakeText("VariableLegend") + " ** */\n\n";
    Variables += "window.LiveRC_getUserCustom = function(){\n  lrcDisplayDebug('getUserCustom');\n\n";
    for(var ArrayName in LiveRC_Config["LiveRCcustomParams"]){
        var ThisArray = LiveRC_Config["LiveRCcustomParams"][ArrayName];
        if(["string","number","boolean","object"].indexOf(Realtypeof(ThisArray))==-1) continue;
        var ParamStyle = "normal";
        var ThisVariableText = "";
        var Desc = lrcMakeParamDescription(ArrayName);
        var ThisVariableValues = [];
        var totalcustom = false;
        var addbutton = false;
        for(var LiParamName in ThisArray){
            var ParamLine = ThisArray[LiParamName];
            if(["string","number","boolean","object","regexp"].indexOf(Realtypeof(ParamLine))==-1) continue;
            var ValueType = ParamLine["ValueType"];
            var DefaultValue = ParamLine["DefaultValue"];
            var OldValue = ParamLine["OldValue"];
            var NewValue = ParamLine["NewValue"];
            var strNewValue = lrcEscapeStrHTML(NewValue);
            var AddButton = ParamLine["AddButton"];
            var AddCustomFunction = ParamLine["AddCustomFunction"];
            var linecustom = false;
            if(ValueType=="object" && AddButton){
                addbutton = true;
                if(Realtypeof(NewValue)=="undefined") continue;
                var ThisLineValues = [];
                for(var valuename in NewValue){
                    var newvaluevalue = NewValue[valuename];
                    var newvaluetype = Realtypeof(newvaluevalue);
                    if(["string","number","boolean","regexp"].indexOf(newvaluetype)==-1) continue;
                    if(newvaluetype=="regexp") newvaluevalue = newvaluevalue.toString();
                    if(newvaluetype=="string") newvaluevalue = lrcEscapeStrHTML(newvaluevalue);
                    if(newvaluetype=="boolean") newvaluevalue = (newvaluevalue ? "true" : "false");
                    if(Realtypeof(NewValue[valuename])!= "undefined") ThisLineValues.push(lrcEscapeStrHTML(valuename)+" : "+newvaluevalue);
                    if(Realtypeof(DefaultValue)=="undefined" || ObjIsDifferent(NewValue[valuename], DefaultValue[valuename])){
                        totalcustom = true;
                    }
                }
                if(ThisLineValues.length>0) ThisVariableValues.push("      { " + ThisLineValues.join(" , ") + " }");
            }else if(ValueType=="object"){
                var ThisLineValues = [];
                for(var valuename in NewValue){
                    var newvaluevalue = NewValue[valuename];
                    var newvaluetype = Realtypeof(newvaluevalue);
                    if(["string","number","boolean","object","regexp"].indexOf(newvaluetype)==-1) continue;
                    if(newvaluetype=="regexp") newvaluevalue = newvaluevalue.toString();
                    if(newvaluetype=="string") newvaluevalue = lrcEscapeStrHTML(newvaluevalue);
                    if(newvaluetype=="boolean") newvaluevalue = (newvaluevalue ? "true" : "false");
                    ThisLineValues.push(lrcEscapeStrHTML(valuename)+" : "+newvaluevalue);
                    if(ObjIsDifferent(NewValue[valuename], DefaultValue[valuename])){
                        linecustom = true;
                    }
                }
                if(linecustom){
                    var ValuesLine = "{ " + ThisLineValues.join(" , ") + " }";
                    if(AddCustomFunction){
                        ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\", " + ValuesLine + ");\n");
                    }else{
                        ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = " + ValuesLine + ";\n");
                    }
                }
            }else if((ValueType=="regexp") && ObjIsDifferent(NewValue, DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\", "+NewValue.toString()+" );\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = "+NewValue.toString()+" ;\n");
                }
            }else if((ValueType=="string") && ObjIsDifferent(NewValue, DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\", "+strNewValue+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = "+strNewValue+";\n");
                }
            }else if((ValueType=="number") && ObjIsDifferent(NewValue, DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\", "+NewValue+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = " + NewValue + ";\n");
                }
            }else if((ValueType=="boolean") && ObjIsDifferent(NewValue, DefaultValue)){
                if(AddCustomFunction){
                    ThisVariableValues.push("    "+AddCustomFunction+"(\""+LiParamName+"\", "+(NewValue ? "true" : "false")+");\n");
                }else{
                    ThisVariableValues.push("    Custom_"+ArrayName+"[\""+LiParamName+"\"] = "+(NewValue ? "true":"false")+";\n");
                }
            }
        }
        if(addbutton && totalcustom){
            if(AddCustomFunction){
                ThisVariableText="    "+AddCustomFunction+"([\n"+ThisVariableValues.join(",\n")+"\n    ]);\n";
            }else{
                ThisVariableText = "    Custom_"+ArrayName + " = [\n" + ThisVariableValues.join(",\n") + "\n    ];\n";
            }
        }else if(!addbutton && ThisVariableValues.length>0){
            ThisVariableText = ThisVariableValues.join("");
        }
        if(ThisVariableText!==""){
            ThisVariableText = "  try{\n" + ThisVariableText + "  }catch(e){ }\n\n";
            Variables += "\n  // -- "+ Desc +" --\n\n" + ThisVariableText;
        }
    }
    LiveRC_Config["BeforeParamPanelSavedHookResult"] = "";
    LiveRC_RunHooks("BeforeParamPanelSaved");
    if(LiveRC_Config["BeforeParamPanelSavedHookResult"]) Variables += LiveRC_Config["BeforeParamPanelSavedHookResult"];
    Variables += "}\n\n";
    try{ eval(Variables); LiveRC_getUserCustom(); }catch(e){ }
    ParamPage += Variables;
    var Extensions = "\n/* ** "+lrcMakeText("ExtensionLegend") + " ** */\n\n";
    var ExtensionList = "  LiveRC_Config['UsedLiveRCExtensions'] = [\n";
    var ExtensionArray = lrcExtensions_Custom;
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = Custom_lrcExtensions;
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = lrcExtensions;
    var ExtensionListArray = [];
    var maxnamelength = 0;
    for(var ArrayName in ExtensionArray){
        var ThisArray = ExtensionArray[ArrayName];
        if(ExtensionToInstall[ThisArray["name"]] === true){
            var ExtDesc = ThisArray[("desc-"+lrcMakeParam("Language"))];
            if(!ExtDesc) ExtDesc = ThisArray[("desc-"+LiveRC_Config["MediawikiGeneralConfig"]["lang"])];
            if(!ExtDesc) ExtDesc = ThisArray["desc"];
            ExtensionListArray.push({name:ThisArray["name"],desc:ExtDesc});
            var namelength = ThisArray["name"].length;
            if(namelength > maxnamelength) maxnamelength = namelength;
        }
    }
    for(var a=0,l=ExtensionListArray.length;a<l;a++){
      var ThisEl = ExtensionListArray[a];
      var whitespaces = "";
      for(var w=0,wlen=(maxnamelength-ThisEl["name"].length);w<wlen;w++){ whitespaces += " "};
      ExtensionList += "    '"+ThisEl["name"]+ "'" + (a<(l-1) ? "," : " ") + whitespaces + " // "+ThisEl["desc"]+"\n";
    }
    Extensions += ExtensionList + "  ];\n\n";
    ParamPage += Extensions;
    LiveRC_ManageParams_UpdateParams(ParamPage, lrcGetNamespaceName(2)+':'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.js');
};

// Création nouveau script (RAZ)

window.LiveRC_ManageParams_RAZParams = function(){
    var ParamPage = "// "+lrcMakeText("Comment")+ "\n";
    LiveRC_ManageParams_UpdateParams(ParamPage, lrcGetNamespaceName(2)+':'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.js');
};

// Édition du script

window.LiveRC_ManageParams_UpdateParams = function(NewPage, PageToEdit, resumeID){
    NewPage = LiveRC_Config["ParamStartComment"] + NewPage + "\n" + LiveRC_Config["ParamEndComment"]
            + "\n// {{"+LiveRC_Config["CustomCatTemplate"] +"}}\n";
    var Menu = document.getElementById("LiveRC_ParamMenuForm");
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(!P){
        P = document.createElement('p');
        P.id = "LiveRC_ParamMenuRunning";
        Menu.insertBefore(P,Menu.firstChild);
    }
    if(P){
        P.innerHTML = lrcMakeText("EditRunning").split("$1").join(PageToEdit)
                    + '<span style="text-decoration:blink;">…</span>';
    }
    wpajax.http({ url: lrcGetUglyPageURL(PageToEdit, '&action=edit'),
                onSuccess: LiveRC_ManageParams_SaveParams, param:NewPage, pagetoedit:PageToEdit, resume:resumeID});
};

// Sauvegarde du script

window.LiveRC_ManageParams_SaveParams = function(Req, data){
    var NewPage = data.param;
    var PageToEdit = data.pagetoedit;
    var resumeID = (data.resume ? data.resume : "Comment");
    var Temp = document.createElement('div');
    Temp.id = "TempDiv";
    Temp.style.display = "none";
    document.body.insertBefore(Temp, document.body.firstChild);
    Temp.innerHTML = Req.responseText;
    var Textarea = getElementWithId("wpTextbox1", 'textarea', Temp);
    Textarea.value = NewPage;
    getElementWithId("wpSummary", 'input', Temp).value = lrcMakeText("RESUMESTART") + lrcMakeText(resumeID);
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P){
        P.innerHTML += "<br />"
                     + lrcMakeText("SaveRunning").split("$1").join(PageToEdit)
                     + '<span style=\"text-decoration:blink;\">…</span>';
    }
    var Editform = getElementWithId("editform", 'form', Temp);
    var action = Editform.action;
    var params = [];
    var Params = getFormParams(Editform);
    for(var Param in Params){
        params.push(Param+"="+encodeURIComponent(Params[Param]));
    }
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST", headers: headers,
                  onSuccess:LiveRC_ManageParams_SaveParamsDone,
                  data: params.join("&"),
                  pagetoedit:PageToEdit
    });
    if(Temp) Temp.parentNode.removeChild(Temp);
};

// Script sauvegardé

window.LiveRC_ManageParams_SaveParamsDone = function(Req, data){
    var PageToEdit = data.pagetoedit;
    RefreshText = lrcMakeText("SaveDone").split("$1").join(PageToEdit)
                  + "<br/>"
                  + '<span class="error">' + lrcMakeText("SaveRefresh") + '</span>'
                  + '<sup>'
                   +  '<a class="LiveRC_ManageParams_SaveParamsRefresh" '
                    +  'href="javascript:;" onclick="LiveRC_ManageParams_SaveParamsRefresh();" '
                    +  'title="'+lrcMakeText("HideRefreshP_TIP")+'" >'
                    + lrcMakeText("HideRefreshP_SHORT")
                   +  '</a>'
                  +  '</sup>';

    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P) P.innerHTML = RefreshText;
    LiveRC_ManageParams_GlobalFill();
};

window.LiveRC_ManageParams_SaveParamsRefresh = function(){
    var P = document.getElementById("LiveRC_ParamMenuRunning");
    if(P) P.parentNode.removeChild(P);
};

/* </source>

==== Création/manipulation des variables personnalisables ====

===== Manipulation des paramètres =====

<source lang="javascript"> */

window.lrcMakeParam = function(ParamID){
  var Param = lrcParams_Custom[ParamID];
  if(typeof(Param)=="undefined") Param = Custom_lrcParams[ParamID];
  if(typeof(Param)=="undefined") Param = lrcParams[ParamID];
  return Param;
};

window.lrcMakeOption = function(OptionID){
  var  Option = lrcOptionMenuValues_Custom[OptionID];
  if(typeof(Option)=="undefined") Option = Custom_lrcOptionMenuValues[OptionID];
  if(typeof(Option)=="undefined") Option = lrcOptionMenuValues[OptionID];
  return Option;
};

window.lrcMakeParamMenuTabs = function(item){
  if(LiveRC_Config["AlwaysShownTabs"].indexOf(item)!=-1) return true;
  var ParamTab = Custom_lstParamMenuTabs[item];
  if(typeof(ParamTab)!=="undefined") return ParamTab;
  return lstParamMenuTabs[item];
};

/* </source>

===== Création/manipulation des textes =====

<source lang="javascript"> */

// Création des textes

window.lrcMakeText = function(TextID){
  var Text = Custom_UnTranslatedTexts[TextID];
  if(typeof(Text)==="string") return Text;
  Text = UnTranslatedTexts[TextID];
  if(typeof(Text)==="string") return Text;
  var Lang = lrcMakeParam("Language");
  if(Custom_lrcTranslatedTexts[TextID] && typeof(Custom_lrcTranslatedTexts[TextID][Lang])==="string") return Custom_lrcTranslatedTexts[TextID][Lang];
  if(lrcTranslatedTexts[TextID] && typeof(lrcTranslatedTexts[TextID][Lang])==="string") return lrcTranslatedTexts[TextID][Lang];
  var DefaultLang = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(lrcTranslatedTexts[TextID] && typeof(lrcTranslatedTexts[TextID][DefaultLang])==="string") return lrcTranslatedTexts[TextID][DefaultLang];
  Text = lrcTexts[TextID];
  if(typeof(Text)==="string") return Text;
  return ("<"+TextID+">").htmlize();
};

// Création du noms des variables

window.lrcMakeParamDescription = function(TextID){
  if(TextID.indexOf("Desc")!==0) TextID = ("Desc"+TextID);
  var Lang = lrcMakeParam("Language");
  if(Custom_lrcTranslatedParamDesc[TextID] && typeof(Custom_lrcTranslatedParamDesc[TextID][Lang])==="string") return Custom_lrcTranslatedParamDesc[TextID][Lang];
  if(lrcTranslatedParamDesc[TextID] && typeof(lrcTranslatedParamDesc[TextID][Lang])==="string") return lrcTranslatedParamDesc[TextID][Lang];
  var DefaultLang = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(lrcTranslatedParamDesc[TextID] && typeof(lrcTranslatedParamDesc[TextID][DefaultLang])==="string") return lrcTranslatedParamDesc[TextID][DefaultLang];
  Text = lrcParamDesc[TextID];
  if(typeof(Text)==="string") return Text;
  return ("<"+TextID+">").htmlize();
};

/* </source>

===== Création des icônes =====

<source lang="javascript"> */
window.lrcMakeIcon = function(ID, Arg){
  if(!Arg) Arg = {};
  if(typeof(lrcIcon[ID])==="string") return lrcIcon[ID];
  var Icon = lrcIcons_Custom[ID];
  if(!Icon) Icon = Custom_lrcIcons[ID];
  if(!Icon) Icon = lrcIcons[ID];
  if(!Icon) return ((typeof(lrcMakeText((ID+"_Title")))==="string" ? lrcMakeText((ID+"_Title")) : "lrcIcons."+ID ) );
  var SRC = (Icon.src ? lrcMakeParam("CommonsURL")+Icon.src : "//upload.wikimedia.org/wikipedia/commons/thumb/0/00/LiveRC-anim.gif/14px-LiveRC-anim.gif");
  var width = (Icon.width ? Icon.width : 14);
  var height = (Icon.height ? Icon.height : width);
  Icon.height = height;
  var Title_Alt = ( typeof(lrcMakeText(ID+"_Title"))==="string" ? lrcMakeText(ID+"_Title") : "$1" );
  var HTML = ''
  if(Arg.before) HTML += Arg.before;
  if(Icon.type == "sup_img" || Icon.type == 1){ Icon.type = 1; HTML += '<sup>'; }
  if(Icon.type == "sub_img" || Icon.type == 2){ Icon.type = 2; HTML += '<sub>'; }
  if(Icon.type == "img") Icon.type = 0;
  HTML += '<img class="'+ID+'" '
        + 'src="'+SRC+'" '
        + 'width="'+width+'" '
        + 'height="'+height+'" '
        + 'title="'+Title_Alt+'" '
        + 'alt="'+Title_Alt+'" />'
  if(Icon.type == 1) HTML += '</sup>';
  if(Icon.type == 2) HTML += '</sub>';
  if(Arg.after) HTML += Arg.after;
  if(Icon.type == -1) HTML = '';
  return HTML;
};

/* </source>

===== Fonctions pour les extensions =====

====== Suppression d'une extension ======

<source lang="javascript"> */

window.LiveRC_DeleteExtension = function(extensionName){
  var index = -1;
  for(var a=0,l=lrcExtensions.length;a<l;a++){
    if(lrcExtensions[a].name == extensionName) index = a;
  }
  if(index>-1) lrcExtensions.splice(index, 1);
};

/* </source>

====== Ajout d'une extension ======

<source lang="javascript"> */

window.LiveRC_AddNewExtension = function(extensionValues){
  if(typeof(extensionValues)!="object") return;
  var NeededValues = ["name","url","desc"];
  for(var a=0,l=NeededValues.length;a<l;a++){
    if(typeof(extensionValues[NeededValues[a]])==="undefined") return;
  }
  var index = -1;
  for(var ext=0,lext=lrcExtensions.length;ext<lext;ext++){
    if(lrcExtensions[ext]["name"] == extensionValues["name"]) index = ext;
  }
  if(index === -1){
    lrcExtensions.push(extensionValues);
    lrcDisplayDebug('Define new extension: '+extensionValues["name"]);
  }
};

/* </source>

====== Masquage d'une extension ======

<source lang="javascript"> */

window.LiveRC_GetExtensionsToHide = function(){
  var ExtToHide = [];
  var ExtensionsArray = [Custom_lrcExtensions, lrcExtensions];
  for(var extA=0,extAlen=ExtensionsArray.length;extA<extAlen;extA++){
    Extensions = ExtensionsArray[extA];
    if(!Extensions || Extensions.length==0) continue;
    for(var ext=0,extlen=Extensions.length;ext<extlen;ext++){
      var RealExtName = Extensions[ext]["name"];
      var neededright = Extensions[ext]["neededright"];
      if(neededright){
        var invert = neededright.indexOf("!")===0;
        if(invert) neededright = neededright.substr(1, neededright.length);
        var hasRight = lrcUserHasRight(neededright);
        var mustShow = ( invert ? !hasRight : hasRight );
        if(!mustShow && ExtToHide.indexOf(RealExtName)===-1) ExtToHide.push(RealExtName);
      }
    }
  }
  return ExtToHide;
};

/* </source>

==== Création de liens ====

<source lang="javascript"> */

window.lrcGetDiffLink = function(rc){
  var title = rc.title;
  var revid = rc.revid;
  var oldid = rc.old_revid;
  var user = rc.user;
  var state = rc.state;
  var escTitle = lrcEscapeStr(title);
  var escUser = lrcEscapeStr(user);
  var diff = "";
  var postdiff = "";
  var diffClose = function(){ };
  var tr1ID1 = rc.pageid;
  if(!tr1ID1) tr1ID1 = rc.id; // filters
  var tr1ID2 = revid;
  if(!tr1ID2) tr1ID2 = rc.cur_revid; // patrol
  var tr1ID = tr1ID1+"_"+tr1ID2;
  if(lrcMakeParam("AutoCloseDiff"))
    diffClose = function(){ supprLigne(tr1ID); };
  if (lrcHasState(state, "NEW")) {
    diff = document.createElement('a');
    diff.className = "lrc_PreviewLink newpageDiffLink";
    diff.href = lrcGetPageURL(title)+'" ';
    diff.onclick = function(){ changeLigne(tr1ID); liveArticle(title,user); diffClose(); return false; };
    diff.title = lrcMakeText("DIFFNEW_TIP");
    diff.innerHTML = lrcMakeText("DIFFNEW_SHORT");
  }else if (lrcHasState(state, "LOG")){
    var type=rc.type;
    if(lrcHasState(state, "ABUSELOG")){
        diff = document.createElement('a');
        diff.className = ( rc.filterrevid ? '' : 'lrc_PreviewLink ')+'abuselogDiffLink';
        diff.href = lrcGetPageURL('Special:AbuseLog/' + revid);
        diff.onclick = function(){ changeLigne(tr1ID); liveFilter('AbuseLog', {details:revid,title:title,user:user,filterrevid:rc.filterrevid,filterid:rc.filter_id}); diffClose(); return false; };
        diff.title = lrcMakeText("DIFFFILTER_TIP");
        diff.innerHTML = lrcMakeText("DIFFFILTER_SHORT");
        if(rc.filterrevid){
          postdiff = document.createElement('span');
          postdiff.appendChild(document.createTextNode(' • '));
          var postdifflink = document.createElement('a');
          postdifflink.className = "lrc_PreviewLink abuselogdiffDiffLink";
          postdifflink.href = lrcGetUglyPageURL(title, '&diff='+rc.filterrevid+'&oldid=prev&unhide=1');
          postdifflink.onclick = function(){ changeLigne(tr1ID); liveDiff(title,rc.filterrevid,'prev'); diffClose(); return false;};
          postdifflink.title = lrcMakeText("DIFF_TIP");
          postdifflink.innerHTML = lrcMakeText("DIFF_SHORT");
          postdiff.appendChild(postdifflink);
        }
    }else if(lrcHasState(state, "REVIEW")){
      diff = document.createElement('a');
      diff.className = "reviewDiffLink";
      diff.href = lrcGetUglyPageURL('Special:Log', '&type=review&user=&page='+encodeURIComponent(title));
      diff.onclick = function(){ changeLigne(tr1ID);liveLog('review',{page:title}); diffClose(); return false; };
      diff.title = getLogTitle(type);
      diff.innerHTML = type.ucFirst();
      if(rc.reviewedrevid && rc.reviewedoldid){
          postdiff = document.createElement('span');
          postdiff.appendChild(document.createTextNode(' • '));
          var postdifflink = document.createElement('a');
          postdifflink.className = "lrc_PreviewLink reviewdiffDiffLink";
          postdifflink.href = lrcGetUglyPageURL(title, '&diff='+rc.reviewedrevid+'&oldid='+rc.reviewedoldid+'&unhide=1');
          postdifflink.onclick = function(){ changeLigne(tr1ID); liveDiff(title,rc.reviewedrevid,rc.reviewedoldid); diffClose(); return false; };
          postdifflink.title = lrcMakeText("DIFF_TIP");
          postdifflink.innerHTML = lrcMakeText("DIFF_SHORT");
          postdiff.appendChild(postdifflink);
      }
    }else if(lrcHasState(state, "CHECKUSER")){
      diff = document.createElement('span');
      diff.className = "checkuserDiffLink";
      diff.title = lrcGetMediawikiMessage("checkuserlog", true);
      diff.innerHTML = "Checkuser";
    }else{
      diff = document.createElement('a');
      diff.className = type+"DiffLink";
      diff.href = lrcGetUglyPageURL('Special:Log', '&type='+type+'&user=&page='+encodeURIComponent(title));
      diff.onclick = function(){ changeLigne(tr1ID);liveLog(type,{page:title}); diffClose(); return false; };
      diff.title = getLogTitle(type);
      diff.innerHTML = type.ucFirst();
    }
  }else{
    if(lrcHasState(state, "EXTERNAL")){ // Wikidata
      if(rc.wikidataitem){
        var WDpath = LiveRC_Config["MediawikiWikibase"]["base"] + LiveRC_Config["MediawikiWikibase"]["articlepath"];
        if(WDpath){
          var params = 'diff='+revid+'&oldid='+oldid+'&unhide=1';
          diff = document.createElement('a');
          diff.className = "externalDiffLink extiw";
          diff.href = WDpath.split("$1").join(rc.wikidataitem) + '?' + params;
          if(lrcMakeParam("InterwikiPreviewEnabled")) diff.onclick = function(){ liveInterwiki('d', rc.wikidataitem, params); return false; };
          diff.target = "_blank";
        }else{
          diff = document.createElement('span');
          diff.className = "externalDiffLink";
        }
      }else{
        diff = document.createElement('span');
        diff.className = "externalDiffLink";
      }
      diff.title = lrcMakeText("DIFFEXTERNAL_TIP");
      diff.innerHTML = lrcMakeText("DIFFEXTERNAL_SHORT");
    }else if(lrcHasState(state, "FLOW")){ // Flow
      diff = document.createElement('a');
      diff.className = "lrc_PreviewLink flowDiffLink";
      diff.href = lrcGetPageURL(title);
      diff.onclick = function(){ changeLigne(tr1ID); liveArticle(title); diffClose(); return false; };
      diff.title = lrcMakeText("FLOW_TIP");
      diff.innerHTML = lrcMakeText("FLOW_SHORT");
    }else{  // simple edit
      diff = document.createElement('a');
      diff.className = "lrc_PreviewLink diffDiffLink";
      diff.href = lrcGetUglyPageURL(title, '&diff='+revid+'&oldid='+oldid+'&unhide=1');
      diff.onclick = function(){ changeLigne(tr1ID); liveDiff(title, revid, oldid); diffClose(); return false; };
      diff.title = lrcMakeText("DIFF_TIP");
      diff.innerHTML = lrcMakeText("DIFF_SHORT");
    }
  }
  var globaldifflink = document.createElement('span');
  try{ globaldifflink.appendChild(diff); }catch(e){ };
  try{ globaldifflink.appendChild(postdiff); }catch(e){ };
  return globaldifflink;
};

window.lrcGetArticleLink = function(rc){
  var user = rc.user;
  var title = rc.title;
  var escTitle = lrcEscapeStr(title);
  var escUser = lrcEscapeStr(user);
  var ns = rc.ns;
  var state = rc.state;
  var preArti = "", arti = "", postArti = "", artiStyle = "", additionnalClasses = [];
// --------------------------------- Icone avant l'article : type de modification
  if(!lrcHasState(state, "THANKS")){
    var PCategories = Custom_categoriestests;
    if(PCategories.length===0) PCategories = categoriestests;
    var Templates = Custom_templatestests;
    if(Templates.length===0) Templates = templatestests;

    var testedStates = [];
    for(var a=0,l=PCategories.length;a<l;a++){
      var ThisState = PCategories[a].state;
      var ThisIcon = PCategories[a].icon;
      if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
        preArti += lrcMakeIcon(ThisIcon, {after:'&nbsp;'});
        testedStates.push(ThisState);
      }
    }
    for(var a=0,l=Templates.length;a<l;a++){
      var ThisState = Templates[a].state;
      var ThisIcon = Templates[a].icon;
      if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
        preArti += lrcMakeIcon(ThisIcon, {after:'&nbsp;'});
        testedStates.push(ThisState);
      }
    }
    for(var tr=0,trlen=LiveRC_Config["TrackingCategories"].length;tr<trlen;tr++){
      if(lrcHasState(state, ("TrackingCategories_"+tr))){
        var Cat = lrcGetMediawikiMessage(LiveRC_Config["TrackingCategories"][tr], true);
        preArti += lrcMakeIcon("TrackingCategoriesIcon", {after:'&nbsp;'}).split("$1").join(Cat);
      }
    }
  }

// --------------------------------- Icone après l'article : type et état de l'article
  if(!lrcHasState(state, "THANKS")){
    if (lrcHasState(state, "LOCK"))
      preArti += lrcMakeIcon("LockIcon", {after:'&nbsp;'});
    else if(lrcHasState(state, "EXTENDEDLOCK"))
      preArti += lrcMakeIcon("ExtendedLockIcon", {after:'&nbsp;'});
    else if(lrcHasState(state, "FULLLOCK"))
      preArti += lrcMakeIcon("FullLockIcon", {after:'&nbsp;'});
    if (ns == 0 && lrcHasState(state, "HOMONYMIE")) {
      additionnalClasses.push(" HomonPageLink");
      preArti += lrcMakeIcon("HomonIcon", {after:'&nbsp;'});
    }
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && !lrcHasState(state, "HOMONYMIE")
      && !lrcHasState(state, "PORTAIL")
      && (ns == 0)
      && lrcMakeParam("GetPageInfos"))
        postArti += '<sup style="color:crimson">'+lrcMakeIcon("NoportalIcon")+'</sup>';
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && (ns == 0)
      && lrcMakeParam("GetPageInfos")){
        if(rc.backlinks < lrcMakeParam("MinBacklinks")){
          var backlinksText = '<span class="backlinkscount">'+rc.backlinks+'</span>';
          postArti += '<sup style="color:crimson">'+lrcMakeIcon("NoBacklinkIcon").split("$1").join(backlinksText)+'</sup>';
        }
        if(rc.links < lrcMakeParam("MinLinks")){
          var linksText = '<span class="linkscount">'+rc.links+'</span>';
          postArti += '<sup style="color:crimson">'+lrcMakeIcon("NoLinkIcon").split("$1").join(linksText)+'</sup>';
        }
    }
    if((!lrcHasState(state, "LOG")||lrcHasState(state, "UPLOAD"))
      && !lrcHasState(state, "REDIRECT")
      && !lrcHasState(state, "CATEGORIZED")
      && (ns == 0 || ns==6)
      && lrcMakeParam("GetPageInfos"))
        postArti += '<sup style="color:crimson">'+lrcMakeIcon("NocatIcon")+'</sup>';
    if(!lrcHasState(state, "LOG")
      && !lrcHasState(state, "REDIRECT")
      && lrcMakeParam("GetPageInfos")
      && (ns == 0)){
        if(lrcHasState(state, "NOLANGLINK")){
          var interwikitext = '<sup style="color:crimson">'+lrcMakeText("NbLanglinkCount_Text")+'</sup>';
          postArti += interwikitext.split("$1").join('<b><span class="iwlinkscount">0</span></b>');
        }else{
          var iw = rc.langlinks;
          var iwlength = iw && iw.length;
          if(iwlength>0){
            var interwikitext = '<sup style="color:DarkGreen">'+lrcMakeText("NbLanglinkCount_Text")+'</sup>';
            var interwikilist = '<b><span class="iwlinkscount">' + iwlength + '</span></b>';
            if(lrcMakeParam("ShowInterwikiList")){
              var InterwikiSelected = lrcMakeParam("InterwikiList");
              var InterwikiSplit = InterwikiSelected.split("|");
              var ShownIWlist = [];
              var HiddenIWlist = [];
              for(var a=0,l=iwlength;a<l;a++){
                var iwlang = iw[a].lang;
                var iwtitle = iw[a].title;
                var iwurl = iw[a].url;
                if(iwlang==LiveRC_Config["MediawikiGeneralConfig"]["lang"]) continue;
                var ThisIWitem = '<a class="extiw" style="font-family:monospace;" '
                               + 'href="'+iwurl+'" target="_blank" '
                               + (lrcMakeParam("InterwikiPreviewEnabled") ? 'onClick="liveInterwiki('+lrcEscapeStr(iwlang)+', '+lrcEscapeStr(iwtitle)+'); return false;" ' : '')
                               + 'title="('+iwlang+') '+iwtitle+'"'
                               + '>('+iwlang+')</a>';
                if(InterwikiSplit.indexOf(iwlang)==-1) HiddenIWlist.push(ThisIWitem);
                else ShownIWlist.push(ThisIWitem);
              }
              interwikilist += '<span"> '+ShownIWlist.join(" ")+' </span>';
              if(HiddenIWlist.length){
                interwikilist += '<span style="display:none;"> '+HiddenIWlist.join(" ")+' </span>'
                               + '<a href="javascript:;" onClick="lrcTogglePreviousSibling(this); return false;"><sup>⇔</sup></a>';
              }
            }
            postArti += interwikitext.split("$1").join(interwikilist);
          }
        }
    }
  }
// --------------------------------- Icone et autres infos après l'article : Log
  if (lrcHasState(state, "MOVE")) {
    postArti = ' '+lrcMakeIcon("MoveIcon", {before:' ',after:'&nbsp;'})
             + '<a '
             + 'href="'+lrcGetPageURL(rc.target_title)+'" '
             + 'onClick="liveArticle('+lrcEscapeStr(rc.target_title)+','+escUser+'); return false;"'
             + 'title="'+rc.target_title+'" '
             + '>'+lrcStripString(rc.target_title, lrcMakeParam("ArticleLengthLimit"))+'</a>'
             + postArti;
  }else if(lrcHasState(state, "REDIRECT")) {
    additionnalClasses.push(" RedirectPageLink");
    postArti += lrcMakeIcon("RedirectIcon", {before:'&nbsp;'});
    postArti += ' <small><sub><a '
              + 'href="'+lrcGetPageURL(rc.redirect)+'" '
              + 'onClick="liveArticle('+lrcEscapeStr(rc.redirect)+','+escUser+');" '
              + '>'+lrcStripString(rc.redirect, lrcMakeParam("ArticleLengthLimit"))+'</a></sub></small>';
  } else if (lrcHasState(state, "UPLOAD")) {
    postArti += lrcMakeIcon("UploadIcon", {before:'&nbsp;'});
    if(rc.action!="upload")   postArti += " <sub>"+rc.action+"</sub>";
    if(rc.dimensions && rc.size) postArti += " <small>"+rc.dimensions+"&nbsp;→&nbsp;"+rc.size+"</small>";
    if(rc.LicenseShortName) postArti += " <small>("+rc.LicenseShortName+")</small>";
  }else if (lrcHasState(state, "IMPORT")){
    postArti += lrcMakeIcon("ImportIcon", {before:'&nbsp;'}) + " <sub>("+rc.action+")</sub>";
  }else if (lrcHasState(state, "NEWUSER")) {
    postArti += lrcMakeIcon("NewUserIcon", {before:'&nbsp;'});
    if(rc.action=="autocreate") postArti += ' <sub>autocreate</sub>';
  }else if (lrcHasState(state, "BLOCK")) {
    postArti += lrcMakeIcon("BlockIcon", {before:'&nbsp;'});
    var blockflags = "";
    if(typeof(rc.flags)==="object"){
      blockflags = [];
      for(var flag in rc.flags){
        blockflags.push('<span title="'+rc.flags[flag]+'">'+flag+'</span>')
      }
      blockflags = blockflags.join(" · ")+" – ";
    }
    postArti += ' <sub><small>'
              + blockflags + (rc.duration ? rc.duration : rc.action)
              + '</small></sub>';
  }else if (lrcHasState(state, "GBBLOCK")){
    postArti += lrcMakeIcon("BlockIcon", {before:'&nbsp;'});
    if(rc.action!="gblock")   postArti + " "+rc.action;
  }else if (lrcHasState(state, "DELETE")) {
    postArti += lrcMakeIcon("DeleteIcon", {before:'&nbsp;'});
    if(rc.action && rc.action!="delete"){
      postArti += ' <sub><small>'
                + rc.action
                + '</small></sub>';
    }
  }else if (lrcHasState(state, "OVERSIGHT")) {
    postArti += lrcMakeIcon("OversightIcon", {before:'&nbsp;'});
    if(rc.action){
      postArti += ' <sub><small>'
                + rc.action.replace(/.*\//g, "")
                + '</small></sub>';
    }
  }else if (lrcHasState(state, "CHECKUSER")) {
    postArti += lrcMakeIcon("CheckUserIcon", {before:'&nbsp;'});
    postArti += ' '+rc.type;
  }else if (lrcHasState(state, "EDUCATIONPROGRAM")) {
    postArti += lrcMakeIcon("EducationProgramIcon", {before:'&nbsp;'});
    postArti += ' <sub><small>'
              + rc.type
              + '</small></sub>';
  }else if (lrcHasState(state, "PROTECT")) {
    postArti += lrcMakeIcon("ProtectIcon", {before:'&nbsp;'})
              + ' <sub><small>'
              + '<span '+(rc.protectionparam ? ' title="'+rc.protectionparam+'"' : '')+'>' + rc.action + '</span>'
              + '</small></sub>';
  }else if(lrcHasState(state, "ABUSEFILTER")){
    postArti += lrcMakeIcon("AbusefilterIcon", {before:'&nbsp;'})+'&nbsp;<sub><small'+(rc.action=="create" ? ' style="color:red;" ' : '')+'>'+rc.action+'</small></sub>';
  }else if(lrcHasState(state, "MANAGETAGS")){
    postArti += lrcMakeIcon("ManagetagsIcon", {before:'&nbsp;'})+'&nbsp;<sub><small'+(rc.action=="create" ? ' style="color:red;" ' : '')+'>'+rc.action+'</small></sub>';
  }else if(lrcHasState(state, "CHANGETAG")){
    postArti += lrcMakeIcon("ChangetagIcon", {before:'&nbsp;'})
              + (rc.addedtags && rc.addedtags.length > 0 ? '&nbsp;<sub><small>+&nbsp;'+rc.addedtags.join(" +&nbsp;")+'</small></sub>' : '')
              + (rc.removedtags && rc.removedtags.length > 0 ? '&nbsp;<sub><small>-&nbsp;'+rc.removedtags.join(" -&nbsp;")+'</small></sub>' : '');
  }else if (lrcHasState(state, "ABUSELOG")){
    postArti += lrcMakeIcon("AbuselogIcon", {before:'&nbsp;'});
  }else if (lrcHasState(state, "USERRIGHTS")){
    postArti += lrcMakeIcon("RightsIcon", {before:'&nbsp;'})+"&nbsp;<sub><small>("+rc.oldrights+"→"+rc.newrights+")</small></sub>";
  }else if (lrcHasState(state, "GBUSERRIGHTS")){
    postArti += lrcMakeIcon("RightsIcon", {before:'&nbsp;'});
  }else if (lrcHasState(state, "RENAMEUSER") || lrcHasState(state, "GBRENAMEUSER")){
    postArti += lrcMakeIcon("RenameuserIcon", {before:'&nbsp;'})+' '
              + '<a '
              + 'href="'+lrcGetPageURL(lrcGetNamespaceName(2)+":"+rc.newuser)+'" '
              + 'onClick="liveArticle('+lrcEscapeStr(lrcGetNamespaceName(2)+":"+rc.newuser)+',' + escUser +'); return false;" '
              + dlbClick + ' style="'+artiStyle+'"'
              + '>'+lrcStripString(lrcGetNamespaceName(2)+":"+rc.newuser, lrcMakeParam("ArticleLengthLimit"))+'</a>';
  }else if (lrcHasState(state, "THANKS")){
    postArti += lrcMakeIcon("ThanksIcon", {before:'&nbsp;'});
  }else if(lrcHasState(state, "MASSMESSAGE")){
    postArti += lrcMakeIcon("MassMessageIcon", {before:'&nbsp;'});
  }else if(lrcHasState(state, "PAGETRIAGE-DELETION")){
    postArti += lrcMakeIcon("PagetriageDeletionIcon", {before:'&nbsp;'});
  }else if(lrcHasState(state, "PAGETRIAGE-CURATION")){
    postArti += lrcMakeIcon("PagetriageCurationIcon", {before:'&nbsp;'});
    var PTtags = rc.pagetriagetags;
    if(PTtags){
      var pagetriagetagsList = "tag : (";
      for(var a=0,l=PTtags.length;a<l;a++){
         pagetriagetagsList += (a==0 ? '' : ' + ') + PTtags[a];
      }
      postArti += ' <small><sub>'+pagetriagetagsList+')</sub></small>';
    }else{
      postArti += ' <small><sub>'+rc.action+'</sub></small>';
    }
  }else if(lrcHasState(state, "REVIEW")){
    postArti += lrcMakeIcon("ReviewIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "STABLE")){
    postArti += lrcMakeIcon("StableIcon", {before:'&nbsp;'});
    var stableparamstitle = "";
    if(rc.stableparams) stableparamstitle = rc.stableparams.join(" - ");
    postArti += ' <span title="'+stableparamstitle+'">' + rc.action + '</span>';
  }else if(lrcHasState(state, "LIQUIDTHREADS")){
    postArti += lrcMakeIcon("LiquidThreadsIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "OAUTH")){
    postArti += lrcMakeIcon("OAuthIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "MOODBAR")){
    postArti += lrcMakeIcon("MoodBarIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "INTERWIKI")){
    postArti += lrcMakeIcon("InterwikiIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.action+'</sub></small>';
  }else if(lrcHasState(state, "PAGETRANSLATION") || lrcHasState(state, "TRANSLATORSANDBOX") || lrcHasState(state, "TRANSLATIONREVIEW") || lrcHasState(state, "NOTIFYTRANSLATORS")){
    postArti += lrcMakeIcon("TranslateIcon", {before:'&nbsp;'});
    postArti += ' <small><sub>'+rc.type+'⇨'+rc.action+'</sub></small>';
  }else if (lrcHasState(state, "FLOW")){
    postArti += lrcMakeIcon("FlowIcon", {before:'&nbsp;'});
  }else if (lrcHasState(state, "EXTERNAL")){
    preArti += lrcMakeIcon("ExternalIcon", {after:'&nbsp;'});
    if(rc.wikidataitem){
      var Path = LiveRC_Config["MediawikiWikibase"]["base"] + LiveRC_Config["MediawikiWikibase"]["articlepath"];
      postArti += ' <sup><small>(<a class="extiw" '
                             + 'href="'+Path.split("$1").join(rc.wikidataitem)+'" '
                             + (lrcMakeParam("InterwikiPreviewEnabled") ? 'onClick="liveInterwiki('+lrcEscapeStr("d")+', '+lrcEscapeStr(rc.wikidataitem)+'); return false;" ' : '')
                             + 'title="'+rc.wikidataitem+'" '
                             + 'target="_blank" '
                             + '>'+rc.wikidataitem+'</a>)</small></sup>';
    }
  }
// --------------------------------- Article
  var dlbClick = function(){ window.open(lrcGetPageURL(title)); return false; };
  if(rc.redlink) additionnalClasses.push(" new");
  var ArticleClass = 'lrc_ArticleLink' + additionnalClasses.join("");
  var ArticleTitle = (rc.redlink ? lrcGetMediawikiMessage("red-link-title", true) : '$1').split("$1").join(title);
  if(lrcHasState(state, "MANAGETAGS")){
    arti = document.createElement('span');
    arti.className = 'lrc_ArticleLink';
    arti.title = rc.tag;
    if(artiStyle) arti.style= artiStyle;
    arti.innerHTML = lrcStripString(rc.tag, lrcMakeParam("ArticleLengthLimit"));
  }else if(lrcHasState(state, "ABUSEFILTER")){
    arti = document.createElement('a');
    var filterid = title.replace(/.*\//g, "");
    arti.href = lrcGetUglyPageURL(title);
    arti.onclick = function(){ liveFilter('AbuseFilter', {wpSearchFilter:filterid}); return false; };
    arti.ondblclick = dlbClick;
    arti.className = 'lrc_ArticleLink';
    arti.title = title;
    if(artiStyle) arti.style= artiStyle;
    arti.innerHTML = lrcStripString(title, lrcMakeParam("ArticleLengthLimit"));
  }else{
    arti = document.createElement('a');
    arti.href = lrcGetPageURL(title);
    arti.onclick = function(){ liveArticle(title, user); return false; };
    arti.ondblclick = dlbClick;
    arti.className= ArticleClass;
    arti.title = ArticleTitle;
    if(artiStyle) arti.style= artiStyle;
    arti.innerHTML = lrcStripString(title, lrcMakeParam("ArticleLengthLimit"));
  }
  var Span = document.createElement('span');
  var Pre = document.createElement('span');
  Pre.className = "preArticleIcons";
  Pre.innerHTML = preArti;
  var Post = document.createElement('span');
  Post.className = "postArticleIcons";
  Post.innerHTML = postArti;
  Span.appendChild(Pre);
  Span.appendChild(arti);
  Span.appendChild(Post);
  return Span;
};

window.lrcGetPageLink = function(rc){
  var additionnalClasses = [];
  var title = rc.title;
  var HTML = document.createElement('a');
  HTML.href = lrcGetPageURL(title);
  HTML.onclick = function(){ liveArticle(title); return false; };
  HTML.title = (rc.redlink ? lrcGetMediawikiMessage("red-link-title", true) : '$1').split("$1").join(title);
  HTML.innerHTML = title;
  if(lrcHasState(rc.state, "REDIRECT")) additionnalClasses.push(" RedirectPageLink");
  if(rc.ns == 0 && lrcHasState(rc.state, "HOMONYMIE")) additionnalClasses.push(" HomonPageLink");
  if(rc.redlink) additionnalClasses.push(" new");
  HTML.className = 'lrc_ArticleLink' + additionnalClasses.join("");
  return HTML;
};

window.lrcGetHistoryLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  var EXT = lrcHasState(rc.state, "EXTERNAL");
  if(!EXT && !lrcGetFlowStatusForAction(title, "history")) return def;
  var HTML = document.createElement('a');
  if(EXT){
    var Path = LiveRC_Config["MediawikiWikibase"]["base"] + LiveRC_Config["MediawikiWikibase"]["articlepath"];
    title = rc.wikidataitem;
    HTML.className = "historyLink extiw";
    HTML.href = Path.split("$1").join(rc.wikidataitem)+'?action=history';
    HTML.onclick = function(){ liveInterwiki('d',rc.wikidataitem,'action=history'); return false; };
  }else{
    HTML.className = "historyLink";
    HTML.href = lrcGetUglyPageURL(title,'&action=history');
    HTML.onclick = function(){ liveHist(title); return false; };
  }
  HTML.title = lrcMakeText("HIST_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("HIST_SHORT");
  return HTML;
};

window.lrcGetEditLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcGetFlowStatusForAction(title, "edit")) return def;
  var ns = getNamespaceInfoFromPage(title);
  if(ns==8 && !lrcUserHasRight('editinterface')) return def;
  var HTML = document.createElement('a');
  HTML.className = "editLink";
  HTML.href = lrcGetUglyPageURL(title,'&action=edit');
  HTML.onclick = function(){ liveEdit(title); return false; };
  HTML.title = lrcMakeText("EDIT_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("EDIT_SHORT");
  return HTML;
};

window.lrcGetMoveLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  var ns = getNamespaceInfoFromPage(title);
  if(ns==14 && !lrcUserHasRight('move-categorypages')) return def;
  else if(ns==6 && !lrcUserHasRight('movefile')) return def;
  else if(ns!=6 && ns!=14 && !lrcUserHasRight("move")) return def;
  if(!lrcGetFlowStatusForAction(title, "move")) return def;
  var HTML = document.createElement('a');
  HTML.className = "moveLink";
  HTML.href = lrcGetPageURL('Special:Movepage/'+title);
  HTML.onclick = function(){ liveMove(title); return false; };
  HTML.title = lrcMakeText("MOVE_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("MOVE_SHORT");
  return HTML;
};

window.lrcGetDeleteLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if (!lrcUserHasRight("delete")) return def;
  if(!lrcGetFlowStatusForAction(title, "delete")) return def;
  var HTML = document.createElement('a');
  HTML.className = "deleteLink";
  HTML.href = lrcGetUglyPageURL(title,'&action=delete');
  HTML.onclick = function(){ liveDelete(title); return false; };
  HTML.title = lrcMakeText("DEL_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("DEL_SHORT");
  return HTML;
};

window.lrcGetProtectLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcUserHasRight("protect") || getNamespaceInfoFromPage(title) == 8) return def;
  if(!lrcGetFlowStatusForAction(title, "protect")) return def;
  var HTML = document.createElement('a');
  HTML.className = "protectLink";
  HTML.href = lrcGetUglyPageURL(title,'&action=protect');
  HTML.onclick = function(){ liveProtect(title); return false; };
  HTML.title = lrcMakeText("PROTECT_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("PROTECT_SHORT");
  return HTML;
};

window.lrcGetStableLink = function(rc, def){
  if(!def) def = "";
  var title = rc.title;
  if(!lrcUserHasRight("stablesettings") || LiveRC_Config["FlagRevProtection"] || LiveRC_Config["FlagRevNamespaces"].indexOf(getNamespaceInfoFromPage(title)) == -1) return def;
  var HTML = document.createElement('a');
  HTML.className = "stableLink";
  HTML.href = lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(title));
  HTML.onclick = function(){ liveStabilization(title); return false; };
  HTML.title = lrcMakeText("STABLE_TIP")+' « '+title+' »';
  HTML.innerHTML = lrcMakeText("STABLE_SHORT");
  return HTML;
};

window.lrcGetWatchersIcon = function(rc, def){
  if(!def) def = "";
  var HTML = def;
  var watchers = rc.watchers;
  if(typeof(watchers)!="undefined"){
    if(lrcUserHasRight('unwatchedpages')){
      watchers = parseInt(watchers);
      if(watchers || watchers === 0) {
        if(watchers === 0){
          HTML = lrcMakeIcon("Watchers0Icon", {after:' – '});
        }else if(watchers < lrcMakeParam("MinYellowWatchers")){
          HTML = lrcMakeIcon("Watchers1Icon", {after:' – '}).split("$1").join(watchers);
        }else if(watchers < lrcMakeParam("MinGreenWatchers")){
          HTML = lrcMakeIcon("Watchers2Icon", {after:' – '}).split("$1").join(watchers);
        }else{
          HTML = lrcMakeIcon("Watchers3Icon", {after:' – '}).split("$1").join(watchers);
        }
      }
    }else{
      if(typeof(watchers)==="string"){
        HTML = lrcMakeIcon("Watchers3Icon", {after:' – '}).split("$1").join(watchers);
      }else{
        HTML = lrcMakeIcon("Watchers1Icon", {after:' – '}).split("$1").join("-");
      }
    }
  }
  var Span = document.createElement('span');
  Span.innerHTML = HTML;
  return Span;
};

window.UserIsIP = function(user){
  var regexpIP4 = /^\d{1,3}\.\d{1,3}.\d{1,3}.\d{1,3}$/;
  var regexpIP6 = /^([0-9a-f]){1,4}(:+([0-9a-f]){1,4}){1,7}$/i;
  if(regexpIP4.exec(user)){
    return "V4";
  }else if(regexpIP6.exec(user)){
    return "V6";
  }else{
    return false;
  }
};

window.lrcGetUserLink = function(user, linkstyle, linkclass){
  var prefix = lrcGetNamespaceName(2)+":";
  var LiveFunction = function(){ liveArticle(prefix+user); };
  if(UserIsIP(user)) {
    prefix = "Special:Contributions/";
    LiveFunction = function(){ liveContrib(user); };
  }
  var blockedUser = (LiveRC_Config["Blocked"].indexOf(user)!=-1);
  var link = document.createElement('a');
  link.className = ( linkclass ? linkclass+" " : "") + "lrc_EditorLink";
  if(linkstyle) link.setAttribute("style",  linkstyle);
  link.href = lrcGetPageURL(prefix + user);
  link.onclick = function(){ LiveFunction(); return false;};
  link.title = prefix + user;
  link.innerHTML = lrcStripString(user, lrcMakeParam("UserLengthLimit"));
  var span = document.createElement('span');
  if(blockedUser){
    span.title = lrcMakeText("BLOCKED");
    span.style.textDecoration = "line-through";
  }
  span.appendChild(link);
  return span;
};

window.lrcGetUserTalkLink = function(rc){
  var user = rc.user;
  var HTML = document.createElement('a');
  HTML.className = "usertalkLink";
  HTML.href = lrcGetPageURL(lrcGetNamespaceName(3)+':'+user);
  HTML.onclick = function(){ liveArticle(lrcGetNamespaceName(3)+':'+user); return false; };
  HTML.title = lrcMakeText("TALK_TIP");
  HTML.innerHTML = lrcMakeText("TALK_SHORT");
  return HTML;
};

window.lrcGetUserContribsLink = function(rc){
  var user = rc.user;
  var HTML = document.createElement('span');
  var Contrib = document.createElement('a');
  Contrib.className = "usercontribLink";
  Contrib.href = lrcGetPageURL('Special:Contributions/'+user);
  Contrib.onclick= function(){ liveContrib(user); return false; };
  Contrib.title = lrcMakeText("CONTRIB_TIP");
  Contrib.innerHTML = lrcMakeText("CONTRIB_SHORT");
  HTML.appendChild(Contrib);
  if (lrcUserHasRight("deletedhistory")) {
    var DeletedContrib = document.createElement('a');
    DeletedContrib.className = "userdeletedcontribLink";
    DeletedContrib.href = lrcGetPageURL('Special:DeletedContributions/'+user);
    DeletedContrib.onclick = function(){ liveDeletedContrib(user); return false; };
    DeletedContrib.title = lrcMakeText("DELETEDCONTRIB_TIP");
    DeletedContrib.innerHTML = lrcMakeText("DELETEDCONTRIB_SHORT");
    HTML.appendChild(DeletedContrib);
  }
  return HTML;
};

window.lrcGetBlockLink = function(rc, def){
  if(!def) def = "";
  if(!lrcUserHasRight("block")) return def;
  var user = rc.user;
  var HTML = document.createElement('a');
  HTML.className = "userblockLink";
  HTML.href = lrcGetPageURL('Special:Blockip/' + user);
  HTML.onclick = function(){ liveBlock(user); return false; };
  HTML.title = lrcMakeText("BLOCK_TIP");
  HTML.innerHTML = lrcMakeText("BLOCK_SHORT");
  return HTML;
};

window.lrcEncode = function(text){
 return encodeURIComponent(text).replace(/%3A/g, ":").replace(/%2F/g, "/");
};

window.lrcGetPageURL = function(page) {
  return mw.config.get('wgServer') + mw.config.get('wgArticlePath').split('$1').join(lrcEncode(page));
};

window.lrcGetUglyPageURL = function(page, params) {
  return mw.config.get('wgServer') + mw.config.get('wgScript') + '?title=' + lrcEncode(page)+ (params ? params : "");
};

window.lrcGetAPIURL = function(params) {
  var Params;
  if(typeof(params) === "string") Params = params;
  if(typeof(params) === "object"){
    Params = [];
    for(var paramname in params){
      var paramvalue = params[paramname];
      if(["string","number"].indexOf(typeof(paramvalue)) != -1) Params.push( paramname + "=" + lrcEncode((""+paramvalue)));
    }
    Params = Params.join("&");
  }
  return mw.config.get('wgServer') + mw.config.get('wgScriptPath') + '/api.php?' + (Params ? Params : "");
};

window.lrcGetOtherPagename = function(page){
  var sotherns = getNamespaceInfoFromPage(page);
  var sotherpn = getNamespaceInfoFromPage(page, "PageName");
  if(sotherns%2==0){
    var sothernsnumber = (sotherns+1);
  }else{
    var sothernsnumber = (sotherns-1);
  }
  var NS = lrcGetNamespaceName(sothernsnumber);
  if(NS===null) return false;
  var sothername = (sothernsnumber == 0 ? sotherpn : lrcGetNamespaceName(sothernsnumber)+":"+sotherpn);
  return sothername;
};

window.lrcDisableLink = function(id) {
  var lnk = document.getElementById(id);
  if(!lnk) return;
  if(!lnk.tagName) return;
  var DisableElementTimer = 2;
  if(lnk.tagName.toLowerCase() == "a"){
    var DisabledLink = document.createElement('a');
    DisabledLink.id = id + "_disabled";
    DisabledLink.title = lnk.title;
    DisabledLink.innerHTML = lnk.innerHTML;
    DisabledLink.href = "javascript:;";
    DisabledLink.style.color = "silver";
    DisabledLink.style.cursor = "default";
    DisabledLink.style.textDecoration = "none";
    lnk.style.display = "none";
    lnk.parentNode.insertBefore(DisabledLink, lnk);
  }else if(lnk.tagName.toLowerCase() == "input" || lnk.tagName.toLowerCase() == "select"){
    lnk.disabled = "disabled";
  }
  setTimeout("lrcEnableLink('"+id+"')", DisableElementTimer*1000);
};

window.lrcEnableLink = function(id, OldHref, OldOnclick, OldColor, OldCursor, OldTextDecoration) {
  var lnk = document.getElementById(id);
  if(!lnk) return;
  if(!lnk.tagName) return;
  var DisableElementTimer = 5;
  if(lnk.tagName.toLowerCase() == "a"){
    var DisabledLink = document.getElementById(id+"_disabled");
    if(!DisabledLink) return;
    DisabledLink.parentNode.removeChild(DisabledLink);
    lnk.style.display = "";
  }else if(lnk.tagName.toLowerCase() == "input" || lnk.tagName.toLowerCase() == "select"){
    lnk.disabled = false;
  }
};

window.lrcToggleNextSibling = function(Link){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
   }else{
      Span.style.display = "none";
   }
};

window.lrcTogglePreviousSibling = function(Link){
   if(!Link) return false;
   var Span = Link.previousSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
   }else{
      Span.style.display = "none";
   }
};

window.lrcCreateToggleLink = function(previous){
   var func = (previous ? lrcTogglePreviousSibling : lrcToggleNextSibling);
   var Link = document.createElement('a');
   Link.href = "javascript:;"
   Link.onclick = function(){ func(this); return false; }
   Link.innerHTML = "±";
   return Link;
};

window.lrcCreateToggleLinkText = function(previous){
   var func = (previous ? "lrcTogglePreviousSibling" : "lrcToggleNextSibling");
   var Link = '<a href="javascript:;" onClick="'+func+'(this); return false;">±</a>';
   return Link;
};

/* </source>

==== Manipulation d'objets <code>String</code> ====

<source lang="javascript"> */


window.lrcEscapeStr = function(str) {
  return "'" + (""+str).replace(/\\/g, '\\\\').replace(/[\\]+n/g, '\\n').replace(/'/g, "\\'").htmlize() + "'";
};
window.lrcEscapeStrHTML = function(str) {
  return "'" + (""+str).replace(/\\/g, '\\\\').replace(/[\\]+n/g, '\\n').replace(/'/g, "\\'") + "'";
};

window.lrcEscapeStrSpecialChars = function(str){
  str = (""+str).replace(/\\/g, '\\');
//  var specialchars = ['w', 'W', 'd', 'D', 's', 'S', 'b', 'B', '0', 'n', 'f', 'r', 't', 'v'];
  var specialchars = ['n'];
  for(var a=0,l=specialchars.length;a<l;a++){
    var char = specialchars[a];
    var reg = new RegExp("\\"+char, "g");
    var matches = str.match(reg);
    if(matches == null) continue;
    for(var m=0,mlen=matches.length;m<mlen;m++){
      str = str.replace(matches[m], '\\'+char);
    }
  }
  return str;
};

// HTMLize
String.prototype.htmlize = function() {
  var chars = ['&','<','>','"'];
  var entities = ['amp','lt','gt','quot'];
  var string = this;
  if(!string) return "";
  for (var i=0; i<chars.length; i++) {
    var regex = new RegExp(chars[i], "g");
    string = string.replace(regex, '&' + entities[i] + ';');
  }
  return string;
};

String.prototype.unhtmlize = function() {
  var entities = ['amp','lt','gt','quot'];
  var chars = ['&','<','>','"'];
  var string = this;
  if(!string) return "";
  for (var i=0; i<entities.length; i++) {
    var regex = new RegExp("&"+entities[i]+";", "g");
    string = string.replace(regex, chars[i]);
  }
  return string;
};

String.prototype.ucFirst = function () {
    return this.substr(0,1).toUpperCase() + this.substr(1,this.length);
};

String.prototype.lcFirst = function () {
    return this.substr(0,1).toLowerCase() + this.substr(1,this.length);
};

window.lrcStripString = function(string, limit){
  if(!limit || string.length<limit) return string;
  return string.substring(0, limit) + "…";
};

window.LiveRC_StripWikitext = function(text){
     if(!text) return '';
     text = text.replace(/\{\{([^#\}\|]*)?\}\}/g, "");
     text = text.replace(/\[\[([^\]\|]*)?\]\]/g, "$1");
     text = text.replace(/\[\[[^\|]*\|([^\]]*)?\]\]/g, "$1");
     text = text.replace(/\{\{#[^\}\|]*\|[^\}\|]*\|([^\}]*)?\}\}/g, "$1");
     return text;
};

/* </source>

==== Manipulation de classes ====

<source lang="javascript"> */

window.lrcHasClass = function(node, className){
    var haystack = node.className;
    if(!haystack) return false;
    if (className === haystack) {
        return true;
    }
    return (" " + haystack + " ").indexOf(" " + className + " ") > -1;
};

window.lrcAddClass = function(node, className) {
    if (lrcHasClass(node, className)) {
        return false;
    }
    var cache = node.className;
    if (cache) {
        node.className = cache + ' ' + className;
    } else {
        node.className = className;
    }
    return true;
};

window.lrcRemoveClass = function(node, className) {
  if (!lrcHasClass(node, className)) {
    return false;
  }
  node.className = node.className.replace(new RegExp('(^|\\s+)'+ className +'($|\\s+)','g'), ' ');
  return true;
};

window.lrcGetElementsByClass = function(searchClass,node,tag) {
  if(node == null) node = document;
  if(tag == null) tag = '';
  return $(node).find(tag+'.'+searchClass).toArray();
};

/* </source>

==== Divers ====

<source lang="javascript"> */

window.isRegExp = function(obj){
    return !!(obj && obj.test && obj.exec && (obj.ignoreCase || obj.ignoreCase === false));
};

window.Realtypeof = function(obj){
 var type = typeof(obj);
 if(isRegExp(obj)) type = "regexp";
 return type;
};

window.ObjIsDifferent = function(objOne, objTwo){
  var typeOne = Realtypeof(objOne), typeTwo = Realtypeof(objTwo);
  if(typeOne==="undefined" || typeTwo==="undefined") return true;
  if(typeOne !== typeTwo) return true;
  switch(typeOne) {
    case 'string':
      return !(objOne === objTwo || lrcEscapeStrSpecialChars(objOne) === objTwo || objOne === lrcEscapeStrSpecialChars(objTwo));
      break;
    case 'boolean':
      return !(objOne === objTwo);
      break;
    case 'regexp':
      return !(objOne.toString() === objTwo.toString());
      break;
    case 'object':
      var equal = true, itemlist = [];
      for(var item in objOne){
        itemlist.push(item);
        var itemvalue = objOne[item];
        if(ObjIsDifferent(itemvalue, objTwo[item])) return true;
      }
      for(var item in objOne){
        if(itemlist.indexOf(item)===-1) return true;
      }
      break;
  }
  return false;
};

window.lrcGetObjectLength = function(obj){
  var l = 0;
  for(var o in obj){
    if(obj.hasOwnProperty(o)){
      l++;
    }
  }
  return l;
};

window.lrcGetObjectIndexes = function(obj){
  var indexes = [];
  for(var o in obj){
    if(obj.hasOwnProperty(o)){
      indexes.push(o);
    }
  }
  return indexes;
};

window.LiveRC_AddPreviewToLinks = function(Links){
  if(!Links || Links.length==0) return;
  for(var a=0,l=Links.length;a<l;a++){
    var ThisLink = Links[a];
    var onclickAdded = false;
    var Target = ThisLink.title.replace(lrcGetMediawikiMessage("red-link-title").split("$1").join(""), "");
    if(!Target || Target === "") Target = ThisLink.innerHTML;
    if(lrcHasClass(ThisLink, "extiw") || lrcHasClass(ThisLink, "external")){
      ThisLink.target = "_blank";
      if(lrcHasClass(ThisLink, "extiw") && lrcMakeParam("InterwikiPreviewEnabled")){
        var Code = getInterwikiInfoFromPage(Target);
        var IWTitle = getInterwikiInfoFromPage(Target, "Page");
        if(Code && IWTitle){
          ThisLink.setAttribute("onClick", "liveInterwiki("+lrcEscapeStr(Code)+", "+lrcEscapeStr(IWTitle)+"); return false;");
          onclickAdded = true;
        }
      }
    }else if(lrcHasClass(ThisLink, "new")){
      ThisLink.setAttribute("onClick", "liveEdit("+lrcEscapeStr(Target)+", '&redlink=1'); return false;");
      onclickAdded = true;
    }else{
      if(Target.indexOf(lrcGetNamespaceName(-1)+":"+lrcGetMediawikiMessage("mycontris")+"/")==0){
        Target = ThisLink.innerHTML;
        ThisLink.setAttribute("onClick", "liveContrib("+lrcEscapeStr(Target)+"); return false;");
        onclickAdded = true;
      }else{
        ThisLink.setAttribute("onClick", "liveArticle("+lrcEscapeStr(Target)+"); return false;");
        onclickAdded = true;
      }
    }
    if(onclickAdded) ThisLink.title = ThisLink.title + lrcMakeText("LIVELINK");
  }
};

window.getElementWithId = function( elementId , elementTagName , elementParentNode ){
      if(!elementParentNode) elementParentNode = document.body;

      if (elementParentNode.getElementById) return elementParentNode.getElementById(elementId);

      var TheElement = false;
      var Elements = elementParentNode.getElementsByTagName(elementTagName);
      var elementcount = 0;
      while(elementcount<Elements.length){
            var Id = Elements[elementcount].getAttribute('id');
            if(Id){
                  if(Id==elementId){
                        TheElement = Elements[elementcount];
                        break;
                  }
            }
            elementcount++;
      }
      if (! TheElement) return null;
      return TheElement;
};

window.generateNewID = function() {
  LiveRC_Config["NextFreeID"]++;
  return "idauto" + LiveRC_Config["NextFreeID"];
};

window.TwoDigitsForNumber = function(num){
  return (num<0 ? '-' : '') + (num < 10 ? (num > -10 ? '0' : '') : '') + (num<0 ? -num : num);
};

window.getTimeTag = function(timestamp){
    return ('<span id="'+timestamp+"--"+generateNewID()+'" class="timetag" title="'+tsToDate(timestamp)+'">'+tsToHhMm(timestamp)+'</span>');
};

window.tsToDate = function(TS){
  var Year = parseInt(TS.substring(0, 4));
  var Month = parseInt(TS.substring(5, 7).replace(/^0/, ""));
  var Day = parseInt(TS.substring(8, 10).replace(/^0/, ""));
  var Hour = parseInt(TS.substring(11, 13).replace(/^0/, ""));
  var Minut = parseInt(TS.substring(14, 16).replace(/^0/, ""));
  var MonthNames = {"1" :"january","2" :"february","3" :"march","4" :"april","5" :"may","6" :"june","7" :"july","8" :"august","9" :"september","10":"october","11":"november","12":"december"};
  var DaysinMonth = {"1" :31,"2" :28,"3" :31,"4" :30,"5" :31,"6" :30,"7" :31,"8" :31,"9" :30,"10":31,"11":30,"12":31};
  if(Year%4==0 && (Year%100!=0 || Year%400==0) ) DaysinMonth[2]=29;
  Hour = Hour+((lrcGetTimeZone() - parseInt(LiveRC_Config["MediawikiGeneralConfig"]["timeoffset"]))/60);
  if(Hour<0){
    Hour = Hour + 24;
    Day = Day-1;
    if(Day == 0){
        Month = Month-1;
        if(Month==0){
          Month = 12;
          Year = Year-1;
        }
        Day = DaysinMonth[Month];
    }
  }else if(Hour>23){
    Hour = Hour - 24;
    Day = Day+1;
    if(Day>DaysinMonth[Month]){
       Day = Day - DaysinMonth[Month];
       Month = Month +1;
       if(Month>12){
         Month = Month-12;
         Year = Year +1;
       }
    }
  }
  var ThisDate = Day+" " + lrcGetMediawikiMessage(MonthNames[Month], true) + " " + Year;
  return ThisDate;
};

window.tsToHhMm = function(timestamp) {
  var tz = lrcGetTimeZone();
  var regex = new RegExp(/^\d\d\d\d-\d\d-\d\dT(\d\d):(\d\d):\d\dZ$/);
  match = regex.exec(timestamp);
  if (!match) {
    return 'xx:xx';
  }
  var tt = (match[1]*60 + match[2]*1 + tz + 1440) % 1440;
  var mm = tt % 60;
  var hh = (tt - mm) / 60 % 24;
  return (TwoDigitsForNumber(hh)+ ':' + TwoDigitsForNumber(mm));
};

window.lrcGetTimeZone = function(){
  var regex = new RegExp(/^([-+])?(\d?\d):?(\d\d)$/);
  var match = regex.exec(lrcMakeParam("TZ"));
  if (!match) {
      return 0;
  }
  var tz = match[2]*60 + match[3]*1;
  tz = match[1] == '-' ? -tz : tz;
  return tz;
};

window.lrcGetArgFromURL = function(URL, Arg){
  if(!URL || !Arg) return false;
  try{
    var Args = decodeURIComponent(URL).split("&");
    for(var a=0,l=Args.length;a<l;a++){
      if(Args[a].indexOf(Arg+"=")==0 || Args[a].indexOf("?"+Arg+"=")!=-1) return Args[a].split("=")[1];
    }
  }catch(e){
    return false;
  }
  return false;
};

window.getInterwikiInfoFromPage = function(Page, ToReturn){
     if(!ToReturn || !Page) ToReturn = false;
     var URL = "";
     var Language = "";
     var LangCode = "";
     var Found = false;
     for(var LC in LiveRC_Config["MediawikiInterwikimap"]){
          if(Found) continue;
          var LCRegExp = new RegExp("^(:)?"+LC+":", "ig");
          var Matches = Page.match(LCRegExp);
          if(Matches!=null && Matches.length == 1){
               var LangItem = LiveRC_Config["MediawikiInterwikimap"][LC];
               URL = LangItem["url"];
               Language = LangItem["language"];
               LangCode = LC;
               Page = Page.replace(LCRegExp, "");
               Found = true;
               continue;
          }
     }
     if(ToReturn==="Page") return Page;
     if(ToReturn==="Language") return Language;
     if(ToReturn==="URL") return URL;
     return LangCode;
};

window.getNamespaceInfoFromPage = function(Page, ToReturn){
     if(!ToReturn || !Page) ToReturn = false;
     var NamespaceNumber = 0;
     var NamespaceName = "";
     var PageName = Page;
     var Found = false;
     for(var NS in LiveRC_Config["MediawikiNamespaces"]){
          if(Found) continue;
          var NamespaceNamesToTest = [lrcGetNamespaceName(NS), lrcGetNamespaceName(NS, true)];
          if(typeof(LiveRC_Config["MediawikiNamespaces"][NS]["aliases"])==="object"){
              for(var a=0,l=LiveRC_Config["MediawikiNamespaces"][NS]["aliases"].length;a<l;a++)
                  NamespaceNamesToTest.push(LiveRC_Config["MediawikiNamespaces"][NS]["aliases"][a]);
          }
          for(var a=0,l=NamespaceNamesToTest.length;a<l;a++){
              if(Found) continue;
              var ThisNamespaceName = NamespaceNamesToTest[a];
              if(ThisNamespaceName==="") continue;
              var NamespaceNameRegExp = new RegExp("^"+ThisNamespaceName+":", "ig");
              var Matches = Page.match(NamespaceNameRegExp);
              if(Matches!=null && Matches.length == 1){
                   NamespaceNumber = parseInt(NS);
                   NamespaceName = ThisNamespaceName;
                   PageName = Page.replace(NamespaceNameRegExp, "");
                   Found = true;
                   continue;
              }
          }
     }
     if(ToReturn==="NamespaceName") return NamespaceName;
     if(ToReturn==="PageName") return PageName;
     return NamespaceNumber;
};

window.LiveRC_ManagePageMagicWords = function(Text, FullPageName){
    for(var MWindex in LiveRC_ManagePageMagicWordsFuncs){
        if(typeof(LiveRC_ManagePageMagicWordsFuncs[MWindex])!=="function") continue;
        var MWaliases = LiveRC_Config["MediawikiMagicwords"][MWindex];
        if(typeof(MWaliases)!="object" || !MWaliases) continue;
        for(var al=0,allen=MWaliases.length;al<allen;al++){
            var ThisAlias = "{{"+MWaliases[al]+"}}";
            Text = Text.split(ThisAlias).join(LiveRC_ManagePageMagicWordsFuncs[MWindex](FullPageName));
        }
    }
    return Text;
};

window.LiveRC_ManagePageMagicWordsFuncs = {
  "pagename" : function(fpn){ return getNamespaceInfoFromPage(fpn, "PageName"); },
  "pagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["pagename"](fpn)); },
  "namespace" : function(fpn){ return getNamespaceInfoFromPage(fpn, "NamespaceName"); },
  "namespacee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["namespace"](fpn)); },
  "namespacenumber" : function(fpn){ return getNamespaceInfoFromPage(fpn); },
  "talkspace" : function(fpn){ return lrcGetNamespaceName((getNamespaceInfoFromPage(fpn)%2==0 ? getNamespaceInfoFromPage(fpn)+1 : getNamespaceInfoFromPage(fpn) )); },
  "talkspacee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["talkspace"](fpn)); },
  "subjectspace" : function(fpn){ return lrcGetNamespaceName((getNamespaceInfoFromPage(fpn)%2==0 ? getNamespaceInfoFromPage(fpn) : getNamespaceInfoFromPage(fpn)-1 )); },
  "subjectspacee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["subjectspace"](fpn)); },
  "fullpagename" : function(fpn){ return fpn; },
  "fullpagenamee" : function(fpn){ return mw.Uri.encode(fpn); },
  "subpagename" : function(fpn){ return fpn.replace(/.*\//g, ''); },
  "subpagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["subpagename"](fpn)); },
  "rootpagename" : function(fpn){ return fpn.replace(/\/.*/g, '');},
  "rootpagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["rootpagename"](fpn)); },
  "basepagename" : function(fpn){ return fpn.replace(/\/.*/, ''); },
  "basepagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["basepagename"](fpn)); },
  "talkpagename" : function(fpn){ return (lrcGetNamespaceName((getNamespaceInfoFromPage(fpn)%2==0 ? (getNamespaceInfoFromPage(fpn)+1) : getNamespaceInfoFromPage(fpn) ))+":"+getNamespaceInfoFromPage(fpn, "PageName")); },
  "talkpagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["talkpagename"](fpn)); },
  "subjectpagename" : function(fpn){ var NS = lrcGetNamespaceName((getNamespaceInfoFromPage(fpn)%2==0 ? getNamespaceInfoFromPage(fpn) : getNamespaceInfoFromPage(fpn)-1 )); return (( NS==="" ? "" : NS+":" ) + getNamespaceInfoFromPage(fpn, "PageName")); },
  "subjectpagenamee" : function(fpn){ return mw.Uri.encode(LiveRC_ManagePageMagicWordsFuncs["subjectpagename"](fpn)); }
};

window.LiveRC_ManageIPv6 = function(user){
  if(!user) return "";
  if(UserIsIP(user)=="V6"){
    user = LiveRC_unprettifyIPv6(user);
    return (user.substr(0,1).toUpperCase() + user.substr(1, user.length).toLowerCase());
  }else{
    return user;
  }
};

window.LiveRC_unprettifyIPv6 = function(user){
  if(UserIsIP(user)!=="V6") return user;
  var RegPrettyIP = /::/g;
  var userIsPretty = user.match(RegPrettyIP);
  if(userIsPretty === null) return user;
  var regexpIP6 = /[0-9a-f]{1,4}/ig;
  var Matches = user.match(regexpIP6);
  if(Matches !== null ){
    for(var a=0,l=(8-Matches.length);a<l;a++){
      user = user.replace(/::/, ":0::");
    }
    user = user.replace(/::/g, ":");
  }
  return user;
};

window.LiveRC_isView = function(){
  var isDiff = /[?&]diff(=|&|$)/.test(window.location.search); // paramètre présent, même sans valeur ("?diff")
  return (mw.config.get('wgAction') === 'view') && !isDiff;
};

/* </source>

=== Fonctions d'initialisation ===

==== Initialisation et lancement ====

===== Initialisation =====

<source lang="javascript"> */

window.LiveRC_ForceProcess = function(Process, othercondition){
  return (othercondition || LiveRC_Config["LaunchProcessForce"][Process] === true);
};

window.LiveRC_InitActivationProcess = function(){
  LiveRC_RunHooks("BeforeInitActivationProcess");
  lrcDisplayDebug("Define LiveRC initialization process");
  var ThisPage = mw.config.get('wgPageName').replace(/_/g, " ");
  var isView = LiveRC_isView();
  var lrcPage = (ThisPage == lrcMakeParam("PageTitle") && isView);
  var userCustomPage = ( ThisPage === lrcGetNamespaceName(2)+":"+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+".js" && isView);
  if(userCustomPage){
    LiveRC_Config["LaunchProcessForce"]["OldLocalCSS"] = true;
    LiveRC_Config["LaunchProcessForce"]["OldPersonal"] = true;
    LiveRC_Config["LaunchProcessForce"]["UserInfos"] = true;
    LiveRC_Config["LaunchProcessForce"]["SiteInfos"] = true;
    LiveRC_Config["LaunchProcessForce"]["Watchlist"] = true;
  }
  LiveRC_Config["LaunchProcess"] = [
    {functions:LiveRC_Launch,                     condition:true                                                                                  },
    {functions:LiveRC_setInterfaceLanguage,       condition:true                                                                                  },
    {functions:LiveRC_AddCustomConfigLink,        condition:true                                                                                  },
    {functions:LiveRC_getVersion,                 condition:LiveRC_ForceProcess("GetVersion",lrcPage)                                             },
    {functions:LiveRC_PreloadIcons,               condition:LiveRC_ForceProcess("PreloadIcons",lrcPage)                                           },
    {functions:liveOldLocalCSS,                   condition:LiveRC_ForceProcess("OldLocalCSS",lrcPage)                                            },
    {functions:liveOldPersonalCSS,                condition:LiveRC_ForceProcess("OldPersonal",lrcPage)                                            },
    {functions:liveUserInfos,                     condition:LiveRC_ForceProcess("UserInfos",lrcPage)                                              },
    {functions:LiveRC_GetSiteInfos,               condition:LiveRC_ForceProcess("SiteInfos",lrcPage)                                              },
    {functions:liveUsersInGroups,                 condition:LiveRC_ForceProcess("UsersInGroups",(lrcMakeParam("LoadUsersInGroupsList")&&lrcPage)) },
    {functions:LiveRC_UpdateSIParams,             condition:true                                                                                  },
    {functions:liveWatch,                         condition:LiveRC_ForceProcess("Watchlist",(lrcMakeParam("LoadWatchlist")&&lrcPage))             },
    {functions:loadBlocks,                        condition:LiveRC_ForceProcess("LastBlocks",(lrcMakeParam("LoadLastBlocks")&&lrcPage))           },
    {functions:loadUsersInCats,                   condition:LiveRC_ForceProcess("UsersInCats",(lrcMakeParam("LoadIPCat")&&lrcPage))               },
    {functions:buildReportCreateReasons,          condition:LiveRC_ForceProcess("ReportReasons",lrcPage)                                          },
    {functions:lrcCreateMissingParams,            condition:LiveRC_ForceProcess("MissingParams",userCustomPage)                                   },
    {functions:LiveRC_OpenCustomConfigMenu,       condition:userCustomPage                                                                        },
    {functions:lrcCreateInterface,                condition:lrcPage                                                                               },
    {functions:liveRCReady,                       condition:lrcPage                                                                               },
    {functions:liveRC,                            condition:lrcPage                                                                               }

  ];
  LiveRC_RunHooks("AfterInitActivationProcess");
  LiveRC_UpdateLaunchingBar();
  LiveRC_LaunchProcessNextStep();
};

window.LiveRC_LaunchProcessNextStep = function(){
  var Process = LiveRC_Config["LaunchProcess"];
  for(var a=0,l=Process.length;a<l;a++){
    var ThisProcess = Process[a];
    var launched = ThisProcess.launched;
    if(launched === true) continue;
    var condition = ThisProcess.condition;
    if(typeof(condition)!=="undefined" && !condition) continue;
    var functions = ThisProcess.functions;
    var Type = typeof(functions);
    if(Type==="function"){
      LiveRC_Config["LaunchProcess"][a].launched = true;
      functions();
      return;
    }else if(Type==="object"){
      LiveRC_Config["LaunchProcess"][a].launched = true;
      for(var f=0,flen=functions.length;f<flen;f++){
        var ThisFunction = functions[f];
        if(typeof(ThisFunction)==="function") ThisFunction();
      }
      return;
    }else{
      continue;
    }
  }
};

window.LiveRC_UpdateLaunchingBar = function(PerCent){
  var lrcPage = (mw.config.get('wgPageName') == lrcMakeParam("PageTitle") && LiveRC_isView());
  if(!lrcPage) return;
  if(typeof(Percent)==="undefined"){
    var Process = LiveRC_Config["LaunchProcess"];
    var ProcessDone = 0;
    var ProcessToDo = 0;
    for(var a=0,l=Process.length;a<l;a++){
      var ThisProcess = Process[a];
      var launched = ThisProcess.launched;
      if(launched === true){
        ProcessDone++;
        continue;
      }
      var condition = ThisProcess.condition;
      if(typeof(condition)!=="undefined" && !condition) continue;
      var functions = ThisProcess.functions;
      var Type = typeof(functions);
      if(Type==="function" || Type==="object"){
        ProcessToDo++;
      }else{
        continue;
      }
    }
    var TotalProcess = ProcessDone + ProcessToDo;
    PerCent = Math.round(100 * ProcessDone / TotalProcess);
  }
  var LaunchingBar = document.getElementById("lrcLaunchingBar");
  if(!LaunchingBar) LaunchingBar = LiveRC_CreateLaunchingBar();
  if(!LaunchingBar) return;
  var LaunchingBarBar = document.getElementById("lrcLaunchingBarBar");
  var LaunchingBarCounter = document.getElementById("lrcLaunchingBarCounter");
  if(LaunchingBarBar){
    LaunchingBarBar.style.width = PerCent+"%";
    LaunchingBarBar.className = "lrcLaunchingBarBar_" + (Math.floor(PerCent/20)*20);
  }
  if(LaunchingBarCounter){
    LaunchingBarCounter.innerHTML = PerCent+"%";
  }
  if(LiveRC_Config["Timeout"]["UpdateLaunchingBar"]) clearTimeout(LiveRC_Config["Timeout"]["UpdateLaunchingBar"]);
  if(PerCent < 100){
    LiveRC_Config["Timeout"]["UpdateLaunchingBar"] = setTimeout(function(){ LiveRC_UpdateLaunchingBar(); }, 250);
  }else{
    LiveRC_DeleteLaunchingBar();
  }
};

window.LiveRC_CreateLaunchingBar = function(){
  var Logo = document.getElementById("p-logo");
  if(!Logo) return false;
  var Link = Logo.getElementsByTagName('a')[0];
  if(!Link) return false;
  var LaunchingBar = document.createElement('div');
  LaunchingBar.id = "lrcLaunchingBar";
  var LaunchingBarCounter = document.createElement('div');
  LaunchingBarCounter.id = "lrcLaunchingBarCounter";
  var LaunchingBarContainer = document.createElement('div');
  LaunchingBarContainer.id = "lrcLaunchingBarContainer";
  var LaunchingBarBar = document.createElement('div');
  LaunchingBarBar.id = "lrcLaunchingBarBar";
  LaunchingBar.appendChild(LaunchingBarContainer);
  LaunchingBar.appendChild(LaunchingBarCounter);
  LaunchingBarContainer.appendChild(LaunchingBarBar);
  Link.appendChild(LaunchingBar);
  return LaunchingBar;
};

window.LiveRC_DeleteLaunchingBar = function(){
  if(LiveRC_Config["Timeout"]["UpdateLaunchingBar"]) clearTimeout(LiveRC_Config["Timeout"]["UpdateLaunchingBar"]);
  var LaunchingBar = document.getElementById("lrcLaunchingBar");
  if(LaunchingBar) LaunchingBar.parentNode.removeChild(LaunchingBar);
};

/* </source>

==== Activation ====

<source lang="javascript"> */

window.PleaseWait = function(){
  LiveRC_alert('<center><code><b>LiveRC is loading. Please wait a few seconds.</b></code></center>');
  lrcAddClass(document.body,'LiveRCLoading');
  clearTimeout(LiveRC_Config["Timeout"]["WaitLoading"]);
  LiveRC_Config["Timeout"]["WaitLoading"] = setTimeout("PleaseWait();", 5000);
};

window.LiveRC_setFavicon = function(){
  var FavIcon = Custom_lrcIcons["FavIcon"];
  if(!FavIcon) FavIcon = lrcIcons["FavIcon"];
  if(!FavIcon) return;
  if(FavIcon.src){
    lrcDisplayDebug('Set favicon');
    var Links = document.getElementsByTagName("link");
    for(var a=0,l=Links.length;a<l;a++){
      var ThisLink = Links[a];
      if(!ThisLink) continue;
      var ThisLinkRel = ThisLink.getAttribute("rel");
      if(ThisLinkRel && ThisLinkRel.indexOf("shortcut icon")!=-1){
        ThisLink.parentNode.removeChild(ThisLink);
      }
    }
    var FaviconLink = document.createElement("link");
    FaviconLink.rel = 'shortcut icon';
    FaviconLink.href = lrcMakeParam("CommonsURL") + FavIcon.src;
    var Head = document.head || document.getElementsByTagName('head')[0];
    Head.appendChild(FaviconLink);
  }
};

window.LiveRC_Launch = function(){
  lrcDisplayDebug("Init LiveRC");
  lstReportGetNeededMessages();
  var logs = LiveRC_Config["LogNames"];
  for(var logtype in logs){
    LiveRC_addNeededMessages(logs[logtype]["page"]);
  }
  var groups = LiveRC_Config["UserGroupList"];
  for(var group in groups){
    LiveRC_addNeededMessages("group-"+group);
  }
  for(var tr=0,trlen=LiveRC_Config["TrackingCategories"].length;tr<trlen;tr++){
    LiveRC_addNeededMessages(LiveRC_Config["TrackingCategories"][tr]);
  }
  if(mw.config.get('wgPageName').replace(/_/g, " ") == lrcMakeParam("PageTitle") && LiveRC_isView()) {
    lrcDisplayDebug('Starting page <b>'+mw.config.get('wgPageName')+'</b> detected : run LiveRC initialization process');
    lrcDisplayDebug('<span style="color:darkGreen;">Hello <b>'+mw.config.get('wgUserName')+'</b>! You want to fight vandals? OK, let\'s go !</span>');
    LiveRC_alert('<center><code><b><big>Hello <i>'+mw.config.get('wgUserName')+'</i>!</big></b></code></center>');
    PleaseWait();
    var LiveRCContainer = document.createElement("div");
    LiveRCContainer.id = "LiveRCContainer";
    lrcaddCustomizableClasses(LiveRCContainer, "LiveRCContainer");
    document.body.appendChild(LiveRCContainer);
    var Alert = document.getElementById("LiveRCAlert");
    if(Alert){
      Alert.parentNode.removeChild(Alert);
      LiveRCContainer.appendChild(Alert);
    }
    LiveRC_setFavicon();
    lrcDisplayDebug('Set window title');
    var Title = document.getElementsByTagName("title")[0];
    if(Title) Title.innerHTML = "LiveRC";
    // Start
    lrcAddClass(document.body, "LiveRCRunning");
  }
  // Add LiveRC link in left panel
  var RCLi = document.getElementById(lrcMakeParam("RClinkid"));
  if(RCLi){
    lrcDisplayDebug('Add LiveRC link in tools panel');
    var LiveRCLi = document.createElement('li');
    LiveRCLi.id = 'n-liveRC';
    var LiveRCLink = document.createElement('a');
    LiveRCLink.title = 'LiveRC';
    LiveRCLink.href = lrcGetPageURL(lrcMakeParam("PageTitle"));
    LiveRCLink.appendChild(document.createTextNode('LiveRC'));
    LiveRCLi.appendChild(LiveRCLink);
    RCLi.parentNode.insertBefore(LiveRCLi,RCLi.nextSibling);
    if((mw.config.get('wgNamespaceNumber')==2 || mw.config.get('wgNamespaceNumber')==3) && mw.config.get('wgPageName').indexOf('/') == -1 ){
        var User = mw.config.get('wgTitle');
        lrcDisplayDebug('Add watch/hide links in tools panel : check user « '+User+' » status');
        var titles = "LiveRCWatch:" + User + '|' + "LiveRCHidden:" + User;
        var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'info',inprop:'watched',titles:titles});
        wpajax.http({url : URL, onSuccess : LiveWatchInitButtons, user:User});
    }
  }
  LiveRC_LaunchProcessNextStep();
};

window.LiveRC_AddCustomConfigLink = function(){
  var Li = document.getElementById('n-liveRC');
  if(!Li) return;
  var UL = Li.getElementsByTagName('ul')[0];
  if(!UL){
    UL = document.createElement('ul');
    Li.appendChild(UL);
  }
  var CustomPageLi = document.createElement('li');
  CustomPageLi.id = 'n-liveRC-usercustom';
  var Target = document.getElementById('n-liveRC-contact');
  if(Target) Target.parentNode.insertBefore(CustomPageLi, Target);
  else UL.appendChild(CustomPageLi);
  var PageName = lrcGetNamespaceName(2)+":"+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+".js";
  var Link = document.createElement('a');
  Link.innerHTML = lrcMakeText("UserConfigLinkText");
  Link.title = lrcMakeText("UserConfigLinkTitle").split('$1').join(PageName);
  Link.href = lrcGetPageURL(PageName);
  CustomPageLi.appendChild(Link);
  LiveRC_LaunchProcessNextStep();
};

window.LiveRC_OpenCustomConfigMenu = function(){
  var Target = $('pre.source-javascript')[0];
  if(!Target) Target = document.getElementById("mw-content-text").firstChild;
  if(!Target) return;
  var clearyourcache = document.getElementById("mw-clearyourcache");
  if(clearyourcache) clearyourcache.style.display = "none";
  var Fieldset = document.createElement('fieldset');
  var Legend = document.createElement('legend');
  Fieldset.id = "ConfigLiveRCExtension_Menu";
  Fieldset.appendChild(Legend);
  Legend.appendChild(document.createTextNode(lrcMakeText("CustomConfigMenu_legend")));
  Target.parentNode.insertBefore(Fieldset, Target);
  var FormDiv = document.createElement('div');
  FormDiv.id = "OutFixedBottomPanel";
  Fieldset.appendChild(FormDiv);
  FormDiv.style.position = "static";
  LiveRC_ManageParams_OpenMenu();
  var MenuTitle = document.getElementById("LiveRC_ParamMenuAnchor");
  if(MenuTitle) MenuTitle.parentNode.removeChild(MenuTitle);
  LiveRC_CustomConfigMenu_EditActionButtons();
  var ResizeZone = document.createElement('div');
  ResizeZone.id = "CCM_ParamMenuAnchor";
  ResizeZone.innerHTML = "&nbsp;";
  FormDiv.appendChild(ResizeZone);
  LiveRC_SetVerticalResizeZone(document.getElementById("CCM_ParamMenuAnchor"),
                         lrcGetElementsByClass("LiveRC_ParamMenuPart",document.getElementById("LiveRC_ParamMenu"),"div"),
                         document.getElementById("LiveRC_ParamMenu"), true
  );
  $(document.body).addClass("CustomConfigMenuDisplayed");
  mw.loader.addStyleTag(".CustomConfigMenuDisplayed #LiveRC_ParamMenuContent { border:none !important; }");
};

window.LiveRC_CustomConfigMenu_EditActionButtons = function(){
  var AllActionButtons = lrcGetElementsByClass("ActionButtons",document.getElementById("LiveRC_ParamMenuForm"),"p");
  for(var a=0,l=AllActionButtons.length;a<l;a++){
    var Inputs = AllActionButtons[a].getElementsByTagName('input');
    for(var i=0,ilen=Inputs.length;i<ilen;i++){
      if(!Inputs[i] || Inputs[i].value !== lrcMakeText("Cancel")) continue;
      Inputs[i].style.display = "none";
    }
  }
};


window.LiveRC_PreloadIcons = function(){
  lrcDisplayDebug('Preload all icons');
  var PreloadIconsDiv = document.createElement("div");
  PreloadIconsDiv.id = "PreloadIconsDiv";
  PreloadIconsDiv.style.position = "fixed";
  PreloadIconsDiv.style.top = "-20000px";
  PreloadIconsDiv.style.left = "-20000px";
  document.body.appendChild(PreloadIconsDiv);
  var LoadedIcons = [];
  for(var icon in Custom_lrcIcons){
    if(!Custom_lrcIcons.hasOwnProperty(icon)) continue;
    if(LoadedIcons.indexOf(icon)!=-1) continue;
    LoadedIcons.push(icon);
    var Span = document.createElement('span');
    Span.innerHTML = lrcMakeIcon(icon);
    PreloadIconsDiv.appendChild(Span);
  }
  for(var icon in lrcIcons){
    if(!lrcIcons.hasOwnProperty(icon)) continue;
    if(LoadedIcons.indexOf(icon)!=-1) continue;
    LoadedIcons.push(icon);
    var Span = document.createElement('span');
    Span.innerHTML = lrcMakeIcon(icon);
    PreloadIconsDiv.appendChild(Span);
  }
  LiveRC_LaunchProcessNextStep();
};

/* </source>

===== Gestion des langues =====

<source lang="javascript"> */

window.LiveRC_getMediawikiDefaultLanguage = function(){
  var Support = "not supported (yet)";
  var SiteLanguage = LiveRC_Config["MediawikiGeneralConfig"]["lang"];
  if(typeof(SiteLanguage)=="undefined") SiteLanguage = mw.config.get('wgContentLanguage');
  if(LiveRC_Config["SupportedLanguages"].indexOf(SiteLanguage)!=-1){
    lrcParams["Language"] = SiteLanguage;
    Support = "supported";
  }
  var SLangName = LiveRC_Config["MediawikiLanguages"][SiteLanguage];
  lrcDisplayDebug("Get Site default interface language : " + SiteLanguage + (SLangName ? " ("+SLangName+")" : "") +" : "+Support);

  Support = "not supported (yet)";
  var UserLanguage = LiveRC_Config["UserInfos"].Preferences['language'];
  if(typeof(UserLanguage)=="undefined") UserLanguage = mw.user.options.get('language');
  if(LiveRC_Config["SupportedLanguages"].indexOf(UserLanguage)!=-1){
    lrcParams["Language"] = UserLanguage;
    Support = "supported";
  }
  var ULangName = LiveRC_Config["MediawikiLanguages"][UserLanguage];
  lrcDisplayDebug("Get user default interface language : " + UserLanguage + (ULangName ? " ("+ULangName+")" : "") +" : "+Support);
};

window.LiveRC_setInterfaceLanguage = function(){
  LiveRC_getMediawikiDefaultLanguage();
  var Support = "not supported (yet)";
  var LiveRCUserLang = lrcMakeParam("Language");
  if(LiveRC_Config["AvailableLanguages"].indexOf(LiveRCUserLang)==-1){
     var lrcULangName = LiveRC_Config["MediawikiLanguages"][LiveRCUserLang];
     LiveRC_Config["AvailableLanguages"].push(LiveRCUserLang);
     Support = "supported";
  }
  lrcDisplayDebug("Get LiveRC user interface language : " + LiveRCUserLang + (lrcULangName ? " ("+lrcULangName+")" : "") + " : "+Support);
  if(LiveRC_Config["AvailableLanguages"].length===0) LiveRC_Config["AvailableLanguages"].push("en");
  var LiveRC_Languages= [];
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var ThisLang = LiveRC_Config["AvailableLanguages"][a];
    lrcDisplayDebug("Load translations: " + ThisLang );
    LiveRC_Languages.push('//fr.wikipedia.org/w/index.php?title='
                        + 'MediaWiki:Gadget-LiveRC.js/i18n/'+ThisLang+'.js'
                        + '&action=raw&ctype=text/javascript');
  }
  if(LiveRC_Languages.length !== 0){
    mw.loader.implement( "liverclanguages", LiveRC_Languages, {}, {}, {} );
    mw.loader.using( "liverclanguages", LiveRC_CheckIfTranslationsLoaded);
  }else{
    LiveRC_LaunchProcessNextStep();
  }
};

window.LiveRC_CheckIfTranslationsLoaded = function(){
  for(var a=0,l=LiveRC_Config["AvailableLanguages"].length;a<l;a++){
    var Lang = LiveRC_Config["AvailableLanguages"][a];
    if(typeof(LiveRC_Config["LoadFunctions"][Lang])==="function"){
      try{LiveRC_Config["LoadFunctions"][Lang](); }catch(e){  }
    }
  }
  LiveRC_InitTextTranslations();
};

window.LiveRC_InitTextTranslations = function(){
  var ThereIsMoreText = [];
  var Lang = lrcMakeParam("Language");
  for(var textcode in lrcTexts){
    if(typeof(lrcTranslatedTexts[textcode])==="object") continue;
    lrcTranslatedTexts[textcode] = [];
    lrcTranslatedTexts[textcode][Lang] = lrcTexts[textcode];
    ThereIsMoreText.push(textcode);
  }
  for(var textcode in lrcParamDesc){
    if(typeof(lrcTranslatedParamDesc[textcode])==="object") continue;
    lrcTranslatedParamDesc[textcode] = [];
    lrcTranslatedParamDesc[textcode][Lang] = lrcParamDesc[textcode];
    ThereIsMoreText.push(textcode);
  }
  if(ThereIsMoreText.length!=0) lrcDisplayDebug("Load additionnal texts: "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+ThereIsMoreText.join(", ")+" ]</span>");
  LiveRC_RunHooks("AfterTranslationsLoaded");
  LiveRC_LaunchProcessNextStep();
};

/* </source>

==== Récupération des informations sur l'utilisateur ====

<source lang="javascript"> */

window.liveUserInfos = function(){
    lrcDisplayDebug("Get user « "+mw.config.get('wgUserName')+" » infos");
    var URL = lrcGetAPIURL({format:'xml',action:'query',meta:'userinfo',uiprop:'blockinfo|groups|implicitgroups|rights|options|editcount|email|realname'});
    wpajax.http({url: URL, onSuccess: getUserInfos});
};

window.getUserInfos = function(xmlreq, data) {
  var api = xmlreq.responseXML;
  if (api.firstChild.nodeName == "error") return;
  var UserInfos = api.getElementsByTagName('userinfo')[0];
// User rights
  var rights = UserInfos.getElementsByTagName('rights')[0].getElementsByTagName('r');
  for(var i=0, len=rights.length; i<len; i++) {
    var right = rights[i].firstChild.nodeValue;
    if(right) LiveRC_Config["UserInfos"].Rights.push(right);
  }
  if(lrcUserHasRight("apihighlimits")) LiveRC_Config["UserInfos"].APIlimit = 4999;
// User groups
  var groups = UserInfos.getElementsByTagName('groups')[0].getElementsByTagName('g');
  for(var i=0, len=groups.length; i<len; i++) {
    var group = groups[i].firstChild.nodeValue;
    if(group) LiveRC_Config["UserInfos"].Groups.push(group);
  }
  LiveRC_Config["UserInfos"].isAdmin = (LiveRC_Config["UserInfos"].Groups.indexOf("sysop") != -1 );
// editcount
  LiveRC_Config["UserInfos"].EditCount = parseInt(UserInfos.getAttribute('editcount'));
// real name
  LiveRC_Config["UserInfos"].RealName = UserInfos.getAttribute('realname');
// email
  LiveRC_Config["UserInfos"].eMail = UserInfos.getAttribute('email');
// user is blocked ?
  LiveRC_Config["UserInfos"].isBlocked = (UserInfos.getAttribute('blockid') ? true : false);
// preferences
  var preferences = UserInfos.getElementsByTagName('options')[0];
  if(preferences) preferences = preferences.attributes;
  for(var a=0,l=preferences.length;a<l;a++){
    LiveRC_Config["UserInfos"].Preferences[preferences[a].name] = preferences[a].value.unhtmlize();
  }
  LiveRC_RunHooks("AfterGotUserInfos");
  LiveRC_LaunchProcessNextStep();
};

window.lrcUserHasRight = function(Right){
  return (LiveRC_Config["UserInfos"].Rights.indexOf(Right)!=-1);
};

window.lrcUserHasGroup = function(Group, UserName){
  if(UserName){
    if(typeof(LiveRC_Config["UserGroupList"][Group])!="object") return false;
    if(typeof(LiveRC_Config["UserGroupList"][Group].list)!="object") return false;
    return (LiveRC_Config["UserGroupList"][Group].list.indexOf(UserName)!=-1);
  }else{
    var GroupList;
    if(typeof(mw.config.get('wgUserGroups'))!=="undefined") GroupList = mw.config.get('wgUserGroups');
    else GroupList = LiveRC_Config["UserInfos"].Groups;
    return (GroupList.indexOf(Group)!=-1);
  }
};

window.lrcUserCan = function(Function){
  if(LiveRC_Config["LimitationsWhitelist"].indexOf(mw.config.get('wgUserName'))!=-1) return true;
  if(LiveRC_Config["LimitationsBlacklist"].indexOf(mw.config.get('wgUserName'))!=-1) return false;
  if(LiveRC_Config["UserInfos"].isBlocked) return false;
  var right = LiveRC_Config["LimitationsRight"][Function];
  if(typeof(right) === "undefined") right = LiveRC_Config["LimitationsRight"]["Default"];
  return lrcUserHasRight(right);
};

/* </source>

==== Récupération des infos sur la configuration du site ====

<source lang="javascript"> */

window.LiveRC_addNeededMessages = function(messagename){
  if(LiveRC_Config["NeededMessages"].indexOf(messagename)==-1) LiveRC_Config["NeededMessages"].push(messagename);
};

window.LiveRC_addNeededMagicWord = function(messagename){
  if(LiveRC_Config["NeededMagicWords"].indexOf(messagename)==-1) LiveRC_Config["NeededMagicWords"].push(messagename);
};

window.LiveRC_GetSiteInfos = function(update, input){
  if(update && input){
      input.value = lrcMakeText("MWSiteInfoLegendRunning").split("$1").join("0");
      input.disabled = "disabled";
  }
  var lrcMissingMessages = [];
  if(update){
    lrcMissingMessages = LiveRC_Config["NeededMessages"];
  }else{
    for(var a=0,l=LiveRC_Config["NeededMessages"].length;a<l;a++){
      var NeededMessage = LiveRC_Config["NeededMessages"][a];
      if(typeof(LiveRC_Config["MediawikiMessages"][NeededMessage])==="undefined" || typeof(LiveRC_Config["MediawikiMessages"][NeededMessage]["default"])==="undefined")
        lrcMissingMessages.push(NeededMessage);
    }
  }
  var lrcNeededMagicWords = [];
  if(update){
    lrcNeededMagicWords = LiveRC_Config["NeededMagicWords"]
  }else{
    for(var a=0,l=LiveRC_Config["NeededMagicWords"].length;a<l;a++){
      var NeededMagicWord = LiveRC_Config["NeededMagicWords"][a];
      if(typeof(LiveRC_Config["MediawikiMagicwords"][NeededMagicWord])==="undefined")
        lrcNeededMagicWords.push(NeededMagicWord);
    }
  }
  var siprop = [];
  if(lrcGetObjectLength(LiveRC_Config["MediawikiGeneralConfig"]) === 0 || update ){
    siprop.push("general");
    lrcDisplayDebug("Get Mediawiki general configuration");
  }
  if(LiveRC_Config["MediawikiLanguages"].length === 0 || update ){
    siprop.push("languages");
    lrcDisplayDebug("Get Mediawiki languages");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiNamespaces"]) === 0 || update){
    siprop.push("namespaces");
    siprop.push("namespacealiases");
    lrcDisplayDebug("Get namespaces names and aliases");
  }
  if(lrcNeededMagicWords.length!=0 || update){
    siprop.push("magicwords");
    lrcDisplayDebug("Get magicwords");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiExtensions"]) === 0 || update ){
    siprop.push("extensions");
    lrcDisplayDebug("Get Mediawiki extensions");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiInterwikimap"]) === 0 || update ){
    siprop.push("interwikimap");
    lrcDisplayDebug("Get Interwiki Map");
  }
  if(lrcGetObjectLength(LiveRC_Config["MediawikiUsergroups"]) === 0 || update ){
    siprop.push("usergroups");
    lrcDisplayDebug("Get usergroups");
  }
  var list = "";
  var listprop = "";
  if( lrcGetObjectLength(LiveRC_Config["MediawikiTags"]) === 0 || update ){
    list = '&list=tags&tglimit='+LiveRC_Config["UserInfos"].APIlimit
    listprop = '&tgprop=name|displayname|description|defined|source|active';  // FIXME : 1.26wmf3 minimum
    lrcDisplayDebug("Get Tags");
  }
  var meta = [];
  if((siprop.length !== 0)) meta.push("siteinfo");
  var ammessages = "";
  if(lrcMissingMessages.length > 0){
    lrcDisplayDebug("Get local system messages");
    meta.push("allmessages");
    ammessages = '&ammessages=' + lrcMissingMessages.join('|');
  }
  if(lrcIsExtensionInstalled("Wikibase Client") && (lrcGetObjectLength(LiveRC_Config["MediawikiWikibase"])===0 || update)){
    lrcDisplayDebug("Get wikibase infos");
    meta.push("wikibase");
  }
  if( !list && (meta.length === 0) && (siprop.length === 0) && (lrcMissingMessages.length === 0) ){
    LiveRC_GetTranslatedMessagesDone({update:(update ? true : false),input:(input ? input : false)});
    return;
  }
  var URL = lrcGetAPIURL('format=xml&action=query')
            + '&meta=' + meta.join("|")
            + list
            + '&siprop=' + siprop.join("|")
            + ammessages
            + listprop;
  wpajax.http({url:URL,
               onSuccess:LiveRC_GotSiteInfos,
               update:(update ? true : false),
               input:(input ? input : false),
               messageslist:lrcMissingMessages
  });
};

window.LiveRC_GotSiteInfos = function(xmlreq, data){
  if(xmlreq){
    var api = xmlreq.responseXML;
    var general = api.getElementsByTagName('general')[0];
    if(general){
      LiveRC_Config["MediawikiGeneralConfig"] = {};
      for (var j=0,lenj=general.attributes.length;j<lenj; j++) {
        var genname = general.attributes[j].name;
        var genvalue = general.attributes[j].value;
        if(["git-hash", "time"].indexOf(genname)==-1) LiveRC_Config["MediawikiGeneralConfig"][genname] = genvalue;
      }
    }
    var languages = api.getElementsByTagName("languages")[0];
    if(languages){
      LiveRC_Config["MediawikiLanguages"] = {};
      var lang = languages.getElementsByTagName("lang");
      for (var j=0,lenj=lang.length;j<lenj; j++) {
        var langcode = lang[j].getAttribute('code');
        var langName = lang[j].firstChild.nodeValue;
        if(!LiveRC_Config["MediawikiLanguages"][langcode])
          LiveRC_Config["MediawikiLanguages"][langcode] = langName;
      }
    }
    var messages = api.getElementsByTagName('message');
    if(messages){
      for(var a=0,l=messages.length;a<l;a++){
        var MessageName = messages[a].getAttribute('name');
        var MessageValue = (messages[a].firstChild ? messages[a].firstChild.nodeValue : "").split('\n').join("");
        if(typeof(LiveRC_Config["MediawikiMessages"][MessageName])!="object")
          LiveRC_Config["MediawikiMessages"][MessageName] = [];
        LiveRC_Config["MediawikiMessages"][MessageName]["default"] = MessageValue;
        LiveRC_Config["MediawikiMessages"][MessageName][LiveRC_Config["MediawikiGeneralConfig"]["lang"]] = MessageValue;
      }
    }
    var magicwords = api.getElementsByTagName('magicword');
    if(magicwords){
      LiveRC_Config["MediawikiMagicwords"] = {};
      for(var a=0,l=magicwords.length;a<l;a++){
        var MagicWordName = magicwords[a].getAttribute('name');
        LiveRC_Config["MediawikiMagicwords"][MagicWordName] = [];
        var aliases = magicwords[a].getElementsByTagName('alias');
        for(var b=0,m=aliases.length;b<m;b++){
          if(aliases[b].firstChild) LiveRC_Config["MediawikiMagicwords"][MagicWordName].push(aliases[b].firstChild.nodeValue);
        }
      }
    }
    var extensions = api.getElementsByTagName('ext');
    if(extensions){
      LiveRC_Config["MediawikiExtensions"] = {};
      for(var a=0,l=extensions.length;a<l;a++){
        var ExtensionName = extensions[a].getAttribute('name');
        LiveRC_Config["MediawikiExtensions"][ExtensionName] = true;
    }
    }
    var namespaces = api.getElementsByTagName('namespaces')[0];
    if(namespaces){
      LiveRC_Config["MediawikiNamespaces"] = {};
      var nss = namespaces.getElementsByTagName('ns');
      for(var a=0,l=nss.length;a<l;a++) {
        var id = nss[a].getAttribute('id');
        var nscanonical = nss[a].getAttribute('canonical');
        var nssubpages = (nss[a].getAttribute('subpages') === "");
        var nscase = nss[a].getAttribute('case');
        var nslocal = (nss[a].firstChild ? nss[a].firstChild.nodeValue : "");
        LiveRC_Config["MediawikiNamespaces"][id] = {};
        LiveRC_Config["MediawikiNamespaces"][id]["canonicalname"] = (nscanonical ? nscanonical : '');
        LiveRC_Config["MediawikiNamespaces"][id]["localname"] = nslocal;
        LiveRC_Config["MediawikiNamespaces"][id]["case"] = nscase;
        if(nssubpages) LiveRC_Config["MediawikiNamespaces"][id]["subpages"] = "";
      }
    }
    var namespacesaliases = api.getElementsByTagName('namespacealiases')[0];
    if(namespacesaliases){
      var nsaliases = namespacesaliases.getElementsByTagName('ns');
      for(var a=0,l=nsaliases.length;a<l;a++){
        var id = nsaliases[a].getAttribute('id');
        if(!LiveRC_Config["MediawikiNamespaces"][id]) continue;
        if(!LiveRC_Config["MediawikiNamespaces"][id]["aliases"]) LiveRC_Config["MediawikiNamespaces"][id]["aliases"] = [];
        if(nsaliases[a].firstChild) LiveRC_Config["MediawikiNamespaces"][id]["aliases"].push(nsaliases[a].firstChild.nodeValue);
      }
    }
    var usergroups = api.getElementsByTagName('usergroups')[0];
    if(usergroups){
      var groups = {};
      var grouptags = usergroups.getElementsByTagName("group");
      for(var a=0,l=grouptags.length;a<l;a++){
        var grouptag = grouptags[a];
        var groupname = grouptag.getAttribute("name");
        if(!groupname) continue;
        groups[groupname] = [];
        var Permissions = grouptag.getElementsByTagName("permission");
        for(var p=0,plen=Permissions.length;p<plen;p++){
          var perm = (Permissions[p].firstChild ? Permissions[p].firstChild.nodeValue : "");
          if(perm) groups[groupname].push(perm);
        }
        var Addgroups = grouptag.getElementsByTagName("add")[0];
        if(Addgroups){
          var addedgroups = Addgroups.getElementsByTagName('group');
          for(var ag=0,aglen=addedgroups.length;ag<aglen;ag++){
            var agname = (addedgroups[ag].firstChild ? addedgroups[ag].firstChild.nodeValue : "");
            if(agname) groups[groupname].push("userrights_+"+agname);
          }
        }
        var Removegroups = grouptag.getElementsByTagName("remove")[0];
        if(Removegroups){
          var removedgroups = Removegroups.getElementsByTagName('group');
          for(var rg=0,rglen=removedgroups.length;rg<rglen;rg++){
            var rgname = (removedgroups[rg].firstChild ? removedgroups[rg].firstChild.nodeValue : "");
            if(rgname) groups[groupname].push("userrights_-"+rgname);
          }
        }
      }
      LiveRC_Config["MediawikiUsergroups"] = groups;
    }
    var interwikimap =  api.getElementsByTagName('interwikimap')[0];
    if(interwikimap){
      LiveRC_Config["MediawikiInterwikimap"] = {};
      var interwikis = interwikimap.getElementsByTagName('iw');
      for(var a=0,l=interwikis.length;a<l;a++){
        var interwiki = interwikis[a];
        var id = interwiki.getAttribute('prefix');
        var language = interwiki.getAttribute('language');
        var url = interwiki.getAttribute('url');
        LiveRC_Config["MediawikiInterwikimap"][id] = {language:language,url:url};
      }
    }
    var wikibase = api.getElementsByTagName('wikibase')[0];
    if(wikibase){
      LiveRC_Config["MediawikiWikibase"] = {};
      var URL = wikibase.getElementsByTagName('url')[0];
      if(URL){
        var urls = URL.attributes;
        for(var a=0,l=urls.length;a<l;a++){
          LiveRC_Config["MediawikiWikibase"][urls[a].name] = urls[a].value;
        }
      }
    }
    var tags = api.getElementsByTagName('tags')[0];
    if(tags){
      LiveRC_Config["MediawikiTags"] = {};
      var alltags = tags.getElementsByTagName('tag');
      for(var a=0,l=alltags.length;a<l;a++){
        var tag = alltags[a];
        var taginfos = {};
        var Name = tag.getAttribute("name");
        taginfos.active = (tag.getAttribute("active") === "");
        taginfos.defined = (tag.getAttribute("defined") === "");
        taginfos.description = tag.getAttribute("description") || "";
        taginfos.description = taginfos.description.replace(/\n/g,"");
        taginfos.source = [];
        var sourcetag = tag.getElementsByTagName('source')[0];
        if(sourcetag){
          var Sources = sourcetag.getElementsByTagName('_v');
          for(var s=0,slen=Sources.length;s<slen;s++){
            taginfos.source.push(Sources[s].firstChild.nodeValue);
          }
        }
        LiveRC_Config["MediawikiTags"][Name] = taginfos;
      }
    }
  }
  var langlist = (data.update ? LiveRC_Config["SupportedLanguages"] : LiveRC_Config["AvailableLanguages"]);
  LiveRC_GetTranslatedMessages(0, langlist, data.messageslist, data.update, data.input);
};

window.LiveRC_GetTranslatedMessages = function(index, langlist, messageslist, update, input){
  var Language = lrcMakeParam("Language");
  if(Language == LiveRC_Config["MediawikiGeneralConfig"]["lang"] && !update){
    LiveRC_GetTranslatedMessagesDone({update:false,input:false});
    return;
  }
  var NextLang = langlist[index];
  if(!NextLang){
    LiveRC_GetTranslatedMessagesDone({update:update,input:input});
    return;
  }
  if((Language != NextLang && !update) || (!LiveRC_Config["MediawikiLanguages"][NextLang])){
    LiveRC_GetTranslatedMessages((index+1), messageslist, update, input);
    return;
  }
  if(update && input){
      var PerCent = Math.round((100*(index+1))/(langlist.length));
      input.value = lrcMakeText("MWSiteInfoLegendRunning").split("$1").join(PerCent);
  }
  lrcDisplayDebug("Get ("+NextLang+") system messages");
  var URL = lrcGetAPIURL({format:'xml',action:'query',meta:'allmessages',ammessages:messageslist.join("|"),amlang:NextLang});
  wpajax.http({url:URL,
               onSuccess:LiveRC_ReceiveTranslatedMessages,
               update:update,
               input:input,
               index:index,
               lang:NextLang,
               messageslist:messageslist,
               langlist:langlist
  });
};

window.LiveRC_ReceiveTranslatedMessages = function(xmlreq, data){
  if(xmlreq){
    var api = xmlreq.responseXML;
    var messages = api.getElementsByTagName('message');
    for(var a=0,l=messages.length;a<l;a++){
      var MessageName = messages[a].getAttribute('name');
      var MessageValue = (messages[a].firstChild ? messages[a].firstChild.nodeValue : "").split('\n').join("");
      LiveRC_Config["MediawikiMessages"][MessageName][data.lang] = MessageValue;
    }
  }
  LiveRC_GetTranslatedMessages((data.index+1), data.langlist, data.messageslist, data.update, data.input);
};

window.LiveRC_GetTranslatedMessagesDone = function(data){
  if(data.update===true){
    UpdateSiteConfig(data.input);
  }else{
    LiveRC_RunHooks("AfterGotSiteInfos");
    LiveRC_LaunchProcessNextStep();
  }
};

window.UpdateSiteConfig = function(input){
    lrcDisplayDebug("Save site config Running");
    var GeneralConfig = "\n/* ** "+lrcMakeText("MWGeneralConfigLegend") + " ** */\n\n"
                 + "  try{\n";
    for(var generalname in LiveRC_Config["MediawikiGeneralConfig"]){
        GeneralConfig += "    LiveRC_Config[\"MediawikiGeneralConfig\"][\""+generalname+"\"] = "+lrcEscapeStrHTML(LiveRC_Config["MediawikiGeneralConfig"][generalname])+";\n";
    }
    GeneralConfig += "  }catch(e){ }\n\n";


    var UserGroups = "\n/* ** "+lrcMakeText("MWGroupsLegend") + " ** */\n\n"
                   + "  try{\n";
    UserGroups += "    LiveRC_Config[\"MediawikiUsergroups\"] = {\n";
    var grouplist = [];
    for(var group in LiveRC_Config["MediawikiUsergroups"]){
        var thisgrouplist = "      "+lrcEscapeStrHTML(group)+" : [";
        var permissions = LiveRC_Config["MediawikiUsergroups"][group];
        for(var p=0,plen=permissions.length;p<plen;p++){
          thisgrouplist += (p!==0 ? "," : "") + lrcEscapeStrHTML(permissions[p]);
        }
        grouplist.push(thisgrouplist+"]");
    }
    UserGroups += grouplist.join(",\n") + "\n    };\n"
    UserGroups += "  }catch(e){ }\n\n";
    var Languages = "\n/* ** "+lrcMakeText("MWLanguagesLegend") + " ** */\n\n"
                 + "  try{\n";
    Languages += "    LiveRC_Config[\"MediawikiLanguages\"] = {";
    var langlist = [];
    for(var langcode in LiveRC_Config["MediawikiLanguages"]){
        var langName = LiveRC_Config["MediawikiLanguages"][langcode];
        langlist.push(lrcEscapeStrHTML(langcode)+":"+lrcEscapeStrHTML(langName));
    }
    Languages += langlist.join(",") + "};\n"
    Languages += "  }catch(e){ }\n\n";
    var Messages = "\n/* ** "+lrcMakeText("MWMessagesLegend") + " ** */\n\n"
                 + "  try{\n";
    for(var MessageName in LiveRC_Config["MediawikiMessages"]){
        Messages += "    LiveRC_Config[\"MediawikiMessages\"][\""+MessageName+"\"] = {"
        var MessageList = [];
        for(var lang in LiveRC_Config["MediawikiMessages"][MessageName]){
            var MessageValue = LiveRC_Config["MediawikiMessages"][MessageName][lang];
            MessageList.push( lrcEscapeStrHTML(lang) + ":" + lrcEscapeStrHTML(MessageValue) );
        }
        Messages += MessageList.join(",") + "};\n";
    }
    Messages += "  }catch(e){ }\n\n";
    var Extensions = "\n/* ** "+lrcMakeText("MWExtensionsLegend") + " ** */\n\n"
                   + "  try{\n";
    for(var ExtensionName in LiveRC_Config["MediawikiExtensions"]){
        Extensions += "    LiveRC_Config[\"MediawikiExtensions\"][\""+ExtensionName+"\"] = true;\n";
    }
    Extensions += "  }catch(e){ }\n\n";

    var Namespaces = "\n/* ** "+lrcMakeText("MWNamespacesLegend") + " ** */\n\n"
                   + "  try{\n";
    for(var nsnumber in LiveRC_Config["MediawikiNamespaces"]){
        Namespaces += "    LiveRC_Config[\"MediawikiNamespaces\"][\""+nsnumber+"\"] = {";
        var thisNS = [];
        for(var el in LiveRC_Config["MediawikiNamespaces"][nsnumber]){
            var val = LiveRC_Config["MediawikiNamespaces"][nsnumber][el];
            if(typeof(val)==="object"){
                var vals = [];
                for(var a=0,l=val.length;a<l;a++){ vals.push(lrcEscapeStrHTML(val[a])); }
                thisNS.push(lrcEscapeStrHTML(el)+":["+vals.join(",")+"]");
            }else{
                thisNS.push(lrcEscapeStrHTML(el)+":"+lrcEscapeStrHTML(val));
            }
        }
        Namespaces += thisNS.join(",") + "};\n";
    }
    Namespaces += "  }catch(e){ }\n\n";
    var Magicwords = "\n/* ** "+lrcMakeText("MWMagicwordsLegend") + " ** */\n\n"
                   + "  try{\n";
    for(var aliasname in LiveRC_Config["MediawikiMagicwords"]){
       var aliases = [];
       var val =LiveRC_Config["MediawikiMagicwords"][aliasname];
       for(var a=0,l=val.length;a<l;a++){ aliases.push(lrcEscapeStrHTML(val[a])); }
       Magicwords += "    LiveRC_Config[\"MediawikiMagicwords\"][\""+aliasname+"\"] = ["+aliases.join(",")+"];\n";
    }
    Magicwords += "  }catch(e){ }\n\n";
    var Interwikimap = "\n/* ** "+lrcMakeText("MWInterwikimapLegend") + " ** */\n\n"
                 + "  try{\n";
    for(var Interwiki in LiveRC_Config["MediawikiInterwikimap"]){
        Interwikimap += "    LiveRC_Config[\"MediawikiInterwikimap\"][\""+Interwiki+"\"] = {";
        var IWparams = [];
        for(var param in LiveRC_Config["MediawikiInterwikimap"][Interwiki]){
            var paramValue = LiveRC_Config["MediawikiInterwikimap"][Interwiki][param];
            IWparams.push( lrcEscapeStrHTML(param) + ":" + lrcEscapeStrHTML(paramValue) );
        }
        Interwikimap += IWparams.join(",") + "};\n"
    }
    Interwikimap += "  }catch(e){ }\n\n";
    var Wikibase = "";
    if(lrcGetObjectLength(LiveRC_Config["MediawikiWikibase"])!==0){
      Wikibase = "\n/* ** "+lrcMakeText("MWWikibaseLegend") + " ** */\n\n"
                 + "  try{\n";
      for(var itemname in LiveRC_Config["MediawikiWikibase"]){
        var itemvalue = LiveRC_Config["MediawikiWikibase"][itemname];
        Wikibase += "    LiveRC_Config[\"MediawikiWikibase\"]["+lrcEscapeStrHTML(itemname)+"] = " + lrcEscapeStrHTML(itemvalue) + ";\n";
      }
      Wikibase += "  }catch(e){ }\n\n";
    }
    var Tags = "";
    if(lrcGetObjectLength(LiveRC_Config["MediawikiTags"])!==0){
      Tags = "\n/* ** "+lrcMakeText("MWTagsLegend") + " ** */\n\n"
                 + "  try{\n";
      for(var tagname in LiveRC_Config["MediawikiTags"]){
        Tags += "    LiveRC_Config[\"MediawikiTags\"][" + lrcEscapeStrHTML(tagname) + "] = { ";
        var taglines = [];
        for(var taginfoindex in LiveRC_Config["MediawikiTags"][tagname]){
          var taginfo = LiveRC_Config["MediawikiTags"][tagname][taginfoindex];
          var taginfovalue = taginfo;
          if(typeof(taginfo) === "string") taginfovalue = lrcEscapeStrHTML(taginfo);
          else if(typeof(taginfo)==="object"){
            taginfovalue = "[";
            for(var ti=0,tilen=taginfo.length;ti<tilen;ti++){
                taginfovalue += ((ti===0) ? "" : ",")+lrcEscapeStrHTML(taginfo[ti]);
            }
            taginfovalue += "]";
          }
          taglines.push(lrcEscapeStrHTML(taginfoindex)+" : " + taginfovalue );

        }
        Tags += taglines.join(", ") + " };\n";
      }
      Tags += "  }catch(e){ }\n\n";
    }
    var SavedText = LiveRC_Config["MediawikiConfigComment1"] + "\n\n"
                  + "/* ---- "+lrcMakeText("MWSiteGlobalLegend") + " ---- */\n\n"
                  + "window.LiveRC_getSiteConfig = function(){\n  lrcDisplayDebug('getSiteConfig');\n"
                  + GeneralConfig
                  + UserGroups
                  + Languages
                  + Namespaces
                  + Extensions
                  + Messages
                  + Magicwords
                  + Interwikimap
                  + Wikibase
                  + Tags
                  + "}\n\n"+LiveRC_Config["MediawikiConfigComment2"];
    var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:LiveRC_Config["SiteConfigPage"]});
    wpajax.http({ url: URL,
                onSuccess: UpdateSiteConfigRaw,
                messages: SavedText,
                input:input
    });
};

window.UpdateSiteConfigRaw = function(Req, data){
    var URL = lrcGetUglyPageURL(LiveRC_Config["SiteConfigPage"],'&action=raw');
    wpajax.http({ url: URL,
                onSuccess: UpdateSiteConfigRunning,
                onFailure: UpdateSiteConfigRunning,
                messages: data.messages,
                input:data.input,
                xml:Req.responseXML
    });
};

window.UpdateSiteConfigRunning = function(Req, data){
    var NewText = data.messages;
    var OldText = Req.responseText;
    if(OldText){
        if(OldText.indexOf(LiveRC_Config["MediawikiConfigComment1"])!=-1){
            lrcDisplayDebug("Found comment 1");
            var BeforeOldText = OldText.substring(0, OldText.indexOf(LiveRC_Config["MediawikiConfigComment1"]));
            NewText = BeforeOldText + NewText;
        }
        if(OldText.indexOf(LiveRC_Config["MediawikiConfigComment2"])!=-1){
            lrcDisplayDebug("Found comment 2");
            var index = OldText.indexOf(LiveRC_Config["MediawikiConfigComment2"])+LiveRC_Config["MediawikiConfigComment2"].length;
            var AfterOldText = OldText.substring(index, OldText.length);
            NewText = NewText + AfterOldText;
        }
    }
    var EditParam = {};
    var Page = data.xml.getElementsByTagName("page")[0];
    EditParam["token"] = encodeURIComponent(Page.getAttribute("edittoken"));
    EditParam["text"] = encodeURIComponent(NewText);
    EditParam["summary"] = encodeURIComponent(lrcMakeText("RESUMESTART")+lrcMakeText("UPDATEMESSAGES"));
    EditParam["title"] = encodeURIComponent(LiveRC_Config["SiteConfigPage"]);
    EditParam["watchlist"] = "preferences";
    if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
    if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];

    var Params = [];
    for(var Param in EditParam){
        Params.push(Param+"="+EditParam[Param]);
    }
    Params = Params.join("&");
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: lrcGetAPIURL({action:'edit'}),
                  method: "POST", headers: headers,
                  onSuccess:UpdateSiteConfigDone,
                  data: Params,
                  input:data.input
    });
};

window.UpdateSiteConfigDone = function(Req, data){
   if(data.input){
    data.input.value = lrcMakeText("MWSiteInfoLegendDone");
  }
  lrcDisplayDebug("Save site config Done");
};

window.LiveRC_UpdateSIParams = function(){
  for(var opt in Custom_lrcOptionMenuValues){
    if(opt.indexOf("Tags_") ===0){
      if(typeof(LiveRC_Config["MediawikiTags"][(opt.replace(/Tags_/, ""))]) === "undefined") delete Custom_lrcOptionMenuValues[opt];
    }
    if(opt.indexOf("NS_") ===0){
      if(typeof(LiveRC_Config["MediawikiNamespaces"][(opt.replace(/NS_/, ""))]) === "undefined") delete Custom_lrcOptionMenuValues[opt];
    }
    if(opt.indexOf("UserG_") ===0){
      if(typeof(LiveRC_Config["UserGroupList"][(opt.replace(/UserG_/, "").toLowerCase())]) === "undefined") delete Custom_lrcOptionMenuValues[opt];
    }
  }
  for(var opt in lrcOptionMenuValues){
    if(opt.indexOf("Tags_") ===0){
      if(typeof(LiveRC_Config["MediawikiTags"][(opt.replace(/Tags_/, ""))]) === "undefined") delete lrcOptionMenuValues[opt];
    }
    if(opt.indexOf("NS_") ===0){
      if(typeof(LiveRC_Config["MediawikiNamespaces"][(opt.replace(/NS_/, ""))]) === "undefined") delete lrcOptionMenuValues[opt];
    }
    if(opt.indexOf("UserG_") ===0){
      if(typeof(LiveRC_Config["UserGroupList"][(opt.replace(/UserG_/, "").toLowerCase())]) === "undefined") delete lrcOptionMenuValues[opt];
    }
  }
  LiveRC_LaunchProcessNextStep();
};

window.lrcGetMediawikiMessage = function(Message, translate, replaceItems){
  var MessageList = LiveRC_Config["MediawikiMessages"][Message];
  if(typeof(MessageList)!="object") return ("<"+Message+">").htmlize();
  var Mess;
  if(translate){
    Mess = LiveRC_Config["MediawikiMessages"][Message][lrcMakeParam("Language")];
  }
  if(typeof(Mess)=="undefined") Mess = LiveRC_Config["MediawikiMessages"][Message]["default"];
  if(typeof(replaceItems)!=="object") return Mess;
  for(var a=(replaceItems.length-1), l=-1;a>l;a--){
    Mess = Mess.split("$"+(a+1)).join(replaceItems[a]);
  }
  return Mess;
};

window.lrcGetNamespaceName = function(nsnumber, translate){
  var NS = LiveRC_Config["MediawikiNamespaces"][nsnumber];
  if(!NS) return null;
  if(translate && lrcMakeParam("Language") != LiveRC_Config["MediawikiGeneralConfig"]["lang"]){
    return LiveRC_Config["MediawikiNamespaces"][nsnumber]["canonicalname"];
  }
  return LiveRC_Config["MediawikiNamespaces"][nsnumber]["localname"];
};

window.lrcIsExtensionInstalled = function(ExtensionName){
  return (LiveRC_Config["MediawikiExtensions"][ExtensionName] === true);
};

window.LiveRC_getActiveTags = function(OldTags){
  var alltags = OldTags || LiveRC_Config["MediawikiTags"];
  var tags = {};
  for(var tagname in alltags){
    var thistag = alltags[tagname];
    if(thistag.active) tags[tagname] = thistag;
  }
  return tags;
};

window.LiveRC_getSourcedTags = function(OldTags){
  var alltags = OldTags || LiveRC_Config["MediawikiTags"];
  var tags = {};
  for(var tagname in alltags){
    var thistag = alltags[tagname];
    if(thistag.source && thistag.source.length > 0 ) tags[tagname] = thistag;
  }
  return tags;
};

window.LiveRC_getManualTags = function(OldTags){
  var alltags = OldTags || LiveRC_Config["MediawikiTags"];
  var tags = {};
  for(var tagname in alltags){
    var thistag = alltags[tagname];
    if(thistag.source && thistag.source.length > 0 && thistag.source.indexOf("manual") !== -1) tags[tagname] = thistag;
  }
  return tags;
};

/* </source>

==== Récupération de la liste des administrateurs et des bots ====

<source lang="javascript"> */

window.liveUsersInGroups = function(){
  var promises = [];
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof LiveRC_Config["UserGroupList"][group] === "object" && typeof LiveRC_Config["UserGroupList"][group].list === "object"){
      lrcDisplayDebug("Get "+group+" users");
      var deferred = $.Deferred();
      getUsersInGroup(group, deferred);
      promises.push(deferred.promise());
    }
  }
  $.when.apply($, promises).then(function(){
    LiveRC_LaunchProcessNextStep();
  });
};

window.getUsersInGroup = function(group, deferred, userContinue){
  var params = {
    "action"  : "query",
    "list"    : "allusers",
    "augroup" : group,
    "aulimit" : LiveRC_Config["UserInfos"].APIlimit,
  };
  if(userContinue){
    $.extend(params, userContinue);
  }
  new mw.Api()
    .get(params)
    .done(function(data){
      var grouplist = LiveRC_Config["UserGroupList"][group].list;
      data.query.allusers.forEach(function(user){
        grouplist.push(user.name);
      });
      if(data["continue"]){
        getUsersInGroup(group, deferred, data["continue"]);
      }else{
        lrcDisplayDebug("Found "+grouplist.length+" members of « "+group+" » group: "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+grouplist.join(", ")+" ]</span>");
        deferred.resolve();
      }
    })
    .fail(function(){
      lrcDisplayDebug("Error when getting "+group+" users");
      deferred.reject();
    });
};

window.lrcGetGroupState = function(user, state){
  if(!state) state = [];
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof(LiveRC_Config["UserGroupList"][group]) === "object"){
      if(lrcUserHasGroup(group, user)) lrcAddState(state, group.toUpperCase());
    }
  }
  return state;
};

window.lrcGetGroupIcon = function(preEditor, state){
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof(LiveRC_Config["UserGroupList"][group]) === "object"){
      if(lrcHasState(state, group.toUpperCase()))  preEditor += lrcMakeIcon(group.ucFirst()+"Icon", {after:'&nbsp;'});
    }
  }
  return preEditor;
};

window.lrcGetGroupClass = function(tr1, state){
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof(LiveRC_Config["UserGroupList"][group]) === "object"){
      if(lrcHasState(state, group.toUpperCase()))   lrcAddClass(tr1, "Rc"+group.ucFirst());
    }
  }
};


/* </source>

==== Récupération de la liste de suivi ====

<source lang="javascript"> */

window.liveWatch = function() {
  lrcDisplayDebug("Get watchlist");
  var APIlimit = LiveRC_Config["UserInfos"].APIlimit;
  var URL = lrcGetAPIURL({format:'xml',action:'query',list:'watchlistraw'});
  if(lrcMakeParam("GetPageInfos")){ // we don't need all watchlist if we get each page infos
    URL += '&wrcontinue=0|LiveRC';
    APIlimit = Math.round(APIlimit/10);
  }
  URL += '&wrlimit=' + APIlimit
       + '&continue=';
  wpajax.http({url:URL,
               onSuccess: getWatch,
               suivi:[],
               contact:[],
               hiddenUser:[],
               hiddenPage:[]
  });
};

window.getWatch = function(xmlreq, data){
  var Contact_Temp = data.contact;
  var HiddenUser_Temp = data.hiddenUser;
  var HiddenPage_Temp = data.hiddenPage;
  var Suivi_Temp = data.suivi;
  if(!xmlreq.responseXML) return;
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  var WatchPrefix = 'LiveRCWatch:';
  var HiddenUserPrefix = 'LiveRCHidden:';
  var HiddenPagePrefix = 'LiveRCHiddenPage:';
  if (api.firstChild.nodeName == "error") return;
  var rcs = api.getElementsByTagName('wr');
  leni=rcs.length;
  for (i=0; i<leni; i++) {
    var page = rcs[i].getAttribute('title');
    if (page.substr(0, WatchPrefix.length) == WatchPrefix) {
      page = page.substr(WatchPrefix.length, page.length);
      Contact_Temp[page] = {};
      Contact_Temp[page].ts = "--:--";
      Contact_Temp[page].edits = [];
    } else if (page.substr(0, HiddenUserPrefix.length) == HiddenUserPrefix) {
      page = page.substr(HiddenUserPrefix.length, page.length);
      HiddenUser_Temp[page] = {};
      HiddenUser_Temp[page].ts = "--:--";
      HiddenUser_Temp[page].edits = [];
    } else if (page.substr(0, HiddenPagePrefix.length) == HiddenPagePrefix) {
      page = page.substr(HiddenPagePrefix.length, page.length);
      HiddenPage_Temp[page] = {};
      HiddenPage_Temp[page].ts = "--:--";
      HiddenPage_Temp[page].edits = [];
    } else if(!lrcMakeParam("GetPageInfos")){
      Suivi_Temp[page] = {};
      Suivi_Temp[page].ts = "--:--";
      Suivi_Temp[page].edits = [];
      var sothername = lrcGetOtherPagename(page);
      if(sothername){
        Suivi_Temp[sothername] = {};
        Suivi_Temp[sothername].ts = "--:--";
        Suivi_Temp[sothername].edits = [];
      }
    }
  }
  var wc1=api.getElementsByTagName('continue')[0];
  if (wc1){
    var wrcontinue = wc1.getAttribute('wrcontinue');
    if(!lrcMakeParam("GetPageInfos") || wrcontinue.indexOf("0|LiveRC")!=-1){
      var URL = lrcGetAPIURL({format:'xml',action:'query',list:'watchlistraw',wrcontinue:wrcontinue,'continue':''});
      var APIlimit = LiveRC_Config["UserInfos"].APIlimit;
      if(lrcMakeParam("GetPageInfos")) APIlimit = Math.round(APIlimit/10);
      URL += '&wrlimit=' + APIlimit;
      wpajax.http({url:URL,
          onSuccess: getWatch,
          suivi:Suivi_Temp,
          contact:Contact_Temp,
          hiddenUser:HiddenUser_Temp,
          hiddenPage:HiddenPage_Temp
      });
      return;
    }
  }
  LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"] = Suivi_Temp;
  LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"] = Contact_Temp;
  LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"] = HiddenUser_Temp;
  LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"] = HiddenPage_Temp;
  LiveRC_Config["ListLoaded"]["Watchlist"] = true;
  var lists = {"liveHidden" : "hidden users", "liveHiddenPages": "hidden pages", "liveContact" : "watched users"};
  if(!lrcMakeParam("GetPageInfos")) lists["liveSuivi"] = "watched pages";
  for(var listname in lists){
    var thislist = lrcGetObjectIndexes(LiveRC_Config["SpecialLogListConfig"][listname]["Values"]);
    lrcDisplayDebug("Found "+thislist.length+" "+lists[listname]+": "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+thislist.join(", ")+" ]</span>");
  }
  LiveRC_ManageParams_AddContactListMenu();
  LiveRC_ManageParams_AddHiddenListMenu();
  LiveRC_ManageParams_AddHiddenPagesListMenu();
  LiveRC_LaunchProcessNextStep();
};

/* </source>

==== Récupération des derniers blocages ====

<source lang="javascript"> */

window.loadBlocks = function(){
  lrcDisplayDebug("Get blocked users");
  var blocksLimit = 1000;
  var queryLimit = Math.min(LiveRC_Config["UserInfos"].APIlimit, blocksLimit);
  var URL = lrcGetAPIURL({format:'xml',action:'query',list:'logevents',leaction:'block/block',leprop:'title',lelimit:queryLimit,'continue':''});
  wpajax.http({url: URL,
                 onSuccess: readBlocks,
                 remaining: blocksLimit - queryLimit,
                 blocked:[]
  });
};

window.readBlocks = function(xmlreq, data) {
  var items = xmlreq.responseXML.getElementsByTagName('item');
  var Blocks_Temp = data.blocked;
  for(var i=0,lst=items.length;i<lst;i++){
    var item = items[i];
    var user = item.getAttribute('title');
    if (user != null) {
      user = user.substr(user.indexOf(':') + 1);
      Blocks_Temp.push(user);
    }
  }
  var cancontinue = xmlreq.responseXML.getElementsByTagName('continue')[0];
  if(data.remaining > 0 && cancontinue) {
    var queryLimit = Math.min(LiveRC_Config["UserInfos"].APIlimit, data.remaining);
    var lecontinue = cancontinue.getAttribute('lecontinue');
    var URL = lrcGetAPIURL({format:'xml',action:'query',list:'logevents',leaction:'block/block',leprop:'title',lelimit:queryLimit,lecontinue:lecontinue,'continue':''})
    wpajax.http({url: URL,
                 onSuccess: readBlocks,
                 remaining: data.remaining - queryLimit,
                 blocked:Blocks_Temp
    });
  }else {
    LiveRC_Config["Blocks"] = Blocks_Temp;
    var BlockIndexes = LiveRC_Config["Blocks"];
    lrcDisplayDebug("Found "+BlockIndexes.length+" recently blocked users: "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+BlockIndexes.join(", ")+" ]</span>");
    LiveRC_LaunchProcessNextStep();
  }
};

/* </source>

==== Récupération des catégories d'utilisateurs ====

<source lang="javascript"> */

window.loadUsersInCats = function(){
  LiveRC_Config["watchCategoriesLoaded"] = [];
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;
  LiveRC_Config["UserCategoriesList"] = {};
  for(var i=0,l=UCategories.length;i<l;i++){
    var Cat = UCategories[i].category;
    LiveRC_Config["UserCategoriesList"][Cat] = [];
    lrcDisplayDebug("Get category members: « "+Cat+" »");
    LiveRC_Config["watchCategoriesLoaded"][Cat] = false;
    var URL = lrcGetAPIURL({format:'xml',action:'query',list:'categorymembers',cmtitle:lrcGetNamespaceName(14)+":"+Cat,cmprop:'title',cmlimit:LiveRC_Config["UserInfos"].APIlimit,'continue':''});
    wpajax.http({url: URL,
                 onSuccess: fillUserCat,
                 wcIndex: i,
                 category:Cat
    });
  }
};

window.fillUserCat = function(xmlreq,data) {
  var Cat = data.category;
  var cats = xmlreq.responseXML.getElementsByTagName('cm');
  for(var a = 0; a < cats.length; a++) {
    var ns = parseInt(cats[a].getAttribute('ns'));
    if (ns == 2 || ns == 3) {
      var title = cats[a].getAttribute('title').split(lrcGetNamespaceName(3)+":").join("");
      title = title.split(lrcGetNamespaceName(2)+":").join("").split("/")[0];
      if(typeof(LiveRC_Config["UserCat"][title])=="undefined") LiveRC_Config["UserCat"][title] = [];
      LiveRC_Config["UserCat"][title][data.wcIndex] = true;
      LiveRC_Config["UserCategoriesList"][Cat].push(title);
    }else{
      continue;
    }
  }
  var cmcontinue="";
  var continueTag = xmlreq.responseXML.getElementsByTagName('continue')[0];
  if (continueTag) {
    cmcontinue = continueTag.getAttribute('cmcontinue');
    var URL = lrcGetAPIURL({
      format:'xml',
      action:'query',
      list:'categorymembers',
      cmtitle:lrcGetNamespaceName(14)+":"+Cat,
      cmprop:'title',
      cmlimit:LiveRC_Config["UserInfos"].APIlimit,
      cmcontinue:cmcontinue,
      'continue':''
    });
    wpajax.http({url: URL,
                 onSuccess: fillUserCat,
                 wcIndex: data.wcIndex,
                 category:data.category
    });
  }else{
    var UserList = LiveRC_Config["UserCategoriesList"][Cat];
    lrcDisplayDebug("Found "+UserList.length+" members of « "+Cat+" » category: "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+UserList.join(", ")+" ]</span>");
    LiveRC_Config["watchCategoriesLoaded"][Cat] = true;
    var AllCatsLoaded = true;
    for(var cat in LiveRC_Config["watchCategoriesLoaded"]){
      if(LiveRC_Config["watchCategoriesLoaded"][cat]===false) AllCatsLoaded = false;
    }
    if(AllCatsLoaded){
      lrcDisplayDebug("Category members : all loads OK");
      LiveRC_LaunchProcessNextStep();
    }
  }
};

/* </source>

==== Création de l'interface ====

<source lang="javascript"> */

// Add CSS classes for customization

window.lrcaddCustomizableClasses = function(thenode, classprefix){
  if(!thenode || !classprefix) return
  var classsuffixes = ["", "FS", "BG", "BD", "BR"];
  for(var a=0,l=classsuffixes.length;a<l;a++){
    lrcAddClass(thenode, classprefix+classsuffixes[a]);
  }
};

// Main function

window.lrcCreateInterface = function(){
  lrcDisplayDebug("Create interface");
  var LiveRCContainer = document.getElementById("LiveRCContainer");
  if(!LiveRCContainer) return;

  var PreloadIconsDiv = document.getElementById("PreloadIconsDiv");
  if(PreloadIconsDiv) PreloadIconsDiv.parentNode.removeChild(PreloadIconsDiv);

  var FixedTitlePanel = document.createElement("div");
  FixedTitlePanel.id = "FixedTitlePanel";
  lrcaddCustomizableClasses(FixedTitlePanel, "FixedTitlePanel");
  LiveRCContainer.appendChild(FixedTitlePanel);

  var TitleTable = document.createElement("table");
  TitleTable.id = "TitleTable";
  TitleTable.setAttribute("cellspacing","0");
  TitleTable.setAttribute("cellpadding","0");
  TitleTable.setAttribute("width","100%");
  TitleTable.innerHTML = ''
      + '<tr>'
        + '<td id="LiveRCButtons" valign="middle" width="1%" >'
          + '<span id="LiveRCTchatButtonOn" width="3px">'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("TchatButtonIcon")+'</a></span>'
          + '</span>'
          + '<span id="LiveRCTchatButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("TchatButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCDebugButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("DebugButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCDebugButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("DebugButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCConfigButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("ConfigButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCConfigButtonOff" >'
            + '<span class="OffButton"><a href="#">'+lrcMakeIcon("ConfigButtonIcon")+'</a></span>'
          + '</span>'
          + ' '
          + '<span id="LiveRCButtonOn" >'
            + '<span class="OnButton"><a href="#">'+lrcMakeIcon("LiveRCButtonIcon")+'</a></span>'
            + ' '
            + '<span id="LiveRCRCTableButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("RCListButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCRCTableButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("RCListButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCFollowButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("FollowButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCFollowButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("FollowButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCPreviewButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("PreviewButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCPreviewButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("PreviewButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCHistoryButtonOn" >'
              + '<span class="OnButton"><a href="#">'+lrcMakeIcon("HistoryButtonIcon")+'</a></span>'
            + '</span>'
            + ' '
            + '<span id="LiveRCHistoryButtonOff" >'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("HistoryButtonIcon")+'</a></span>'
            + '</span>'
          + '</span>'
          + '<span id="LiveRCButtonOff">'
              + '<span class="OffButton"><a href="#">'+lrcMakeIcon("LiveRCButtonIcon")+'</a></span>'
          + '</span>'
        + '</td>'
        + '<td id="LiveRCTitle" align="center" valign="middle" style="display:none;font-size:80%;font-weight:bold;">'
          + '<a href="#"><span id="ClockSpanTitle">xx:xx:xx</span></a>'
          + '&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;'
          + '<span id="lrcLogo">'+lrcMakeIcon("LogoIcon")+'</span>'
          + '<span id="lrcAnimatedLogo" style="display:none">'+lrcMakeIcon("AnimatedLogoIcon")+'</span>'
          + '&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;'+lrcMakeText("Version")+' <span id="TestedVersion">'+ LiveRC_Version+'</span>'
        + '</td>'
        + '<td id="LiveRCTimer" align="right" valign="middle" style="display:none;font-size:80%;font-weight:bold;">'
        + '</td>'
      + '</tr>';
  FixedTitlePanel.appendChild(TitleTable);
  lrcaddCustomizableClasses(document.getElementById("LiveRCButtons"), "LiveRCButtons");

  var FixedTopPanel = document.createElement('div');
  FixedTopPanel.id = "FixedTopPanel";
  FixedTitlePanel.appendChild(FixedTopPanel);

  var livePreviewFoot = document.createElement("table");
  livePreviewFoot.id = "livePreviewFoot";
  lrcaddCustomizableClasses(livePreviewFoot, "livePreviewFoot");
  livePreviewFoot.setAttribute("cellspacing","0");
  livePreviewFoot.setAttribute("cellpadding","0");
  livePreviewFoot.setAttribute("width","100%");
  livePreviewFoot.innerHTML = ''
      + '<tr>'
        + '<td valign="middle" > '
        + '</td>'
      + '</tr>';
  FixedTitlePanel.appendChild(livePreviewFoot);


  var liveRC_RCList = document.createElement("div");
  liveRC_RCList.id = "liveRC_RCList";
  liveRC_RCList.innerHTML = ''
    + '<div id="divTabRC">'
      + '<table id="tabRC" cellspacing="0" cellpadding="0" />'
    + '</div>';
  FixedTitlePanel.appendChild(liveRC_RCList);
  lrcaddCustomizableClasses(liveRC_RCList, "liveRC_RCList");
  lrcaddCustomizableClasses(document.getElementById("divTabRC"), "divTabRC");
  lrcaddCustomizableClasses(document.getElementById("tabRC"), "tabRC");

  var liveRC_ON = document.createElement("div");
  liveRC_ON.id = "liveRC_ON";
  LiveRCContainer.appendChild(liveRC_ON);

  var FixedBottomPanel = document.createElement("div");
  FixedBottomPanel.id = "FixedBottomPanel";
  liveRC_ON.appendChild(FixedBottomPanel);

  var LiveRC_Preview = document.createElement("div");
  LiveRC_Preview.id = "LiveRC_Preview";
  LiveRC_Preview.className = "LiveRC_MenuContainer";
  lrcaddCustomizableClasses(LiveRC_Preview, "LiveRC_Preview");
  var LivePreviewTitleHTML = ''
        + '<div id="livePreviewTitle" class="LiveRC_MenuAnchor">'
          + '<table width="100%"><tr>'
          + '<td id="PreviewTitleTD1" align="left" style="vertical-align:middle">'
            + '<span id="livePreviewFirstTitle">'+lrcMakeText("LiveRC_PreviewTitle") + '</span>'
          + '</td>'
          + '<td id="PreviewTitleTD2" align="right" style="vertical-align:middle"></td>'
          + '</tr><tr>'
          + '<td align="left" style="vertical-align:middle;"><small id="PreviewTitleTD3"></small></td>'
          + '<td id="PreviewTitleTD4" align="right" style="vertical-align:middle"></td>'
          + '</tr></table>'
        + '</div>';

  LiveRC_Preview.innerHTML = ''
        + (lrcMakeParam("ShowPreviewOnTop") ? '' : LivePreviewTitleHTML)
        + '<div id="divLivePreview" class="LiveRC_MenuContent" >'
          + '<div id="livePreview" style="height:'+lrcMakeParam("PreviewWindowHeight")+';">...</div>'
        + '</div>'
        + (lrcMakeParam("ShowPreviewOnTop") ? LivePreviewTitleHTML : '');

  if(lrcMakeParam("ShowPreviewOnTop")){
    FixedTopPanel.appendChild(LiveRC_Preview);
  }else{
    lrcAddClass(document.body, "LiveRCPreviewOnBottom");
    FixedBottomPanel.appendChild(LiveRC_Preview);
  }
  LiveRC_SetVerticalResizeZone(document.getElementById("livePreviewTitle"),
                          [document.getElementById("livePreview")],
                          document.getElementById("LiveRC_Preview"),
                          lrcMakeParam("ShowPreviewOnTop")
                         );
  lrcaddCustomizableClasses(document.getElementById("livePreviewTitle"), "LiveRC_MenuAnchor");
  lrcaddCustomizableClasses(document.getElementById("livePreviewTitle"), "livePreviewTitle");
  lrcaddCustomizableClasses(document.getElementById("livePreview"), "livePreview");
  lrcaddCustomizableClasses(document.getElementById("divLivePreview"), "LiveRC_MenuContent");

  var liveFollow = document.createElement("div");
  liveFollow.id = "liveFollow";
  liveFollow.className = "LiveRC_MenuContainer";
  lrcaddCustomizableClasses(liveFollow, "liveFollow");
  var FollowAnchor = document.createElement('div');
  FollowAnchor.id = "LiveRC_FollowAnchor";
  lrcaddCustomizableClasses(FollowAnchor, "LiveRC_MenuAnchor");
  FollowAnchor.innerHTML = lrcMakeText("LiveRC_FollowTitle");
  liveFollow.appendChild(FollowAnchor);
  var FollowButtons = document.createElement('p');
  FollowButtons.id = "LiveRC_FollowButtons";
  liveFollow.appendChild(FollowButtons);
  var FollowContent = document.createElement('div');
  FollowContent.id = "LiveRC_FollowContent";
  lrcaddCustomizableClasses(FollowContent, "LiveRC_MenuContent");
  liveFollow.appendChild(FollowContent);
  lrcMakeSpecialLogList();
  var Lists = LiveRC_Config["SpecialLogList"];
  var FollowTable = document.createElement('table');
  FollowTable.setAttribute("cellspacing", "0");
  FollowTable.setAttribute("cellpadding", "0");
  FollowTable.setAttribute("style", "width:100%");
  FollowContent.appendChild(FollowTable);
  var FollowTitlesTR = document.createElement('tr');
  var FollowContentTR = document.createElement('tr');
  FollowTable.appendChild(FollowTitlesTR);
  FollowTable.appendChild(FollowContentTR);
  for(var a=0, l=Lists.length;a<l;a++){
    var FollowTH = document.createElement("th");
    FollowTH.id = Lists[a]+"_th";
    FollowTH.innerHTML = lrcMakeText(Lists[a]+"Title");
    FollowTitlesTR.appendChild(FollowTH);
    var FollowTD = document.createElement('td');
    FollowTD.id = Lists[a]+"_td";
    FollowTD.setAttribute("valign", "top");
    FollowContentTR.appendChild(FollowTD);
    var FollowListDiv = document.createElement('div');
    lrcAddClass(FollowListDiv, "VResize");
    FollowListDiv.id = Lists[a];
    FollowListDiv.style.height = lrcMakeParam("FollowWindowHeight");
    FollowTD.appendChild(FollowListDiv);
    var Button = document.createElement("input");
    Button.type = "button";
    Button.id = Lists[a]+"_button";
    Button.value = lrcMakeText(Lists[a]+"Title");
    Button.setAttribute("style", "color:darkGreen;");
    Button.onclick = function(){ LiveRC_ToggleFollow(this); };
    Button.onselect = function(){ LiveRC_ToggleFollow(this); };
    FollowButtons.appendChild(Button);
  }
  FixedBottomPanel.appendChild(liveFollow);
  LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_FollowAnchor"),
                          lrcGetElementsByClass("VResize",document.getElementById("LiveRC_FollowContent"),"div"),
                          document.getElementById("liveFollow")
  );
  LiveRC_Config["Timeout"]["FollowLists"] = setTimeout("LiveRC_liveFollow_SetMenuHeights()", 500);

  var OutFixedBottomPanel = document.createElement("div");
  OutFixedBottomPanel.id = "OutFixedBottomPanel";
  lrcaddCustomizableClasses(OutFixedBottomPanel, "OutFixedBottomPanel");
  LiveRCContainer.appendChild(OutFixedBottomPanel);

  if(lrcMakeOption("LiveRCRCTableDisplayed")) lrcToggleLiveRCButton("LiveRCRCTableDisplayed");
  if(lrcMakeOption("LiveRCPreviewDisplayed")) lrcToggleLiveRCButton("LiveRCPreviewDisplayed");
  if(lrcMakeOption("LiveRCTchatDisplayed")) buildTchatWindow();
  if(lrcMakeOption("LiveRCFollowDisplayed")) lrcAddClass(document.body, "LiveRCLiveFollowDisplayed");
  for(var a=0, l=Lists.length;a<l;a++){
    if(!lrcMakeOption("Display"+Lists[a])) LiveRC_ToggleFollow(document.getElementById(Lists[a]+"_button"));
  }
  LiveRC_ToggleFollow_setTHWidths();
  lrcToggleLogo(true);
  LiveRC_CreateDebug();
  lrcCreateHistory();
  lrcFixPosition();
  lrcSetClocks();
  lrcMakeButtons();
  LiveRC_CreateTimer();
  LiveRC_CheckLiveRCVersion();
  lrcInitTableHeight();
  buildControlBar();
  LiveRC_LaunchProcessNextStep();
};

// Extraction de l'interface LiveRC

window.lrcFixPosition = function(){
    var LiveRCContainer = document.getElementById("LiveRCContainer");
    if(!LiveRCContainer) return;
    LiveRCContainer.parentNode.removeChild(LiveRCContainer);
    document.body.insertBefore(LiveRCContainer, document.body.firstChild);

    var Next = LiveRCContainer.nextSibling;
    var OtherContainer = document.createElement('div');
    OtherContainer.id = "OtherContainer";
    while(Next){
        Next.parentNode.removeChild(Next);
        OtherContainer.appendChild(Next)
        Next = LiveRCContainer.nextSibling
    }
    document.body.appendChild(OtherContainer);
    updatePreviewWindowAttributes();
    LiveRCContainer.style.display = "";
    if(lrcMakeOption("LiveRCDisplayed")) lrcToggleLiveRC();
};

window.lrcCreateMissingParams = function(){
  var checkuserrights = (mw.config.get('wgPageName').replace(/_/g, " ") === LiveRC_Config["InstallationPage"]);
  // Logtypes
  for(var lrcLogtype in LiveRC_Config["LogNames"]){
    var lrcLogExtension = LiveRC_Config["LogNames"][lrcLogtype]["extension"];
    if(typeof(lrcLogExtension)=="string" && !lrcIsExtensionInstalled(lrcLogExtension)){
      try{ delete lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete Custom_lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      try{ delete Custom_lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      continue;
    }
    var lrcLogRight = LiveRC_Config["LogNames"][lrcLogtype]["right"];
    if(typeof(lrcLogRight)=="string" && !lrcUserHasRight(lrcLogRight) && !checkuserrights){
      try{ delete lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      continue;
    }
    var lrcLogName = LiveRC_Config["LogNames"][lrcLogtype]["page"];
    if(lrcGetMediawikiMessage(lrcLogName, true)) lrcLogName = lrcGetMediawikiMessage(lrcLogName, true);
    else lrcLogName = ("<" + lrcLogName + ">").htmlize();
    if(typeof(lrcOptionMenuValues["Log_"+lrcLogtype])==="undefined") lrcOptionMenuValues["Log_"+lrcLogtype] = true;
    if(typeof(lrcTranslatedParamDesc["DescLog_"+lrcLogtype])==="undefined"){
      addTradToTranslatedParamDesc("DescLog_"+lrcLogtype, lrcMakeParam("Language"), lrcMakeText("showLog_StandardDesc").split("$1").join(lrcLogName));
    }
  }
  // Tags
  for(var tagname in LiveRC_getActiveTags(LiveRC_Config["MediawikiTags"])){
    var tagdesc = tagname.ucFirst();
    if(typeof(lrcOptionMenuValues["Tags_"+tagname])==="undefined") lrcOptionMenuValues["Tags_"+tagname] = true;
    if(typeof(lrcTranslatedParamDesc["DescTags_"+tagname])==="undefined"){
      addTradToTranslatedParamDesc("DescTags_"+tagname, lrcMakeParam("Language"), lrcMakeText("showTags_StandardDesc").split("$1").join(tagdesc));
    }
  }
  // Namespaces
  for(var id in LiveRC_Config["MediawikiNamespaces"]){
    var ns = lrcGetNamespaceName(id, true);
    if (id < 0) continue;
    if (id == 0) ns = lrcMakeText("MAIN_NAMESPACE");
    if(typeof(lrcOptionMenuValues[("NS_"+id)])==="undefined"){
      lrcOptionMenuValues[("NS_"+id)] = true;
    }
    if(typeof(lrcTranslatedParamDesc[("DescNS_"+id)])==="undefined"){
      addTradToTranslatedParamDesc(("DescNS_"+id), lrcMakeParam("Language"), lrcMakeText("showNS_StandardDesc").split("$1").join(ns));
    }
  }
  // User groups
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof(LiveRC_Config["UserGroupList"][group]) === "object"){
      var GROUP = group.toUpperCase();
      if(typeof(lrcOptionMenuValues[("UserG_"+GROUP)])==="undefined") lrcOptionMenuValues[("UserG_"+GROUP)] = (LiveRC_Config["UserGroupList"][group].show ? true : false );
      if(typeof(lrcTranslatedParamDesc[("DescUserG_"+GROUP)])==="undefined"){
        addTradToTranslatedParamDesc("DescUserG_"+GROUP, lrcMakeParam("Language"), lrcMakeText("showUser_StandardDesc").split("$1").join(lrcGetMediawikiMessage("group-"+group, true)));
      }
    }
  }
  // Log lists
  lrcMakeSpecialLogList(checkuserrights);
  LiveRC_LaunchProcessNextStep();
};

/* </source>

===== Boutons haut-gauche =====

<source lang="javascript"> */

// Mise en place des liens sur les boutons

window.lrcMakeButtons = function(){
    lrcUpdateButton("LiveRCButtonOn", false, function(){ lrcToggleLiveRC(); return false; });
    lrcUpdateButton("LiveRCButtonOff", false, function(){ lrcToggleLiveRC(); return false; });
    lrcUpdateButton("LiveRCFollowButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCLiveFollowDisplayed", true); return false; });
    lrcUpdateButton("LiveRCFollowButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCLiveFollowDisplayed", true); return false; });
    lrcUpdateButton("LiveRCPreviewButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCPreviewDisplayed"); return false; });
    lrcUpdateButton("LiveRCPreviewButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCPreviewDisplayed"); return false; });
    lrcUpdateButton("LiveRCFooterButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCFooterDisplayed"); return false; });
    lrcUpdateButton("LiveRCFooterButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCFooterDisplayed"); return false; })

    lrcUpdateButton("LiveRCRCTableButtonOff", false, function(){ lrcToggleLiveRCButton("LiveRCRCTableDisplayed", true); return false; });
    lrcUpdateButton("LiveRCRCTableButtonOn", false, function(){ lrcToggleLiveRCButton("LiveRCRCTableDisplayed", true); return false; })

    lrcUpdateButton("LiveRCTchatButtonOn", false, function(){ buildTchatWindow(); return false; });
    lrcUpdateButton("LiveRCTchatButtonOff", false, function(){ buildTchatWindow(); return false; });


    lrcUpdateButton("LiveRCDebugButtonOff", false, function(){LiveRC_OpenDebug(); return false; });
    lrcUpdateButton("LiveRCDebugButtonOn", false, function(){ LiveRC_CloseDebug(); return false; });

    lrcUpdateButton("LiveRCConfigButtonOff", false, function(){ LiveRC_ManageParams_OpenMenu(); return false; });
    lrcUpdateButton("LiveRCConfigButtonOn", false, function(){ LiveRC_ManageParams_OpenMenu(); return false; });

    lrcUpdateButton("LiveRCHistoryButtonOn", false, function(){ lrcCloseHistory(); return false; });
    lrcUpdateButton("LiveRCHistoryButtonOff", false, function(){ lrcGetAllHistory(); return false; });

    var Buttons = document.getElementById("LiveRCButtons");
    if(Buttons) Buttons.style.display = "";
};

// Mise en place d'un lien

window.lrcUpdateButton = function(ID, HREF, ONCLICK){
    var Button = document.getElementById(ID);
    if(!Button) return;
    var Link = Button.getElementsByTagName('a')[0];
    if(!Link) return;
    Link.href = (HREF ? HREF : "javascript:;");
    if(ONCLICK) Link.onclick = ONCLICK;
};

//////// Basculements de fenêtres //////

// Mode LiveRC/Normal

window.lrcToggleLiveRC = function(){
  var IDs = ["liveRC_ON", "livePreviewFoot", "liveRC_RCList", "FixedBottomPanel", "FixedTopPanel"];
  if(lrcHasClass(document.body, "FixedLiveRCContainer")){
    lrcRemoveClass(document.body, "FixedLiveRCContainer");
    for(var a=0,l=IDs.length;a<l;a++){
        var ThisNode = document.getElementById(IDs[a]);
        if(ThisNode) ThisNode.style.display = "none";
    }
  }else{
    lrcAddClass(document.body, "FixedLiveRCContainer");
    for(var a=0,l=IDs.length;a<l;a++){
        var ThisNode = document.getElementById(IDs[a]);
        if(ThisNode) ThisNode.style.display = "";
    }
    lrcInitTableHeight();
  }
};

// Ouverture fenêtre du bas ( prévisualisation / Listes / Footer / Historique )

window.lrcToggleLiveRCButton = function(ClassName, nocloseall){
  if(lrcHasClass(document.body, ClassName)){
    lrcRemoveClass(document.body, ClassName);
  }else{
    if(!nocloseall) lrcCloseAll();
    lrcAddClass(document.body, ClassName);
  }
  lrcInitTableHeight();
};

// Fermeture de toutes les fenêtres

window.lrcCloseAll = function(){
  var ClassN = ["LiveRCPreviewDisplayed", "LiveRCHistoryDisplayed"];
  for(var a=0,l=ClassN.length;a<l;a++){
    lrcRemoveClass(document.body, ClassN[a]);
  }
  lrcInitTableHeight();
};

/* </source>

===== Journaux de suivi =====

<source lang="javascript"> */

// Définition listes de suivi spéciales

window.lrcMakeSpecialLogList = function(checkuserrights){
  LiveRC_Config["SpecialLogList"] = [];
  var withFilters = ((lrcUserHasRight("abusefilter-log") || checkuserrights) && lrcIsExtensionInstalled("Abuse Filter"));
  var withSpam = ((lrcUserHasRight("spamblacklistlog") || checkuserrights) && lrcIsExtensionInstalled("SpamBlacklist"));
  var withPending = (lrcMakeParam("GetPageInfos") && lrcIsExtensionInstalled("Flagged Revisions"));
  lrcAddSpecialLogList("liveAbuseLog", withFilters);
  lrcAddSpecialLogList("liveTag");
  lrcAddSpecialLogList("liveSpam", withSpam);
  lrcAddSpecialLogList("liveRevoc");
  lrcAddSpecialLogList("liveNewUsers");
  lrcAddSpecialLogList("liveContact");
  lrcAddSpecialLogList("liveHidden");
  lrcAddSpecialLogList("liveNewPages");
  lrcAddSpecialLogList("liveSuivi");
  lrcAddSpecialLogList("liveHiddenPages");
  lrcAddSpecialLogList("livePendingChanges", withPending);
  LiveRC_RunHooks("AfterSpecialLogList");
  lrcMakeSpecialLogListOptions();
};

window.lrcAddSpecialLogList = function(listname, condition, nextlistname){
  if(!listname || condition === false){
    try{ delete lrcOptionMenuValues[("Display"+listname)] }catch(e){ };
    try{ delete Custom_lrcOptionMenuValues[("Display"+listname)] }catch(e){ };
    return;
  }
  if(!nextlistname){
    LiveRC_Config["SpecialLogList"].push(listname);
  }else{
    var index = LiveRC_Config["SpecialLogList"].indexOf(nextlistname);
    if(index === -1){
      LiveRC_Config["SpecialLogList"].push(listname);
    }else{
      LiveRC_Config["SpecialLogList"].splice(index,0,listname);
    }
  }
};

window.lrcMakeSpecialLogListOptions = function(){
  for(var a=0,l=LiveRC_Config["SpecialLogList"].length;a<l;a++){
    var Type = LiveRC_Config["SpecialLogList"][a];
    if(typeof(LiveRC_Config["SpecialLogListConfig"][Type])!=="object"){
      LiveRC_Config["SpecialLogListConfig"][Type] = {"Values" : {}, "DefaultState":true };
    }
    lrcOptionMenuValues[("Display"+Type)] = (LiveRC_Config["SpecialLogListConfig"][Type]["DefaultState"] ? true : false);
  }
};

// Fonctions pour les journaux de suivi

window.LiveRC_ToggleFollow = function(Input){
  if(!Input) return;
  Id = Input.id.split("_button").join("");
  var TH = document.getElementById(Id + '_th');
  var TD = document.getElementById(Id + '_td');
  if(!TH || !TD) return;
  if(TH.style.display == "none"){
    TH.style.display = "";
    TD.style.display = "";
    Input.style.color = "darkGreen";
  }else{
    TH.style.display = "none";
    TD.style.display = "none";
    Input.style.color = "red";
  }
  LiveRC_ToggleFollow_setTHWidths();
  LiveRC_ToggleFollow_setHeights(Input);
};

window.LiveRC_ToggleFollow_setTHWidths = function(){
  var FollowContent = document.getElementById("LiveRC_FollowContent");
  var THs = FollowContent.getElementsByTagName('th');
  var VisibleTHs = 0;
  for(var a=0,l=THs.length;a<l;a++){
    if(THs[a].style.display == "none") continue;
    VisibleTHs++
  }
  if(VisibleTHs==0) return;
  var Width = (Math.round(1000/VisibleTHs)/10) + "%";
  for(var a=0,l=THs.length;a<l;a++){
    THs[a].style.width = Width;
  }
};

window.LiveRC_ToggleFollow_setHeights = function(Input){
  if(!Input) return;
  Id = Input.id.split("_button").join("");
  var VResize = lrcGetElementsByClass("VResize",document.getElementById("LiveRC_FollowContent"),"div");
  var Height = false;
  for(var a=0,l=VResize.length;a<l;a++){
    if(VResize[a].style.display == "none" || Height!== false || VResize[a].id == Id) continue;
    Height = VResize[a].style.height;
  }
  var ThisVResize = document.getElementById(Id);
  if(ThisVResize) ThisVResize.style.height = Height;
};

// Égalisation de la hauteur des menus

window.LiveRC_liveFollow_SetMenuHeights = function(){
  var FollowContent = document.getElementById("LiveRC_FollowContent");
  if(!FollowContent) return;
  var HeightFound = false;
  var FieldSets = FollowContent.getElementsByTagName('fieldset');
  for(var b=0,m=FieldSets.length;b<m;b++){
    if(FieldSets[b].style.display == "none") continue;
    var FollowPart =  lrcGetElementsByClass("VResize",FieldSets[b],"div")[0];
    if(!FollowPart) continue;
    var StyleHeight = FollowPart.style.height;
    if(StyleHeight) HeightFound = StyleHeight;
  }
  if(HeightFound){
    var FollowParts = lrcGetElementsByClass("VResize",FollowContent,"div");
    for(var a=0,l=FollowParts.length;a<l;a++) FollowParts[a].style.height = HeightFound;
  }
  clearTimeout(LiveRC_Config["Timeout"]["FollowLists"]);
  LiveRC_Config["Timeout"]["FollowLists"] = setTimeout("LiveRC_liveFollow_SetMenuHeights()", 500);
};

/* </source>

===== Vérification version =====

<source lang="javascript"> */

  // Check LiveRC version

window.LiveRC_getVersion = function(){
  lrcDisplayDebug("Get LiveRC version");
  var URL = lrcGetAPIURL({format:'xml',action:'centralauthtoken'});
  wpajax.http({url:URL, onSuccess: LiveRC_getVersionProperties});
  LiveRC_LaunchProcessNextStep();
};

window.LiveRC_getVersionProperties = function(Req, data){
  var XML = Req.responseXML;
  var centralauthtokenNode = XML.getElementsByTagName('centralauthtoken')[0];
  if (!centralauthtokenNode) {
    return;
  }
  var centralauthtoken = centralauthtokenNode.getAttribute('centralauthtoken');
  var URL = 'https://www.wikidata.org/w/api.php?format=xml'
          + '&action=wbgetentities'
          + '&ids=Q7027060'
          + '&props=claims'
          + '&origin='+window.location.protocol+mw.config.get('wgServer')
          + '&centralauthtoken='+centralauthtoken;
  wpajax.http({url:URL, onSuccess: LiveRC_getVersionProperty});
};

window.LiveRC_getVersionProperty = function(Req, data){
  var XML = Req.responseXML;
  var mainsnak = XML.getElementsByTagName('mainsnak');
  for(var a=0,l=mainsnak.length;a<l;a++){
    if(mainsnak[a].getAttribute('property') != "P348") continue;
    var datavalue = mainsnak[a].getElementsByTagName('datavalue')[0].getAttribute('value');
    LiveRC_Config["Version"] = datavalue;
    LiveRC_CheckLiveRCVersion();
    break;
  }
};

window.LiveRC_CheckLiveRCVersion = function(){
  var VersionValue = LiveRC_Config["Version"];
  var TestedVersionContainer = document.getElementById('TestedVersion');
  if(!TestedVersionContainer || !VersionValue || LiveRC_Config["VersionChecked"]===true) return;
  var validatedVersion = '<span style="font-weight:bold;color:green;">'+LiveRC_Version+'</span>';
  var DEVvalidatedVersion = '<span style="font-weight:bold;color:darkOrange;">'+LiveRC_Version_Dev+'</span>';
  if(VersionValue){
    TestedVersionContainer.innerHTML = VersionValue.htmlize();
    var TestedVersion = TestedVersionContainer.innerHTML;
    if(LiveRC_Version == LiveRC_Version_Dev || LiveRC_Version.indexOf("beta")!=-1){
      TestedVersionContainer.innerHTML = DEVvalidatedVersion;
      var BugzillaLinkStart = '<u><a href="'+LiveRC_Config["BugzillaURL"]+'">';
      var Text = lrcMakeText("DEV_VERSION").split("$1").join(BugzillaLinkStart).split("$2").join('</a></u>');
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + Text;
                                                   + '</span>';
    }else if(TestedVersion == LiveRC_Version){
      TestedVersionContainer.innerHTML = validatedVersion;
    }else if(TestedVersion == validatedVersion || TestedVersion == DEVvalidatedVersion){
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + lrcMakeText("ALREADY_RUNNING")
                                                   + '</span>';
    }else{
      TestedVersionContainer.parentNode.innerHTML += '<br/>'
                                                   + '<span class="error">'
                                                   + lrcMakeText("NEW_VERSION").split("$1").join(LiveRC_Version)
                                                   + '</span>';
    }
  }else{
    if(LiveRC_Version.indexOf("beta")!=-1){
      TestedVersionContainer.innerHTML = DEVvalidatedVersion;
      var BugzillaLinkStart = '<u><a href="'+LiveRC_Config["BugzillaURL"]+'">';
      var Text = '<br/>'
               + '<span class="error">'
               + lrcMakeText("DEV_VERSION").split("$1").join(BugzillaLinkStart).split("$2").join('</a></u>')
               + '</span>';
      TestedVersionContainer.parentNode.innerHTML +=  Text;
    }else{
      TestedVersionContainer.innerHTML = validatedVersion;
    }
  }
  LiveRC_Config["VersionChecked"] = true;
  lrcDisplayDebug("LiveRC version checked");
};

/* </source>

==== Création du menu de contrôle ====

<source lang="javascript"> */

window.buildControlBar = function(){
  lrcDisplayDebug("Create control bar");

  var lvPreviewFoot = document.getElementById( 'livePreviewFoot' );
  var TR = lvPreviewFoot.getElementsByTagName('tr')[0];
  if(!TR) return;
  while(TR.firstChild){ TR.removeChild(TR.firstChild); }

  var SupprLigneForm = buildSupprLigneForm();
  AddButtonToControlBar(SupprLigneForm, false);

  var PreviewNavigationForm = ''
    + '<form id="PreviewNavigationForm">'
    + '<span id="historyPanel"></span>'
    + '<input id="btnNext" type="button" onclick="goNext();" onselect="goNext();" '
    + 'title="' + lrcMakeText("NEXTDIFF_TIP") + '" value="' + lrcMakeText("NEXTDIFF_SHORT") + '" '
    +'style="padding:0;" />'
    + '</form>';
  AddButtonToControlBar(PreviewNavigationForm, true);

  var StopForm = ''
    + '<form id="StopForm">'
    + '<input id="stopLive"  type="checkbox" value="true" '+(lrcMakeOption("Stop") ? 'checked="checked"':'')+'/>'
    + '<label for="stopLive" title="' + lrcMakeText("PAUSE_TIP") + '" >' + lrcMakeText("PAUSE_SHORT")   + '</label>'
   + '</form>';
  AddButtonToControlBar(StopForm, true);

  var DiffRForm = ''
    + '<form id="DiffRForm">'
    + '<input id="showDiffR" type="checkbox" '+(lrcMakeParam("UseMiniDiff") ? (lrcMakeOption("Diff") ? 'checked="checked"':'') : 'disabled="disabled" ')+'/>'
    + '<label for="showDiffR" title="' + lrcMakeText("DIFFR_TIP") + '" '+ (lrcMakeParam("UseMiniDiff") ? '' : 'style="color:gray"' )+ '>'+ lrcMakeText("DIFFR_SHORT") + '</label>'
    + '</form>';
  AddButtonToControlBar(DiffRForm, true);

  var ModeSelectionForm = ''
    + '<form id="RCFilterForm">'
    + '<span title="' + lrcMakeText("SHOWRC_TIP") + '" style="padding:3px;">'
    + '<input id="showRC" type="checkbox" '+(lrcMakeOption("RC") ? 'checked="checked"':'')+' />'
    + '<label for="showRC">' + lrcMakeText("SHOWRC_SHORT")  + ' </label>'
    + '</span>'
    + '</form>'
    + '<span>·</span>'
    + '<form id="LOGFilterForm">'
    + '<span title="' + lrcMakeText("SHOWLOG_TIP") + '" style="padding:3px;">'
    + '<input id="showLog"    type="checkbox" '+(lrcMakeOption("Log") ? 'checked="checked"':'')+' />'
    + '<label for="showLog">'   + lrcMakeText("SHOWLOG_SHORT")  + ' </label>'
    + '</span>'
    + '</form>';
  AddButtonToControlBar(ModeSelectionForm, true);

  var FiltersForm = '';
  if(lrcGetObjectLength(LiveRC_getSourcedTags(LiveRC_getActiveTags(LiveRC_Config["MediawikiTags"]))) > 0){
    FiltersForm += ''
    + '<form id="TagsForm">'
    + '<span title="' + lrcMakeText("SHOWTAGS_TIP") + '" style="padding:3px;">'
    + '<input id="showTags" type="checkbox" '+(lrcMakeOption("Tags") ? 'checked="checked"':'')+' />'
    + '<label for="showTags">' + lrcMakeText("SHOWTAGS_SHORT")  + ' </label>'
    + '</span>'
    + '</form>'
    + '<span>·</span>';
  }
  FiltersForm += ''
    + '<form id="NamespaceForm">'
    + '<span title="' + lrcMakeText("SHOWNS_TIP") + '" style="padding:3px;">'
    + '<input id="showNS" type="checkbox" '+(lrcMakeOption("NS") ? 'checked="checked"':'')+' />'
    + '<label for="showNS">' + lrcMakeText("SHOWNS_SHORT")  + ' </label>'
    + '</span>'
    + '</form>'
    + '<span>·</span>'
    + '<form id="UserTypeForm">'
    + '<span title="' + lrcMakeText("SHOWUSERS_TIP") + '" style="padding:3px;">'
    + '<input id="showUser" type="checkbox" '+(lrcMakeOption("User") ? 'checked="checked"':'')+' />'
    + '<label for="showUser">' + lrcMakeText("SHOWUSERS_SHORT")  + ' </label>'
    + '</span>'
    + '</form>';
  AddButtonToControlBar(FiltersForm, true);

  // Apply options
  lvPreviewFoot.onmouseover = function(){ lrcSetControlBarPosition(true); };
  lvPreviewFoot.onmouseout = function(){ lrcSetControlBarPosition(false); };
  buildHistoryPanel();
  if(lrcMakeParam("UseMiniDiff")) LiveRC_MiniDiffPreviewExtension_ModifyToggleInput();
  addRCtypesCheckInMenu();
  addLogtypesCheckInMenu();
  addNStypesCheckInMenu();
  addUsertypesCheckInMenu();
  addTagsCheckInMenu();
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterOptions");
};

window.AddButtonToControlBar = function(Button, AddSeparator){
  if(!Button) return;
  var ControlBar = document.getElementById("livePreviewFoot");
  if(!ControlBar) return;
  var Line = ControlBar.getElementsByTagName('tr')[0];
  if(!Line) return;
  if(AddSeparator){
    var Separator = document.createElement('td');
    Separator.valign = "middle";
    lrcAddClass(Separator, "noHover");
    Separator.innerHTML = "&bull;";
    Line.appendChild(Separator);
  }
  var NewTD = document.createElement('td');
  NewTD.valign = "middle";
  Line.appendChild(NewTD);
  if(typeof(Button)=="string"){
    NewTD.innerHTML = Button;
  }else if(typeof(Button)=="object"){
    NewTD.appendChild(Button);
  }
};

/* </source>

===== Boutons de suppression de ligne(s) RC =====

<source lang="javascript"> */

window.buildSupprLigneForm = function(){
  var SupprLineParams = Custom_lrcSupprLineParams;
  if(SupprLineParams.length===0) SupprLineParams = lrcSupprLineParams;
  var SupprLigneForm = '<form id="SupprLigneForm">';
  for(var a=0,l=SupprLineParams.length;a<l;a++){
    var ThisButton = SupprLineParams[a];
    SupprLigneForm += ''
      + '<input type="button" '
      + 'onclick="supprLigne('+a+'); return false;" '
      + 'onselect="supprLigne('+a+'); return false;" '
      + 'style="font-weight:bold;color:'+ThisButton.color+';" '
      + 'title="'+lrcMakeText(ThisButton.textid)+'" value="X" />'
      + (ThisButton.separator ? ThisButton.separator : '')
  }
  SupprLigneForm += '</form>';
  return SupprLigneForm;
};

window.supprLigne = function(quelLigne) {
  var i,len;
  var tab = document.getElementById('tabRC');
  // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName == "TBODY")) tab=tab.firstChild;
  var ScrollDown;
  var tableScroll = document.getElementById("liveRC_RCList");
  var table = document.getElementById( 'tabRC' );
  if(!tableScroll || !table ) ScrollDown = (table.offsetHeight - tableScroll.scrollTop);
  var els = [];
  var SupprLineParams = Custom_lrcSupprLineParams.length === 0 ? lrcSupprLineParams : Custom_lrcSupprLineParams;
  var LigneType = SupprLineParams[quelLigne];
  if(LigneType){
    var LigneClass = LigneType.class;
    if (LigneClass == '*'){
      els = tab.getElementsByTagName('tr');
    }else{
      els = lrcGetElementsByClass(LigneClass,tab,'tr');
    }
  }else{
    els.push(document.getElementById(quelLigne));
  }
  len = els.length;
  for (i=len-1; i>=0; i--){
    if (els[i] != null) {
      var th0 = els[i].getElementsByTagName('th')[0];
      if(th0){
        lineUID = th0.id;
        if(typeof(LiveRC_Config["RCEvents"][lineUID])!="undefined") delete LiveRC_Config["RCEvents"][lineUID];
      }
      var Line = els[i];
      var LineMore = document.getElementById(Line.id+"_More");
      var LineLess = document.getElementById(Line.id.split("_More").join(""));
      if(LineLess && LineLess.parentNode != null) LineLess.parentNode.removeChild(LineLess);
      if(LineMore && LineMore.parentNode != null) LineMore.parentNode.removeChild(LineMore);
      if(Line && Line.parentNode != null) Line.parentNode.removeChild(Line);
    }
  }
  if(ScrollDown) tableScroll.scrollTop = (table.offsetHeight - ScrollDown);
  return false;
};

/* </source>

===== Bouton "mini diff" =====

<source lang="javascript"> */

window.LiveRC_MiniDiffPreviewExtension_ModifyToggleInput = function(){
  var Input = document.getElementById("showDiffR");
  if(!Input) return;
  Input.onclick = function(){
    LiveRC_MiniDiffPreviewExtension_ToggleDiff(this);
  }
  LiveRC_MiniDiffPreviewExtension_ToggleDiff(Input);
};

/* </source>

===== Bouton "Suivant" =====

<source lang="javascript"> */

window.goNext = function(mode) {
  //Argos
  var tab = document.getElementById('tabRC');
  // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName == "TBODY")) tab=tab.firstChild;
  var lines = tab.getElementsByTagName('tr');
  var Nextlength = (lines.length - 1);
  var found = false;
  for (var j = Nextlength; j >= 0; j--) {
    var i = (lrcMakeParam("InvertUpdate")?(Nextlength - j):j);
    var thisline = lines[i];
    if(!lrcHasClass(thisline, "RcChecked")){
      var Links = thisline.getElementsByTagName('a');
      for (var a=0,l=Links.length;a<l;a++) {
        if (lrcHasClass(Links[a], "lrc_PreviewLink")) {
          if (found || mode) {
            if (mode == 2) return;
            var lnURL = Links[a].href;
            wpajax.preload(lnURL);
            return;
          } else {
            var Func = Links[a].onclick;
            try{ Func(); }catch(e){ };
            found = true;
          }
        }
      }
    }
  }
  if (mode == 2) {
    LiveRC_Config["AllLinesSeen"] = true;
  }
};

/* </source>

===== Menus surgissants =====

<source lang="javascript"> */

window.LiveRC_SetCheckListPosition = function(CL_ID){
  var CheckList = document.getElementById(CL_ID);
  if(!CheckList) return;
  var ParentSpan = CheckList.parentNode;
  var Form = ParentSpan.parentNode;
  // todo : trouver une méthode plus robuste pour positionner la liste des journaux
  var MargTop = (Form.offsetHeight + 3) + "px";
  var MarginLeft = 3;
  var PreviousNode = Form.previousSibling;
  while(PreviousNode){
    MarginLeft = MarginLeft + PreviousNode.offsetWidth;
    PreviousNode = PreviousNode.previousSibling;
  }
  CheckList.style.zIndex = LiveRC_Config["CheckListZIndex"]++ ;
  CheckList.style.marginTop = MargTop;
  CheckList.style.marginBottom = "-" + (CheckList.offsetHeight + 50) + "px" ;
  CheckList.style.marginLeft = MarginLeft + "px"  ;
  CheckList.style.marginRight = "-" + (15 * CheckList.offsetWidth) + "px" ;
  var RCList = document.getElementById('liveRC_RCList');
  if(!RCList) return;
  var RCListHeight = RCList.offsetHeight;
  var CheckListHeight = CheckList.offsetHeight;
  if(!lrcHasClass(CheckList, "TwoColumsCheckList") && CheckListHeight>(0.75*RCListHeight)){
    lrcAddClass(CheckList, "TwoColumsCheckList");
    LiveRC_SetCheckListPosition(CL_ID)
  }else if(lrcHasClass(CheckList, "TwoColumsCheckList") && (CheckListHeight*2)<(0.75*RCListHeight)){
    lrcRemoveClass(CheckList, "TwoColumsCheckList");
    LiveRC_SetCheckListPosition(CL_ID);
  }
};

window.toggleCheckList = function(CL_ID, show){
  var CheckList = document.getElementById(CL_ID);
  if(!CheckList) return;
  if(!show){
    var removefunc = function(ElClass){
      CheckList.style.visibility = "hidden";
      CheckList.className = CheckList.className.replace(ElClass, "LiveRC_Opacity_100");
    }
    LiveRC_Config["Timeout"][CL_ID] = setTimeout(function(){ LiveRC_alert_setOpacity(CL_ID, removefunc, 15, 40);}, 10);
  }else{
    LiveRC_alert_stopOpacity(CL_ID);
    CheckList.style.visibility = "visible";
  }
  LiveRC_SetCheckListPosition(CL_ID);
};

window.disableAllCheckboxesInChecklist = function(InputID, ChecklistID){
  var Input = document.getElementById(InputID);
  var CheckList = document.getElementById(ChecklistID);
  if(!Input || !CheckList) return;
  var checked = (Input.checked ? false : "disabled" );
  var Inputs = CheckList.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var ThisInput = Inputs[a];
    if(ThisInput.type!="checkbox") continue;
    ThisInput.disabled = checked;
  }
};

window.toggleCentralCheckBoxFromChecklist = function(InputID, ChecklistID){
  var Input = document.getElementById(InputID);
  var CheckList = document.getElementById(ChecklistID);
  if(!Input || !CheckList) return;
  var AllinputUnchecked = true;
  var Inputs = CheckList.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var ThisInput = Inputs[a];
    if(ThisInput.type!="checkbox") continue;
    if(ThisInput.checked) AllinputUnchecked = false;
  }
  Input.checked = (AllinputUnchecked ? false : "checked");
};

window.createChecklistMenu = function(ID, Lines){
  var Input = document.getElementById(ID);
  if(!Input) return;
  var ParentSpan = Input.parentNode;
  var CheckListID = ID+"_CheckList";
  var CheckList = document.createElement('ul');
  CheckList.id = CheckListID;
  CheckList.className = "LiveRC_Opacity_100";
  lrcaddCustomizableClasses(CheckList, "RCFilterCheckList");
  for(var a=0,l=Lines.length;a<l;a++){
    var LineContent = Lines[a];
    var Line = document.createElement('li');
    if(typeof(LineContent)==="string") Line.innerHTML = LineContent;
    else if(typeof(LineContent)==="object") Line.appendChild(LineContent);
    CheckList.appendChild(Line);
  }
  CheckList.style.align = "left";
  CheckList.style.fontSize = "10px";
  ParentSpan.appendChild(CheckList);
  var Inputs = CheckList.getElementsByTagName('input');
  for(var i=0,ilen=Inputs.length;i<ilen;i++){
    var ThisInput = Inputs[i];
    if(!ThisInput.type || ThisInput.type != "checkbox") continue;
    ThisInput.onclick = function(){
      toggleCentralCheckBoxFromChecklist(ID, CheckListID);
    }
  }
  ParentSpan.onmouseover = function(){
    toggleCheckList(CheckListID, true);
  }
  ParentSpan.onmouseout = function(){
    toggleCheckList(CheckListID, false);
  }
  Input.onclick = function(){
    disableAllCheckboxesInChecklist(ID, CheckListID);
  }
  Input.onchange = function(){
    disableAllCheckboxesInChecklist(ID, CheckListID);
  }
  CheckList.style.visibility = "hidden";
  toggleCheckList(CheckListID, false);
  disableAllCheckboxesInChecklist(ID, CheckListID);
  return CheckList;
};

/* </source>

====== RC ======

<source lang="javascript"> */

window.addRCtypesCheckInMenu = function(){
  var Lines = [];
  var wchecked = (lrcMakeOption("WL_watched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showRC_WL_watched" type="checkbox" value="watched" ' + wchecked + ' />'
                    + '<label for="showRC_WL_watched">' + lrcMakeText("SHOWWL_WATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  var uwchecked = (lrcMakeOption("WL_unwatched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showRC_WL_notwatched" type="checkbox" value="notwatched" ' + uwchecked + ' />'
                    + '<label for="showRC_WL_notwatched">' + lrcMakeText("SHOWWL_UNWATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  Lines.push('<hr />');
  var RCtypes = {"edit":"SHOWRC_EDIT_TIP", "minor":"SHOWRC_MINOR_TIP", "new":"SHOWRC_NEW_TIP", "categorize":"SHOWRC_CATEGORIZE_TIP", "external":"SHOWRC_EXTERNAL_TIP"};
  for(var RCtype in RCtypes){
    var Tip = lrcMakeText(RCtypes[RCtype]);
    var checked = !!lrcMakeOption("RC_"+RCtype);
    checked = (checked ? ' checked="checked" ' : '');
    var LineContent = '<input id="showRC_'+RCtype+'" type="checkbox" value="'+RCtype+'" ' + checked + ' />'
                    + '<label for="showRC_'+RCtype+'">' + Tip + ' </label>';
    Lines.push(LineContent);
  }
  Lines.push('<hr />');
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  for(var a=0,l=Comments.length;a<l;a++){
    var Tip = lrcMakeText("SHOWRC_"+Comments[a].state+"_TIP");
    var checked = !Comments[a].hide;
    checked = (checked ? ' checked="checked" ' : '');
    var LineContent = '<input id="showRC_'+Comments[a].state+'" type="checkbox" value="'+Comments[a].state+'" ' + checked + ' />'
                    + '<label for="showRC_'+Comments[a].state+'">' + Tip + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showRC", Lines);
};

/* </source>

====== Logs ======

<source lang="javascript"> */

window.addLogtypesCheckInMenu = function(){
  var Lines = [];
  var wchecked = (lrcMakeOption("WL_watched") ? ' checked="checked" ' : '');
  var LineContent = '<input id="showLOG_WL_watched" type="checkbox" value="watched" ' + wchecked + ' />'
                    + '<label for="showLOG_WL_watched">' + lrcMakeText("SHOWWL_WATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  var uwchecked = (lrcMakeOption("WL_unwatched") ? ' checked="checked" ' : '');
  var UWLine = document.createElement('li');
  var LineContent = '<input id="showLOG_WL_notwatched" type="checkbox" value="notwatched" ' + uwchecked + ' />'
                    + '<label for="showLOG_WL_notwatched">' + lrcMakeText("SHOWWL_UNWATCHED_TIP") + ' </label>';
  Lines.push(LineContent);
  Lines.push('<hr />');
  for(var lrcLogtype in LiveRC_Config["LogNames"]){
    var lrcLogExtension = LiveRC_Config["LogNames"][lrcLogtype]["extension"];
    if(typeof(lrcLogExtension)=="string" && !lrcIsExtensionInstalled(lrcLogExtension)){
      try{ delete lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete Custom_lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      try{ delete Custom_lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      continue;
    }
    var lrcLogRight = LiveRC_Config["LogNames"][lrcLogtype]["right"];
    if(typeof(lrcLogRight)=="string" && !lrcUserHasRight(lrcLogRight)){
      try{ delete Custom_lrcOptionMenuValues["Log_"+lrcLogtype] }catch(e){ };
      try{ delete Custom_lrcTranslatedParamDesc["DescLog_"+lrcLogtype] }catch(e){ };
      continue;
    }
    var lrcLogName = LiveRC_Config["LogNames"][lrcLogtype]["page"];
    if(lrcGetMediawikiMessage(lrcLogName, true)) lrcLogName = lrcGetMediawikiMessage(lrcLogName, true);
    else lrcLogName = ("<" + lrcLogName + ">").htmlize();
    if(typeof(lrcOptionMenuValues["Log_"+lrcLogtype])==="undefined") lrcOptionMenuValues["Log_"+lrcLogtype] = true;
    if(typeof(lrcTranslatedParamDesc["DescLog_"+lrcLogtype])==="undefined"){
      addTradToTranslatedParamDesc("DescLog_"+lrcLogtype, lrcMakeParam("Language"), lrcMakeText("showLog_StandardDesc").split("$1").join(lrcLogName));
    }
    var checked = !!lrcMakeOption("Log_"+lrcLogtype);
    checked = (checked ? ' checked="checked" ' : '');
    var LineContent = '<input id="showLog_'+lrcLogtype+'" type="checkbox" value="'+lrcLogtype+'" ' + checked + ' />'
                    + '<label for="showLog_'+lrcLogtype+'">' + lrcLogName  + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showLog", Lines);
};

/* </source>

====== Balises ======

<source lang="javascript"> */

window.addTagsCheckInMenu = function(){
  var Lines = [];
  var checked = !!lrcMakeOption("Tags_notag");
  checked = (checked ? ' checked="checked" ' : '');
  var LineContent = '<input id="showTags_notag" type="checkbox" value="notag" ' + checked + ' />'
                  + '<label for="showTags_notag"><i>' + lrcMakeText("SHOWTAGS_notag") + '</i></label>';
  Lines.push(LineContent);
  for(var tagname in LiveRC_getSourcedTags(LiveRC_getActiveTags(LiveRC_Config["MediawikiTags"]))){
    var tagdesc = tagname.ucFirst();
    if(typeof(lrcOptionMenuValues["Tags_"+tagname])==="undefined") lrcOptionMenuValues["Tags_"+tagname] = true;
    if(typeof(lrcTranslatedParamDesc["DescTags_"+tagname])==="undefined"){
      addTradToTranslatedParamDesc("DescTags_"+tagname, lrcMakeParam("Language"), lrcMakeText("showTags_StandardDesc").split("$1").join(tagdesc));
    }
    checked = !!lrcMakeOption("Tags_"+tagname);
    checked = (checked ? ' checked="checked" ' : '');
    LineContent = '<input id="showTags_'+tagname+'" type="checkbox" value="'+tagname+'" ' + checked + ' />'
                + '<label for="showTags_'+tagname+'">' + tagdesc + '</label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showTags", Lines);
};

/* </source>

====== Espaces de noms ======

<source lang="javascript"> */

window.addNStypesCheckInMenu = function(){
  var Lines = [];
  for(var id in LiveRC_Config["MediawikiNamespaces"]){
    var ns = lrcGetNamespaceName(id, true);
    if (id < 0) continue;
    if (id == 0) ns = lrcMakeText("MAIN_NAMESPACE");
    if(typeof(lrcOptionMenuValues[("NS_"+id)])==="undefined"){
      lrcOptionMenuValues[("NS_"+id)] = true;
      addTradToTranslatedParamDesc(("DescNS_"+id), lrcMakeParam("Language"), lrcMakeText("showNS_StandardDesc").split("$1").join(ns));
    }
    var checked = (lrcMakeOption("NS_"+id) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showNS_'+id+'" type="checkbox" value="'+id+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showNS\', \'showNSCheckList\')" />'
                    + '<label for="showNS_'+id+'">' + ns + ' </label>';
    Lines.push(LineContent);
  }
  createChecklistMenu("showNS", Lines);
};

/* </source>

====== Utilisateurs ======

<source lang="javascript"> */

window.addUsertypesCheckInMenu = function(){
  var Lines = [];
  var UserValues = (lrcUserHasRight("autopatrol") ? ["IP", "NEWBIE", "AUTOPATROLLED"] : ["IP", "REGISTERED"] );
  var AddedGroupsText = {};
  for(var group in LiveRC_Config["UserGroupList"]){
    if(typeof(LiveRC_Config["UserGroupList"][group]) === "object"){
      var GROUP = group.toUpperCase();
      AddedGroupsText[GROUP] = lrcGetMediawikiMessage("group-"+group, true);
      UserValues.push(GROUP);
      if(typeof(lrcOptionMenuValues[("UserG_"+GROUP)])==="undefined") lrcOptionMenuValues[("UserG_"+GROUP)] = (LiveRC_Config["UserGroupList"][group].show ? true : false );
      if(typeof(lrcTranslatedParamDesc[("DescUserG_"+GROUP)])==="undefined"){
        addTradToTranslatedParamDesc("DescUserG_"+GROUP, lrcMakeParam("Language"), lrcMakeText("showUser_StandardDesc").split("$1").join(lrcGetMediawikiMessage("group-"+group, true)));
      }
    }
  }
  for(var a=0,l=UserValues.length;a<l;a++){
    var Value = UserValues[a];
    var Text = ( AddedGroupsText[Value] ? AddedGroupsText[Value] : lrcMakeText("SHOWUSER_"+Value) );
    var checked;
    if(AddedGroupsText[Value]) checked = (lrcMakeOption("UserG_"+Value) ? ' checked="checked" ': '' );
    else checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  }
  Lines.push('<hr />'); // "Always hide" options
  var SpecialHideValues = ["HideOwnSubpage"];
  for(var a=0,l=SpecialHideValues.length;a<l;a++){
    var Value = SpecialHideValues[a];
    var Text = lrcMakeText("SHOWUSER_"+Value);
    var checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  Lines.push('<hr />'); // "Always show" options
  var SpecialShowValues = ["ShowAllSelf" ,"ShowAllContact" ,"ShowAllWatchlist", "ShowAllRevert", "ShowAllBlanking", "ShowAllReplaced"];
  for(var a=0,l=SpecialShowValues.length;a<l;a++){
    var Value = SpecialShowValues[a];
    var Text = lrcMakeText("SHOWUSER_"+Value);
    var checked = (lrcMakeOption("User_"+Value) ? ' checked="checked" ': '' );
    var LineContent = '<input id="showUser_'+Value+'" type="checkbox" value="'+Value+'" '
                    + checked + ' onclick="toggleCentralCheckBoxFromChecklist(\'showUser\', \'showUSERCheckList\')" />'
                    + '<label for="showUser_'+Value+'">' + Text + ' </label>';
    Lines.push(LineContent);
  }
  }
  createChecklistMenu("showUser", Lines);
};

/* </source>

===== Gestion de la position de la barre de commande =====

<source lang="javascript"> */

window.lrcSetControlBarPosition = function(MouseOver, event){
  if(!event) { event = window.event; }
  var lvPreviewFoot = document.getElementById( 'livePreviewFoot' );
  var WindowWidth = lvPreviewFoot.parentNode.offsetWidth;
  var PreviewFootWidth = 0;
  var TDs = lvPreviewFoot.getElementsByTagName('td');
  for(var a=0,l=TDs.length;a<l;a++){ PreviewFootWidth += TDs[a].offsetWidth; };
  var WidthDiff = WindowWidth - PreviewFootWidth;
  if(WidthDiff > 0){
    lvPreviewFoot.onmousemove = null;
    lvPreviewFoot.style.marginLeft = "0";
    return;
  }
  if(MouseOver!=true){
    lvPreviewFoot.onmousemove = null;
    return;
  }
  lvPreviewFoot.onmousemove = function(event){
    if(!event) { event = window.event; }
    var MousePosition = LiveRC_GetMousePosition(event)["X"] - lrcFindOffsetPos(lvPreviewFoot)["X"];
    WindowWidth = lvPreviewFoot.parentNode.offsetWidth;
    var MouseOffsetPercent = (MousePosition/WindowWidth);
    WidthDiff = WindowWidth - PreviewFootWidth;
    var NewMarginLeft = (Math.round(100*(WidthDiff*MouseOffsetPercent))/100);
    if(NewMarginLeft>0) NewMarginLeft = 0;
    lvPreviewFoot.style.marginLeft = NewMarginLeft + "px";
  }
};

window.lrcFindOffsetPos = function(el) {
	var x = y = 0;
	if(el.offsetParent) {
		x = el.offsetLeft;
		y = el.offsetTop;
		while(el = el.offsetParent) {
			x += el.offsetLeft;
			y += el.offsetTop;
		}
	}
	return {'X':x, 'Y':y};
};

/* </source>

==== Finalisation du lancement de LiveRC ====

<source lang="javascript"> */

window.liveRCReady = function(){
  lrcRemoveClass(document.body,'LiveRCLoading');
  clearTimeout(LiveRC_Config["Timeout"]["WaitLoading"]);
  var LastAlerts = document.getElementById('LiveRCAlert');
  if(LastAlerts) LastAlerts.parentNode.removeChild(LastAlerts);
  LiveRC_Config["LoadingTime"] = Math.round(((new Date()).getTime() - LiveRC_Config["LoadingTime"])/100)/10;
  LiveRC_alert('<center><code><b>'+lrcMakeText("LiveRC_Launched_delay").split("$1").join(LiveRC_Config["LoadingTime"])+'</b></code></center>')
  setTimeout("LiveRC_alert("+lrcEscapeStrHTML('<center><code><b><u>'+lrcMakeText("LiveRC_Launched_mission")+'</u></b></code></center>')+");",5000);
  setTimeout("LiveRC_alert("+lrcEscapeStrHTML('<center><code><b><big>'+lrcMakeText("LiveRC_Launched_goodluck").split("$1").join(mw.config.get('wgUserName'))+'</big></b></code></center>')+");",6000);
  lrcDisplayDebug('<span style="color:darkGreen;">LiveRC launch sequence completed in '+LiveRC_Config["LoadingTime"]+' seconds. Assigned mission: Search and destroy. Good luck, '+mw.config.get('wgUserName')+'!</span>');
  LiveRC_LaunchProcessNextStep();
};

/* </source>

=== Fonctions de mise à jour des modifications récentes ===

==== Lancement de la requête de mise à jour ====

<source lang="javascript"> */

window.liveRC = function() {
  RAZnotificationtimestamps();
  LiveRC_LaunchProcessNextStep();
  if(document.getElementById('stopLive').checked){
    lrcToggleLogo(false);
    clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
    LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",1000);
    LiveRC_Config["RequestError"] = 0;
    return;
  }
  lrcToggleLogo(true);
  lrcDisplayDebug("Get RC");
  clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
  LiveRC_Config["Timeout"]["RCRequest"] = setTimeout('LiveRC_Config["RequestError"]++; if(LiveRC_Config["RequestError"]>4){ document.getElementById("stopLive").checked = "checked"; }; liveRC(); ',(lrcMakeParam("Refresh")+30)*1000);

  var HookResult = LiveRC_RunHooks("BeforeRC");
  if(!HookResult) return;

  var withFilters = (lrcUserHasRight("abusefilter-log") && lrcIsExtensionInstalled("Abuse Filter"));

  var withEcho = (lrcMakeParam("ShowNotifications") && lrcIsExtensionInstalled("Echo"));

  var withCheckuser = (lrcUserHasRight("checkuser-log") && lrcIsExtensionInstalled("CheckUser"));

  var withWikibase = (lrcIsExtensionInstalled("Wikibase Client"));

  var withFlow = (lrcIsExtensionInstalled("Flow"));

  var URL = lrcGetAPIURL('format=xml&action=query')
    + '&list=recentchanges|logevents' + (withFilters ? '|abuselog' : '') + (withCheckuser ? '|checkuserlog' : '')
    + (withEcho ? '&meta=notifications' : '')
    + '&rcprop=user|comment|parsedcomment|flags|timestamp|title|ids|sizes|tags'+(lrcUserHasRight("autopatrol")?'|patrolled': '')
    + '&rcend=' + LiveRC_Config["LastRCtimestamp"] + '&rclimit=' + lrcMakeParam("RCLimit")
    + '&leprop=ids|title|type|user|userid|timestamp|comment|parsedcomment|details|tags'
    + '&leend=' + LiveRC_Config["LastLOGtimestamp"] + '&lelimit=' + lrcMakeParam("RCLimit")
    + (withFilters ? '&aflprop=ids|filter|user|title|action|result|timestamp|hidden|revid' : '')
    + (withFilters ? '&aflend=' + LiveRC_Config["LastFILTERtimestamp"] + '&afllimit=' + lrcMakeParam("RCLimit") : '')
    + (withCheckuser ? '&culto=' + LiveRC_Config["LastCUtimestamp"] + '&cullimit=' + lrcMakeParam("RCLimit") : '')
    + '&continue=';
  wpajax.http({url:URL, onSuccess:getRC});
};

/*</source>

==== Récupération de la requête de mise à jour ====

<source lang="javascript"> */

window.getRC = function(xmlreq, data) {
  if (document.getElementById('stopLive').checked){
    lrcToggleLogo(false);
    clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
    LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",1000);
    return;
  }
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;
  var query;
  for(var a=0,l=api.childNodes.length;a<l;a++){
    var thisnode = api.childNodes[a];
    if(thisnode.nodeName == "query") query = thisnode;
  }
  goNext(2); // Set LiveRC_Config["AllLinesSeen"] if we need to preload a line after the function completes.
  // Log
  var logevent = query.getElementsByTagName('logevents')[0];
  if(logevent){
    var logs = logevent.getElementsByTagName('item');
    for (var i=(logs.length-1); i>=0; i--) {
      if (logs[i].getAttribute('logid') <= LiveRC_Config["LastLOGid"]) continue;
      var log = {};
      log.state = lrcAddState(log.state, "LOG");
      for (var j=0,lenj=logs[i].attributes.length;j<lenj; j++) {
        if (logs[i].attributes[j].name == 'type'){
          log.type = logs[i].attributes[j].value;
          switch(logs[i].attributes[j].value){
            case 'patrol':
              log.state = lrcAddState(log.state, "PATROL");
              if (logs[i].firstChild) {
                var patrol_attributes = logs[i].firstChild.attributes;
                for (var k=0,lenk=patrol_attributes.length;k<lenk; k++) {
                  var thispatrolattributeName = patrol_attributes[k].name;
                  var thispatrolattributeValue = patrol_attributes[k].value;
                  if ( thispatrolattributeName  == 'cur') {  // MW < 1.26wmf3
                    log.cur_revid = thispatrolattributeValue;
                  } else if (thispatrolattributeName == 'prev') { // MW < 1.26wmf3
                    log.prev_revid = thispatrolattributeValue;
                  }else if (thispatrolattributeName  == 'curid') {
                    log.cur_revid = thispatrolattributeValue;
                  } else if (thispatrolattributeName == 'previd') {
                    log.prev_revid = thispatrolattributeValue;
                  } else if (thispatrolattributeName == 'auto') {
                    lrcAddState(log.state, "AUTOPATROLLED");
                  }
                }
              }
              break;
            case 'liquidthreads':
              log.state = lrcAddState(log.state, "LIQUIDTHREADS");
              log.liquidthreadsparams = [];
              var LiquidThreadsParams = logs[i].getElementsByTagName('param');
              for(var ltp=0,ltpen=LiquidThreadsParams.length;ltp<spen;ltp++){
                var thisLTparam = (LiquidThreadsParams[ltp].firstChild ? LiquidThreadsParams[ltp].firstChild.nodeValue : false);
                if(thisLTparam) log.liquidthreadsparams.push(thisLTparam);
              }
              break;
            case 'abusefilter':
              log.state = lrcAddState(log.state, "ABUSEFILTER");
              break;
            case 'managetags':
              log.state = lrcAddState(log.state, "MANAGETAGS");
              break;
            case 'tag':
              log.state = lrcAddState(log.state, "CHANGETAG");
              var params = logs[i].getElementsByTagName('param')[0];
              if(params){
                for (var p=0,lenp=params.attributes.length;p<lenp; p++) {
                  log[(params.attributes[p].name)] = params.attributes[p].value;
                }
              }
              var initialtags = [], addedtags = [], removedtags = [];
              var taginit = logs[i].getElementsByTagName('initialTags')[0].getElementsByTagName('_v');
              for(var a=0,l=taginit.length;a<l;a++){
                initialtags.push(taginit[a].firstChild.nodeValue);
              }
              var tagadded = logs[i].getElementsByTagName('tagsAdded')[0].getElementsByTagName('_v');
              for(var a=0,l=tagadded.length;a<l;a++){
                addedtags.push(tagadded[a].firstChild.nodeValue);
              }
              var tagremoved = logs[i].getElementsByTagName('tagsRemoved')[0].getElementsByTagName('_v');
              for(var a=0,l=tagremoved.length;a<l;a++){
                removedtags.push(tagremoved[a].firstChild.nodeValue);
              }
              log.initialtags = initialtags;
              log.addedtags = addedtags;
              log.removedtags = removedtags;
              break;
            case 'import':
              log.state = lrcAddState(log.state, "IMPORT");
              break;
            case 'pagetranslation':
              log.state = lrcAddState(log.state, "PAGETRANSLATION");
              break;
            case 'translatorsandbox':
              log.state = lrcAddState(log.state, "TRANSLATORSANDBOX");
              break;
            case 'translationreview':
              log.state = lrcAddState(log.state, "TRANSLATIONREVIEW");
              break;
            case 'notifytranslators':
              log.state = lrcAddState(log.state, "NOTIFYTRANSLATORS");
              break;
            case 'mwoauthconsumer':
              log.state = lrcAddState(log.state, "OAUTH");
              break;
            case 'moodbar':
              log.state = lrcAddState(log.state, "MOODBAR");
              break;
            case 'newusers':
              log.state = lrcAddState(log.state, "NEWUSER");
              break;
            case 'massmessage':
              log.state = lrcAddState(log.state, "MASSMESSAGE");
              break;
            case 'pagetriage-deletion':
              log.state = lrcAddState(log.state, "PAGETRIAGE-DELETION");
              break;
            case 'pagetriage-curation':
              log.state = lrcAddState(log.state, "PAGETRIAGE-CURATION");
              if(logs[i].firstChild){
                log.pagetriagetags = [];
                var node = logs[i].firstChild.firstChild;
                while(node){
                  log.pagetriagetags.push(node.firstChild ? node.firstChild.nodeValue : 'x');
                  node = node.nextSibling;
                  if(!node) break;
                }
              }
              break;
            case 'upload':
              log.state = lrcAddState(log.state, "UPLOAD");
              break;
            case 'block':
              log.state = lrcAddState(log.state, "BLOCK");
              var thisblockaction = logs[i].getAttribute("action");
              log.action = thisblockaction;
              if( (thisblockaction == "block" || thisblockaction == "reblock") && logs[i].firstChild){
                var blockAttributes = logs[i].firstChild.attributes;
                for(var la=0,lal=blockAttributes.length;la<lal;la++){
                  log[blockAttributes[la].name] = blockAttributes[la].value;
                }
              }
              if(log.flags){ // ------------------------------------------MW < 1.26wmf3
                var tempflags = log.flags.split(",");
                var newblockflags = {};
                for(var fla=0,flal=tempflags.length;fla<flal;fla++){
                  var blockmess = lrcGetMediawikiMessage(("block-log-flags-"+tempflags[fla]), true);
                  newblockflags[tempflags[fla]] = ( blockmess ? blockmess : tempflags[fla] );
                }
                log.flags = newblockflags;
              }else{
                var flags = logs[i].getElementsByTagName('flags')[0];
                if(flags){
                  var allflags = flags.getElementsByTagName('f');
                  var newblockflags = {};
                  for(var fla=0,flal=allflags.length;fla<flal;fla++){
                    var thisflag = allflags[fla].firstChild.nodeValue;
                    var blockmess = lrcGetMediawikiMessage(("block-log-flags-"+thisflag), true);
                    newblockflags[thisflag] = ( blockmess ? blockmess : thisflag );
                  }
                  log.flags = newblockflags;
                }
              }
              break;
            case 'gblblock':
              log.state = lrcAddState(log.state, "GBBLOCK");
              break;
            case 'delete':
              log.state = lrcAddState(log.state, "DELETE");
              break;
            case 'suppress':
              log.state = lrcAddState(log.state, "OVERSIGHT");
              break;
            case 'online':
            case 'campus':
            case 'course':
            case 'institution':
            case 'instructor':
            case 'student':
              log.state = lrcAddState(log.state, "EDUCATIONPROGRAM");
              break;
            case 'move':
              log.state = lrcAddState(log.state, "MOVE");
              if (logs[i].firstChild)
                log.target_title = logs[i].firstChild.getAttribute("target_title");
                if(!log.target_title) log.target_title = logs[i].firstChild.getAttribute("new_title"); // MW < 1.26wmf3
              break;
            case 'protect':
              log.state = lrcAddState(log.state, "PROTECT");
              var protectparam = logs[i].getElementsByTagName('param')[0];
              if(protectparam && protectparam.firstChild) log.protectionparam = protectparam.firstChild.nodeValue;
              break;
            case 'review':
              log.state = lrcAddState(log.state, "REVIEW");
              var ReviewParams = logs[i].getElementsByTagName('param');
              if(ReviewParams[0] && ReviewParams[0].firstChild) log.reviewedrevid = ReviewParams[0].firstChild.nodeValue;
              if(ReviewParams[1] && ReviewParams[1].firstChild) log.reviewedoldid = ReviewParams[1].firstChild.nodeValue;
              if(ReviewParams[2] && ReviewParams[2].firstChild) log.reviewedtimestamp = ReviewParams[2].firstChild.nodeValue;
              break;
            case 'stable':
              log.state = lrcAddState(log.state, "STABLE");
              log.stableparams = [];
              var StableParams = logs[i].getElementsByTagName('param');
              for(var sp=0,spen=StableParams.length;sp<spen;sp++){
                var thisSTparam = (StableParams[sp].firstChild ? StableParams[sp].firstChild.nodeValue : false);
                if(thisSTparam) log.stableparams.push(thisSTparam);
              }
              break;
            case 'rights':
              log.state = lrcAddState(log.state, "USERRIGHTS");
              var userrightinfos = logs[i].getElementsByTagName('rights')[0];
              if(userrightinfos){  // ------------------------------------------MW < 1.26wmf3
                log.oldrights = userrightinfos.getAttribute('old');
                if(!log.oldrights || log.oldrights == "") log.oldrights = "Ø";
                log.newrights = userrightinfos.getAttribute('new');
                if(!log.newrights || log.newrights == "") log.newrights = "Ø";
              }else{
                log.oldrights = "Ø";
                var userrightinfosold = logs[i].getElementsByTagName('oldgroups')[0];
                if(userrightinfosold){
                  var OldGroups = userrightinfosold.getElementsByTagName('g');
                  for(var a=0,l=OldGroups.length;a<l;a++){
                    if(a===0) log.oldrights = OldGroups[a].firstChild.nodeValue;
                    else log.oldrights += "," + OldGroups[a].firstChild.nodeValue;
                  }
                }
                log.newrights = "Ø";
                var userrightinfosnew = logs[i].getElementsByTagName('newgroups')[0];
                if(userrightinfosnew){
                  var NewGroups = userrightinfosnew.getElementsByTagName('g');
                  for(var a=0,l=NewGroups.length;a<l;a++){
                    if(a===0) log.newrights = NewGroups[a].firstChild.nodeValue;
                    else log.newrights += "," + NewGroups[a].firstChild.nodeValue;
                  }
                }
              }
              break;
            case 'gblrights':
              log.state = lrcAddState(log.state, "GBUSERRIGHTS");
              break;
            case 'renameuser':
              log.state = lrcAddState(log.state, "RENAMEUSER");
              log.newuser = logs[i].getAttribute("newuser");
              break;
            case 'gblrename':
              log.state = lrcAddState(log.state, "GBRENAMEUSER");
              log.newuser = logs[i].getAttribute("newuser");
              break;
            case 'spamblacklist':
              log.state = lrcAddState(log.state, "SPAMBLACKLIST");
              break;
            case 'thanks':
              log.state = lrcAddState(log.state, "THANKS");
              break;
            case 'interwiki':
              log.state = lrcAddState(log.state, "INTERWIKI");
              log.interwikiparams = [];
              var InterwikiParams = logs[i].getElementsByTagName('param');
              for(var sp=0,spen=InterwikiParams.length;sp<spen;sp++){
                var thisSTparam = (InterwikiParams[sp].firstChild ? InterwikiParams[sp].firstChild.nodeValue : false);
                log.interwikiparams.push(thisSTparam);
              }
              break;
            default:
              break;
          }
        }
        else
          log[logs[i].attributes[j].name] = logs[i].attributes[j].value;
      }
      if (!log.revid) {
        //Set a dummy revid to prevent deletion
        log.revid=log.logid;
      }

      // We don't care about the auto-patrolled edits
      if(lrcHasState(log.state, "PATROL") && lrcHasState(log.state, "AUTOPATROLLED") ) continue;

      // We don't care about the auto-reviewed edits
      if(lrcHasState(log.state, "REVIEW") && ["approve-a", "approve-ia", "approve2-a", "approve2-ia"].indexOf(log.action) != -1)
        continue;

      if(lrcHasState(log.state, "LIQUIDTHREADS")){
        log.comment = log.liquidthreadsparams.join(" ⇨ ");
      }
      if(lrcHasState(log.state, "NEWUSER")){
        var newuser = log.title.split(lrcGetNamespaceName(2)+":").join("");
        if(!LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][newuser]){
          LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][newuser] = {};
          LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][newuser].ts = log.timestamp;
          LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][newuser].edits = [];
          updateFollowNewUsers();
        }
      }

      if(lrcHasState(log.state, "SPAMBLACKLIST")){
        var spamuser = log.user;
        if(!LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][spamuser]){
          LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][spamuser] = {};
          LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][spamuser].ts = log.timestamp;
          LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][spamuser].edits = [];
        }
        LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][spamuser].edits.push(log);
        updateFollowSpam();
        continue; // nothing more to do, cause there is no edit
      }

      if(lrcHasState(log.state, "BLOCK")){
        var blockedUserName = log.title.split(lrcGetNamespaceName(2)+":").join("");
        LiveRC_Config["Blocked"].push(blockedUserName);
        updateAllFollow();
      }
      log.state = lrcGetGroupState(log.user, log.state);
      if(LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][log.user])
        log.state = lrcAddState(log.state, "NEWBIE");

      if(lrcMakeParam("GetPageInfos") && !lrcHasState(log.state, "ABUSEFILTER") && !lrcHasState(log.state, "MANAGETAGS")){
        livePageInfos(log);
      }else if(lrcMakeParam("GetFileInfos") && lrcHasState(log.state, "UPLOAD")){
        liveFileInfos(log);
      }else{
        getRevision(log);
      }
    }
    if(logs[0]){
      LiveRC_Config["LastLOGid"] = logs[0].getAttribute('logid');
      LiveRC_Config["LastLOGtimestamp"] = logs[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // Abuse filter logs
  var filters = query.getElementsByTagName('abuselog')[0];
  if(filters){
    var filteritems = filters.getElementsByTagName('item');
    var i,j,leni,lenj,filter;
    leni=filteritems.length;
    for (i=leni-1; i>=0; i--) {
      if (filteritems[i].getAttribute('id') <= LiveRC_Config["LastFILTERid"]) continue;
      filter = {};
      filter.state = [];
      filter.state = lrcAddState(filter.state, "ABUSELOG");
      filter.state = lrcAddState(filter.state, "LOG");
      lenj = filteritems[i].attributes.length;
      for (j=0; j<lenj; j++) {
        filter[filteritems[i].attributes[j].name] = filteritems[i].attributes[j].value;
      }
      if(filter.revid) filter.filterrevid = filter.revid;

      filter.revid = filter.id;
      filter.type = "abuselog";
      filter.state = lrcGetGroupState(filter.user, filter.state);
      if(LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][filter.user])
        filter.state = lrcAddState(filter.state, "NEWBIE");

      if (lrcMakeParam("GetPageInfos")) {
        livePageInfos(filter);
      } else {
        getRevision(filter);
      }
    }
    if(filteritems[0]){
      LiveRC_Config["LastFILTERid"] = filteritems[0].getAttribute('id');
      LiveRC_Config["LastFILTERtimestamp"] = filteritems[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // CheckUser

  var checkuserlog = query.getElementsByTagName('checkuserlog')[0];
  if(checkuserlog){
    var CUentries = checkuserlog.getElementsByTagName('entry');
    for(var c=0,l=CUentries.length;c<l;c++){
      var entry = CUentries[c];
      cu = {};
      cu.state = [];
      cu.state = lrcAddState(cu.state, "LOG");
      cu.state = lrcAddState(cu.state, "CHECKUSER");
      var entryAttr = entry.attributes;
      for(var attr=0,attrlen=entryAttr.length;attr<attrlen;attr++){
        var attrib = entryAttr[attr];
        cu[attrib.name] = attrib.value;
      }
      cu.comment = cu.reason;
      cu.title = lrcGetNamespaceName(2)+":"+cu.target;
      cu.user = cu.checkuser;
    }
    getRevision(cu);
    if(CUentries[0]){
      LiveRC_Config["LastCUtimestamp"] = CUentries[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
    }
  }

  // RC
  var i,j,leni,lenj,rc;
  var rcs = query.getElementsByTagName('rc');
  leni=rcs.length;
  for (i=leni-1; i>=0; i--) {
    // Using rcid as revid can be 0 (e.g. when moving a page)
    if (rcs[i].getAttribute('rcid') <= LiveRC_Config["LastRCid"]) continue;

    rc = {};
    rc.state = [];
    lenj = rcs[i].attributes.length;
    for (j=0; j<lenj; j++) {
      switch(rcs[i].attributes[j].name) {
        case 'anon':
          rc.state = lrcAddState(rc.state, "IP");
          break;
        case 'bot':
          rc.state = lrcAddState(rc.state, "BOT");
          var u = rcs[i].getAttribute('user');
          if(!lrcUserHasGroup("bot", u) && typeof(LiveRC_Config["UserGroupList"]["bot"]) === "object" && typeof(LiveRC_Config["UserGroupList"]["bot"].list) === "object")
            LiveRC_Config["UserGroupList"]["bot"].list.push(u);
          break;
        case 'new':
          rc.state = lrcAddState(rc.state, "NEW");
          break;
        case 'minor':
          rc.state = lrcAddState(rc.state, "MINOREDIT");
          break;
        case 'new_ns':
          rc.state = lrcAddState(rc.state, "NEWNS");
          break;
        case 'new_title': // MW < 1.26wmf3
          rc.state = lrcAddState(rc.state, "RENAMED");
          break;
        case 'target_title':
          rc.state = lrcAddState(rc.state, "RENAMED");
          break;
        case 'patrolled':
          rc.state = lrcAddState(rc.state, "PATROLLED");
          break;
        default:
          rc[rcs[i].attributes[j].name] = rcs[i].attributes[j].value;
          break;
      }
    }
    if(rc.type && rc.type == 'log') continue; // We don't want "log" rc

    var tags = rcs[i].getElementsByTagName('tags')[0].getElementsByTagName('tag');
    if(tags.length) {
      rc.state = lrcAddState(rc.state, "TAG");
      tagsArray = [];
      for(var a=0,l=tags.length;a<l;a++){
        tagsArray.push(tags[a].firstChild.nodeValue);
      }
      rc.tags = tagsArray;
    }

    if (rc.newlen == 0 && rc.type != 'categorize') rc.state = lrcAddState(rc.state, "BLANKING");

    rc.state = lrcGetGroupState(rc.user, rc.state);
    if(LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][rc.user])
      rc.state = lrcAddState(rc.state, "NEWBIE");

    if(rc.type && rc.type == 'external')
      rc.state = lrcAddState(rc.state, "EXTERNAL");

    if(rc.type && rc.type == '142')
      rc.state = lrcAddState(rc.state, "FLOW");

    if ((typeof(rc.logtype) != "undefined") && rc.logtype == "newuser") continue;

    if(lrcMakeParam("GetPageInfos")) {
      livePageInfos(rc);
    } else {
      getRevision(rc);
    }
  }
  if(rcs[0]){
    LiveRC_Config["LastRCid"] = rcs[0].getAttribute('rcid');
    LiveRC_Config["LastRCtimestamp"] = rcs[0].getAttribute('timestamp').replace(new RegExp(/\D/g), "");
  }

  // Notifications
  var notifications = api.getElementsByTagName('notification');
  for(var a=0,l=notifications.length;a<l;a++){
    var notification = notifications[a];
    var not = {};
    not.state = lrcAddState(not.state, "NOTIFICATION");
    for(var j=0,lenj=notification.attributes.length;j<lenj;j++) {
      not[notification.attributes[j].name] = notification.attributes[j].value;
    }
    for(var j=0,lenj=notification.childNodes.length;j<lenj;j++){
      var thisnode = notification.childNodes[j];
      for(var x=0,lenx=thisnode.attributes.length;x<lenx;x++) {
        var attrname = thisnode.attributes[x].name;
        if(attrname != "id") not[attrname] = thisnode.attributes[x].value;
      }
    }
    if(typeof(not.read) === "undefined"){ // Show notification not read yet
      liveNotificationInfos(not);
    }else{
      var OldNotID = not.id+"_"+not.mw;
      if(document.getElementById(OldNotID)) supprLigne(OldNotID);
    }
  }
  lrcToggleLogo(false);
  LiveRC_Config["RequestError"] = 0;
  clearTimeout(LiveRC_Config["Timeout"]["RCRequest"]);
  LiveRC_Config["Timeout"]["RCRequest"] = setTimeout("liveRC()",lrcMakeParam("Refresh")*1000);
};

/*</source>

==== Requête des infos de la page (suivi, protection, modèles, catégories et interwikis) ====

<source lang="javascript"> */

window.livePageInfos = function(rc){
  lrcDisplayDebug("Get page infos ("+rc.title+")");
  var withFlags = (lrcIsExtensionInstalled("Flagged Revisions"));
  var title = rc.title;
  var URL = lrcGetAPIURL('format=xml&action=query')
                  + '&titles=' + encodeURIComponent(title)
                  + '&prop=info|pageprops|categories|templates|links|langlinks' + (withFlags ? '|flagged' : '')
                  + '&inprop=watched|protection|watchers|notificationtimestamp'
                  + '&cllimit='+LiveRC_Config["UserInfos"].APIlimit+'&clprop=hidden'
                  + '&tllimit='+LiveRC_Config["UserInfos"].APIlimit+'&tlnamespace=10'
                  + '&lllimit='+LiveRC_Config["UserInfos"].APIlimit
                  + '&pllimit='+lrcMakeParam("MinLinks")
                  + '&redirects'
                  + '&list=backlinks&bllimit='+lrcMakeParam("MinBacklinks")+'&bltitle=' + encodeURIComponent(title)
                  + '&continue=';
  wpajax.http({url: URL,
               onSuccess: getPageInfos,
               onFailure: function(){ getRevision(rc); },
               edit: rc
  });
};

window.getPageInfos = function(xmlreq, data){
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;

  var rc = data.edit;
  var title = rc.title;
  var state = rc.state;

// ------------------------- Page infos : Redirect ?

  var Redirect = api.getElementsByTagName('redirects')[0];
  if(Redirect) {
    state = lrcAddState(state, "REDIRECT");
    var R = Redirect.getElementsByTagName('r');
    if(R.length)
      rc.redirect = R[0].getAttribute('to');
  }

// ------------------------- Page infos : Missing ? watched ? protections ? nb of watchers ? Disambig ? Wikidata item ? Notificationtimestamp ?

  var page = api.getElementsByTagName('page')[0];
  if(page){
    var pageismissing = (page.getAttribute('missing') ==="");
    if(pageismissing) rc.redlink = true;
    var pageiswatched = (page.getAttribute('watched') ==="");
    var sothername = lrcGetOtherPagename(title);
    if(!pageiswatched && LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"].hasOwnProperty(title)){
      removePageFromSuivi(title);
      if(sothername) removePageFromSuivi(sothername);
      updateFollowWatchlist();
    }else if(pageiswatched && !LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"].hasOwnProperty(title)){
      addPageToSuivi(title);
      if(sothername) addPageToSuivi(sothername);
      updateFollowWatchlist();
    }
    var notificationtimestamp = page.getAttribute('notificationtimestamp');
    if(pageiswatched && notificationtimestamp && !LiveRC_Config["Notificationtimestamp"][title]){
      LiveRC_Config["Notificationtimestamp"][title] = notificationtimestamp;
      rc.notificationtimestamp = notificationtimestamp;
    }
    rc.watchers = page.getAttribute('watchers');
    rc.lastrevid = page.getAttribute('lastrevid');
    var PageProtections = page.getElementsByTagName("pr");
    for(var a=0,l=PageProtections.length;a<l;a++){
      var pr = PageProtections[a];
      var prType = pr.getAttribute("type");
      var prLevel =  pr.getAttribute("level");
      if(prType == "edit"){
        if(prLevel == "autoconfirmed") state = lrcAddState(state, "LOCK");
        if(prLevel == "editextendedsemiprotected" || prLevel == "extendedconfirmed") state = lrcAddState(state, "EXTENDEDLOCK");
        if(prLevel == "sysop") state = lrcAddState(state, "FULLLOCK");
      }
    }
    var PageProps = page.getElementsByTagName('pageprops')[0];
    if(PageProps){
      var Disambig = PageProps.getAttribute("disambiguation");
      if(Disambig === "") state = lrcAddState(state, "HOMONYMIE");
      var WikidataItem = PageProps.getAttribute("wikibase_item");
      if(WikidataItem) rc.wikidataitem = WikidataItem;
    }
  }

// ------------------------- Categories

  rc.categories = [];
  if(api.getElementsByTagName('categories').length){
    var cats = api.getElementsByTagName('categories')[0].getElementsByTagName('cl');
    var pageHasCat = false;
    for (var i=0,leni = cats.length; i<leni; i++){
      if(cats[i].getAttribute("hidden")==null) pageHasCat = true;
      var catTitle = cats[i].getAttribute('title');
      rc.categories.push(catTitle);
    }
    if(pageHasCat) state = lrcAddState(state, "CATEGORIZED");
  }

// ------------------------- Templates

  rc.templates = [];
  if(api.getElementsByTagName('templates').length){
    var temps = api.getElementsByTagName('templates')[0].getElementsByTagName('tl');
    for (var i=0,leni = temps.length; i<leni; i++){
      var templateTitle = temps[i].getAttribute('title');
      rc.templates.push(templateTitle);
    }
  }

// ------------------------- Links

  var links = api.getElementsByTagName('links')[0];
  rc.links = (links ? links.getElementsByTagName('pl').length : 0);

// ------------------------- Langlinks

  rc.langlinks = [];
  if(api.getElementsByTagName('langlinks').length){
    var temps = api.getElementsByTagName('langlinks')[0].getElementsByTagName('ll');
    for (var i=0,leni = temps.length; i<leni; i++){
      var langlinksLang = temps[i].getAttribute('lang');
      var langlinksTitle = (temps[i].firstChild ? temps[i].firstChild.nodeValue : '');
      var Interwiki = LiveRC_Config["MediawikiInterwikimap"][langlinksLang];
      if(Interwiki){
        var langlinksURL = Interwiki['url'].split("$1").join(langlinksTitle);
      }else{
        var langlinksURL = 'https://'+langlinksLang+'.wikipedia.org/wiki/'+langlinksTitle; // Fallback
        lrcDisplayDebug('Missing interwiki in LiveRC_Config["MediawikiInterwikimap"]: '+langlinksLang, false, true);
      }
      rc.langlinks.push({lang:langlinksLang,title:langlinksTitle,url:langlinksURL});
    }
  }
  if(rc.langlinks.length==0 && !rc.wikidataitem) state = lrcAddState(state, "NOLANGLINK")

// ------------------------- BackLinks

  rc.backlinks = api.getElementsByTagName('bl').length;

// ------------------------- Flagged ?

  if(api.getElementsByTagName('flagged').length){
    var flagAttributes = api.getElementsByTagName('flagged')[0].attributes;
    for(var i=0,leni=flagAttributes.length;i<leni;i++){
      var attrName = flagAttributes[i].name;
      var attrValue = flagAttributes[i].value;
      rc[attrName] = attrValue;
    }
    if(rc.stable_revid == rc.lastrevid){
      state = lrcAddState(state, "REVIEW_OK");
      if(LiveRC_Config["SpecialLogListConfig"]["livePendingChanges"]["Values"][title]) removePendingChanges(title);
    }else{
      state = lrcAddState(state, "REVIEW_KO");
    }
  }

// -------------------------
  rc.state = state;
  if(lrcHasState(state, "EXTERNAL") && lrcMakeParam("GetWikidataInfos") && rc.wikidataitem){
    liveWikidataInfos(rc);
  }else if(lrcHasState(rc.state, "UPLOAD") && lrcMakeParam("GetFileInfos")){
    liveFileInfos(rc);
  }else{
    getRevision(rc);
  }
};

/*</source>

==== Requête des infos fichier ====

<source lang="javascript"> */

window.liveFileInfos = function(rc){
  var title=rc.title;
  var URL = lrcGetAPIURL('format=xml&action=query')
                  + '&titles=' + encodeURIComponent(title)
                  + '&prop=imageinfo'
                  + '&iiprop=size|dimensions|extmetadata'
                  + '&continue=';
  wpajax.http({url: URL,
               onSuccess: getFileInfos,
               onFailure: function(){ getRevision(rc); },
               edit: rc
  });
};

window.getFileInfos = function(xmlreq, data){
  var rc = data.edit;
  lrcDisplayDebug("Get file infos ("+rc.title+")");
  var imageinfos = {};
  var XML = xmlreq.responseXML;
  var ii = XML.getElementsByTagName('ii')[0];
  var attr = ii.attributes;
  for(var a=0,l=attr.length;a<l;a++){
    imageinfos[attr[a].name] = attr[a].value;
  }
  var unit = "o";
  var size = parseInt(imageinfos["size"]);
  if(typeof(size)==="number"){
    if(size>1500000){
      unit = "Mio";
      size = (Math.round(100*(size/(1024*1024)))/100);
    }else if(size>1500){
      unit = "Kio";
      size = (Math.round(100*(size/1024))/100);
    }
    rc.size = size+"&nbsp;"+unit;
  }
  if(imageinfos["width"] && imageinfos["height"]){
    rc.dimensions = imageinfos["width"]+"x"+imageinfos["height"]+"px";
  }
  var extmetadata = ii.getElementsByTagName('extmetadata')[0];
  for(var a=0,l=extmetadata.childNodes.length;a<l;a++){
    var thisNode = extmetadata.childNodes[a];
    var thisNodeName = thisNode.nodeName;
    var thisNodeValue = thisNode.getAttribute("value");
    if(thisNodeName && thisNodeValue) rc[thisNodeName] = thisNodeValue;
  }
  getRevision(rc);
};

/*</source>

==== Requête des infos wikidata ====

<source lang="javascript"> */

window.liveWikidataInfos = function(rc){
  lrcDisplayDebug("Get wikibase infos ("+rc.wikidataitem+")");
  var URL = lrcGetAPIURL('format=xml&action=centralauthtoken');
  wpajax.http({url: URL,
               onSuccess: liveWikidataInfos_ManageToken,
               onFailure: function(){ getRevision(rc); },
               rc: rc
  });
};

window.liveWikidataInfos_ManageToken = function(Req, data){
  var rc = data.rc;
  var centralauthtoken = false;
  try{
    var XML = Req.responseXML;
    var Tokens = XML.getElementsByTagName('centralauthtoken')[0];
    centralauthtoken = Tokens.getAttribute('centralauthtoken');
  }catch(e){ }
  if(!centralauthtoken) return getRevision(rc);
  var apiPath = LiveRC_Config["MediawikiWikibase"]["base"] + LiveRC_Config["MediawikiWikibase"]["scriptpath"] + '/api.php';
  var URL = apiPath
          + '?format=xml&action=query&list=recentchanges&rcuser='+rc.user
          + '&rclimit=10'
          + '&rcstart='+rc.timestamp
          + '&rcstart='+rc.timestamp
          + '&rcprop=user|comment|parsedcomment|flags|timestamp|title|ids|sizes'
          + '&origin='+encodeURIComponent(window.location.protocol+mw.config.get('wgServer'))
          + '&centralauthtoken='+encodeURIComponent(centralauthtoken);
  wpajax.http({url: URL,
               onSuccess: getWikidataInfos,
               onFailure: function(){ getRevision(rc); },
               rc: rc
  });
};

window.getWikidataInfos = function(Req, data){
  var rc = data.rc;
  var item = rc.wikidataitem;
  var XML = Req.responseXML;
  if(XML){
    var RCitem = XML.getElementsByTagName('rc')[0];
    if(RCitem){
      var nochangeditems = ["type", "ns", "title"];
      var Attr = RCitem.attributes;
      for(var a=0,l=Attr.length;a<l;a++){
        var AttrName = Attr[a].name;
        if(nochangeditems.indexOf(AttrName)!==-1) continue;
        var AttrValue = Attr[a].value;
        rc[AttrName] = AttrValue;
      }
      rc.wikibaseinfosloaded = true;
    }
  }
  getRevision(rc);
};

/*</source>

==== Gestion des notifications ====

<source lang="javascript"> */

window.liveNotificationInfos = function(not){
  wpajax.http({url: lrcGetAPIURL('format=xml&action=query')
                  + '&meta=notifications&notformat=html',
               onSuccess: getNotificationInfos,
               not: not
  });
};

window.getNotificationInfos = function(xmlreq, data){
  var not = data.not;
  var api = xmlreq.responseXML.getElementsByTagName('api')[0];
  if (api.firstChild.nodeName == "error") return;
  var notifications = api.getElementsByTagName('notification');
  for(var a=0,l=notifications.length;a<l;a++){
    var notification = notifications[a];
    var ID = notification.getAttribute('id');
    if(ID != not.id) continue;
    var HTML = ( notification.firstChild ? notification.firstChild.nodeValue : "");
    not.HTML = HTML.unhtmlize();
    getRevision(not);
  }
};

window.getRevisionNotification = function(not){
  var type = not.type;
  var category = not.category;
  var id = not.id;
  var user = not.name;
  var timestamp = not.mw;
  var title = not.full;
  var text = not.HTML;

  var tr1ID = id+"_"+timestamp;

  var tr1 = document.createElement('tr');
  var th0 = document.createElement('th');
  var td1 = document.createElement('td');
  tr1.className = "RcNotification";
  th0.className = "th0RC";
  td1.className = "th1RC";
  td1.setAttribute("colspan", "4");

  th0.innerHTML = '<a class="hidelineLink" href="javascript:;" onClick="markReadNotification('+lrcEscapeStr(id)+', '+lrcEscapeStr(tr1ID)+'); return false;" title="'+lrcMakeText("HIDE_THIS")+'">X</a>';
  td1.innerHTML = text;
  tr1.appendChild(th0);
  tr1.appendChild(td1);
  tr1.id = tr1ID;

  var tabScroll = document.getElementById("liveRC_RCList");
  var tab = document.getElementById( 'tabRC' );
  if(!lrcMakeParam("InvertUpdate")){ // Save scrollTop
    var ScrollDown = (tab.offsetHeight - tabScroll.scrollTop);
  }
  var alreadysuppr = false;
  var OldLine = document.getElementById(tr1ID);
  if(OldLine){
    OldLine.parentNode.removeChild(OldLine);
    alreadysuppr = true;
  }
  if(!lrcMakeParam("InvertUpdate") && tab.firstChild){
    tab.insertBefore(tr1, tab.firstChild);
  }else{
    tab.appendChild(tr1);
  }
  var tabLines = lrcGetElementsByClass("rcLine",tab,"tr");
  if(!lrcMakeParam("KeepAllLines") && !alreadysuppr && tabLines.length > lrcMakeParam("RCLimit")){
    var idt = (lrcMakeParam("InvertUpdate") ? tab.firstChild.id : tab.lastChild.id);
    supprLigne(idt);
  }
  if(!lrcMakeParam("InvertUpdate")){ // Reload scrollTop
    if(ScrollDown) tabScroll.scrollTop = (tab.offsetHeight - ScrollDown);
  }
  var Links = tr1.getElementsByTagName('a');
  for(var a=0,l=Links.length;a<l;a++){
    Links[a].setAttribute("target", "_blank");
  }
  LiveRC_RunHooks("AfterRCNotification", {id:tr1.id, rc:not});
};

window.markReadNotification = function(id, tr1ID){
  var URL = lrcGetAPIURL('format=xml') + '&action=query&meta=tokens&type=csrf';
  wpajax.http({url: URL,
               onSuccess: markReadNotificationRunning,
               tr1ID:tr1ID,
               id:id
  });
};
window.markReadNotificationRunning = function(Req, data){
  var ObjetXML = Req.responseXML;
  var Tokens = ObjetXML.getElementsByTagName("tokens")[0];
  if(!Tokens) return;
  var token = encodeURIComponent(Tokens.getAttribute("csrftoken"));
  var Params = 'list='+data.id + '&token=' + token;
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL('action=echomarkread'),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: markReadNotificationDone,
                tr1ID: data.tr1ID
  });
};
window.markReadNotificationDone = function(req, data){
  var tr1ID = data.tr1ID;
  if(tr1ID && document.getElementById(tr1ID)) supprLigne(tr1ID);
};

/* </source>

==== Affichage d'une ligne RC ====

===== Création de la ligne =====

<source lang="javascript"> */

LiveRC_Config["RCpaused"] = [];

window.getRevisionPaused = function() {
  if (document.getElementById('stopLive').checked){
    setTimeout("getRevisionPaused()", 1000);
    return;
  }
  while(LiveRC_Config["RCpaused"].length!==0){
    getRevision(LiveRC_Config["RCpaused"][0]);
    LiveRC_Config["RCpaused"].shift();
  }
};

window.getRevision = function(rc){
  if(!rc) return;
  if (document.getElementById('stopLive').checked){
    var ID = LiveRC_Config["RCpaused"].length;
    LiveRC_Config["RCpaused"][ID] = rc;
    if(ID==0) setTimeout("getRevisionPaused()", 1000);
    return;
  }
  if(lrcHasState(rc.state, "NOTIFICATION")){
    getRevisionNotification(rc);
    return;
  }

  var ScrollTop = document.body.scrollTop;
  var title = rc.title;
  var pageid = rc.pageid;
  var revid = rc.revid;
  var oldid = rc.old_revid;
  var user = rc.user;
  var comment = (rc.comment ? rc.comment : "");
  var timestamp = rc.timestamp;
  var ns = rc.ns;
  var state = rc.state;
  var categories = rc.categories;
  var templates = rc.templates;
  var lineUID = generateNewID();

  // INITIALISATION LIGNE RC //

  var tr1ID1 = pageid;
  if(!tr1ID1) tr1ID1 = rc.id; // filters
  if(!tr1ID1) tr1ID1 = generateNewID(); // flow
  var tr1ID2 = revid;
  if(!tr1ID2) tr1ID2 = rc.cur_revid; // patrol
  if(!tr1ID2) tr1ID2 = generateNewID(); // flow
  var tr1ID = tr1ID1+"_"+tr1ID2;
  var tr1 = document.createElement('tr');
  var th0 = document.createElement('th');
  var th1 = document.createElement('th');
  var td2 = document.createElement('td');
  var td3 = document.createElement('td');
  var td4 = document.createElement('td');
  var td5 = document.createElement('td');
  th0.className = "th0RC";
  th1.className = "th1RC";
  td2.className = "td2RC";
  td3.className = "td3RC";
  td4.className = "td4RC";
  td5.className = "td5RC";
  lrcaddCustomizableClasses(tr1, "rcLine");
  LiveRC_Config["RCEvents"][lineUID] = rc;
  lrcDisplayDebug("Display RC or LOG ("+tr1ID+")");

  th0.style.width = "20px";
  th1.style.width = "35%";
  td2.style.width = "25%";
//  td3.style.width = "35%";
  td4.style.width = (lrcMakeParam("ShowArticleLength") ? "45px" : "20px")
  td5.style.width = "20px";

  // state tests

  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  var PCategories = Custom_categoriestests;
  if(PCategories.length===0) PCategories = categoriestests;
  var Templates = Custom_templatestests;
  if(Templates.length===0) Templates = templatestests;
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;

  if(typeof(comment) != "undefined"){
    for(var j=0,lenj=Comments.length; j<lenj; j++){
      if((Comments[j].regex).test(comment))
        rc.state = lrcAddState(rc.state, Comments[j].state);
    }
  }
  if(typeof(LiveRC_Config["UserCat"][user]) != 'undefined'){
    for(var cat in LiveRC_Config["UserCat"][user]){
      rc.state = lrcAddState(rc.state, UCategories[cat].state);
    }
  }
  if(typeof(categories)=="object" && categories.length>0){
    for(var a=0,l=categories.length;a<l;a++){
      for(var j=0,lenj = PCategories.length; j<lenj; j++){
        if((PCategories[j].regex).test(categories[a].split(lrcGetNamespaceName(14)+":").join("")))
          rc.state = lrcAddState(rc.state, PCategories[j].state);
      }
      for(var tr=0,trlen=LiveRC_Config["TrackingCategories"].length;tr<trlen;tr++){
        var Cat = lrcGetNamespaceName(14)+":"+ lrcGetMediawikiMessage(LiveRC_Config["TrackingCategories"][tr]);
        if(categories[a] == Cat)
          rc.state = lrcAddState(rc.state, ("TrackingCategories_"+tr));
      }
    }
  }
  if(typeof(templates)=="object" && templates.length>0){
    for(var a=0,l=templates.length;a<l;a++){
      var shorttemplateTitle = templates[a].split(lrcGetNamespaceName(10)+":").join("");
      for(var j=0, lenj=Templates.length; j<lenj; j++){
        if(Templates[j].template == shorttemplateTitle)
          rc.state = lrcAddState(rc.state, Templates[j].state);
      }
    }
  }

  // SUPPR. LIGNE //

  th0.innerHTML = '<a class="hidelineLink" href="javascript:;" onClick="supprLigne(\''+tr1ID+'\'); return false;" title="'+lrcMakeText("HIDE_THIS")+'">X</a><input type="hidden" name="timestamp" value="'+timestamp.replace(/\D/g, "")+'" />';
  th0.id = lineUID;

  // ARTICLE //

  th1.appendChild(getRevision_th1Content(rc, tr1ID));
  lrcAddClass(th1,"RcLine-title");
  th1.style.textAlign="left";

  // EDITOR //

  var td2id = generateNewID();
  td2.appendChild(getRevision_td2Content(rc, tr1ID));
  td2.id = td2id;
  lrcAddClass(th1,"RcLine-user");
  if(LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user]) {
    lrcAddClass(tr1, "RcReverted");
    var RevertIcon = document.createElement('span');
    RevertIcon.className = "RevertIcon";
    var RevertIconSup = document.createElement('sup');
    RevertIconSup.style.color = 'red';
    var RevertIconRazLink = document.createElement('a');
    RevertIconRazLink.href = "javascript:;";
    RevertIconRazLink.onclick = function(){
      lrcSubFollowDelete("liveRevoc", user, updateFollowRevoc);
      var Node = this;
      while(Node){
        if(lrcHasClass(Node, "RevertIcon")) Node.style.display = "none";
        if(lrcHasClass(Node, "rcLine")) lrcRemoveClass(Node, "RcReverted");
        Node = Node.parentNode;
        if(!Node) break;
      }
      return false;
    };
    RevertIconRazLink.title = lrcMakeText("NbRevocCountRAZ_Title");
    RevertIconRazLink.innerHTML = '<mall>'+lrcMakeText("NbRevocCountRAZ_Text")+'</small>';
    RevertIconSup.appendChild(document.createTextNode('('+LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user].edits.length+" "+lrcMakeText("NbRevocCount_Text")+') '));
    RevertIconSup.appendChild(RevertIconRazLink);
    RevertIconSup.appendChild(document.createTextNode(' - '));
    RevertIconSup.appendChild(lrcGetAllRevoc(user, false));
    RevertIcon.appendChild(RevertIconSup);
    td2.appendChild(RevertIcon);
  }

  // COMMENT //

  if (lrcHasState(state, "TAG")){  // Abusefilter tag ? ;
    lrcAddClass(tr1, "RcTag");
  }
  td3.innerHTML = getRevision_td3Content(rc);
  if (!(lrcHasState(state, "ABUSELOG"))) {
    var CommentLinks = td3.getElementsByTagName('a');
    LiveRC_AddPreviewToLinks(CommentLinks);
  }

  // DELTA SIZE //

  if(""+(rc.newlen - rc.oldlen) != "NaN" && (!lrcHasState(state, "EXTERNAL") || (lrcHasState(state, "EXTERNAL") && lrcMakeParam("GetWikidataInfos"))) && rc.type != "categorize") {
    td4.innerHTML += getRevision_td4Content(rc);
    td4.style.textAlign = "right";
    td4.style.whiteSpace = "nowrap";
  }
  var td5HTML = getRevision_td5Content(rc)
  td5.innerHTML = td5HTML;
  if(td5HTML!="") lrcAddClass(tr1, "Rctd5NotEmpty");
  td5.style.textAlign = "center";
  td5.style.whiteSpace = "nowrap";

  // CSS classes

  getRevisionClasses(tr1, rc);

  // ASSEMBLAGE LIGNE //

  tr1.appendChild(th0);
  tr1.appendChild(th1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  tr1.appendChild(td4);
  tr1.appendChild(td5);
  tr1.id = tr1ID;

  // Insertion ligne

  var MustBeShown = setRCRevisionShowStatus(rc);
  var tabScroll = document.getElementById("liveRC_RCList");
  var tab = document.getElementById( 'tabRC' );
  if(!lrcMakeParam("InvertUpdate")){ // Save scrollTop
    var ScrollDown = (tab.offsetHeight - tabScroll.scrollTop);
  }
    // IE automatically inserts a TBODY that we have to take care of
  if (tab.firstChild && (tab.firstChild.nodeName.toLowerCase() == "tbody")) tab=tab.firstChild;
  if(MustBeShown){
    var NextTR = getNextLine(timestamp);
    if(NextTR){
      tab.insertBefore(tr1, NextTR);
    }else{
      if(!lrcMakeParam("InvertUpdate")){
        tab.appendChild(tr1);
      }else{
        tab.insertBefore(tr1, tab.firstChild);
      }
    }
  }
  if(!lrcHasState(state, "EXTERNAL") && !lrcHasState(state, "FLOW")){
    var elold = document.getElementById(pageid+"_"+oldid);
    if(!lrcMakeParam("KeepAllLines")){     // WITH LINE LIMIT
      if(elold == null){
        var tabLines = lrcGetElementsByClass("rcLine",tab,"tr");
        if(tabLines.length > lrcMakeParam("RCLimit")){
          var idt = (lrcMakeParam("InvertUpdate") ? tab.firstChild.id : tab.lastChild.id);
          supprLigne(idt);
        }
      }else{
        supprLigne(elold.id);
      }
    }else{                              // NO LINE LIMIT
      if(elold != null) supprLigne(elold.id);
    }
  }
  if(!lrcMakeParam("InvertUpdate")){ // Reload scrollTop
    if(ScrollDown) tabScroll.scrollTop = (tab.offsetHeight - ScrollDown);
  }

  // MISE A JOUR LISTES "Listes de suivi" //

  updateFollowLists(rc, tr1);
  lrcInitTableHeight();
  if(typeof(ScrollTop)!="undefined") document.body.scrollTop = ScrollTop;

  if(lrcMakeParam("UseMiniDiff"))
    LiveRC_MiniDiffPreviewExtension_Init({id:tr1.id, rc:rc});

  LiveRC_RunHooks("AfterRC", {id:tr1.id, rc:rc});
  if (LiveRC_Config["AllLinesSeen"] && document.getElementById(tr1.id)) {
    LiveRC_Config["AllLinesSeen"] = false;
    goNext(1);
  }
};

window.getNextLine = function(timestamp){
    timestamp = parseInt(timestamp.replace(/\D/g, ""));
    var tab = document.getElementById( 'tabRC' );
    var target = null;
    var AllTimestampInputs = [];
    var AllInputs = tab.getElementsByTagName('input');
    for(var b=0,m=AllInputs.length;b<m;b++){
      var ThisInput = AllInputs[b];
      if(ThisInput.type != "hidden" || ThisInput.name != "timestamp") continue;
      AllTimestampInputs.push(ThisInput);
    }
    for(var b=0,m=AllTimestampInputs.length;b<m;b++){
      if(target) continue;
      var ThisInput = AllTimestampInputs[b];
      var ThisInputTimestamp = parseInt(ThisInput.value);
      if(!lrcMakeParam("InvertUpdate")){
        if(ThisInputTimestamp > timestamp) continue;
        target = AllTimestampInputs[b];
      }else{
        if(ThisInputTimestamp < timestamp) continue;
        target = AllTimestampInputs[b];
      }
    }
    if(target){
      while(target){
        if(target.tagName && target.tagName.toLowerCase() == "tr") break;
        target = target.parentNode;
      }
    }
    return target;
};

window.lrcInitTableHeight = function(){
  var TabDiv = document.getElementById('liveRC_RCList');
  if(!TabDiv) return;
  var HauteurEcran = LiveRC_GetScreenHeight();
  var TitleTable = document.getElementById("TitleTable");
  var RCOptions = document.getElementById("livePreviewFoot");
  var Table = document.getElementById('tabRC');
  var body = document.body;
  if(lrcHasClass(body, "LiveRCConfigDisplayed")){
    var BottomFixedElement = document.getElementById("OutFixedBottomPanel");
  }else{
    var BottomFixedElement = document.getElementById("FixedBottomPanel");
  }
  var TopFixedElement = document.getElementById("FixedTopPanel");
  if(TitleTable && RCOptions && BottomFixedElement && TopFixedElement){
    var NewHeight = parseInt(HauteurEcran - (TitleTable.offsetHeight+TopFixedElement.offsetHeight+RCOptions.offsetHeight+BottomFixedElement.offsetHeight+6));
    TabDiv.style.height = (NewHeight ? NewHeight : 1 ) + "px";
    if(Table){
      var TableInnerHeight = Table.offsetHeight;
      if(TableInnerHeight>NewHeight){
        if(LiveRC_NavIsIE()){
          TabDiv.style.overflowX = "hidden";
          TabDiv.style.paddingRight = "20px";
        }
        TabDiv.style.overflowY = "scroll";
      }else{
        if(LiveRC_NavIsIE()){
          TabDiv.style.overflowX = "";
          TabDiv.style.paddingRight = "0";
        }
        TabDiv.style.overflowY = "";
      }
    }
  }
  if(LiveRC_Config["Timeout"]["InitTableHeight"]) clearTimeout(LiveRC_Config["Timeout"]["InitTableHeight"]);
  LiveRC_Config["Timeout"]["InitTableHeight"] = setTimeout("lrcInitTableHeight()",200);
};

window.changeLigne = function(quelLigne) {
  var el = document.getElementById(quelLigne);
  if(el) lrcAddClass(el, "RcChecked");
};

/* </source>

===== Cellule "page" =====

<source lang="javascript"> */

window.getRevision_th1Content = function(rc, trID){
  var title = rc.title;
  var escTitle = lrcEscapeStr(title);
  var watchers = rc.watchers;
  var state = rc.state;
  var ns = rc.ns;
  var user = rc.user;
  var escUser = lrcEscapeStr(user);
  var timestamp = rc.timestamp;
  var diffbutton = lrcGetDiffLink(rc);
  if(!diffbutton || diffbutton == "") return false;
  var histbutton = document.createTextNode(' • ');
  var editbutton = document.createTextNode(' • ');
  var deletebutton = document.createTextNode(' • ');
  var movebutton = document.createTextNode(' • ');
  var protectbutton = document.createTextNode(' • ');
  var stablebutton = false;
  var watchbutton = document.createTextNode(' • ');
  var hidebutton = lrcCreateHidePageLink(title, LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title], 0, trID);
  var watchersbutton = document.createTextNode(' • ');
  if(!(lrcHasState(state, "LOG")) && !(lrcHasState(state, "EXTERNAL")) ){
    histbutton = lrcGetHistoryLink(rc, histbutton);
    editbutton = lrcGetEditLink(rc, editbutton);
    if(lrcGetFlowStatusForAction(title, "watch")) watchbutton = lrcCreateWatchPageLink(title, LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title], 0, trID);
    movebutton = lrcGetMoveLink(rc, movebutton);
    deletebutton = lrcGetDeleteLink(rc, deletebutton);
    protectbutton = lrcGetProtectLink(rc, protectbutton)
    watchersbutton = lrcGetWatchersIcon(rc, ' • ');
    stablebutton = lrcGetStableLink(rc, stablebutton);
  }else if(lrcHasState(state, "EXTERNAL")){
    histbutton = lrcGetHistoryLink(rc, histbutton);
  }
  var ArticleLink = lrcGetArticleLink(rc);
  var th1Text = document.createElement('span');
  var small = document.createElement('small');
  small.innerHTML = getTimeTag(timestamp);
  small.appendChild(document.createTextNode(' • '));
  small.appendChild(diffbutton);
  small.appendChild(document.createTextNode(' • '));
  small.appendChild(histbutton);
  small.appendChild(document.createTextNode(' • '));
  small.appendChild(editbutton);
  if(movebutton) small.appendChild(document.createTextNode(' • '));
  small.appendChild(movebutton);
  small.appendChild(document.createTextNode(' • '));
  if(deletebutton) small.appendChild(deletebutton);
  small.appendChild(document.createTextNode(' • '));
  if(protectbutton) small.appendChild(protectbutton);
  small.appendChild(document.createTextNode(' • '));
  if(stablebutton){
    small.appendChild(stablebutton);
    small.appendChild(document.createTextNode(' • '));
  }
  small.appendChild(watchbutton);
  small.appendChild(document.createTextNode(' • '));
  small.appendChild(hidebutton);
  small.appendChild(document.createTextNode(' • '));
  small.appendChild(watchersbutton);
  th1Text.appendChild(small);
  th1Text.appendChild(ArticleLink);
  return th1Text;
};

/* </source>

===== Cellule "utilisateur" =====

<source lang="javascript"> */

window.getRevision_td2Content = function(rc, trID){
  var state = rc.state;
  var user = rc.user;
  var escUser = lrcEscapeStr(user);
  var pageid = rc.pageid;
  var revid = rc.revid;
  var discut  = lrcGetUserTalkLink(rc);
  var contrib = lrcGetUserContribsLink(rc);
  var uwatch = lrcCreateWatchUserLink(user, LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user], 0, trID);
  var uadmin = lrcGetBlockLink(rc);
  var uhide  = lrcCreateHideUserLink(user, false, 0, trID);
  var editor = "", preEditor = "";
  var testedStates = [];
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;
  for(var a=0,l=UCategories.length;a<l;a++){
    var ThisState = UCategories[a].state;
    var ThisIcon = UCategories[a].icon;
    if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
      preEditor += lrcMakeIcon(ThisIcon, {after:'&nbsp;'});
      testedStates.push(ThisState);
    }
  }
  if(lrcHasState(state, "NEWBIE") && !lrcHasState(state, "NEWUSER"))
    preEditor += lrcMakeIcon("NewbieIcon", {after:'&nbsp;'});
  preEditor = lrcGetGroupIcon(preEditor, state);
  if (LiveRC_Config["Blocks"].indexOf(user) != -1 && user != mw.config.get('wgUserName'))
    preEditor += lrcMakeIcon("BlockedIcon", {after:'&nbsp;'});
  if (typeof(LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user]) != 'undefined' && user != mw.config.get('wgUserName'))
    preEditor += lrcMakeIcon("SpamblacklistUserIcon", {after:'&nbsp;'});
  editor = lrcGetUserLink(user);
  var postEditor = '';
  if(UserIsIP(user)) {
    postEditor = ' <sup><a class="external lrc_WhoisLink" target="_blank" '
               + 'href="'+lrcMakeParam("WhoisURL").split("$1").join(user)+'" '
               + 'title="'+lrcMakeText("WHOIS_TIP")+'" '
               + '>'+lrcMakeText("WHOIS_SHORT")+'</a></sup>';
  }
  var X = ' • ';
  var td2Text = document.createElement('span');
  var editorLinks = document.createElement('small');
  editorLinks.appendChild(discut);
  editorLinks.appendChild(document.createTextNode(X));
  editorLinks.appendChild(contrib);
  editorLinks.appendChild(document.createTextNode(X));
  editorLinks.appendChild(uhide);
  editorLinks.appendChild(document.createTextNode(X));
  editorLinks.appendChild(uwatch);
  if(uadmin){
    editorLinks.appendChild(document.createTextNode(X));
    editorLinks.appendChild(uadmin);
  }
  editorLinks.appendChild(document.createTextNode(X));
  var preEditorIcons = document.createElement('span');
  preEditorIcons.className= "preEditorIcons";
  preEditorIcons.innerHTML = preEditor;
  var postEditorIcons = document.createElement('span');
  postEditorIcons.className= "postEditorIcons";
  postEditorIcons.innerHTML = postEditor;
  td2Text.appendChild(editorLinks);
  td2Text.appendChild(preEditorIcons);
  td2Text.appendChild(editor);
  td2Text.appendChild(postEditorIcons);
  return td2Text;
};

/* </source>

===== Cellule "commentaire de modification" =====

<source lang="javascript"> */

window.getRevision_td3Content = function(rc){
  var state = rc.state;
  var comment = (rc.comment ? rc.comment : "");
  var parsedcomment = (rc.parsedcomment ? rc.parsedcomment : comment);
  var tags = rc.tags;
  var wcomment = "";
  if(lrcHasState(state, "ABUSELOG")) {
    wcomment = getRevision_td3Content_FilterComment(rc);
  }else{
    wcomment = parsedcomment;
    if(!wcomment && lrcHasState(state, "LOG")) wcomment = getRevision_td3Content_LogComment(rc);
  }
  if (lrcMakeParam("BoldComments")) wcomment = '<b>' + wcomment + '</b>';
  // Tag ? ;
  /////////////////
  if(lrcHasState(state, "TAG") && typeof(tags) != "undefined") {
    var intro = lrcMakeText(tags.length > 1 ? "Tags_Text" : "Tag_Text");
    var TagTemplate = '<br /><span class="tagTemplate">'+intro+' : <span class="tagList">$1</span></span>';
    var taglist = [];
    for(var a=0,l=tags.length;a<l;a++){
      var thistag = '<span class="tagName">' + tags[a] + '</span>';
      taglist.push(thistag);
    }
    TagTemplate = TagTemplate.split("$1").join(taglist.join(" | "));
    wcomment += TagTemplate;
  }
  var td3Text = "<small>" + wcomment + "</small>";
  return td3Text;
};

window.getRevision_td3Content_FilterComment = function(filter) {
  filter.comment = lrcMakeText("FILTER")+' '
  filter.comment += '<a href="'+lrcGetUglyPageURL("Special:AbuseFilter/"+filter.filter_id)+'" '
+ ' onclick="liveFilter(\'AbuseFilter\', {wpSearchFilter:'+filter.filter_id+'}); return false;" >'+filter.filter_id+'</a>';
  filter.comment += (lrcMakeParam("Language") == "fr" ? " " : "") + ": ";
  filter.comment += filter.filter;
  filter.comment += ' ('+lrcGetMediawikiMessage("abusefilter-edit-warn-actions", true) + ' ' + getFilterAction(filter.result) + ')';
  return filter.comment;
};

window.getFilterAction = function(action){
  if (action) {
    if (action.indexOf(',') > -1) {
      return action
        .split(',')
        .map(function (actionPart) {
          return lrcGetMediawikiMessage(("abusefilter-action-"+actionPart), true);
        })
        .join(', ');
    } else {
      return lrcGetMediawikiMessage(("abusefilter-action-"+action), true);
    }
  } else {
    return lrcGetMediawikiMessage("abusefilter-log-noactions", true);
  }
};

window.getRevision_td3Content_LogComment = function(rc){
  var state = rc.state;
  var type = rc.type;
  var action = rc.action;
  var comment = "";


  /* TODO */


  return comment;
};

/* </source>

===== Cellule "tailles" =====

<source lang="javascript"> */

window.getRevision_td4Content = function(rc){
  var state = rc.state;
  var sizediff = rc.newlen - rc.oldlen;
  var td4Text = "";
  var tagstart = ( (sizediff > 500 || sizediff < -500) ? 'span style="font-weight:bold" ' : 'small');
  var tagend = ( (sizediff > 500 || sizediff < -500) ? 'span' : 'small');
  var txtdiff = "";
  if (sizediff < 0)
    txtdiff = '<'+tagstart+' class="mw-plusminus-neg"  >'+sizediff+'</'+tagend+'>';
  else if (sizediff == 0)
    txtdiff = '<'+tagstart+' class="mw-plusminus-null" >+'+sizediff+'</'+tagend+'>';
  else
    txtdiff = '<'+tagstart+' class="mw-plusminus-pos" >+'+sizediff+'</'+tagend+'>';
  if(lrcMakeParam("ShowArticleLength")) txtdiff = '<small class="oldlen">'+rc.oldlen+'</small>' + txtdiff;
  td4Text += txtdiff;
  return td4Text;
};

/* </source>

===== Cellule "test commentaire" =====

<source lang="javascript"> */

window.getRevision_td5Content = function(rc){
  var state = rc.state;
  var td5Text = "";
  if(lrcHasState(state, "MINOREDIT"))
    td5Text += lrcMakeIcon("MinorEditIcon");

  var testedStates = [];
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  for(var a=0,l=Comments.length;a<l;a++){
    var ThisState = Comments[a].state;
    var ThisIcon = Comments[a].icon;
    if(lrcHasState(state, ThisState) && testedStates.indexOf(ThisState)==-1 && ThisIcon){
      td5Text += (td5Text==="" ? "" : '&nbsp;') + lrcMakeIcon(ThisIcon);
      testedStates.push(ThisState);
    }
  }
  return td5Text;
};

/* </source>

===== Classes CSS =====

<source lang="javascript"> */

window.getRevisionClasses = function(tr1, rc){
  var state = rc.state;
  var Comments = Custom_commenttests;
  if(Comments.length===0) Comments = commenttests;
  var PCategories = Custom_categoriestests;
  if(PCategories.length===0) PCategories = categoriestests;
  var Templates = Custom_templatestests;
  if(Templates.length===0) Templates = templatestests;
  var UCategories = Custom_watchCategories;
  if(UCategories.length===0) UCategories = watchCategories;
  var StateTests = [Comments, PCategories, Templates, UCategories];
  for(var a=0,l=StateTests.length;a<l;a++){
    var StateTest = StateTests[a];
    for(var j=0, lenj=StateTest.length;j<lenj;j++){
      var Test = StateTest[j];
      if(Test.state && lrcHasState(state, Test.state) && Test.class) lrcAddClass(tr1, Test.class);
    }
  }
  if(lrcHasState(state, "LOG")) lrcAddClass(tr1, "RcLog");
  if(lrcHasState(state, "PATROLLED")) lrcAddClass(tr1, "RcPatrolled");
  if(lrcHasState(state, "ABUSEFILTER")) lrcAddClass(tr1, "RcAbusefilter");
  if(lrcHasState(state, "ABUSELOG")) lrcAddClass(tr1, "RcAbuselog");
  if(lrcHasState(state, "MANAGETAGS")) lrcAddClass(tr1, "RcManagetags");
  if(lrcHasState(state, "CHANGETAG")) lrcAddClass(tr1, "RcChangetag");
  if(lrcHasState(state, "UPLOAD")) lrcAddClass(tr1, "RcUpload");
  if(lrcHasState(state, "IMPORT")) lrcAddClass(tr1, "RcImport");
  if(lrcHasState(state, "NEWUSER")) lrcAddClass(tr1, "RcNewUser");
  if(lrcHasState(state, "BLOCK")) lrcAddClass(tr1, "RcBlock");
  if(lrcHasState(state, "GBBLOCK")) lrcAddClass(tr1, "RcBlock");
  if(lrcHasState(state, "DELETE")) lrcAddClass(tr1, "RcDelete");
  if(lrcHasState(state, "MOVE")) lrcAddClass(tr1, "RcMove");
  if(lrcHasState(state, "PROTECT")) lrcAddClass(tr1, "RcProtect");
  if(lrcHasState(state, "USERRIGHTS")) lrcAddClass(tr1, "RcRights");
  if(lrcHasState(state, "GBUSERRIGHTS")) lrcAddClass(tr1, "RcRights");
  if(lrcHasState(state, "RENAMEUSER")) lrcAddClass(tr1, "RcRenameuser");
  if(lrcHasState(state, "GBRENAMEUSER")) lrcAddClass(tr1, "RcRenameuser");
  if(lrcHasState(state, "THANKS")) lrcAddClass(tr1, "RcThanks");
  if(lrcHasState(state, "MASSMESSAGE")) lrcAddClass(tr1, "RcMassMessage");
  if(lrcHasState(state, "OVERSIGHT")) lrcAddClass(tr1, "RcOversight");
  if(lrcHasState(state, "CHECKUSER")) lrcAddClass(tr1, "RcCheckuser");
  if(lrcHasState(state, "EDUCATIONPROGRAM")) lrcAddClass(tr1, "RcEducationProgram");
  if(lrcHasState(state, "PAGETRIAGE-DELETION")) lrcAddClass(tr1, "RcPagetriageDeletion");
  if(lrcHasState(state, "PAGETRIAGE-CURATION")) lrcAddClass(tr1, "RcPagetriageCuration");
  if(lrcHasState(state, "REVIEW"))  lrcAddClass(tr1, "RcReview");
  if(lrcHasState(state, "STABLE"))  lrcAddClass(tr1, "RcStable");
  if(lrcHasState(state, "LIQUIDTHREADS")) lrcAddClass(tr1, "RcLiquidThreads");
  if(lrcHasState(state, "PAGETRANSLATION")) lrcAddClass(tr1, "RcPageTranslation");
  if(lrcHasState(state, "TRANSLATORSANDBOX")) lrcAddClass(tr1, "RcTranslatorSandbox");
  if(lrcHasState(state, "TRANSLATIONREVIEW")) lrcAddClass(tr1, "RcTranslationReview");
  if(lrcHasState(state, "NOTIFYTRANSLATORS")) lrcAddClass(tr1, "RcNotifyTranslators");
  if(lrcHasState(state, "OAUTH")) lrcAddClass(tr1, "RcOAuth");
  if(lrcHasState(state, "MOODBAR")) lrcAddClass(tr1, "RcMoodBar");
  if(lrcHasState(state, "INTERWIKI")) lrcAddClass(tr1, "RcInterwiki");
  if(lrcHasState(state, "EXTERNAL")) lrcAddClass(tr1, "RcExternal");
  if(lrcHasState(state, "FLOW")) lrcAddClass(tr1, "RcFlow");
  if((rc.newlen == 0) && !lrcHasState(state, "EXTERNAL") && !lrcHasState(state, "FLOW") && rc.type != "categorize") lrcAddClass(tr1, "RcBlanking");
  if(lrcHasState(state, "NEW")) lrcAddClass(tr1, "RcNew");
  if(lrcHasState(state, "IP") && !lrcHasState(state, "EXTERNAL")) lrcAddClass(tr1, "RcIp");
  if(lrcHasState(state, "NEWBIE"))  lrcAddClass(tr1, "RcNewbie");
  lrcGetGroupClass(tr1, state);
  if(LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][rc.user]) lrcAddClass(tr1, "RcContact");
  if(rc.user == mw.config.get('wgUserName'))  lrcAddClass(tr1, "RcSelf");
  if(lrcHasState(state, "REVIEW_KO")) lrcAddClass(tr1, "RcNotReviewed");
  if(lrcHasState(state, "MINOREDIT")) lrcAddClass(tr1, "RcMinorEdit");
  if(lrcHasState(state, "PATROL")){
    var OldTR = document.getElementById(rc.pageid+"_"+rc.cur_revid);
    if(OldTR) lrcAddClass(OldTR, "RcPatrolled");
  }
};

/* </source>

===== Statut d'affichage =====

<source lang="javascript"> */

window.setRCRevisionShowStatus = function(rc){
  var user = rc.user;
  var title = rc.title;
  var state = rc.state;
  var ns = rc.ns;
  var tags = rc.tags;
  var MustBeShown = true;

  // Don't show line if user doesn't match the user selectors
  var showUsersSelector = document.getElementById("showUser");
  if(showUsersSelector.checked){
    MustBeShown = false;
    var usertypefound = false;
    for(var group in LiveRC_Config["UserGroupList"]){
      var GROUP = group.toUpperCase();
      if(lrcHasState(state, GROUP)){
        usertypefound = true;
        var checkbox = document.getElementById("showUser_"+GROUP);
        if(checkbox && checkbox.checked) MustBeShown = true;
      }
    }
    if(!usertypefound){
      MustBeShown = true;
      if(lrcHasState(state, "IP") && !document.getElementById("showUser_IP").checked) MustBeShown = false;
      if(!lrcHasState(state, "IP")){
        if(lrcUserHasRight("autopatrol")){
         if(lrcHasState(state, "PATROLLED") && !document.getElementById("showUser_AUTOPATROLLED").checked) MustBeShown = false;
         if(!lrcHasState(state, "PATROLLED") && !document.getElementById("showUser_NEWBIE").checked) MustBeShown = false;
        }else{
          if(!document.getElementById("showUser_REGISTERED").checked) MustBeShown = false;
        }
      }
    }
    // In some cases, hide line despite the user selectors
    var HideOwnSubpage = document.getElementById("showUser_HideOwnSubpage");
    if(HideOwnSubpage && HideOwnSubpage.checked && !lrcHasState(state, "IP") && ns==2 && title.indexOf(user)!=-1)
      MustBeShown = false;
    // In some cases, show line despite the user selectors
    var ShowAllSelf = document.getElementById("showUser_ShowAllSelf");
    if(user == mw.config.get('wgUserName') && ShowAllSelf && ShowAllSelf.checked) MustBeShown = true;
    var ShowAllContact = document.getElementById("showUser_ShowAllContact");
    if(LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user] && ShowAllContact && ShowAllContact.checked) MustBeShown = true;
    var ShowAllWatchlist = document.getElementById("showUser_ShowAllWatchlist");
    if(LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title] && ShowAllWatchlist && ShowAllWatchlist.checked) MustBeShown = true;
    var ShowAllRevert = document.getElementById("showUser_ShowAllRevert");
    if(lrcHasState(state, "REVERT") && ShowAllRevert && ShowAllRevert.checked ) MustBeShown = true;
    var ShowAllBlanking = document.getElementById("showUser_ShowAllBlanking");
    if((lrcHasState(state, "BLANKING") || rc.newlen == 0) && ShowAllBlanking && ShowAllBlanking.checked ) MustBeShown = true;
    var ShowAllReplaced = document.getElementById("showUser_ShowAllReplaced");
    if(lrcHasState(state, "REPLACED") && ShowAllReplaced && ShowAllReplaced.checked ) MustBeShown = true;
  }

  // Don't show RC if RC checkbox is not checked
  if(!lrcHasState(state, "LOG")){
    if(!document.getElementById('showRC').checked){
      MustBeShown = false;
    }else{
      var Comments = Custom_commenttests;
      if(Comments.length===0) Comments = commenttests;
      for(var a=0,l=Comments.length;a<l;a++){
        if(lrcHasState(state, Comments[a].state)){
          if(!document.getElementById('showRC_'+Comments[a].state).checked) MustBeShown = false;
        }
      }
      if(!lrcHasState(state, "EXTERNAL") && !lrcHasState(state, "FLOW")){
        if(lrcHasState(state, "MINOREDIT") && !document.getElementById('showRC_minor').checked)
          MustBeShown = false;
        if(!lrcHasState(state, "MINOREDIT")){
          var ShowRCtype = document.getElementById('showRC_'+rc.type);
          if(!ShowRCtype){
            lrcDisplayDebug('Missing checkbox for RC type: '+rc.type, false, true);
          }else if(!ShowRCtype.checked){
            MustBeShown = false;
          }
        }
      }
      if(lrcHasState(state, "EXTERNAL") && !document.getElementById('showRC_external').checked)
        MustBeShown = false;
      if(lrcMakeParam("LoadWatchlist") || lrcMakeParam("GetPageInfos")){
        var RCWatch = (document.getElementById('showRC_WL_watched').checked ? "1" : "0")
                     + (document.getElementById('showRC_WL_notwatched').checked ? "1" : "0")
                     + (LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title] ? "1" : "0")
        if(["111", "110", "101", "010"].indexOf(RCWatch)==-1) MustBeShown = false;
      }
    }
  }

  // Don't show Log if LOG checkbox is not checked
  if(lrcHasState(state, "LOG")){
    if(!document.getElementById("showLog").checked){
      MustBeShown = false;
    }else{
      for(var LogType in LiveRC_Config["LogNames"]){
        if(rc.type == LogType){
          var LogInput = document.getElementById("showLog_"+LogType);
          if(LogInput && !LogInput.checked) MustBeShown = false;
        }
      }
      if(lrcMakeParam("LoadWatchlist") || lrcMakeParam("GetPageInfos")){
        var LogWatch = (document.getElementById('showLOG_WL_watched').checked ? "1" : "0")
                     + (document.getElementById('showLOG_WL_notwatched').checked ? "1" : "0")
                     + (LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title] ? "1" : "0")
        if(["111", "110", "101", "010"].indexOf(LogWatch)==-1) MustBeShown = false;
      }
    }
  }
  // Don't show line if tag do not match the tag selectors
  var tagInput = document.getElementById('showTags');
  if(tagInput && tagInput.checked){
    var tagstoshow = [];
    for(var tagname in LiveRC_Config["MediawikiTags"]){
      var thistaginput = document.getElementById('showTags_'+tagname);
      if(thistaginput && thistaginput.checked) tagstoshow.push(tagname);
    }
    var tagfound = false;
    if(typeof(tags)==="object"){
      for(var a=0,l=tags.length;a<l;a++){
        if(tagfound) continue;
        var thistag = tags[a];
        if(tagstoshow.indexOf(thistag.lcFirst()) != -1 || tagstoshow.indexOf(thistag.ucFirst()) != -1 ) tagfound = true;
      }
    }else{
      var notagInput = document.getElementById("showTags_notag");
      if(notagInput && notagInput.checked) tagfound = true;
    }
    if(!tagfound) MustBeShown = false;
  }

  // Don't show line if ns do not match the ns selectors
  if(typeof(ns)!="undefined" && document.getElementById('showNS').checked){
    var nstohide = [];
    var foundonens = false;
    for(var namespace in LiveRC_Config["MediawikiNamespaces"]){
      var nsInput = document.getElementById('showNS_'+namespace);
      if(nsInput){
        if(nsInput.checked) foundonens = true;
        else nstohide.push(namespace);
      }
      if(foundonens && nstohide.indexOf(ns)!=-1) MustBeShown = false;
    }
  }

  // Don't show line if user is hidden
  if(LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user])
    MustBeShown = false;

  // Don't show line if page is hidden
  if(LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title])
    MustBeShown = false;

  return MustBeShown;
};

/* </source>

===== Affichage MiniDiff =====

<source lang="javascript"> */

window.LiveRC_MiniDiffPreviewExtension_Init = function(Args){
  var id = Args.id;
  lrcDisplayDebug("Get mini-diff ("+id+")");
  var tr1 = document.getElementById(id);
  if (!tr1) return;
  var Link = lrcGetElementsByClass("lrc_PreviewLink",tr1,'a');
  if(!Link[0]) return;
  var trMore = document.getElementById(id+"_More");
  if(trMore) return;
  trMore = document.createElement('tr');
  trMore.id = id+"_More";
  trMore.className = "MiniDiffPreviewTR";
  trMore.style.display = "none";
  var tdClose = document.createElement('td');
  tdClose.className = "th0RC";
  lrcaddCustomizableClasses(tdClose, "MiniDiffClosePreviewTD");
  tdClose.setAttribute("valign", "middle");
  tdClose.setAttribute("style", "text-align:center");
  var tdContent = document.createElement('td');
  var Col = (tr1.getElementsByTagName('th').length + tr1.getElementsByTagName('td').length -1);
  tdContent.setAttribute("colspan", Col);
  lrcaddCustomizableClasses(tdContent, "MiniDiffPreviewTD");
  trMore.appendChild(tdClose);
  trMore.appendChild(tdContent);
  if(tr1.nextSibling)
    tr1.parentNode.insertBefore(trMore, tr1.nextSibling);
  else if(tr1.parentNode)
    tr1.parentNode.appendChild(trMore);
  LiveRC_MiniDiffPreviewExtension_GetDiff(Args);
};

window.LiveRC_MiniDiffPreviewExtension_GetDiff = function(Args){
  var id = Args.id;
  var tr1 = document.getElementById(id);
  var trMore = document.getElementById(id+"_More");
  if (!tr1 || !trMore) return;
  var Link = lrcGetElementsByClass("lrc_PreviewLink",tr1,'a');
  if (Link[0]){
    trMore.style.display = "";
    var URL = Link[0].href;
    trMore.lastChild.innerHTML = "Traitement en cours...";
    wpajax.http({url:URL, onSuccess: LiveRC_MiniDiffPreviewExtension_InsertDiff, Args:Args });
    return;
  }
};

window.LiveRC_MiniDiffPreviewExtension_InsertDiff = function(req, data){
  var Args = data.Args;
  var id = Args.id;
  lrcDisplayDebug("Display mini-diff ("+id+")");
  var tr1 = document.getElementById(id);
  var trMore = document.getElementById(id+"_More");
  if (!tr1 || !trMore) return;
  var Link = lrcGetElementsByClass("lrc_PreviewLink",tr1,'a')[0];
  if(!Link) return;
  var bC  = getPageContent(req);
  var text = '';
  var FunctionsToRun = [];
  var Target = trMore.lastChild;
  switch (Link.textContent) {
    case lrcMakeText("DIFF_SHORT"):
      var lD = lrcGetElementsByClass('diff',bC,null);
      if (lD[0] == null) {
        text += bC.innerHTML ;
      }else {
        text += '<table border="0" width="98%" cellpadding="0" cellspacing="4" class="diff">'+lD[0].innerHTML+'</table>';
        FunctionsToRun.push(function(node){ lrcGetElementsByClass('diff',node,null)[0].getElementsByTagName('tr')[0].style.display = "none"; });
      }
      break;
    case lrcMakeText("DIFFFILTER_SHORT"):
      var Fs = bC.getElementsByTagName('fieldset');
      if (Fs[0] == null) {
        text += bC.innerHTML ;
      }else {
        text += '<fieldset>'+Fs[0].innerHTML+'</fieldset>';
      }
      break;
    default:
      text += bC.innerHTML
      break;
  }
  Target.innerHTML = ('<div id="'+id+'_MiniPreview" class="MiniDiffPreviewContent" style="width:100%;max-height:'+lrcMakeParam("MiniPreviewHeight")+';overflow-y:auto;background:color:white">' + text + '</div>');

  if(FunctionsToRun.length>0){
    for(var a=0,l=FunctionsToRun.length;a<l;a++){
      var thisfunction = FunctionsToRun[a];
      if(typeof(thisfunction)==="function") try{ thisfunction(Target, Args); }catch(e){ }
    }
  }
  LiveRC_RunHooks("AfterMiniDiffPrewiew", Args);
};

window.LiveRC_MiniDiffPreviewExtension_ToggleDiff = function(Checkbox){
  if(!Checkbox) Checkbox = document.getElementById("showDiffR");
  if(!Checkbox) return;
  if(Checkbox.checked){
    lrcRemoveClass(document.body, "MiniDiffPreviewHidden");
  }else{
    lrcAddClass(document.body, "MiniDiffPreviewHidden");
  }
};

/* </source>

==== Fonctions de mise à jour des journaux ====

<source lang="javascript"> */

window.updateFollowLists = function(rc, tr1){
  var title = rc.title;
  var ns = rc.ns;
  var user = rc.user;
  var timestamp = rc.timestamp;
  var state = rc.state;
  var comment = (rc.comment ? rc.comment : "");
  if(!lrcHasState(state, "PATROL")){
    if(LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title]) {
      lrcAddClass(tr1, "RcWatched");
      LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title].ts = timestamp;
      lrcSubFollowAddItem("liveSuivi", title, rc);
      updateFollowWatchlist();
    }

    if (LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user]) {
      LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].ts = timestamp;
      lrcSubFollowAddItem("liveContact", user, rc);
      updateFollowContact();
    }

    if(LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user]){
      LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].ts = timestamp;
      lrcSubFollowAddItem("liveHidden", user, rc);
      updateFollowHiddenUsers();
    }

    if(LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title]){
      LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][title].ts = timestamp;
      lrcSubFollowAddItem("liveHiddenPages", title, rc);
      updateFollowHiddenPages();
    }

    if(!lrcHasState(state, "NEWUSER") && LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user]){
      LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].ts = timestamp;
      lrcSubFollowAddItem("liveNewUsers", user, rc);
      updateFollowNewUsers();
    }

    if(lrcHasState(state, "ABUSELOG")){
      if(!LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user]){
        LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user] = {};
        LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].edits = [];
      }
      LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].ts = timestamp;
      lrcSubFollowAddItem("liveAbuseLog", user, rc);
      updateFollowAbuseLog();
    }
    if(!lrcHasState(state, "MOVE")){
      if(!LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title] && ((lrcHasState(state, "NEW") && ns%2==0)||(lrcHasState(state, "UPLOAD"))) ){
        LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title] = {};
        LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title].edits = [];
      }
      if(LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title]){
        LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title].ts = timestamp;
        lrcSubFollowAddItem("liveNewPages", title, rc);
        updateFollowNewPages();
      }
    }else if(!LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][rc.target_title]  && ns%2==0){
      var newtitle = rc.target_title;
      LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][newtitle] = {};
      LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][newtitle].edits = []
      if(LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title]){
        LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][newtitle].edits = LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title].edits;
        delete LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][title];
      }
      LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][newtitle].ts = timestamp;
      var newRC = rc;
      newRC.title = newtitle;
      newRC.redlink = false;
      newRC.state = lrcRemoveState(newRC.state, "REDIRECT");
      lrcSubFollowAddItem("liveNewPages", newtitle, newRC);
      updateFollowNewPages();
    }

    if(lrcHasState(state, "REVIEW_KO") && !lrcHasState(state, "LOG")){
      LiveRC_Config["SpecialLogListConfig"]["livePendingChanges"]["Values"][title] = rc;
      updateFollowPendingChanges();
    }

    if (lrcHasState(state, "REVERT")) {
      var regex = new RegExp("\\[\\[" + lrcGetNamespaceName(-1) + ":" + lrcGetMediawikiMessage("mycontris") + "\\/([^\\]\\|]+)");
      var match = regex.exec(comment);
      if(!match){
        var regex2 = new RegExp(/\[\[Sp[ée]cial:Contributions\/([^\]\|]+)/);
        match = regex2.exec(comment);
        if (!match) {
          var regex3 = new RegExp(/\[\[Specjalna:Wkład\/([^\]\|]+)/);
            match = regex3.exec(comment);
        }
      }
      if (match) {
        var userR = match[1];
        if (userR != user && userR != mw.config.get('wgUserName')) {
          if (!LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][userR]){
            LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][userR] = {};
            LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][userR].edits = [];
          }
          LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][userR].ts = timestamp;
          lrcSubFollowAddItem("liveRevoc", userR, rc);
          updateFollowRevoc();
        }
      }
    }
    if(lrcHasState(state, "TAG")){
      var tags = rc.tags;
      for(var a=0,l=tags.length;a<l;a++){
        var thistag = tags[a].ucFirst();
        if(!LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][thistag]){
          LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][thistag] = {};
          LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][thistag].edits = [];
        }
        LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][thistag].ts = timestamp;
        lrcSubFollowAddItem("liveTag", thistag, rc);
      }
      updateFollowTags();
    }
    if(lrcHasState(state, "CHANGETAG")){
      var addedtags = rc.addedtags;
      for(var a=0,l=addedtags.lengh;a<l;a++){
        var addedtag = addedtags[a].ucFirst();
        if(!LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][addedtag]){
          LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][addedtag] = {};
          LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][addedtag].edits = [];
        }
        LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][addedtag].ts = timestamp;
        lrcSubFollowAddItem("liveTag", addedtag, rc);
      }
      var removedtags = rc.removedtags;
      for(var a=0,l=removedtags.lengh;a<l;a++){
        var removedtag = removedtags[a].ucFirst();
        if(!LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][removedtag]) continue;
        var edits = LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][removedtag].edits;
        for(var ed=0,edlen=edits.length;ed<edlen;ed++){
          var thisedit = edits[ed];
          if(rc.title !== thisedit.title) continue;
          if(rc.revid !== thisedit.oldid) continue;
          delete LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][removedtag].edits[ed];
        }
        if(LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][removedtag].edits.length === 0)
          delete LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][removedtag];
      }
      updateFollowTags();
    }
  }
  LiveRC_RunHooks("AfterSpecialLogListUpdated", {id:tr1.id, rc:rc});
};

window.updateAllFollow = function(){
  updateFollowRevoc();
  updateFollowNewUsers();
  updateFollowContact();
  updateFollowHiddenUsers();
  updateFollowHiddenPages();
  updateFollowWatchlist();
  updateFollowNewPages();
  updateFollowTags();
  updateFollowAbuseLog();
  updateFollowSpam();
  updateFollowPendingChanges();
  LiveRC_RunHooks("AfterAllSpecialLogListUpdated");
};

window.lrcSortFollow = function(LiList, rev){
  var SortedIds = [];
  var SortedLis = [];
  var obj = {}
  for(var a=0,l=LiList.length;a<l;a++){
    var ThisLi = LiList[a];
    var thisID = parseInt(ThisLi.id.replace(/\D/g, ""));
    SortedIds.push(thisID);
    obj[thisID] = ThisLi;
  }
  SortedIds = SortedIds.sort();
  if(rev) SortedIds = SortedIds.reverse();
  for(var a=0,l=SortedIds.length;a<l;a++){
    SortedLis.push(obj[SortedIds[a]])
  }
  return SortedLis;
};

window.lrcSubFollowAddItem = function(ListName, SubListName, rc){
  var sortts = parseInt(rc.timestamp.replace(/\D/g, ""));
  rc.sorttimestamp = sortts;
  var rcList = LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]["edits"];
  if(rcList.length===0){
    LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]["edits"].push(rc);
  }else{
    for(var a=0,l=rcList.length;a<l;a++){
      var Thists = rcList[a].sorttimestamp;
      if(Thists>sortts) continue;
      return LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]["edits"].splice(a,0,rc);
    }
    LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]["edits"].push(rc);
  }
};

window.lrcSubFollowShowHide = function(Link, ListName, SubListName){
   if(!Link) return false;
   var Span = Link.nextSibling;
   if(!Span) return false;
   if(Span.style.display == "none"){
      Span.style.display = "";
      if(LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]) LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName].display = true;
   }else{
      Span.style.display = "none";
      if(LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName]) LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName].display = false;
   }
};

window.lrcSubFollowDelete = function(ListName, SubListName, updatefunc){
  delete LiveRC_Config["SpecialLogListConfig"][ListName]["Values"][SubListName];
  if(typeof(updatefunc)==="function") updatefunc();
};

/* </source>

===== Modifications balisées =====

<source lang="javascript"> */

window.updateFollowTags = function(){
  lrcDisplayDebug("Update list (Tagged edits)");
  var tempAr = [];
  for (var tagname in LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"].hasOwnProperty(tagname)) continue;
    if(LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][tagname].edits.length == 0) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][tagname].ts;
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    var Line = document.createElement('li');
    Line.id = 'tag-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("HIDE_THIS");
    uremove.onclick = function(){ lrcSubFollowDelete("liveTag", tagname, updateFollowTags); };
    uremove.innerHTML = 'x';
    var TagDesc = document.createElement('span');
    TagDesc.innerHTML = tagname;
    var MoreLink = lrcGetAllTags(tagname);
   // if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(TagDesc);
    Line.appendChild(Small);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveTag = document.getElementById('liveTag');
  if(!liveTag) return;
  liveTag.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveTag.appendChild(List);
};

window.lrcGetAllTags = function(tagname){
  if(!LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"].hasOwnProperty(tagname)) return false;
  var edits = LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][tagname].edits;
  if(edits.length<1) return false;
  var display = ( LiveRC_Config["SpecialLogListConfig"]["liveTag"]["Values"][tagname].display ? '' : 'none');
  var SubListSpan = document.createElement('span');
  SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
  var ToggleLink = document.createElement('a');
  ToggleLink.className = "FollowSublistToggleLink";
  ToggleLink.href="javascript:;";
  ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveTag", tagname); };
  ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
  ToggleLink.innerHTML = '<b>±</b>';
  SubListSpan.appendChild(ToggleLink);
  var SubList = document.createElement('ul');
  SubList.className = "FollowSublist";
  SubList.style.display = display;
  SubListSpan.appendChild(SubList);
  var Lines = [];
  for(var a=0,l=edits.length;a<l;a++){
    var thisedit = edits[a];
    var Line = document.createElement('span');
    Line.innerHTML = getTimeTag(thisedit.timestamp);
    Line.appendChild(document.createTextNode(' – '));
    Line.appendChild(lrcGetDiffLink(thisedit));
    Line.appendChild(document.createTextNode(' : '));
    var sarti = lrcGetPageLink(thisedit);
    Line.appendChild(sarti);
    Line.appendChild(document.createTextNode(' • '));
    Line.appendChild(lrcGetUserLink(thisedit.user));
    Lines.push(Line);
  }
  for(var a=0,l=Lines.length;a<l;a++){
    var Li = document.createElement('li');
    Li.appendChild(Lines[a]);
    SubList.appendChild(Li);
  }
  return SubListSpan;
};

/* </source>

===== Déclenchements du filtre anti-pourriels =====

<source lang="javascript"> */

window.updateFollowSpam = function(){
  lrcDisplayDebug("Update list (Spam)");
  var tempAr = [];
  for (var user in LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'spam-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ lrcSubFollowDelete("liveSpam", user, updateFollowSpam); };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user});
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user);
    var MoreLink  = '';
    if(LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user].edits.length>0) MoreLink = lrcGetAllSpam(user);
    if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveSpam = document.getElementById('liveSpam');
  if(!liveSpam) return;
  liveSpam.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveSpam.appendChild(List);
};

window.lrcGetAllSpam = function(user){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveSpam"]["Values"][user].display ? '' : 'none');

    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveSpam", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var timestamp = thisedit.timestamp;
        var target = thisedit.url;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(timestamp);
        Line.appendChild(document.createTextNode(' – '));
        var SpanTarget = document.createElement('span');
        SpanTarget.title = target;
        SpanTarget.innerHTML = '@';
        Line.appendChild(SpanTarget);
        Line.appendChild(document.createTextNode(' : '));
        var Link = lrcGetPageLink(thisedit);
        Line.appendChild(Link);
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Déclenchements du filtre anti-abus =====

<source lang="javascript"> */

window.updateFollowAbuseLog = function(){
  lrcDisplayDebug("Update list (Abuselog)");
  var tempAr = [];
  for (var user in LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'abuselog-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ lrcSubFollowDelete("liveAbuseLog", user, updateFollowAbuseLog); };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user});
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user, ((LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].edits.length>0) ? false : "color:black") );
    var MoreLink  = '';
    if(LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].edits.length>0) MoreLink = lrcGetAllAbuseLog(user);
    if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveAbuseLog = document.getElementById('liveAbuseLog');
  if(!liveAbuseLog) return;
  liveAbuseLog.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveAbuseLog.appendChild(List);
};

window.lrcGetAllAbuseLog = function(user){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveAbuseLog"]["Values"][user].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveAbuseLog", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var title = thisedit.title;
        var timestamp = thisedit.timestamp;
        var revid = thisedit.revid;
        var oldid = thisedit.old_revid;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' ('));
        var FilterLink = document.createElement('a');
        FilterLink.className = "abuselogDiffLink";
        FilterLink.href = lrcGetUglyPageURL("Special:AbuseFilter/"+thisedit.filter_id);
        FilterLink.onclick = function(){ liveFilter('AbuseFilter',{wpSearchFilter:thisedit.filter_id}); return false; };
        FilterLink.title = thisedit.filter;
        FilterLink.innerHTML = thisedit.filter_id;
        Line.appendChild(FilterLink);
        Line.appendChild(document.createTextNode(') : '));
        var Link = lrcGetPageLink(thisedit);
        Line.appendChild(Link);
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Pending changes =====

<source lang="javascript"> */

window.updateFollowPendingChanges = function(){
  if(!lrcMakeParam("GetPageInfos")) return;
  lrcDisplayDebug("Update list (Pending changes)");
  var tempAr = [];
  for(var title in LiveRC_Config["SpecialLogListConfig"]["livePendingChanges"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["livePendingChanges"]["Values"].hasOwnProperty(title)) continue;
    var rc = LiveRC_Config["SpecialLogListConfig"]["livePendingChanges"]["Values"][title];
    rc.old_revid = rc.stable_revid;
    var timestamp = rc.timestamp;
    var Line = document.createElement('li');
    Line.id = 'pending-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("HIDE_THIS");
    uremove.onclick = function(){ lrcSubFollowDelete("livePendingChanges", title, updateFollowPendingChanges); return false; };
    uremove.innerHTML = 'x';
    var shist = lrcGetHistoryLink(rc);
    var sprotect = lrcGetProtectLink(rc);
    var sotherText = ((getNamespaceInfoFromPage(title) % 2) == 0 ? lrcMakeText("TALK_SHORT") : lrcMakeText("SUBJECT_SHORT") );
    var sothername = lrcGetOtherPagename(title);
    if(sothername){
      var stalk = document.createElement('a');
      stalk.className = "pagetalkLink";
      stalk.href = lrcGetPageURL(sothername);
      stalk.onclick = function(){ liveArticle(sothername); return false; };
      stalk.title = sothername;
      stalk.innerHTML = sotherText;
    }else{
      var stalk = document.createTextNode('');
    }
    var sarti = lrcGetPageLink(rc);
    var diffLink = lrcGetDiffLink(rc);
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(diffLink);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(shist);
    if(sprotect){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(sprotect);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(stalk);
    Line.appendChild(document.createTextNode(' · '));
    Line.appendChild(sarti);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var livePending = document.getElementById('livePendingChanges');
  if(!livePending) return;
  livePending.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  livePending.appendChild(List);
};

/* </source>

===== Nouvelles pages =====

<source lang="javascript"> */

window.updateFollowNewPages = function(){
    lrcDisplayDebug("Update list (NewPages)");
    var THEArray = LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"];
    var tempAr = [];
    for(var title in THEArray){
        if(!THEArray.hasOwnProperty(title)) continue;
        if(THEArray[title].edits.length == 0) continue;
        var timestamp = THEArray[title].ts;
        var lastrc = THEArray[title].edits[0];
        var Line = document.createElement('li');
        Line.id = 'newpages-' + timestamp;
        var uremove = document.createElement('a');
        uremove.className = "hidelineLink";
        uremove.href = "javascript:;";
        uremove.title = lrcMakeText("HIDE_THIS");
        uremove.onclick = function(){ lrcSubFollowDelete("liveNewPages", title, updateFollowNewPages); return false; };
        uremove.innerHTML = 'x';
        var watchbutton = document.createTextNode(' · ');
        if(lrcGetFlowStatusForAction(title, "watch")) watchbutton = lrcCreateWatchPageLink(title, LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][title], 0);
        var sdelete = lrcGetDeleteLink({title:title});
        var sarti = lrcGetPageLink(lastrc);
        var MoreLink  = lrcGetAllNewPages(title);
        if(MoreLink === false) continue;
        var Small = document.createElement('small');
        Small.appendChild(uremove);
        Small.appendChild(document.createTextNode(' · '));
        var TS = document.createElement('span');
        TS.innerHTML = getTimeTag(timestamp);
        Small.appendChild(TS);
        Small.appendChild(document.createTextNode(' : '));
        Small.appendChild(watchbutton);
        if(sdelete){
          Small.appendChild(document.createTextNode(' • '));
          Small.appendChild(sdelete);
        }
        Small.appendChild(document.createTextNode(' • '));
        Line.appendChild(Small);
        Line.appendChild(sarti);
        if(MoreLink) Line.appendChild(MoreLink);
        tempAr.push(Line);
    }
    tempAr = lrcSortFollow(tempAr);
    var liveNewPages = document.getElementById('liveNewPages');
    if(!liveNewPages) return;
    liveNewPages.innerHTML = "";
    var List = document.createElement('ul');
    List.className = "FollowList";
    var len = tempAr.length;
    for(var n=(tempAr.length)-1; n>=0; n--){
      if(tempAr[n]) List.appendChild(tempAr[n]);
    }
    liveNewPages.appendChild(List);
};

window.lrcGetAllNewPages = function(page){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][page]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][page].edits;
    if(edits.length<1) return "";
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveNewPages"]["Values"][page].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveNewPages", page); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetUserLink(thisedit.user));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Pages suivies =====

<source lang="javascript"> */

window.updateFollowWatchlist = function(){
    lrcDisplayDebug("Update list (Watchlist)");
    var THEArray = LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"];
    var tempAr = [];
    for (var title in THEArray) {
        if(!THEArray.hasOwnProperty(title)) continue;
        if(THEArray[title].edits.length == 0) continue;
        var timestamp = THEArray[title].ts;
        var lastrc = THEArray[title].edits[0];
        var Line = document.createElement('li');
        Line.id = 'watchlist-' + timestamp;
        var uremove = document.createElement('a');
        uremove.className = "hidelineLink";
        uremove.href = lrcGetUglyPageURL(title,'&action=unwatch');
        uremove.title = lrcGetMediawikiMessage("unwatch", true)+' « '+title+' »';
        uremove.onclick = function(){ LiveRC_WatchArticle(title,false);this.onclick=null;this.href='javascript:;';return false; };
        uremove.innerHTML = 'x';
        var shist = lrcGetHistoryLink({title:title});
        var sprotect = lrcGetProtectLink({title:title});
        if(getNamespaceInfoFromPage(title)%2==0){
            var sotherText = lrcMakeText("TALK_SHORT");
        }else{
            var sotherText = lrcMakeText("SUBJECT_SHORT");
        }
        var sothername = lrcGetOtherPagename(title);
        if(sothername){
          var stalk = document.createElement('a');
          stalk.className = "pagetalkLink";
          stalk.href = lrcGetPageURL(sothername);
          stalk.onclick = function(){ liveArticle(sothername); return false; };
          stalk.title = sothername;
          stalk.innerHTML = sotherText;
        }else{
          var stalk = false;
        }
        var sarti = lrcGetPageLink(lastrc);
        var MoreLink = lrcGetAllSuivi(title);
        if(MoreLink === false) continue;
        var Small = document.createElement('small');
        Small.appendChild(uremove);
        Small.appendChild(document.createTextNode(' · '));
        var TS = document.createElement('span');
        TS.innerHTML = getTimeTag(timestamp);
        Small.appendChild(TS);
        Small.appendChild(document.createTextNode(' : '));
        Small.appendChild(shist);
        if(sprotect){
          Small.appendChild(document.createTextNode(' • '));
          Small.appendChild(sprotect);
        }
        Line.appendChild(Small);
        if(stalk){
          Small.appendChild(document.createTextNode(' • '));
          Line.appendChild(stalk);
        }
        Line.appendChild(document.createTextNode(' · '));
        Line.appendChild(sarti);
        if(MoreLink) Line.appendChild(MoreLink);
        tempAr.push(Line);
    }
    tempAr = lrcSortFollow(tempAr);
    var liveSuivi = document.getElementById('liveSuivi');
    if(!liveSuivi) return;
    liveSuivi.innerHTML = "";
    var List = document.createElement('ul');
    List.className = "FollowList";
    var len = tempAr.length;
    for(var n=(tempAr.length)-1; n>=0; n--){
      if(tempAr[n]) List.appendChild(tempAr[n]);
    }
    liveSuivi.appendChild(List);
};

window.lrcGetAllSuivi = function(page){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][page]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][page].edits;
    if(edits.length<1) return "";
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][page].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveSuivi", page); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetUserLink(thisedit.user));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Pages masquées =====

<source lang="javascript"> */

window.updateFollowHiddenPages = function(){
    lrcDisplayDebug("Update list (Hidden pages)");
    var THEArray = LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"];
    var tempAr = [];
    for (var title in THEArray) {
        if(!THEArray.hasOwnProperty(title)) continue;
        if(THEArray[title].edits.length == 0) continue;
        var timestamp = THEArray[title].ts;
        var lastrc = THEArray[title].edits[0];
        var Line = document.createElement('li');
        Line.id = 'watchlist-' + timestamp;
        var uremove = document.createElement('a');
        uremove.className = "hidelineLink";
        uremove.href = "javascript:;";
        uremove.title = lrcGetMediawikiMessage("show")+' « '+title+' »';
        uremove.onclick = function(){ LiveRC_HidePage(title, false); this.onclick=null;this.href='javascript:;'; return false; };
        uremove.innerHTML = 'x';
        var shist = lrcGetHistoryLink({title:title});
        var sprotect = lrcGetProtectLink({title:title});
        if(getNamespaceInfoFromPage(title)%2==0){
            var sotherText = lrcMakeText("TALK_SHORT");
        }else{
            var sotherText = lrcMakeText("SUBJECT_SHORT");
        }
        var sothername = lrcGetOtherPagename(title);
        if(sothername){
          var stalk = document.createElement('a');
          stalk.className = "pagetalkLink";
          stalk.href = lrcGetPageURL(sothername);
          stalk.onclick = function(){ liveArticle(sothername); return false; };
          stalk.title = sothername;
          stalk.innerHTML = sotherText;
        }else{
          var stalk = false;
        }
        var sarti = lrcGetPageLink(lastrc);
        var MoreLink = lrcGetAllHiddenPages(title);
        if(MoreLink === false) continue;
        var Small = document.createElement('small');
        Small.appendChild(uremove);
        Small.appendChild(document.createTextNode(' · '));
        var TS = document.createElement('span');
        TS.innerHTML = getTimeTag(timestamp);
        Small.appendChild(TS);
        Small.appendChild(document.createTextNode(' : '));
        Small.appendChild(shist);
        if(sprotect){
          Small.appendChild(document.createTextNode(' • '));
          Small.appendChild(sprotect);
        }
        Line.appendChild(Small);
        if(stalk){
          Small.appendChild(document.createTextNode(' • '));
          Line.appendChild(stalk);
        }
        Line.appendChild(document.createTextNode(' · '));
        Line.appendChild(sarti);
        if(MoreLink) Line.appendChild(MoreLink);
        tempAr.push(Line);
    }
    tempAr = lrcSortFollow(tempAr);
    var liveHiddenPages = document.getElementById('liveHiddenPages');
    if(!liveHiddenPages) return;
    liveHiddenPages.innerHTML = "";
    var List = document.createElement('ul');
    List.className = "FollowList";
    var len = tempAr.length;
    for(var n=(tempAr.length)-1; n>=0; n--){
      if(tempAr[n]) List.appendChild(tempAr[n]);
    }
    liveHiddenPages.appendChild(List);
};

window.lrcGetAllHiddenPages = function(page){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][page]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][page].edits;
    if(edits.length<1) return "";
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveHiddenPages"]["Values"][page].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveHiddenPages", page); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetUserLink(thisedit.user));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Utilisateurs révoqués =====

<source lang="javascript"> */

window.updateFollowRevoc = function() {
  lrcDisplayDebug("Update list (Reverted Users)");
  var tempAr = [];
  for (var user in LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user].edits.length == 0) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'revoc-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ lrcSubFollowDelete("liveRevoc", user, updateFollowRevoc); return false; };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllRevoc(user, true);
    if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var lvRevoc = document.getElementById('liveRevoc');
  if(!lvRevoc) return;
  lvRevoc.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  lvRevoc.appendChild(List);
};

window.lrcGetAllRevoc = function(user, showcount){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveRevoc"]["Values"][user].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    if(showcount) SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveRevoc", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var title = thisedit.title;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetPageLink(thisedit));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Nouveaux utilisateurs =====

<source lang="javascript"> */

window.updateFollowNewUsers = function(){
  lrcDisplayDebug("Update list (NewUsers)");
  var tempAr = [];
  for (var user in LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"].hasOwnProperty(user)) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'newusers-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ lrcSubFollowDelete("liveNewUsers", user, updateFollowNewUsers); return false; };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor = lrcGetUserLink(user, ((LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].edits.length>0) ? false : "color:black") );
    var MoreLink  = '';
    if(LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].edits.length>0) MoreLink = lrcGetAllNewUsers(user);
    if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveNewUsers = document.getElementById('liveNewUsers');
  if(!liveNewUsers) return;
  liveNewUsers.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveNewUsers.appendChild(List);
};

window.lrcGetAllNewUsers = function(user){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveNewUsers"]["Values"][user].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveNewUsers", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var title = thisedit.title;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        var Link = lrcGetPageLink(thisedit);
        Line.appendChild(Link);
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Utilisateurs suivis =====

<source lang="javascript"> */

window.updateFollowContact = function() {
  lrcDisplayDebug("Update list (Watched Users)");
  var tempAr = [];
  for(var user in LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].edits.length == 0) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'contacts-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ LiveRC_WatchUser(user, false); };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllContact(user);
    if(!MoreLink) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveContact = document.getElementById('liveContact');
  if(!liveContact) return;
  liveContact.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveContact.appendChild(List);
};

window.lrcGetAllContact = function(user){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveContact"]["Values"][user].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveContact", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var title = thisedit.title;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetPageLink(thisedit));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

===== Utilisateurs masqués =====

<source lang="javascript"> */

window.updateFollowHiddenUsers = function() {
  lrcDisplayDebug("Update list (Hidden users)");
  var tempAr = [];
  for (var user in LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"]) {
    if(!LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"].hasOwnProperty(user)) continue;
    if(LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].edits.length == 0) continue;
    var timestamp = LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].ts;
    var Line = document.createElement('li');
    Line.id = 'hidden-' + timestamp;
    var uremove = document.createElement('a');
    uremove.className = "hidelineLink";
    uremove.href = "javascript:;";
    uremove.title = lrcMakeText("DeleteUserButton_Title");
    uremove.onclick = function(){ LiveRC_HideUser(user, false); };
    uremove.innerHTML = 'x';
    var udiscut  = lrcGetUserTalkLink({user:user});
    var ucontrib = lrcGetUserContribsLink({user:user})
    var ublock   = lrcGetBlockLink({user:user});
    var ueditor  = lrcGetUserLink(user);
    var MoreLink = lrcGetAllHidden(user);
    if(MoreLink === false) continue;
    var Small = document.createElement('small');
    Small.appendChild(uremove);
    Small.appendChild(document.createTextNode(' · '));
    var TS = document.createElement('span');
    TS.innerHTML = getTimeTag(timestamp);
    Small.appendChild(TS);
    Small.appendChild(document.createTextNode(' : '));
    Small.appendChild(udiscut);
    Small.appendChild(document.createTextNode(' • '));
    Small.appendChild(ucontrib);
    if(ublock){
      Small.appendChild(document.createTextNode(' • '));
      Small.appendChild(ublock);
    }
    Small.appendChild(document.createTextNode(' • '));
    Line.appendChild(Small);
    Line.appendChild(ueditor);
    if(MoreLink) Line.appendChild(MoreLink);
    tempAr.push(Line);
  }
  tempAr = lrcSortFollow(tempAr);
  var liveHidden = document.getElementById('liveHidden');
  if(!liveHidden) return;
  liveHidden.innerHTML = "";
  var List = document.createElement('ul');
  List.className = "FollowList";
  var len = tempAr.length;
  for(var n=(tempAr.length)-1; n>=0; n--){
    if(tempAr[n]) List.appendChild(tempAr[n]);
  }
  liveHidden.appendChild(List);
};

window.lrcGetAllHidden = function(user){
    if(!LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user]) return "";
    var edits = LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].edits;
    var display = ( LiveRC_Config["SpecialLogListConfig"]["liveHidden"]["Values"][user].display ? '' : 'none');
    var SubListSpan = document.createElement('span');
    SubListSpan.appendChild(document.createTextNode(' - '+edits.length));
    var ToggleLink = document.createElement('a');
    ToggleLink.className = "FollowSublistToggleLink";
    ToggleLink.href="javascript:;";
    ToggleLink.onclick = function(){ lrcSubFollowShowHide(this, "liveHidden", user); };
    ToggleLink.title = lrcMakeText("FollowSublistToggleTitle");
    ToggleLink.innerHTML = '<b>±</b>';
    SubListSpan.appendChild(ToggleLink);
    var SubList = document.createElement('ul');
    SubList.className = "FollowSublist";
    SubList.style.display = display;
    SubListSpan.appendChild(SubList);
    var Lines = [];
    for(var a=0,l=edits.length;a<l;a++){
        var thisedit = edits[a];
        var title = thisedit.title;
        var Line = document.createElement('span');
        Line.innerHTML = getTimeTag(thisedit.timestamp);
        Line.appendChild(document.createTextNode(' – '));
        Line.appendChild(lrcGetDiffLink(thisedit));
        Line.appendChild(document.createTextNode(' : '));
        Line.appendChild(lrcGetPageLink(thisedit));
        Lines.push(Line);
    }
    for(var a=0,l=Lines.length;a<l;a++){
      var Li = document.createElement('li');
      Li.appendChild(Lines[a]);
      SubList.appendChild(Li);
    }
    return SubListSpan;
};

/* </source>

=== Fonctions de prévisualisation ===

==== Outils de la fenêtre de prévisualisation ====

<source lang="javascript"> */

// Mise à jour de la hauteur et du déroulé de la fenêtre de prévisualisation

window.updatePreviewWindowAttributes = function(){
  var LP = document.getElementById( 'livePreview' );
  if(LP) LP.scrollTop = 0;
  lrcInitTableHeight();
};

// Annule le redimensionnement de la fenêtre lors d'un cliqué-glissé sur certains éléments

window.LiveRC_DisableOnmouseMoveOnSelects = function(TabContainer){
  if(!TabContainer) return;
  var NodeTags = ['select', 'input', 'a'];
  for(var i=0,ilen=NodeTags.length;i<ilen;i++){
    var Nodes = TabContainer.getElementsByTagName(NodeTags[i]);
    for(var a=0,l=Nodes.length;a<l;a++){
      var Node = Nodes[a];
      Node.onmousemove = function(){
        document.getElementsByTagName('body')[0].onmousemove = null;
        lrcRemoveClass(document.getElementsByTagName('body')[0], "MouseMoveFunctionRunning");
      };
    }
  }
};

/* </source>

===== Fenêtre de l'historique de prévisualisation =====

<source lang="javascript"> */

// Création de l'historique de prévisualisation

window.lrcCreateHistory = function(){
  var TargetDiv;
  if(lrcMakeParam("ShowPreviewOnTop")){
    TargetDiv = document.getElementById("FixedTopPanel");
  }else{
    TargetDiv = document.getElementById("FixedBottomPanel");
  }
  var HistoryDiv = document.getElementById("LiveRC_History");
  if(HistoryDiv || !TargetDiv) return;
  var DivContainer = document.createElement('div');
  DivContainer.id = "LiveRC_History";
  lrcaddCustomizableClasses(DivContainer, "LiveRC_History");
  var DivAnchor = document.createElement('div');
  DivAnchor.id = "LiveRC_HistoryAnchor";
  DivAnchor.innerHTML = lrcMakeText("LiveRC_HistoryTitle");
  var DivContent = document.createElement('div');
  DivContent.id = "LiveRC_HistoryContent";
  DivContent.setAttribute("style", "height:"+lrcMakeParam("HistoryWindowHeight")+";overflow-y:auto;");
  var Ol = document.createElement('ol');
  Ol.id = "LiveRC_History_OL";
  Ol.setAttribute("style", "-moz-column-count:3;-webkit-column-count:3;column-count:3");
  DivContent.appendChild(Ol);
  DivContainer.appendChild(DivAnchor);
  DivContainer.appendChild(DivContent);
  TargetDiv.insertBefore(DivContainer, TargetDiv.firstChild);
  lrcaddCustomizableClasses(DivContent, "LiveRC_MenuContent");
  LiveRC_SetVerticalResizeZone(document.getElementById("LiveRC_HistoryAnchor"),
                       [document.getElementById("LiveRC_HistoryContent")],
                       document.getElementById("LiveRC_History")
                      );
};

// Affichage de l'historique de prévisualisation

window.lrcGetAllHistory = function(){
  var Ol = document.getElementById("LiveRC_History_OL");
  if(!Ol) return;
  while(Ol.firstChild){ Ol.removeChild(Ol.firstChild); }
  var HistoryArray = [];
  for(var a=0,l=LiveRC_Config["History"]["Type"].length;a<l;a++){
    var Type = LiveRC_Config["History"]["Type"][a];
    var Params = LiveRC_Config["History"]["Params"][a];
    var URL = LiveRC_Config["History"]["URL"][a];
    var Text = LiveRC_Config["History"]["Text"][a];
    var Onclick = "lrcGetHistory("+a+"); lrcCloseHistory(); return false;";
    var Link = '<li>'+Type+'&nbsp;:&nbsp;<a href="'+URL+'" onClick="'+Onclick+'">'+Text+'</a></li>';
    if(HistoryArray.indexOf(Link)==-1) HistoryArray.push(Link);
  }
  Ol.innerHTML = HistoryArray.join("");
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCHistoryDisplayed");
  lrcInitTableHeight();
};

// Fermeture de l'historique de prévisualisation

window.lrcCloseHistory = function(){
  lrcRemoveClass(document.body, "LiveRCHistoryDisplayed");
  lrcInitTableHeight();
};

// Ajout d'une entrée à l'historique de prévisualisation

window.lrcAddToHistory = function(Type, Params, URL, Text){
  lrcDisplayDebug("Launch preview ("+Type+")");
  lrcCloseHistory();
  LiveRC_Config["History"]["Type"].push(Type);
  LiveRC_Config["History"]["Params"].push(Params);
  LiveRC_Config["History"]["URL"].push(URL);
  LiveRC_Config["History"]["Text"].push(Text);
};

// Rechargement d'une entrée de l'historique de prévisualisation

window.lrcGetHistory = function(index){
  LiveRC_Config["History"]["IsOld"] = true;
  var Type = LiveRC_Config["History"]["Type"][index];
  var Params = LiveRC_Config["History"]["Params"][index];
  var FuntionToEval = Type + "(" + Params.join(", ") + ");";
  //LiveRC_alert(FuntionToEval);
  eval(FuntionToEval);
  LiveRC_Config["History"]["Type"].pop();
  LiveRC_Config["History"]["Params"].pop();
  LiveRC_Config["History"]["URL"].pop();
  LiveRC_Config["History"]["Text"].pop();
  LiveRC_Config["History"]["Index"] = index;
};

// Mise à jour des boutons de l'historique de prévisualisation

window.buildHistoryPanel = function(){
  if(!LiveRC_Config["History"]["IsOld"]) LiveRC_Config["History"]["Index"] = (LiveRC_Config["History"]["Type"].length-1);
  var PreviousDisabled = ((LiveRC_Config["History"]["Index"]>0) ? '' : ' disabled="disabled" ' );
  var NextDisabled = ((LiveRC_Config["History"]["Index"]<(LiveRC_Config["History"]["Type"].length-1)) ? '' : ' disabled="disabled" ' );
  var PreviousLink = '<input style="padding:0" type="button" ' + PreviousDisabled
                   + 'onclick="lrcGetHistory('+(LiveRC_Config["History"]["Index"]-1)+');" onselect="lrcGetHistory(-1);" '
                   + 'value="'+lrcMakeText("DIFFPREV_SHORT")+'" title="'+lrcMakeText("DIFFPREV_TIP")+'" />';
  var ShowHistoryLink = '<input style="padding:0" type="button" '
                      + 'onclick="lrcGetAllHistory();" onselect="lrcGetAllHistory();" '
                      +'value="'+lrcMakeText("DIFFHIST_SHORT")+'" title="'+lrcMakeText("DIFFHIST_TIP")+'" />';
  var NextLink = '<input style="padding:0" type="button" '+ NextDisabled
               + ' onclick="lrcGetHistory('+(LiveRC_Config["History"]["Index"]+1)+');" onselect="lrcGetHistory(1);" '
               +'value="'+lrcMakeText("DIFFNEXT_SHORT")+'" title="'+lrcMakeText("DIFFNEXT_TIP")+'" />';
  LiveRC_Config["History"]["IsOld"] = false;
  var historyPanel = document.getElementById("historyPanel");
  if(historyPanel) historyPanel.innerHTML = PreviousLink + ShowHistoryLink + NextLink ;
};

/* </source>

===== Fenêtre de recherche externe =====

<source lang="javascript"> */

// Ouverture

window.liveGoogleSearch = function(PageName){
  var OldGoogle = document.getElementById("lrcGoogleDiv");
  if(OldGoogle) closeGoogleSearch();
  lrcDisplayDebug("Open search window"+(PageName ? " - "+PageName : ""));
  var PreviewWindow = document.getElementById("livePreviewTitle");
  if(!PreviewWindow) return;
  var DivGoogle = document.createElement('div');
  DivGoogle.id = "lrcGoogleDiv";
  DivGoogle.setAttribute("style", "width:99.4%;");
  PreviewWindow.parentNode.insertBefore(DivGoogle, PreviewWindow);
  var Titlebar = document.createElement('div');
  lrcaddCustomizableClasses(Titlebar, "LiveRC_MenuAnchor");
  var SearchForm = document.createElement('form');
  SearchForm.onsubmit = function(){
    liveGoogleSearch(document.getElementById('lrcSearchInput').value);
    return false;
  }
  SearchHTML = ''
  SearchHTML += '<b>' + lrcMakeText("LiveRC_SearchTitle") + ' : </b>'
                     + '&nbsp;&nbsp;&nbsp;&nbsp;';
  SearchHTML += '<input id="lrcSearchInput" type="text" '
                   + 'title="'+lrcMakeText("SEARCH_INPUT_TIP")+'" '
                   + 'value="'+( PageName ? PageName : '' )+'" />';
  SearchHTML += '<input type="button" '
                   + 'title="'+lrcMakeText("SEARCH_TIP")+'" '
                   + 'value="'+lrcMakeText("SEARCH_SHORT")+'" '
                   + 'onClick="liveGoogleSearch(document.getElementById(\'lrcSearchInput\').value);"/>'
                   + '&nbsp;&nbsp;';
  SearchHTML += '<input type="button" '
                   + 'title="'+lrcMakeText("SEARCH_CLOSE_TIP")+'" '
                   + 'value="'+lrcMakeText("SEARCH_CLOSE_SHORT")+'" '
                   + 'onClick="closeGoogleSearch();"/>';
  SearchForm.innerHTML = SearchHTML;
  Titlebar.appendChild(SearchForm);
  DivGoogle.appendChild(Titlebar);
  var DivGoogleContent = document.createElement('div');
  lrcaddCustomizableClasses(DivGoogleContent, "LiveRC_MenuContent");
  var URLTemplate = lrcMakeParam("SearchURL");
  var Iframe = document.createElement('iframe');
  Iframe.src = URLTemplate.split("$1").join('%22'+PageName.replace(/ /g, "+")+'%22');
  Iframe.width = "99.8%";
  Iframe.height = lrcMakeParam("SearchWindowHeight");
  Iframe.setAttribute("style", "margin-left:3px");
  DivGoogleContent.appendChild(Iframe);
  DivGoogle.appendChild(DivGoogleContent);
  LiveRC_SetVerticalResizeZone(Titlebar, [DivGoogle, Iframe], DivGoogle);
  LiveRC_DisableOnmouseMoveOnSelects(Titlebar);
};

// Fermeture

window.closeGoogleSearch = function(){
  var GoogleDiv = document.getElementById("lrcGoogleDiv");
  if(GoogleDiv) GoogleDiv.parentNode.removeChild(GoogleDiv);
  lrcInitTableHeight();
};

/* </source>

===== Fonctions standards =====

<source lang="javascript"> */

// Création barre de commandes standard

window.LiveRC_AddElementsToPreviewBar = function(id, Element){
  var PreviewBarTD = document.getElementById("PreviewTitleTD"+id);
  if(!PreviewBarTD) return;
  while(PreviewBarTD.firstChild){ PreviewBarTD.removeChild(PreviewBarTD.firstChild); }
  if(!Element){
    var FakeSpan = document.createElement('span');
    FakeSpan.innerHTML = "&nbsp;";
    PreviewBarTD.appendChild(FakeSpan);
    return;
  }
  if(typeof(Element)==="string"){
    var Span = document.createElement('span');
    Span.innerHTML = Element;
    PreviewBarTD.appendChild(Span);
  }else if(typeof(Element)==="object") try{ PreviewBarTD.appendChild(Element); }catch(e){ };
};

window.buildBlanckPreviewBar = function(Text, History, TextHD, TextBG, TextBD){
    LiveRC_AddElementsToPreviewBar("1", Text);
    LiveRC_AddElementsToPreviewBar("2", TextHD);
    LiveRC_AddElementsToPreviewBar("3", TextBG);
    LiveRC_AddElementsToPreviewBar("4", TextBD);
    var TabContainer = document.getElementById("livePreviewTitle");
    if(TabContainer) LiveRC_DisableOnmouseMoveOnSelects(TabContainer);
    if(History) buildHistoryPanel();
};

// Création barre de commandes avec liens

window.buildPreviewBar = function(Args){
    var Mode = Args["Mode"];
    var URL  = Args["Url"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var id = Args["Id"];
    var Previous = Args["Previous"];
    var Next = Args["Next"];

    if(Mode == "Changetag" && Page == lrcGetNamespaceName(-1, true) + ":Log") Mode = "ChangetagLog";
    if(Mode == "Revisiondelete" && Page == lrcGetNamespaceName(-1, true) + ":Log") Mode = "RevisiondeleteLog";

// $1 : case haut-gauche
    var TabsHautGauche = document.createElement('span');
    var MainLink = document.createElement('a');
    MainLink.href = URL;
    MainLink.onclick = function(){ liveArticle(Page); return false; };
    MainLink.title = Page.replace(/_/g, " ");
    MainLink.innerHTML = "<b>" + Page.replace(/_/g, " ") + "</b>";
    if(Mode=="Article" && Args.oldid) MainLink.innerHTML += '&nbsp;<small><sup>(oldid:'+Args.oldid+')</sup></small>';
    TabsHautGauche.appendChild(MainLink);

    if(["Article","Diff","Hist","Delete","Protect","Edit","Revisiondelete","Changetag","Stabilization"].indexOf(Mode)!=-1 && !lrcIsFlowPage(Page) ){
      var SepOne = document.createElement('span');
      SepOne.innerHTML = '&nbsp;&nbsp;•&nbsp;&nbsp;';
      var WhatLinksHereLink = document.createElement('a');
      WhatLinksHereLink.href = lrcGetUglyPageURL('Special:Whatlinkshere/'+Page);
      WhatLinksHereLink.onclick = function(){ liveWhatlinkshere(Page); return false; };
      WhatLinksHereLink.title = lrcMakeText("WHATLINKSHERE_TIP")+' « '+Page+' »';
      WhatLinksHereLink.innerHTML = "<small>[" + lrcMakeText("WHATLINKSHERE_SHORT") + "]</small>";
      var SepTwo = document.createElement('span');
      SepTwo.innerHTML = '&nbsp;&nbsp;•&nbsp;&nbsp;';
      var SearchLink = document.createElement('a');
      SearchLink.href = lrcMakeParam("SearchURL").split("$1").join('%22'+Page.replace(/ /g, "+")+'%22');
      SearchLink.onclick = function(){ liveGoogleSearch(Page); return false; };
      SearchLink.title = lrcMakeText("SEARCH_TIP")+' « '+Page+' »';
      SearchLink.innerHTML = "<small>[" + lrcMakeText("SEARCH_SHORT") + "]</small>";
      TabsHautGauche.appendChild(SepOne);
      TabsHautGauche.appendChild(WhatLinksHereLink);
      TabsHautGauche.appendChild(SepTwo);
      TabsHautGauche.appendChild(SearchLink);
    }
    if(["Revisiondelete","RevisiondeleteLog"].indexOf(Mode) !== -1 && Args["RevisiondeleteOK"]){
      var SepThree = document.createElement('span');
      SepThree.innerHTML = '&nbsp;';
      var RevisionDeleteOK = document.createElement('small');
      RevisionDeleteOK.innerHTML = lrcMakeText("REVISIONDELETEOK");
      TabsHautGauche.appendChild(SepThree);
      TabsHautGauche.appendChild(RevisionDeleteOK);
    }
    if(["Changetag","ChangetagLog"].indexOf(Mode) !== -1 && Args["ChangetagOK"]){
      var SepThree = document.createElement('span');
      SepThree.innerHTML = '&nbsp;';
      var ChangetagOK = document.createElement('small');
      ChangetagOK.innerHTML = lrcMakeText("CHANGETAGOK");
      TabsHautGauche.appendChild(SepThree);
      TabsHautGauche.appendChild(ChangetagOK);
    }


// $2 : case haut-droite
    var TabsHautDroite = document.createElement('span');
    var PatrolLink = lrcReplacePatrolLink(id);
    if(PatrolLink) TabsHautDroite.appendChild(PatrolLink);
    if(Mode=="Diff" && lrcUserHasRight("deleterevision")){
      var RevisionDeleteLinks = buildRevisiondeleteBar(Page);
      if(RevisionDeleteLinks){
        if(TabsHautDroite.firstChild){
          var SepFour = document.createElement('span');
          SepFour.innerHTML = '&nbsp;&nbsp;•&nbsp;&nbsp;';
          TabsHautDroite.appendChild(SepFour);
        }
        TabsHautDroite.appendChild(RevisionDeleteLinks);
      }
    }
    if(Mode=="Diff" && lrcUserHasRight("changetags")){
      var ChangetagLinks = buildChangetagBar(Page);
      if(ChangetagLinks){
        if(TabsHautDroite.firstChild){
          var SepFour = document.createElement('span');
          SepFour.innerHTML = '&nbsp;&nbsp;•&nbsp;&nbsp;';
          TabsHautDroite.appendChild(SepFour);
        }
        TabsHautDroite.appendChild(ChangetagLinks);
      }
    }
    if(Mode=="Diff" && Previous){
        if(TabsHautDroite.firstChild){
          var SepFive = document.createElement('span');
          SepFive.innerHTML = '&nbsp;&nbsp;•&nbsp;&nbsp;';
          TabsHautDroite.appendChild(SepFive);
        }
        var previousDiffLink = document.createElement('a');
        previousDiffLink.id = "previousDiffLink";
        previousDiffLink.href = Previous["url"];
        previousDiffLink.onclick = function(){ liveDiff(Page,'prev',Previous["oldid"]); return false; };
        previousDiffLink.title = Previous["title"];
        previousDiffLink.innerHTML = "<small>" + Previous["text"] + "</small>";
        TabsHautDroite.appendChild(previousDiffLink);
    }
    if(Mode=="Diff" && Next){
        if(Previous){
          var SepDiff = document.createElement('small');
          SepDiff.innerHTML = '&nbsp;|&nbsp;';
          TabsHautDroite.appendChild(SepDiff);
        }
        var nextDiffLink = document.createElement('a');
        nextDiffLink.id = "nextDiffLink";
        nextDiffLink.href = Next["url"];
        nextDiffLink.onclick = function(){ liveDiff(Page,'next',Next["oldid"]); return false; };
        nextDiffLink.title = Next["title"];
        nextDiffLink.innerHTML = "<small>" + Next["text"] + "</small>";
        TabsHautDroite.appendChild(nextDiffLink);
    }

// $3 : case bas-gauche
    var TabsBasGauche = buildPreviewNormalTabs(Args);

// $4 : case bas-droite
    var TabsBasDroite = buildPreviewSpecialTabs(Args);

// Affichage
    LiveRC_AddElementsToPreviewBar("1", TabsHautGauche);
    LiveRC_AddElementsToPreviewBar("2", TabsHautDroite);
    LiveRC_AddElementsToPreviewBar("3", TabsBasGauche);
    LiveRC_AddElementsToPreviewBar("4", TabsBasDroite);
    buildHistoryPanel();
    LiveRC_RevertMessagesExtension_Init();
    LiveRC_BlankExtension_Init();
    var TabContainer = document.getElementById("livePreviewTitle");
    if(TabContainer) LiveRC_DisableOnmouseMoveOnSelects(TabContainer);
};

// Liens en bas à gauche

window.buildPreviewNormalTabs = function(Args){
    var Mode = Args["Mode"];
    var URL  = Args["Url"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var Next = Args["Next"];

    var ParamOldid = (Next && oldid ? "&oldid="+oldid : "");

    var PageNamespaceNumber = getNamespaceInfoFromPage(Page);
    var PageName = getNamespaceInfoFromPage(Page, "PageName");
    var escTitle = lrcEscapeStrHTML(Page);
    var escUser = false;
    var User = User2;
    if(!User) User = User1;
    if(!User){
        if(PageNamespaceNumber==2 || PageNamespaceNumber==3){
            User = PageName.replace(/\/.*/g, "");
        }
    }
    if(User) escUser = lrcEscapeStrHTML(User);
    var Tabs = [];
    if(Mode == "Changetag" && Page == lrcGetNamespaceName(-1, true) + ":Log") Mode = "ChangetagLog";
    if(Mode == "Revisiondelete" && Page == lrcGetNamespaceName(-1, true) + ":Log") Mode = "RevisiondeleteLog";

// Other Page /////////////////////////////////
    if(["Article","Diff","Hist","Move","Delete","Protect","Edit","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && !lrcIsFlowPage(Page)){

        if(PageNamespaceNumber%2==0){
            var OtherPageText = lrcMakeText("TALK_TIP");
            var OtherPageNamespaceNumber = (PageNamespaceNumber+1);
        }else{
            var OtherPageText = lrcMakeText("SUBJECT_TIP");
            var OtherPageNamespaceNumber = (PageNamespaceNumber-1);
        }
        var OtherPageName = (OtherPageNamespaceNumber == 0 ? PageName : lrcGetNamespaceName(OtherPageNamespaceNumber)+":"+PageName);
        var OtherPageLink = document.createElement('a');
        OtherPageLink.href = lrcGetPageURL(OtherPageName);
        OtherPageLink.onclick = function(){ liveArticle(OtherPageName); return false; };
        OtherPageLink.title = OtherPageName;
        OtherPageLink.innerHTML = OtherPageText;
        Tabs["OtherPage"] = OtherPageLink;
    }else if(["Contrib","DeletedContrib","Block"].indexOf(Mode)!=-1){
        var UserPageName = lrcGetNamespaceName(2)+":"+User;
        var UserPageLink = document.createElement('a');
        UserPageLink.href = lrcGetPageURL(UserPageName);
        UserPageLink.onclick = function(){ liveArticle(UserPageName); return false; };
        UserPageLink.title = UserPageName;
        UserPageLink.innerHTML = lrcMakeText("SUBJECT_TIP");
        Tabs["UserPage"] = UserPageLink;
        var TalkPageName = lrcGetNamespaceName(3)+":"+User;
        var TalkPageLink = document.createElement('a');
        TalkPageLink.href = lrcGetPageURL(TalkPageName);
        TalkPageLink.onclick = function(){ liveArticle(TalkPageName); return false; };
        TalkPageLink.title = TalkPageName;
        TalkPageLink.innerHTML = lrcMakeText("TALK_TIP");
        Tabs["TalkPage"] = TalkPageLink;
    }
// Edit /////////////////////////////////
    if(["Article","Diff","Hist","Move","Delete","Protect","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && lrcGetFlowStatusForAction(Page, "edit")){
        var EditLink = document.createElement('a');
        EditLink.href = lrcGetUglyPageURL(Page,'&action=edit'+ParamOldid);
        EditLink.onclick = function(){ liveEdit(Page, ParamOldid); return false; };
        EditLink.title = lrcMakeText("EDIT_TIP")+' « '+Page+' »';
        EditLink.innerHTML = lrcMakeText("EDIT_TIP");
        Tabs["Edit"] = EditLink;
    }
// New Section /////////////////////////////////
    if(PageNamespaceNumber%2!=0){
        if(["Article","Diff","Hist","Move","Delete","Protect","Edit","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && lrcGetFlowStatusForAction(Page, "edit")){
            var NewSectionLink = document.createElement('a');
            NewSectionLink.href = lrcGetUglyPageURL(Page,'&action=edit&section=new');
            NewSectionLink.onclick = function(){ liveEdit(Page, '&section=new'); return false; };
            NewSectionLink.title = lrcMakeText("NEWSECTION_TIP")+' « '+Page+' »';
            NewSectionLink.innerHTML = lrcMakeText("NEWSECTION_TIP");
            Tabs["NewSection"] = NewSectionLink;
        }
    }
// Hist /////////////////////////////////
    if(["Article","Diff","Edit","Move","Delete","Protect","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && lrcGetFlowStatusForAction(Page, "history")){
        var HistLink = document.createElement('a');
        HistLink.href = lrcGetUglyPageURL(Page,'&action=history');
        HistLink.onclick = function(){ liveHist(Page); return false; };
        HistLink.title = lrcMakeText("HIST_TIP")+' « '+Page+' »';
        HistLink.innerHTML = lrcMakeText("HIST_TIP");
        Tabs["Hist"] = HistLink;
    }
// Move /////////////////////////////////
  if( (PageNamespaceNumber==14 && lrcUserHasRight('move-categorypages')) ||
      (PageNamespaceNumber==6 && lrcUserHasRight('movefile')) ||
      (PageNamespaceNumber!=6 && PageNamespaceNumber!=14 && lrcUserHasRight("move")) ){
        if(["Article","Diff","Edit"||Mode=="Hist","Delete","Protect","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && lrcGetFlowStatusForAction(Page, "move")){
            var MoveLink = document.createElement('a');
            MoveLink.href = lrcGetPageURL('Special:Movepage/'+Page);
            MoveLink.onclick = function(){ liveMove(Page); return false; };
            MoveLink.title = lrcMakeText("MOVE_TIP")+' « '+Page+' »';
            MoveLink.innerHTML = lrcMakeText("MOVE_TIP");
            Tabs["Move"] = MoveLink;
        }
    }
// Contrib /////////////////////////////////
    if(escUser){
        if(["Block","DeletedContrib"].indexOf(Mode)!=-1){
            var ContribLink = document.createElement('a');
            ContribLink.href = lrcGetPageURL('Special:Contributions/' + User);
            ContribLink.onclick = function(){ liveContrib(User); return false; };
            ContribLink.title = lrcMakeText("CONTRIB_TIP")+' « '+User+' »';
            ContribLink.innerHTML = lrcMakeText("CONTRIB_TIP");
            Tabs["Contrib"] = ContribLink;
        }
    }
// DeletedContrib /////////////////////////////////
    if(lrcUserHasRight("deletedhistory") && escUser){
        if(["Block","Contrib"].indexOf(Mode)!=-1){
            var DeletedContribLink = document.createElement('a');
            DeletedContribLink.href = lrcGetPageURL('Special:DeletedContributions/' + User);
            DeletedContribLink.onclick = function(){ liveDeletedContrib(User); return false; };
            DeletedContribLink.title = lrcMakeText("DELETEDCONTRIB_TIP")+' « '+User+' »';
            DeletedContribLink.innerHTML = lrcMakeText("DELETEDCONTRIB_TIP");
            Tabs["DeletedContrib"] = DeletedContribLink;
        }
    }
// Delete /////////////////////////////////
    if(lrcUserHasRight("delete") && lrcGetFlowStatusForAction(Page, "delete")){
        if(["Article","Diff","Hist","Move","Protect","Edit","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1){
            var DeleteLink = document.createElement('a');
            DeleteLink.href = lrcGetUglyPageURL(Page,'&action=delete');
            DeleteLink.onclick = function(){ liveDelete(Page); return false; };
            DeleteLink.title = lrcMakeText("DEL_TIP")+' « '+Page+' »';
            DeleteLink.innerHTML = lrcMakeText("DEL_TIP");
            Tabs["Delete"] = DeleteLink;
        }
    }
// Protect /////////////////////////////////
    if(lrcUserHasRight("protect") && getNamespaceInfoFromPage(Page) != 8 && lrcGetFlowStatusForAction(Page, "protect")){
        if(["Article","Diff","Hist","Move","Delete","Edit","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1){
            var ProtectLink = document.createElement('a');
            ProtectLink.href = lrcGetUglyPageURL(Page,'&action=protect');
            ProtectLink.onclick = function(){ liveProtect(Page); return false; };
            ProtectLink.title = lrcMakeText("PROTECT_TIP")+' « '+Page+' »';
            ProtectLink.innerHTML = lrcMakeText("PROTECT_TIP");
            Tabs["Protect"] = ProtectLink;
        }
    }
// Stable /////////////////////////////////
    if(lrcUserHasRight("stablesettings") && !LiveRC_Config["FlagRevProtection"] && LiveRC_Config["FlagRevNamespaces"].indexOf(getNamespaceInfoFromPage(Page)) != -1){
        if(["Article","Diff","Hist","Move","Delete","Edit","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1){
            var StableLink = document.createElement('a');
            StableLink.href = lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(Page));
            StableLink.onclick = function(){ liveStabilization(Page); return false; };
            StableLink.title = lrcMakeText("STABLE_TIP")+' « '+Page+' »';
            StableLink.innerHTML = lrcMakeText("STABLE_TIP");
            Tabs["Stable"] = StableLink;
        }
    }
// Block /////////////////////////////////
    if(lrcUserHasRight("block") && escUser){
        var ThisUser = false;
        if(["Contrib","DeletedContrib"].indexOf(Mode)!=-1){
            ThisUser = User;
        }else if(Mode=="Article" && (PageNamespaceNumber==2 || PageNamespaceNumber==3)){
            ThisUser = PageName.replace(/\/.*/g, "");
        }
        if(ThisUser){
            var BlockLink = document.createElement('a');
            BlockLink.href = lrcGetPageURL('Special:Blockip/'+ThisUser);
            BlockLink.onclick = function(){ liveBlock(ThisUser); return false; };
            BlockLink.title = lrcMakeText("BLOCK_TIP")+' « '+ThisUser+' »';
            BlockLink.innerHTML = lrcMakeText("BLOCK_TIP");
            Tabs["Block"] = BlockLink;
        }
    }
// (Un)Watch /////////////////////////////////
    if(PageNamespaceNumber>-1){
      if(["Article","Diff","Hist","Edit","Move","Delete","Protect","Revisiondelete","Changetag","Whatlinkshere","AbuseLog","Stabilization"].indexOf(Mode)!=-1 && lrcGetFlowStatusForAction(Page, "watch")){
        Tabs["Watch"] = lrcCreateWatchPageLink(Page, LiveRC_Config["SpecialLogListConfig"]["liveSuivi"]["Values"][Page], 1);
      }
    }
    var AllTabs = document.createElement('ul')
    if(lrcGetObjectLength(Tabs)===0) return AllTabs;
    for(var Tab in Tabs){
        if(Tabs.hasOwnProperty(Tab)){
            var Li = document.createElement("li");
            Li.appendChild(Tabs[Tab]);
            AllTabs.appendChild(Li);
        }
    }
    return AllTabs;
};

// Liens de masquage

window.buildRevisiondeleteBar = function(Page){
    var PreviewDiv = document.getElementById('livePreview');
    if(!PreviewDiv) return "";
    var HideSpans = lrcGetElementsByClass("mw-revdelundel-link", PreviewDiv, "span");
    var HideLinks = [];
    for(var a=0,l=HideSpans.length;a<l;a++){
        var Link = HideSpans[a].getElementsByTagName('a')[0];
        var Id = lrcGetArgFromURL(Link.href, "ids");
        var HideLink = document.createElement('a');
        HideLink.href = lrcGetUglyPageURL('Page', '&action=revisiondelete&type=revision&ids['+Id+']=1');
        HideLink.onclick = function(){ liveRevisiondelete(Page,'revision',[ Id ]); return false; };
        HideLink.title = lrcMakeText("REVISIONDELETE_TIP")+' '+Id;
        HideLink.innerHTML = Id;
        HideLinks.push(HideLink);
    }
    if(HideLinks.length==0) return false;
    var RevisiondeleteTabs = document.createElement('small');
    RevisiondeleteTabs.innerHTML = lrcMakeText("REVISIONDELETE_SHORT") + '&nbsp;:&nbsp;';
    for(var a=0,l=HideLinks.length;a<l;a++){
        RevisiondeleteTabs.appendChild(HideLinks[a]);
        if(a===0) RevisiondeleteTabs.appendChild(document.createTextNode(' | '));
    }
    return RevisiondeleteTabs;
};

// Liens de balisage

window.buildChangetagBar = function(Page){
    var PreviewDiv = document.getElementById('livePreview');
    if(!PreviewDiv) return "";
    var TitleDivs = [ getElementWithId("mw-diff-otitle1", 'div', PreviewDiv) , getElementWithId("mw-diff-ntitle1", 'div', PreviewDiv) ];
    var ChangetagLinks = [];
    for(var a=0,l=TitleDivs.length;a<l;a++){
        if(!TitleDivs[a]) continue;
        var Link = TitleDivs[a].getElementsByTagName('a')[0];
        var Id = lrcGetArgFromURL(Link.href, "oldid");
        if(!Id) continue;
        var ChangetagLink = document.createElement('a');
        ChangetagLink.href = lrcGetUglyPageURL('Page', '&action=editchangetags&type=revision&ids['+Id+']=1');
        ChangetagLink.onclick = function(){ liveChangetag(Page,'revision',[ Id ]); return false; };
        ChangetagLink.title = lrcMakeText("CHANGETAG_TIP")+' '+Id;
        ChangetagLink.innerHTML = Id;
        ChangetagLinks.push(ChangetagLink);
    }
    if(ChangetagLinks.length==0) return false;
    var ChangetagTabs = document.createElement('small');
    ChangetagTabs.innerHTML = lrcMakeText("CHANGETAG_SHORT") + '&nbsp;:&nbsp;';
    for(var a=0,l=ChangetagLinks.length;a<l;a++){
        ChangetagTabs.appendChild(ChangetagLinks[a]);
        if(a===0) ChangetagTabs.appendChild(document.createTextNode(' | '));
    }
    return ChangetagTabs;

};

// Commandes en bas à droite

window.buildPreviewSpecialTabs = function(Args){
    var URL = Args["Url"];
    var Mode = Args["Mode"];
    var Page = Args["Page"];
    var User1 = Args["User1"];
    var User2 = Args["User2"];
    var oldid = Args["Oldid"];
    var id = Args["Id"];
    var patrolledDiff = Args["patrolledDiff"];
    var Next = Args["Next"];
    var SpecialTabs = [];
    if(Mode=="Diff") {
        if(!Next){
            var UndoBar = buildLiveUndo(Page, oldid, User1, User2);
            if(UndoBar) SpecialTabs.push(UndoBar);
        }
        var ThankBar = buildLiveThank(User2, Page, id);
        if(ThankBar) SpecialTabs.push(ThankBar);
        var AvertoBar = buildLiveAverto(Page, User2, true);
        if(AvertoBar) SpecialTabs.push(AvertoBar);
        var ReportBar = buildReport(Page, User2);
        if(ReportBar) SpecialTabs.push(ReportBar);
    }else if(Mode=="Article"){
        var TagBar = buildLiveTag(Page);
        if(TagBar) SpecialTabs.push(TagBar);
        var BlankBar = buildLiveBlank(Page);
        if(BlankBar) SpecialTabs.push(BlankBar);
        var User = Args["User1"];
        var HasPageParam = true;
        var PageNamespaceNumber = getNamespaceInfoFromPage(Page);
        var PageName = getNamespaceInfoFromPage(Page, "PageName");
        if(PageNamespaceNumber==2||PageNamespaceNumber==3){
            User = PageName.replace(/\/.*/g,"");
            HasPageParam = false;
        }
        if(User){
          var AvertoBar = buildLiveAverto(Page, User, HasPageParam);
          if(AvertoBar) SpecialTabs.push(AvertoBar);
          var ReportBar = buildReport(Page, User);
          if(ReportBar) SpecialTabs.push(ReportBar);
        }
    }else if(Mode=="Contrib"||Mode=="DeletedContrib"||Mode=="AbuseLog"){
          var AvertoBar = buildLiveAverto(Page, User1, false);
          if(AvertoBar) SpecialTabs.push(AvertoBar);
          var ReportBar = buildReport(Page, User1);
          if(ReportBar) SpecialTabs.push(ReportBar);
    }
    var SpecialTabDiv = document.createElement('span');
    for(var a=0,l=SpecialTabs.length;a<l;a++){
      if(!SpecialTabs[a]) continue;
      if(SpecialTabDiv.firstChild) SpecialTabDiv.appendChild(document.createTextNode(' • '));
      SpecialTabDiv.appendChild(SpecialTabs[a]);
   }
    return SpecialTabDiv;
};

// Récupération du contenu de la page prévisualisée

window.getPageContent = function(Req, ID){
  var OldTemp = document.getElementById("TempDiv");
  if(OldTemp) OldTemp.parentNode.removeChild(OldTemp);
  var Temp = document.createElement('div');
  Temp.id = "TempDiv";
  Temp.style.display = "none";
  document.body.appendChild(Temp);
  Temp.innerHTML = Req.responseText;
  LiveRC_setFavicon();
  var bC = null;
  if(ID){
    bC  = getElementWithId(ID, '*', Temp);
  }else{
    for(var a=0,l=LiveRC_Config["PageContentIds"].length;a<l;a++){
      if(bC == null) bC = getElementWithId(LiveRC_Config["PageContentIds"][a], '*', Temp);
    }
    if(bC == null) bC = Temp.getElementsByTagName('body')[0];
  }
  return bC;
};

// Recherche de form à partir d'un bouton

window.getFormFromThisInput = function(Input){
     //if(!Input) return null;
     var Element = Input.parentNode;
     while(Element){
          if(Element.tagName && Element.tagName.toLowerCase() == 'form') return Element;
          Element = Element.parentNode;
     }
     return null
};

// Récupération de paramètres depuis une form

window.getFormParams = function(Form, searchedname){
     var Params = {};
     var Tags = ["textarea", "select", "input"];
     for(var a=0,l=Tags.length;a<l;a++){
          var Elements = Form.getElementsByTagName(Tags[a]);
          for(var b=0,m=Elements.length;b<m;b++){
               var Element = Elements[b];
               var ElName = Element.name;
               if(!ElName) continue;
               if(searchedname && ElName == searchedname) return Element;
               var ElValue = Element.value;
               var ElType = Element.type;
               if(Tags[a].toLowerCase()=='input' && (ElType == "checkbox" || ElType == "radio") && Element.checked){
                    Params[ElName] = ElValue;
               }else if(Tags[a].toLowerCase()=='input' && (ElType == "text" || ElType == "hidden") ){
                    Params[ElName] = ElValue;
               }else if(Tags[a].toLowerCase()!='input'){
                    Params[ElName] = ElValue;
               }
          }
     }
     if(searchedname) return null;
     return Params;
};

/* </source>

===== Fonctions automatiques =====

====== Blanchiment ======

<source lang="javascript"> */

// Création de la commande de blanchiment

window.buildLiveBlank = function(Page){
    if(!Page || !lrcUserCan("Blank")) return "";
    if(!lrcGetFlowStatusForAction(Page, "edit")) return "";
    var BlankBar = document.createElement('form');
    BlankBar.id = "LiveBlankForm";
    var BlankInput = document.createElement('input');
    BlankInput.id = "LiveBlankLink";
    BlankInput.type = "button";
    BlankInput.title = lrcMakeText("EMPTY")+' « '+Page+' »';
    BlankInput.onclick = function(){ getLiveBlank(Page); return false; };
    BlankInput.onselect = function(){ getLiveBlank(Page); return false; };
    BlankInput.value = lrcMakeText("EMPTY");
    var Span = document.createElement('span');
    var ResumeField = document.createElement('input');
    ResumeField.type = "text";
    ResumeField.id = "LiveBlankReason";
    ResumeField.title = lrcMakeText("AddResume");
    Span.appendChild(ResumeField);
    BlankBar.appendChild(BlankInput);
    BlankBar.appendChild(Span);
    return BlankBar;
};


window.LiveRC_BlankExtension_Init = function(){
    var BlankInput = document.getElementById("LiveBlankReason");
    if(!BlankInput) return;

    var BlankSelect = document.createElement('select');
    BlankSelect.id = "LiveBlankReason_List";
    BlankSelect.className = "LiveRC_Opacity_100";
    var OptZero = '<option selected="selected" onClick="LiveRC_BlankExtension_Update()" value=""> </option>';
    BlankSelect.innerHTML = OptZero;
    var List = Custom_lstBlank;
    if(!List || List.length==0 ) List = lstBlank;
    for(var j=0, optl=List.length; j<optl; j++) {
        var opt = document.createElement('option');
        opt.value = List[j].resume;
        opt.title = List[j].resume;
        opt.innerHTML = List[j].tooltip;
        BlankSelect.appendChild(opt);
    }
    BlankSelect.style.display = "none";
    BlankSelect.style.position = "relative" ;
    BlankSelect.style.width = BlankInput.offsetWidth + "px" ;
    BlankSelect.style.top = parseInt(BlankInput.offsetHeight) + "px";
    BlankSelect.style.marginBottom = "-" + (20 + parseInt(BlankInput.offsetHeight)) + "px" ;
    BlankSelect.style.marginLeft = "-"+BlankInput.offsetWidth+"px" ;
    BlankInput.parentNode.insertBefore(BlankSelect, BlankInput.nextSibling);
    BlankSelect.onkeyup = LiveRC_BlankExtension_KeyPress;
    BlankSelect.onchange = LiveRC_BlankExtension_Update;
    BlankInput.onmouseover = function(){ LiveRC_BlankExtension_Toggle(true); };
    BlankSelect.onmouseover = function(){ LiveRC_BlankExtension_Toggle(true); };
    BlankInput.onmouseout = function(){ LiveRC_BlankExtension_Toggle(false); };
    BlankSelect.onmouseout = function(){ LiveRC_BlankExtension_Toggle(false); };
};

window.LiveRC_BlankExtension_Toggle = function(show){
    var BlankSelect = document.getElementById("LiveBlankReason_List");
    if(!BlankSelect) return;
    if(show){
        clearTimeout(LiveRC_Config["Timeout"]["LiveBlankReason_List"]);
        BlankSelect.className = "LiveRC_Opacity_100";
        BlankSelect.style.display = "inline";
    }else{
        LiveRC_Config["Timeout"]["LiveBlankReason_List"] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr("LiveBlankReason_List")+", function(){document.getElementById("+lrcEscapeStr("LiveBlankReason_List")+").style.display = "+lrcEscapeStr("none")+";}, 5, 50);", 200);
    }
};

window.LiveRC_BlankExtension_KeyPress = function(e){
    if (!e) var e = window.event;
    if (e.keyCode != 13) return;
    LiveRC_BlankExtension_Update();

};

window.LiveRC_BlankExtension_Update = function(){
    var BlankInput = document.getElementById("LiveBlankReason");
    var BlankSelect = document.getElementById("LiveBlankReason_List");
    if(!BlankInput || !BlankSelect) return;
    var InputValue = BlankInput.value;
    if(InputValue!="") BlankInput.value += " ; ";
    var Options = BlankSelect.getElementsByTagName('option');
    for(var a=0,l=Options.length;a<l;a++){
        if(!Options[a].selected) continue;
        BlankInput.value = Options[a].value;
        BlankInput.focus();
        return;
    }
};

// Récupération des informations et requête de page

window.getLiveBlank = function(page){
  lrcDisplayDebug("Automatic function (Blank)");
    var BlankSelect = document.getElementById("LiveBlankReason_List");
    var BlankInput = document.getElementById("LiveBlankReason");
    var BlankButton = document.getElementById("LiveBlankLink");
    if(!BlankSelect || !BlankInput || !BlankButton) return;
    BlankSelect.disabled = "disabled";
    BlankInput.disabled = "disabled";
    BlankButton.disabled = "disabled";
    var message = BlankInput.value;
    wpajax.http({ url: lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:page}),
                  onSuccess: postBlankPage,
                  page: page,
                  message: message
                });
    return false;
};

// Traitement de la requête de blanchiment

window.postBlankPage = function(xmlreq, data){
  var page=data.page;
  var message=data.message;
  var EditParam = {};
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && !lrcUserHasGroup(Level)) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  EditParam["text"] = "";
  EditParam["summary"] = lrcMakeText("RESUMESTART")+lrcMakeText("EMPTY_RESUME")+' ; ' + message;
  EditParam["title"] = page;
  EditParam["watchlist"] = "preferences";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
  EditParam["nocreate"] = "1";
  EditParam["notminor"] = "1";
  EditParam["token"] = Page.getAttribute("edittoken");
  if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL('action=edit'),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postBlankPageDone,
                params:EditParam
  });
};

window.postBlankPageDone = function(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+ " : " + lrcMakeText("EMPTY_DONE")+"</b>";
  LiveRC_alert(text);
};

/* </source>

====== Bandeaux ======

<source lang="javascript"> */

// Création de la commande d'ajout de bandeau

window.buildLiveTag = function(Page){
    if(!Page || !lrcUserCan("Tag")) return "";
    if(!lrcGetFlowStatusForAction(Page, "edit")) return "";
    var TagBar = document.createElement('form');
    TagBar.id = "LiveTagForm";
    var TagInput = document.createElement('input');
    TagInput.id = "LiveTagLink";
    TagInput.type = "button";
    TagInput.title = lrcMakeText("TAG");
    TagInput.onclick = function(){ getLiveTag(Page); return false; };
    TagInput.onselect = function(){ getLiveTag(Page); return false; };
    TagInput.value = lrcMakeText("TAG");
    var TagSelect = document.createElement('select');
    TagSelect.id = "LiveTagReason";
    var ListBando = Custom_lstBando;
    if(!ListBando || ListBando.length ==0) ListBando = lstBando;
    for(var j=0,optl=ListBando.length;j<optl;j++) {
        var optTag = document.createElement('option');
        optTag.value = ListBando[j].template;
        optTag.className = 'Standard';
        optTag.title = '{{' + ListBando[j].template + '}}';
        optTag.innerHTML = ListBando[j].string;
        TagSelect.appendChild(optTag);
    }
    TagBar.appendChild(TagInput);
    TagBar.appendChild(TagSelect);
    return TagBar;
};

// Récupération des information et requête de page

window.getLiveTag = function(page){
  lrcDisplayDebug("Automatic function (Tag)");
  var TagSelect = document.getElementById("LiveTagReason");
  if(!TagSelect) return;
  var Options = TagSelect.getElementsByTagName('option');
  for(var a=0,l=Options.length;a<l;a++){
    var Opt = Options[a];
    if(!Opt.selected) continue;
    var OptClass = Opt.className;
    if(!OptClass) continue;
    if(typeof(getLiveTagFunctions[OptClass]) === "function") getLiveTagFunctions[OptClass](page, Opt);
  }
};

window.getLiveTagFunctions = {};

getLiveTagFunctions["Standard"] = function(page, option){
    var message = option.value;
    lrcDisableLink("LiveTagReason");
    lrcDisableLink("LiveTagLink");
    wpajax.http({ url: lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:page}),
                onSuccess: postTagPage,
                page: page,
                message: message});
  return false;
};

// Traitement ajout de bandeau

window.postTagPage = function(xmlreq, data){
  var page = data.page;
  var message = data.message;
  var EditParam = {};
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && !lrcUserHasGroup(Level)) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var ThisDate = "";
  var ListBando = Custom_lstBando;
  if(!ListBando || ListBando.length ==0) ListBando = lstBando;
  for(var Tag in ListBando){
    if(ListBando[Tag].template == message && ListBando[Tag].withDate){
      var Months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
      var Now = new Date();
      var Year = Now.getFullYear();
      var month = lrcGetMediawikiMessage(Months[(Now.getMonth())]).toLowerCase();
      var Month = month.substring(0,1).toUpperCase() + month.substring(1, month.length);
      var day = Now.getDate();
      var DateParam = ListBando[Tag].withDate;
      DateParam = DateParam.split("$day").join(day);
      DateParam = DateParam.split("$month").join(month);
      DateParam = DateParam.split("$Month").join(Month);
      DateParam = DateParam.split("$year").join(Year);
      ThisDate = "|date="+DateParam;
    }
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  EditParam["prependtext"] = "{{"+message+ThisDate+"}}\n";
  EditParam["summary"] = lrcMakeText("RESUMESTART") + lrcMakeText("TAG_RESUME") + ' ' + message;
  EditParam["title"] = page;
  EditParam["watchlist"] = "preferences";
  EditParam["notminor"] = "1";
  EditParam["nocreate"] = "1";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
  EditParam["token"] = Page.getAttribute("edittoken");
  if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];

  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL('action=edit'),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postTagPageDone,
                params:EditParam
  });
};

window.postTagPageDone = function(Req, data){
  var params = data.params;
  var text = "<b>" +params["title"]+ " : " + lrcMakeText("TAG_DONE") + "</b> <small>("+params["prependtext"]+")</small>";
  LiveRC_alert(text);
};

/* </source>

====== Révocation ======

<source lang="javascript"> */

// Création de la commande de révocation

window.buildLiveUndo = function(Page, oldid, User1, User2){
    if(!Page || !oldid || !User1 || !User2 || !lrcUserCan("Revert")) return "";
    var specialNotice = false;
    var rollbackButton = false;
    if (User1 == User2) {
        specialNotice = document.createElement('small');
        specialNotice.innerHTML = "<b style='color:red'>[" + lrcMakeText("SAME_EDITOR") + "]</b>";
        rollbackButton = document.createElement('input');
        rollbackButton.id = "LiveRollbackLink";
        rollbackButton.type = "button";
        rollbackButton.title = lrcMakeText("REVERT")+' « '+User2+' » ('+Page+')';
        rollbackButton.onclick = function(){ lrcUndo(Page,User2); return false; };
        rollbackButton.onselect = function(){ lrcUndo(Page,User2); return false; };
        rollbackButton.value = lrcMakeText("REVERT");
    }
    if (Page == lrcMakeParam("SanboxPage")) {
        specialNotice = document.createElement('small');
        specialNotice.innerHTML = "<b style='color:red'>[" + lrcMakeText("SANDBOX") + "]</b>";
    }
    var UndoBar = document.createElement('form');
    UndoBar.id = "LiveUndoForm";
    UndoBar.onsubmit =  function(){ return false; };
    if(specialNotice) UndoBar.appendChild(specialNotice);
    if(rollbackButton) UndoBar.appendChild(rollbackButton);
    var undoButton = document.createElement('input');
    undoButton.id = "LiveUndoLink";
    undoButton.type = "button";
    undoButton.title = lrcMakeText("UNDORC")+' « '+User2+' » ('+Page+')';
    undoButton.onclick = function(){ lrcUndo(Page, User2, oldid); return false; };
    undoButton.onselect = function(){ lrcUndo(Page, User2, oldid); return false; };
    undoButton.value = lrcMakeText("UNDORC");
    UndoBar.appendChild(undoButton);
    var Span = document.createElement('span');
    var ResumeField = document.createElement('input');
    ResumeField.type = "text";
    ResumeField.id = "LiveRevertMessage";
    ResumeField.title = lrcMakeText("AddResume");
    Span.appendChild(ResumeField);
    UndoBar.appendChild(Span);
    return UndoBar;
};

// Mise en place des suggestions de résumé de révocation

window.LiveRC_RevertMessagesExtension_Init = function(){
    var RevertInput = document.getElementById("LiveRevertMessage");
    if(!RevertInput) return;
    var Select = document.createElement('select');
    Select.id = "LiveRevertMessage_List";
    Select.className = "LiveRC_Opacity_100";
    var OptZero = '<option selected="selected" onClick="LiveRC_RevertMessagesExtension_Update()" value=""> </option>';
    Select.innerHTML = OptZero;
    var ReverMessages = Custom_lrcRevertMessages;
    if(!ReverMessages || ReverMessages.length==0) ReverMessages = lrcRevertMessages;
    for(var a=0,l=ReverMessages.length;a<l;a++){
      var Opt = document.createElement('option');
      Opt.value = ReverMessages[a].resume;
      Opt.title = ReverMessages[a].resume;
      Opt.onclick = LiveRC_RevertMessagesExtension_Update;
      Opt.name = a;
      Opt.innerHTML = ReverMessages[a].text;
      Select.appendChild(Opt);
    }
    Select.style.display = "none";
    Select.style.position = "relative" ;
    Select.style.width = RevertInput.offsetWidth + "px" ;
    Select.style.top = parseInt(RevertInput.offsetHeight) + "px";
    Select.style.marginBottom = "-" + (20 + parseInt(RevertInput.offsetHeight)) + "px" ;
    Select.style.marginLeft = "-"+RevertInput.offsetWidth+"px" ;
    RevertInput.parentNode.insertBefore(Select, RevertInput.nextSibling);
    Select.onkeyup = LiveRC_RevertMessagesExtension_KeyPress;
    Select.onchange = LiveRC_RevertMessagesExtension_Update;
    RevertInput.onmouseover = function(){ LiveRC_RevertMessagesExtension_Toggle(true); };
    Select.onmouseover = function(){ LiveRC_RevertMessagesExtension_Toggle(true); };
    RevertInput.onmouseout = function(){ LiveRC_RevertMessagesExtension_Toggle(false); };
    Select.onmouseout = function(e){
      if (e.relatedTarget == null){
        return;
      }
      LiveRC_RevertMessagesExtension_Toggle(false);
    };
};

// Affichage / Masquage des suggestions de résumé de révocation

window.LiveRC_RevertMessagesExtension_Toggle = function(show){
    var RevertSelect = document.getElementById("LiveRevertMessage_List");
    if(!RevertSelect) return;
    if(show){
        clearTimeout(LiveRC_Config["Timeout"]["LiveRevertMessage_List"]);
        RevertSelect.className = "LiveRC_Opacity_100";
        RevertSelect.style.display = "inline";
    }else{
        LiveRC_Config["Timeout"]["LiveRevertMessage_List"] = setTimeout("LiveRC_alert_setOpacity("+lrcEscapeStr("LiveRevertMessage_List")+", function(){document.getElementById("+lrcEscapeStr("LiveRevertMessage_List")+").style.display = "+lrcEscapeStr("none")+";}, 5, 50);", 200);
    }
};

// Sélection d'une suggestion de résumé de révocation (clavier + souris)

window.LiveRC_RevertMessagesExtension_KeyPress = function(e){
    if (!e) var e = window.event;
    if (e.keyCode != 13) return;
    LiveRC_RevertMessagesExtension_Update();
};

window.LiveRC_RevertMessagesExtension_Update = function(){
    var RevertInput = document.getElementById("LiveRevertMessage");
    var RevertSelect = document.getElementById("LiveRevertMessage_List");
    if(!RevertInput || !RevertSelect) return;
    var InputValue = RevertInput.value;
    if(InputValue!="") RevertInput.value += " ; ";
    var Options = RevertSelect.getElementsByTagName('option');
    for(var a=0,l=Options.length;a<l;a++){
        if(!Options[a].selected) continue;
        RevertInput.value = Options[a].value;
        RevertInput.focus();
        return;
    }
};

// Récupération des informations et requête de page

window.lrcUndo = function(title, user, oldid) {
  lrcDisplayDebug("Automatic function (Revert)");
  var RollbackButton = document.getElementById('LiveRollbackLink');
  var UndoButton = document.getElementById('LiveUndoLink');
  var UndoMessage = document.getElementById('LiveRevertMessage');
  var UndoMessageList = document.getElementById('LiveRevertMessage_List');
  if(!UndoMessage) return;
  if(RollbackButton) RollbackButton.disabled = "disabled";
  if(UndoButton) UndoButton.disabled = "disabled";
  UndoMessage.disabled = "disabled";
  if(UndoMessageList) UndoMessageList.disabled = "disabled";
  var summary = UndoMessage.value;
  var requestHistory = lrcGetAPIURL({format:'xml',action:'query',prop:'revisions|info',rvlimit:LiveRC_Config["RevertLimit"],rvprop:'user|ids',intoken:'edit',inprop:'protection',titles:title});
  wpajax.http({url: requestHistory, onSuccess: lrcUndoCB, title: title,
               user: user, oldid: oldid, rvlimit:LiveRC_Config["RevertLimit"], summary: summary});
  return false;
};

// Traitement de la requête de révocation

window.lrcUndoCB = function(xmlreq, data) {
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && !lrcUserHasGroup(Level)) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(data.title)+"</b>");
    return;
  }
  var ErrorMSG = "<b>"+data.title+" : "+lrcMakeText("REVERT_ABORTED")+"</b>";
  var page = ObjetXML.getElementsByTagName('page')[0];
  var lst = page.getElementsByTagName('rev');
  var oldUser = LiveRC_ManageIPv6( lst[0].getAttribute('user') );
  var user = LiveRC_ManageIPv6(data.user);
  if(user != oldUser){
    LiveRC_alert(ErrorMSG);
    return;
  }
  var curid = lst[0].getAttribute('revid');
  var i;
  for (i=0; i < lst.length && LiveRC_ManageIPv6(lst[i].getAttribute('user')) == user
          && (data.oldid ? (lst[i].getAttribute('revid') != data.oldid) : true); i++) {}
  if(i == 0 || i == lst.length){
    LiveRC_alert(ErrorMSG+" (i = "+i+")");
    return;
  }
  var oldUser = LiveRC_ManageIPv6( lst[i].getAttribute('user') );
  var oldid = lst[i].getAttribute('revid');
  var summary = lrcMakeText("RESUMESTART")+lrcGetMediawikiMessage("revertpage");
  summary = summary.split("$1").join(oldUser);
  summary = summary.split("$2").join(data.user);
  if(data.summary) summary += ' ; ' + data.summary;
  var EditParam = {};
  EditParam["summary"] = summary;
  EditParam["title"] = data.title;
  EditParam["watchlist"] = (lrcMakeParam("BypassWatchdefault") ? 'nochange' : 'preferences');
  EditParam["notminor"] = "1";
  EditParam["undo"] = curid;
  EditParam["undoafter"] = oldid;
  EditParam["token"] = page.getAttribute('edittoken');
  if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({url: lrcGetAPIURL('action=edit'),
               method: "POST", headers: headers, data: Params,
               onSuccess: lrcUndoCBDone,
               params:EditParam
  });
};

window.lrcUndoCBDone = function(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+" : "+lrcMakeText("REVERT_DONE")+"</b> <small>("+LiveRC_StripWikitext(params["summary"])+")</small>";
  LiveRC_alert(text);
};

/* </source>

====== Remerciement ======

<source lang="javascript"> */

// Création de la commande de remerciement utilisateur

window.buildLiveThank = function(User, Page, Rev){
  var withEcho = (lrcIsExtensionInstalled("Echo"));
  if(!withEcho) return '';
  if(!User) return '';
  if(UserIsIP(User)) return '';
  if(!Rev) return '';
  if(!lrcUserCan("Thank")) return '';

  var ThankBar = document.createElement('form');
  ThankBar.id = "LiveThankForm";
  ThankBar.onsubmit =  function(){ getLiveThank(User, Page, Rev); return false; };
  var ThankButton = document.createElement('input');
  ThankButton.id = "LiveThankLink";
  ThankButton.type = "button";
  ThankButton.title = lrcMakeText("USERTHANK")+' « '+User+' », oldid = '+Rev;
  ThankButton.onclick = function(){ getLiveThank(User, Page, Rev); return false; };
  ThankButton.onselect = function(){ getLiveThank(User, Page, Rev); return false; };
  ThankButton.value = lrcMakeText("USERTHANK");
  ThankBar.appendChild(ThankButton);
  return ThankBar;
};

window.getLiveThank = function(user, page, rev){
  lrcDisplayDebug("Automatic function (Thank)");
  lrcDisableLink('LiveThankLink');
  wpajax.http({ url: lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',titles:lrcGetNamespaceName(3)+":"+user}),
                onSuccess: postLiveThank,
                user: user, page:page, rev:rev });
};

window.postLiveThank = function(xmlreq, data) {
  var user = data.user;
  var page = data.page;
  var rev = data.rev;
  var ObjetXML = xmlreq.responseXML;
  var Page = ObjetXML.getElementsByTagName("page")[0];
  var EditParam = {};
  EditParam["rev"] = rev;
  EditParam["source"] = lrcMakeText("RESUMESTART") + lrcMakeText("USERTHANK_RESUME") + ' ' + (page ? ' ' + lrcMakeText("ON_ARTICLE") + ' [['+page+']]' : '' ) + ' !';
  EditParam["token"] = Page.getAttribute("edittoken");
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  EditParam["user"] = user;
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL('action=thank'),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postLiveThankDone,
                params:EditParam
  });
};

window.postLiveThankDone = function(Req, data){
  var params = data.params;
  var text = "<b>"+params["user"]+ " : " + lrcMakeText("USERTHANK_DONE") + "</b> <small>(revid = "+params["rev"]+")</small>";
  LiveRC_alert(text);
};

/* </source>

====== Avertissement / Message ======

<source lang="javascript"> */

// Création de la commande de message utilisateur

window.buildLiveAverto = function(Page, User, WithPage){
    if((!Page && WithPage) || !User || !lrcUserCan("Message")) return "";
    var AvertoBar = document.createElement('form');
    AvertoBar.id = "LiveAvertoForm";
    AvertoBar.onsubmit =  function(){ getLiveAverto(User, Page); return false; };
    var AvertoButton = document.createElement('input');
    AvertoButton.id = "LiveAvertoLink";
    AvertoButton.type = "button";
    AvertoButton.title = lrcMakeText("USERMSG")+' « '+User+' »';
    AvertoButton.onclick = function(){ getLiveAverto(User, Page); return false; };
    AvertoButton.onselect = function(){ getLiveAverto(User, Page); return false; };
    AvertoButton.value = lrcMakeText("USERMSG");
    AvertoBar.appendChild(AvertoButton);
    var AvertoSelect = document.createElement('select');
    AvertoSelect.id = "averto";
    var ListAverto = Custom_lstAverto;
    if(!ListAverto || ListAverto.length==0) ListAverto = lstAverto;
    for(var j=0,optl=ListAverto.length; j<optl; j++) {
        var Value = ListAverto[j].template;
        if(!Value) continue;
        if(ListAverto[j].addName) Value += "|user=" + mw.config.get('wgUserName')
        if(ListAverto[j].hasPage && WithPage) Value += '|1='+Page.replace(/\"/g, "");
        if(ListAverto[j].addSectionTitle) Value = Value + '|sectiontitle=1';
        var optAvert = document.createElement('option');
        optAvert.value = Value;
        optAvert.title = '{{'+Value+'}}';
        optAvert.innerHTML = ListAverto[j].string;
        AvertoSelect.appendChild(optAvert);
    }
    AvertoBar.appendChild(AvertoSelect);
    return AvertoBar;
};

// Récupération des informations et requête de page

window.getLiveAverto = function(user, page, automessageconfirmed) {
  if(user == mw.config.get('wgUserName') && !automessageconfirmed){
    var text = lrcMakeText("USERMSG_AutoMessageConfirm");
    LiveRC_confirm(text, function(){ getLiveAverto(user, page, true);});
    return;
  }
  lrcDisplayDebug("Automatic function (Message)");
  var message = document.getElementById('averto').value;
  if(!message) return;
  var sectiontitle = (message.indexOf("|sectiontitle=")!= -1);
  message = message.replace(/\|sectiontitle=1/g, "");
  lrcDisableLink('LiveAvertoLink');
  lrcDisableLink('averto');
  var targetPage = lrcGetNamespaceName(3)+":"+user;
  wpajax.http({ url: lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:targetPage}),
                onSuccess: postLiveAverto,
                user: user,
                page:page,
                message: message,
                sectiontitle: sectiontitle,
                targetPage: targetPage
  });
  return false;
};

// Traitement de la requête de message utilisateur

window.postLiveAverto = function(xmlreq, data) {
  var user = data.user;
  var page = data.page;
  var message = data.message;
  var sectiontitle = data.sectiontitle;
  var typeofmessage = message.replace(/\|.*/g, "");
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && !lrcUserHasGroup(Level)) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var responsePageNode = ObjetXML.getElementsByTagName("page")[0];
  var Resume = lrcMakeText("USERMSG_RESUME")+' '+typeofmessage+(page ? ' ' + lrcMakeText("ON_ARTICLE") + ' [['+page+']]' : '' );
  var Subst = (lrcMakeParam("SubstWarnings") ? 'subst:' : '');
  var fullMessage;
  var EditParam = {"token": responsePageNode.getAttribute("edittoken")};
  if(responsePageNode.getAttribute("contentmodel") === "flow-board"){
    fullMessage = '{{' + Subst + message + '}}';
    EditParam["action"] = "flow";
    EditParam["submodule"] = "new-topic";
    EditParam["page"] = data.targetPage;
    EditParam["nttopic"] = lrcMakeText("USERMSG_RESUME")+' '+typeofmessage+(page ? ' ' + lrcMakeText("ON_ARTICLE") + ' [['+page+']]' : '' );
    EditParam["ntcontent"] = fullMessage;
  } else {
    fullMessage = (sectiontitle ? '\n\n== ' + Resume + ' ==': '') + '\n\n{{' + Subst + message + '}} ~~~~\n';
    EditParam["action"] = "edit";
    EditParam["appendtext"] = fullMessage;
    EditParam["summary"] = lrcMakeText("RESUMESTART") + Resume + ' !';
    EditParam["notminor"] = "1";
    EditParam["title"] = data.targetPage;
    EditParam["watchlist"] = "preferences";
    if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
    if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];
  }
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL(''),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postLiveAvertoDone,
                user: user,
                fullMessage: fullMessage
  });
};

window.postLiveAvertoDone = function(Req, data){
  var text = "<b>"+data.user+ " : " + lrcMakeText("USERMSG_DONE") + "</b> <small>("+data.fullMessage+")</small>";
  LiveRC_alert(text);
};

/* </source>

====== Signalement / demande administrative ======

<source lang="javascript"> */

window.lrcMakeReportArray = function(){
  var ReportArray = Custom_lstReport;
  if(lrcGetObjectLength(ReportArray)===0) ReportArray = lstReport;
  return ReportArray;
};

// Récupération des motifs standards de demande administrative

window.lstReportGetNeededMessages = function(){
  var ReportArray = lrcMakeReportArray();
  for(var Ask in ReportArray){
    var ThisAsk = ReportArray[Ask];
    if(!ThisAsk.reasonsdropdownname) return;
    LiveRC_addNeededMessages(ThisAsk.reasonsdropdownname);
  }
};

window.buildReportCreateReasons = function(){
  var ReportArray = lrcMakeReportArray();
  for(var Ask in ReportArray){
    var ThisAsk = ReportArray[Ask];
    var Type = ThisAsk.userright;
    var DropType = ThisAsk.userright;
    ThisAsk.reasons = [];
    if(!ThisAsk.reasonsdropdownname) continue;
    var Drop = lrcGetMediawikiMessage(ThisAsk.reasonsdropdownname);
    if(!Drop) continue;
    var Drop = Drop.split("**");
    for(var a=0,l=Drop.length;a<l;a++){
      var ThisReason = Drop[a];
      if(ThisReason.indexOf("*")!=-1) continue;
      ThisAsk.reasons.push(ThisReason);
    }
  }
  LiveRC_LaunchProcessNextStep();
};

// Création du lien de demande administrative

window.buildReport = function(Page, User){
  if(!lrcUserCan("Report")) return '';
  Page = (Page ? Page : '');
  User = (User ? User : '');
  var ReportBar = document.createElement('form');
  ReportBar.id = "ReportForm";
  ReportBar.onsubmit = function(){ return false; };
  var ReportButton = document.createElement('input');
  ReportButton.id = "LiveReport";
  ReportButton.type = "button";
  ReportButton.title = lrcMakeText("REPORTING_TIP");
  ReportButton.onclick = function(){ liveReport(User, Page); return false; };
  ReportButton.onselect = function(){ liveReport(User, Page); return false; };
  ReportButton.value = lrcMakeText("REPORTING_SHORT");
  ReportBar.appendChild(ReportButton);
  var ReportSelect = document.createElement('select');
  ReportSelect.id = "Report";
  ReportSelect.innerHTML = '<option id="null" value="" title=""></option>';
  var ReportArray = lrcMakeReportArray();
  var optCount = 0;
  for (var j=0, optl = ReportArray.length; j<optl; j++) {
    var ThisReportElement = ReportArray[j];
    if((ThisReportElement.parampage && Page) || (ThisReportElement.paramuser && User)){
      if(lrcUserHasRight(ThisReportElement.userright)) continue;
      var NewValue = ThisReportElement.template;
      if(ThisReportElement.parampage && Page) NewValue += '|page='+Page;
      if(ThisReportElement.paramuser && User) NewValue += '|user='+User;
      var NewOption = document.createElement('option');
      NewOption.id = ThisReportElement.userright
      NewOption.value = NewValue;
      NewOption.title = '{{'+NewValue+'}} ⇨ '+buildReportPageMagicWords(ThisReportElement.page);
      NewOption.innerHTML = lrcMakeText(ThisReportElement.text);
      ReportSelect.appendChild(NewOption);
      optCount++
    }
  }
  ReportSelect.onchange= function(){ buildReportGetReason(Page); };
  ReportBar.appendChild(ReportSelect);
  if(optCount===0) return '';
  return ReportBar;
};

// Création du menu de demande administrative

window.buildReportGetReason = function(Page){
  var ReportArray = lrcMakeReportArray();
  var OldDropDown = document.getElementById("ReportReasons");
  if(OldDropDown) OldDropDown.parentNode.removeChild(OldDropDown);
  var Select = document.getElementById("Report");
  if(!Select) return;
  var Options = Select.getElementsByTagName('option');
  for(var a=0,l=Options.length;a<l;a++){
    if(!Options[a].selected) continue;
    var ID = Options[a].id;
    if(!ID || ID==="null") continue;
    for(var Ask in ReportArray){
      var ReportArrayElement = ReportArray[Ask];
      var Type = ReportArrayElement.userright;
      if(Type!=ID) continue;
      var Reasons = ReportArrayElement.reasons;
      if(!Reasons || Reasons.length===0){
        var NewInput = document.createElement('input');
        NewInput.type = "text";
        NewInput.id = "ReportReasons";
        NewInput.title = lrcMakeText("AddResume");
        Select.parentNode.insertBefore(NewInput, Select.nextSibling);
      }else{
        var NewSelect = document.createElement('select');
        NewSelect.id = "ReportReasons";
        NewSelect.style.fontSize = "80%";
        var Opt = document.createElement('option');
        Opt.value = "";
        Opt.innerHTML = "";
        NewSelect.appendChild(Opt);
        for(var b=0,m=Reasons.length;b<m;b++){
          var Reason = Reasons[b];
          var Opt = document.createElement('option');
          Opt.value = LiveRC_ManagePageMagicWords(Reason, Page);
          Opt.title = LiveRC_ManagePageMagicWords(Reason, Page);
          Opt.innerHTML = LiveRC_StripWikitext(Reason);
          NewSelect.appendChild(Opt);
        }
        Select.parentNode.insertBefore(NewSelect, Select.nextSibling);
      }
    }
  }
};

window.buildReportPageMagicWords = function(Page){
  var MonthNames = ["january","february","march","april","june","july","august","september","october","november","december"];
  var today = new Date();
  var day = today.getDate();
  var month = lrcGetMediawikiMessage(MonthNames[(today.getMonth())]).toLowerCase();
  var Month = month.substring(0,1).toUpperCase() + month.substring(1, month.length);
  var year = today.getFullYear();
  Page = Page.split("$day").join(day);
  Page = Page.split("$month").join(month);
  Page = Page.split("$Month").join(Month);
  Page = Page.split("$year").join(year);
  return Page;
};

// Récupération des informations et requête de page

window.liveReport = function(user, page) {
  lrcDisplayDebug("Automatic function (Reporting)");
  var GotOption = false;
  var GotOptionParams = false
  var GotReason = "";
  var summary = "";
  var ReportArray = lrcMakeReportArray();
  var Select = document.getElementById('Report');
  var Options = Select.getElementsByTagName('option');
  for(var a=0,l=Options.length;a<l;a++){
    var Option = Options[a];
    if(Option.selected && !GotOption){
      GotOption = Option;
      var ID = GotOption.id;
      for(var Ask in ReportArray){
        var Type = ReportArray[Ask].userright;
        if(Type!=ID) continue;
        GotOptionParams = ReportArray[Ask];
        summary = GotOptionParams.resume;
        summary = summary.split("$1").join(page).split("$2").join(user);
      }
    }
  }
  var message = GotOption.value;
  var ReasonsSelect = document.getElementById('ReportReasons');
  if(ReasonsSelect){
    if(ReasonsSelect.tagName && ReasonsSelect.tagName.toLowerCase() == "select"){
      var ReasonsOptions = ReasonsSelect.getElementsByTagName('option');
      for(var a=0,l=ReasonsOptions.length;a<l;a++){
        var ReasonsOption = ReasonsOptions[a];
        if(ReasonsOption.selected){
          GotReason = ReasonsOption.value;
        }
      }
    }else if(ReasonsSelect.tagName && ReasonsSelect.tagName.toLowerCase() == "input"){
      if(ReasonsSelect.type = "text"){
          GotReason = ReasonsSelect.value;
      }
    }
  }
  if(!GotOption || !GotOptionParams) return;
  lrcDisableLink('LiveReport');
  lrcDisableLink('Report');
  lrcDisableLink('ReportReasons');
  var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:buildReportPageMagicWords(GotOptionParams.page)});
  wpajax.http({ url       : URL,
                onSuccess : postReport,
                message   : message,
                summary   : summary,
                page      : GotOptionParams.page,
                reason    : GotReason
  });
  return false;
};

// Traitement de la requête de demande administrative

window.postReport = function(xmlreq, data) {
  var page = data.page;
  var message = data.message;
  var summary = data.summary;
  var reason = data.reason;
  var ObjetXML = xmlreq.responseXML;
  var Isprotected = false;
  var PR = ObjetXML.getElementsByTagName("pr");
  for(var a=0,l=PR.length;a<l;a++){
    var Type = PR[a].getAttribute("type");
    var Level = PR[a].getAttribute("level");
    if(Type=="edit" && !lrcUserHasGroup(Level)) Isprotected = true;
  }
  if(Isprotected){
    LiveRC_alert("<b>"+lrcMakeText("PROTECTEDPAGE").split("$1").join(page)+"</b>");
    return;
  }
  var Page = ObjetXML.getElementsByTagName("page")[0];
  var EditParam = {};
  EditParam["section"] = "new";
  EditParam["sectiontitle"] = summary;
  EditParam["text"] = '\n\n{{subst:' + message + '|raison='+reason+'}}\n';
  EditParam["title"] = page;
  EditParam["notminor"] = "1";
  EditParam["watchlist"] = "preferences";
  if(lrcMakeParam("BypassWatchdefault")) EditParam["watchlist"] = "nochange";
  EditParam["token"] = Page.getAttribute("edittoken");
  if(LiveRC_Config["LiveRCTag"] && lrcUserHasRight("applychangetags")) EditParam["tags"] = LiveRC_Config["LiveRCTag"];
  var Params = [];
  for(var Param in EditParam){
    Params.push(Param+"="+encodeURIComponent(EditParam[Param]));
  }
  Params = Params.join("&");
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  wpajax.http({ url: lrcGetAPIURL('action=edit'),
                method: "POST", headers: headers,
                data: Params,
                onSuccess: postReportDone,
                params:EditParam
  });
};

window.postReportDone = function(Req, data){
  var params = data.params;
  var text = "<b>"+params["title"]+ " : " + lrcMakeText("REPORTING_DONE") + "</b> <small>("+params["text"]+")</small>";
  LiveRC_alert(text);
};

/* </source>

====== Relecture (review) ======

<source lang="javascript"> */

// Modification de la forme pour relire un diff

window.modifyReviewform = function(PreviewBarArgs){
  var PreviewWindow = document.getElementById('livePreview');
  if(!PreviewWindow) return;
  var TheForm = false;
  var Forms = PreviewWindow.getElementsByTagName('form');
  for(var a=0,l=Forms.length;a<l;a++){
    var Form = Forms[a];
    if(Form.id && Form.id.indexOf("-reviewform")!=-1) TheForm = Form;
  }
  if(!TheForm) return;
  var Inputs = TheForm.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    var Input = Inputs[a];
    if(Input.type != "submit") continue;
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_" + Input.id;
    NewInput.name = Input.name;
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processReview(this, PreviewBarArgs)}
    NewInput.onselect = function(){ processReview(this, PreviewBarArgs)}
    Input.parentNode.insertBefore(NewInput, Input.nextSibling);
    Input.style.display = "none";
  }
};

window.processReview = function(Input, PreviewBarArgs){
    LiveRC_Config["NextPreviewIndex"]++;
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var Type = Input.name;
    Params[Type] = "1";
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])==="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.action;
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneReview,
                  params:Params,
                  PreviewBarArgs:PreviewBarArgs,
                  PreviewIndex:LiveRC_Config["NextPreviewIndex"]
    });
};

window.doneReview = function(Req, data){
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(Req);
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = bC.innerHTML;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  var Args = data.PreviewBarArgs;
  var IsRollback = data.params["wpReject"];
  var TheForm = PreviewWindow.getElementsByTagName('form')[0];
  if(IsRollback && TheForm){
      var Inputs = TheForm.getElementsByTagName('input');
      for(var a=0,l=Inputs.length;a<l;a++){
      var Input = Inputs[a];
      if(Input.type != "submit") continue;
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.id = "Live_" + Input.id;
      NewInput.name = Input.name;
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processReviewRollback(this, Args)}
      NewInput.onselect = function(){ processReviewRollback(this, Args)}
      Input.parentNode.insertBefore(NewInput, Input.nextSibling);
      Input.style.display = "none";
    }
  }else{
    modifyReviewform(Args);
    buildPreviewBar(Args);
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreview"+Args["Mode"]);
  }
};

window.processReviewRollback = function(Input, PreviewBarArgs){
    LiveRC_Config["NextPreviewIndex"]++;
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var Type = Input.name;
    Params[Type] = "1";
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])==="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.getAttribute("action");
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneReview,
                  params:Params,
                  PreviewBarArgs:PreviewBarArgs,
                  PreviewIndex:LiveRC_Config["NextPreviewIndex"]
    });
};

/* </source>

====== Relecture (patrol) ======

<source lang="javascript"> */

// Modification et copie du lien "Marquer cette modification comme relue"

window.lrcReplacePatrolLink = function(revid) {
  var Node = document.getElementById("livePreview");
  if(!Node) return false;
  var x = lrcGetElementsByClass('patrollink',Node,null)[0];
  if (x == null) return false;
  var lrcPatrolLnk = x.getElementsByTagName('a')[0];
  lrcPatrolLnk.onclick = function(){ lrcPatrolEdit(this, revid); return false;};
  lrcPatrolLnk.style.color = "darkgreen";
  var PatrolLink = document.createElement('a');
  PatrolLink.href = lrcPatrolLnk.href;
  PatrolLink.onclick = function(){ lrcPatrolEdit(this, revid); return false; } ;
  PatrolLink.innerHTML = '<small>'+lrcPatrolLnk.innerHTML+'</small>';
  return PatrolLink;
};

// Relecture (Patrol)

window.lrcPatrolEdit = function(lrcPatrolLnk, revid) {
  lrcDisplayDebug("Automatic function (Patrol)");
  lrcPatrolEditStep1(lrcPatrolLnk, revid);
  
  lrcPatrolLnk.style.color = "silver";
  lrcPatrolLnk.style.cursor = "default";
  lrcPatrolLnk.style.textDecoration = "none";
};

// Get patrol token
window.lrcPatrolEditStep1 = function(lrcPatrolLnk, revid) {
	var url = lrcGetAPIURL({format:"xml",action:"query",meta:"tokens",type:"patrol"});
	wpajax.http({url: url, onSuccess: lrcPatrolEditStep2, revid: revid, lrcPatrolLnk: lrcPatrolLnk});
};

// Post patrol action
window.lrcPatrolEditStep2 = function(xmlreq, data) {
	var tokens = xmlreq.responseXML.getElementsByTagName("tokens")[0];
	var url = lrcGetAPIURL({format:"xml",action:'patrol'});
	var postdata = "revid=" + encodeURIComponent(data.revid)
              + "&token=" + encodeURIComponent(tokens.getAttribute("patroltoken"));
	var headers = {"Content-Type": "application/x-www-form-urlencoded"};
	wpajax.http({url: url, method: "POST", headers: headers, data: postdata, onSuccess:lrcAfterPatrolEdit, link:data.lrcPatrolLnk});
};

window.lrcAfterPatrolEdit = function(xmlreq, data) {
  try{
    var lrcPatrolLnk = data.link;
    lrcPatrolLnk.innerHTML = lrcGetMediawikiMessage("markedaspatrolled", true);
    lrcPatrolLnk.style.color = "darkgreen";
    lrcPatrolLnk.href = "javascript:;";
    lrcPatrolLnk.onclick = "";
  }catch(e){ }
};

/* </source>

==== LiveDiff ====

<source lang="javascript"> */

// Requête et affichage Diff

window.liveDiff = function(page, id, oldid) {
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveDiff", [lrcEscapeStr(page), lrcEscapeStr(id), lrcEscapeStr(oldid)], lrcGetUglyPageURL(page,'&diff='+id+'&oldid='+oldid+'&unhide=1'), page + " : diff="+id+' oldid='+oldid);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Diff : <span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({ url: lrcGetUglyPageURL(page, '&diffonly=1&unhide=1&diff='+id+'&oldid='+oldid),
                onSuccess: getDiff, mpage: page, mid: id, moldid:oldid,
                PreviewIndex: LiveRC_Config["NextPreviewIndex"]});
};

window.getDiff = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var page=data.mpage;
  var oldid=data.moldid;
  var id = data.mid;
  var bC  = getPageContent(xmlreq);
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  // Get username of submitter
  var user1 = getElementWithId('mw-diff-otitle2', 'div', bC);
  if(user1 != null) {
    var user1link = user1.getElementsByTagName('a')[0];
    if(user1link) user1 = $(user1link).text();
    else user1 = false;
  }
  var user2 = getElementWithId('mw-diff-ntitle2', 'div', bC);
  if(user2 != null) {
    var user2link = user2.getElementsByTagName('a')[0];
    if(user2link)  user2 = $(user2link).text();
    else user2 = false;
  }
  // Get real ids
  var Div_oldid = getElementWithId('mw-diff-otitle1', 'div', bC);
  if(Div_oldid){
    var A_oldid =  Div_oldid.getElementsByTagName('a')[0];
    if(A_oldid){
      var X_oldid = lrcGetArgFromURL(A_oldid.href, "oldid");
      if(X_oldid) oldid = X_oldid;
    }
  }
  var Div_id = getElementWithId('mw-diff-ntitle1', 'div', bC);
  if(Div_id){
    var A_id =  Div_id.getElementsByTagName('a')[0];
    if(A_id){
      var X_id = lrcGetArgFromURL(A_id.href, "oldid");
      if(X_id) id = X_id;
    }
  }
  // Get previous and next ids (if exist)
  var Previous = false;
  var asPreviousDiff = getElementWithId('differences-prevlink', 'a', bC);
  if(asPreviousDiff !=null){
    var PreviousOldid = lrcGetArgFromURL(asPreviousDiff.href, "oldid");
    if(PreviousOldid){
      Previous = {
                  "url"   : asPreviousDiff.href,
                  "text"  : asPreviousDiff.innerHTML,
                  "title" : (asPreviousDiff.title ? asPreviousDiff.title : ""),
                  "oldid" : PreviousOldid
                 }
    }
  }
  var Next = false;
  var asNextDiff = getElementWithId('differences-nextlink', 'a', bC);
  if (asNextDiff != null){
    var NextOldid = lrcGetArgFromURL(asNextDiff.href, "oldid");
    if(NextOldid){
      Next = {
              "url"   : asNextDiff.href,
              "text"  : asNextDiff.innerHTML,
              "title" : (asNextDiff.title ? asNextDiff.title : ""),
              "oldid" : NextOldid
             }
    }
  }
  var Args = {
    "Mode"     : "Diff",
    "Url"      : lrcGetPageURL(page),
    "Page"     : page,
    "User1"    : user1,
    "User2"    : user2,
    "Oldid"    : oldid,
    "Id"       : id,
    "Previous" : Previous,
    "Next"     : Next
  }
  modifyReviewform(Args);
  buildPreviewBar(Args);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewDiff", data);
};

/* </source>

==== LiveHist ====

<source lang="javascript"> */

window.liveHist = function(page, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Hist : <span style='color:red'>"+page+"</span>...</b>");
  var URL = lrcGetUglyPageURL(page, '&action=history');
  if(!Params){
    lrcAddToHistory("liveHist",
                    [lrcEscapeStr(page)],
                    URL,
                    page
                   );
  }else{
    var HistoryParams = [];
    for(var param in Params){
      if(Params[param]){
        if(param!="title" && param!="action"){
          HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
          URL += "&"+param+"="+encodeURIComponent(Params[param]);
         }
      }
    }
    lrcAddToHistory("liveHist",
                    [lrcEscapeStr(page), "{"+HistoryParams.join(",")+"}"],
                    URL,
                    page + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getHist, message: page , PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getHist = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "Hist",
    "Url"   : lrcGetUglyPageURL(c, '&action=history'),
    "Page"  : c,
    "User1" : ""
  });
  getHist_modifyInputs();
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewHistory", data);
};

window.getHist_modifyInputs = function(){
  var LP = document.getElementById( 'livePreview' );
  var SearchForm = getElementWithId('mw-history-searchform', 'form', LP);
  if(!SearchForm) return;
  var SInputs = SearchForm.getElementsByTagName('input');
  for(var a=0,l=SInputs.length;a<l;a++){
    if(SInputs[a].type && SInputs[a].type === "submit"){
      var Input = SInputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistSearch(this)}
      NewInput.onselect = function(){ processHistSearch(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
    }
  }
  var CompareForm = getElementWithId('mw-history-compare', 'form', LP);
  var CInputs = CompareForm.getElementsByTagName('input');
  for(var a=0,l=CInputs.length;a<l;a++){
    if(CInputs[a].type && CInputs[a].type === "submit"){
      var Input = CInputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistCompare(this)}
      NewInput.onselect = function(){ processHistCompare(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
    }
  }
  var DRButtons = CompareForm.getElementsByTagName('button');
  for(var a=0,l=DRButtons.length;a<l;a++){
    if(DRButtons[a] && lrcHasClass(DRButtons[a],"mw-history-revisiondelete-button")){
      var Input = DRButtons[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.innerHTML + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistRevisionDelete(this)}
      NewInput.onselect = function(){ processHistRevisionDelete(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
      a--
    }
    if(DRButtons[a] && lrcHasClass(DRButtons[a],"mw-history-editchangetags-button")){
      var Input = DRButtons[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.innerHTML + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processHistChangetag(this)}
      NewInput.onselect = function(){ processHistChangetag(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.parentNode.removeChild(Input);
      a--
    }
  }
};

window.processHistSearch = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  liveHist(page, Params);
};

window.processHistCompare = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var diff = Params["diff"];
  var oldid = Params["oldid"];
  liveDiff(page, diff, oldid);
};

window.processHistRevisionDelete = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var Ids = [];
  for(var Id in Params){
   if(Id.indexOf("ids[")==0) Ids.push(Id.split("ids[").join("").split("]").join(""));
  }
  if(!Ids[0]) return;
  liveRevisiondelete(page, "revision", Ids);
};

window.processHistChangetag = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var Ids = [];
  for(var Id in Params){
   if(Id.indexOf("ids[")==0) Ids.push(Id.split("ids[").join("").split("]").join(""));
  }
  if(!Ids[0]) return;
  liveChangetag(page, "revision", Ids);
};

/* </source>

==== LiveArticle ====

<source lang="javascript"> */

window.liveArticle = function(page, user, oldid) {
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveArticle", [lrcEscapeStr(page), (user ? lrcEscapeStr(user):lrcEscapeStr("")), (oldid ? lrcEscapeStr(oldid):lrcEscapeStr(""))], lrcGetUglyPageURL(page, '&redirect=no' + (oldid ? "&oldid="+oldid:"")), page + (user ? " NewPage : User:"+user :""));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'><span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL(page, '&redirect=no'),
          onSuccess: getArticle,
          onFailure: getArticle, /* The return code might be 404 if the page has been deleted. */
          page: page, user:user,oldid:oldid , PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getArticle = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c=data.page;
  var User=data.user;
  var Url = data.url;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  if (bC != null) {
    LP.innerHTML = bC.innerHTML;
  }
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  var Args = {
    "Mode"  : "Article",
    "Url"   : lrcGetPageURL(c),
    "Page"  : c,
    "User1" : (User ? User : false),
    "oldid" : (data.oldid ? data.oldid: false)
  }
  modifyReviewform(Args);
  buildPreviewBar(Args);
  updatePreviewWindowAttributes();
  if(lrcIsFlowPage(c)) lrcManageFlowPage({preview:LP, page:c});
  LiveRC_RunHooks("AfterPreviewArticle", data);
};

/* </source>

===== Gestion extension [[mw:Flow|Flow]] =====

<source lang="javascript"> */

window.lrcIsFlowPage = function(title){
  if(!lrcIsExtensionInstalled("Flow")) return false;
  var NS = getNamespaceInfoFromPage(title);
  if(LiveRC_Config["FlowOccupyPages"].indexOf(title)===-1 && LiveRC_Config["FlowOccupyNamespaces"].indexOf(NS)===-1) return false;
  return true;
};

window.lrcGetFlowStatusForAction = function(title, action){
  if(!lrcIsFlowPage(title)) return true;
  return (LiveRC_Config["FlowCoreActionWhitelist"].indexOf(action)!==-1);
};

window.lrcManageFlowPage = function(Args){
  var title = Args.page;
  var PreviewWindow = Args.preview;
  if(!title || !PreviewWindow) return;

  var TopicDivs = lrcGetElementsByClass("flow-topic", PreviewWindow, "div");
  for(var a=0,l=TopicDivs.length;a<l;a++){
    lrcManageFlowPage_TopicFeatures(TopicDivs[a], title);
  }
  var HeaderNavLink = lrcGetElementsByClass("flow-board-header-nav", PreviewWindow, "div")[0]; // .getElementsByTagName('a')[0];
  /* TODO */

  var NavigMenu = lrcGetElementsByClass("flow-board-navigation", PreviewWindow, "div")[0];
  /* TODO */

  var NewTopicForm = lrcGetElementsByClass("flow-newtopic-form", PreviewWindow, "form")[0];
  /* TODO */

};

window.lrcManageFlowPage_TopicFeatures = function(TopicDiv, title){
  if(!TopicDiv || !title) return;
  var TopicID = TopicDiv.id.split("flow-topic-").join("").ucFirst();

  var watchlinks = lrcGetElementsByClass("flow-watch-link", TopicDiv, "div"); // .getElementsByTagName('a');
  /* TODO */

  var FlowMenulinks = lrcGetElementsByClass("flow-menu", TopicDiv, "div"); // .getElementsByTagName('a');
  /* TODO */

  var FlowPosts = lrcGetElementsByClass("flow-post", TopicDiv, "div");
  for(var a=0,l=FlowPosts.length;a<l;a++){
    var FlowPost = FlowPosts[a];
    var FlowPostID = FlowPost.id.split("flow-post-").join("");
    var FlowPostListLinks = lrcGetElementsByClass("flow-list", FlowPost, "div"); // .getElementsByTagName('a');
    /* TODO */

    var FlowPostMetaLinks = lrcGetElementsByClass("flow-post-meta-actions", FlowPost, "span"); // .getElementsByTagName('a');
    /* TODO */

  }
  var FlowReplyForm = lrcGetElementsByClass("flow-reply-form", TopicDiv, "form")[0];
  /* TODO */

};

/* </source>

==== LiveContrib ====

<source lang="javascript"> */

window.liveContrib = function(user, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Contributions : <span style='color:red'>"+user+"</span>...</b>");
  if(!Params){
    var URL = lrcGetPageURL('Special:Contributions/'+user);
    lrcAddToHistory("liveContrib",
                    [lrcEscapeStr(user)],
                    URL,
                    user
                   );
  }else{
    var URL = lrcGetUglyPageURL('Special:Contributions')+"&contribs=user&target="+encodeURIComponent(user);
    var HistoryParams = [];
    for(var param in Params){
      if(Params[param]){
        URL += "&"+param+"="+encodeURIComponent(Params[param]);
        if(param!="target") HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
      }
    }
    lrcAddToHistory("liveContrib",
                    [lrcEscapeStr(user), "{"+HistoryParams.join(",")+"}"],
                    URL,
                    user + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getContrib, message: user, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
};

window.getContrib = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var user=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "Contrib",
    "Url"   : lrcGetPageURL("Special:Contributions/" + user),
    "Page"  : "Special:Contributions/"+user,
    "User1" : user
  });
  modifyContribInput();
  LiveRC_RunHooks("AfterPreviewContribs", data);
};

window.modifyContribInput = function(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processContrib(this)}
      NewInput.onselect = function(){ processContrib(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
};

window.processContrib = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var user = Params["target"];
  liveContrib(user, Params);
};

/* </source>

==== LiveDeletedContrib ====

<source lang="javascript"> */

window.liveDeletedContrib = function(user, Params) {
  LiveRC_Config["NextPreviewIndex"]++;
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>DeletedContributions : <span style='color:red'>"+user+"</span>...</b>");
  if(!Params){
    var URL = lrcGetPageURL('Special:DeletedContributions/'+user);
    lrcAddToHistory("liveDeletedContrib",
                    [lrcEscapeStr(user)],
                    URL,
                    user
                   );
  }else{
    var URL = lrcGetUglyPageURL('Special:DeletedContributions')+"&target="+encodeURIComponent(user);
    var HistoryParams = [];
    for(var param in Params){
      if(Params[param]){
        URL += "&"+param+"="+encodeURIComponent(Params[param]);
        if(param!="target") HistoryParams.push(param+":"+lrcEscapeStr(Params[param]));
      }
    }
    lrcAddToHistory("liveDeletedContrib",
                    [lrcEscapeStr(user), "{"+HistoryParams.join(",")+"}"],
                    URL,
                    user + " : " + HistoryParams.join(" ")
                   );
  }
  wpajax.http({url:URL, onSuccess: getDeletedContrib, message: user, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
};

window.getDeletedContrib = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var user=data.message;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  buildPreviewBar({
    "Mode"  : "DeletedContrib",
    "Url"   : lrcGetPageURL("Special:DeletedContributions/" + user),
    "Page"  : "Special:DeletedContributions/"+user,
    "User1" : user
  });
  modifyDeletedContribInput();
  LiveRC_RunHooks("AfterPreviewDeletedContribs", data);
};

window.modifyDeletedContribInput = function(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processDeletedContrib(this)}
      NewInput.onselect = function(){ processDeletedContrib(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
};

window.processDeletedContrib = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var user = Params["target"];
  liveDeletedContrib(user, Params);
};

/* </source>

==== LiveLog ====

<source lang="javascript"> */
// (:it:User:Jalo)

window.liveLog = function(action , params) {
  LiveRC_Config["NextPreviewIndex"]++;
  var titolo = getLogTitle(action);
  var URLParams = "";
  var HistoryParams = [];
  for(var param in params){
    if(params[param]){
      URLParams += "&"+ param + "=" + encodeURIComponent(params[param]);
      HistoryParams.push(param + ":" + lrcEscapeStr(""+params[param]));
    }
  }
  lrcAddToHistory("liveLog", [lrcEscapeStr(action), "{"+HistoryParams.join(",")+"}"], lrcGetUglyPageURL('Special:Log', '&type=' + action + URLParams), titolo + " : " + HistoryParams.join(", "));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'><span style='color:red'>"+titolo+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL('Special:Log', '&type=' + action + URLParams), onSuccess: getLog, page:params["page"] , user:params["user"], PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
};

window.getLogTitle = function(action){
  for(var Action in LiveRC_Config["LogNames"]){
    if(action == Action) return lrcGetMediawikiMessage(LiveRC_Config["LogNames"][Action]["page"], true);
  }
  return lrcGetMediawikiMessage("log", true);
};

window.getLog = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c = data.page;
  var pref = "Page : ";
  if(!c){
    c=data.user;
    pref = "User : ";
  }
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  buildBlanckPreviewBar('<b><a href="'+lrcGetPageURL(c)+'" target="_new">'+pref+c+'</a></b>', true);
  modifyLogInput();
  LiveRC_RunHooks("AfterPreviewLog", data);
};

window.modifyLogInput = function(){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
       var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processLog(this)}
      NewInput.onselect = function(){ processLog(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  var ListForm = LP.getElementsByTagName('form')[1];
  if(ListForm){
    var DRButtons = ListForm.getElementsByTagName('button');
    for(var a=0,l=DRButtons.length;a<l;a++){
      if(DRButtons[a] && lrcHasClass(DRButtons[a],"mw-log-deleterevision-button")){
        var Input = DRButtons[a];
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.value = Input.innerHTML + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processLogRevisionDelete(this)}
        NewInput.onselect = function(){ processLogRevisionDelete(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.parentNode.removeChild(Input);
      a--
      }
      if(DRButtons[a] && lrcHasClass(DRButtons[a],"mw-log-editchangetags-button")){
        var Input = DRButtons[a];
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.value = Input.innerHTML + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processLogChangetag(this)}
        NewInput.onselect = function(){ processLogChangetag(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.parentNode.removeChild(Input);
        a--
      }
    }
  }
  updatePreviewWindowAttributes();
};

window.processLogRevisionDelete = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var Ids = [];
  for(var Id in Params){
   if(Id.indexOf("ids[")==0) Ids.push(Id.split("ids[").join("").split("]").join(""));
  }
  if(!Ids[0]) return;
  liveRevisiondelete(page, "logging", Ids);
};

window.processLogChangetag = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["title"];
  var Ids = [];
  for(var Id in Params){
   if(Id.indexOf("ids[")==0) Ids.push(Id.split("ids[").join("").split("]").join(""));
  }
  if(!Ids[0]) return;
  liveChangetag(page, "logging", Ids);
};

window.processLog = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var action = Params["type"];
  var page = Params["page"];
  var user = Params["user"];
  liveLog(action, {page:page,user:user});
};

/* </source>

==== LiveFilter ====
<source lang=javascript> */

window.liveFilter = function(Page, params) {
// -- AbuseLog --
// params.wpSearchTitle
//       .wpSearchFilter
//       .wpSearchUser
//       .details
// -- AbuseFilter --
// params.wpSearchFilter

  LiveRC_Config["NextPreviewIndex"]++;
  if(!params) params = {};
  var URL = mw.config.get('wgServer');
  var FilterParams = [];
  if(Page=="AbuseFilter"){
    URL += mw.config.get('wgArticlePath').split("$1").join("Special:AbuseFilter"+(params.wpSearchFilter ? "/"+params.wpSearchFilter : ""));
  }else if(params.details){
    URL = lrcGetPageURL('Special:AbuseLog/' + params.details);
  }else{
    URL += mw.config.get('wgScript') + "?title=Special:AbuseLog";
    for(var param in params){
      if(params[param] && ["title", "user", "filterrevid", "filterid"].indexOf(param)===-1){
        URL += "&"+ param + "=" + encodeURIComponent(params[param]);
      }
    }
  }
  for(var param in params){
    if(params[param]){
      FilterParams.push(param + ":" + lrcEscapeStr(""+params[param]));
    }
  }
  FilterParams = "{"+FilterParams.join(",")+"}";
  lrcAddToHistory("liveFilter", [lrcEscapeStr(Page), FilterParams], URL, FilterParams);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Filter: <span style='color:red'></span>...</b>");
  wpajax.http({ url: URL,
                onSuccess: getFilter,
                page: Page,
                args: params,
                PreviewIndex:LiveRC_Config["NextPreviewIndex"]
              });
};

window.getFilter = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var Args = data.args;
  var Page = data.page;
  var bC  = getPageContent(xmlreq);
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  var TextHG = document.createElement('span'), TextHD = document.createElement('span'), TextBG = document.createElement('span'), TextBD = document.createElement('span');
  if(Page === "AbuseFilter"){
    var MainLink = document.createElement('a');
    MainLink.href = data.url;
    MainLink.target = "_new";
    MainLink.innerHTML = '<b>'+Page+'<small>['+Args.wpSearchFilter+']</small></b>';
    TextHG.appendChild(MainLink);
    var AbuselogLink = document.createElement('a');
    AbuselogLink.href = lrcGetUglyPageURL("Special:Abuselog", (Args.wpSearchFilter ? "&wpSearchFilter="+Args.wpSearchFilter : "") );
    AbuselogLink.target = "_new";
    AbuselogLink.onclick = function(){ liveFilter('AbuseLog', {wpSearchFilter: Args.wpSearchFilter }); return false;};
    AbuselogLink.innerHTML = 'Abuselog<small>[wpSearchFilter='+Args.wpSearchFilter+"]</small>";
    TextHD.appendChild(AbuselogLink);
  }else{
    var Details = [];
    for(var param in Args){
        if(["title", "user", "filterrevid", "filterid"].indexOf(param)===-1 && Args[param]) Details.push( param + "=" + Args[param]);
    }
    var MainLink = document.createElement('a');
    MainLink.href = data.url;
    MainLink.target = "_new";
    MainLink.innerHTML = '<b>'+Page+(Details.length>0 ? "<small>["+Details.join(", ")+"]</small>" : "")+'</b>';
    TextHG.appendChild(MainLink);
    if(Args.filterrevid && Args.title){
      var AbuselogDiffLink = document.createElement('a');
      AbuselogDiffLink.href = lrcGetUglyPageURL(Args.title, '&diff='+Args.filterrevid+'&oldid=prev&unhide=1');
      AbuselogDiffLink.target = "_new";
      AbuselogDiffLink.onclick = function(){ liveDiff(Args.title, Args.filterrevid, 'prev'); return false;};
      AbuselogDiffLink.title = lrcMakeText("DIFF_TIP");
      AbuselogDiffLink.innerHTML = lrcMakeText("DIFF_TIP");
      TextHG.appendChild(document.createTextNode(' — '));
      TextHG.appendChild(AbuselogDiffLink);
    }
    var HDLinks = [];
    if(Args.title){
      var AbuselogSearchTitleLink = document.createElement('a');
      AbuselogSearchTitleLink.href = lrcGetUglyPageURL("Special:Abuselog", "&wpSearchTitle="+encodeURIComponent(Args.title) );
      AbuselogSearchTitleLink.target = "_new";
      AbuselogSearchTitleLink.onclick = function(){ liveFilter("AbuseLog", {wpSearchTitle:Args.title}); return false;};
      AbuselogSearchTitleLink.title = lrcGetMediawikiMessage("abusefilter-log", true)+" [wpSearchTitle="+Args.title+"]";
      AbuselogSearchTitleLink.innerHTML = "Abuselog<small>[wpSearchTitle="+Args.title+"]</small>";
      HDLinks.push(AbuselogSearchTitleLink);
    }
    if(Args.user){
      var AbuselogSearchUserLink = document.createElement('a');
      AbuselogSearchUserLink.href = lrcGetUglyPageURL("Special:Abuselog", "&wpSearchUser="+encodeURIComponent(Args.user) );
      AbuselogSearchUserLink.target = "_new";
      AbuselogSearchUserLink.onclick = function(){ liveFilter("AbuseLog", {wpSearchUser:Args.user}); return false;};
      AbuselogSearchUserLink.title = lrcGetMediawikiMessage("abusefilter-log", true)+" [wpSearchUser="+Args.user+"]";
      AbuselogSearchUserLink.innerHTML = "Abuselog<small>[wpSearchUser="+Args.user+"]</small>";
      HDLinks.push(AbuselogSearchUserLink);
    }
    if(Args.filterid){
      var AbuselogSearchFilterLink = document.createElement('a');
      AbuselogSearchFilterLink.href = lrcGetUglyPageURL("Special:Abuselog", "&wpSearchFilter="+encodeURIComponent(Args.filterid) );
      AbuselogSearchFilterLink.target = "_new";
      AbuselogSearchFilterLink.onclick = function(){ liveFilter("AbuseLog", {wpSearchFilter:Args.filterid}); return false;};
      AbuselogSearchFilterLink.title = lrcGetMediawikiMessage("abusefilter-log", true)+" [wpSearchFilter="+Args.filterid+"]";
      AbuselogSearchFilterLink.innerHTML = "Abuselog<small>[wpSearchFilter="+Args.filterid+"]</small>";
      HDLinks.push(AbuselogSearchFilterLink);
      var FilterLink = document.createElement('a');
      FilterLink.href = lrcGetUglyPageURL("Special:AbuseFilter/"+Args.filterid);
      FilterLink.onclick = function(){ liveFilter('AbuseFilter',{wpSearchFilter:Args.filterid}); return false; };
      FilterLink.title = Args.filterid;
      FilterLink.innerHTML = "AbuseFilter<small>["+Args.filterid+"]</small>";
      HDLinks.push(FilterLink);
    }
    for(var a=0,l=HDLinks.length;a<l;a++){
      if(a!=0) TextHD.appendChild(document.createTextNode(' — '));
      TextHD.appendChild(HDLinks[a]);
    }
    var InputTD = lrcGetElementsByClass("mw-submit", LP, "td")[0];
    if(InputTD){
        var Input = InputTD.firstChild;
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_mw-submit";
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processFilter(this)}
        NewInput.onselect = function(){ processFilter(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
     }
  }
  var PBArgs = {
    "Mode"  : data.page,
    "Url"   : data.url,
    "Page"  : Args.title,
    "User1" : Args.user
  };
  if(PBArgs.Page && PBArgs.User1) TextBG = buildPreviewNormalTabs(PBArgs);
  if(Args.details && PBArgs.Page && PBArgs.User1) TextBD = buildPreviewSpecialTabs(PBArgs);
  if(!TextHG.firstChild) TextHG.innerHTML = "&nbsp;";
  if(!TextHD.firstChild) TextHD.innerHTML = "&nbsp;";
  if(!TextBG.firstChild) TextBG.innerHTML = "&nbsp;";
  if(!TextBD.firstChild) TextBD.innerHTML = "&nbsp;";
  buildBlanckPreviewBar(TextHG, true, TextHD, TextBG, TextBD);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewFilter", data);
};

window.processFilter = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  liveFilter("AbuseLog", Params);
};

/* </source>

==== LiveDelete ====

<source lang="javascript"> */

window.liveDelete = function(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveDelete", [lrcEscapeStr(Title)], lrcGetUglyPageURL(Title, '&action=delete'), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Suppr : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=delete'),
               onSuccess: getDelete, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getDelete = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq, "deleteconfirm");
    if(!bC) bC = getPageContent(xmlreq, "mw-img-deleteconfirm");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");

    var Input = document.getElementById("wpConfirmB");
    if(!Input) Input = document.getElementById("mw-filedelete-submit");
    if(Input){
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.id = "Live_wpConfirmB";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processDelete(this)}
      NewInput.onselect = function(){ processDelete(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
    buildPreviewBar({
      "Mode"  : "Delete",
      "Url"   : lrcGetPageURL(c),
      "Page"  : c,
      "User1" : ""
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewDelete", data);
};

window.processDelete = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=delete")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneDelete,
                  page:Page
                });
};

window.doneDelete = function(ajaxDelete, data){
    var bC  = getPageContent(ajaxDelete);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var page = data.page;
    var otherpage = lrcGetOtherPagename(page);
    if(data.data.indexOf("&wpWatch=1")!=-1){
        addPageToSuivi(page);
        if(otherpage) addPageToSuivi(otherpage);
    }else{
        removePageFromSuivi(page);
        if(otherpage) removePageFromSuivi(otherpage);
    }
};

/* </source>

==== LiveProtect ====

<source lang="javascript"> */

window.liveProtect = function(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveProtect", [lrcEscapeStr(Title)], lrcGetUglyPageURL(Title, '&action=protect'), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Protect : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=protect'),
               onSuccess: getProtect, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getProtect = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var ProtectForm  = getPageContent(xmlreq, "mw-Protect-Form");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(ProtectForm);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Protect",
      "Url"   : lrcGetUglyPageURL(c,'&action=protect'),
      "Page"  : c,
      "User1" : ""
    });
    modifyProtectform();
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewProtect", data);
};

window.modifyProtectform = function(){
    var Input = document.getElementById("mw-Protect-submit");
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_mw-Protect-submit";
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processProtect(this)}
    NewInput.onselect = function(){ processProtect(this)}
    Input.parentNode.insertBefore(NewInput, Input);
    Input.style.display = "none";
    var Cascade = document.getElementById('mwProtect-cascade');
    if(Cascade) Cascade.checked = false;
    var PreviewWindow = document.getElementById("livePreview");

    var ProtectEditSelect  = getElementWithId("mwProtect-level-edit", 'select', PreviewWindow);
    ProtectEditSelect.onchange = function(){ modifyProtectformUpdate(this); };
    var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
    ProtectMoveSelect.onchange = function(){ modifyProtectformUpdate(this); };

    var ProtectSet = getElementWithId("mwProtectSet", "table", PreviewWindow);
    var Target = ProtectSet.getElementsByTagName('tr')[0].nextSibling;
    var UnchainedInput = document.createElement('input');
    UnchainedInput.id = "mwProtectUnchained";
    UnchainedInput.type = "checkbox";
    UnchainedInput.onclick = function(){ ProtectUnchainedToggle(); };
    var UnchainedLabel = document.createElement('label');
    UnchainedLabel.setAttribute("for", "mwProtectUnchained");
    UnchainedLabel.innerHTML = lrcGetMediawikiMessage("protect-unchain-permissions", true);
    var UnchainedTr = document.createElement('tr');
    var UnchainedTd = document.createElement('td');
    UnchainedTd.appendChild(UnchainedInput);
    UnchainedTd.appendChild(UnchainedLabel);
    UnchainedTr.appendChild(UnchainedTd);
    Target.parentNode.insertBefore(UnchainedTr, Target);
    ProtectUnchainedToggle();
};

window.ProtectUnchainedToggle = function(){
    var PreviewWindow = document.getElementById("livePreview");
    var ProtectUnchainedInput  = getElementWithId("mwProtectUnchained", 'input', PreviewWindow);
        var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
        if(ProtectUnchainedInput.checked){
            ProtectMoveSelect.disabled = false;
        }else{
            ProtectMoveSelect.disabled = "disabled";
        }
};

window.modifyProtectformUpdate = function(Select){
    var PreviewWindow = document.getElementById("livePreview");
    var ProtectEditSelect  = getElementWithId("mwProtect-level-edit", 'select', PreviewWindow);
    var ProtectMoveSelect  = getElementWithId("mwProtect-level-move", 'select', PreviewWindow);
    var ProtectUnchainedInput  = getElementWithId("mwProtectUnchained", 'input', PreviewWindow);
    if(!ProtectEditSelect ||!ProtectMoveSelect || !ProtectUnchainedInput ) return;
    if(ProtectUnchainedInput.checked) return;
    var Value = Select.value;
    ProtectEditSelect.value = Value;
    ProtectMoveSelect.value = Value;
};

window.processProtect = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=protect")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneProtect,
                  page:Page,
                  params:Params
                });
};

window.doneProtect = function(ajaxProtect, data){
    var bC  = getPageContent(ajaxProtect);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var page = data.page;
    var otherpage = lrcGetOtherPagename(page);
    if(data.data.indexOf("&mwProtectWatch=1")!=-1){
        addPageToSuivi(page);
        if(otherpage) addPageToSuivi(otherpage);
    }else{
        removePageFromSuivi(page);
        if(otherpage) removePageFromSuivi(otherpage);
    }
    var Page = data.page;
    var Params = data.params;
    var StableParam = Params["mwStabilityLevel"];
    if(typeof(StableParam)!="undefined" && StableParam!="none"){
      var PreviewBarArgs = {
        "Mode"  : "Article",
        "Url"   : lrcGetPageURL(data.page),
        "Page"  : data.page
      }
      modifyReviewform(PreviewBarArgs);
      buildPreviewBar(PreviewBarArgs);
    }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewProtect", data.params);
};

/* </source>

==== LiveBlock ====

<source lang="javascript"> */

window.liveBlock = function(UserName){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveBlock", [lrcEscapeStr(UserName)], lrcGetPageURL('Special:Blockip/' + UserName), UserName);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Block : <span style='color:red'>"+UserName+"</span>...</b>");
  wpajax.http({url: lrcGetPageURL('Special:Blockip/' + UserName) ,
               onSuccess: getBlock, user:UserName, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getBlock = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.user;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    var Input = lrcGetElementsByClass("mw-htmlform-submit", PreviewWindow, "input")[0];
    if(Input){
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.id = "Live_wpBlock";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processBlock(this)}
      NewInput.onselect = function(){ processBlock(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
    buildPreviewBar({
      "Mode"  : "Block",
      "Url"   : lrcGetPageURL('Special:Blockip/' + c),
      "Page"  : c,
      "User1" : c
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewBlock", data);
};

window.processBlock = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var duration;
    var user = Params["wpBlockAddress"];
    var durationName = "wpExpiry";
    if(Params["wpExpiry-other"]!="") durationName = "wpExpiry-other";
    var durationInput = getFormParams(Form, durationName);
    if(durationInput.tagName.toLowerCase() == 'input') duration = durationInput.value;
    if(durationInput.tagName.toLowerCase() == 'select'){
      var options = durationInput.getElementsByTagName('option');
      for(var a=0,l=options.length;a<l;a++){
        if(options[a].selected) duration = options[a].innerHTML;
      }
    }
    var action = Form.getAttribute("action");
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneBlock,
                  user:user,
                  duration:duration
                });
};

window.doneBlock = function(ajaxBlock, data){
    var user = data.user;
    var userpage = lrcGetNamespaceName(2)+":"+user;
    var usertalk = lrcGetNamespaceName(3)+":"+user;
    if(data.data.indexOf("&wpWatch=1")!=-1){
        addPageToSuivi(userpage);
        addPageToSuivi(usertalk);
    }else{
        removePageFromSuivi(userpage);
        removePageFromSuivi(usertalk);
    }
    var bC  = getPageContent(ajaxBlock);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    var user = data.user;
    var duration = data.duration;
    if(user && duration ){
        var Bar = PreviewBarTemplate;
        var UserLink = '<b>'+lrcGetUserLink(user)+' : '+lrcMakeText("BLOCKED")+'</b>';
        var BlockAverto = '<form id="LiveBlockAvertoForm"  onsubmit="doBlockAverto('+lrcEscapeStr(user)+'); return false;">'
                        + '<input id="BlockAvertoParam" type="text" value="'+lrcMakeText("BLOCKTEMPLATE")+'|'+duration+'" />'
                        + '<input id="LiveBlockAvertoLink" type="button" title="'+lrcMakeText("USERMSG")+' « '+User+' »" '
                        + 'onclick="doBlockAverto('+lrcEscapeStr(user)+'); return false;" '
                        + 'onselect="doBlockAverto('+lrcEscapeStr(user)+'); return false;" '
                        + 'title="'+lrcMakeText("BLOCKAVERTO")+' « '+user+' »" '
                        + 'value="'+lrcMakeText("BLOCKAVERTO")+'" />'
                        + '</small>';
        Bar = Bar.split('$1').join(UserLink);
        Bar = Bar.split('$2').join("&nbsp;");
        Bar = Bar.split('$3').join("&nbsp;");
        Bar = Bar.split('$4').join(BlockAverto);
        var TabContainer = document.getElementById("livePreviewTitle");
        if(TabContainer) TabContainer.innerHTML = Bar;
    }
};

window.doBlockAverto = function(user){
  var message = document.getElementById("BlockAvertoParam").value;
  var URL = lrcGetAPIURL({format:'xml',action:'query',prop:'info',intoken:'edit',inprop:'protection',titles:lrcGetNamespaceName(3)+":"+user});
  wpajax.http({ url: URL,
                onSuccess: postLiveAverto,
                user: user, message: message
  });
};

/* </source>

==== LiveEdit ====

<source lang="javascript"> */

window.liveEdit = function(Title, Param, preload){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveEdit", [lrcEscapeStr(Title), (Param?lrcEscapeStr(""+Param):'\'\'')], lrcGetUglyPageURL(Title,'&action=edit' + (Param ? Param : "")), Title + (Param ? ' Param="'+Param+'"' : ""));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Edit : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL(Title, '&action=edit' + (Param ? Param : "")),
               onSuccess: getEdit, title:Title, preload:preload, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getEdit = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    if(data.preload){
      var textarea = bC.getElementsByTagName('textarea')[0];
      if(textarea) textarea.value = data.preload;
    }
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Edit",
      "Url"   : lrcGetUglyPageURL(c,'&action=edit'),
      "Page"  : c,
      "User1" : ""
    });
    modifyEditform(bC);
    LiveRC_RunHooks("AfterPreviewEdit", data);
};

window.modifyEditform = function(Editform){
    var inputs = ["wpSave", "wpPreview", "wpDiff"];
    for(var a=0,l=inputs.length;a<l;a++){
        var Input = document.getElementById(inputs[a]);
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_" + Input.id;
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processEdit(this)}
        NewInput.onselect = function(){ processEdit(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
    }
    var TextArea = document.getElementById("wpTextbox1");
    TextArea.rows = 10;
    updatePreviewWindowAttributes();
};

window.processEdit = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var Type = Input.id.replace(/.*_/g, "");
    ParamsInURL  = ParamsInURL.join("&")+"&"+Type+"=1";
    var action = Form.action;
    var Page = false;
    try{ Page = action.split("?title=")[1].split("&action=submit")[0]; }catch(e){ }
    try{ Page = decodeURIComponent(Page); }catch(e){ }
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneEdit,
                  type:Type,
                  page:Page
                });
};

window.doneEdit = function(ajaxEdit, data){
    var Type = data.type;
    var bC  = getPageContent(ajaxEdit);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    if(getElementWithId("editform", 'form', bC)){
        modifyEditform();
        if(Type=="wpDiff") getElementWithId('wikiPreview', 'div', PreviewWindow).style.display = "";
        LiveRC_RunHooks("AfterPreviewEdit", data);
    }else if(Type == "wpSave"){
        PreviewWindow.className = "";
        var page = data.page;
        var otherpage = lrcGetOtherPagename(page);
        if(data.data.indexOf("&wpWatchtis=1")!=-1){
            addPageToSuivi(page);
            if(otherpage) addPageToSuivi(otherpage);
        }else{
            removePageFromSuivi(page);
            if(otherpage) removePageFromSuivi(otherpage);
        }
        LiveRC_RunHooks("AfterPreviewArticle", data);
    }
};

/* </source>

==== LiveMove ====

<source lang="javascript"> */

window.liveMove = function(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveMove", [lrcEscapeStr(Title)], lrcGetPageURL("Special:Movepage/"+ Title), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Move : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetPageURL("Special:Movepage/"+ Title), onSuccess: getMove, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getMove = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq, "movepage");
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.appendChild(bC);
    var PreviewDiv = document.getElementById( 'divLivePreview' );
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    var MoveSubmit = false;
    var Inputs = bC.getElementsByTagName("input");
    for(var a=0,l=Inputs.length;a<l;a++){
        if(Inputs[a].name && Inputs[a].name == "wpMove") MoveSubmit = Inputs[a];
    }
    if(MoveSubmit){
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_wpMove";
        NewInput.name = "Live_wpMove";
        NewInput.value = MoveSubmit.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processMove(this)}
        NewInput.onselect = function(){ processMove(this)}
        MoveSubmit.parentNode.insertBefore(NewInput, MoveSubmit);
        MoveSubmit.style.display = "none";

    }
    buildPreviewBar({
      "Mode"  : "Move",
      "Url"   : lrcGetPageURL('Special:Movepage/'+ c),
      "Page"  : c,
      "User1" : ""
    });
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewMove", data);
};

window.processMove = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    var action = Form.action;
    var OldPage = Params["wpOldTitle"];
    var NewPage = Params["wpNewTitle"];
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&"),
                  onSuccess:doneMove,
                  oldpage:OldPage,
                  newpage:NewPage
                });
};

window.doneMove = function(ajaxMove, Type){
    var bC  = getPageContent(ajaxMove);
    var PreviewWindow = document.getElementById("livePreview");
    var MoveForm = getElementWithId("movepage", 'form', PreviewWindow)
    if(MoveForm){
        var OldTitle = document.getElementsByName("wpOldTitle")[0].value;
        getMove(ajaxMove, OldTitle);
    }else{
        PreviewWindow.innerHTML = bC.innerHTML;
        var oldpage = data.oldpage;
        var oldotherpage = lrcGetOtherPagename(oldpage);
        var newpage = data.newpage;
        var newotherpage = lrcGetOtherPagename(newpage);
        if(data.data.indexOf("&wpWatch=1")!=-1){
            addPageToSuivi(oldpage);
            if(oldotherpage) addPageToSuivi(oldotherpage);
            addPageToSuivi(newpage);
            if(newotherpage) addPageToSuivi(newotherpage);
        }else{
            removePageFromSuivi(oldpage);
            if(oldotherpage) removePageFromSuivi(oldotherpage);
            removePageFromSuivi(newpage);
            if(newotherpage) removePageFromSuivi(newotherpage);
        }
    }
};

/* </source>

==== LiveRevisiondelete ====

<source lang="javascript"> */

window.liveRevisiondelete = function(Page, type, RDId){
  LiveRC_Config["NextPreviewIndex"]++;
  if(!Page && type == "logging") Page = lrcGetNamespaceName(-1, true) + ":Log";
  var URL = mw.config.get('wgServer') + mw.config.get('wgScript') + '?action=revisiondelete&type='+type;
  var Histids = "";
  var HistPamamids = "["+RDId.join(",")+"]";
  for(var a=0,l=RDId.length;a<l;a++){
    URL += "&ids[" + RDId[a] + "]=1";
    Histids += RDId[a] + " ";
  }
  lrcAddToHistory("liveRevisiondelete", [lrcEscapeStr(Page), lrcEscapeStr(type), HistPamamids], URL, Page + " id="+Histids);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Revision delete : <span style='color:red'>"+Page+" id="+Histids+"</span>...</b>")
  wpajax.http({ url: URL, onSuccess: getRevisiondelete, title: Page, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getRevisiondelete = function(Req, data){
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var title = data.title;
    var bC  = getPageContent(Req);
    var PreviewDiv = document.getElementById( 'livePreview' );
    PreviewDiv.innerHTML = bC.innerHTML;
    if (PreviewDiv.innerHTML == "undefined") PreviewDiv.innerHTML = bC.xml;
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Revisiondelete",
      "Url"   : lrcGetPageURL(title),
      "Page"  : title,
      "User1" : "",
      "User2" : "",
      "patrolledDiff": true
    });
    getRevisiondelete_ModifyInputs(data);
};

window.getRevisiondelete_ModifyInputs = function(data){
    var Form = document.getElementById("mw-revdel-form-revisions");
    if(!Form) return;
    var Input = document.getElementsByName("wpSubmit")[0];
    if(Input){
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_Revisiondelete";
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processRevisiondelete(this)}
        NewInput.onselect = function(){ processRevisiondelete(this)}
        Input.parentNode.insertBefore(NewInput, Input);
        Input.style.display = "none";
    }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewRevisiondelete", data);
};

window.processRevisiondelete = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    if(!Params) return;
    var Page = decodeURIComponent(Params["target"]);
    var Id = Params["ids"];
    var action = Form.action;
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    buildBlanckPreviewBar("<b style='text-decoration: blink;'>Revision delete : <span style='color:red'>"+Page+" id="+Id+"</span>...</b>")
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL.join("&")+"&wpSubmit=1",
                  onSuccess:doneRevisiondelete,
                  mpage:Page,
                  mid:Id
                });
};

window.doneRevisiondelete = function(xmlreq, data){
    var Page = data.mpage;
    var Id = data.mid;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = bC.innerHTML;
    buildPreviewBar({
      "Mode"            : "Revisiondelete",
      "Url"             : lrcGetPageURL(Page),
      "Page"            : Page,
      "Oldid"           : Id,
      "User1"           : "",
      "User2"           : "",
      "patrolledDiff"   : true,
      "RevisiondeleteOK": true
    });
    getRevisiondelete_ModifyInputs();
};

/* </source>

==== LiveWhatlinkshere ====

<source lang="javascript"> */

window.liveWhatlinkshere = function(page , params) {
  LiveRC_Config["NextPreviewIndex"]++;
  var URLParams = "";
  var HistoryParams = [];
  for(var param in params){
    if(params[param]){
      URLParams += "&"+ param + "=" + encodeURIComponent(params[param]);
      HistoryParams.push(param + ":" + lrcEscapeStr(""+params[param]));
    }
  }
  lrcAddToHistory("liveWhatlinkshere", [lrcEscapeStr(page), "{"+HistoryParams.join(",")+"}"],
lrcGetUglyPageURL('Special:Whatlinkshere/'+page, URLParams), page + " : " + HistoryParams.join(", "));
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Whatlinkshere <span style='color:red'>"+page+"</span>...</b>");
  wpajax.http({url:lrcGetUglyPageURL('Special:Whatlinkshere/'+page, URLParams), onSuccess: getWhatlinkshere, page:page, PreviewIndex:LiveRC_Config["NextPreviewIndex"] });
};

window.getWhatlinkshere = function(xmlreq, data) {
  // Cancel if the user has clicked on another link after this one
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var bC  = getPageContent(xmlreq);
  var c = data.page;
  var LP = document.getElementById( 'livePreview' );
  var dLP = document.getElementById( 'divLivePreview' );
  LP.innerHTML = bC.innerHTML;
  if (LP.innerHTML == "undefined") LP.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Whatlinkshere",
      "Url"   : lrcGetPageURL(c),
      "Page"  : c,
      "User1" : "",
      "User2" : ""
    });
  modifyWhatlinkshereInput(data.url);
  LiveRC_RunHooks("AfterPreviewWhatlinkshere", data);
};

window.modifyWhatlinkshereInput = function(url){
  var LP = document.getElementById( 'livePreview' );
  var Form = LP.getElementsByTagName('form')[0];
  var Inputs = Form.getElementsByTagName('input');
  for(var a=0,l=Inputs.length;a<l;a++){
    if(Inputs[a].type && Inputs[a].type === "submit"){
      var Input = Inputs[a];
      var NewInput = document.createElement('input');
      NewInput.type = "button";
      NewInput.value = Input.value + lrcMakeText("LIVELINK");
      NewInput.onclick = function(){ processWhatlinkshere(this)}
      NewInput.onselect = function(){ processWhatlinkshere(this)}
      Input.parentNode.insertBefore(NewInput, Input);
      Input.style.display = "none";
    }
  }
  var NewFiltersContainer = document.createElement('p');
  Form.getElementsByTagName('fieldset')[0].appendChild(NewFiltersContainer);
  var FilterFieldset = LP.getElementsByTagName('fieldset')[1];
  if(FilterFieldset){
    var FilterLegend = FilterFieldset.getElementsByTagName('legend')[0];
    NewFiltersContainer.appendChild(document.createTextNode(lrcGetMediawikiMessage("whatlinkshere-filters", true)+' : '));
    FilterLegend.parentNode.removeChild(FilterLegend);
    var params = {
      "hidetrans"  : "whatlinkshere-hidetrans"  ,
      "hidelinks"  : "whatlinkshere-hidelinks" ,
      "hideredirs" : "whatlinkshere-hideredirs"  ,
      "hideimages" : "whatlinkshere-hideimages"
    };
    for(var param in params){
      var ThisParam = param;
      var ThisParamChecked = ( (lrcGetArgFromURL(url, ThisParam) === '1') ? true : false );
      var NewInput = document.createElement('input');
      NewInput.type = "checkbox";
      NewInput.id = ThisParam;
      NewInput.name = ThisParam;
      NewInput.value = 1;
      if(ThisParamChecked) NewInput.checked = "checked";
      var NewLabel = document.createElement('label')
      NewLabel.setAttribute('for', ThisParam);
      NewLabel.innerHTML = lrcGetMediawikiMessage(params[param], true).split("$1").join(lrcGetMediawikiMessage("hide", true));
      NewFiltersContainer.appendChild(NewInput);
      NewFiltersContainer.appendChild(NewLabel);
      NewFiltersContainer.appendChild(document.createTextNode(" • "));
    }
    FilterFieldset.parentNode.removeChild(FilterFieldset);
  }
  updatePreviewWindowAttributes(NewLabel);
};

window.processWhatlinkshere = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  var page = Params["target"];
  liveWhatlinkshere(page, Params);
};

/* </source>

==== LiveStabilization ====

<source lang="javascript"> */

window.liveStabilization = function(Title){
  LiveRC_Config["NextPreviewIndex"]++;
  lrcAddToHistory("liveStabilization",[lrcEscapeStr(Title)], lrcGetUglyPageURL('Special:Stabilisation','&page='+Title), Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Stabilization : <span style='color:red'>"+Title+"</span>...</b>");
  wpajax.http({url: lrcGetUglyPageURL("Special:Stabilisation","&page="+encodeURIComponent(Title)),
               onSuccess: getStabilization, title:Title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getStabilization = function(xmlreq, data){
  // Cancel if the user has clicked on another link after this one
    if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
    var c = data.title;
    var bC  = getPageContent(xmlreq);
    var PreviewWindow = document.getElementById("livePreview");
    PreviewWindow.innerHTML = "";
    PreviewWindow.innerHTML = bC.innerHTML;
    lrcCloseAll();
    lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Stabilization",
      "Url"   : data.url,
      "Page"  : c
    });
    modifyStabilizationform(PreviewWindow.getElementsByTagName('form')[0]);
};

window.modifyStabilizationform = function(Stabilizationform){
    if(!Stabilizationform) return;
    var inputs = Stabilizationform.getElementsByTagName('input');
    for(var a=0,l=inputs.length;a<l;a++){
        var Input = inputs[a];
        if(Input.type != "submit") continue;
        var NewInput = document.createElement('input');
        NewInput.type = "button";
        NewInput.id = "Live_" + Input.id;
        NewInput.value = Input.value + lrcMakeText("LIVELINK");
        NewInput.onclick = function(){ processStabilization(this)}
        NewInput.onselect = function(){ processStabilization(this)}
        Input.parentNode.insertBefore(NewInput, Input.nextSibling);
        Input.style.display = "none";
    }
    updatePreviewWindowAttributes();
    LiveRC_RunHooks("AfterPreviewStabilization", data);
    return;
};

window.processStabilization = function(Input){
    var Form = getFormFromThisInput(Input);
    var Params = getFormParams(Form);
    var ParamsInURL = [];
    for(var P in Params){
        if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
    }
    ParamsInURL = ParamsInURL.join("&");
    var action = Form.action;
    var headers = {'Content-Type':'application/x-www-form-urlencoded'};
    wpajax.http({ url: action,
                  method: "POST",
                  headers: headers,
                  data: ParamsInURL,
                  onSuccess:doneStabilization,
                  params:Params
                });
};

window.doneStabilization = function(Req, data){
  var bC  = getPageContent(Req);
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = bC.innerHTML;
  var page = data.params["page"];
  var sothername = lrcGetOtherPagename(page);
  if(data.params["wpWatchthis"] === 1){
    addPageToSuivi(page);
    if(sothername) addPageToSuivi(sothername);
  }else{
    removePageFromSuivi(page);
    if(sothername) removePageFromSuivi(sothername);
  }
  buildPreviewBar({
    "Mode"  : "Article",
    "Url"   : lrcGetPageURL(c),
    "Page"  : c,
    "User1" : (User ? User : false),
    "oldid" : (data.oldid ? data.oldid: false)
  });
  updatePreviewWindowAttributes();
};

/* </source>

==== LiveChangetag ====

<source lang="javascript"> */

window.liveChangetag = function(title, type, paramIds){
  LiveRC_Config["NextPreviewIndex"]++;
  if(!title && type == "logging") title = lrcGetNamespaceName(-1, true) + ":Log";
  var URL = mw.config.get('wgServer') + mw.config.get('wgScript') + '?action=editchangetags&type='+type;
  var Histids = "";
  HistPamamids = "["+paramIds.join(",")+"]";
  for(var a=0,l=paramIds.length;a<l;a++){
    URL += "&ids[" + paramIds[a] + "]=1";
    Histids += paramIds[a] + " ";
  }
  lrcAddToHistory("liveChangetag", [lrcEscapeStr(title), lrcEscapeStr(type), HistPamamids], URL, title + " id="+Histids);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Change tag : <span style='color:red'>"+title+" id="+Histids+"</span>...</b>")
  wpajax.http({ url: URL, onSuccess: getChangetag, title: title, PreviewIndex:LiveRC_Config["NextPreviewIndex"]});
};

window.getChangetag = function(Req, data){
  if(LiveRC_Config["NextPreviewIndex"] != data.PreviewIndex) return;
  var title = data.title;
  var bC  = getPageContent(Req);
  var PreviewDiv = document.getElementById('livePreview');
  PreviewDiv.innerHTML = bC.innerHTML;
  if(PreviewDiv.innerHTML == "undefined") PreviewDiv.innerHTML = bC.xml;
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
    buildPreviewBar({
      "Mode"  : "Changetag",
      "Url"   : lrcGetPageURL(title),
      "Page"  : title,
      "User1" : "",
      "User2" : "",
      "patrolledDiff": true
    });
  getChangetag_ModifyInputs(data);
};

window.getChangetag_ModifyInputs = function(data){
  var Form = document.getElementById("mw-revdel-form-revisions");
  if(!Form) return;
  var Input = document.getElementsByName("wpSubmit")[0];
  if(Input){
    var NewInput = document.createElement('input');
    NewInput.type = "button";
    NewInput.id = "Live_Revisiondelete";
    NewInput.value = Input.value + lrcMakeText("LIVELINK");
    NewInput.onclick = function(){ processChangetag(this)}
    NewInput.onselect = function(){ processChangetag(this)}
    Input.parentNode.insertBefore(NewInput, Input);
    Input.style.display = "none";
  }
  var TagSelect = document.getElementById("mw-edittags-tag-list");
  if(TagSelect){
    var TagList = [];
    for(var tag in LiveRC_Config["ToolTags"]){
      var tag = LiveRC_Config["ToolTags"][tag];
      if(tag && TagList.indexOf(tag) === -1) TagList.push(tag);
    }
    var opt = TagSelect.getElementsByTagName('option');
    for(var a=0,l=opt.length;a<l;a++){
      var optname = opt[a].value;
      if(TagList.indexOf(optname) !== -1) opt[a].style.display = "none";
    }
  }
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewChangetag", data);
};

window.processChangetag = function(Input){
  var Form = getFormFromThisInput(Input);
  var Params = getFormParams(Form);
  if(!Params) return;
  var Page = decodeURIComponent(Params["target"]);
  var Id = Params["ids"];
  var action = Form.action;
  var headers = {'Content-Type':'application/x-www-form-urlencoded'};
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Change tag : <span style='color:red'>"+Page+" id="+Id+"</span>...</b>")
  var ParamsInURL = [];
  for(var P in Params){
    if(typeof(Params[P])=="string") ParamsInURL.push(P+"="+encodeURIComponent(Params[P]));
  }
  wpajax.http({ url: action,
                method: "POST",
                headers: headers,
                data: ParamsInURL.join("&")+"&wpSubmit=1",
                onSuccess:doneChangetag,
                title:Page,
                mid:Id
  });
};

window.doneChangetag = function(xmlreq, data){
  var Page = data.title;
  var Id = data.mid;
  var bC  = getPageContent(xmlreq);
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = bC.innerHTML;
  buildPreviewBar({
      "Mode"            : "Changetag",
      "Url"             : lrcGetPageURL(Page),
      "Page"            : Page,
      "Oldid"           : Id,
      "User1"           : "",
      "User2"           : "",
      "patrolledDiff"   : true,
      "ChangetagOK"     : true
  });
  getChangetag_ModifyInputs();
};

/* </source>

==== LiveInterwiki ====

<source lang="javascript"> */

window.liveInterwiki = function(Code, Title, Params){
  if(!lrcMakeParam("InterwikiPreviewEnabled")) return true;
  var InterwikiInfos = LiveRC_Config["MediawikiInterwikimap"][Code];
  if(!InterwikiInfos) return true;
  var PageURL = InterwikiInfos["url"];
  if(!PageURL) return true;
  LiveRC_Config["NextPreviewIndex"]++;
  PageURL = PageURL.split("$1").join(encodeURIComponent(Title));
  var HistParam = [lrcEscapeStr(Code), lrcEscapeStr(Title)];
  if(Params){
    PageURL += "?"+Params;
    HistParam.push(lrcEscapeStr(Params));
  }
  lrcAddToHistory("liveInterwiki", HistParam, PageURL, Code+":"+Title);
  buildBlanckPreviewBar("<b style='text-decoration: blink;'>Interwiki : <span style='color:red'>"+Code+":"+Title+(Params ? " <small>("+Params+")</small>" : '')+"</span>...</b>");
  var PreviewWindow = document.getElementById("livePreview");
  PreviewWindow.innerHTML = "";
  var frame = document.createElement('iframe');
  frame.width = "100%";
  frame.height = "97%";
  frame.src = PageURL;
  PreviewWindow.appendChild(frame);
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCPreviewDisplayed");
  var Link = document.createElement('a');
  Link.href = PageURL;
  Link.className = "extiw";
  Link.target = "_blank";
  Link.innerHTML = Code+":"+Title+(Params ? " <small>("+Params+")</small>" : '');
  buildBlanckPreviewBar(Link, true);
  updatePreviewWindowAttributes();
  LiveRC_RunHooks("AfterPreviewInterwiki", {code:Code, title:Title});
};

/* </source>

=== Fenêtre de tchat ===

<source lang="javascript"> */

// Création

window. buildTchatWindow = function(){
  var OldTchat = document.getElementById("liveTchat");
  if(OldTchat){
  lrcDisplayDebug("Close tchat window");
    toggleTchatWindow();
    return;
  }
  lrcDisplayDebug("Open tchat window");
  var TargetDiv = document.getElementById("LiveRCContainer");
  if(!TargetDiv) return;
  var DivTchat = document.createElement('div');
  DivTchat.id = "liveTchat";
  lrcaddCustomizableClasses(DivTchat, "liveTchat");
  TargetDiv.appendChild(DivTchat);
  var TchatMoveAnchor = document.createElement('div');
  TchatMoveAnchor.id = "liveTchatMoveAnchor";
  lrcaddCustomizableClasses(TchatMoveAnchor, "LiveRC_MenuAnchor");
  var URL = lrcMakeParam("TchatURL");
  URL = URL.split("$1").join(lrcMakeParam("TchatChannel"));
  URL = URL.split("$2").join(encodeURIComponent(mw.config.get('wgUserName').replace(/ /, "_")));
  var NewWindowLink = document.createElement('a');
  NewWindowLink.id = "NewWindowTchatLink";
  NewWindowLink.href = "javascript:;";
  NewWindowLink.title = lrcMakeText("NewWindowTchatLink_Title");
  NewWindowLink.innerHTML = '[' + lrcMakeText("NewWindowTchatLink_Text") + ']';
  NewWindowLink.onclick = function(){
    deleteTchatWindow();
    var NW = window.open(URL, "NewWindowTchat", "menubar=no,titlebar=no,toolbar=no,location=no,scrollbars=yes,height=500,width=600", false);
    LiveRC_RunHooks("AfterDisplayNewWindowTchat", NW);
    return false;
  };
  TchatMoveAnchor.appendChild(document.createTextNode(lrcMakeText("LiveRC_TchatTitle")));
  TchatMoveAnchor.appendChild(document.createTextNode(" "));
  TchatMoveAnchor.appendChild(NewWindowLink);
  var TchatContent = document.createElement('div');
  TchatContent.id = "liveTchatContent";
  lrcaddCustomizableClasses(TchatContent, "LiveRC_MenuContent");
  var Iframe = document.createElement('iframe');
  Iframe.id = "liveTchatFrame";
  Iframe.src = URL;
  Iframe.width = "99.9%";
  Iframe.height = lrcMakeParam("TchatWindowHeight");
  Iframe.setAttribute("style", "margin-left:3px");
  TchatContent.appendChild(Iframe);
  var TchatResizeAnchor = document.createElement('div');
  TchatResizeAnchor.id = "liveTchatResizeAnchor";
  lrcaddCustomizableClasses(TchatResizeAnchor, "LiveRC_MenuAnchor");
  lrcaddCustomizableClasses(TchatResizeAnchor, "liveTchatResizeAnchor");
  DivTchat.appendChild(TchatMoveAnchor);
  DivTchat.appendChild(TchatContent);
  DivTchat.appendChild(TchatResizeAnchor);
  lrcCloseAll();
  lrcAddClass(document.body, "LiveRCTchatDisplayed");
  LiveRC_SetMoveZone(TchatMoveAnchor, [DivTchat]);
  LiveRC_SetTotalResizeZone(TchatResizeAnchor, [Iframe], DivTchat);
  var HauteurEcran = LiveRC_GetScreenHeight();
  DivTchat.style.bottom = "0px";
  LiveRC_RunHooks("AfterDisplayTchat");
};

// Affichage / Masquage

window.toggleTchatWindow = function(){
    if(lrcHasClass(document.body, "LiveRCTchatDisplayed")){
      lrcRemoveClass(document.body, "LiveRCTchatDisplayed");
    }else{
      lrcAddClass(document.body, "LiveRCTchatDisplayed");
    }
};

window. deleteTchatWindow = function(){
  lrcRemoveClass(document.body, "LiveRCTchatDisplayed");
  var OldTchat = document.getElementById("liveTchat");
  if(OldTchat) OldTchat.parentNode.removeChild(OldTchat);
};

/* </source>

=== Fenêtre de débogage ===

<source lang="javascript"> */

window.LiveRC_CreateDebug = function(){
  var TargetDiv = document.getElementById("LiveRCContainer");
  if(!TargetDiv) return;
  var DivDebug = document.createElement('div');
  DivDebug.id = "liveDebug";
  lrcAddClass(DivDebug, "LiveRC_Opacity_100");
  lrcaddCustomizableClasses(DivDebug, "liveDebug");
  TargetDiv.appendChild(DivDebug);
  var DebugMoveAnchor = document.createElement('div');
  DebugMoveAnchor.id = "liveDebugMoveAnchor";
  lrcaddCustomizableClasses(DebugMoveAnchor, "LiveRC_MenuAnchor");
  DebugMoveAnchor.innerHTML = lrcMakeText("LiveRC_DebugTitle");
  var DebugContent = document.createElement('div');
  DebugContent.id = "liveDebugContent";
  lrcaddCustomizableClasses(DebugContent, "LiveRC_MenuContent");
  lrcaddCustomizableClasses(DebugContent, "liveDebugContent");
  DebugContent.innerHTML = '<ul id="debug_ul"></ul>';
  DivDebug.appendChild(DebugMoveAnchor);
  DivDebug.appendChild(LiveRC_CreateDebugOptions());
  DivDebug.appendChild(DebugContent);
  LiveRCContainer.appendChild(DivDebug);
  LiveRC_SetVerticalResizeZone(DebugMoveAnchor, [DebugContent], DivDebug);
  LiveRC_CheckDebugAjaxSelector();
  LiveRC_CheckDebugErrorsSelector();
  if(lrcMakeOption("DisplayDebug")) LiveRC_OpenDebug();
  LiveRC_RunHooks("AfterDisplayDebug");
};

window.LiveRC_CreateDebugOptions = function(){
  var ClearInput = document.createElement('input');
  ClearInput.type = "button";
  ClearInput.id = "DebugClearButton";
  ClearInput.name = "DebugClearButton";
  ClearInput.value = lrcMakeText("DebugClearButtonLabel");
  ClearInput.onclick = LiveRC_ClearDebug;

  var AjaxInput = document.createElement('input');
  AjaxInput.id = "DebugAjaxSelector";
  AjaxInput.name = "DebugAjaxSelector";
  AjaxInput.type = "checkbox";
  if(lrcMakeOption("Debug_Ajax")) AjaxInput.checked = "checked";
  AjaxInput.onclick = LiveRC_CheckDebugAjaxSelector;
  var AjaxLabel = document.createElement('label');
  AjaxLabel.setAttribute('for', "DebugAjaxSelector");
  AjaxLabel.innerHTML = lrcMakeText("DebugAjaxSelectorLabel");

  var ErrorsInput = document.createElement('input');
  ErrorsInput.id = "DebugErrorsSelector";
  ErrorsInput.name = "DebugErrorsSelector";
  ErrorsInput.type = "checkbox";
  if(lrcMakeOption("Debug_Errors")) ErrorsInput.checked = "checked";
  ErrorsInput.onclick = LiveRC_CheckDebugErrorsSelector;
  var ErrorsLabel = document.createElement('label');
  ErrorsLabel.setAttribute('for', "DebugErrorsSelector");
  ErrorsLabel.innerHTML = lrcMakeText("DebugErrorsSelectorLabel");

  var P = document.createElement('p');
  P.id = "LiveRCDebugOptions";
  P.appendChild(ClearInput);
  P.appendChild(document.createTextNode(" • "));
  P.appendChild(AjaxInput);
  P.appendChild(document.createTextNode(" "));
  P.appendChild(AjaxLabel);
  P.appendChild(document.createTextNode(" • "));
  P.appendChild(ErrorsInput);
  P.appendChild(document.createTextNode(" "));
  P.appendChild(ErrorsLabel);
  return P;
};

window.LiveRC_ClearDebug = function(){
  var DebugUl = document.getElementById("debug_ul");
  if(DebugUl){
    while(DebugUl.firstChild){ DebugUl.removeChild(DebugUl.firstChild); }
  }
};

window.LiveRC_CheckDebugAjaxSelector = function(){
  var Input = document.getElementById("DebugAjaxSelector");
  var DebugContent = document.getElementById("liveDebugContent");
  if(!Input || !DebugContent) return;
  if(Input.checked){
    lrcRemoveClass(DebugContent, "NoAjax");
  }else{
    lrcAddClass(DebugContent, "NoAjax");
  }
};

window.LiveRC_CheckDebugErrorsSelector = function(){
  var Input = document.getElementById("DebugErrorsSelector");
  var DebugContent = document.getElementById("liveDebugContent");
  if(!Input || !DebugContent) return;
  if(Input.checked){
    lrcAddClass(DebugContent, "OnlyErrors");
  }else{
    lrcRemoveClass(DebugContent, "OnlyErrors");
  }
};

window.LiveRC_OpenDebug = function(){
  lrcAddClass(document.body, "LiveRCDebugDisplayed");
};

window.LiveRC_CloseDebug = function(){
    lrcRemoveClass(document.body, "LiveRCDebugDisplayed");
};

window.lrcDisplayDebug = function(text, Ajax, error){
  if(!text || text == "") return;
//  LiveRC_alert(text);
  var Heures = LiveRC_Config["ClockTime"]["H"];
  var Minutes = LiveRC_Config["ClockTime"]["M"];
  var Secondes = LiveRC_Config["ClockTime"]["S"];
  var Timestamp = (Heures<10?'0':'') + Heures + ':' + (Minutes<10?'0':'') + Minutes + ':' + (Secondes<10?'0':'') + Secondes;
  var Li = document.createElement('li');
  if(Ajax) lrcAddClass(Li, "Ajax");
  if(error) lrcAddClass(Li, "error");
  else lrcAddClass(Li, "noerror");
  Li.innerHTML = '<span class="TS">' + Timestamp + '</span> : <code>' + text + '</code>';
  var DebugUl = document.getElementById("debug_ul");
  if(DebugUl){
    while(LiveRC_Config["PendingDebug"].length>0){
      var PreviousLi = LiveRC_Config["PendingDebug"][0];
      if(!PreviousLi) break;
      DebugUl.insertBefore(PreviousLi, DebugUl.firstChild);
      LiveRC_Config["PendingDebug"].shift();
    }
    DebugUl.insertBefore(Li, DebugUl.firstChild);
  }else{
    LiveRC_Config["PendingDebug"].push(Li);
  }
};

window.lrcToggleLogo = function(state){
  var Logo = document.getElementById("lrcLogo");
  var AnimatedLogo = document.getElementById("lrcAnimatedLogo");
  if(!Logo || !AnimatedLogo) return;
  if(!state){
    Logo.style.display = "";
    AnimatedLogo.style.display = "none";
  }else{
    Logo.style.display = "none";
    AnimatedLogo.style.display = "";
  }
};

/* </source>

=== Lancement ===

<source lang="javascript"> */

window.LiveRC_LoadUsing = function(using, func){
  $.when.apply( $, $.map(using, function ( url ) {
    return $.ajax({ url: url, dataType: 'script', cache: true });
  })).done(func);
};

  // Activation horloge
lrcClockTimer();lrcDisplayDebug("Activate Clock");

  // Chargement styles globaux
mw.loader.load(LiveRC_Config["HostServerPath"]+'MediaWiki:Gadget-LiveRC.css&action=raw&ctype=text/css', 'text/css');
mw.loader.load(LiveRC_Config["HostServerPath"]+'MediaWiki:Gadget-LiveRC.css/GlobalStyles.css&action=raw&ctype=text/css', 'text/css');

  // Chargement styles locaux
mw.loader.load(lrcGetUglyPageURL(LiveRC_Config["CSSPage"], '&action=raw&ctype=text/css'), 'text/css');

  // Chargement styles utilisateur
mw.loader.load(lrcGetUglyPageURL('User:'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.css', '&action=raw&ctype=text/css'), 'text/css');


  // Chargements scripts
mw.loader.using('mediawiki.api', function(){
  var LiveRC_Modules = [];
  LiveRC_Modules.push(LiveRC_Config["HostServerPath"]+'MediaWiki:Gadget-LiveRC.js/CSS.js&action=raw&ctype=text/javascript');
  LiveRC_Modules.push(lrcGetUglyPageURL(LiveRC_Config["SiteConfigPage"], '&action=raw&ctype=text/javascript'));
  if(mw.config.get('wgServer')==='//fr.wikipedia.org')
    LiveRC_Modules.push(lrcGetUglyPageURL(LiveRC_Config["InstallationPage"], '&action=raw&ctype=text/javascript'));
  LiveRC_Modules.push(lrcGetUglyPageURL('User:'+mw.config.get('wgUserName')+LiveRC_Config["UserParamPage"]+'.js', '&action=raw&ctype=text/javascript'));

  LiveRC_LoadUsing( LiveRC_Modules, function(){
    if(LiveRC_Config["LiveRCRunning"]===true) return;
    LiveRC_Config["LiveRCRunning"] = true;
    LiveRC_Config["LoadingTime"] = (new Date()).getTime();
    LiveRC_Config["OldExtensions"] = [];
    for(var a=0,l=lrcExtensions.length;a<l;a++){
      LiveRC_Config["OldExtensions"].push(lrcExtensions[a].name);
    }
    lrcDisplayDebug('Get configuration items');
    if(typeof(LiveRC_getSiteConfig)==="function") try{ LiveRC_getSiteConfig(); }catch(e){ }
    if(typeof(LiveRC_getSiteCustom)==="function") try{ LiveRC_getSiteCustom(); }catch(e){ }
    if(typeof(LiveRC_getUserCustom)==="function") try{ LiveRC_getUserCustom(); }catch(e){ }
    if(typeof(LiveRC_getSpecialCustom)==="function") try{ LiveRC_getSpecialCustom(); }catch(e){ }
    LiveRC_Config["LiveRCTag"] = (LiveRC_Config["ToolTags"]["LiveRC"] || "");
    var ExtensionstoLoad = [];
    var ExtensionArray = lrcExtensions_Custom;
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = Custom_lrcExtensions;
    if(!ExtensionArray || ExtensionArray.length == 0) ExtensionArray = lrcExtensions;
    for(var ArrayName in ExtensionArray){
      var ThisArray = ExtensionArray[ArrayName];
      var ExtensionName = ThisArray["name"];
      if(LiveRC_Config["UsedLiveRCExtensions"].indexOf(ExtensionName) !== -1){
        ExtensionstoLoad.push( ThisArray["url"] + '&action=raw&ctype=text/javascript' );
      }
    }
    if(LiveRC_Config["UsedLiveRCExtensions"].length === 0){
      lrcDisplayDebug("No extension used");
      LiveRC_InitActivationProcess();
    }else{
      var extcount = LiveRC_Config["UsedLiveRCExtensions"];
      lrcDisplayDebug("Found "+extcount.length+" extensions to install: "+lrcCreateToggleLinkText()+'<span style="display:none;"><br />[ '+extcount.join(", ")+" ]</span>");
      LiveRC_LoadUsing(ExtensionstoLoad, function(){
        LiveRC_InitActivationProcess();
      });
    }
  });
});

/* </source> */
