export interface ClienteNewDTO{
    nome?: string;
    email?: string;
    cpfOuCnpj?: string;
    senha?: string;
    tipoCliente : string;
    logradouro : string;
    numero : string;
    complemento : string;
    bairro : string;
    cep : string;
    telefone1 : string;
    telefone2? : string;
    telefone3? : string;
    cidadeId : string;

}