# アプリ起動時広告の導入
アプリ起動時広告はユーザーがアプリを開いたときまたはアプリに戻ったときに表示する広告です。  
アプリの読み込み画面(スプラッシュ画面)がある場合は、その画面の表示後にアプリ起動時広告を表示してください。  
アプリ起動時広告を導入する際は、広告の表示頻度を調整しアプリのユーザビリティが低下しないようにご注意ください。  

## 1. アプリ起動時広告のインスタンスを生成

`AdstirAppOpenAd`のインスタンスを生成します。

```Objctive-c tab=
AdstirAppOpenAd *adstirAppOpenAd = [[AdstirAppOpenAd alloc] initWithMedia:@"メディアID" spot:枠No];
```

```swift tab=
let adstirAppOpenAd = AdstirAppOpenAd(media: "メディアID", spot: 枠No)!
```

## 2. デリゲートの実装(オプション)

```Objctive-c tab=
- (void)viewDidLoad {
    [super viewDidLoad];
        :
    adstirAppOpenAd.delegate = self;
        :
}

/** アプリ起動時広告の準備が完了した際に呼び出されます */
- (void)adstirAppOpenAdDidLoad:(AdstirAppOpenAd *)appOpenAd
{
}

/** アプリ起動時広告の準備に失敗した際に呼び出されます */
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToLoadWithError:(NSError *)error
{
}

/** アプリ起動時広告が表示された際に呼び出されます */
- (void)adstirAppOpenAdDidShow:(AdstirAppOpenAd *)appOpenAd
{
}

/** アプリ起動時広告の表示に失敗した際に呼び出されます */
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToShowWithError:(NSError *)error
{
}

/** アプリ起動時広告が閉じられたときに呼び出されます */
- (void)adstirAppOpenAdDidClose:(AdstirAppOpenAd *)appOpenAd
{
}
```

```swift tab=
override func viewDidLoad() {
    super.viewDidLoad()
    ...
    adstirAppOpenAd?.delegate = self;
}

/** アプリ起動時広告の準備が完了した際に呼び出されます */
func adstirAppOpenAdDidLoad(_ appOpenAd: AdstirAppOpenAd) {
}
/** アプリ起動時広告の準備に失敗した際に呼び出されます */
func adstirAppOpenAd(_ appOpenAd: AdstirAppOpenAd, didFailToLoadWithError error: Error) {
}
/** アプリ起動時広告が表示された際に呼び出されます */
func adstirAppOpenAdDidShow(_ appOpenAd: AdstirAppOpenAd) {
}
/** アプリ起動時広告の表示に失敗した際に呼び出されます */
func adstirAppOpenAd(_ appOpenAd: AdstirAppOpenAd, didFailToShowWithError error: Error) {
}
/** アプリ起動時広告が閉じられたときに呼び出されます */
func adstirAppOpenAdDidClose(_ appOpenAd: AdstirAppOpenAd) {
}
```

## 3. アプリ起動時広告の読み込み

アプリ起動時広告の読み込みを行います。

```Objective-c tab=
[adstirAppOpenAd load];
```

```swift tab=
adstirAppOpenAd.load()
```

## 4. アプリ起動時広告の表示

