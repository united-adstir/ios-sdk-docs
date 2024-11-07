# AdstirAppOpenAdDelegate Protocol Reference

アプリ起動時広告のデリゲートです。

## Instance Methods
* [-adstirAppOpenAdDidLoad:](#-adstirappopenaddidload)
* [-adstirAppOpenAd:didFailToLoadWithError:](#-adstirappopenaddidfailtoloadwitherror)
* [-adstirAppOpenAdDidShow:](#-adstirappopenaddidshow)
* [-adstirAppOpenAd:didFailToShowWithError:](#-adstirappopenaddidfailtoshowwitherror)
* [-adstirAppOpenAdDidClose:](#-adstirappopenaddidclose)


***

### -adstirAppOpenAdDidLoad:
アプリ起動時広告の準備が完了した際に呼び出されます。

```objc
- (void)adstirAppOpenAdDidLoad:(AdstirAppOpenAd *)appOpenAd;
```

#### Parameters
* _appOpenAd_
    * アプリ起動時広告の準備が完了したインスタンス


***

### -adstirAppOpenAd:didFailToLoadWithError:
アプリ起動時広告の準備に失敗した際に呼び出されます。  
エラーコードについては[こちら](#adstirappopenaderror)をご覧ください。

```objc
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToLoadWithError:(NSError *)error;
```

#### Parameters
* _appOpenAd_
    * アプリ起動時広告の準備に失敗したインスタンス
* _error_
    * エラーメッセージ

***

### -adstirAppOpenAdDidShow:
アプリ起動時広告が表示された際に呼び出されます。

```objc
- (void)adstirAppOpenAdDidShow:(AdstirAppOpenAd *)appOpenAd;
```

#### Parameters
* _appOpenAd_
    * アプリ起動時広告を表示したインスタンス

***

### -adstirAppOpenAd:didFailToShowWithError:
アプリ起動時広告の表示に失敗した際に呼び出されます。  
エラーコードについては[こちら](#adstirappopenaderror)をご覧ください。

```objc
- (void)adstirAppOpenAd:(AdstirAppOpenAd *)appOpenAd didFailToShowWithError:(NSError *)error;
```

#### Parameters
* _appOpenAd_
    * アプリ起動時広告の表示に失敗したインスタンス

* _error_
    * エラーメッセージ

***

### -adstirAppOpenAdDidClose:
アプリ起動時広告が閉じられたときに呼び出されます。

```objc
- (void)adstirAppOpenAdDidClose:(AdstirAppOpenAd *)appOpenAd;
```

#### Parameters
* _appOpenAd_
    * アプリ起動時広告が閉じられたインスタンス

***

## Error code
### AdstirAppOpenAdError

エラーコード|定義|説明
---|---|---
16000|AdstirAppOpenAdErrorUnknown|Unknownエラー  
16001|AdstirAppOpenAdErrorInternal|Internalエラー(アプリ側へは通知されません)  
16002|AdstirAppOpenAdErrorNoFill|案件切れによる読み込みエラー  
16003|AdstirAppOpenAdErrorFailedToShow|広告表示失敗エラー  
16004|AdstirAppOpenAdErrorInvalidSpot|存在しない広告枠への読み込みエラー  