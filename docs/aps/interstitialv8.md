# Amazon Publisher Services(APS)のインタースティシャル広告の導入(v8 SDK)

!!! warning "はじめに"
    APS SDKの初期化が必要です。[APSの設定](init.md)をご覧になり、[APSの初期化](init#apsの初期化.md)を必ず先に行ってください。  
    こちらはGoogle Mobile Ads SDK v8を使用した場合の実装例です。v8以前のSDKをご利用の場合は[こちら](interstitial.md)をご覧ください。

## APSインタースティシャルへのリクエストを行う

### `DTBAdSize`のインスタンスを生成します

`YOUR_SLOT_UUID`には営業担当がお知らせしたIDを入力してください。
    
```Objective-c tab=
#import <DTBiOSSDK/DTBiOSSDK.h>

DTBAdSize *size = [[DTBAdSize alloc] initInterstitialAdSizeWithSlotUUID:@"YOUR_SLOT_UUID"];
```

```swift tab=
import DTBiOSSDK

let size = DTBAdSize(interstitialAdSizeWithSlotUUID: "YOUR_SLOT_UUID")
```

### `DTBAdLoader`のインスタンスを生成し、`DTBAdSize`を設定する


```Objective-c tab=
DTBAdLoader *adLoader = [DTBAdLoader new];
[adLoader setSizes:size, nil];
```

```swift tab=
let adLoader = DTBAdLoader()
adLoader.setAdSizes([size])
```

### APSの入札リクエストを行う

loadAdを呼び出して入札リクエストを行います。

```Objective-c tab=
[adLoader loadAd:self];
```

```swift tab=
adLoader.loadAd(self)
```

### `DTBAdCallback`の実装を行う

APSが入札した場合はonSuccessが、入札しなかった場合はonFailureが呼ばれます。

APSの入札結果を元に、AdMobへ広告リクエストを行います。

onSuccessが呼ばれた場合は、AdMobへGADCustomEventExtrasを付与して広告リクエストを行い、
onFailureが呼ばれた場合は、AdMobへ追加情報を付与せずにリクエストを行います。
AdMobの実装については[こちら](/admob#広告の実装)をご覧ください。

```Objective-c tab=
#import <DTBiOSSDK/DTBiOSSDK.h>
@interface ViewController () <GADFullScreenContentDelegate, DTBAdCallback>
@end

@implementation ViewController
...

#pragma mark - DTBAdCallback
- (void)onFailure: (DTBAdError)error {
    // APSの入札情報は付与しないでAdMobへリクエストを行う
    [self loadAdMobInterstitialAdsWithExtras:nil];
}

- (void)onSuccess: (DTBAdResponse *)adResponse {
    // APSの入札情報を付与してAdMobへリクエスト行う
    NSString *amznSlots = adResponse.amznSlots;
    NSDictionary *mediationHints = [adResponse mediationHints];
    GADCustomEventExtras *extras = [[GADCustomEventExtras alloc] init];
    [extras setExtras:mediationHints forLabel:amznSlots];
    [self loadAdMobInterstitialAdsWithExtras:extras];
}

#pragma mark - AdMobinterstitial load

- (void)loadAdMobInterstitialAdsWithExtras: (GADCustomEventExtras *)extras
{
    GADRequest *request = [GADRequest request];
    if (extras != nil) {
        // admobへリクエストを行う際にextraへ登録する
        [request registerAdNetworkExtras:extras];
    }

    // AdMobへリクストを行う。
    [GADInterstitialAd loadWithAdUnitID:@"ADMOB_INTERSTITIAL_ID"
                                request:request
                      completionHandler:^(GADInterstitialAd *ad, NSError *error) {
        if (error) {
            NSLog(@"Failed to load interstitial ad with error: %@", [error localizedDescription]);
            return;
        }
        self.googleInterstitial = ad;
        self.googleInterstitial.fullScreenContentDelegate = self;
    }];
}
```

```swift tab=
import UIKit
import DTBiOSSDK
import GoogleMobileAds

class ViewController: UIViewController, GADFullScreenContentDelegate, DTBAdCallback {
    var googleInterstitial: GADInterstitial!
    ...
    // MARK: DTBAdCallback
    func onFailure(_ error: DTBAdError) {
        // APSの入札情報を付与してAdMobへリクエスト行う
        self.loaodAdMobInterstitialAd(extras: nil)
    }
    
    func onSuccess(_ adResponse: DTBAdResponse!) {
        // APSの入札情報を付与してAdMobへリクエスト行う
        let amznSlots = adResponse.amznSlots()
        let mediationHints = adResponse.mediationHints()
        let extras = GADCustomEventExtras.init()
        extras.setExtras(mediationHints, forLabel: amznSlots)
        self.loaodAdMobInterstitialAd(extras: extras)
    }

    // MARK: load AdMob interstitial
    func loaodAdMobInterstitialAd(extras: GADCustomEventExtras?) {
        let request = GADRequest()
        if (extras != nil) {
            request.register(extras!)
        }
        GADInterstitialAd.load(withAdUnitID: "ADMOB_INTERSTITIAL_ID", request: request, completionHandler: { ad, error in
            if let error = error {
                print("Failed to load interstitial ad with error: \(error.localizedDescription)")
                return
            }
            self.googleInterstitial = ad;
            self.googleInterstitial.fullScreenContentDelegate = self;
        })
    }
}
```

### 広告を表示する

広告の準備ができているか確認してから広告を表示します。

```Objective-c tab=
- (void)showInterstitialAd {
    if (self.googleInterstitial) {
        [self.googleInterstitial presentFromRootViewController:self];
    }
}
```

```swift tab=
func showInterstitialAd(){
    if let ad = self.googleInterstitial {
        ad.present(fromRootViewController: self)
    }
}
```

## 実装例

```Objective-c tab=
#import "APSInterstitialViewController.h"
#import <DTBiOSSDK/DTBiOSSDK.h>
@import GoogleMobileAds;

@interface APSInterstitialViewController () <GADFullScreenContentDelegate, DTBAdCallback>
@property(nonatomic, strong) GADInterstitialAd *googleInterstitial;
@end

@implementation APSInterstitialViewController

- (void)viewDidLoad {
    [super viewDidLoad];

    // APSのSDKの初期化を行います。
    [[DTBAds sharedInstance] setAppKey: @"YOUR_APP_ID"];

    [self loadInterstitialAd];
}

- (void)loadInterstitialAd {
    // APSの読み込みを行う。
    DTBAdSize *size = [[DTBAdSize alloc] initInterstitialAdSizeWithSlotUUID:@"YOUR_SLOT_UUID"];
    DTBAdLoader *adLoader = [DTBAdLoader new];
    [adLoader setSizes:size, nil];
    
    // APSの入札リクエスト
    [adLoader loadAd:self];
}

#pragma mark - DTBAdCallback
- (void)onFailure: (DTBAdError)error {
    // APSの入札情報は付与しないでAdMobへリクエストを行う
    [self loadAdMobInterstitialAdsWithExtras:nil];
}

- (void)onSuccess: (DTBAdResponse *)adResponse {
    // APSの入札情報を付与してAdMobへリクエスト行う
    NSString *amznSlots = adResponse.amznSlots;
    NSDictionary *mediationHints = [adResponse mediationHints];
    GADCustomEventExtras *extras = [[GADCustomEventExtras alloc] init];
    [extras setExtras:mediationHints forLabel:amznSlots];
    [self loadAdMobInterstitialAdsWithExtras:extras];
}

#pragma mark - AdMobInterstitial load

- (void)loadAdMobInterstitialAdsWithExtras: (GADCustomEventExtras *)extras
{
    GADRequest *request = [GADRequest request];
    if (extras != nil) {
        // admobへリクエストを行う際にextraへ登録する
        [request registerAdNetworkExtras:extras];
    }

    // AdMobへリクストを行う。
    [GADInterstitialAd loadWithAdUnitID:@"ADMOB_INTERSTITIAL_ID"
                                request:request
                      completionHandler:^(GADInterstitialAd *ad, NSError *error) {
        if (error) {
            NSLog(@"Failed to load interstitial ad with error: %@", [error localizedDescription]);
            return;
        }
        self.googleInterstitial = ad;
        self.googleInterstitial.fullScreenContentDelegate = self;
    }];
}

#pragma mark -
#pragma mark GADFullScreenContentDelegate

- (void)adDidPresentFullScreenContent:(id)ad {}

- (void)ad:(id)ad didFailToPresentFullScreenContentWithError:(NSError *)error {
    [self loadInterstitialAd];
}

- (void)adDidDismissFullScreenContent:(id)ad {
    [self loadInterstitialAd];
}

@end
```

```swift tab=
import UIKit
import DTBiOSSDK
import GoogleMobileAds

class ViewController: UIViewController, GADFullScreenContentDelegate, DTBAdCallback {
    
    var googleInterstitial: GADInterstitialAd!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // APSのSDKの初期化を行います。
        DTBAds.sharedInstance().setAppKey("YOUR_APP_ID")
        
        self.loadInterstitialAd()
    }
    
    
    func loadInterstitialAd() {
        let size = DTBAdSize(interstitialAdSizeWithSlotUUID: "YOUR_SLOT_UUID")
        let adLoader = DTBAdLoader()
        adLoader.setAdSizes([size])
        adLoader.loadAd(self)
    }
    
    // MARK: DTBAdCallback
    func onFailure(_ error: DTBAdError) {
        // APSの入札情報を付与してAdMobへリクエスト行う
        self.loaodAdMobInterstitialAd(extras: nil)
    }
    
    func onSuccess(_ adResponse: DTBAdResponse!) {
        // APSの入札情報を付与してAdMobへリクエスト行う
        let amznSlots = adResponse.amznSlots()
        let mediationHints = adResponse.mediationHints()
        let extras = GADCustomEventExtras.init()
        extras.setExtras(mediationHints, forLabel: amznSlots)
        self.loaodAdMobInterstitialAd(extras: extras)
    }
    
    func loaodAdMobInterstitialAd(extras: GADCustomEventExtras?) {
        let request = GADRequest()
        if (extras != nil) {
            request.register(extras!)
        }
        GADInterstitialAd.load(withAdUnitID: "ADMOB_INTERSTITIAL_ID", request: request, completionHandler: { ad, error in
            if let error = error {
                print("Failed to load interstitial ad with error: \(error.localizedDescription)")
                return
            }
            self.googleInterstitial = ad;
            self.googleInterstitial.fullScreenContentDelegate = self;
        })
    }

    func adDidPresentFullScreenContent(_ ad: GADFullScreenPresentingAd) {}

    func ad(_ ad: GADFullScreenPresentingAd, didFailToPresentFullScreenContentWithError error: Error) {
        self.loadInterstitialAd()
    }

    func adDidDismissFullScreenContent(_ ad: GADFullScreenPresentingAd) {
        self.loadInterstitialAd()
    }
}
```