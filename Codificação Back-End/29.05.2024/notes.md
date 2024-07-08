<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/script.js"defer></script>
    <title>Heróis Marvel</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <div id="hcont">
            <button onclick="criaLogin()" id="clog">Cadastre-se</button>
            <button onclick="abreTelaLogin()" id="log">Login</button>
            <h1>Loja dos vingadores</h1>
            <a href="#" onclick="calculaCesta()" class="car" img src="imagens/carrinho.png" alt="carrinho de compras">Compras</a>
        </div>
    </header>
    
    <main class="container">
            <section class="products-container">
                <h2>Escolha o(s) personagem(s) e clique em comprar</h2>
                <article class="card">
                    <div class="products-image" id="img-1"></div>
                    <h3>Homem Aranha</h3>
                    <p>Qtd: <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                    <p>R$ <span id="ha" class="bold">78,95</span></p>
                    <a href="https://www.amazon.com.br/Boneco-Marvel-Olympus-Homem-Aranha/dp/B08H6V6XRH" target="_blank">Comprar</a>
                </article>
            <article class="card">
                <div class="products-image" id="img-2"></div>
                <h3>Thor</h3>
                <p> quantidade <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                <p>R$ <span id="thor" class="bold"></span>86,60</p>
                <a onclick="comprarThor()" href="https://www.amazon.com.br/Marvel-Avengers-Titan-Hero-Figura/dp/B0CHZ2J5FQ" target="_blank">Comprar</a>
            </article>
            <article class="card">
                <div class="products-image" id="img-3"></div>
                <h3>Hulk</h3>
                <p> quantidade <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                <p>R$ <span id="hu" class="bold"></span>99,99</p>
                <a onclick="comprarHulk()" href="https://www.amazon.com.br/Boneco-Action-Figure-Titan-Hasbro/dp/B0845MR392" target="_blank">Comprar</a>
            </article>
            <article class="card">
                <div class="products-image" id="img-4"></div>
                <h3>Homem de Ferro</h3>
                <p> quantidade <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                <p>R$ <span id="hf" class="bold"></span>66,63</p>
                <a onclick="comprarHf()" href="https://www.amazon.com.br/Boneco-Marvel-Olympus-Homem-Ferro/dp/B08H788QYD" target="_blank">Comprar</a>
            </article>
            <article class="card">
                <div class="products-image" id="img-5"></div>
                <h3>Capitão américa</h3>
                <p> quantidade <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                <p>R$ <span id="ca" class="bold"></span>71,99</p>
                <a onclick="comprarCa()" href="https://www.amazon.com.br/Boneco-Marvel-Avengers-Figura-Vingadores/dp/B08P21VNBJ" target="_blank">Comprar</a>
            </article>
            <article class="card">
                <div class="products-image" id="img-6"></div>
                <h3>Zoro</h3>
                <p> quantidade <input type="number" value="1" min="1" max="10" id="qtd-1"></p>
                <p>R$ <span id="zoro" class="bold"></span>48,49</p>
                <a onclick="comprarcm()" href="https://www.amazon.com.br/Figure-Action-Zoro-Roronoa-Piece/dp/B094C42WTB" target="_blank">Comprar</a>
            </article>

            </section>
    </main>

    <footer id="rodape">
        <h2>Informações sobre o site</h2>
        <p><span class="bold">Marvel Comics</span> &copy; 2024</p>
    </footer>
</body>
</html>


.products-image{
    height: 300px;
    width: 100%;
    margin-bottom: 10px;
    background-position: center;
    background-size: cover;
    border: 5px solid #3d52a0;
    border-radius: 20px;
}


#img-1{
    background-image: url('/imagens/img1.jpg');
}
#img-2{
    background-image: url('/imagens/img2.jpg');
}
#img-3{
    background-image: url('/imagens/img3.jpg');
}
#img-4{
    background-image: url('/imagens/img4.jpg');
}
#img-5{
    background-image: url('/imagens/img5.jpg');
}
#img-6{
    background-image: url('/imagens/OIP.jpg');
}