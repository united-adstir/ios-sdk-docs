<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# ironSource広告の導入

* Xcode 15.1, 15.2ではビルドできませんのでXcode 15.3以上をお使いください

## 対応OS

iOS 12.0以上

## SDKの準備

IronSourceのSDKは、VideoAdSDKBundledのパッケージに同梱されております。
作成された動画枠の`動画SDK (iOS)`より取得いただけます。

バナー広告を利用し、CocoaPodsを利用していない場合は営業担当までお問い合わせください。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

IronSourceを利用される場合、Podfileに下記の記述を追記します。

```
pod 'AdStir-Ads-SDK/IronSource'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `IronSoure`フォルダを、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、`IronSource`を利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### 依存Framework/Libraryの追加

名前|ステータス
----|----
libz.tbd|Required
libsqlite3.0.tbd|Required
JavaScriptCore.framework|Required
WebKit.framework|Required
AdSupport.framework|Required
SystemConfiguration.framework|Required

## Info.plistの更新

iOS 14以降で[SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
```

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

ironSource SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#ironsource)をご覧ください
