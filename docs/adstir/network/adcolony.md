<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# AdColony広告の導入

## 対応OS

iOS 10.0以上

## SDKの準備

AdColonyのSDKは、VideoAdSDKBundledのパッケージに同梱されております。
作成された動画枠の`動画SDK (iOS)`より取得いただけます。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

AdColonyを利用される場合、Podfileに下記の記述を追記します。

```
pod 'AdStir-Ads-SDK/AdColony'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `AdColony`フォルダを、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、`AdColony`を利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### ビルド設定の変更

1. プロジェクトファイル設定画面を開きます。
1. 動画広告を組み込むビルドターゲットを選択します。
1. **Build Target**タブを選択します。
1. 画面右側の検索窓に**Other Linker Flags**と入力し、検索します。
1. **Other Linker Flags**欄に、**-ObjC**と **-fobjc-arc**を設定します。
1. 組み込む対象の全てのビルドターゲットに、同じ設定を行います。
もしくは、この設定はプロジェクト単位で設定することも可能です。

#### 依存Framework/Libraryの追加

名前|ステータス
----|----
libz.1.2.5.tbd|Required
AudioToolbox.framework|Required
JavaScriptCore.framework|Required
MessageUI.framework|Required
MobileCoreServices.framework|Required
Social.framework|Optional
StoreKit.framework|Optional
WatchConnectivity.framework|Optional
WebKit.framework|Optional

## ATSの設定

Info.plistに下記の記述を追加します。

```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <false/>
    <key>NSAllowsLocalNetworking</key>
    <true/>
    <key>NSAllowsArbitraryLoadsInWebContent</key>
    <true/>
</dict>
```


## Info.plistの更新

iOS 14以降で[SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
```

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

AdColony SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#adcolony)をご覧ください
