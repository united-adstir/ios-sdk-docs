# AdMob広告について

## 前提条件

* Xcode 12.5以上
* iOS 10.0以上

## 事前準備

[AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja)を参考に、AdMobの設定をおこなってください。
AdMobアダプタはGoogle Mobile Ads SDK version 9.0.0でビルドおよびテストを行なっています。

### メディエーションの準備

[AdMobメディエーション](https://developers.google.com/admob/ios/mediate?hl=ja)を行うために、アドネットワークのSDKとアダプターをプロジェクトへ導入します。

#### CocoaPodsを利用している場合
Podfileへ下記のものを記述することで、adstirが利用するアドネットワークのSDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AdMob-Package'
```

#### 手動で導入する場合

1. [こちら](../adstir/init/manual_integration.md#sdkの手動組み込み)を参考にadstirの動画パッケージを組み込みます。
1. [AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja#manual_download)を参考にGoogleMobileAds SDKを導入します。
1. AdMobメディエーションで利用できる各アドネットワークのアダプターをダウンロードします。
    * [AdColony](https://dl.google.com/googleadmobadssdk/mediation/ios/adcolony/AdColonyAdapter-{{config.version.adcolony}}.0.zip)
    * [AppLovin](https://dl.google.com/googleadmobadssdk/mediation/ios/applovin/AppLovinAdapter-{{config.version.applovin}}.0.zip)
    * [maio](https://dl.google.com/googleadmobadssdk/mediation/ios/maio/MaioAdapter-{{config.version.maio}}.0.zip)
    * [nend](https://dl.google.com/googleadmobadssdk/mediation/ios/nend/NendAdapter-{{config.version.nend}}.0.zip)
    * [TapJoy](https://dl.google.com/googleadmobadssdk/mediation/ios/tapjoy/TapjoyAdapter-{{config.version.tapjoy}}.0.zip)
    * [UnityAds](https://dl.google.com/googleadmobadssdk/mediation/ios/unity/UnityAdapter-{{config.version.unityads}}.0.zip)
1. ダウンロードしたzipファイルを解凍し、各frameworkをプロジェクトへ追加します。

### iOS 14以降への対応

[こちら](../adstir/init/ios14.md)のページを参考にiOS 14以降へのご対応をお願いいたします。

## 広告の実装

AdMobの実装ガイドをご覧ください。

* [バナー](https://developers.google.com/admob/ios/banner?hl=ja)
* [インタースティシャル](https://developers.google.com/admob/ios/interstitial?hl=ja)
* [ネイティブ](https://developers.google.com/admob/ios/native/start?hl=ja)
* [動画リワード](https://developers.google.com/admob/ios/rewarded-ads?hl=ja)
* [アダプティブバナー](https://developers.google.com/admob/ios/banner/adaptive?hl=ja)

    !!! warning
        アダプティブバナーを実装する場合は、最新バージョンのGoogle Mobile Ads SDK をご利用ください。

### テストデバイスの追加

開発時には[テストデバイスを追加する](https://developers.google.com/admob/ios/test-ads#add_your_test_device)より、広告リクエスト時にデバイスIDの設定をおこなってください。
こちらの設定をおこなった際には、アプリケーションのリリース前には該当コードの削除をお願いいたします。

## アプリケーションのプライバシー

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。
adstir SDKが収集するデータは[こちら](../adstir/info/privacy.md)を参考にご回答ください。

AdMobが取得するデータは[こちら](https://developers.google.com/admob/ios/data-disclosure?hl=ja)をご参考ください。
