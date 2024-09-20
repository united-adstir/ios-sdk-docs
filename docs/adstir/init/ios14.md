<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/update_skplist.js"></script>

# iOS 14以降の対応

## info.plistの更新

iOS 14以降で[SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加してください。
利用するネットワークにチェックを入れて更新を押すと、SKAdNetworkItemsが更新されます。

!!! info
    SKAdNetworkIdsの最終更新日 : {{config.skadnid_updated_at}}

- [x] adstir
- [x] AppLovin
- [x] imobile
- [x] ironSource
- [x] maio
- [x] TikTok
- [x] UnityAds
- [x] Zucks

[更新](javascript:update_items()){: .md-button .md-button--primary }


```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>arq2d5wxeq.skadnetwork</string>
    </dict>
    <!--  imobile  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>v4nxqhlyqp.skadnetwork</string>
    </dict>
    <!--  gunosy  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>5594BLYGHF.skadnetwork</string>
    </dict>
    <!--  RTB House  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>8s468mfl3y.skadnetwork</string>
    </dict>
    <!--  Logicad  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>XY9T38CT57.skadnetwork</string>
    </dict>
    <!--  Unicorn  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>578prtvx9j.skadnetwork</string>
    </dict>
    <!--  VRize  -->
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>r8lj5b58b5.skadnetwork</string>
    </dict>
</array>
```
