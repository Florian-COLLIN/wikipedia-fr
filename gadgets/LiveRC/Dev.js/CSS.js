/* ***********************************************************

  Styles CSS de LiveRC personnalisables 

{{Catégorisation JS|LiveRC}}
<source lang=javascript>
*********************************************************** */

  var lrcCSSstyles = [ 
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
    {target:".RcFeedback .th1RC, .RcFeedback .td2RC, .RcFeedback .td3RC, .RcFeedback .td4RC",        
     style:"background-color:#AA9E60;",
     desc:"Ligne RC : Retour de lecteur"  
    }, 
    {target:".RcAbFilter .th1RC, .RcAbFilter .td2RC, .RcAbFilter .td3RC, .RcAbFilter .td4RC",        
     style:"background-color:#FFBE60;",
     desc:"Ligne RC : Détection du filtre anti-abus"  
    }, 
    {target:".RcUpload .th1RC, .RcUpload .td2RC, .RcUpload .td3RC, .RcUpload .td4RC",        
     style:"background-color:#D1CAFA;",
     desc:"Ligne RC : Import de fichier"  
    }, 
    {target:".RcNewUser .th1RC, .RcNewUser .td2RC, .RcNewUser .td3RC, .RcNewUser .td4RC",        
     style:"background-color:#C6FF6D;",
     desc:"Ligne RC : Nouvel utilisateur"  
    }, 
    {target:".RcBlock .th1RC, .RcBlock .td2RC, .RcBlock .td3RC, .RcBlock .td4RC",        
     style:"background-color:#EECC84;",
     desc:"Ligne RC : Blocage"  
    }, 
    {target:".RcDelete .th1RC, .RcDelete .td2RC, .RcDelete .td3RC, .RcDelete .td4RC",        
     style:"background-color:#E7CAA7;",
     desc:"Ligne RC : Suppression"  
    },
    {target:".RcMove .th1RC, .RcMove .td2RC, .RcMove .td3RC, .RcMove .td4RC",        
     style:"background-color:#FDC5FF;",
     desc:"Ligne RC : Renommage"  
    }, 
    {target:".RcProtect .th1RC, .RcProtect .td2RC, .RcProtect .td3RC, .RcProtect .td4RC",        
     style:"background-color:#B2BCC6;",
     desc:"Ligne RC : Protection"  
    },
    {target:".RcRights .th1RC, .RcRights .td2RC, .RcRights .td3RC, .RcRights .td4RC",        
     style:"background-color:#FF8080;",
     desc:"Ligne RC : Changement de statut"  
    }, 
    {target:".RcRenameuser .th1RC, .RcRenameuser .td2RC, .RcRenameuser .td3RC, .RcRenameuser .td4RC",        
     style:"background-color:MediumAquamarine;",
     desc:"Ligne RC : Renommage utilisateur"  
    },
    {target:".RcThanks .th1RC, .RcThanks .td2RC, .RcThanks .td3RC, .RcThanks .td4RC",        
     style:"background-color:pink;",
     desc:"Ligne RC : Remerciement utilisateur"  
    },
    {target:".RcMassMessage .th1RC, .RcMassMessage .td2RC, .RcMassMessage .td3RC, .RcMassMessage .td4RC",        
     style:"background-color:darkGrey;",
     desc:"Ligne RC : Message de masse"  
    },
    {target:".RcPagetriageDeletion .th1RC, .RcPagetriageDeletion .td2RC, .RcPagetriageDeletion .td3RC, .RcPagetriageDeletion .td4RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - tag de suppression"  
    }, 
    {target:".RcPagetriageCuration .th1RC, .RcPagetriageCuration .td2RC, .RcPagetriageCuration .td3RC, .RcPagetriageCuration .td4RC",        
     style:"background-color:lightblue;",
     desc:"Ligne RC : Pagetriage - amélioration"  
    }, 
    {target:".RcReview .th1RC, .RcReview .td2RC, .RcReview .td3RC, .RcReview .td4RC",        
     style:"background-color:Peru;",
     desc:"Ligne RC : Relecture"  
    }, 
    {target:".RcStable .th1RC, .RcStable .td2RC, .RcStable .td3RC, .RcStable .td4RC",        
     style:"background-color:Chocolate;",
     desc:"Ligne RC : Stabilisation"  
    }, 
    {target:".RcOversight .th1RC, .RcOversight .td2RC, .RcOversight .td3RC, .RcOversight .td4RC",        
     style:"background-color:Purple;",
     desc:"Ligne RC : Masquage de modification"  
    }, 
    {target:".RcCheckuser .th1RC, .RcCheckuser .td2RC, .RcCheckuser .td3RC, .RcCheckuser .td4RC",        
     style:"background-color:Thistle;",
     desc:"Ligne RC : Vérification d’utilisateur"  
    }, 
    {target:".RcEducationProgram .th1RC, .RcEducationProgram .td2RC, .RcEducationProgram .td3RC, .RcEducationProgram .td4RC",        
     style:"background-color:PeachPuff;",
     desc:"Ligne RC : Programme éducatif"  
    },
    {target:".RcLiquidThreads .th1RC, .RcLiquidThreads .td2RC, .RcLiquidThreads .td3RC, .RcLiquidThreads .td4RC", 
     style:"background-color:LightCyan;",
     desc:"Ligne RC : LiquidThreads"   
    },
    {target:".RcPageTranslation .th1RC, .RcPageTranslation .td2RC, .RcPageTranslation .td3RC, .RcPageTranslation .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : PageTranslation"   
    },
    {target:".RcTranslatorSandbox .th1RC, .RcTranslatorSandbox .td2RC, .RcTranslatorSandbox .td3RC, .RcTranslatorSandbox .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslatorSandbox"   
    },
    {target:".RcTranslationReview .th1RC, .RcTranslationReview .td2RC, .RcTranslationReview .td3RC, .RcTranslationReview .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : TranslationReview"   
    },
    {target:".RcNotifyTranslators .th1RC, .RcNotifyTranslators .td2RC, .RcNotifyTranslators .td3RC, .RcNotifyTranslators .td4RC", 
     style:"background-color:RosyBrown;",
     desc:"Ligne RC : NotifyTranslators"   
    },
    {target:".RcOAuth .th1RC, .RcOAuth .td2RC, .RcOAuth .td3RC, .RcOAuth .td4RC", 
     style:"background-color:MistyRose;",
     desc:"Ligne RC : OAuth"   
    },
    {target:".RcMoodBar .th1RC, .RcMoodBar .td2RC, .RcMoodBar .td3RC, .RcMoodBar .td4RC", 
     style:"background-color:DarkKhaki;",
     desc:"Ligne RC : MoodBar"   
    },
    {target:".RcNotification .th0RC, .RcNotification .th1RC",
     style:"background-color:IndianRed;color:white;",
     desc:"Ligne RC : Notification"  
    }, 
    {target:".RcWatched .th0RC",        
     style:"border:3px solid gold !important;",
     desc:"Ligne RC : Page suivie"  
    },
    {target:".RcContact .th0RC",        
     style:"border:3px solid gold !important;",
     desc:"Ligne RC : Utilisateur suivi" 
    },
    {target:".RcNew .th1RC",        
     style:"background-color:#bdffb2;border:3px solid Lime !important;",
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
    {target:".RcIp .td2RC, .RcIp .td3RC, .RcIp .td4RC",        
     style:"background-color:white;",
     desc:"Ligne RC : Utilisateur IP"  
    }, 
    {target:".RcNewbie .td2RC, .RcNewbie .td3RC, .RcNewbie .td4RC",        
     style:"background-color:#bdffb2;",
     desc:"Ligne RC : Utilisateur débutant"  
    }, 
    {target:".RcPatrolled .td2RC, .RcPatrolled .td3RC, .RcPatrolled .td4RC",        
     style:"background-color:#b2b2b2;",
     desc:"Ligne RC : Utilisateur autopatrolled"  
    },  
    {target:".RcSelf .td2RC, .RcSelf .td3RC, .RcSelf .td4RC",        
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
     style:"background-color:#CFBE90;",
     desc:"Ligne RC : Modification externe (wikidata)"  
    }, 
    {target:".RcChecked th, .RcChecked td",        
     style:"background-color:#FFFFE0;",
     desc:"Ligne RC : Page vérifiée"
    },
    {target:".hidelineLink", 
     style:"padding:3px;color:red;",
     desc:"Lien : Suppression de ligne (journaux de suivi)"  
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
    {target:".newuserDiffLink", 
     style:"color:darkGreen;",
     desc:"Lien : New user"   
    }, 
    {target:".blockDiffLink", 
     style:"color:darkgoldenrod;",
     desc:"Lien : Block"   
    }, 
    {target:".gbblockDiffLink", 
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
    {target:".abfilterDiffLink", 
     style:"color:darkslategray;",
     desc:"Lien : Filter"   
    }, 
    {target:".abfilterdiffDiffLink", 
     style:"color:red;",
     desc:"Lien : Diff (Filter)"   
    }, 
    {target:".renameuserDiffLink", 
     style:"color:SlateGray;",
     desc:"Lien : Renameuser"   
    }, 
    {target:".userrightsDiffLink", 
     style:"color:DeepSkyBlue;",
     desc:"Lien : Userrights"   
    }, 
    {target:".gbuserrightsDiffLink", 
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
    {target:".historyLink", 
     style:"color:darkorange;",
     desc:"Lien : Historique"   
    }, 
    {target:".editLink", 
     style:"color:OrangeRed;",
     desc:"Lien : Modifier"   
    }, 
    {target:".moveLink", 
     style:"color:tomato;",
     desc:"Lien : Renommer"   
    }, 
    {target:".deleteLink", 
     style:"color:orangered;",
     desc:"Lien : Supprimer"   
    }, 
    {target:".protectLink", 
     style:"color:coral;",
     desc:"Lien : Protéger"   
    }, 
    {target:".stableLink", 
     style:"color:Chocolate;",
     desc:"Lien : Stabiliser"   
    }, 
    {target:".pagetalkLink", 
     style:"color:seagreen;",
     desc:"Lien : Discuter (page)"   
    },  
    {target:".usertalkLink", 
     style:"color:seagreen;",
     desc:"Lien : Discuter (utilisateur)"   
    }, 
    {target:".usercontribLink", 
     style:"color:#43CD80;",
     desc:"Lien : Contributions"   
    }, 
    {target:".userdeletedcontribLink", 
     style:"color:#43CD80;",
     desc:"Lien : Contributions supprimées"   
    }, 
    {target:".pagewatchLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Suivre (page)"   
    }, 
    {target:".pageunwatchLink", 
     style:"color:RoyalBlue;",
     desc:"Lien : Ne plus suivre (page)"   
    }, 
    {target:".userwatchLink", 
     style:"color:black;",
     desc:"Lien : Suivre (utilisateur)"   
    }, 
    {target:".userunwatchLink", 
     style:"color:#AAAA00;",
     desc:"Lien : Ne plus suivre (utilisateur)"   
    }, 
    {target:".userblockLink", 
     style:"color:seagreen;",
     desc:"Lien : Bloquer"   
    }, 
    {target:".userhideLink", 
     style:"color:grey;",
     desc:"Lien : Masquer"   
    },
    {target:"#n-liveRC ul", 
     style:"font-size: 80%;",
     desc:"Taille texte : "   
    },
    {target:".LiveRCContainerFS", 
     style:"font-size:13px;",
     desc:"Taille texte : "   
    },
    {target:"#LiveRCTitle .error", 
     style:"font-size: 11px;",
     desc:"Taille texte : "   
    },
    {target:".RCFilterCheckListFS input, .RCFilterCheckListFS select", 
     style:"font-size:10px;",
     desc:"Taille texte : "   
    },
    {target:".divTabRCFS", 
     style:"font-size:11px;",
     desc:"Taille texte : "   
    },
    {target:".LiveRCAlertFS li", 
     style:"font-size:12px !important;",
     desc:"Taille texte : "   
    },
    {target:"#tabRC .MiniDiffPreviewTDFS", 
     style:"font-size:10px !important;",
     desc:"Taille texte : "   
    },
    {target:".LiveRC_MenuAnchorFS", 
     style:"font-size:16px;",
     desc:"Taille texte : "   
    },
    {target:".LiveRC_MenuAnchorFS input", 
     style:"font-size: 10px;",
     desc:"Taille texte : "   
    },
    {target:".LiveRC_MenuAnchorFS select", 
     style:"font-size: 11px;",
     desc:"Taille texte : "   
    },
    {target:"#livePreviewFirstTitle", 
     style:"font-size:16px;",
     desc:"Taille texte : "   
    },
    {target:".LiveRC_MenuContentFS", 
     style:"font-size:80%;",
     desc:"Taille texte : "   
    },
    {target:"#NewWindowTchatLink", 
     style:"font-size:11px;",
     desc:"Taille texte : "   
    },
    {target:"#ToggleButtons input, .ActionButtons input", 
     style:"font-size:11px;",
     desc:"Taille texte : "   
    },
    {target:".lrcIcons_Label, .Texts_Label", 
     style:"font-size:130%;",
     desc:"Taille texte : "   
    },
    {target:".livePreviewTitleFS", 
     style:"font-size:12px;",
     desc:"Taille texte : "   
    },
    {target:"#LiveRC_FollowContent", 
     style:"font-size:13px;",
     desc:"Taille texte : "   
    },
    {target:"#LiveRC_FollowButtons input", 
     style:"font-size:11px;",
     desc:"Taille texte : "   
    },
    {target:".FollowList", 
     style:"font-size:11px !important;",
     desc:"Taille texte : "   
    },
    {target:".FollowSublist", 
     style:"font-size:9px !important;",
     desc:"Taille texte : "   
    },
    {target:".LiveRC_HistoryFS", 
     style:"font-size:13px;",
     desc:"Taille texte : "   
    },
    {target:".LiveRCContainerBG", 
     style:"background-color:gray;",
     desc:"Couleur fond : "   
    },
    {target:".FixedTitlePanelBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".OutFixedBottomPanelBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".RCFilterCheckListBG", 
     style:"background-color:LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".tabRCBG", 
     style:"background-color:#E0E0EE;",
     desc:"Couleur fond : "   
    },
    {target:".rcLineBG td, .rcLineBG th", 
     style:"background-color:#F0F0FF; ",
     desc:"Couleur fond : "   
    },
    {target:"#tabRC .MiniDiffClosePreviewTD", 
     style:"background-color:#F0F0FF;",
     desc:"Couleur fond : "   
    },
    {target:"#tabRC .MiniDiffPreviewTDBG", 
     style:"background-color:white !important; ",
     desc:"Couleur fond : "   
    },
    {target:".LiveRC_HistoryBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".liveFollowBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRC_PreviewBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".liveDebugBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".liveDebugContentBG", 
     style:"background-color: white;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRCAlertBG li", 
     style:"background-color:white;",
     desc:"Couleur fond : "   
    } ,
    {target:".LiveRCAlertBG li li", 
     style:"background-color:#F0F0F0;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRCAlertBG fieldset", 
     style:"background-color: #F9F9F9;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRC_MenuAnchorBG", 
     style:"background-color:DarkGray !important;",
     desc:"Couleur fond : "   
    },
    {target:".liveTchatBG", 
     style:"background-color: LightGrey;",
     desc:"Couleur fond : "   
    },
    {target:".ParamMenuLiBG", 
     style:"background-color:#E8E8FF;",
     desc:"Couleur fond : "   
    },
    {target:".livePreviewBG", 
     style:"background-color:white !important;",
     desc:"Couleur fond : "   
    },
    {target:"#OtherContainer", 
     style:"background-color:#FFFFFF !important;",
     desc:"Couleur fond : "   
    },
    {target:".FixedLiveRCContainer", 
     style:"background-color:#FFFFFF !important;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRCButtonsBG img", 
     style:"background-color:IndianRed;",
     desc:"Couleur fond : "   
    },
    {target:".LiveRCButtonsBG .OnButton img", 
     style:"background-color:GreenYellow;",
     desc:"Couleur fond : "   
    },
    {target:".FixedTitlePanelBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".OutFixedBottomPanelBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".livePreviewFootBD", 
     style:"border-top: 1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".RCFilterCheckListBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".liveRC_RCListBD", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD", 
     style:"border-bottom:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".rcLineBD td, .rcLineBD th", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD .th1RC, .tabRCBD .td2RC, .tabRCBD .td3RC, .tabRCBD .td4RC", 
     style:"border-right:1px dotted silver;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD .th1RC", 
     style:"border-left:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD .td5RC", 
     style:"border-right:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD .MiniDiffPreviewTDBD", 
     style:"border:1px solid gray;border-top:1px solid silver;",
     desc:"Bordure : "   
    },
    {target:".tabRCBD .MiniDiffClosePreviewTDBD", 
     style:"border-bottom:1px solid gray !important;",
     desc:"Bordure : "   
    },
    {target:".LiveRCButtonsBD img", 
     style:"border:1px solid red;",
     desc:"Bordure : "   
    },
    {target:".LiveRCButtonsBD .OnButton img", 
     style:"border:1px solid green;",
     desc:"Bordure : "   
    },
    {target:".liveFollowBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".LiveRC_PreviewBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:"#FixedTopPanel .LiveRC_PreviewBD", 
     style:"border:none !important;",
     desc:"Bordure : "   
    },
    {target:".LiveRC_HistoryBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:"#FixedTopPanel .LiveRC_HistoryBD", 
     style:"border:none !important;",
     desc:"Bordure : "   
    },
    {target:".liveDebugBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".liveDebugContentBD", 
     style:"border: 1px dotted silver;",
     desc:"Bordure : "   
    },
    {target:".liveDebugContentBD li", 
     style:"border-bottom: 1px dotted silver;",
     desc:"Bordure : "   
    },
    {target:".LiveRCAlertBD li", 
     style:"border:1px solid #DDDDDD;",
     desc:"Bordure : "   
    },
    {target:".LiveRC_MenuContainer", 
     style:"border:none;",
     desc:"Bordure : "   
    },
    {target:".LiveRC_MenuAnchorBD", 
     style:"border:1px solid DimGray;",
     desc:"Bordure : "   
    },
    {target:".LiveRC_MenuContentBD", 
     style:"border:1px solid LightGrey;",
     desc:"Bordure : "   
    },
    {target:".liveTchatBD", 
     style:"border: 2px solid gray;",
     desc:"Bordure : "   
    },
    {target:".ParamMenuLiBD", 
     style:"border:1px solid silver;",
     desc:"Bordure : "   
    },
    {target:".livePreviewTitleBD a", 
     style:"border:1px solid transparent;",
     desc:"Bordure : "   
    },
    {target:"#FixedTopPanel", 
     style:"border-top:1px solid gray;",
     desc:"Bordure : "   
    },
    {target:"#LiveRC_FollowButtons", 
     style:"border-bottom:1px solid grey;",
     desc:"Bordure : "   
    },
    {target:"#liveFollow td", 
     style:"border-left:1px solid grey;",
     desc:"Bordure : "   
    },
    {target:".FixedTitlePanelBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".OutFixedBottomPanelBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".LiveRCButtonsBR img", 
     style:"border-radius:3px;",
     desc:"Arrondi : "   
    },
    {target:".liveFollowBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".LiveRC_PreviewBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:"#FixedTopPanel .LiveRC_PreviewBR", 
     style:"border-radius:0 !important;",
     desc:"Arrondi : "   
    },
    {target:".LiveRC_HistoryBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:"#FixedTopPanel .LiveRC_HistoryBR", 
     style:"border-radius:0 !important;",
     desc:"Arrondi : "   
    },
    {target:".liveDebugBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".LiveRC_MenuAnchorBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".liveTchatBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".liveTchatResizeAnchorBR", 
     style:"border-radius:5px;",
     desc:"Arrondi : "   
    },
    {target:".livePreviewTitleBR a", 
     style:"border-radius:3px;",
     desc:"Arrondi : "   
    }
  ];
