# AdMob広告について

## 前提条件

* Xcode 15.1以上
* iOS 12.0以上

## 事前準備

[AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja)を参考に、AdMobの設定をおこなってください。
AdMobアダプタは[Google Mobile Ads SDK version {{config.version.google}}](https://developers.google.com/admob/ios/rel-notes)でビルドおよびテストを行なっています。

### メディエーションの準備

[AdMobメディエーション](https://developers.google.com/admob/ios/mediate?hl=ja)を行うために、アドネットワークのSDKとアダプターをプロジェクトへ導入します。

#### CocoaPodsを利用している場合
Podfileへ下記のものを記述することで、adstirが利用するアドネットワークのSDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AdMobMediationAdapter'
pod 'AdStir-Ads-SDK/AppLovin'
pod 'AdStir-Ads-SDK/IMobile'
pod 'AdStir-Ads-SDK/IronSource'
pod 'AdStir-Ads-SDK/Maio'
pod 'AdStir-Ads-SDK/TikTok'
pod 'AdStir-Ads-SDK/UnityAds'
```

#### 手動で導入する場合

1. [こちら](../adstir/init/manual_integration.md#sdkの手動組み込み)を参考にadstirの動画パッケージを組み込みます。
    * バナー広告のみをご利用される場合は営業担当までお問い合わせください
1. [AdMobのスタートガイド](https://developers.google.com/admob/ios/quick-start?hl=ja#manual_download)を参考にGoogleMobileAds SDKを導入します。

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
