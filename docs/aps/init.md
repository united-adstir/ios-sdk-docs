# Amazon Publisher Services(APS)の初期設定

APSの広告は下記のものに対応しております。
APSの広告を表示するためには、`AdMobの広告リクエスト時に追加で実装が必要`になりますので、必ず下記を確認してください。

* [AdMobバナー広告](banner.md)
* [AdMobインタースティシャル広告](interstitial.md)

## 前提条件

* iOS 10.0以上

## プロジェクトへAPSの導入

APSのSDKとアダプター、アドネットワークのSDKとアダプターをプロジェクトへ導入します。

### CocoaPodを利用している場合
Podfileへ下記のものを記述することで、adstirが利用するアドネットワークのSDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AdMob-Package'
```

### 手動で導入する場合

営業担当にお問い合わせください。

## iOS 14以降への対応

[こちら](../adstir/init/ios14.md)のページを参考にiOS 14以降へのご対応をお願いいたします。

## APSの初期化

営業担当がお知らせしたAPSのapp idを用いて、下記のように初期化を行います。

```Objective-c tab=
#import <DTBiOSSDK/DTBiOSSDK.h>
...

[[DTBAds sharedInstance] setAppKey: @"YOUR_APP_ID"];
```

```swift tab=
import DTBiOSSDK
...

DTBAds.sharedInstance().setAppKey("YOUR_APP_ID")
```

テスト時には下記のものも追加します。
アプリをリリースする前には下記のコードは削除してください。

```Objective-c tab=
[[DTBAds sharedInstance] setLogLevel:DTBLogLevelAll];
[[DTBAds sharedInstance] setTestMode:YES];
```

```swift tab=
DTBAds.sharedInstance().setLogLevel(DTBLogLevelAll)
DTBAds.sharedInstance().testMode = true
```

## 広告を実装する

* [AdMobバナー広告](banner.md)
* [AdMobインタースティシャル広告](interstitial.md)
* [AdMobインタースティシャル広告(v8 SDK)](interstitialv8.md)

## アプリケーションのプライバシー

2020年12月8日以降、[App Storeへ審査を行う際にアプリケーションのプライバシーに関する質問へ](https://developer.apple.com/app-store/app-privacy-details/)回答する必要がございます。
adstir SDKが収集するデータは[こちら](../adstir/info/privacy.md)を参考にご回答ください。

APSが取得するデータは営業担当にご連絡ください。