<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# AdCorsa広告の導入

## 対応OS

iOS 10.0以上

## SDKの準備

AdCorsaのSDKは、VideoAdSDKBundledのパッケージに同梱されております。
作成された動画枠の`動画SDK (iOS)`より取得いただけます。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

AdCorsaを利用される場合、Podfileに下記の記述を追記します。  

```
pod 'AdStir-Ads-SDK/AdCorsa'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `AdCorsa`フォルダを、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、`AdCorsa`を利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### 依存Framework/Libraryの追加

名前|ステータス
----|----
CoreGraphics.framework|Required
MediaPlayer.framework|Required
StoreKit.framework|Required
SystemConfiguration.framework|Required
WebKit.framework|Required
UIKit.framework|Required
SafariServices.framework|Required

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

AdCorsa SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#adcorsa)をご覧ください
