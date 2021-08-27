# AdManager広告について

## 前提条件

* Xcode 12.5以上
* iOS 10.0以上

## 事前準備

[AdManagerのスタートガイド](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/quick-start)を参考に、AdManagerの設定をおこなってください。

[Ad Manager app ID](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/quick-start#update_your_infoplist)は弊社で登録後、営業担当よりお伝えします。

### メディエーションの準備

[メディエーション](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/mediate)を行うために、アドネットワークのSDKとアダプターをプロジェクトへ導入します。

#### CocoaPodsを利用している場合

Podfileへ下記のものを記述することで、adstirが利用するアドネットワークのSDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AdMobMediationAdapter'
pod 'AdStir-Ads-SDK/AdColony'
pod 'AdStir-Ads-SDK/AdCorsa'
pod 'AdStir-Ads-SDK/AppLovin'
pod 'AdStir-Ads-SDK/IMobile'
pod 'AdStir-Ads-SDK/Maio'
pod 'AdStir-Ads-SDK/MoPub'
pod 'AdStir-Ads-SDK/Nend'
pod 'AdStir-Ads-SDK/TapJoy'
pod 'AdStir-Ads-SDK/TikTok'
pod 'AdStir-Ads-SDK/UnityAds'
```

#### 手動で導入する場合

1. [こちら](../adstir/init/manual_integration.md#sdkの手動組み込み)を参考にadstirの動画パッケージとGoogleMobileAds用アダプターを組み込みます。
1. [AdManagerのスタートガイド](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/quick-start)を参考にGoogleMobileAds SDKを導入します。

### iOS 14以降への対応

[こちら](../adstir/init/ios14.md)のページを参考にiOS 14以降へのご対応をお願いいたします。

## 広告の実装

AdManagerの実装ガイドをご覧ください。
ad_unit_idは営業担当よりお伝えしますが、もともとのad_unit_idが

```
/1234/banner_id
```

の場合、先頭にadstirのネットワークコード(34264398)とカンマを追加し、

```
/34264398,1234/banner_id
```
となります。

* [バナー](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/banner)
* [インタースティシャル](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/interstitial)
* [ネイティブ](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/native/start)
* [動画リワード](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/rewarded)
* [アダプティブバナー](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/banner/adaptive)

    !!! warning
        アダプティブバナーを実装する場合は、最新バージョンのGoogle Mobile Ads SDK をご利用ください。


### テストデバイスの追加

開発時には[テストデバイスを追加する](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/test-ads#enable_test_devices)より、広告リクエスト時にデバイスIDの設定をおこなってください。
こちらの設定をおこなった際には、アプリケーションのリリース前には該当コードの削除をお願いいたします。

## アプリケーションのプライバシー

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。
adstir SDKが収集するデータは[こちら](../adstir/info/privacy.md)を参考にご回答ください。

Google Mobile Adsが取得するデータは[こちら](https://developers.google.com/ad-manager/mobile-ads-sdk/ios/data-disclosure)をご参考ください。
