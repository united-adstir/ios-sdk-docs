# AdstirVideoAds Class Reference

動画リワード広告及び全画面インタースティシャル広告の初期化用クラスです。

## Class Methods
* [+prepareWithMedia:spots:](#preparewithmediaspots)

***

### +prepareWithMedia:spots:

動画リワード広告及び全画面インタースティシャル広告の初期化を行います。

!!! notice
    動画リワード広告と全画面インタースティシャル広告を併用する場合は、動画リワード広告と全画面インタースティシャル広告の広告枠全て同時に初期化を行う必要があります。


```objc
+ (void)prepareWithMedia:(NSString *)media spots:(NSArray *)spots
```

#### Parameters
* _media_
    * メディアID

* _spots_
    * 動画リワード広告及び全画面インタースティシャル広告の枠No

***
