# adstir Integration Guide for iOS

adstirのインテグレーションガイドです。iOS環境に対応しています。Androidのインテグレーションガイドは[こちら](https://united-adstir.github.io/android-sdk-docs)からご覧いただけます。adstirSDKは管理画面から入手することができます。

## サンプルアプリ

[こちら]({{config.sample_url}})より、adstirSDKのサンプルプロジェクトをダウンロードすることができます。

## 前提条件

* iOS 9以上
* Xcode 11以上

## プロジェクトへSDKを組み込む

初期設定/SDKの組み込みからadstir SDKをプロジェクトへ組み込んでください。

## info.plistの更新

iOS 14以降で[SKAdNetwork 2.0](https://developer.apple.com/documentation/storekit/skadnetwork)を利用するために、Info.plistに下記の内容を追加します。

```xml
<key>SKAdNetworkItems</key>
<array>
    <dict>
        <key>SKAdNetworkIdentifier</key>
        <string>4PFYVQ9L8R.skadnetwork</string>
    </dict>
</array>
```