import { openDB, DBSchema, IDBPDatabase } from 'idb';

interface LaudoDB extends DBSchema {
  inspeções: {
    key: string;
    value: {
      id: string;
      endereco: string;
      data: string;
      status: 'pendente' | 'concluido' | 'sincronizando';
      cliente: string;
      notas?: string;
    };
    indexes: { 'by-status': string };
  };
  fotos: {
    key: string;
    value: {
      id: string;
      InspeçãoId: string;
      blob: Blob;
      comentario?: string;
      comodo: string; // Ex: Cozinha, Sala, Quarto 1
      data: string;
    };
    indexes: { 'by-Inspeção': string };
  };
}

const DATABASE_NAME = 'inspectify-db';
const DATABASE_VERSION = 1;

export async function initDB(): Promise<IDBPDatabase<LaudoDB>> {
  return openDB<LaudoDB>(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      // Tabela de inspeções
      const inspeçõestore = db.createObjectStore('inspeções', {
        keyPath: 'id',
      });
      inspeçõestore.createIndex('by-status', 'status');

      // Tabela de Fotos
      const fotoStore = db.createObjectStore('fotos', {
        keyPath: 'id',
      });
      fotoStore.createIndex('by-Inspeção', 'InspeçãoId');
    },
  });
}

// FunÃ§Ãµes de Acesso (Gatilhos do Bando)
export async function saveInspeção(Inspeção: LaudoDB['inspeções']['value']) {
  const db = await initDB();
  return db.put('inspeções', Inspeção);
}

export async function getinspeções() {
  const db = await initDB();
  return db.getAll('inspeções');
}

export async function saveFoto(foto: LaudoDB['fotos']['value']) {
  const db = await initDB();
  return db.put('fotos', foto);
}

export async function getFotosByInspeção(InspeçãoId: string) {
  const db = await initDB();
  return db.getAllFromIndex('fotos', 'by-Inspeção', InspeçãoId);
}

