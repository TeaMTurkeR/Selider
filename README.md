### Selider Nedir?
Hızlı çalışan ve kullanması pratik olan bir Slider'dır. Tarayıcıların hepsinde çalışır. Büyük kütüphaneleri kullanma derdinize son verir. 

Nasıl göründüğüne <a href="http://sercaneraslan.github.io/Selider/">buradan</a> bakarabilirsiniz.

### Nasıl Kullanılır?
İlk yapılması gereken dosyaları sayfamıza çağırmak.

```
<link rel="stylesheet" type="text/css" href="styles/selider.css" />
<script type="text/javascript" src="scripts/jquery-1.10.1.min.js"></script>
<script type="text/javascript" src="scripts/selider.js"></script>
```

Sonra "selider" class'ı olan bir div ekliyoruz. id'sini istediğiniz isimle verebilirsiniz. Daha sonra ul li içerisine img etiketlerini ekliyoruz ve görsellerin kaynağını yazıyoruz.

```
<div id="mySlider" class="selider">
    <ul>
        <li>
            <img src="images/sliderImages/slider1.png" alt="Ice Age 1"/>
        </li>
        <li>
            <img src="images/sliderImages/slider2.png" alt="Ice Age 2"/>
        </li>
    </ul>
</div>
```

CSS dosyamıza Slider'ın yüksekliğini ve genişliğini ekliyoruz.

```
#mySlider {
    width: 670px;
    height: 350px;
}
```

Son olarak Slider'ın ekleneceği sayfanın JavaScript dosyasına aşağıda ki kodu ekliyoruz.

```
$("#mySlider").selider();
```

İşte bu kadar artık slider'ınız çalışıyor!


### Thumbnail
Varsayılan olarak "false" değerini alır. Thumbnail kullanmak isterseniz "thumbnail" özelliğini "true" olarak değiştirmeniz gerekir.

```
$("#mySlider").selider({
    "thumbnail" : true
});
```

ve Slider'ı eklediğiniz div'in sonuna aşağıda ki HTML kalıbını eklemeniz gerekir.

```
<!-- Selider HTML'i -->
<div id="mySlider" class="selider">
    <ul>
        <li>
            <img src="images/sliderImages/slider1.png" alt="Ice Age 1"/>
        </li>
        <li>
            <img src="images/sliderImages/slider2.png" alt="Ice Age 2"/>
        </li>
    </ul>
</div>
<!-- Selider HTML'i -->

<!-- Thumbnail HTML'i -->
<div id="sThumbnail">
    <div id="sThumbPrev"></div>
    <div id="sThumbContainer">
        <ul>
            <li>
                <img src="images/sliderThumb/thumb1.png" alt="Ice Age 1"/>
            </li>
            <li>
                <img src="images/sliderThumb/thumb2.png" alt="Ice Age 2"/>
            </li>
        </ul>
    </div>
    <div id="sThumbNext"></div>
</div>
<!-- Thumbnail HTML'i -->
```

"sThumbnail" Thumbnail kutusunun kapsayıcısıdır. "sThumbPrev" sol butonun, "sThumbNext" ise sağ butonun kapsayıcısıdır. "sThumbContainer" tüm küçük fotoğrafların/resimlerin kapsayıcısıdır. Ul li içerisinde ki img etiketlerinin kaynağına da thumbnailler için olan küçük fotoğrafları/resimleri eklenir.


### Paging
Varsayılan olarak "false" değerini alır. Eğer Slider'ınızda sayfalama kullanmak isterseniz "paging" özelliğini "true" olarak değiştirmeniz yeterlidir.

```
$("#mySlider").selider({
    "paging" : true
});
```


### Speed
Varsayılan olarak "4000" milisaniyedir ( 4000 milisaniye = 4 saniye ). Slider'ın geçiş hızını değiştirmek isterseniz "speed" değerini değiştirebilirsiniz.

```
$("#mySlider").selider({
    "speed"  : 6000    
});
```

### Pause 
Varsayılan olarak "true" değerini alır. Mouse ile Slider üzerine gelince Slide'ın durmasını istemiyorsanız "pause" özelliğini "false" yaparak devre dışı bırakabilirsiniz.

```
$("#mySlider").selider({
    "pause" : false
});
```

### nextPrev 
Varsayılan olarak "true" değerini alır. Slide üzerinde sağ ve sol oklarının olmasını istemiyorsanız "pause" özelliğini "false" yaparak devre dışı bırakabilirsiniz. (Sağ ve sol oklar Slide'ın bir öncesine veya bir sonrasına gitmek için kullanılır.)

```
$("#mySlider").selider({
    "nextPrev" : false
});
```