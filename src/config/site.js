// ============================================================
//  ✏️  ARQUIVO DE CONFIGURAÇÃO — edite aqui as informações do site
// ============================================================

// Somente números, com DDI+DDD. Exemplo de formato: "55XXXXXXXXXXX"
export const WHATSAPP_NUMBER = ''
export const WHATSAPP_MESSAGE = 'Olá! Vim pelo site da Aline Barber e gostaria de agendar um horário.'

export const INSTAGRAM_URL = 'https://www.instagram.com/alinebarber_gs/'
export const INSTAGRAM_HANDLE = '@alinebarber_gs'

// Foto de fundo da primeira tela (coloque o arquivo em public/images/hero.jpg)
export const HERO_IMAGE = '/images/hero.jpg'

// Endereço e mapa (deixe vazio até ter as informações)
export const ADDRESS = ''            // ex.: 'Rua Exemplo, 123 - Bairro, Cidade/UF'
export const MAPS_EMBED_URL = ''     // Google Maps > Compartilhar > Incorporar mapa > copie o "src"
export const OPENING_HOURS = ''      // ex.: 'Seg a Sáb, 9h às 19h'

// Serviços: troque os textos de exemplo pelos reais. Para adicionar, copie um bloco.
export const SERVICES = [
  { name: 'Nome do serviço 1', description: 'Descrição do serviço.', price: 'R$ --', duration: '-- min' },
  { name: 'Nome do serviço 2', description: 'Descrição do serviço.', price: 'R$ --', duration: '-- min' },
  { name: 'Nome do serviço 3', description: 'Descrição do serviço.', price: 'R$ --', duration: '-- min' },
  { name: 'Nome do serviço 4', description: 'Descrição do serviço.', price: 'R$ --', duration: '-- min' },
]

// Galeria: salve as fotos em public/images/ e preencha "src". Itens sem src mostram um espaço reservado.
export const GALLERY = [
  { src: '', alt: 'Trabalho 1' }, { src: '', alt: 'Trabalho 2' }, { src: '', alt: 'Trabalho 3' },
  { src: '', alt: 'Trabalho 4' }, { src: '', alt: 'Trabalho 5' }, { src: '', alt: 'Trabalho 6' },
]
// Exemplo: { src: '/images/corte-01.jpg', alt: 'Degradê com acabamento' }

export const NAV = [
  ['INÍCIO', '#inicio'], ['SOBRE', '#sobre'], ['SERVIÇOS', '#servicos'],
  ['TRABALHOS', '#trabalhos'], ['INSTAGRAM', '#instagram'], ['CONTATO', '#contato'],
]

export const whatsappLink = () =>
  `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, '')}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
