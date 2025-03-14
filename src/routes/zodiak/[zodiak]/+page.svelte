<header class="w-full text-center text-[100px]">Zajn Jasnowidz</header>

<form
    method="post"
    class="h-[500px] text-center p-5 text-2xl font-mono font-bold max-w-2xl w-full mx-auto mt-12"
    style="box-shadow: 12px 12px 26px 2px cyan"
>
    <section
        class="my-[150px] mt-12 p-5 flex flex-col gap-8"
        style="shadow: 12px 12px 26px 2px cyan"
    >
        <div>
            Podaj swojego maila:
            <input
                type="text"
                class="border text-black outline-none p-1 text-base border-black bg-blue-200 hover:bg-[cyan] transition-colors duration-[4000ms] h-9"
                name="mail"
                required
            />
        </div>
        <div>
            Podaj swoje imie:
            <input
                type="text"
                class="border text-black outline-none p-1 text-base border-black bg-blue-200 hover:bg-[cyan] transition-colors duration-[4000ms] h-9"
                name="imie"
                required
            />
        </div>
        <div>
            Podaj swoje nazwisko:
            <input
                type="text"
                class="border text-black outline-none p-1 text-base border-black bg-blue-200 hover:bg-[cyan] transition-colors duration-[4000ms] h-9"
                name="nazwisko"
                required
            />
        </div>
        <button
            type="submit"
            class="border-2 border-black bg-blue-200 hover:bg-[cyan] transition-colors duration-[4000ms] h-[35px] font-mono text-orange-400 font-bold text-2xl text-center"
        >
            Naciśnij aby skontaktować się z zajnem
        </button>
    </section>
</form>