読み込みが完了したアプリ起動時広告を表示します。  
動画の表示後、もう一度広告を表示するためには[`3.アプリ起動時広告の読み込み`](#3-アプリ起動時広告の読み込み)を行う必要があります。  
広告には有効期限が設定されている場合があり、広告読み込み完了後に一定時間が経過すると広告表示ができない場合があります。読み込み完了後にcanShowを呼ぶことで広告表示可能か判別することができます。

```Objective-c tab=
if ([adstirAppOpenAd canShow]) {
    [adstirAppOpenAd show];
}
```

```swift tab=
if (adstirAppOpenAd.canShow()) {
    adstirAppOpenAd.show()
}
```

## SDKの実装例

ここでは、単純な実装についてのサンプルを提示します。  
広告の読み込み完了後、アプリ復帰時に広告を表示します。  

- SceneDelegage

```Objective-c tab=
// ...
@import AdstirAds;

@interface SceneDelegate () <AdstirAppOpenAdDelegate>
@property (strong, nonatomic) AdstirAppOpenAd * adstirAppOpenAd;
@end

@implementation SceneDelegate

// ...

- (void)sceneDidBecomeActive:(UIScene *)scene {
    // アプリ復帰時に広告の表示を試みます
    [self showAdAvailable];
}


- (void)showAdAvailable {
    // アプリ起動時広告の初期化を行います
    if (self.adstirAppOpenAd == nil) {
        self.adstirAppOpenAd = [[AdstirAppOpenAd alloc] initWithMedia:@"メディアID" spot:枠No];
        // 必要に応じてdelegateの設定を行います
        self.adstirAppOpenAd.delegate = self;
    }
    
    // アプリ起動時広告の読み込みが完了している場合は表示、そうでない場合は読み込みを行います
    if ([self.adstirAppOpenAd canShow]) {
        [self.adstirAppOpenAd show];
    } else {
        [self.adstirAppOpenAd load];
    }
}

/** アプリ起動時広告の準備が完了した際に呼び出されます */
- (void)adstirAppOpenAdDidLoad:(AdstirAppOpenAd *)appOpenAd
{
}

/** アプリ起動時広告の準備に失敗した際に呼び出されます */
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToLoadWithError:(NSError *)error
{
}

/** アプリ起動時広告が表示された際に呼び出されます */
- (void)adstirAppOpenAdDidShow:(AdstirAppOpenAd *)appOpenAd
{
}

/** アプリ起動時広告の表示に失敗した際に呼び出されます */
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToShowWithError:(NSError *)error
{
}

/** アプリ起動時広告が閉じられたときに呼び出されます */
- (void)adstirAppOpenAdDidClose:(AdstirAppOpenAd *)appOpenAd
{
}

@end
```

```swift tab=
import AdstirAds

class SceneDelegate: UIResponder, UIWindowSceneDelegate, AdstirAppOpenAdDelegate {

    var window: UIWindow?
    lazy var adstirAppOpenAd: AdstirAppOpenAd = {
        // アプリ起動時広告の初期化を行います
        let adstirAppOpenAd = AdstirAppOpenAd(media: "メディアID", spot: 枠No)!
        // 必要に応じてdelegateの設定を行います
        adstirAppOpenAd.delegate = self
        return adstirAppOpenAd
    }()

    // ...

    func sceneDidBecomeActive(_ scene: UIScene) {
        showAdAvailable()
    }

    func showAdAvailable() {
        // アプリ起動時広告の読み込みが完了している場合は表示、そうでない場合は読み込みを行います
        if (adstirAppOpenAd.canShow()) {
            adstirAppOpenAd.show()
        } else {
            adstirAppOpenAd.load()
        }
    }
    
    /** アプリ起動時広告の準備が完了した際に呼び出されます */
    func adstirAppOpenAdDidLoad(_ appOpenAd: AdstirAppOpenAd) {
    }
    /** アプリ起動時広告の準備に失敗した際に呼び出されます */
    func adstirAppOpenAd(_ appOpenAd: AdstirAppOpenAd, didFailToLoadWithError error: Error) {
    }
    /** アプリ起動時広告が表示された際に呼び出されます */
    func adstirAppOpenAdDidShow(_ appOpenAd: AdstirAppOpenAd) {
    }
    /** アプリ起動時広告の表示に失敗した際に呼び出されます */
    func adstirAppOpenAd(_ appOpenAd: AdstirAppOpenAd, didFailToShowWithError error: Error) {
    }
    /** アプリ起動時広告が閉じられたときに呼び出されます */
    func adstirAppOpenAdDidClose(_ appOpenAd: AdstirAppOpenAd) {
    }
}
```
