export default function pedido(){
    const numeroWhatsapp = '559885713738'; // coloque seu número com DDD

const botoesWhatsapp = document.querySelectorAll('.btn-whatsapp');

botoesWhatsapp.forEach((botao) => {
    botao.addEventListener('click', (event) => {
        event.preventDefault();

        const produto = botao.dataset.produto;
        const descricao = botao.dataset.descricao || '';
        const preco = botao.dataset.preco;

        const mensagem = `
Olá! Tenho interesse no produto:

*${produto}*
${descricao}

Preço: ${preco}

Gostaria de saber mais detalhes sobre disponibilidade e entrega.
`;

        const mensagemFormatada = encodeURIComponent(mensagem);

        window.open(
            `https://wa.me/${numeroWhatsapp}?text=${mensagemFormatada}`,
            '_blank'
        );
    });
});
}
