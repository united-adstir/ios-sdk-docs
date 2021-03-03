# 変更履歴

 * [こちら](adstir/init/ios14.md#infoplistの更新)を参考にInfo.plistの更新をお願いします。

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
