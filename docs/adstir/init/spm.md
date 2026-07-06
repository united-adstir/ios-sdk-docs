# Swift Package Managerを利用した組み込み

[Swift Packager Manager](https://docs.swift.org/swiftpm/documentation/packagemanagerdocs/)を利用してSDKをプロジェクトに取り込むことが可能です。  
v2.17.7以降のadstir SDKが対応しています。

## パッケージの追加

1. Xcodeのメニューの File > Add Package Dependencies... を選択してください
2. 表示された画面の右上からGitHubリポジトリを検索してください
3. パッケージのバージョンを指定して Add Package を選択してください

### GitHubリポジトリ
GitHubリポジトリと導入されるSDKの対応は以下の通りです。  
複数のパッケージを導入する場合は同じバージョンを指定してください。

GitHubリポジトリ | 導入されるもの
---|---
https://github.com/united-adstir/adstirsdk-swift-package.git | adstir SDK
https://github.com/united-adstir/adstirsdk-admobadapter-swift-package.git | adstir SDK / adstirのAdMobアダプター
https://github.com/united-adstir/adstirsdk-maxadapter-swift-package.git | adstir SDK / adstirのMAXアダプター
https://github.com/united-adstir/adstirsdk-mediationadapter-imobile-swift-package.git | adstir SDK / IMobile SDKとアダプター
https://github.com/united-adstir/adstirsdk-mediationadapter-ironsource-swift-package.git | adstir SDK / IronSource SDKとアダプター
https://github.com/united-adstir/adstirsdk-mediationadapter-maio-swift-package.git | adstir SDK / Maio SDKとアダプター
https://github.com/united-adstir/adstirsdk-mediationadapter-tiktok-swift-package.git | adstir SDK / TikTok SDKとアダプター
https://github.com/united-adstir/adstirsdk-mediationadapter-unityads-swift-package.git | adstir SDK / UnityAds SDKとアダプター

## Xcodeプロジェクトの設定
アダプタを使用する場合は下記の設定を行なってください。

1. プロジェクトファイル設定画面を開きます
1. `Build Settings`タブを選択します
1. 画面右側の検索窓に`Other Linker Flags`と入力し、検索します
1. `Other Linker Flags`欄に、`-ObjC`と設定します


## iOS 14以降への対応

[こちら](ios14.md)のページを参考にiOS 14以降へのご対応をお願いいたします。