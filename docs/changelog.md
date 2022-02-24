# 変更履歴

 * [こちら](adstir/init/ios14.md#infoplistの更新)を参考にInfo.plistの更新をお願いします。

## v2.15.26 (2022/02/24)

* AdMobアダプタのGoogle Mobile Ads SDK v9 への対応
    * AdMobパッケージをご利用の方はGoogle Mobile Ads SDK v9以上をご利用ください
* bundle SDKの更新
    * [AppLovin 11.1.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_11_1_0)
    * IMobile 2.2.0
        * SKAdNetwork2.2のサポートが含まれております
        * Xcode13でビルドされております
    * [Maio 1.6.0](https://github.com/imobile-maio/maio-iOS-SDK/releases/tag/v1.6.0)
        *  Xcode13 以降をサポート対象とします
    * [TapJoy 12.9.0](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1290-2022-01-13)
        * Xcode13でビルドされております
    * [UnityAds 4.0.0](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.0.0)
        * Xcode13でビルドされております
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.0.0

## v2.15.25 (2022/02/17)

* SDKの安定性向上
* MoPub SDKのバンドル終了
* bundle SDKの更新
    * [AppLovin 11.0.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_11_0_0)
        * AdMobパッケージにはAppLovin用のAdMob用アダプターは含まれておりません
    * TikTok 4.2.0.2
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 8.13.0
* SKAdNetworkIdsの更新
    * [こちら](adstir/init/ios14.md#infoplistの更新)を参考にInfo.plistの更新をお願いします

## v2.15.24 (2021/11/15)

* SDKの安定性向上
* bundle SDKの更新
    * [AdColony 4.7.2](https://github.com/AdColony/AdColony-iOS-SDK/releases/tag/v4.7.2)
    * [AppLovin 10.3.6](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_3_6)
    * [MoPub 5.18.2](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.18.2)
        * iOS15に関する修正が含まれております
    * [Nend 7.1.0](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.1.0)
    * TikTok 4.0.0.2
        * SKAdNetwork3.0のサポートが含まれております

## v2.15.23 (2021/10/11)

* 動画広告プレイヤーの安定性向上
* AdCorsa SDKのバンドル終了
* [facebookのウォータフォールでの配信終了](https://www.facebook.com/business/help/178983086270324?id=211412110064838)に伴い、AdMobパッケージのfacebookのバンドル終了

## v2.15.22 (2021/09/21)

* AppLovinアダプタのサポートOSバージョンをiOS11以上に変更
* bundle SDKの更新
    * [AdColony 4.7.1](https://github.com/AdColony/AdColony-iOS-SDK/releases/tag/v4.7.1)
    * [AppLovin 10.3.5](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_3_5)
    * [Nend 7.0.6](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.0.6)
    * TikTok 3.9.0.4
        * SKAdNetwork2.2のサポートが含まれております
    * [UnityAds 3.7.5](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/3.7.5)

## v2.15.21 (2021/08/27)

* AdMobメディエーションのアダプタ改修 (バナー)

## v2.15.20 (2021/08/24)

* SKAdNetwork関連の修正
    * バナー関連の不具合を改修
* AdMobパッケージにMaioのAdMob用アダプターを追加
* bundle SDKの更新
    * [MoPub 5.18.0](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.18.0)

## v2.15.19 (2021/06/23)

* bundle SDKの更新
    * [AppLovin 10.3.2](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_3_2)
        * [10.3.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_3_0)で発生するSDKの初期化の不具合修正が含まれております

## v2.15.18 (2021/06/15)

* 対象開発環境をXcode 12.5以上に変更
* SKAdNetwork 2.2/3.0への対応
* 5Gネットワークへの対応
* UnityAdsアダプタのサポートOSバージョンをiOS12以上に変更
* bundle SDKの更新
    * [AdColony 4.6.1](https://github.com/AdColony/AdColony-iOS-SDK/releases/tag/v4.6.1)
        * SKAdNetwork関連の修正が含まれております
    * [AppLovin 10.3.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_3_0)
        * [10.0.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_10_0_0)でSKAdNetwork関連の修正が含まれております
    * IMobile 2.1.0
        * SKAdNetwork関連の修正が含まれております
    * [Maio 1.5.8](https://github.com/imobile-maio/maio-iOS-SDK/releases/tag/v1.5.8)
        * SKAdNetwork関連の修正が含まれております
        * AdMobパッケージにはMaio用のAdMob用アダプターは含まれておりません
    * [MoPub 5.17.0](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.17.0)
        * SKAdNetwork関連の修正が含まれております
    * [Nend 7.0.5](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.0.5)
        * [7.0.4](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.0.4)でSKAdNetwork関連の修正が含まれております
    * [TapJoy 12.8.1](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1281-2021-05-25)
        * SKAdNetwork関連の修正が含まれております
    * TikTok 3.5.1.2
        * SKAdNetwork関連の修正が含まれております
    * [UnityAds 3.7.2](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/3.7.2)


## v2.15.17 (2021/04/12)

* SKAdNetwork関連の修正
## v2.15.16 (2021/04/01)

* バナー広告の新フォーマットに対応しました
* bundle SDKの更新
    * [MoPub 5.16.2](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.16.2)
        * [5.16.0](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.16.0)でSKAdNetwork関連の修正や5Gへの対応が含まれております
        * AdMobパッケージにはMoPubのAdMob用アダプターは含まれておりません
    * [TapJoy 12.8.0](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1280-2021-03-16)
        * SKAdNetwork関連の修正が含まれております
        * AdMobパッケージにはTapJoyのAdMob用アダプターは含まれておりません
## v2.15.15 (2021/03/03)

* Google Mobile Ads SDK v8 への対応
    * v8 SDKではAPIが変更されています
    * AdMobをご利用でv8 SDKへ移行する場合は[こちら](https://developers.google.com/admob/ios/migration)を参考にしてください

## v2.15.14 (2021/02/18)

* iOS 14.5への対応
    * IDFA取得に関する修正が含まれております

## v2.15.13 (2021/01/28)

* AdMobパッケージにNendのAdMob用アダプターを追加
* bundle SDKの更新
    * [Zucks 4.11.0](https://github.com/zucks/ZucksAdNetworkSDK-iOS/releases/tag/4.11.0)
        * SKAdNetwork関連の修正が含まれております

## v2.15.12 (2021/01/25)

* 対象開発環境をXcode 12以上に変更
* SKAdNetwork関連の修正
* bundle SDKの更新
    * [AdCorsa 2.2.2](https://github.com/glossom-dev/GlossomAds-iOS/releases/tag/2.2.2)
    * TikTok 3.3.6.2
        * SKAdNetwork対応の更新が含まれております
    * [Zucks 4.10.0](https://ms.zucksadnetwork.com/media/sdk/manual/ios/#integrateSDK)
        * SKAdNetworkへの対応が含まれております

## v2.15.11 (2020/12/09)

* bundle SDKの更新
    * [AdColony 4.4.1](https://github.com/AdColony/AdColony-iOS-SDK/blob/master/CHANGELOG.md#441-20201009)
        * [4.4.0](https://github.com/AdColony/AdColony-iOS-SDK/blob/master/CHANGELOG.md#440-20200918)でiOS 14対応が含まれております
    * [AdCorsa 2.2.1](https://github.com/glossom-dev/GlossomAds-iOS/releases/tag/2.2.1)
    * AppLovin 6.13.3
        * AdMobパッケージにはAppLovinのAdMob用アダプターは含まれておりません
    * [Nend 7.0.2](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.0.2)
        * [7.0.1](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.0.1)でSKAdNetwork関連の修正が含まれております
        * AdMobパッケージにはNendのAdMob用アダプターは含まれておりません
    * [TapJoy 12.7.1](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1271-2020-11-02)
        * SKAdNetwork関連の修正が含まれております
    * TikTok 3.3.6.0
    * [UnityAds 3.5.1](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/3.5.1)
        * SKAdNetwork対応の更新が含まれております
    * [Zucks 4.9.3](https://ms.zucksadnetwork.com/media/sdk/manual/ios/#integrateSDK)

## v2.15.10 (2020/11/26)

* 対応OSバージョンをiOS 10.0以上に変更
* bundle SDKの更新
    * [MoPub 5.15.0](https://github.com/mopub/mopub-ios-sdk/releases/tag/5.15.0)
        * iOS 13以上の端末に広告が配信されます
        * 5.14.0以上からiOS 14への対応が含まれております
        * Swift 5が含まれております
        * AdMobパッケージにはMoPubのAdMob用アダプターは含まれておりません

## v2.15.9 (2020/10/09)

* Mobvista(Mintegral) SDKのBundleを終了

## v2.15.8 (2020/09/24)

* bundle SDKの更新
    * AdColony 4.3.1
    * IMobile 2.0.33
    * Maio 1.5.5
    * Mobvista 6.6.0.0
    * Nend 7.0.0
        * AdMobパッケージにはNendのAdMob用アダプターは含まれておりません
    * TapJoy 12.7.0
    * TikTok 3.2.6.2
    * UnityAds 3.4.8
    * Zucks 4.9.2


## v2.15.7 (2020/09/15)

* iOS 14への対応

## v2.15.6 (2020/07/31)

* bundle SDKの更新
    * AppLovin 6.13.0
    * Maio 1.5.4
    * Mobvista 6.3.5
    * UnityAds 3.4.6

## v2.15.5 (2020/07/28)

* Cocoapodsで導入されるMoPubの修正

## v2.15.4 (2020/07/16)

こちらのバージョンからbundleしているSDKは全てUIWebView未使用のものとなります。

* bundle SDKの更新
    * AdColony 4.1.5
    * imobile 2.0.32

## v2.15.3 (2020/06/02)

* 動画リワード/全画面インタースティシャル広告の安定性向上

## v2.15.2 (2020/05/13)

* AdMobのアダプティブバナーに対応

## v2.15.1 (2020/04/27)

* 対象開発環境をXcode 11以上に変更
* bundle SDKの更新
    * AdColony 4.1.4
    * AppLovin 6.11.5
    * Maio 1.5.3
    * Mobvista 6.1.2
    * MoPub 5.11.0
    * Nend 5.3.1
    * TapJoy 12.4.2
    * UnityAds 3.4.2
    * Zucks 4.8.1
* 動画リワード/全画面インタースティシャル広告の安定性向上

## v2.15.0 (2020/01/22)

* 対応OSバージョンをiOS 9以上に変更
* bundle SDKの更新
    * AdColony 4.1.2
    * AdCorsa 2.1.0
    * AppLovin 6.10.1
    * Maio 1.5.1
    * MoPub 5.10.0
* AdMobカスタムイベントアダプターの改修
    * [動画リワード新API](https://developers.google.com/admob/ios/rewarded-ads?hl=ja)へ対応
    * ネイティブ広告のAPI修正

GoogleMobileAds SDKは7.53.0以上をご利用ください。
