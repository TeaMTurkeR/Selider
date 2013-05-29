### Selider Nedir?
Hızlı çalışan ve kullanması pratik olan bir Slider'dır. Tarayıcıların hepsinde çalışır. Büyük kütüphaneleri kullanma derdinize son verir. 

Nasıl göründüğüne <a href="http://sercaneraslan.github.io/Selider/">buradan</a> bakarabilirsiniz.

### Nasıl Kullanılır?
İlk yapılması gereken dosyaları sayfamıza çağırmak.

```
<link rel="stylesheet" href="selider.css" />
<script src="http://code.jquery.com/jquery-latest.js"></script> 
<script src="selider.js"></script>
```

Sonra "selider" class'ı olan bir div ekliyoruz. id'sini istediğiniz isimle verebilirsiniz. Daha sonra ul li içerisine img etiketlerini ekliyoruz ve görsellerin kaynağını yazıyoruz.

```
<div id="mySlider" class="selider">
    <ul>
        <li>
            <img src="slider1.png" alt="slider1"/>
        </li>
        <li>
            <img src="slider2.png" alt="slider2"/>
        </li>
    </ul>
</div>
```

Slider'ın ekleneceği sayfanın JavaScript dosyasına aşağıda ki kod eklenir.

```
$("#mySlider").selider({
                        'height' : 350, 
                        'width'  : 670
});
```
id HTML'de belirttiğimiz id 'dir. Slider'ın yüksekliğini belirlemek için "height"ı , genişliği belirlemek için "width"i kullanabilirsiniz.

İşte bu kadar artık slider'ınız çalışıyor!

### Slider'ın Geçiş Hızı
Slider'ın geçiş hızını "speed" ile belirleyebilirsiniz. Milisaniye cinsinden değer alır. (1000 milisaniye = 1 saniye) Varsayılan olarak 4000 milisaniye yani 4 saniyedir. "speed"i kullanmazsanız slider 4 saniyede bir değişecektir.

```
$("#mySlider").selider({
                        'height' : 350, 
                        'width'  : 670,
                        'speed'  : 4000    
});
```

### Sayfalama Tercihi
Eğer Slider'ınızda sayfalama istemiyorsanız "paging"i kullanabilirsiniz. Varsayılan olarak "true" değerini alır ve sayfalama kullanılır, kapatmak isterseniz değeri "false" yapmanız yeterli.

```
$("#mySlider").selider({
                        'height' : 350, 
                        'width'  : 670,
                        'paging'  : true    
});
```

### Aynı sayfada birden fazla slider kullanabilir miyim?
Evet, her slider'a farklı id verip kullanabilirsiniz.
