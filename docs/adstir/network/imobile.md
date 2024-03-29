<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# imobile広告の導入

## 対応OS

iOS 12.0以上

## SDKの準備

IMobileのSDKは、VideoAdSDKBundledのパッケージに同梱されております。
作成された動画枠の`動画SDK (iOS)`より取得いただけます。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

IMobileを利用される場合、Podfileに下記の記述を追記します。

```
pod 'AdStir-Ads-SDK/IMobile'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `IMobile`フォルダを、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、`IMobile`を利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### 依存Framework/Libraryの追加

名前|ステータス
----|----
SystemConfiguration.framework|Required
CoreLocation.framework|Required

## Info.plistの更新

iOS 14以降で[SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
```

## ユーザデータアクセス許可に関する設定

IMobileでは`CoreLocation.framework`を利用していますので、
[こちら](../info/user_data.md)を参考に設定を行ってください。

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

imobile SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#imobile)をご覧ください
