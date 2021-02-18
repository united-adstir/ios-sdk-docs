<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# TapJoy広告の導入

## 対応OS

iOS 10.0以上

## SDKの準備

TapJoyのSDKは、VideoAdSDKBundledのパッケージに同梱されております。
作成された動画枠の`動画SDK (iOS)`より取得いただけます。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

TapJoyを利用される場合、Podfileに下記の記述を追記します。  

```
pod 'AdStir-Ads-SDK/TapJoy'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `TapJoy`フォルダを、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、`TapJoy`を利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### 依存Framework/Libraryの追加
名前|ステータス
----|----
MediaPlayer.framework|Required
CoreMotion.framework|Required
StoreKit.framework|Required
MessageUI.framework|Required
ImageIO.framework|Required
MobileCoreServices.framework|Required
libc++.tbd|Required
libz.tbd|Required

## ユーザデータアクセス許可に関する設定

TapJoyでは`CoreLocation.framework`, `CoreMotion.framework`を利用していますので、
[こちら](../info/user_data.md)を参考に設定を行ってください。

## Info.plistの更新

iOS 14以降で[SKAdNetwork 2.0](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
```

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

TapJoy SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#tapjoy)をご覧ください