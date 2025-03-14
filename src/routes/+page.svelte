<script>
    import Zodiak from "./Zodiak.svelte";
</script>

<header class="w-full text-center text-[100px]">Zajn Jasnowidz</header>

<div
    class="h-[700px] text-center p-5 text-2xl font-bold mx-[150px] mt-12"
    style="box-shadow: 12px 12px 26px 2px cyan"
>
    <div class="text-4xl font-bold font-mono text-center">
        Wybierz swój znak zodiaku
    </div>

    <div class="flex flex-wrap">
        <Zodiak
            nazwa="Baran"
            url="baran"
            img="/tile001.png"
            data="21Mar, - 20Kwiet."
        />
        <Zodiak
            nazwa="Byk"
            url="byk"
            img="/tile010.png"
            data="20Kwiet, - 20Maj"
        />
        <Zodiak
            nazwa="Bliźnięta"
            url="bliznieta"
            img="/tile005.png"
            data="21Maj - 21Czer."
        />
        <Zodiak
            nazwa="Rak"
            url="rak"
            img="/tile002.png"
            data="21Czer. - 22Lip."
        />
        <Zodiak
            nazwa="Lew"
            url="lew"
            img="/tile006.png"
            data="23Lip. - 23Sier."
        />
        <Zodiak
            nazwa="Panna"
            url="panna"
            img="/tile011.png"
            data="23Sier. - 23Wrze."
        />
        <Zodiak
            nazwa="Waga"
            url="waga"
            img="/tile007.png"
            data="23Wrze. - 23Paź."
        />
        <Zodiak
            nazwa="Skorpion"
            url="skorpion"
            img="/tile004.png"
            data="23Paź. - 22List."
        />
        <Zodiak
            nazwa="Strzelec"
            url="strzelec"
            img="/tile009.png"
            data="22List. - 21Gru."
        />
        <Zodiak
            nazwa="Koziorożec"
            url="koziorozec"
            img="/tile003.png"
            data="21Gru. - 20Sty."
        />
        <Zodiak
            nazwa="Wodnik"
            url="wodnik"
            img="/tile000.png"
            data="20Sty. - 19Lut."
        />
        <Zodiak
            nazwa="Ryby"
            url="ryby"
            img="/tile008.png"
            data="19Lut. - 20Mar."
        />
    </div>
</div>
<footer
    class="mt-40 bg-black w-full h-[100px] text-neutral-400 text-center text-2xl"
>
    &copy; Copyright
</footer>
