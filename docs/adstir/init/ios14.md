# iOS 14以降の対応

## info.plistの更新

iOS 14以降で[SKAdNetwork 2.0](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加してください。

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>arq2d5wxeq.skadnetwork</string>
    </dict>
    <dict>
        <!--  AdColony, Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>4PFYVQ9L8R.skadnetwork</string>
    </dict>
    <dict>
        <!--  Jampp LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>YCLNXRL5PM.skadnetwork</string>
    </dict>
    <dict>
        <!--  Appier LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>V72QYCH5UU.skadnetwork</string>
    </dict>
    <dict>
        <!--  PubNative GMBH  -->
        <key>SKAdNetworkIdentifier</key>
        <string>TL55SBB4FM.skadnetwork</string>
    </dict>
    <dict>
        <!--  LifeStreet Corporation  -->
        <key>SKAdNetworkIdentifier</key>
        <string>T38B2KH725.skadnetwork</string>
    </dict>
    <dict>
        <!--  CrossInstall  -->
        <key>SKAdNetworkIdentifier</key>
        <string>PRCB7NJMU6.skadnetwork</string>
    </dict>
    <dict>
        <!--  Smadex SL  -->
        <key>SKAdNetworkIdentifier</key>
        <string>PPXM28T8AP.skadnetwork</string>
    </dict>
    <dict>
        <!--  Triapodi Ltd.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>mlmmfzh3r3.skadnetwork</string>
    </dict>
    <dict>
        <!-- Sift -->
        <key>SKAdNetworkIdentifier</key>
        <string>KLF5C3L5U5.skadnetwork</string>
    </dict>
    <dict>
        <!--  Criteo Corp  -->
        <key>SKAdNetworkIdentifier</key>
        <string>hs6bdukanm.skadnetwork</string>
    </dict>
    <dict>
        <!--  Beeswax  -->
        <key>SKAdNetworkIdentifier</key>
        <string>c6k4g5qg8m.skadnetwork</string>
    </dict>
    <dict>
        <!--  Moloco, Inc  -->
        <key>SKAdNetworkIdentifier</key>
        <string>9T245VHMPL.skadnetwork</string>
    </dict>
    <dict>
        <!--  Criteo SA (Manage.com)  -->
        <key>SKAdNetworkIdentifier</key>
        <string>9RD848Q2BZ.skadnetwork</string>
    </dict>
    <dict>
        <!--  RTBHouse Pte LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>8s468mfl3y.skadnetwork</string>
    </dict>
    <dict>
        <!--  Liftoff Mobile, Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>7UG5ZH24HU.skadnetwork</string>
    </dict>
    <dict>
        <!--  Aarki, Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>4FZDC2EVR5.skadnetwork</string>
    </dict>
    <dict>
        <!--  Realtime Technologies GmbH  -->
        <key>SKAdNetworkIdentifier</key>
        <string>4468km3ulz.skadnetwork</string>
    </dict>
    <dict>
        <!--  YouAppi Inc  -->
        <key>SKAdNetworkIdentifier</key>
        <string>3RD42EKR43.skadnetwork</string>
    </dict>
    <dict>
        <!-- Remerge -->
        <key>SKAdNetworkIdentifier</key>
        <string>2U9PT9HC89.skadnetwork</string>
    </dict>
    <dict>
        <!--  Mintegral  -->
        <key>SKAdNetworkIdentifier</key>
        <string>KBD757YWX3.skadnetwork</string>
    </dict>
    <dict>
        <!--  Bidmachine  -->
        <key>SKAdNetworkIdentifier</key>
        <string>wg4vff78zm.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>737z793b9f.skadnetwork</string>
    </dict>
    <dict>
        <!--  Adikteev SA  -->
        <key>SKAdNetworkIdentifier</key>
        <string>ydx93a7ass.skadnetwork</string>
    </dict>
    <dict>
        <!--  Persona.ly LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>44jx6755aq.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>W9Q455WK68.skadnetwork</string>
    </dict>
    <dict>
        <!--  Sabio Mobile Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>GLQZH8VGBY.skadnetwork</string>
    </dict>
    <dict>
        <!--  ScaleMonk Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>av6w8kgt66.skadnetwork</string>
    </dict>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>6xzpu9s2p8.skadnetwork</string>
    </dict>

    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>eh6m2bh4zr.skadnetwork</string>
    </dict>
    <dict>
        <!--  BYTEMOD PTE. LTD-CN  -->
        <key>SKAdNetworkIdentifier</key>
        <string>238da6jt44.skadnetwork</string>
    </dict>
    <dict>
        <!--  BYTEMOD PTE. LTD-global  -->
        <key>SKAdNetworkIdentifier</key>
        <string>22mmun2rn5.skadnetwork</string>
    </dict>
    <dict>
        <!--  Unity Technologies  -->
        <key>SKAdNetworkIdentifier</key>
        <string>4DZT52R2T5.skadnetwork</string>
    </dict>
    <dict>
        <!--  mkhoj Solutions Private Limited  -->
        <key>SKAdNetworkIdentifier</key>
        <string>WZMMZ9FP6W.skadnetwork</string>
    </dict>
    <dict>
        <!--  SPOTAD LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>f73kdq92p3.skadnetwork</string>
    </dict>
    <dict>
        <!--  Snap Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>424M5254LK.skadnetwork</string>
    </dict>
    <dict>
        <!--  Centro Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>3sh42y64q3.skadnetwork</string>
    </dict>
    <dict>
        <!--  Spyke Media GmbH  -->
        <key>SKAdNetworkIdentifier</key>
        <string>44n7hlldy6.skadnetwork</string>
    </dict>
    <dict>
        <!--  ADTIMING TECHNOLOGY PTE. LTD.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>488r3q3dtq.skadnetwork</string>
    </dict>
    <dict>
        <!--  Maiden Marketing Pvt Ltd.   -->
        <key>SKAdNetworkIdentifier</key>
        <string>zmvfpc5aq8.skadnetwork</string>
    </dict>
    <dict>
        <!--  DATASEAT LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>M8DBW4SV7C.skadnetwork</string>
    </dict>
    <dict>
        <!--  Apptimus LTD  -->
        <key>SKAdNetworkIdentifier</key>
        <string>lr83yxwka7.skadnetwork</string>
    </dict>
    <dict>
        <!--  Chartboost, Inc.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>F38H382JLK.skadnetwork</string>
    </dict>
    <dict>
        <!--  LoopMe Ltd  -->
        <key>SKAdNetworkIdentifier</key>
        <string>5lm9lj6jb7.skadnetwork</string>
    </dict>
    <dict>
        <!--  Google LLC  -->
        <key>SKAdNetworkIdentifier</key>
        <string>cstr6suwn9.skadnetwork</string>
    </dict>
    <dict>
        <!--  Kidoz Ltd.  -->
        <key>SKAdNetworkIdentifier</key>
        <string>v79kvwwj4g.skadnetwork</string>
    </dict>
    <dict>
        <!--  Unity Technologies  -->
        <key>SKAdNetworkIdentifier</key>
        <string>bvpn9ufa9b.skadnetwork</string>
    </dict>
    <dict>
        <!--  TapJoy  -->
        <key>SKAdNetworkIdentifier</key>
        <string>ECPZ2SRF59.skadnetwork</string>
    </dict>
    <dict>
        <!--  Unicorn  -->
        <key>SKAdNetworkIdentifier</key>
        <string>578prtvx9j.skadnetwork</string>
    </dict>
</array>
```