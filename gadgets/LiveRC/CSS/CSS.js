/* ***********************************************************

  Styles CSS de LiveRC personnalisables 

{{Catégorisation JS|LiveRC}}
<source lang=javascript>
*********************************************************** */

  window.lrcCSSstyles = [ 
    {target:"#liveRC_RCList",
     style:"background: url('//upload.wikimedia.org/wikipedia/commons/thumb/d/d0/LiveRC_centered.png/1000px-LiveRC_centered.png') no-repeat scroll center center transparent;",
     desc:"Arrière-plan : Table RC"  
    },
    {target:"#TitleTable",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/b/ba/Double_Gradient_60px_V.png');background-position: center bottom;background-repeat: repeat;",
     desc:"Arrière-plan : Titre"  
    },
    {target:".LiveRC_MenuAnchor",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/c/cc/Double_Gradient_60px_V_50%25.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Barres de titre"  
    }, 
    {target:"#livePreviewFoot, #livePreviewFoot td:hover",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/b/ba/Double_Gradient_60px_V.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Barre de commande RC"  
    }, 
    {target:"#tabRC .th0RC",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/8/8c/Double_Gradient_60px_H.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Lignes RC (première case)"  
    }, 
    {target:"#tabRC .th1RC, #tabRC .td2RC, #tabRC .td3RC, #tabRC .td4RC, #tabRC .td5RC",
     style:"background-image: url('//upload.wikimedia.org/wikipedia/commons/2/2f/Double_Gradient_60px.png');background-position: center top;background-repeat: repeat;",
     desc:"Arrière-plan : Lignes RC (autres cases)"  
    }, 
    {target:"#LiveRCButtons a:hover img", 
     style:"background-color:silver;border:1px solid gray;",
     desc:"Surbrillance : Boutons de contrôle"   
    },
    {target:"#livePreviewFoot td:hover, .RCFilterCheckList li:hover",
     style:"background-color:silver;",
     desc:"Surbrillance : Barre de contrôle"  
    }, 
    {target:"#tabRC .rcLine:hover, #tabRC .rcLine:hover td, #tabRC .rcLine:hover th",
     style:"background-color:silver !important;",
     desc:"Surbrillance : Ligne RC (ligne complète)"
    },
    {target:"#tabRC .rcLine:hover td:hover, #tabRC .rcLine:hover th:hover", 
     style:"background-color:DarkGray !important;",
     desc:"Surbrillance : Ligne RC (cellule)"
    },
    {target:"#livePreviewTitle a:hover", 
     style:"border:1px solid grey !important;background-color:silver !important;",
     desc:"Surbrillance : Liens de la barre de titre de prévisualisation"
    },
    {target:"#liveFollow li:hover", 
     style:"background-color:silver !important;",
     desc:"Surbrillance : Ligne de journal de suivi (ligne complète)"
    },
    {target:"#liveFollow li li:hover", 
     style:"background-color:DarkGray !important;",
     desc:"Surbrillance : Ligne de journal de suivi (détail)"
    },
    {target:".ParamMenuLi:hover", 
     style:"border:1px solid gray !important;background-color:silver !important;",
     desc:"Surbrillance : Lignes du menu de configuration"
    },
    {target:"#liveDebugContent li:hover", 
     style:"background-color: silver;",
     desc:"Surbrillance : Lignes du panneau de débogage"
    },
    {target:".RcLog .th0RC",
     style:"background-color:LightBlue;",
     desc:"Ligne RC : Journal"  
    },
    {target:".RcWatched .th0RC",        
     style:"border:3px solid gold;box-shadow: 0px 0px 2px 2px Tomato inset;",
     desc:"Ligne RC : Page suivie"  
    },
    {target:".RcContact .th0RC",        
     style:"border:3px solid gold;box-shadow: 0px 0px 2px 2px SteelBlue inset;",
     desc:"Ligne RC : Utilisateur suivi" 
    },
    {target:".RcChecked .th0RC",        
     style:"box-shadow:0px 0px 8px 2px #00CC00 inset !important;",
     desc:"Ligne RC : Page vérifiée"
    },
    {target:".RcNotification .th0RC, .RcNotification .th1RC",
     style:"background-color:IndianRed;color:white;",
     desc:"Ligne RC : Notification"  
    }, 
    {target:".RcFeedback .th1RC",        
     style:"background-color:#AA9E60;",
     desc:"Ligne RC : Retour de lecteur"  
    }, 
    {target:".RcAbuselog .th1RC",        
     style:"background-color:#FFBE60;",
     desc:"Ligne RC : Détection du filtre anti-abus"  
    }, 
    {target:".RcAbusefilter .th1RC",        
     style:"background-color:Gold;",
     desc:"Ligne RC : Modification du filtre anti-abus"  
    }, 
    {target:".RcUpload .th1RC",        
     style:"background-color:#D1CAFA;",
     desc:"Ligne RC : Import de fichier"  
    }, 
    {target:".RcImport .th1RC",        
     style:"background-color:Moccasin;",
     desc:"Ligne RC : Import de page"  
    }, 
    {target:".RcNewUser .th1RC",        
     style:"background-color:#C6FF6D;",
     desc:"Ligne RC : Nouvel utilisateur"  
    }, 
    {target:".RcBlock .th1RC",        
     style:"background-color:#EECC84;",
     desc:"Ligne RC : Blocage"  
    }, 
    {target:".RcDelete .th1RC",        
     style:"background-color:#E7CAA7;",
     desc:"Ligne RC : Suppression"  
    },
    {target:".RcMove .th1RC",        
     style:"background-color:#FDC5FF;",
     desc:"Ligne RC : Renommage"  
    }, 
    {target:".RcProtect .th1RC",        
     style:"background-color:#B2BCC6;",
     desc:"Ligne RC : Protection"  
    },
    {target:".RcRights .th1RC",        
     style:"background-color:#FF8080;",
     desc:"Ligne RC : Changement de statut"  
    }, 
    {target:".RcRenameuser .th1RC",        
     style:"background-color:MediumAquamarine;",
     desc:"Ligne RC : Renommage utilisateur"  
    },
    {target:".RcThanks .th1RC",        
     style:"background-color:pink;",
     desc:"Ligne RC : Remerciement utilisateur"  
    },
    {target:".RcMassMessage .th1RC",        
     style:"background-color:darkGrey;",
     desc:"Ligne RC : Message de masse"  
    },
    {target:".RcPagetriageDeletion .th1RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - tag de suppression"  
    }, 
    {target:".RcPagetriageCuration .th1RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - amélioration"  
    }, 
    {target:".RcReview .th1RC",        
     style:"background-color:Peru;",
     desc:"Ligne RC : Relecture"  
    }, 
    {target:".RcStable .th1RC",        
     style:"background-color:Chocolate;",
     desc:"Ligne RC : Stabilisation"  
    }, 
    {target:".RcOversight .th1RC",        
     style:"background-color:Purple;",
     desc:"Ligne RC : Masquage de modification"  
    }, 
    {target:".RcCheckuser .th1RC",        
     style:"background-color:Thistle;",
     desc:"Ligne RC : Vérification d’utilisateur"  
    }, 
    {target:".RcEducationProgram .th1RC",        
     style:"background-color:PeachPuff;",
     desc:"Ligne RC : Programme éducatif"  
    },
    {target:".RcLiquidThreads .th1RC", 
     style:"background-color:LightCyan;",
     desc:"Ligne RC : LiquidThreads"   
    },
    {target:".RcPageTranslation .th1RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : PageTranslation"   
    },
    {target:".RcTranslatorSandbox .th1RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslatorSandbox"   
    },
    {target:".RcTranslationReview .th1RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslationReview"   
    },
    {target:".RcNotifyTranslators .th1RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : NotifyTranslators"   
    },
    {target:".RcOAuth .th1RC", 
     style:"background-color:MistyRose;",
     desc:"Ligne RC : OAuth"   
    },
    {target:".RcMoodBar .th1RC", 
     style:"background-color:DarkKhaki;",
     desc:"Ligne RC : MoodBar"   
    },
    {target:".RcManagetags .th1RC", 
     style:"background-color:DarkSalmon;",
     desc:"Ligne RC : Managetags"   
    },
    {target:".RcChangetag .th1RC", 
     style:"background-color:LightSalmon;",
     desc:"Ligne RC : Tag"   
    },
    {target:".RcFlow .th1RC",        
     style:"background-color:Gold;",
     desc:"Ligne RC : Flow"  
    },
    {target:".RcNew .th1RC",        
     style:"background-color:#bdffb2;border:3px solid Lime !important;box-shadow: 0px 0px 3px 1px Tomato inset;",
     desc:"Ligne RC : Nouvelle page"  
    },
    {target:".RcNotReviewed .th1RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Modification en attente de validation"  
    },
    {target:".RcReverted .td2RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Utilisateur révoqué"  
    }, 
    {target:".RcIp .td2RC",        
     style:"background-color:white;",
     desc:"Ligne RC : Utilisateur IP"  
    }, 
    {target:".RcNewbie .td2RC",        
     style:"background-color:#bdffb2;",
     desc:"Ligne RC : Utilisateur débutant"  
    }, 
    {target:".RcPatrolled .td2RC",        
     style:"background-color:#b2b2b2;",
     desc:"Ligne RC : Utilisateur autopatrolled"  
    },
    {target:".RcSysop .td2RC",
     style:"background-color:#b2b2b2; box-shadow: 0px 0px 3px 1px #555 inset;",
     desc:"Ligne RC : Utilisateur administrateur"  
    },
    {target:".RcBot .td2RC",
     style:"background-color:#a2a2a2; box-shadow: 0px 0px 3px 1px #000 inset;",
     desc:"Ligne RC : Utilisateur bot"  
    },
    {target:".RcSelf .td2RC",        
     style:"background-color:#a0b0e0 !important;",
     desc:"Ligne RC : Soi-même" 
    }, 
    {target:".RcTag .td3RC",        
     style:"border:2px solid red !important;",
     desc:"Ligne RC : Déclenchement de filtre"  
    },
    {target:"#tabRC .tagTemplate", 
     style:"color: red; font-weight: bold;",
     desc:"Ligne RC : Balises de filtrage"   
    },
    {target:".Rctd5NotEmpty .td5RC",        
     style:"background-color:Cornsilk;",
     desc:"Ligne RC : Commentaire de modification détecté"  
    }, 
    {target:".RcRevert .td5RC",        
     style:"border:3px solid red !important;",
     desc:"Ligne RC : Révocation"  
    },
    {target:".RcReplaced .td5RC",        
     style:"border:3px solid orange !important;",
     desc:"Ligne RC : Remplacement"  
    },
    {target:".RcBlanking .td5RC",        
     style:"border:3px solid white !important;",
     desc:"Ligne RC : Blanchiment"  
    },
    {target:".RcExternal th, .RcExternal td",        
     style:"background-color:#CFBE90 !important;",
     desc:"Ligne RC : Modification externe (wikidata)"  
    }, 
    {target:".hidelineLink", 
     style:"padding:3px;color:red;",
     desc:"Lien : Suppression de ligne (journaux de suivi)"  
    }, 
    {target:".RedirectPageLink", 
     style:"color: green;font-weight:bold;font-style:italic;",
     desc:"Lien : Redirection"  
    },
    {target:".HomonPageLink", 
     style:"color:darkorange;font-weight:bold;font-style:italic;",
     desc:"Lien : Homonymie"  
    },
    {target:".diffDiffLink", 
     style:"color:orange;",
     desc:"Lien : Diff"   
    }, 
    {target:".newpageDiffLink", 
     style:"color:green;",
     desc:"Lien : New"   
    }, 
    {target:".uploadDiffLink", 
     style:"color:darkslateblue;",
     desc:"Lien : Upload"   
    }, 
    {target:".importDiffLink", 
     style:"color:OrangeRed;",
     desc:"Lien : Import"   
    }, 
    {target:".newusersDiffLink", 
     style:"color:darkGreen;",
     desc:"Lien : New user"   
    }, 
    {target:".blockDiffLink", 
     style:"color:darkgoldenrod;",
     desc:"Lien : Block"   
    }, 
    {target:".gblblockDiffLink", 
     style:"color:darkgoldenrod;",
     desc:"Lien : Gblblock"   
    }, 
    {target:".deleteDiffLink", 
     style:"color:saddlebrown;",
     desc:"Lien : Delete"   
    }, 
    {target:".moveDiffLink", 
     style:"color:black;",
     desc:"Lien : Move"   
    }, 
    {target:".protectDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Protect"   
    }, 
    {target:".feedbackDiffLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Articlefeedbackv5"   
    }, 
    {target:".abusefilterDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Abusefilter"   
    }, 
    {target:".abuselogDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Abuselog"   
    }, 
    {target:".abuselogdiffDiffLink", 
     style:"color:red;",
     desc:"Lien : Diff (Abuselog)"   
    }, 
    {target:".renameuserDiffLink", 
     style:"color:SlateGray;",
     desc:"Lien : Renameuser"   
    }, 
    {target:".gblrenameDiffLink", 
     style:"color:SlateGray;",
     desc:"Lien : Gblrename"   
    }, 
    {target:".rightsDiffLink", 
     style:"color:DeepSkyBlue;",
     desc:"Lien : Userrights"   
    }, 
    {target:".gblrightsDiffLink", 
     style:"color:DeepSkyBlue;",
     desc:"Lien : Gbluserrights"   
    }, 
    {target:".thanksDiffLink", 
     style:"color:IndianRed;",
     desc:"Lien : Thanks"   
    }, 
    {target:".massmessageDiffLink", 
     style:"color:white;",
     desc:"Lien : Massmessage"   
    }, 
    {target:".pagetriageDeletionDiffLink", 
     style:"color:darkRed;",
     desc:"Lien : Pagetriage-deletion"   
    }, 
    {target:".pagetriageCurationDiffLink", 
     style:"color:MidnightBlue;",
     desc:"Lien : Pagetriage-curation"   
    }, 
    {target:".reviewDiffLink", 
     style:"color:black;",
     desc:"Lien : Review"   
    }, 
    {target:".reviewdiffDiffLink", 
     style:"color:red;",
     desc:"Lien : Diff (Review)"   
    }, 
    {target:".stableDiffLink", 
     style:"color:white;",
     desc:"Lien : Stable"   
    }, 
    {target:".oversightDiffLink", 
     style:"color:white;",
     desc:"Lien : Suppress"   
    }, 
    {target:".checkuserDiffLink", 
     style:"color:Indigo;",
     desc:"Lien : Checkuser"   
    }, 
    {target:".educationprogramDiffLink", 
     style:"color:DarkSlateGray;",
     desc:"Lien : Education program"   
    }, 
    {target:".liquidthreadsDiffLink", 
     style:"color:Teal;",
     desc:"Lien : Liquidthreads"   
    }, 
    {target:".translationreviewDiffLink", 
     style:"color:white;",
     desc:"Lien : Translationreview"   
    },
    {target:".translatorsandboxDiffLink", 
     style:"color:white;",
     desc:"Lien : Translatorsandbox"   
    },
    {target:".notifytranslatorsDiffLink", 
     style:"color:white;",
     desc:"Lien : Notifytranslators"   
    },
    {target:".pagetranslationDiffLink", 
     style:"color:white;",
     desc:"Lien : Pagetranslation"   
    },
    {target:".mwoauthconsumerDiffLink", 
     style:"color:MediumOrchid;",
     desc:"Lien : Mwoauthconsumer"   
    },
    {target:".moodbarDiffLink", 
     style:"color:SaddleBrown;",
     desc:"Lien : MoodBar"   
    },
    {target:".managetagsDiffLink", 
     style:"color:DeepPink;",
     desc:"Lien : Managetags"   
    },
    {target:".tagDiffLink", 
     style:"color:MediumVioletRed;",
     desc:"Lien : Tag"   
    },
    {target:".interwikiDiffLink", 
     style:"color:BlueViolet;",
     desc:"Lien : Interwiki"   
    },
    {target:".externalDiffLink", 
     style:"color:black !important;",
     desc:"Lien : Wikidata"   
    },
    {target:".flowDiffLink", 
     style:"color:Teal;",
     desc:"Lien : Flow"   
    },
    {target:".historyLink", 
     style:"color:darkorange !important;",
     desc:"Lien : Historique"   
    }, 
    {target:".editLink", 
     style:"color:OrangeRed !important;",
     desc:"Lien : Modifier"   
    }, 
    {target:".moveLink", 
     style:"color:tomato !important;",
     desc:"Lien : Renommer"   
    }, 
    {target:".deleteLink", 
     style:"color:orangered !important;",
     desc:"Lien : Supprimer"   
    }, 
    {target:".protectLink", 
     style:"color:coral !important;",
     desc:"Lien : Protéger"   
    }, 
    {target:".stableLink", 
     style:"color:Chocolate !important;",
     desc:"Lien : Stabiliser"   
    }, 
    {target:".pagetalkLink", 
     style:"color:seagreen !important;",
     desc:"Lien : Discuter (page)"   
    },  
    {target:".usertalkLink", 
     style:"color:seagreen !important;",
     desc:"Lien : Discuter (utilisateur)"   
    }, 
    {target:".usercontribLink", 
     style:"color:#43CD80 !important;",
     desc:"Lien : Contributions"   
    }, 
    {target:".userdeletedcontribLink", 
     style:"color:#43CD80 !important;",
     desc:"Lien : Contributions supprimées"   
    }, 
    {target:".pagewatchLink", 
     style:"color:RoyalBlue !important;",
     desc:"Lien : Suivre (page)"   
    }, 
    {target:".pageunwatchLink", 
     style:"color:RoyalBlue !important;",
     desc:"Lien : Ne plus suivre (page)"   
    }, 
    {target:".pagehideLink", 
     style:"color:grey;",
     desc:"Lien : Masquer (page)"   
    },
    {target:".userwatchLink", 
     style:"color:black !important;",
     desc:"Lien : Suivre (utilisateur)"   
    }, 
    {target:".userunwatchLink", 
     style:"color:#AAAA00 !important;",
     desc:"Lien : Ne plus suivre (utilisateur)"   
    }, 
    {target:".userblockLink", 
     style:"color:seagreen !important;",
     desc:"Lien : Bloquer"   
    }, 
    {target:".userhideLink", 
     style:"color:grey;",
     desc:"Lien : Masquer (utilisateur)"   
    },
    {target:"#n-liveRC ul", 
     style:"font-size: 80%;",
     desc:"Taille texte : Liens suivre/masquer dans la barre de gauche"   
    },
    {target:".LiveRCContainerFS", 
     style:"font-size:13px;",
     desc:"Taille texte : LiveRC général"   
    },
    {target:"#LiveRCTitle .error", 
     style:"font-size: 11px;",
     desc:"Taille texte : Message d’erreur version"   
    },
    {target:".RCFilterCheckListFS input, .RCFilterCheckListFS select", 
     style:"font-size:10px;",
     desc:"Taille texte : Boutons et menus déroulants dans les checklists"   
    },
    {target:".divTabRCFS", 
     style:"font-size:11px;",
     desc:"Taille texte : Table des RC"   
    },
    {target:".LiveRCAlertFS li", 
     style:"font-size:12px !important;",
     desc:"Taille texte : Message d’alerte"   
    },
    {target:"#tabRC .MiniDiffPreviewTDFS", 
     style:"font-size:10px !important;",
     desc:"Taille texte : Cadre de diff du mini-diff"   
    },
    {target:".LiveRC_MenuAnchorFS", 
     style:"font-size:16px;",
     desc:"Taille texte : Titre de fenêtre / zone de redimensionnement"   
    },
    {target:".LiveRC_MenuAnchorFS input", 
     style:"font-size: 10px;",
     desc:"Taille texte : Boutons dans les barres de titre/zones de redimentionnement"   
    },
    {target:".LiveRC_MenuAnchorFS select", 
     style:"font-size: 11px;",
     desc:"Taille texte : Menus déroulants dans les barres de titre/zones de redimentionnement "   
    },
    {target:"#livePreviewFirstTitle", 
     style:"font-size:16px;",
     desc:"Taille texte : Lien principal dans la barre de titre de prévisualisation'"   
    },
    {target:".LiveRC_MenuContentFS", 
     style:"font-size:80%;",
     desc:"Taille texte : Contenu d’une fenêtre"   
    },
    {target:"#NewWindowTchatLink", 
     style:"font-size:11px;",
     desc:"Taille texte : Lien tchat dans une nouvelle fenêtre"   
    },
    {target:"#ToggleButtons input, .ActionButtons input", 
     style:"font-size:11px;",
     desc:"Taille texte : Boutons du menu de configuration"   
    },
    {target:".lrcIcons_Label, .Texts_Label", 
     style:"font-size:130%;",
     desc:"Taille texte : Description des icônes et des textes dans le menu de configuration"   
    },
    {target:".livePreviewTitleFS", 
     style:"font-size:12px;",
     desc:"Taille texte : Barre de titre de prévisualisation"   
    },
    {target:"#LiveRC_FollowContent", 
     style:"font-size:13px;",
     desc:"Taille texte : Contenu de la fenêtre des journaux de suivi spéciaux"   
    },
    {target:"#LiveRC_FollowButtons input", 
     style:"font-size:11px;",
     desc:"Taille texte : Boutons dans la fenêtre des journaux de suivi spéciaux"   
    },
    {target:".FollowList", 
     style:"font-size:11px !important;",
     desc:"Taille texte : Élément des journaux de suivi spéciaux"   
    },
    {target:".FollowSublist", 
     style:"font-size:9px !important;",
     desc:"Taille texte : Sous-élément des journaux de suivi spéciaux"   
    },
    {target:".LiveRC_HistoryFS", 
     style:"font-size:13px;",
     desc:"Taille texte : Fenêtre de l’historique des prévisualisation"   
    },
    {target:".LiveRCContainerBG", 
     style:"background-color:gray;",
     desc:"Couleur fond : Cadre de LiveRC"   
    },
    {target:".FixedTitlePanelBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : Cadre du haut"   
    },
    {target:".OutFixedBottomPanelBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : Cadre du bas"   
    },
    {target:".RCFilterCheckListBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : Checklists de la barre de contrôle des RC"   
    },
    {target:".tabRCBG", 
     style:"background-color:#E0E0EE;",
     desc:"Couleur fond : Table des RC"   
    },
    {target:".rcLineBG td, .rcLineBG th", 
     style:"background-color:#F0F0FF; ",
     desc:"Couleur fond : Ligne RC"   
    },
    {target:"#tabRC .MiniDiffClosePreviewTD", 
     style:"background-color:#F0F0FF;",
     desc:"Couleur fond : Première case du mini-diff"   
    },
    {target:"#tabRC .MiniDiffPreviewTDBG", 
     style:"background-color:white !important; ",
     desc:"Couleur fond : Cadre de diff du mini-diff"   
    },
    {target:".liveFollowBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : Fenêtre des journaux spéciaux de suivi"   
    },
    {target:".LiveRC_PreviewBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : Fenêtre de prévisualisation"   
    },
    {target:".LiveRC_HistoryBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : Fenêtre de l’historique des prévisualisations"   
    },
    {target:".liveDebugBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : Fenêtre de débogage"   
    },
    {target:".liveDebugContentBG", 
     style:"background-color: white;",
     desc:"Couleur fond : Contenu de la fenêtre de débogage"   
    },
    {target:".LiveRCAlertBG li", 
     style:"background-color:white;",
     desc:"Couleur fond : Message d’alerte"   
    } ,
    {target:".LiveRCAlertBG li li", 
     style:"background-color:#F0F0F0;",
     desc:"Couleur fond : Élément de liste dans un message d’alerte"   
    },
    {target:".LiveRCAlertBG fieldset", 
     style:"background-color: #F9F9F9;",
     desc:"Couleur fond : Cadre dans un message d’alerte"   
    },
    {target:".LiveRC_MenuAnchorBG", 
     style:"background-color:DarkGray !important;",
     desc:"Couleur fond : Titre de fenêtre / zone de redimensionnement"   
    },
    {target:".liveTchatBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : Fenêtre de tchat"   
    },
    {target:".ParamMenuLiBG", 
     style:"background-color:#E8E8FF;",
     desc:"Couleur fond : Élément du menu de configuration"   
    },
    {target:".livePreviewBG", 
     style:"background-color:white !important;box-shadow: 0px 0px 3px 3px #FFF;",
     desc:"Couleur fond : Prévisualisation"   
    },
    {target:".FixedLiveRCContainer", 
     style:"background-color:#FFFFFF !important;",
     desc:"Couleur fond : Cadre principal de LiveRC"   
    },
    {target:"#OtherContainer", 
     style:"background-color:#FFFFFF !important;",
     desc:"Couleur fond : Cadre principal hors LiveRC"   
    },
    {target:".LiveRCButtonsBG img", 
     style:"background-color:IndianRed;",
     desc:"Couleur fond : Boutons de contrôle inactifs"   
    },
    {target:".LiveRCButtonsBG .OnButton img", 
     style:"background-color:GreenYellow;",
     desc:"Couleur fond : Boutons de contrôle actifs"   
    },
    {target:".FixedTitlePanelBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Cadre du haut"   
    },
    {target:".OutFixedBottomPanelBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Cadre du bas"   
    },
    {target:".livePreviewFootBD", 
     style:"border-top: 1px solid gray;",
     desc:"Bordure : Barre de contrôle des RC"   
    },
    {target:".RCFilterCheckListBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Checklist de la barre de contrôle des RC"   
    },
    {target:".liveRC_RCListBD", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : Cadre déroulant de la table des RC"   
    },
    {target:".tabRCBD", 
     style:"border-bottom:1px solid gray;",
     desc:"Bordure : Table des RC"   
    },
    {target:".rcLineBD td, .rcLineBD th", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : Cases d’une ligne RC"   
    },
    {target:".tabRCBD .th1RC, .tabRCBD .td2RC, .tabRCBD .td3RC, .tabRCBD .td4RC", 
     style:"border-right:1px dotted silver;",
     desc:"Bordure : Cases 1, 2, 3 et 4 d’une ligne RC"   
    },
    {target:".tabRCBD .th1RC", 
     style:"border-left:1px solid gray;",
     desc:"Bordure : Case 1 d’une ligne RC"   
    },
    {target:".tabRCBD .td5RC", 
     style:"border-right:1px solid gray;",
     desc:"Bordure : Case 5 d’une ligne RC"   
    },
    {target:".tabRCBD .MiniDiffPreviewTDBD", 
     style:"border:1px solid gray;border-top:1px solid silver;",
     desc:"Bordure : Cadre de diff du mini-diff"   
    },
    {target:".tabRCBD .MiniDiffClosePreviewTDBD", 
     style:"border-bottom:1px solid gray !important;",
     desc:"Bordure : Première case du mini-diff"   
    },
    {target:".LiveRCButtonsBD img", 
     style:"border:1px solid red;",
     desc:"Bordure : Boutons de contrôle inactifs"   
    },
    {target:".LiveRCButtonsBD .OnButton img", 
     style:"border:1px solid green;",
     desc:"Bordure : Boutons de contrôle actifs"   
    },
    {target:".liveFollowBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Fenêtre des journaux spéciaux de suivi"   
    },
    {target:".LiveRC_PreviewBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Fenêtre de prévisualisation (en bas)"   
    },
    {target:"#FixedTopPanel .LiveRC_PreviewBD", 
     style:"border:none !important;",
     desc:"Bordure : Fenêtre de prévisualisation (en haut)"   
    },
    {target:".LiveRC_HistoryBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Fenêtre de l’historique des prévisualisations (en bas)"   
    },
    {target:"#FixedTopPanel .LiveRC_HistoryBD", 
     style:"border:none !important;",
     desc:"Bordure : Fenêtre de l’historique des prévisualisations (en haut)"   
    },
    {target:".liveDebugBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Fenêtre de débogage"   
    },
    {target:".liveDebugContentBD", 
     style:"border: 1px dotted silver;",
     desc:"Bordure : Contenu de la fenêtre de débogage"   
    },
    {target:".liveDebugContentBD li", 
     style:"border-bottom: 1px dotted silver;",
     desc:"Bordure : Ligne de la fenêtre de débogage"   
    },
    {target:".LiveRCAlertBD li", 
     style:"border:1px solid #DDDDDD;",
     desc:"Bordure : Message d’alerte"   
    },
    {target:".LiveRC_MenuAnchorBD", 
     style:"border:1px solid DimGray;",
     desc:"Bordure : Titre de fenêtre / zone de redimensionnement"   
    },
    {target:".LiveRC_MenuContentBD", 
     style:"border:1px solid LightGrey;",
     desc:"Bordure : Contenu d’une fenêtre"   
    },
    {target:".liveTchatBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : Fenêtre de tchat"   
    },
    {target:".ParamMenuLiBD", 
     style:"border:1px solid silver;",
     desc:"Bordure : Élément du menu de configuration"   
    },
    {target:".livePreviewTitleBD a", 
     style:"border:1px solid transparent;",
     desc:"Bordure : Lien dans la barre de titre de prévisualisation"   
    },
    {target:"#FixedTopPanel", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : Cadre du haut"   
    },
    {target:"#LiveRC_FollowButtons", 
     style:"border-bottom:1px solid grey;",
     desc:"Bordure : Boutons de la fenêtre des journaux de suivi spéciaux"   
    },
    {target:"#liveFollow td", 
     style:"border-left:1px solid grey;",
     desc:"Bordure : Journal de suivi spécial"   
    },
    {target:".FixedTitlePanelBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Barre de titre"   
    },
    {target:".LiveRCButtonsBR img", 
     style:"border-radius:3px;",
     desc:"Arrondi : Boutons de contrôle"   
    },
    {target:".OutFixedBottomPanelBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Cadre du bas"   
    },
    {target:".liveFollowBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Fenêtre des journaux spéciaux de suivi"   
    },
    {target:".LiveRC_PreviewBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Fenêtre de prévisualisation (en bas)"   
    },
    {target:"#FixedTopPanel .LiveRC_PreviewBR", 
     style:"border-radius:0 !important;",
     desc:"Arrondi : Fenêtre de prévisualisation (en haut)"   
    },
    {target:".LiveRC_HistoryBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Fenêtre de l’historique des prévisualisations (en bas)"   
    },
    {target:"#FixedTopPanel .LiveRC_HistoryBR", 
     style:"border-radius:0 !important;",
     desc:"Arrondi : Fenêtre de l’historique des prévisualisations (en haut)"   
    },
    {target:".liveDebugBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Fenêtre de débogage"   
    },
    {target:".LiveRC_MenuAnchorBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Titre de fenêtre / zone de redimensionnement"   
    },
    {target:".liveTchatBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Fenêtre de tchat"   
    },
    {target:".liveTchatResizeAnchorBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : Bouton de redimentionnement de la fenêtre de tchat"   
    },
    {target:".livePreviewTitleBR a", 
     style:"border-radius:3px;",
     desc:"Arrondi : Liens dans la barre de contrôle de la fenêtre de prévisualisation"   
    }
  ];

(function(){
  var text = "";
  for(var s=0,slen=lrcCSSstyles.length;s<slen;s++){
    text += "\n"+lrcCSSstyles[s].target+" {"+lrcCSSstyles[s].style+";}";
  }
  text = text.replace(/ *; */g,";").replace(/;;/g,";");
  try{ lrcDisplayDebug("Embed customizable CSS styles"); }catch(e){ };
  mw.loader.addStyleTag(text, document.getElementsByTagName('head')[0].firstChild );
})();
/* *********************************************************** */
// </source>
