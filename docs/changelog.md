# 変更履歴

 * [こちら](adstir/init/ios14.md#infoplistの更新)を参考にInfo.plistの更新をお願いします。

    !!! info
        SKAdNetworkIdsの最終更新日 : {{config.skadnid_updated_at}}

## v2.17.5 (2025/12/12)

* API変更に伴うironSourceアダプタの修正
* スワイプインタースティシャル広告のAPIを非推奨に変更
    * こちらの広告フォーマットは廃止予定になります
* bundle SDKの更新
    * [ironSource 9.2.0](https://developers.is.com/ironsource-mobile/ios/sdk-change-log/)

## v2.17.4 (2025/11/06)

* AppLovinアダプタの安定性向上
* bundle SDKの更新
    * [AppLovin 13.4.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_13_4_0)
    * [Maio 2.1.6](https://github.com/imobile/MaioSDK-v2-iOS/releases/tag/v2.1.6)
    * TikTok 7.7.0.4
    * [UnityAds 4.15.1](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.15.1)
    * Zucks 6.0.0
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 12.12.0

## v2.17.3 (2025/02/05)

* 動画リワード広告、全画面インタースティシャル広告、アプリ起動時広告の安定性向上

## v2.17.2 (2024/12/16)

* bundle SDKの更新
    * [ironSource 8.5.0](https://developers.is.com/ironsource-mobile/ios/sdk-change-log/)

## v2.17.1 (2024/11/26)

* 動画リワード広告、全画面インタースティシャル広告、アプリ起動時広告の安定性向上

## v2.17.0 (2024/11/07)

* アプリ起動時広告に対応

## v2.16.7 (2024/10/11)

* AppLovin SDKのAPI変更に伴うAppLovin MAXアダプターの改修
    * AppLovin SDK v13.0.0以上をご利用の方はadstir SDK v2.16.7以上をご利用ください
* bundle SDKの更新
    * [AppLovin 13.0.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_13_0_0)

## v2.16.6 (2024/09/24)

* ironSource SDK (8.3.0.0) とのバナー/動画リワード/全画面インタースティシャル 接続
    * Xcode 15.1, 15.2ではビルドできませんのでXcode 15.3以上をお使いください

## v2.16.5 (2024/09/13)
* bundle SDKの更新
    * TikTok 6.2.0.7
        * iOS 18に関する修正が含まれております

## v2.16.4 (2024/06/25)

* SKOverlayへの対応

## v2.16.3 (2024/05/29)
* SKAdNetworkの安定性向上
* バナー広告、スワイプインタースティシャル広告、動画リワード広告、全画面インタースティシャル広告の安定性向上
* AdMobネイティブアダプタの安定性向上
* bundle SDKの更新
    * [AppLovin 12.5.0](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_12_5_0)
    * TikTok 5.9.0.8
    * [UnityAds 4.11.3](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.11.3)
    * [Zucks 5.0.0](https://github.com/zucks/ZucksAdNetworkSDK-iOS/releases/tag/5.0.0)
        * 5.0.0でPrivacyManifestへの対応が含まれております
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 11.5.0

## v2.16.2 (2024/04/09)
* 動画リワード広告、全画面インタースティシャル広告で利用する動画プレイヤーを改良
* App Store ConnectでPrivacyManifestsが正常に検出できるようにSDKを更新
* Maioアダプタの安定性向上
* IMobileアダプタの安定性向上
* bundle SDKの更新
    * [AppLovin 12.4.1](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_12_4_1)
        * 12.4.0/12.4.1でPrivacyManifestに関する対応が含まれております
    * IMobile 2.3.4
    * TikTok 5.8.0.8
    * [UnityAds 4.10.0](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.10.0)
        * 4.10.0でPrivacyManifestへの対応が含まれております
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 11.2.0

## v2.16.1 (2024/03/18)
* bundle SDKの更新
    * [Maio 2.1.4](https://github.com/imobile/MaioSDK-v2-iOS/releases/tag/v2.1.4)
        * PrivacyManifestに関する修正が含まれております

## v2.16.0 (2024/03/13)

* adstir SDKおよびメディエーションアダプタをxcframeworkに変更
* Privacy Manifestへの対応
* SKAdNetworkに関する修正
* 対象開発環境をXcode 15.1以上に変更
* bitcodeの廃止
* CocoaPods用パッケージのAdMob-Packageの廃止
    * AdMobアダプタは引き続きご利用いただけます
* bundle SDKの更新
    * [AppLovin 12.2.1](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_12_2_1)
        * 12.0.0/12.2.0でPrivacyManifestへの対応が含まれております
    * IMobile 2.3.3
        * 2.3.3でPrivacyManifestへの対応が含まれております
    * [Maio 2.1.3](https://github.com/imobile/MaioSDK-v2-iOS/releases/tag/v2.1.3)
        * 2.1.3でPrivacyManifestへの対応が含まれております
    * TikTok 5.8.0.7
        * 5.7.0.8/5.8.0.6でPrivacyManifestへの対応が含まれております
    * [UnityAds 4.9.3](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.9.3)
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 11.0.1

## v2.15.36 (2024/01/15)

* AdColony SDKのバンドル終了
* Nend SDKのバンドル終了

## v2.15.35 (2023/12/04)

* SKAdNetwork 4.0への対応

* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 10.10.0

## v2.15.34 (2023/10/17)

* 対応OSバージョンをiOS 12以上に変更
* TapJoy SDKのバンドル終了
* bundle SDKの更新
    * AppLovin 11.11.2
    * IMobile 2.3.2
    * Maio 2.0.0
	    * 広告はiOS 14以上に配信されます
    * Nend 8.1.0
    * TikTok 5.4.1.0
    * UnityAds 4.8.0

* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 10.10.0

## v2.15.33 (2023/06/07)     

* 対象開発環境をXcode 14.1以上に変更
* bundle SDKの更新
    * [Nend 8.0.1](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/8.0.1)
        * SKAdNetwork 4.0への対応が含まれております
* AdMobアダプタの安定性向上(バナー)
* AppLovin MAXアダプターの安定性向上
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 10.3.0

## v2.15.32 (2023/02/14)

* bundle SDKの更新
    * [AdColony 4.9.0](https://github.com/AdColony/AdColony-iOS-SDK/blob/master/CHANGELOG.md#490-202267)
    * [AppLovin 11.7.1](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_11_7_1)
        * Xcode 13.2.1のサポートです 
        * bitcodeのサポートが終了しました
    * IMobile 2.3.0
    * [Maio 1.6.3](https://github.com/imobile-maio/maio-iOS-SDK/releases/tag/v1.6.3)
    * [TapJoy 12.11.1](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1291-2022-03-16)
    * TikTok 4.9.1.0
        * DeviceCheck.frameworkが必要になりました
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.14.0

## v2.15.31 (2023/02/01)

* SDKの安定性向上
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.10.0

## v2.15.30 (2022/09/15)

* bundle SDKの更新
    * [Nend 7.4.0](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.4.0)
        * iOS 16に関するSKAdNetwork広告関連の修正が含まれております
* AdMobアダプタの安定性向上(動画リワード)
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.10.0

## v2.15.29 (2022/09/01)

* bundle SDKの更新
    * [AppLovin 11.4.3](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_11_4_3)
    * [Maio 1.6.2](https://github.com/imobile-maio/maio-iOS-SDK/releases/tag/v1.6.2)
    * [UnityAds 4.3.0](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.3.0)
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.9.0

## v2.15.28 (2022/06/14)

* bundle SDKの更新
    * [AdColony 4.8.0](https://github.com/AdColony/AdColony-iOS-SDK/releases/tag/v4.8.0)
    * [AppLovin 11.3.3](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases/tag/release_11_3_3)
    * [Maio 1.6.1](https://github.com/imobile-maio/maio-iOS-SDK/releases/tag/v1.6.1)
    * [Nend 7.3.0](https://github.com/fan-ADN/nendSDK-iOS-pub/releases/tag/7.3.0)
        * SKAdNetwork3.0のサポートが含まれております
    * [TapJoy 12.9.1](https://dev.tapjoy.com/jp/ios-sdk/Changelog#id-1291-2022-03-16)
    * TikTok 4.3.1.9
    * [UnityAds 4.1.0](https://github.com/Unity-Technologies/unity-ads-ios/releases/tag/4.1.0)
* AdMobアダプタの安定性向上
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.5.0

## v2.15.27 (2022/04/07)

* AdMobバナーアダプタの追加/改修
    * ご自身でAdMobの配信設定をされる方は[こちら](admob/setting.md)をご覧ください。
* AdMobアダプタ ビルド・テスト
    * Google Mobile Ads SDK version 9.2.0

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
