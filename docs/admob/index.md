# AdMob広告について

## 前提条件

* Xcode 12以上
* iOS 10.0以上

## 事前準備

[AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja)を参考に、AdMobの設定をおこなってください。
Google Mobile Ads SDKは7.53.0以上をご利用ください。  
Google Mobile Ads SDK v8以上をご利用の場合は、adstir SDK v2.15.15以上をご利用ください。

### メディエーションの準備

[AdMobメディエーション](https://developers.google.com/admob/ios/mediate?hl=ja)を行うために、アドネットワークのSDKとアダプターをプロジェクトへ導入します。

#### CocoaPodを利用している場合
Podfileへ下記のものを記述することで、adstirが利用するアドネットワークのSDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AdMob-Package'
```

#### 手動で導入する場合

1. [こちら](../adstir/init/manual_integration.md#sdkの手動組み込み)を参考にadstirの動画パッケージを組み込みます。
1. [AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja#manual_download)を参考にGoogleMobileAds SDKを導入します。
1. adstir SDKにbundleされていないアドネットワークのSDKをダウンロードします。
    * [Facebook](https://origincache.facebook.com/developers/resources/?id=FBAudienceNetwork-{{config.version.facebook}}.zip)
1. AdMobメディエーションで利用できる各アドネットワークのアダプターをダウンロードします。
    * [AdColony](https://google.bintray.com/mobile-ads-adapters-ios/AdColonyAdapter/{{config.version.adcolony}}.0/AdColonyAdapter-{{config.version.adcolony}}.0.zip)
    * [AppLovin](https://google.bintray.com/mobile-ads-adapters-ios/AppLovinAdapter/{{config.version.applovin}}.0/AppLovinAdapter-{{config.version.applovin}}.0.zip)
    * [Facebook](https://google.bintray.com/mobile-ads-adapters-ios/FacebookAdapter/{{config.version.facebook}}.1/FacebookAdapter-{{config.version.facebook}}.0.zip)
    * [maio](https://google.bintray.com/mobile-ads-adapters-ios/MaioAdapter/{{config.version.maio}}.0/MaioAdapter-{{config.version.maio}}.0.zip)
    * [MoPub](https://google.bintray.com/mobile-ads-adapters-ios/MoPubAdapter/{{config.version.mopub}}.0/MoPubAdapter-{{config.version.mopub}}.0.zip)
    * [nend](https://google.bintray.com/mobile-ads-adapters-ios/NendAdapter/{{config.version.nend}}.0/NendAdapter-{{config.version.nend}}.0.zip)
    * [TapJoy](https://google.bintray.com/mobile-ads-adapters-ios/TapjoyAdapter/{{config.version.tapjoy}}.0/TapjoyAdapter-{{config.version.tapjoy}}.0.zip)
    * [UnityAds](https://google.bintray.com/mobile-ads-adapters-ios/UnityAdapter/{{config.version.unityads}}.0/UnityAdapter-{{config.version.unityads}}.0.zip)
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

また、アドネットワークによっては追加で実装する必要がございます。
[追加実装](network.md#追加実装)をご覧になり、実装をお願いします。

### テストデバイスの追加

開発時には[テストデバイスを追加する](https://developers.google.com/admob/ios/test-ads#add_your_test_device)より、広告リクエスト時にデバイスIDの設定をおこなってください。
こちらの設定をおこなった際には、アプリケーションのリリース前には該当コードの削除をお願いいたします。

## アプリケーションのプライバシー

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。
adstir SDKが収集するデータは[こちら](../adstir/info/privacy.md)を参考にご回答ください。

AdMobが取得するデータは[こちら](https://developers.google.com/admob/ios/data-disclosure?hl=ja)をご参考ください。
