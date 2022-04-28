(function(){
    var script = {
 "children": [
  "this.MainViewer",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D",
  "this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889",
  "this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533",
  "this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E",
  "this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2",
  "this.Container_7051206A_6F77_1569_41D9_5B08194682B4",
  "this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74"
 ],
 "id": "rootPlayer",
 "paddingLeft": 0,
 "paddingRight": 0,
 "start": "this.init()",
 "horizontalAlign": "left",
 "width": "100%",
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "verticalAlign": "top",
 "definitions": [{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5308F_6F5B_15A7_41D4_E81986B0C852",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72DDE13B_6F6B_34EF_41B1_AECF71C9A67B",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_71348DB7_6F77_0FE7_41BC_AFCED3F8C05B",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "hfov": 165,
  "yaw": 0,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "displayMovements": [
  {
   "duration": 1000,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "easing": "cubic_in_out",
   "targetPitch": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetStereographicFactor": 0
  }
 ],
 "id": "panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C94147_6F6B_34A7_41DA_B11CE641B4F7",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC54091_6F5B_15BA_41B9_1418861361F6",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D75140_6F6B_3499_41D7_93AAA1C1A41A",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D6313E_6F6B_34E9_419C_5BDC43DFB54F",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CB6144_6F6B_3499_41D8_9227078ED832",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC99095_6F5B_15BA_41D1_948804F0AB89",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D52141_6F6B_349B_41CD_92F0088C937F",
 "class": "FadeOutEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163531_00_397",
 "id": "panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_78C07593_6CD5_D768_41C9_CBE850C9010B",
  "this.overlay_78FBB42B_6CCC_75BF_41BB_9AC0A82399C6",
  "this.panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A"
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D76140_6F6B_3499_41D8_98EE3603A74C",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D0613D_6F6B_34EB_41CD_2CBA8991EB76",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2C09B_6F5B_15AE_41BD_662076388955",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_71356DB7_6F77_0FE7_4198_067A3C4A718E",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCD5099_6F5B_15AA_41BD_08817CF6E59B",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4F9CD041_6F5B_149B_41D7_44B02F9EFBB4",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -99.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D6A13F_6F6B_34E7_41A7_25925D27BE6D",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D1E13F_6F6B_34E7_41B9_B65318E1B34D",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD3109B_6F5B_15AE_4185_4FDE0CA44036",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D46141_6F6B_349B_41D0_294A0DA5D2D4",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCD7099_6F5B_15AA_41B7_553E0B9E5844",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C84145_6F6B_349B_41CC_28AED01031FB",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.71,
  "class": "PanoramaCameraPosition",
  "pitch": -13.18
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 12.01,
  "class": "PanoramaCameraPosition",
  "pitch": -9.43
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCBA093_6F5B_15BE_41D3_BC13607B48D3",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD3C09B_6F5B_15AE_41A7_336E06ECC89E",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC9F095_6F5B_15BA_41D3_7829B62B1186",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCED096_6F5B_15A6_41D1_D792DA82E9B7",
 "class": "FadeInEffect"
},
{
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.37,
  "class": "PanoramaCameraPosition",
  "pitch": -11.53
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCBF093_6F5B_15BE_4199_B02F17C982F6",
 "class": "FadeInEffect"
},
{
 "items": [
  {
   "camera": "this.panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_camera",
   "media": "this.panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_71341DB6_6F77_0FF9_41CB_062B6A4997FE, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_4FC4208D_6F5B_15AB_41C8_8A45EB61C919, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')){ if(this.getKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A')) { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true, -1, this.effect_735DE316_6F7B_14B9_41D0_BCB15721DFA6, 'showEffect', false); } else { this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false, -1, this.effect_4FC5908D_6F5B_15AB_41B0_C400D55922A7, 'hideEffect', false); } }; this.unregisterKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FC5C08E_6F5B_15A9_41D5_1E3A57D90688, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_71348DB7_6F77_0FE7_41BC_AFCED3F8C05B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FC5E08E_6F5B_15A9_41C1_6267D3651402, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_7134FDB7_6F77_0FE7_41BC_1825E7353625, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FC5308F_6F5B_15A7_41D4_E81986B0C852, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_71356DB7_6F77_0FE7_4198_067A3C4A718E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FCA9090_6F5B_15B9_41D6_6A155138E1B0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_7135EDB7_6F77_0FE7_41D1_E92C65A32BA4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FCAA090_6F5B_15B9_41A7_E1103BD0016E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_71360DB8_6F77_0FE9_41C0_D68B5CE638E4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FCAC090_6F5B_15B9_41D2_B006C625E751, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_7134FDB8_6F77_0FE9_41C5_BC6A1E00C312, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FCA1090_6F5B_15BA_41A3_80C861EC96A6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_71352DB8_6F77_0FE9_41C3_0CF67D13174B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Label_0DD14F09_1744_0507_41AA_D8475423214A', this.Label_0DD14F09_1744_0507_41AA_D8475423214A.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_71341DB6_6F77_0FF9_41CB_062B6A4997FE, 'showEffect', false); this.keepComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, false); this.setComponentVisibility(this.Label_0DD14F09_1744_0507_41AA_D8475423214A, true, -1, this.effect_735DE316_6F7B_14B9_41D0_BCB15721DFA6, 'showEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_71348DB7_6F77_0FE7_41BC_AFCED3F8C05B, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_7134FDB7_6F77_0FE7_41BC_1825E7353625, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_71356DB7_6F77_0FE7_4198_067A3C4A718E, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_7135EDB7_6F77_0FE7_41D1_E92C65A32BA4, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_71360DB8_6F77_0FE9_41C0_D68B5CE638E4, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_7134FDB8_6F77_0FE9_41C5_BC6A1E00C312, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_71352DB8_6F77_0FE9_41C3_0CF67D13174B, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_camera",
   "media": "this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FC5D091_6F5B_15BA_41DB_38B918B37E93, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72DDE13B_6F6B_34EF_41B1_AECF71C9A67B, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4E1E19F0_6F79_3779_41C9_B51C58EE0FCC, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_4FC5E091_6F5B_15BA_41D9_F031A5BB38D7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FC54091_6F5B_15BA_41B9_1418861361F6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D2613C_6F6B_34E9_41D4_EC8CE24C9295, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FC56091_6F5B_15BA_41DA_070D399F23EA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D2B13C_6F6B_34E9_41C7_1214C1C59674, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FCAB092_6F5B_15BE_41D7_7C88287E0588, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D2F13C_6F6B_34E9_41A5_D336B1DE18A9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FCAF092_6F5B_15BE_41D8_93F9F4E41FD2, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D3013C_6F6B_34E9_41D9_1C1C9CA2A331, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FCAE092_6F5B_15BE_41D6_FEB49F05E7C5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D3A13C_6F6B_34E9_41D2_256A394BD6FF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FCA5093_6F5B_15BE_41C0_1B5F44511D4D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D3E13C_6F6B_34E9_41D9_FB2701FE5B5F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72DDE13B_6F6B_34EF_41B1_AECF71C9A67B, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4E1E19F0_6F79_3779_41C9_B51C58EE0FCC, 'showEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D2613C_6F6B_34E9_41D4_EC8CE24C9295, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D2B13C_6F6B_34E9_41C7_1214C1C59674, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D2F13C_6F6B_34E9_41A5_D336B1DE18A9, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D3013C_6F6B_34E9_41D9_1C1C9CA2A331, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D3A13C_6F6B_34E9_41D2_256A394BD6FF, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D3E13C_6F6B_34E9_41D9_FB2701FE5B5F, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_camera",
   "media": "this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FCBA093_6F5B_15BE_41D3_BC13607B48D3, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D0613D_6F6B_34EB_41CD_2CBA8991EB76, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FCBF093_6F5B_15BE_4199_B02F17C982F6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D0B13D_6F6B_34EB_41D9_0232653E406E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4E1EB9F0_6F79_3779_41C4_F2D80875B30B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_4FCB0093_6F5B_15BE_41D6_3875DA6ED21F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FCB7094_6F5B_15BA_41AB_BEDE2B287F16, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D1213D_6F6B_34EB_419B_ABDF2405EF35, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FC88094_6F5B_15BA_41B9_EB2F2C508E89, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D1A13D_6F6B_34EB_41B3_BC14A1039E45, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FC8A094_6F5B_15BA_41D0_A651388D74AE, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D1F13E_6F6B_34E9_41DB_331F80623897, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FC8C094_6F5B_15BA_419F_19E234EE3794, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D6313E_6F6B_34E9_419C_5BDC43DFB54F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FC83094_6F5B_15BA_41AE_ED8CD3EFDBF5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D6413E_6F6B_34E9_41D8_80278B531F6E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D0613D_6F6B_34EB_41CD_2CBA8991EB76, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D0B13D_6F6B_34EB_41D9_0232653E406E, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4E1EB9F0_6F79_3779_41C4_F2D80875B30B, 'showEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D1213D_6F6B_34EB_419B_ABDF2405EF35, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D1A13D_6F6B_34EB_41B3_BC14A1039E45, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D1F13E_6F6B_34E9_41DB_331F80623897, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D6313E_6F6B_34E9_419C_5BDC43DFB54F, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D6413E_6F6B_34E9_41D8_80278B531F6E, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_camera",
   "media": "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FC99095_6F5B_15BA_41D1_948804F0AB89, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D1413E_6F6B_34E9_41C5_4005F0ABBAAA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FC9A095_6F5B_15BA_41D4_8ABD3D2EF91F, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D1E13F_6F6B_34E7_41B9_B65318E1B34D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FC9F095_6F5B_15BA_41D3_7829B62B1186, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D6213F_6F6B_34E7_41D2_839ED325B96C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4E1909F0_6F79_3779_41CC_6A078EBB2F5B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_4FC90095_6F5B_15BA_41C6_D243A2B8D11A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FC94095_6F5B_15BA_41AE_DD1BD5968006, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D6A13F_6F6B_34E7_41A7_25925D27BE6D, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FCE9095_6F5B_15BA_41C1_FFBC83DA58F0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D6F13F_6F6B_34E7_41BA_2B16E4063720, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FCED096_6F5B_15A6_41D1_D792DA82E9B7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D76140_6F6B_3499_41D8_98EE3603A74C, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FCE1096_6F5B_15A6_41BB_836C88DDFE6C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D75140_6F6B_3499_41D7_93AAA1C1A41A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D1413E_6F6B_34E9_41C5_4005F0ABBAAA, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D1E13F_6F6B_34E7_41B9_B65318E1B34D, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D6213F_6F6B_34E7_41D2_839ED325B96C, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4E1909F0_6F79_3779_41CC_6A078EBB2F5B, 'showEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72D6A13F_6F6B_34E7_41A7_25925D27BE6D, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D6F13F_6F6B_34E7_41BA_2B16E4063720, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D76140_6F6B_3499_41D8_98EE3603A74C, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D75140_6F6B_3499_41D7_93AAA1C1A41A, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83_camera",
   "media": "this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FCE7096_6F5B_15A6_41D0_FE53F96054E7, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D7D140_6F6B_3499_41D6_9523249367C0, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FC90096_6F5B_15A6_41CB_1F5678278673, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D44140_6F6B_3499_41D3_429D5582C0BA, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FC94096_6F5B_15A6_41D5_BE3EAF797495, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D49140_6F6B_3499_41D5_44A64B214A8A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FCE8097_6F5B_15A6_41C6_D2B14510EB0C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D52140_6F6B_3499_41B1_3B285B4336F8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4E1879F1_6F79_377B_41B9_991E3656DB00, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_4FCED097_6F5B_15A6_41B8_814E64CA3732, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FCE1097_6F5B_15A6_41BC_E7990AEB76C1, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D43141_6F6B_349B_41D1_80F85DDE2A4A, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FCE2097_6F5B_15A6_41D0_799E00D2DBA5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D46141_6F6B_349B_41D0_294A0DA5D2D4, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FCE7097_6F5B_15A6_41D3_2944F05187A0, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D48141_6F6B_349B_41D4_8EBACBDF7837, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D7D140_6F6B_3499_41D6_9523249367C0, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D44140_6F6B_3499_41D3_429D5582C0BA, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D49140_6F6B_3499_41D5_44A64B214A8A, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72D52140_6F6B_3499_41B1_3B285B4336F8, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4E1879F1_6F79_377B_41B9_991E3656DB00, 'showEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72D43141_6F6B_349B_41D1_80F85DDE2A4A, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72D46141_6F6B_349B_41D0_294A0DA5D2D4, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72D48141_6F6B_349B_41D4_8EBACBDF7837, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_camera",
   "media": "this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FCFE098_6F5B_15AA_41BA_87F567690BED, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D52141_6F6B_349B_41CD_92F0088C937F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FCF1098_6F5B_15AA_41D5_D35B1F57EC40, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D55141_6F6B_349B_41C5_3A6D9EA813F9, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FCF2098_6F5B_15AA_41C4_7324C19CBE52, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D5F142_6F6B_3499_41CD_C80D51EB12BF, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FCF6098_6F5B_15AA_41D3_AD7F8F71C737, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72CA0142_6F6B_3499_41D7_19666C2A5192, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FCCB098_6F5B_15AA_41C9_50C0712A6AEB, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CA5143_6F6B_349F_41BF_8B4CE2930431, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4E18D9F1_6F79_377B_41D5_D427B94B2B35, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_4FCCD098_6F5B_15AA_41D5_C360A0734A50, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FCC1099_6F5B_15AA_4162_A45288BCFF03, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72CAC144_6F6B_3499_41D5_C0ECD481790E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FCC4099_6F5B_15AA_41CE_063703250D8C, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72CB6144_6F6B_3499_41D8_9227078ED832, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72D52141_6F6B_349B_41CD_92F0088C937F, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72D55141_6F6B_349B_41C5_3A6D9EA813F9, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72D5F142_6F6B_3499_41CD_C80D51EB12BF, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72CA0142_6F6B_3499_41D7_19666C2A5192, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CA5143_6F6B_349F_41BF_8B4CE2930431, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4E18D9F1_6F79_377B_41D5_D427B94B2B35, 'showEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72CAC144_6F6B_3499_41D5_C0ECD481790E, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72CB6144_6F6B_3499_41D8_9227078ED832, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_camera",
   "media": "this.panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FCDC099_6F5B_15AA_41C0_42A6B8E24BDA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72CBF144_6F6B_3499_41B1_B92521EE5E3F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FCD1099_6F5B_15AA_41C5_503A23354453, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72CA5144_6F6B_3499_419B_643DA30E1AA8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FCD5099_6F5B_15AA_41BD_08817CF6E59B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72CAC144_6F6B_3499_41B5_44745BC7A2C2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FCD7099_6F5B_15AA_41B7_553E0B9E5844, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72CB0145_6F6B_349B_41D0_4ED15B93D8A5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FD2809A_6F5B_15AE_41C9_7249B5E5671B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CB5145_6F6B_349B_41D5_F2D79991DF98, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FD2C09A_6F5B_15AE_417D_E8C50B29EFF6, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72CBF145_6F6B_349B_41C7_E278E4ED8FE5, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4E1B59F1_6F79_377B_4199_731E3765772B, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_4FD2009A_6F5B_15AE_41D5_8C227D1165B8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4FD2409A_6F5B_15AE_41D1_5A8A4E9A9B4D, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72C84145_6F6B_349B_41CC_28AED01031FB, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72CBF144_6F6B_3499_41B1_B92521EE5E3F, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72CA5144_6F6B_3499_419B_643DA30E1AA8, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72CAC144_6F6B_3499_41B5_44745BC7A2C2, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72CB0145_6F6B_349B_41D0_4ED15B93D8A5, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CB5145_6F6B_349B_41D5_F2D79991DF98, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72CBF145_6F6B_349B_41C7_E278E4ED8FE5, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4E1B59F1_6F79_377B_4199_731E3765772B, 'showEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_72C84145_6F6B_349B_41CC_28AED01031FB, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_camera",
   "media": "this.panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E",
   "end": "if(this.existsKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')){ if(this.getKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055')) { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true, -1, this.effect_4FD3B09A_6F5B_15AE_41D1_1EEA8C24C298, 'showEffect', false); } else { this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72C8D146_6F6B_3499_41B9_BEDBAEBC577F, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055'); if(this.existsKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')){ if(this.getKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D')) { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true, -1, this.effect_4FD3C09B_6F5B_15AE_41A7_336E06ECC89E, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72C96146_6F6B_3499_41C6_05980A2280A8, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D'); if(this.existsKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')){ if(this.getKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889')) { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true, -1, this.effect_4FD3109B_6F5B_15AE_4185_4FDE0CA44036, 'showEffect', false); } else { this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72C94146_6F6B_3499_41C6_1257A3A07B16, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889'); if(this.existsKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')){ if(this.getKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533')) { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true, -1, this.effect_4FD2B09B_6F5B_15AE_41D2_2F3CA1BBA903, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72C9E146_6F6B_3499_41D5_0CDC44D6C77E, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533'); if(this.existsKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')){ if(this.getKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E')) { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true, -1, this.effect_4FD2C09B_6F5B_15AE_41BD_662076388955, 'showEffect', false); } else { this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CE0146_6F6B_3499_41C6_4A977A121746, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E'); if(this.existsKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')){ if(this.getKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2')) { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true, -1, this.effect_4FD2009B_6F5B_15AE_41D3_AF69146E4AD5, 'showEffect', false); } else { this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72C8F146_6F6B_3499_41D1_836DD6027456, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2'); if(this.existsKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')){ if(this.getKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4')) { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true, -1, this.effect_4FD2709B_6F5B_15AE_41B4_994457E04CFA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72C94147_6F6B_34A7_41DA_B11CE641B4F7, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4'); if(this.existsKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')){ if(this.getKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74')) { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4E1B89F2_6F79_3779_41C5_146DC940C3FA, 'showEffect', false); } else { this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false, -1, this.effect_4FD3B09C_6F5B_15AA_41D2_41A7383C25A2, 'hideEffect', false); } }; this.unregisterKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74'); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, true); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, true); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, true); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, true); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, true); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, true); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, true); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true)",
   "begin": "this.registerKey('visibility_Container_75EDF26C_6F77_1569_419D_81E09BE1EC74', this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74.get('visible')); this.registerKey('visibility_Container_7051206A_6F77_1569_41D9_5B08194682B4', this.Container_7051206A_6F77_1569_41D9_5B08194682B4.get('visible')); this.registerKey('visibility_Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2', this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2.get('visible')); this.registerKey('visibility_Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E', this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E.get('visible')); this.registerKey('visibility_Container_71C4FB5A_6F77_74A9_41C0_57DE76584533', this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533.get('visible')); this.registerKey('visibility_Container_72C85EA3_6F69_0D9F_419B_3F9590D19889', this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889.get('visible')); this.registerKey('visibility_Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D', this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D.get('visible')); this.registerKey('visibility_Container_0DD1BF09_1744_0507_41B3_29434E440055', this.Container_0DD1BF09_1744_0507_41B3_29434E440055.get('visible')); this.setEndToItemIndex(this.mainPlayList, 7, 0); this.keepComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false); this.setComponentVisibility(this.Container_0DD1BF09_1744_0507_41B3_29434E440055, false, -1, this.effect_72C8D146_6F6B_3499_41B9_BEDBAEBC577F, 'hideEffect', false); this.keepComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false); this.setComponentVisibility(this.Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D, false, -1, this.effect_72C96146_6F6B_3499_41C6_05980A2280A8, 'hideEffect', false); this.keepComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false); this.setComponentVisibility(this.Container_72C85EA3_6F69_0D9F_419B_3F9590D19889, false, -1, this.effect_72C94146_6F6B_3499_41C6_1257A3A07B16, 'hideEffect', false); this.keepComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false); this.setComponentVisibility(this.Container_71C4FB5A_6F77_74A9_41C0_57DE76584533, false, -1, this.effect_72C9E146_6F6B_3499_41D5_0CDC44D6C77E, 'hideEffect', false); this.keepComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false); this.setComponentVisibility(this.Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E, false, -1, this.effect_72CE0146_6F6B_3499_41C6_4A977A121746, 'hideEffect', false); this.keepComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false); this.setComponentVisibility(this.Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2, false, -1, this.effect_72C8F146_6F6B_3499_41D1_836DD6027456, 'hideEffect', false); this.keepComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false); this.setComponentVisibility(this.Container_7051206A_6F77_1569_41D9_5B08194682B4, false, -1, this.effect_72C94147_6F6B_34A7_41DA_B11CE641B4F7, 'hideEffect', false); this.keepComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, false); this.setComponentVisibility(this.Container_75EDF26C_6F77_1569_419D_81E09BE1EC74, true, -1, this.effect_4E1B89F2_6F79_3779_41C5_146DC940C3FA, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCA9090_6F5B_15B9_41D6_6A155138E1B0",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4F543F86_6F5B_0B99_41B4_DC3A1EB3D7F6",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D43141_6F6B_349B_41D1_80F85DDE2A4A",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCCB098_6F5B_15AA_41C9_50C0712A6AEB",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC83094_6F5B_15BA_41AE_ED8CD3EFDBF5",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FB31FDF_6F5B_0BA7_41CB_BA1677AC126C",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163137_00_393",
 "id": "panorama_664516D7_6CD4_D297_4176_28C8001BAB83",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_7E34E030_6CF4_4DA9_41BA_DA8B0E8101B0",
  "this.overlay_7F5D3EC1_6CF4_32EB_41C8_E9453DB3FE93",
  "this.overlay_7F71C96F_6CF4_5FB2_41D6_88F14F7FA1B8",
  "this.overlay_786BE3F7_6CCC_3297_41C1_C2F29044E589",
  "this.overlay_7DA1D88A_6EAB_15A9_41D8_5114A64B4AFA",
  "this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -102.33,
   "yaw": -166.18,
   "panorama": "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -102.33,
   "yaw": 168.95,
   "panorama": "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -32.16,
   "yaw": -131.02,
   "panorama": "this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D52140_6F6B_3499_41B1_3B285B4336F8",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CB5145_6F6B_349B_41D5_F2D79991DF98",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CBF144_6F6B_3499_41B1_B92521EE5E3F",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCAE092_6F5B_15BE_41D6_FEB49F05E7C5",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5E091_6F5B_15BA_41D9_F031A5BB38D7",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C96146_6F6B_3499_41C6_05980A2280A8",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1EB9F0_6F79_3779_41C4_F2D80875B30B",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D1F13E_6F6B_34E9_41DB_331F80623897",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2C09A_6F5B_15AE_417D_E8C50B29EFF6",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2B09B_6F5B_15AE_41D2_2F3CA1BBA903",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_t.jpg",
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   }
  }
 ],
 "hfovMin": "135%",
 "label": "Entrance",
 "id": "panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_60AB802C_6CD5_CDB9_41C7_79156D5BF170",
  "this.overlay_62CFEECE_6CD4_D2F8_41D4_2222D252A7E8",
  "this.overlay_6262DE34_6CD4_35A9_41D8_A552D00C33EE",
  "this.panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -35.86,
   "yaw": 60.8,
   "panorama": "this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CBF145_6F6B_349B_41C7_E278E4ED8FE5",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC9A095_6F5B_15BA_41D4_8ABD3D2EF91F",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FA50FCE_6F5B_0BA9_41D9_29BA2214963A",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 77.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4F847015_6F5B_14BB_41B4_D38FEE225B35",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -119.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCB0093_6F5B_15BE_41D6_3875DA6ED21F",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD3B09A_6F5B_15AE_41D1_1EEA8C24C298",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D1413E_6F6B_34E9_41C5_4005F0ABBAAA",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D6F13F_6F6B_34E7_41BA_2B16E4063720",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCFE098_6F5B_15AA_41BA_87F567690BED",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D7D140_6F6B_3499_41D6_9523249367C0",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC90096_6F5B_15A6_41CB_1F5678278673",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C8F146_6F6B_3499_41D1_836DD6027456",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE7097_6F5B_15A6_41D3_2944F05187A0",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D48141_6F6B_349B_41D4_8EBACBDF7837",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC8C094_6F5B_15BA_419F_19E234EE3794",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCDC099_6F5B_15AA_41C0_42A6B8E24BDA",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1909F0_6F79_3779_41CC_6A078EBB2F5B",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D0B13D_6F6B_34EB_41D9_0232653E406E",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCC1099_6F5B_15AA_4162_A45288BCFF03",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_71360DB8_6F77_0FE9_41C0_D68B5CE638E4",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D2613C_6F6B_34E9_41D4_EC8CE24C9295",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD3B09C_6F5B_15AA_41D2_41A7383C25A2",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCED097_6F5B_15A6_41B8_814E64CA3732",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_735DE316_6F7B_14B9_41D0_BCB15721DFA6",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCC4099_6F5B_15AA_41CE_063703250D8C",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.58,
  "class": "PanoramaCameraPosition",
  "pitch": -5.83
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC4208D_6F5B_15AB_41C8_8A45EB61C919",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1E19F0_6F79_3779_41C9_B51C58EE0FCC",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_162955_00_390",
 "id": "panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_632481AE_6EBA_F7E9_41D5_9243BDF48D36",
  "this.overlay_606EBB2C_6EBB_14EA_41D2_631ABACF5D30",
  "this.overlay_613358B9_6EBB_15EB_41D5_10FFB8181A48",
  "this.overlay_613B22DB_6EBB_15AF_41D7_C92402745543",
  "this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731"
  },
  {
   "backwardYaw": 60.8,
   "yaw": -35.86,
   "panorama": "this.panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FB81FF5_6F5B_0B7B_41C7_D4F275122259",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 147.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4F91A025_6F5B_149B_41BD_242E027CF661",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -145.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE1096_6F5B_15A6_41BB_836C88DDFE6C",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -155.65,
  "class": "PanoramaCameraPosition",
  "pitch": -6.73
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5E08E_6F5B_15A9_41C1_6267D3651402",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE1097_6F5B_15A6_41BC_E7990AEB76C1",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D2B13C_6F6B_34E9_41C7_1214C1C59674",
 "class": "FadeOutEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163021_00_391",
 "id": "panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_78B7E156_6CCB_CFE9_41C4_B8D652EDEBE7",
  "this.overlay_78B0AEEC_6CF5_F2B8_41B3_4798D4F7E5FE",
  "this.overlay_7848CB98_6CD4_F299_4192_2FB04B4CDC79",
  "this.overlay_78B7E725_6CCC_D3AB_41CF_861B9E004EF9",
  "this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -161.29,
   "yaw": 80.14,
   "panorama": "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E"
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D49140_6F6B_3499_41D5_44A64B214A8A",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE7096_6F5B_15A6_41D0_FE53F96054E7",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D55141_6F6B_349B_41C5_3A6D9EA813F9",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CA5144_6F6B_3499_419B_643DA30E1AA8",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1B89F2_6F79_3779_41C5_146DC940C3FA",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163111_00_392",
 "id": "panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_79F4544E_6CF4_35F9_41D5_BE5500B662CC",
  "this.overlay_7B45FB9D_6CF4_329B_41AA_966D07D76CB4",
  "this.overlay_7A2D445E_6CF4_5599_41D0_EEE4DE5788AF",
  "this.overlay_7C5865CA_6EA9_1FA9_41DB_1A2F66271D14",
  "this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 80.14,
   "yaw": -161.29,
   "panorama": "this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -166.18,
   "yaw": -102.33,
   "panorama": "this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2809A_6F5B_15AE_41C9_7249B5E5671B",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC56091_6F5B_15BA_41DA_070D399F23EA",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_71352DB8_6F77_0FE9_41C3_0CF67D13174B",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FE8E061_6F5B_149B_41D2_FD393B2B84F3",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 13.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC94095_6F5B_15BA_41AE_DD1BD5968006",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D3E13C_6F6B_34E9_41D9_FB2701FE5B5F",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D6413E_6F6B_34E9_41D8_80278B531F6E",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FF40072_6F5B_1579_41D8_9439EE32A706",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5C08E_6F5B_15A9_41D5_1E3A57D90688",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E18D9F1_6F79_377B_41D5_D427B94B2B35",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D44140_6F6B_3499_41D3_429D5582C0BA",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CA0142_6F6B_3499_41D7_19666C2A5192",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCAB092_6F5B_15BE_41D7_7C88287E0588",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4F5DEFAC_6F5B_0BE9_415B_DF862A525C1E",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCA1090_6F5B_15BA_41A3_80C861EC96A6",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCF6098_6F5B_15AA_41D3_AD7F8F71C737",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC90095_6F5B_15BA_41C6_D243A2B8D11A",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCF2098_6F5B_15AA_41C4_7324C19CBE52",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C8D146_6F6B_3499_41B9_BEDBAEBC577F",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C9E146_6F6B_3499_41D5_0CDC44D6C77E",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 47.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0.62
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC8A094_6F5B_15BA_41D0_A651388D74AE",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2009B_6F5B_15AE_41D3_AF69146E4AD5",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_7134FDB8_6F77_0FE9_41C5_BC6A1E00C312",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CAC144_6F6B_3499_41B5_44745BC7A2C2",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CAC144_6F6B_3499_41D5_C0ECD481790E",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D5F142_6F6B_3499_41CD_C80D51EB12BF",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCCD098_6F5B_15AA_41D5_C360A0734A50",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D6213F_6F6B_34E7_41D2_839ED325B96C",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_7135EDB7_6F77_0FE7_41D1_E92C65A32BA4",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCD1099_6F5B_15AA_41C5_503A23354453",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2709B_6F5B_15AE_41B4_994457E04CFA",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC94096_6F5B_15A6_41D5_BE3EAF797495",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCAF092_6F5B_15BE_41D8_93F9F4E41FD2",
 "class": "FadeInEffect"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163226_00_394",
 "id": "panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_7FBFE7D7_6CCC_7297_41D9_F71DCE151717",
  "this.overlay_79D4BD4E_6CCC_37F9_41C4_1F50E86210AF",
  "this.overlay_78E8A721_6CCC_33AB_4199_B5FD5880C6FB",
  "this.overlay_7A4B3CE9_6EBB_0D6B_41DB_698352DB68A5",
  "this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": -112.55,
   "yaw": 34.69,
   "panorama": "this.panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2",
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "backwardYaw": -131.02,
   "yaw": -32.16,
   "panorama": "this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_t.jpg"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/f/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/f/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/f/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "thumbnailUrl": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_t.jpg",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/u/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/u/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/u/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/r/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/r/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/r/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/b/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/b/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/b/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/d/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/d/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/d/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/l/0/{row}_{column}.jpg",
      "height": 2048,
      "colCount": 4,
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/l/1/{row}_{column}.jpg",
      "height": 1024,
      "colCount": 2,
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0/l/2/{row}_{column}.jpg",
      "height": 512,
      "colCount": 1,
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel"
     }
    ]
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "hfovMin": "135%",
 "label": "IMG_20220415_163338_00_395",
 "id": "panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2",
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0,
 "overlays": [
  "this.overlay_7F8440A0_6CD4_CEA9_41A3_4C9CEF04EE06",
  "this.overlay_7BA03D75_6EFF_0F7B_41C9_BF9672DCAF5B",
  "this.panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_tcap0"
 ],
 "adjacentPanoramas": [
  {
   "backwardYaw": 34.69,
   "yaw": -112.55,
   "panorama": "this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE",
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "hfovMax": 130,
 "partial": false,
 "hfov": 360,
 "thumbnailUrl": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_t.jpg"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72C94146_6F6B_3499_41C6_1257A3A07B16",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D2F13C_6F6B_34E9_41A5_D336B1DE18A9",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE9095_6F5B_15BA_41C1_FFBC83DA58F0",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5908D_6F5B_15AB_41B0_C400D55922A7",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2409A_6F5B_15AE_41D1_5A8A4E9A9B4D",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CB0145_6F6B_349B_41D0_4ED15B93D8A5",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCA5093_6F5B_15BE_41C0_1B5F44511D4D",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D1213D_6F6B_34EB_419B_ABDF2405EF35",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC5D091_6F5B_15BA_41DB_38B918B37E93",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CE0146_6F6B_3499_41C6_4A977A121746",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D3A13C_6F6B_34E9_41D2_256A394BD6FF",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1879F1_6F79_377B_41B9_991E3656DB00",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FC88094_6F5B_15BA_41B9_EB2F2C508E89",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE8097_6F5B_15A6_41C6_D2B14510EB0C",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_7134FDB7_6F77_0FE7_41BC_1825E7353625",
 "class": "FadeOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_4FC4808C_6F5B_15A9_4198_5538607DC08B",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCE2097_6F5B_15A6_41D0_799E00D2DBA5",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCF1098_6F5B_15AA_41D5_D35B1F57EC40",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4E1B59F1_6F79_377B_4199_731E3765772B",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCAC090_6F5B_15B9_41D2_B006C625E751",
 "class": "FadeInEffect"
},
{
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_664516D7_6CD4_D297_4176_28C8001BAB83_camera",
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -151.94,
  "class": "PanoramaCameraPosition",
  "pitch": -2.08
 }
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCB7094_6F5B_15BA_41AB_BEDE2B287F16",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FD2009A_6F5B_15AE_41D5_8C227D1165B8",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_71341DB6_6F77_0FF9_41CB_062B6A4997FE",
 "class": "FadeInEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72CA5143_6F6B_349F_41BF_8B4CE2930431",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D3013C_6F6B_34E9_41D9_1C1C9CA2A331",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_72D1A13D_6F6B_34EB_41B3_BC14A1039E45",
 "class": "FadeOutEffect"
},
{
 "duration": 1000,
 "easing": "cubic_in_out",
 "id": "effect_4FCAA090_6F5B_15B9_41A7_E1103BD0016E",
 "class": "FadeInEffect"
},
{
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "progressOpacity": 1,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "firstTransitionDuration": 0,
 "width": "100%",
 "vrPointerSelectionTime": 2000,
 "minHeight": 50,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadow": true,
 "toolTipFontColor": "#FFFFFF",
 "progressBottom": 55,
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipBackgroundColor": "#000000",
 "minWidth": 100,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingRight": 10,
 "playbackBarBorderColor": "#FFFFFF",
 "height": "100%",
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "shadow": false,
 "toolTipPaddingLeft": 10,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "transitionDuration": 500,
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "paddingTop": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "paddingRight": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "top": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 7,
 "transitionMode": "blending",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarBorderSize": 0,
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1
},
{
 "children": [
  "this.Label_0DD14F09_1744_0507_41AA_D8475423214A",
  "this.Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 15,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_72818B33_6F69_14FF_41A7_45013148B036"
 ],
 "id": "Container_72ADEB79_6F69_0B6B_41B9_7C1D1159C49D",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_72A0AE70_6F69_0D79_41B9_190E2E0FCBF7"
 ],
 "id": "Container_72C85EA3_6F69_0D9F_419B_3F9590D19889",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_71A78B24_6F77_7499_41A5_DFBAD75B2FD9"
 ],
 "id": "Container_71C4FB5A_6F77_74A9_41C0_57DE76584533",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_71CDCCFD_6F77_0D6B_41D2_14E42A2AE558"
 ],
 "id": "Container_71E8FD30_6F77_0CF9_41BB_F541DC32FE0E",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_7011DEAC_6F77_0DE9_41B0_01BDE96B60CB"
 ],
 "id": "Container_700D1EE1_6F77_0D9B_41D6_47A6248253B2",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_7035E032_6F77_14FE_41BA_4FF18F75148A"
 ],
 "id": "Container_7051206A_6F77_1569_41D9_5B08194682B4",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "children": [
  "this.Label_705931E3_6F77_179F_41B6_BACA65FE8AD8"
 ],
 "id": "Container_75EDF26C_6F77_1569_419D_81E09BE1EC74",
 "left": "1.81%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "left",
 "width": 573,
 "layout": "absolute",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "minHeight": 1,
 "verticalAlign": "top",
 "borderSize": 0,
 "top": "1.62%",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "height": 133,
 "scrollBarVisible": "rollOver",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "backgroundOpacity": 0,
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "visible": false,
 "data": {
  "name": "--STICKER"
 },
 "propagateClick": true,
 "paddingTop": 0
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_78C07593_6CD5_D768_41C9_CBE850C9010B",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 9.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_1_0.png",
      "width": 171,
      "class": "ImageResourceLevel",
      "height": 224
     }
    ]
   },
   "pitch": 14.59,
   "yaw": 23.23
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 20
     }
    ]
   },
   "hfov": 9.83,
   "yaw": 23.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 14.59
  }
 ],
 "id": "overlay_78FBB42B_6CCC_75BF_41BB_9AC0A82399C6",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66BDF6C5_6CD4_D2EB_41C7_C8B4C5695C2E_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE, this.camera_4FB81FF5_6F5B_0B7B_41C7_D4F275122259); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_0_1_0_map.gif",
      "width": 90,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 46.89,
   "yaw": -131.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.11
  }
 ],
 "id": "overlay_7E34E030_6CF4_4DA9_41BA_DA8B0E8101B0",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -141.64,
   "image": "this.AnimatedImageResource_7AC9F91E_6CCC_5F96_41D2_93600F94AE9F",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 0.51,
   "hfov": 7.69,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_1_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 7.69,
   "yaw": -141.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0.51
  }
 ],
 "id": "overlay_7F5D3EC1_6CF4_32EB_41C8_E9453DB3FE93",
 "data": {
  "label": "Arrow 06"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B, this.camera_4FA50FCE_6F5B_0BA9_41D9_29BA2214963A); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_2_1_0_map.gif",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 28.38,
   "yaw": -166.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.02
  }
 ],
 "id": "overlay_7F71C96F_6CF4_5FB2_41D6_88F14F7FA1B8",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B, this.camera_4FB31FDF_6F5B_0BA7_41CB_BA1677AC126C); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_4_1_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 21.64,
   "yaw": 168.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 6.09
  }
 ],
 "id": "overlay_786BE3F7_6CCC_3297_41C1_C2F29044E589",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -174.62,
   "image": "this.AnimatedImageResource_7CE6DF0D_6EF9_0CAB_41DA_67302DCCC5A2",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -32.25,
   "hfov": 16.48,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_8_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 16.48,
   "yaw": -174.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.25
  }
 ],
 "id": "overlay_7DA1D88A_6EAB_15A9_41D8_5114A64B4AFA",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_664516D7_6CD4_D297_4176_28C8001BAB83_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A, this.camera_4F543F86_6F5B_0B99_41B4_DC3A1EB3D7F6); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_0_3_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_0_4_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_0_5_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_60AB802C_6CD5_CDB9_41C7_79156D5BF170",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 12.34,
   "image": "this.AnimatedImageResource_79FE7132_6CCD_CFA9_4193_EA355349EB40",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 5.53,
   "hfov": 3.49,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_1_0_6_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 3.49,
   "yaw": 12.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.53
  }
 ],
 "id": "overlay_62CFEECE_6CD4_D2F8_41D4_2222D252A7E8",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 8.76,
   "image": "this.AnimatedImageResource_79FE5133_6CCD_CFAF_41D9_DABE55C89AB5",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -19.58,
   "hfov": 9.74,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_2_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 9.74,
   "yaw": 8.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.58
  }
 ],
 "id": "overlay_6262DE34_6CD4_35A9_41D8_A552D00C33EE",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_0_1_0_map.gif",
      "width": 134,
      "class": "ImageResourceLevel",
      "height": 199
     }
    ]
   },
   "hfov": 56.19,
   "yaw": -152.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.54
  }
 ],
 "id": "overlay_632481AE_6EBA_F7E9_41D5_9243BDF48D36",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -175.54,
   "image": "this.AnimatedImageResource_7D01B681_6EB9_7D9B_41D4_D07E2107A5B3",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -11.88,
   "hfov": 12.01,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_1_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 12.01,
   "yaw": -175.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.88
  }
 ],
 "id": "overlay_606EBB2C_6EBB_14EA_41D2_631ABACF5D30",
 "data": {
  "label": "Circle 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615, this.camera_4F847015_6F5B_14BB_41B4_D38FEE225B35); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 133
     }
    ]
   },
   "hfov": 100.37,
   "yaw": -35.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 2.45
  }
 ],
 "id": "overlay_613358B9_6EBB_15EB_41D5_10FFB8181A48",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -51.93,
   "image": "this.AnimatedImageResource_7D002681_6EB9_7D9B_41D6_42392CBB7CB3",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 3.68,
   "hfov": 4.79,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 4.79,
   "yaw": -51.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 3.68
  }
 ],
 "id": "overlay_613B22DB_6EBB_15AF_41D7_C92402745543",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B, this.camera_4F5DEFAC_6F5B_0BE9_415B_DF862A525C1E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 89.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_0_0.png",
      "width": 1707,
      "class": "ImageResourceLevel",
      "height": 2048
     }
    ]
   },
   "pitch": 4.2,
   "roll": 0,
   "yaw": 80.14
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_0_1_0_map.gif",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 89.73,
   "yaw": 80.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 4.2
  }
 ],
 "id": "overlay_78B7E156_6CCB_CFE9_41C4_B8D652EDEBE7",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 55.12,
   "image": "this.AnimatedImageResource_78B8B5F6_6CFC_36A9_41C6_A5CB949AEBFD",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -0.4,
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 8.91,
   "yaw": 55.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.4
  }
 ],
 "id": "overlay_78B0AEEC_6CF5_F2B8_41B3_4798D4F7E5FE",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_2_1_0_map.gif",
      "width": 81,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 36.06,
   "yaw": 1.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.22
  }
 ],
 "id": "overlay_7848CB98_6CD4_F299_4192_2FB04B4CDC79",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "hfov": 4.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_4_0.png",
      "width": 82,
      "class": "ImageResourceLevel",
      "height": 113
     }
    ]
   },
   "pitch": 5.93,
   "yaw": -2.67
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 22
     }
    ]
   },
   "hfov": 4.87,
   "yaw": -2.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 5.93
  }
 ],
 "id": "overlay_78B7E725_6CCC_D3AB_41CF_861B9E004EF9",
 "data": {
  "label": "Circle Door 02"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83, this.camera_4FE8E061_6F5B_149B_41D2_FD393B2B84F3); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_79F4544E_6CF4_35F9_41D5_BE5500B662CC",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731, this.camera_4F9CD041_6F5B_149B_41D7_44B02F9EFBB4); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_1_1_6_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 42.37,
   "yaw": -161.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.2
  }
 ],
 "id": "overlay_7B45FB9D_6CF4_329B_41AA_966D07D76CB4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -119.21,
   "image": "this.AnimatedImageResource_7AC6B91D_6CCC_5F9B_41D2_3409AAF31FDB",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.78,
   "hfov": 10.9,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_2_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 10.9,
   "yaw": -119.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.78
  }
 ],
 "id": "overlay_7A2D445E_6CF4_5599_41D0_EEE4DE5788AF",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -156.95,
   "image": "this.AnimatedImageResource_7B892D1A_6EA9_0CA9_41CC_13BF0DCE1B51",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.79,
   "hfov": 18.51,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 18.51,
   "yaw": -156.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.79
  }
 ],
 "id": "overlay_7C5865CA_6EA9_1FA9_41DB_1A2F66271D14",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2, this.camera_4FF40072_6F5B_1579_41D8_9439EE32A706); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_0_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_0_2_1_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_7FBFE7D7_6CCC_7297_41D9_F71DCE151717",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": 19.16,
   "image": "this.AnimatedImageResource_79EE5F08_6CD5_F379_41B2_28E9D406B70C",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 1.01,
   "hfov": 12.24,
   "distance": 100
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_1_0_6_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 12.24,
   "yaw": 19.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 1.01
  }
 ],
 "id": "overlay_79D4BD4E_6CCC_37F9_41C4_1F50E86210AF",
 "data": {
  "label": "Circle Point 02c"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_664516D7_6CD4_D297_4176_28C8001BAB83, this.camera_4FC4808C_6F5B_15A9_4198_5538607DC08B); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_2_1_0_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_2_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_2_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_2_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_78E8A721_6CCC_33AB_4199_B5FD5880C6FB",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -25.09,
   "image": "this.AnimatedImageResource_7B8B4D1C_6EA9_0CA9_41B7_0937D3FF7FA6",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.32,
   "hfov": 16.31,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_4_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 16.31,
   "yaw": -25.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.32
  }
 ],
 "id": "overlay_7A4B3CE9_6EBB_0D6B_41DB_698352DB68A5",
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE, this.camera_4F91A025_6F5B_149B_41BD_242E027CF661); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_0_1_2_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -180,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_0_2_3_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 0
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_0_3_4_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 90
  },
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_0_4_5_map.gif",
      "width": 200,
      "class": "ImageResourceLevel",
      "height": 200
     }
    ]
   },
   "hfov": 90,
   "yaw": 0,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -90
  }
 ],
 "id": "overlay_7F8440A0_6CD4_CEA9_41A3_4C9CEF04EE06",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "items": [
  {
   "yaw": -155.7,
   "image": "this.AnimatedImageResource_7875C3A4_6EFF_1B9A_41D9_8ACD2FE637E0",
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -33.46,
   "hfov": 16.66,
   "distance": 50
  }
 ],
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_2_0_6_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "hfov": 16.66,
   "yaw": -155.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.46
  }
 ],
 "id": "overlay_7BA03D75_6EFF_0F7B_41C9_BF9672DCAF5B",
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "angle": 0,
 "inertia": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_tcap0.png",
    "width": 500,
    "class": "ImageResourceLevel",
    "height": 500
   }
  ]
 },
 "rotate": false,
 "hfov": 45,
 "id": "panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_tcap0",
 "distance": 50,
 "class": "TripodCapPanoramaOverlay"
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_0DD14F09_1744_0507_41AA_D8475423214A",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "Entrance",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": 90,
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Book",
 "id": "Label_0DD1AF09_1744_0507_41B4_9F5A60B503B2",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 388,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "Tour start",
 "verticalAlign": "top",
 "borderSize": 0,
 "textShadowHorizontalLength": 0,
 "minWidth": 1,
 "bottom": 0,
 "height": 46,
 "fontSize": 41,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 2"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "normal",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_72818B33_6F69_14FF_41A7_45013148B036",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "Living room",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_72A0AE70_6F69_0D79_41B9_190E2E0FCBF7",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "ground floor stairs",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "66px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_71A78B24_6F77_7499_41A5_DFBAD75B2FD9",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "Stair landing 1",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_71CDCCFD_6F77_0D6B_41D2_14E42A2AE558",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "First floor",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_7011DEAC_6F77_0DE9_41B0_01BDE96B60CB",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "stair landing ",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_7035E032_6F77_14FE_41BA_4FF18F75148A",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "second floor",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "fontFamily": "Bebas Neue Bold",
 "id": "Label_705931E3_6F77_179F_41B6_BACA65FE8AD8",
 "left": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "textShadowColor": "#000000",
 "horizontalAlign": "left",
 "width": 454,
 "paddingBottom": 0,
 "textShadowBlurRadius": 10,
 "minHeight": 1,
 "text": "Bathroom",
 "verticalAlign": "top",
 "borderSize": 0,
 "top": 5,
 "minWidth": 1,
 "height": 86,
 "fontSize": "80px",
 "textShadowHorizontalLength": 0,
 "class": "Label",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "textShadowOpacity": 1,
 "backgroundOpacity": 0,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "borderRadius": 0,
 "data": {
  "name": "text 1"
 },
 "textDecoration": "none",
 "propagateClick": true,
 "fontWeight": "bold",
 "paddingTop": 0
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7AC9F91E_6CCC_5F96_41D2_93600F94AE9F",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_1_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7CE6DF0D_6EF9_0CAB_41DA_67302DCCC5A2",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_664516D7_6CD4_D297_4176_28C8001BAB83_0_HS_8_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_79FE7132_6CCD_CFA9_4193_EA355349EB40",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_79FE5133_6CCD_CFAF_41D9_DABE55C89AB5",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_66BC21CE_6CD4_CEF8_41BB_7F13DD0B8615_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7D01B681_6EB9_7D9B_41D4_D07E2107A5B3",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7D002681_6EB9_7D9B_41D6_42392CBB7CB3",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_622C5F94_6EB9_0BB9_41A9_47887668F12A_1_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_78B8B5F6_6CFC_36A9_41C6_A5CB949AEBFD",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_66BFA189_6CD4_4F7B_41B5_B91320BE7731_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7AC6B91D_6CCC_5F9B_41D2_3409AAF31FDB",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7B892D1A_6EA9_0CA9_41CC_13BF0DCE1B51",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_66B2AC11_6CD4_356A_41C9_DF380877AC7B_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_79EE5F08_6CD5_F379_41B2_28E9D406B70C",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 21,
 "levels": [
  {
   "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7B8B4D1C_6EA9_0CA9_41B7_0937D3FF7FA6",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_66B2716F_6CD4_CFB7_41BC_132F3E1D10DE_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_7875C3A4_6EFF_1B9A_41D9_8ACD2FE637E0",
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_66BB3C47_6CD4_F5F7_41BE_761F8FE71CC2_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource"
}],
 "minWidth": 20,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "height": "100%",
 "scrollBarMargin": 2,
 "shadow": false,
 "contentOpaque": false,
 "borderRadius": 0,
 "mouseWheelEnabled": true,
 "data": {
  "name": "Player468"
 },
 "defaultVRPointer": "laser",
 "vrPolyfillScale": 0.5,
 "scripts": {
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "registerKey": function(key, value){  window[key] = value; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "unregisterKey": function(key){  delete window[key]; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getKey": function(key){  return window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } }
 },
 "propagateClick": true,
 "downloadEnabled": false,
 "paddingTop": 0
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
