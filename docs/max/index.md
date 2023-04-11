# AppLovin MAXメディエーションの設定

## 前提条件

* Xcode 13.0以上
* iOS 10.0以上

## 事前準備

[AppLovin MAXのスタートガイド](https://dash.applovin.com/documentation/mediation/ios/getting-started/integration)を参考に、AppLovin MAXの導入を行なってください。  
AppLovin MAXアダプタは[Applovin SDK version {{config.version.applovin}}](https://github.com/AppLovin/AppLovin-MAX-SDK-iOS/releases)でビルドおよびテストを行なっています。

## カスタムSDKネットワーク導入

[カスタムSDKネットワーク導入](https://dash.applovin.com/documentation/mediation/ios/mediation-setup/custom-sdk)を行うために、adstirのSDKとメディエーションアダプターを追加します。  

### SDKの導入

Podfileへ下記のものを記述することで、adstir SDKとアダプターを一括で導入することができます。

```
pod 'AdStir-Ads-SDK/AppLovinMaxMediationAdapter'
```

そのほか、AppLovin MAXメディエーションで利用していないネットワークを追加することをおすすめします。
導入する場合は[こちら](../adstir/init/cocoapods.md#podfileの編集)を参考にpodfileに記載していただくか、営業担当までご連絡ください。

### iOS 14以降への対応

[こちら](../adstir/init/ios14.md)のページを参考にiOS 14以降へのご対応をお願いいたします。

## カスタムSDKネットワークを追加する

[カスタムSDKネットワークを追加](https://dash.applovin.com/documentation/mediation/ios/mediation-setup/custom-sdk#step-1.-add-custom-sdk-network-settings)します。その際、カスタムネットワークに関する情報は下記の値を入力してください。

| 項目 | 入力内容 |
| :--- | :--- |
| Network Type | SDK |
| Custom Network Name | adstir |
| iOS Adapter Class Name | ALAdstirMediationAdapter |

## カスタムSDKネットワークを有効にする

[カスタムSDKネットワークを有効](https://dash.applovin.com/documentation/mediation/ios/mediation-setup/custom-sdk#step-2.-enable-the-custom-sdk-network)にします。
各広告種別に対する設定は下記の設定をお願いします。

### バナー

| 項目 | 入力内容 |
| :--- | :--- |
| App ID | adstirメディアID |
| Placement ID | adstir枠No |
| Custom Parameters | `{"is_filler":true}` |

* パスバック(MAXへの案件切れ通知)が必要な場合はfalseを、不要な場合はtrueを設定してください。
* パスバックを行う場合は一部の広告が配信できません

### ネイティブ

| 項目 | 入力内容 |
| :--- | :--- |
| App ID | adstirメディアID |
| Placement ID | adstir枠No |
| Custom Parameters | 設定不要 |

### リワード

| 項目 | 入力内容 |
| :--- | :--- |
| App ID | adstirメディアID |
| Placement ID | adstir枠No |
| Custom Parameters | `{"spotNos":"カンマ区切りのアプリで利用する動画リワード/全画面インタースティシャル広告の全枠No"}` |

* Custom Parametersの設定例 : `{"spotNos":"2,3"}`

### インタースティシャル

| 項目 | 入力内容 |
| :--- | :--- |
| App ID | adstirメディアID |
| Placement ID | adstir枠No |
| Custom Parameters | `{"spotNos":"カンマ区切りのアプリで利用する動画リワード/全画面インタースティシャル広告の全枠No"}` |

* Custom Parametersの設定例 : `{"spotNos":"2,3"}`
