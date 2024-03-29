<script src="https://ajax.aspnetcdn.com/ajax/jquery/jquery-1.9.0.min.js"></script>
<script src="../../custom/js/replace_network_skplist.js"></script>

# Zucks広告の導入

## 対応OS

iOS 12以上

## SDKの準備

ZucksのSDKは、SwipeInterstitialSDKBundledのパッケージに同梱されております。
作成された広告枠枠の`スワイプインタースティシャルSDK (iOS)`より取得いただけます。

### CocoaPodsを利用して組み込む場合

CocoaPodsでの導入については[こちら](../init/cocoapods.md)をご覧ください。

Zucksを利用される場合、Podfileに下記の記述を追記します。

```
pod 'AdStir-Ads-SDK/Zucks'
```

### CocoaPodsを利用せず組み込む場合

#### プロジェクトへのSDKの追加

1. `libAdstirAdsMediationAdapter-Zucks.a`、`ZucksAdNetworkSDK.framework`を、プロジェクト内の任意の箇所にドラッグ&ドロップします。
1. `Copy items if needed`にチェックを入れます。
1. `Add to targets`欄で、AdStir SDKを利用するすべてのターゲットにチェックを入れます。
1. `Finish`をクリックします。

#### ビルド設定の変更

1. プロジェクトファイル設定画面を開きます。
1. 動画広告を組み込むビルドターゲットを選択します。
1. **Build Target**タブを選択します。
1. 画面右側の検索窓に**Other Linker Flags**と入力し、検索します。
1. **Other Linker Flags**欄に、**-ObjC**と設定します。
Zucks広告を利用するためには、この設定が必須となり、設定がされていない場合は、案件切れ扱いとなってしまいます。
1. 組み込む対象の全てのビルドターゲットに、同じ設定を行います。
もしくは、この設定はプロジェクト単位で設定することも可能です。

## Info.plistの更新

iOS 14以降で[SKAdNetwork](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
```

## SDKが取得するプライバシー情報

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。

Zucks SDKが取得するプライバシーデータは[こちら](../info/nw_privacy.md#zucks)をご覧ください
