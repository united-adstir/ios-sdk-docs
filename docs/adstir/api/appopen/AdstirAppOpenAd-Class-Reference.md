# AdstirAppOpenAd Class Reference

アプリ起動時広告を呼び出すためのクラスです。

## Instance Methods
* [-initWithMedia:spot:](#-initwithmediaspot)
* [-load](#-load)
* [-canShow](#-canshow)
* [-show:](#-show)
* [-showFromViewController:](#-showfromviewcontroller)

***

### -initWithMedia:spot:  
インスタンスの初期化を行います。
```objc
- (instancetype)initWithMedia:(NSString *)media spot:(NSUInteger)spot;
```

#### Parameters

* _media_
    * メディアID

* _spot_
    * 枠No


#### Returns

* _instancetype_
    * 初期化済みのAdstirAppOpenAdのインスタンス

***

### -load
広告の読み込みを行います。読み込み完了等の通知が必要な場合は[AdstirAppOpenAdDelegate](AdstirAppOpenAdDelegate-Protocol-Reference.md)を実装してください。


```objc
-　(void)load;
```

***

### -canShow
広告が表示できる場合はYES、できない場合はNOを返します。

```objc
- (BOOL)canShow;
```

#### Returns

* _BOOL_
    * 表示の可否

***

### -show
広告の表示を行います。表示の開始等の通知が必要な場合は[AdstirAppOpenAdDelegate](AdstirAppOpenAdDelegate-Protocol-Reference.md)を実装してください。


```objc
- (void)show;
```

***

### -showFromViewController:
呼び出し元のViewControllerを指定して広告の表示を行います。表示の開始等の通知が必要な場合は[AdstirAppOpenAdDelegate](AdstirAppOpenAdDelegate-Protocol-Reference.md)を実装してください。


```objc
- (void)showFromViewController:(UIViewController *)viewController;
```

#### Parameters

* _viewController_
    * 呼び出し元のViewController

***