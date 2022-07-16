import { con } from "./connection.js";


export async function inserirVilao(vilao) {
    const comando = 
        `INSERT INTO tb_vilao (id_usuario, nm_vilao, ds_maldades, bt_super_poder)
                       VALUES (?, ?, ?, ?) `
    
    const [resposta] = await con.query(comando, [vilao.usuario, vilao.nome, vilao.maldades, vilao.poder]);
    vilao.id = resposta.insertId;

    return vilao;   
}


export async function listarTodosViloes() {
    const comando =
        `select * from tb_vilao;`;
    
    const [linhas] = await con.query(comando);
    return linhas;
}